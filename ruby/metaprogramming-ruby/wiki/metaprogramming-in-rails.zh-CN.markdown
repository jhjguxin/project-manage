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

*. 可信的单元测试是抵抗元编程 bug 的第一道防线.
*. 让猴子补丁明显一些, 防止(无意识的)猴子补丁.
  
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

*. Argument Array

```ruby
def my_method(*args)
  #args.map{|arg| arg.reverse}
  args.map(&:reverse)
end

my_method('abc','xzy','123')
```

*. Around Alias

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

*. Blank Slate

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

*. 类扩展 Class Extension

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

*. 类扩展混入 Class Extension Mixin

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

*. 类实例变量 Class Instance Variable

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

*. 类宏 Class Macro

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

*. 洁净室 Clean Room

使用对象作为执行块的上下文环境

```ruby
class CleanRoom
  def a_useful_method(x); x*2;end
end

Clean.new.instance_eval{a_useful_method(3)}  # => 6
```

*. 代码处理器 Code Processor

处理从外部获得的字符串代码

```ruby
File.readlines("a_file_containing_lines_of_ruby.txt").each do |line|
  puts "#{line.chomp} ==> #{eval(line)}"
end

#>>1+1==>2
```

