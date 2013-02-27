Ruby on Rails 4.0 发行日志
===============================

Rails 4.0 的亮点:

* 首选 Ruby 2.0; 必须 1.9.3+
* 强大的参数(形式)
* [Turbolinks](https://github.com/rails/turbolinks) 
    [introducing-turbolinks-for-rails-4-0](http://geekmonkey.org/articles/28-introducing-turbolinks-for-rails-4-0)
* [Russian Doll Caching](http://blog.remarkablelabs.com/2012/12/russian-doll-caching-cache-digests-rails-4-countdown-to-2013)

该发行日志仅仅覆盖了主要的变更. 知道每个 bug 修复和变动, 请参考变更日志或者检查主要的 Rails 仓库的[commits 列表](https://github.com/rails/rails/commits/master).

--------------------------------------------------------------------------------

升级到 Rails 4.0
----------------------

如果你打算升级一个现有的应用程序, 在你开始之前有不错的测试覆盖是个好主意. 在试图升级到 Rails 4.0 之前, 以防止你没有确保你首选升级到 Rails 3.2 后应用程序能够按照预期工作. 当你在升级过程的注意事项列表在教程 [Upgrading to Rails](upgrading_ruby_on_rails.html#upgrading-from-rails-3-2-to-rails-4-0).


创建一个 Rails 4.0 应用程序
--------------------------------

```
 你应该安装了 'rails' 这个 rubygem
$ rails new myapp
$ cd myapp
```

### Vendoring Gems

Rails 现在使用一个 `Gemfile` 在应用程序的根目录中来决定你开始应用程序所需要的 gems. 这个 `Gemfile` 用于 [Bundler](https://github.com/carlhuda/bundler) gem, 他将会安装你所有的依赖. 它甚至安装你所有的依赖到应用程序本地以至于它不依赖你的系统 gems.

More information: [Bundler homepage](http://gembundler.com)

### 活在边缘

`Bundler` and `Gemfile` makes freezing your Rails application easy as pie with the new dedicated `bundle` command. If you want to bundle straight from the Git repository, you can pass the `--edge` flag:

`Bundler` 和 `Gemfile` 通过专属的 `bundle` 命令冻结你的应用程序的(依赖)易如反掌. 如果你希望直接绑定到 Git 仓库, 你可以传递 `--edge`:

```shell
$ rails new myapp --edge
```

If you have a local checkout of the Rails repository and want to generate an application using that, you can pass the `--dev` flag:

如果你有一个 checkout 到本地的 Rails 仓库并且希望生成使用它的应用程序来, 你可以传递 `--dev`:

```shell
$ ruby /path/to/rails/railties/bin/rails new myapp --dev
```

主要的 Featured
--------------

TODO. Give a list and then talk about each of them briefly. We can point to relevant code commits or documentation from these sections.

TODO. 提供一个列表并且简要的讨论它们每个. 我们可以指出来源于代码提交或者文档的关联.

![Rails 4.0](http://edgeguides.rubyonrails.org/images/rails4_features.png)

提取一些功能到 gems(Extraction of features to gems)
---------------------------

In Rails 4.0, several features have been extracted into gems. You can simply add the extracted gems to your `Gemfile` to bring the functionality back.

在 Rails 4.0 中一些功能被提取到 gem 中. 你可以很简单的添加这些提取的 gem 到你的 `Gemfile` 来找回这些功能.

* Hash-based & Dynamic finder methods ([Github](https://github.com/rails/activerecord-deprecated_finders))
* Mass assignment protection in Active Record models ([Github](https://github.com/rails/protected_attributes), [Pull Request](https://github.com/rails/rails/pull/7251))
* ActiveRecord::SessionStore ([Github](https://github.com/rails/activerecord-session_store), [Pull Request](https://github.com/rails/rails/pull/7436))
* Active Record Observers ([Github](https://github.com/rails/rails-observers), [Commit](https://github.com/rails/rails/commit/39e85b3b90c58449164673909a6f1893cba290b2))
* Active Resource ([Github](https://github.com/rails/activeresource), [Pull Request](https://github.com/rails/rails/pull/572), [Blog](http://yetimedia.tumblr.com/post/35233051627/activeresource-is-dead-long-live-activeresource))
* Action Caching ([Github](https://github.com/rails/actionpack-action_caching), [Pull Request](https://github.com/rails/rails/pull/7833))
* Page Caching ([Github](https://github.com/rails/actionpack-page_caching), [Pull Request](https://github.com/rails/rails/pull/7833))
* Sprockets ([Github](https://github.com/rails/sprockets-rails))
* Performance tests ([Github](https://github.com/rails/rails-perftest), [Pull Request](https://github.com/rails/rails/pull/8876))

文档
-------------

* Guides are rewritten in GitHub Flavored Markdown.

* Guides have a responsive design.

Railties
--------

Please refer to the [Changelog](https://github.com/rails/rails/blob/master/railties/CHANGELOG.md) for detailed changes.

### 显著变更

*   New test locations `test/models`, `test/helpers`, `test/controllers`, and `test/mailers`. Corresponding rake tasks added as well. ([Pull Request](https://github.com/rails/rails/pull/7878))

* Your app's executables now live in the `bin/` dir. Run `rake rails:update:bin` to get `bin/bundle`, `bin/rails`, and `bin/rake`.

* 默认 Threadsafe

### 弃用

* `config.threadsafe!` is deprecated in favor of `config.eager_load` which provides a more fine grained control on what is eager loaded.

* `Rails::Plugin` has gone. Instead of adding plugins to `vendor/plugins` use gems or bundler with path or git dependencies.

Action Mailer
-------------

详细变更请参考 [Changelog](https://github.com/rails/rails/blob/master/actionmailer/CHANGELOG.md).

### 显著变更

### 弃用

Active Model
------------

Please refer to the [Changelog](https://github.com/rails/rails/blob/master/activemodel/CHANGELOG.md) for detailed changes.

### 显著变更

*   Add `ActiveModel::ForbiddenAttributesProtection`, a simple module to protect attributes from mass assignment when non-permitted attributes are passed.

*   Added `ActiveModel::Model`, a mixin to make Ruby objects work with AP out of box.

### 弃用

Active Support
--------------

Please refer to the [Changelog](https://github.com/rails/rails/blob/master/activesupport/CHANGELOG.md) for detailed changes.

### 显著变更

*   Replace deprecated `memcache-client` gem with `dalli` in `ActiveSupport::Cache::MemCacheStore`.

*   优化 `ActiveSupport::Cache::Entry` 去减少内存和执行开销.

*   Inflections can now be defined per locale. `singularize` and `pluralize` accept locale as an extra argument.

*   `Object#try` 现在将会返回 `nil` 替代抛出一个  `NoMethodError` 如果接收的对象没有实现这个方法, 但是你仍然可以通过是使用 `Object#try!` 来得到旧的习惯.

### 弃用

*   Deprecate `ActiveSupport::TestCase#pending` method, use `skip` from MiniTest instead.

*   `ActiveSupport::Benchmarkable#silence` has been deprecated due to its lack of thread safety. It will be removed without replacement in Rails 4.1.

*   `ActiveSupport::JSON::Variable` is deprecated. Define your own `#as_json` and `#encode_json` methods for custom JSON string literals.

*   Deprecates the compatibility method `Module#local_constant_names`, use `Module#local_constants` instead (which returns symbols).

*   `BufferedLogger` is deprecated.  Use `ActiveSupport::Logger`, or the `logger` from Ruby stdlib.

*   Deprecate `assert_present` and `assert_blank` in favor of `assert object.blank?` and `assert object.present?`

Action Pack
-----------

Please refer to the [Changelog](https://github.com/rails/rails/blob/master/actionpack/CHANGELOG.md) for detailed changes.

### 显著变更

* Change the stylesheet of exception pages for development mode. Additionally display also the line of code and fragment that raised the exception in all exceptions pages.

### 弃用


Active Record
-------------

Please refer to the [Changelog](https://github.com/rails/rails/blob/master/activerecord/CHANGELOG.md) for detailed changes.

### 显著变更

*   提高编写 `change` 迁移的方法, 旧的  `up` & `down` 不再是必须的.

    * 方法 `drop_table` 和 `remove_column` 现在是可逆的, 只要必要的信息被提供.
      方法 `remove_column` 用来接收多个字段名, 替代使用 `remove_columns`(这是不可逆的)
      方法 `change_table` 也是可逆的, 只要它的块没有调用 `remove`, `change` 或者 `change_default`

    * New method `reversible` makes it possible to specify code to be run when migrating up or down.
    * 新方法 `reversible` 使得它可能在迁移或者回滚时运行指定代码.
      阅读 [Guide on Migration](https://github.com/rails/rails/blob/master/guides/source/migrations.md#using-the-reversible-method)

    * 新方法 `revert` 将会撤销整个迁移或者给定的块.
      如果回滚迁移, 给定的 migration / block 正常运行.
      See the [Guide on Migration](https://github.com/rails/rails/blob/master/guides/source/migrations.md#reverting-previous-migrations)

*   添加一些元数据字段到 `schema_migrations` 表.

    * `migrated_at`
    * `fingerprint` - an md5 hash of the migration.
    * `name` - the filename minus version and extension.

*   添加 PostgreSQL array 类型支持. 任意数据类型可以被使用来创建一个数组字段, 以及全 migration 和 schema dumper 支持.

*   Add `Relation#load` to explicitly load the record and return `self`.

*   `Model.all` 现在返回一个 `ActiveRecord::Relation`, 而不是一个记录的数组. 如果你真的希望得到一个数组使用 `Relation#to_a`. 在某些特定情况, 这可能会产生损坏在更新的时候.

*   添加 `ActiveRecord::Migration.check_pending!` 如果需要迁移的时候会抛出错误.

*   添加对 `ActiveRecord::Store` 定制的代码支持. 现在你可以设定你自己的代码像这样:

        store :settings, accessors: [ :color, :homepage ], coder: JSON

*   `mysql` 和 `mysql2` 连接将会默认设定 `SQL_MODE=STRICT_ALL_TABLES` 避免 silent data 丢失. 也可以通过在你的 `database.yml` 中指定 `strict: false` 来禁用它.

*   Remove IdentityMap.

*   Adds `ActiveRecord::NullRelation` and `ActiveRecord::Relation#none` implementing the null object pattern for the Relation class.
*   添加 `ActiveRecord::NullRelation` 以及 `ActiveRecord::Relation#none` 实现关系类的空对象模式.

*   Added `create_join_table` migration helper to create has_and_belongs_to_many(HABTM) join tables.
*   添加 `create_join_table` migration helper 来创建 has_and_belongs_to_many(HABTM) join 表.

*   允许创建 PostgreSQL [hstore](http://www.postgresql.org/docs/9.1/static/hstore.html)(存储hash,能够支持查询 hash) 记录.

### 弃用

*   弃用旧式的基于 hash 的查找 API. 这就是说以前接收 "查找选项" 的方法不再使用.

*   所有除了 `find_by_...` 和 `find_by_...!` 的动态方法被弃用.它们是
    你可以这样重写代码:

      * `find_all_by_...` can be rewritten using `where(...)`.
      * `find_last_by_...` can be rewritten using `where(...).last`.
      * `scoped_by_...` can be rewritten using `where(...)`.
      * `find_or_initialize_by_...` can be rewritten using `where(...).first_or_initialize`.
      * `find_or_create_by_...` can be rewritten using `find_or_create_by(...)` or `where(...).first_or_create`.
      * `find_or_create_by_...!` can be rewritten using `find_or_create_by!(...)` or `where(...).first_or_create!`.

Credits
-------

See the [full list of contributors to Rails](http://contributors.rubyonrails.org/) for the many people who spent many hours making Rails, the stable and robust framework it is. Kudos to all of them.
