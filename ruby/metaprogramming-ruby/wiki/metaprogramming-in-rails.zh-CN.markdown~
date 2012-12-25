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


