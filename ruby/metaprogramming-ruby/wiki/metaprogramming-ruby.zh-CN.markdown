## 第 1 部分 Ruby 元编程(Metaprogramming Ruby)

### Ruby 对象模型关系

```code
              (Object.class #=>Class)     superclass
                Object    <-----  Module
      class        ^                |
obj1 -------|      |supclass        |superclass
            --> MyClass ---------> Class(Class.class #=>Cclass)
obj2 -------|            class
      class
```

#### Kernel 模块

如果给 Kernel 模块增加一个方法，这个*内核方法(Kernel Method)*就对所有的对象可用。

私有方法不能明确指定一个接收者来调用一个私有方法。

在 class 中，如果调用方法不是你自己则必须明确指定一个接收者；私有方法只能被隐含接收者调用。

```ruby
class C
  def public_method
   self.private_method
  end

  private
  def private_method;end
end
 => nil
C.new.public_method
NoMethodError: private method `private_method' called for #<C:0xc5b7f28>
#
```

* 当调用一个方法时，接收者会扮演 self 的角色。
* 当定义一个模块(或者类)时，该模块扮演 self 的角色。
* 实例变量永远都被认为 self 的实例变量。

### 方法(Methods)

通过 `send()` 方法，你想调用的方法名成为一个参数，这样就可以在代码运行期期间，直到最后一刻才决定调用哪个方法。

一些 Ruby 主义者认为 `send()` 方法太容易破坏对象封装性了，在 Ruby 1.9 中，曾经尝试修改 `send()` 方法的行为，但是最终还是恢复回来了。在 Ruby 1.9.1 中， `send()` 仍然可以调用私有方法——许多库就是特意使用这个特性来实现某些功能的。不过新增了一个 `publi_send()` 方法，这个方法会尊重接收者的隐私权。

#### 动态定义方法

```ruby
class MyClass
  define_method :my_method do |my_arg|
    my_arg * 3
  end

  class_eval do
    def my_method(my_arg)
      my_arg * 3
    end
  end

  class_eval <<-Code# delimiters can be indented
    def my_method(my_arg)
      my_arg * 3
    end
  Code

  def attr_accessor_with_history(attr_name)
     attr_name = attr_name.to_s # make sure it's a string
     attr_reader attr_name
     attr_reader attr_name+"_history"
     class_eval %Q"
         def #{attr_name}=(value)
             if !defined? @#{attr_name}_history
                 @#{attr_name}_history = [@#{attr_name}]
             end
             @#{attr_name} = value
             @#{attr_name}_history << value
         end
     "
  end
end
```

例如：

```ruby
class Computer
  def initialize(computer_id,data_source)
    @id = computer_id
    @data_source = data_source
  end

  def self.define_component(name)
    define_method(name){
      info = @data_source.send "get_#{name}_info", @id
      price = @data_source.send "get_#{name}_price", @id
      result = "#{name.to_s.capitalize}: #{info} ($#{price})"
      (price >=100) ? " * " << result : result
    }
  end

  [:mouse, :cpu, :keyboard].collect{|name| define_component name}

end
```

### 幽灵方法(Ghost Methods)

被 `method_missing()` 方法处理的消息，从调用的角度看，跟普通方法没有区别，但实际上接收者并没有相应的方法。这被成为*幽灵方法(Ghost Methods)*。，覆写 `method_missing()` 方法使得你可以调用实际上并不存在的方法。

### 代码块(Blocks)

```ruby
def a_method(a,b)
  a + yield(a,b)
end

a_method(1,2) #LocalJumpError: no block given (yield)
a_method(1,2) {|x,y| (x+y) * 3} # => 10
a_method(1,2){|x,y| x}          # => 2
def a_method(a,b)
  if block_given?
    a + yield(a,b)
  else
    %q(no block give !)
  end
end
a_method(1,2)     # => "no block give !"
```

### 闭包(Closures)

```ruby
def my_method
  x = "Goodbye"
  yield("cruel")
end

x = "Hello"
my_method {|y| "#{x}, #{y} world"} # => "Hello, cruel world"
```

当创建块时会获取到局部绑定(比如上面的 `x`),然后把块连同它自己的绑定传定给一个方法。上面例子中方法中的 `x` 对这个块来说是不可见的。

#### 作用域

上面例子中定义了两个内核方法(`send()` 动态派发地技术来访问 Kernel 的 `define_method`)。`Kernel#counter`和`Kernel#inc`都可以看到 `shared` 变量，而其他方法则看不到。这种共享变量的技巧被称为 *共享作用域(Shared Scope)*。


```ruby
Class C
  def initialize
    @x, @y = 1, 2
  end
end

C.new.instance_exec(3) {|arg| (@x + @y) * 3}  # => 9
```



块局部变量：块内部可以定义局部变量，在块执行结束后会消失。 

切换作用域
Ruby 中一旦进入一个新的作用域，原先的绑定就会被替换为一组新的绑定，原先的作用域就超出范围，完全不可见了。
一个对象调用同一对象中的其他方法，实例变量在调用过程中始终存在于作用域中。由此我们知道实例变量为什么要加个 `@` 了，它同普通变量不同。
作用域门
程序会在三个地方关闭前一个作用域，同时打开一个新的作用域。
类定义： **class**
模块定义：**module**
方法： **def**
只要程序见到以上三个关键字：`class`、`module`、`def`，就意味着进入了一个新的作用域，之前的作用域将不可见。

**如上可见，普通变量是无法穿越作用域门的。**要想在不同作用域间共享变量，有两个办法：全局变量(`$`打头的变量) 跟 顶级实例变量（`@`打头的变量）。
但顶级实例变量在 `self` 发生改变时，会退出作用域。 
**`class/module` 与 `def` 之间的区别：**`class/module` 中代码会立即执行,`def` 中的代码只有被调用时才会执行。因此 反复调用同一方法时，我们得到的是不同的作用域，当然该作用域在方法调用结束时消失。 

##### 扁平化作用域

`class`、`module`、`def` 是普通变量无法逾越的藩篱，如何让普通变量穿越作用域呢？哈，我们取消这三个关键字，用方法调用取代就可以了。
`class MyClass` 可以改写成 `MyClass = Class.new do ... end`
`module MyModule` 可以改写成 `MyModule = Module.new do ... end`
`def my_method` 可以改写成 `define_method :my_method do ... end`
 
方法调用不会开启新的作用域，我们依然处于当前作用域中，所有变量自然可以为我所用。这就叫**扁平化作用域**。

#### 共享作用域

如果想在一组方法间共享一个变量，而且不希望其它方法能够访问。那么我们可以将这一组方法放入一个扁平化作用域中，然后用 class、module或 def加以保护。


```ruby
def define_methods
  shared = 0

  Kernel.send :define_method, :counter do
    shared
  end

  Kernel.send :define_method, :inc do |x|
    shared += x
  end
end

define_methods

counter
inc(4)
counter
```

###### 3.4 instance_eval()  p83

```ruby
v = 2
obj.instance_eval {@v = v}
obj.instance_eval {@v} # =>2
```

通过 `instance_eval` 可以将一个对象的的作用域暴露在当前作用域中，同时改变 `self` ；因此上面代码中我们既可以访问 `v`，也可以访问 `@v`。
Ruby 1.9 中引入了 `instance_exec` ：同 `instance_eval` 功能相似，但它允许对块传入参数。 

#### 3.5 可调用对象 p86

有三种方法可以打包代码
使用 `proc`
使用 `lambda`
使用方法

#### Proc

Ruby 在标准库中提供了名为 Proc 的类。一个 Proc 就是一个转换成对象的块，可以通过把块传递给 `Proc.new` 方法来创建一个 Proc。以后就可以用 `Proc#call()` 来执行这个由块转换而来的对象。

```ruby
inc = Proc.new {|x| x + 1}
inc.call(2) # => 3
```

这种方法成为 *延迟执行(Deferred Evaluation)*。

Ruby 还提供了两个*内核方法(Kernel Method)* 把块转换为 `Proc:lambda()` 和 `proc()`。`lambda()`, `proc()`, `Proc.new` 这三种方式之间有一些细微的差别，但在绝大多数情况下，你可以随便挑一个最喜欢的方式。

```ruby
dec = lambda {|x| x-1}
dec.class #=>proc
dec.call(2) #=>1 
```

#### &操作符

```ruby
def math(a,b)
    yield(a,b)
end 

def teach_math(a,b,&operation)
    puts "let's do the math :"
    puts math(a,b,&operation)
end

teach_match(2,3) {|x,y| x*y}

=> let's do the math:
6
```

&operation 表示这是一个代码块，operation 表示这是一个 Proc 对象。

```ruby
def my_method(&the_proc)
  the_proc
end

p = my_method {|name| "Hello, #{name}!"}
puts p.class # => Proc
puts p.call("Bill")  # => Hello, Bill!

def my_method(greeting)
  puts "#{greeting}, #{yield}!"
end
my_proc = proc { "Bill" }
my_method("Hello", &my_proc) #Hello, Bill! => nil
```

#### proc 与 lambda 和 return (proc 与 lambda的 return 关键字)

**return** 行为不同：块和 `proc` 从其被定义的作用域返回，往往是顶级作用域；`lambda` 和方法从其本身返回。因此 `proc` 最好不要用显式的 `return` 语句。
接受参数能力不同：`proc` 允许传入参数不规范，可多可少；`lambda` 必须同定义参数完全一致，否则会报错。
整体而言，**lambda** 更直观，更像是一个方法，因此很多 Ruby 使用者首选 lambda。

自己写了段小程序，做下测试：

```ruby
def test (&input) 
    puts input.call 
    puts yield #这里是执行的 block，并非 lambda ，所以 return 语句会报错，试图从顶级作用域 返回 
end 
l = lambda { return 'hello'} 
test(&l)
```

`Kernel#proc()` 在 Ruby1.9 中，是 `Proc.new()` 的别名。我们还是只使用 `Proc.new()` 或者 `lambda()` 吧，省的搞混。

##### 简洁 lambda

```ruby
p = –>(x) { x + 1 } 等价于
p = lambda {|x| x+1}
```

##### 重访方法

```ruby
class MyClass
  def initialize(value)
    @x = value
  end
  
  def my_method
    @x
  end
end

object = MyClass.new(1)
m = object.method :my_method
m.call

unbound = m.unbind
another_object = MyClass.new(2)
m = unbound.bind(another_object)
m.call
```

#### 可调用对象小结

可调用对象是可以执行的代码片段，而且它们有自己的作用域。可调用对象有以下几种形式。

1. **块** (虽然它们不是真正的“对象”，但是它们是“可调用的”)：在定义它们的作用域中执行。
1. **proc**: `Proc` 类的对象，跟块一样，它们在定义自身的作用域中执行。
1. **lambda**: 也是 `Proc` 类的对象，但它们跟普通的 proc有细微的差别。它们跟块一样都是闭包，因此也在定义自身的作用域中执行。
1. **方法**: 绑定于对象，在所绑定对象的作用域中执行。它们也可以于这个作用域解除绑定，在重新绑定到另一个对象的作用域上。

### 星期四：类定义 Class Definitions

#### 前言

1、定义类实际上是在运行一段普通的代码
2、本章关注：类宏(Class Macro)、环绕别名(Around Alias)、单件类(singleton class or eigenclass)

#### 4.1 类定义揭秘

1. 可以在类定义中加入任何代码，因为我们实际上是在运行类定义。跟方法和块一样，类定义也会返回最后一条语句的值。
1. 在类定义中，类本身充当了当前对象 self 的角色。

##### 当前类

1. 无论身处程序何处，我们知道总有一个当前对象：`self`。同样也总有一个当前类存在。当定义一个方法时，该方法将成为当前类的一个实例方法。
1. 一般我们是通过 `class` 、`module` 关键字来判断当前类的，这需要知道类名或模块名。如果不知道类名，我们可以使用 `class_eval()`。

###### class_eval()

1. **Module#class_eval()** 方法（或其别名 `module_eval()` ） 会在一个已存在类的上下文中执行一个块：
1. **Module#class_eval()** 和 **Object#instance_eval()** 方法截然不同。 `instance_eval()` 方法仅仅会修改 `self`，而 `class_eval()` 方法会同时修改 self 和当前类。
1. 修改当前类，`class_eval()` 实际上是重新打开了该类，就像 `class` 关键字所做的一样。
1. `class` 关键字会开启一个新的作用域，而 `class_eval()` 方法则使用扁平作用域。

###### 当前类及其特殊情况

```ruby
class MyClass
    def method_one
        def method_two; 'hello'; end
    end
end

obj = MyClass.new

obj.method_one
obj.method_two # => 'hello'
```

1. 因为定义 `method_two` 时，当前类的角色由 self 的类来充当，就是 MyClass ；所以我们得到如上结果
1. 同理：当我们位于顶级作用域时。当前类是 Object --- 就是 main 对象的类，所以在顶级作用域中定义方法的时候，这个方法会成为 Object 类的实例方法。

##### 当前类小结

1. 类定义中，当前对象 `self` 就是正在定义的类（即当前对象就是当前类）。
1. Ruby 总是追踪当前类的引用。所有使用 `def` 定义的方法都会成为当前类的实例方法。
1. 如果有一个类的引用，则可以使用 `class_eval()` 方法打开这个类。

##### 类实例变量

看下面这个例子就一目了然了 

```ruby
class MyClass
    @my_var = 1 # 这是一个类实例变量，因为此时 self 是 MyClass
    
    def self.read; @my_var; end # 这是一个类方法，所以可以访问类实例变量
    def write;@my_var = 2; end # 这是实例方法，实例对象会作为 self传入该方法，因此只能访问该 obj 的实例变量。
    def read; @my_var; end
end 

obj = MyClass.new
obj.write
obj.read # => 2
MyClass.read # =>1 ；类实例变量，只能通过类方法访问，因为此时的 self 是 MyClass。
```

##### 类变量

一句话，尽量避免使用类变量，多用类实例变量。

```ruby
class C
  @@v = 1
end
  
class D < C
  def my_method; @@v; end
end

D.new.my_method # => 1
```

类变量有一个很不好的习惯

```ruby
@@v = 1 

Class MyClass
  @@v = 2
end

@@v # => 2
```

#### 4.3 单件方法

只针对单个对象生效的方法称为:**单件方法**.

```ruby
str = "just a regular string"
def str.title?
	self.upcase == self
end

str.title? # => false
str.methods.grep(/title?/) # => ["title?"]
str.singleton_methods # => ["title?"]
```

关于类方法的真相

类方法的实质就是：它们是一个类的单件方法。实际上，如果比较单件方法的定义和类方法的定义，则会发现它们是一样的。

```ruby
an_object.a_method
AClass.a_class_method
```

#### 类宏

像 `attr_accessor()` 这样的方法称为类宏。虽然看起来像关键字，但它们只是普通的方法。
`attr_accessor` 是用 C语言写的，松本行弘给出了一个 Ruby 版的示例：

```ruby
class Module
    def attr_accessor(*syms)
        syms.each do |sym|
            class_eval %{
                def #{sym}
                    @#{sym}
                end                
                def #{sym}={val}
                    @#{sym}=val
                end
            }
        end
    end
end
```

下面还有一个类似的例子：

```ruby
# File lib/spec/rake/spectask.rb, line 58
def self.attr_accessor(*names)
  super(*names)
  names.each do |name|
    module_eval "def #{name}() evaluate(@#{name}) end" # Allows use of procs
  end
end
```

##### 应用类宏

将旧的方法通过类宏代理至新的方法

```ruby
class Book
    def title # ...
    def subtitle # ...
    def lend_to(user)
    puts "Lending to #{user}"
    # ...
    
    def self.deprecate(old_method, new_method)
        define_method(old_method) do |*args, &block|
            warn "Warning: #{old_method}() is deprecated. Use #{new_method}()."
            send(new_method, *args, &block)
        end
    end
    
    deprecate :GetTitle, :title
    deprecate :LEND_TO_USER, :lend_to
    deprecate :title2, :subtitle
end
```

##### 4.4 Eigenclass

单件方法到底存放在哪里??
对象本身是不可能的，对象的类也是不可能的。
揭秘 eigenclass

```code
当你向一个对象索要它的类时，Ruby 并没有告诉你全部真相。除了你所看到的类以外，对象还有一个此对象独有的，特殊的隐藏类。这个类称为该对象的 eigenclass。
```

对于这个特殊的 eigenclass 类，我们可以这样获取：

```ruby
obj = Object.new
eigenclass = class << obj
  self
end

eigenclass.class # => Class
```

eigenclass 是一个对象的单件方法的存活之所:

```ruby
def obj.my_singleton_method; end
eigenclass.instance_methods.grep(/my_/) # => ["my_singleton_method"]
```

#### 类方法的语法

```ruby
class MyClass
  def self.my_method; end
end

def MyClass.my_other_method; end

class MyClass
  class << self
    def my_method; end
  end
end
```

#### eigenclass 和继承

##### 二次元

eigenclass 是类,类是对象,对象有 eigenclass，像其它对象一样，eigenclass 也有自己的 eigenclass:

```ruby
class << "abc"
  class << self
    self # => #<Class:#<Class:#<String:0x00000001994b38>>> 
  end
end
```

#### 大统一理论

把 eigenclass, 普通类和模块放到一起, Ruby对象模型可以总结为 7条规则:

1. 只有一种对象---要么是普通的对象, 要么是模块.
2. 只有一种模块---可以是普通模块, 类, eigenclass 或者代理类.
3. 只有一个方法, 他存在于一种模块中---通常是类中。
4. 每个对象(包括类)都有自己的"真正的类"---要么是普通类，要么是 eigenclass.
5. 除了 BasicObject 类(在 Ruby 1.8 中是 Ojbect 类)无超类外，每个类有且只有一个超类。这意味着从任何类只有一条向上直到 BasicObject 的祖先链.
6. 一个**对象**的 eigenclass 的超类是这个对象的类;一个类的 eigenclass 的超类是这个类的超类的 eigenclass.(eigenclass 就是这个类的专属领域)
7. 当调用一个方法, Ruby 先向右进入接收者真正的类, 然后向上进入祖先链.

#### 类属性

给对象创建属性:

```ruby
class MyClass
  attr_accessor :a
end

obj = MyClass.new
obj.a = 2
obj.a # => 2
```

给类创建属性(但是会给所有的类都添加这个属性):

```ruby
class MyClass; end

class Class
 attr_accessor :b
end

MyClass.b = 42
MyClass.b # => 42
```

如果你希望添加专属于 MyClass 的属性,就涉及到 eigenclass():

```ruby
class MyClass
  class << self
    attr_accessor :c
  end
end

MyClass.c = "It's works!"
MyClass.c # => "It's works!"
```

#### 模块的麻烦

通过包含模块来定义类方法.

```module
module MyModule
  def self.my_method; 'hello'; end
end

class MyClass
  include MyModule
end

MyClass.my_method # NoMethodError!
```

因为当类包含模块时, 它获得的是该模块的实例方法---而不是类方法。

#### Solution

首先定义 my_method() 方法，把它作为 MyModule 的一个普通实例方法。接着在 MyClass 的 eigenclass 中包含模块。

```ruby
module MyModule
  def my_method;  'hello'; end
end

class MyClass
  class << self
    include MyModule
  end
  def abc
    puts 'abc'
  end
end

MyClass.my_method  # => "hello"
MyClass.new.singleton_class.instance_methods.grep /abc/ # => [:abc]
MyClass.singleton_class.instance_methods.grep /my_method/ # => [:my_method]
MyClass.new.singleton_class.singleton_methods # => [:my_method]
```

my_method() 方法是 MyClass 的 eigenclass 的一个实例方法,这样, my_method() 也是 MyClass 的一个类方法.这种技术称为**类扩展(Class Extension)**.

#### 类方法和 include() 以及 Object#extend

重温类扩展,可以通过把模块混合到类的 eigenclass 中来定义类方法。类方法其实是单件方法的特例，因此你可以把这种技巧推广到任意对象. 一般情况下这种技术称为**对象扩展(Object Extension)**.

```ruby
module MyModule
  def my_method: 'hello'; end
end

obj = Object.new
class << obj
  include MyModule
end

obj.my_method         # => "hello"
obj.singleton_methods # => [:my_method]
```

```ruby
module MyModule
  def my_method: 'hello'; end
end

obj = Object.new
obj.extend MyModule
obj.my_method         # => "hello"

class MyClass
  extend MyModule
end

MyClass.my_method     # => "hello"
```


#### 方法别名

`alias` 是关键字关键字,因此两个方法名之间没有逗号。

```ruby
class MyClass
  def my_method; "my_method()"; end
  alias :m :my_method
end

obj = MyClass.new
obj.my_method  # => "my_method()"
obj.m          # => "my_method()"
```

#### 环绕别名

[around+alias](http://gemclips.wikispaces.com/around+alias)
通过对方法进行别名处理,用原来的方法名做另外的事情.
1.对原方法定义一个别名
2.重新定义(旧的方法名的,返回值为重定义方法的值)方法
3.在重新定义的方法里面使用老的(新的方法名的,返回值为原始值)方法

```ruby
class String
  #alias :real_length :length
  
  def length
    real_length > 5 ? 'long' : 'short'
  end
end

'War and Peace'.length    # => "long"
'War and Peace'.real_length    # => 13
```

**两条警告**

  *. 环绕别名是一个**猴子补丁**,你可能会破坏原来的方法。
  *. 不能把一个环绕别名加载两次.会出现程序崩溃。(SystemStackError: stack level too deep)


#### 编写代码的代码


##### target

基于 attr_accessor(), 创造一个自己的宏类(attr_checked())其功能与 attr_accessor() 相似,但是仅仅会创建有效的的属性(接收一个属性名和一个块，并且用这个块来进行校验如果校验不通过则会抛出异常)。

##### 开发计划

1. 使用 eval() 编写一个名为 add_checked_attribute() 的内核方法，为类添加一个最简单的经过校验的属性.
2. 重构 add_checked_attribute() 方法，去掉 eval().
3. 通过块来校验属性.
4. 将 add_checked_attribute() 改名为 attr_checked() 方法.
5. 写一个模块，通过钩子方法为指定的类添加 attr_checked() 方法.

##### 5.2 Kernel#eval

除了 instance_eval() 和 class_eval() 这里是 *eval 家族的第三个成员--- eval() 方法(它是一个**内核方法**). eval()直接使用包含 Ruby 代码的字符串---简称为**代码字符串(String of Code)**.Kernel#eval() 会执行字符串中的代码，并返回执行结果.

```ruby
array = [10, 20]
element = 30
eval("array << element")
```
