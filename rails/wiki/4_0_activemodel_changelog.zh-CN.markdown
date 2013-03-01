## Rails 4.0.0 (unreleased) ##


## Rails 4.0.0.beta1 (February 25, 2013) ##

*   **Add `ActiveModel::Validations::AbsenceValidator`, a validator to check the**
    **absence of attributes.**
    添加 `ActiveModel::Validations::AbsenceValidator`, 一个用来检查缺席属性的验证器.

        class Person
          include ActiveModel::Validations

          attr_accessor :first_name
          validates_absence_of :first_name
        end

        person = Person.new
        person.first_name = "John"
        person.valid?
        # => false
        person.errors.messages
        # => {:first_name=>["must be blank"]}

    *Roberto Vasquez Angel*

*   `[attribute]_changed?` now returns `false` after a call to `reset_[attribute]!`.

    *Renato Mascarenhas*

*   **Observers was extracted from Active Model as `rails-observers` gem.**
    Observers 被从 Active Model 提取为 `rails-observers` gem.

    *Rafael Mendonça França*

*   **Specify type of singular association during serialization.**
    在序列化期间指定单数作为关联.

    *Steve Klabnik*

*   Fixed length validator to correctly handle `nil`. Fixes #7180.

    *Michal Zima*

*   Removed dispensable `require` statements. Make sure to require `active_model` before requiring
    individual parts of the framework.

    *Yves Senn*

*   Use BCrypt's `MIN_COST` in the test environment for speedier tests when using `has_secure_pasword`.

    *Brian Cardarella + Jeremy Kemper + Trevor Turk*

*   Add `ActiveModel::ForbiddenAttributesProtection`, a simple module to
    protect attributes from mass assignment when non-permitted attributes are passed.
    添加 `ActiveModel::ForbiddenAttributesProtection`, 一个简单 module 来保护来
    自 mass assignment 的 属性当传递了 non-permitted 属性.

    *DHH + Guillermo Iguaran*

*   **`ActiveModel::MassAssignmentSecurity` has been extracted from Active Model and the**
    **`protected_attributes` gem should be added to Gemfile in order to use**
    **`attr_accessible` and `attr_protected` macros in your models.**
    `ActiveModel::MassAssignmentSecurity`  被从 Active Model 提取出来了并且为了在 model 中
    使用 `attr_accessible` 和 `attr_protected` 宏 `protected_attributes` gem 应该被
    添加到 Gemfile.

    *Guillermo Iguaran*

*   **Due to a change in builder, `nil` and empty strings now generate**
    **closed tags, so instead of this:**
    因为 builder 的变更, `nil` 和 空字符串现在生成闭标签, 因此替代这样:

        <pseudonyms nil=\"true\"></pseudonyms>

    it generates this:
    它生成这样:

        <pseudonyms nil=\"true\"/>

    *Carlos Antonio da Silva*

*   Inclusion/exclusion validators accept a method name passed as a symbol to the
    `:in` option.
    **Inclusion/exclusion 验证器在 `:in` 选项中哦个接收一个符号形式的方法名.**

    This allows to use dynamic inclusion/exclusion values using methods, besides
    the current lambda/proc support.

    *Gabriel Sobrinho*

*   `ActiveModel::Validation#validates` ability to pass custom exception to the
    `:strict` option.
    `ActiveModel::Validation#validates` 能够传入定制的 exception 到 `:strict` option.

    *Bogdan Gusiev*

*   Changed `ActiveModel::Serializers::Xml::Serializer#add_associations` to by default
    propagate `:skip_types, :dasherize, :camelize` keys to included associations.
    It can be overriden on each association by explicitly specifying the option on one
    or more associations
    更改 `ActiveModel::Serializers::Xml::Serializer#add_associations` 默认传播 
    `:skip_types, :dasherize, :camelize` 到被包含的 关联中. 它可以通过准确的在一
    个或者多个关联上指定选项来覆盖每个关联.
    
    *Anthony Alberto*

*   Changed `ActiveModel::Serializers::JSON.include_root_in_json` default value to false.
    Now, AM Serializers and AR objects have the same default behaviour. Fixes #6578.
    变更 `ActiveModel::Serializers::JSON.include_root_in_json` 默认值为 `false`.
    现在 AM 序列器和 AR 对象有相同的默认习惯. Fixes #6578.
    

        class User < ActiveRecord::Base; end

        class Person
          include ActiveModel::Model
          include ActiveModel::AttributeMethods
          include ActiveModel::Serializers::JSON

          attr_accessor :name, :age

          def attributes
            instance_values
          end
        end

        user.as_json
        => {"id"=>1, "name"=>"Konata Izumi", "age"=>16, "awesome"=>true}
        # root is not included

        person.as_json
        => {"name"=>"Francesco", "age"=>22}
        # root is not included

    *Francesco Rodriguez*

*   Passing false hash values to `validates` will no longer enable the corresponding validators.
    传递 false 的 hash 值给 `validates` 将不再将不再启用相应的验证器。

    *Steve Purcell*

*   **`ConfirmationValidator` error messages will attach to `:#{attribute}_confirmation` instead of `attribute`.**
    `ConfirmationValidator` 错误消息将会连接到 `:#{attribute}_confirmation` 而
    不是 `attribute`.

    *Brian Cardarella*

*   **Added `ActiveModel::Model`, a mixin to make Ruby objects work with AP out of box.**

    *Guillermo Iguaran*

*   `ActiveModel::Errors#to_json`: support `:full_messages` parameter.

    *Bogdan Gusiev*

*   Trim down Active Model API by removing `valid?` and `errors.full_messages`.

    *José Valim*

*   When `^` or `$` are used in the regular expression provided to `validates_format_of`
    and the `:multiline` option is not set to true, an exception will be raised. This is
    to prevent security vulnerabilities when using `validates_format_of`. The problem is
    described in detail in the Rails security guide.
    当在正则表达式中使用 `^` 或 `$` 提供的 `validates_format_of` 和 `:multiline` 选项
    不设置为 `true`, 一个异常将会抛出. 这里防止了在使用 `validates_format_of` 的时候的
    安全漏洞. 这个问题被详细描述在安全教程中.

    *Jan Berdajs + Egor Homakov*

Please check [3-2-stable](https://github.com/rails/rails/blob/3-2-stable/activemodel/CHANGELOG.md) for previous changes.
