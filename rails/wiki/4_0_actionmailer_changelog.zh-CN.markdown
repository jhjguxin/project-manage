## Rails 4.0.0 (unreleased) ##


## Rails 4.0.0.beta1 (February 25, 2013) ##

*   允许传递插值到 `#default_i18n_subject`, 例如:

        # config/locales/en.yml
        en:
          user_mailer:
            welcome:
              subject: 'Hello, %{username}'

        # app/mailers/user_mailer.rb
        class UserMailer < ActionMailer::Base
          def welcome(user)
            mail(subject: default_i18n_subject(username: user.name))
          end
        end

    *Olek Janiszewski*

*   Eager loading made to use relation's `in_clause_length` instead of host's one.
    Fix #8474

    *Boris Staal*

*   Explicit multipart messages no longer set the order of the MIME parts.
    *Nate Berkopec*

*   Do not render views when mail() isn't called.
    Fix #7761

    *Yves Senn*

*   允许发送方法传入 delivery_method_options 来设定每个 mail 实例 *Aditya Sanghi*

    如果你的 smtp 发送设置是动态的, 你可以现在在每个 mail 实例中覆盖设置, 例如

        def my_mailer(user,company)
          mail to: user.email, subject: "Welcome!",
               delivery_method_options: { user_name: company.smtp_user,
                                          password: company.smtp_password }
        end

    This will ensure that your default SMTP settings will be overridden
    by the company specific ones. You only have to override the settings
    that are dynamic and leave the static setting in your environment
    configuration file (e.g. config/environments/production.rb)
    这里你的默认 SMTP 设置会被将会被指定的公司覆盖. 你仅仅需要动态的覆盖设定并且在你的环境配置文件中留下静态设置(e.g. config/environments/production.rb)

*   Allow to set default Action Mailer options via `config.action_mailer.default_options=` *Robert Pankowecki*

*   Raise an `ActionView::MissingTemplate` exception when no implicit template could be found. *Damien Mathieu*

*   Allow callbacks to be defined in mailers similar to `ActionController::Base`. You can configure default
    settings, headers, attachments, delivery settings or change delivery using
    `before_filter`, `after_filter` etc. *Justin S. Leitgeb*
*   允许在 mailer 中定义类似 `ActionController::Base` callback. 你可以配置默认的 setting, header, attachment, delivery 或者改变使用的发送方法.

以前的变更请检查 [3-2-stable](https://github.com/rails/rails/blob/3-2-stable/actionmailer/CHANGELOG.md).
