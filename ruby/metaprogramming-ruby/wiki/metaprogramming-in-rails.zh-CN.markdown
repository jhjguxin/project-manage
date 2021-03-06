## Part II Metaprogramming in Rails

### ActiveRecord 的设计

#### ActiveRecord::Base

[source code](https://github.com/rails/rails/blob/8dbf337e0a7e4db521aa2f5f992609fae98c329e/activerecord/lib/active_record.rb)

[api](http://api.rubyonrails.org/classes/ActiveRecord/Base.html)


#### alias_method_chain() 方法

```ruby
class MyClass
  def greet
    puts 'hello'
  end
end

MyClass.new.greet
hello
 => nil 
 
class MyClass
  def greet_with_log
    puts "Calling method ..."
    greet_without_log
    puts "... Method called"
  end
  
  alias_method :greet_without_log, :greet
  alias_method :greet, :greet_with_log
end

MyClass.new.greet
Calling method ...
hello
... Method called
 => nil 
MyClass.new.greet_with_log
Calling method ...
hello
... Method called
 => nil 
MyClass.new.greet_without_log
hello
 => nil 
```

定义了一个名为 greet_with_log() 的新方法,并为其取了一个  greet() 的别名。过去调用 greet() 方法的代码仍然会正常工作. 但将会获得新的日志打印能力。还为原始的方法取了一个别名, 因此如果你愿意, 还可以调用 greet_without_log() 方法.

#### description from api

Encapsulates(封装) the common pattern(模式) of:

```ruby
alias_method :foo_without_feature, :foo
alias_method :foo, :foo_with_feature
```

With this, you simply do:

```ruby
alias_method_chain :foo, :feature
```

And both aliases are set up for you.

Query and bang methods (`foo?`, `foo!`) keep the same punctuation:

```ruby
alias_method_chain :foo?, :feature
```

is equivalent to

```ruby
alias_method :foo_without_feature?, :foo?
alias_method :foo?, :foo_with_feature?
```

so you can safely chain `foo`, `foo?`, and `foo!` with the same feature.

##### Validation stand alone

ActiveRecord::Base 类, 是由松耦合, 相对简单, 易于测试和复用的模块组成.

```ruby
#rails/modules.rb
require 'activerecord'

ActiveRecord::Base

class MyClass
  def save; end
  def save!; end
  def new_record?; true; end
  
  include ActiveRecord::Validations
  
  attr_accessor :attr
  validates_length_of :attr, :minimum => 4
end

obj = MyClass.new
obj.attr = "test"
obj.valid?         # => true
obj.attr = "tst"
obj.valid?         # => false
```

#### 深入 ActiveRecord

动态属性(dynamic attribute) 动态查找器(dynamic finder)

##### 动态属性

[ActiveModel::AttributeMethods#method_missing](https://github.com/rails/rails/blob/0052d90f207af6f1b8cf2f9dd455869fa9f01450/activemodel/lib/active_model/attribute_methods.rb#L402)

#### ActiveModel::MassAssignmentSecurity::ClassMethods

Mass assignment security provides an interface for protecting attributes from end-user assignment. For more complex permissions, mass assignment security may be handled outside the model by extending a non-ActiveRecord class, such as a controller, with this behavior.

[ActiveModel::MassAssignmentSecurity::ClassMethods](http://api.rubyonrails.org/classes/ActiveModel/MassAssignmentSecurity/ClassMethods.html)

[ActiveRecord::FinderMethods](http://api.rubyonrails.org/classes/ActiveRecord/FinderMethods.html)

[ActiveRecord::QueryMethods](http://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html)

#### 安全元编程 Metaprogramming Safely

* 可信的单元测试是抵抗元编程 bug 的第一道防线.
* 让猴子补丁明显一些, 防止(无意识的)猴子补丁.
  
#### Rake 怎样防止猴子补丁

Rake 是 Ruby 流行的构建系统, 它可以通过一个名为 Module#rake_extension() 的**类宏**来防止无意识的**猴子补丁**.

```ruby
class Module
  def rake_extension(method)
    if method_defined?(method)
      $stderr.puts "WARNING: Possible conflict with Rake extension:\"#{self}##{method}\" already exists"
    else
      yield
    end
  end
end
```

Rake 在它想**打开类**来添加方法时, 会使用 rake_extension() 方法:

```ruby
class String
  rake_extension("ext") do
    def ext(newext = '')
      # ...
    end
  end
  
  rake_extension("pathmap") do
    def pathmap(spec = nil, &block)
      # ...
    end
  end
end
```

#### 常见惯用法 Common Idioms


##### 属性的问题

```ruby
class MyClass
  attr_accessor :my_attr

  def initialize_attributes
    my_attr = 10 # 这里的 my_attr 只是一个 initialize_attributes 作用域内的局部变量
  end
end

obj = MyClass.new
obj.initialize_attributes
obj.my_attr                # => nil

class MyClass
  def initialize_attributes
    self.my_attr = 10
  end
end

obj.initialize_attributes
obj.my_attr                # => 10
```

##### 空指针保护 Nil Guards

```ruby
a || = []  # eq a = a || [] # bool(false) 赋值需要注意
```

##### 关于方法参数的技巧 Tricks with Method Arguments

###### Named Arguments 具名参数

```ruby
def test_arg(a,b,c)
  puts "a: #{a}, b: #{b}, c: #{c}"
end
test_arg 1, 23, 3         # => a: 1, b: 23, c: 3
test_arg b = 1, a = 23, 3   # => a: 1, b: 23, c: 3
test_arg a = 1, b = 23     #ArgumentError: wrong number of arguments (2 for 3)

def test_arg1(params, *args, &block)
  puts "params: #{params}\n args: #{args}"
  yield
end

test_arg1({b: 3}, c =1, d = 2) do; puts "I'm a block"; end
#params: {:b=>3}
# args: [1, 2]
#I'm a block
# => nil

def test_arg1(params, *args, &block)
  puts "params: #{params}\n args: #{args}"
  #yield
end

test_arg1 {a: 1}, c =1, d = 2
#SyntaxError: (irb):138: syntax error, unexpected ':', expecting '}

test_arg1 params1231 = {a: 123}, c =1, d = 2
#params: {:a=>123}
# args: [1, 2]
```

#### Self Yield

把对象self 作为参数传递给块.

##### 来自 RubyGems 的例子

```ruby
# 常规类实例属性赋值
spec = Gem::Specification.new
spec.name = "My Gem name"
spec.version = "0.0.1"
```

```ruby
spec = Gem::Specification.new do |s|
  s.name = "My Gem name"
  s.version = "0.0.1"
  # ...
end

module Gem
  class Specification
    def initialize
      yield self if block_given?
      # ...
    end
  end
end
```

##### Symbol#to_proc() 方法

```ruby
names = ['bob', 'bill', 'heather']
names.map {|name| name.capitalize} # => ["Bob", "Bill", "Heather"]
names.map(&:capitalize) # => ["Bob", "Bill", "Heather"]
```

这是一个简单的 "一次调用块(one-call-block)", 它只有一个参数, 并且只有一个参数, 并且对这个参数只调用一个方法。

```ruby
def proc_test
  Proc.new {|x| puts "x: #{x}, self: #{self}"}
end
def use_proc(&block)
  yield
end
use_proc &proc_test  # x: , self: main
use_proc {|x| puts "x: #{x}, self: #{self}"}
def use_proc(&block)
  yield 11
end
use_proc &proc_test  # x: 11, self: main
def use_proc(&block)
  yield self
end
use_proc &proc_test  # x: 11, self: main

class Symbol
  def to_proc
    Proc.new {|x| x.send(self)}  # x 传入块的参数, self 
  end
end
```

& 作用于任何对象, 它会调用该对象的 to_proc 把这个对象转换为 Proc.

#### 法术手册 Spell Book

* Argument Array

```ruby
def my_method(*args)
  #args.map{|arg| arg.reverse}
  args.map(&:reverse)
end

my_method('abc','xzy','123')
```

* Around Alias

```ruby
class String
  alias :old_reverse :reverse
  
  def reverse
    "x#{old_reverse}x"
  end
end

"asdf".reverse     # => "xfdsax" 
"asdf".old_reverse # => "fdsa" 
```

* Blank Slate

```ruby
class C
  def method_missing(name, *args)
    "a Ghost Method"
  end
end

obj = C.new
obj.to_      # => "a Ghost Method" 
obj.to_s     # => "a Ghost Method" 

class C
  instance_methods.each do |m|
    undef_method unless m.to_s =~ /method_missing|respond_to?|^/
  end
end
obj.to_      # => "a Ghost Method" 
obj.to_s     # => "#<C:0xc66c5a4>"
```

* 类扩展 Class Extension

通过向类的 eigenclass 中混入模块来定义方法(是对象扩展的特例)

```ruby
class C;end

module M
  def my_method
    'a class method'
  end
end

class << c
  include M
end
# C.extend M

C.my_method   #=> 'a class method'
```

* 类扩展混入 Class Extension Mixin

使一个模块可以通过**钩子方法**扩展他的包含者.

```ruby
module M
  def self.indented(base)
    base.extend(ClassMethods)
  end

  module ClassMethods
    def my_method
      'a class method'
    end
  end
end

class C
  include M
end
C.my_method   #=> 'a class method'
```

* 类实例变量 Class Instance Variable

在一个 Class 对象的实例中存储类级别的状态

```ruby
class C
  @my_class_instance_variable = "some value"
  
  def self.class_attribute
    @my_class_instance_variable
  end
end

C.class_attribute # => "some value"
```

* 类宏 Class Macro

在类中使用一个类方法

```ruby
class C;end

class << C
  def my_macro(arg)
    "my_macro(#arg}) called"
  end
end

class C
  my_macro :x
end
# => "my_macro(#arg}) called"
```

* 洁净室 Clean Room

使用对象作为执行块的上下文环境

```ruby
class CleanRoom
  def a_useful_method(x); x*2;end
end

Clean.new.instance_eval{a_useful_method(3)}  # => 6
```

* 代码处理器 Code Processor

处理从外部获得的字符串代码

```ruby
File.readlines("a_file_containing_lines_of_ruby.txt").each do |line|
  puts "#{line.chomp} ==> #{eval(line)}"
end

#>>1+1==>2
```

* 上下文探针 Context Probe

执行块来获取对象上下文中的信息

```ruby
class C
  def initialize
    @x = "a private instance variable"
  end
end

obj = C.new
obj.instance_eval{@x}  #=> "a private instance variable"
```

* 延迟执行 Deferred Evaluation

在 proc 或 lambda 中存储一段代码及其上下文, 用于以后执行.

```ruby
class C
  def store(&block)
    @my_code_capsule = block
  end
  
  def execute
    @my_code_capsule.call
  end
end

obj = C.new
obj.store{$X=1}
$X # => nil
obj.execute
$X # =>1
```

* 动态派发 Dynamic Dispatch

在运行时决定调用哪个方法

```ruby
method_to_call = :reverse
obj = "acb"

obj.send method_to_call # => "bca"
```

* 动态方法 Dynamic Method

在运行时才决定如何定义一个方法

```ruby
class C
end

C.class_eval do
  define_method :my_method do
    "a dynamic method"
  end
end

obj = C.new
obj.my_method # => "a dynamic method"
```

* Proc#new and proc

new()
  Creates a new **Proc** object, bound to the current context. `Proc::new` may be called without a block only within a method with an attached block, in which case that block is converted to the Proc object.

  ```ruby
  def proc_from
    Proc.new
  end
  proc = proc_from { "hello" }
  proc.call   #=> "hello"
  ```

proc

  A **Proc** object generated by `proc` ignores extra arguments.

  ```ruby
  proc {|a,b| [a,b] }.call(1,2,3)    #=> [1,2]
  ```

  It provides `nil` for missing arguments.
  
  ```ruby
  proc {|a,b| [a,b] }.call(1)        #=> [1,nil]
  ```
  
lambda

  A Proc object generated by lambda doesn’t have such tricks.
  
  ```ruby
  lambda {|a,b| [a,b] }.call(1,2,3)  #=> ArgumentError
  lambda {|a,b| [a,b] }.call(1)      #=> ArgumentError
  lambda {|a,b| [a,b] }.call([1,2])  #=> ArgumentError
  ```
  
* 动态代理 Dynamic Proxy

把不能对应某个方法名的消息转发给另外一个对象

```ruby
def two_method(name, *args, &block)
  puts "call two_method"
  puts "name: #{name}"
  puts "args: #{args}"
  if block_given?
    puts "call block #{block} ..."
    #yield
    block.call
  end
  puts "two method is called"
end

def one_method(name, *args, &block)
  puts "call one_method"
  puts "name: #{name}, args: #{args}, block: #{block}"
  two_method(name, *args, &block)
  puts "one method is called"
end

block = proc { p "the block"}
args = [ 1, 2 , b=3]
one_method "name", *args, &block
one_method "name", a = 1,2,c=3, &block
one_method "name", args, block

class MyDynamicProxy
  def initialize(target)
    @target = target
  end
  
  block = proc {x = 1}  #one block must been supplied
  def method_missing(name, *args, &block)
    puts "name: #{name}, args: #{args}, block: #{block}"
    # 这里必须要求根据不同的方法传入相应的参数否则会抛出异常
    "result:#{@target.send(name, *args, &block)}"
  end
end

obj = MyDynamicProxy.new("a string")
obj.reverse(b=123,c={}) do; x =1; end
obj.reverse # => "result:gnirts a"
```

* 扁平作用域 Flat Scope

使用闭包在两个作用域之间共享变量

```ruby
class C
  def an_attribute
    @attr
  end
end

obj = C.new
a_variable = 100

#flatscope
obj.instance_eval do
  @attr = a_variable
end

obj.an_attribute # => 100
```

* 幽灵方法 Ghost Method

响应一个没有关联方法的消息

```ruby
class C
  def method_missing(name,*args)
    name.to_s.reverse
  end
end

obj = C.new
obj.my_ghost_method # => "dohtem_tsohg_ym"
```

* 钩子方法 Hook Method

```ruby
$INHERITORS = []
class C
  def self.inherited(subclass)
    $INHERITORS << subclass
  end
end

class D < C;end
class E < C;end
class F < E;end
$INHERITORS  # => [D, E, F] 
```

* 内核方法 Kernel Method

在 Kernel 模块中定义一个方法, 使之对所有对象都可用

```ruby
module Kernel
  def a_method
    "a kernel method"
  end
end

a_method   # => "a kernel method"
```

* 惰性实例变量 Lazy Instance Variable

当第一次访问一个实例变量时才对之进行初始化

```ruby
class C
  def attribute
    @attribute = @attribute || "some value"
  end
end

obj = C.new
obj.attribute    # => "some value"
```

* 拟态方法 Mimic Method

把一个方法伪装成另外一种语言构件

```ruby
def BaseClass(name)
  name == "string" ? String : Object
end

class C < BaseClass("string")  # 一个看起来像类的方法
  attr_accessor :an_attribute  # 一个看起来像关键字的方法
end

obj = C.new
obj.an_attribute = 1 # => 一个看起来像属性的方法
```

* 猴子补丁 Monkeypatch

修改已有类的特性

```ruby
"abc".reverse   # => "cba"

class String
  def reverse
    "override"
  end
end

"abc".reverse    # => "override"
```

* 有名参数 Named Arguments

把方法参数收集到一个 hash 中, 以便通过名字访问

```ruby
def my_method(args)
  args[:arg2]
end
my_method(arg1: "A", arg2: "B", arg3: "c")   # => "B"
```

* 命名空间 NameSpace

在一个模块中定义常量, 以防止命名冲突

```ruby
module MyNameSpace
  class Array
    def to_s
      "myclass"
    end
  end
end

Array.new  # => []
MyNameSpace::Array.new  # => "myclass"
```

* 空指针保护  Nil Guards

用"或"操作覆写一个空引用

```ruby
x = nil
y = x || "a value"
```

* 对象扩展 Object Extension

通过给一个对象的 eigenclass 混入模块来定义单件方法

```ruby
obj = Object.new

Module M
  def my_method
    "a singleton method"
  end
end

class << obj
  include M
end

obj.my_method   # => "a singleton method"
```

* 打开类 Open Class

修改已有的类

```ruby
class String
  def my_string_method
    "my method"
  end
end

"abc".my_string_method  # => "my method"
```

* 模式派发 Pattern Dispatch

根据名字来选择需要调用的方法

```ruby
$x = 0
class C
  def my_first_method
    $x += 1
  end
  
  def my_second_method
    $x += 2
  end
end

obj = C.new
obj.methods.each do |m|
  obj.send(m) if m.to_s =~ /^my_/
end
$x # =>3
```

* 沙盒 Sandbox

在一个安全的环境中执行不被信任的代码

```ruby
def sandbox(&code)
  proc {
    $SAFE = 2
    Yield
  }.call
end

begin
  sandbox{File.delete "a_file"}
rescue Exception => ex
  ex  # => #<SecurityError: Insecure operation `file?' at level 2>
end
```

* 作用域门 Scope Gate

用 class, module 或 def 关键字来隔离作用域

```ruby
a = 1
define? a # "local-variable"

module MyModule
  b = 1
  define? a # => nil
  define? b # => "local-variable"
end

define? a # "local-variable"
define? b # => nil
```

* Self Yield

把 self 传递给当前块

```ruby
class Person
  attr_accessor :name, :surname
  
  def initialize
    yield self
  end
end

joe = Persion.new do |p|
  p.name = "Joe"
  p.surname = "Smith"
end
```

* 共享作用域 Shared Scope

在同一个 **扁平作用域** 的多个上下文中共享变量

```ruby
lambda {
  shared = 10
  
  self.class.class_eval do
    define_method :counter do
      shared
    end

    define_method :down do
      shared -= 1
    end
  end
}.call

counter   # => 10
3.times {down}
counter   # => 7
```

* 单件方法 Singleton Method

在一个对象上定义一个方法

```ruby
obj = "abc"

class << obj
  def my_singleton_method
    "x"
  end
end

obj.my_singleton_method  # => "x"
```

* 代码字符串 String of Code

执行一段表示 Ruby 代码的字符串

```ruby
my_string_of_code = "1+1"
eval(my_string_of_code)  # => 2
```

* 符号到 Proc Symbol to Proc

把一个符号转换为调用单个方法的代码块

```ruby
[1, 2, 3, 4].map(&:even?)  # => [false, true, false, true] 
```

```ruby
#Symbol#to_proc() 方法
#这是一个简单的 "一次调用块(one-call-block)", 它只有一个参数, 并且只有一个参数, 并且对这个参数只调用一个方法。
names = ['bob', 'bill', 'heather']
names.map {|name| name.capitalize} # => ["Bob", "Bill", "Heather"]
names.map(&:capitalize) # => ["Bob", "Bill", "Heather"]
```

```ruby
def proc_test
  Proc.new {|x| puts "x: #{x}, self: #{self}"}
end
def use_proc(&block)
  yield
end
use_proc &proc_test  # x: , self: main
use_proc {|x| puts "x: #{x}, self: #{self}"}
def use_proc(&block)
  yield 11
end
use_proc &proc_test  # x: 11, self: main
def use_proc(&block)
  yield self
end
use_proc &proc_test  # x: 11, self: main

class Symbol
  def to_proc
    Proc.new {|x| x.send(self)}  # x 传入块的参数, self 
  end
end
```
