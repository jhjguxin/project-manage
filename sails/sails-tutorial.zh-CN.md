### Sails Tutorial

> sources: [sailsjs](http://sailsjs.org/)
> author: [francis](https://github.com/jhjguxin) </br>
> date: Tue Jun 11 21:48:19 CST 2013

#### What is Sails.js?

Sails.js 使得构建企业级 Node.js 应用程序十分容易. 它模仿如同 Ruby on Rails 那样 MVC 架构的框架, 并且满足主流应用的需要: 可扩展的数据驱动的 API, 面向服务的结构. 它非常适合与构建聊天, 实时仪表板, 或者多人游戏.

### Features

使用 Sails.js 缩短使用它的开发时间到分. 你可以在几周内构建 production-ready, 实时应用程序 - 不是几个月.

Sails.js 完成了其他 Node.js MVC 框架不能做到的事请:

- Sails.js 是一个数据库不可知论者(并不限制或者依赖与某些数据库). 它的 ORM, Wateline 对 layer 提供了其能够工作的简单的数据访问, 并不在意你正在使用那种数据库. 你需要做的所有事情是挂载一个我们社区编写的适配器. 如果你打算在一个特殊的或者私有系统, 编写属于你的适配器非常简单!

- Sails.js 自动为你的应用程序生成一个 RESTful JSON API. 那就是说你不需要为了构建简单的数据库应用程序编写任何后端代码.

- 如同其他的(请求)一样可以路由实时 Socket.io 请求到你的 controllers: 通过 resourceful 原则和 URL 映射. 你不必在你打算转向实时应用的时候重写整个应用程序.

- Sails.js 默认提供基础安全和基于角色的访问控制, 并且你可以添加任何你喜欢的策略. 这些灵活的映射使得控制 controller 和 action 的变量十分简单, 同时也用于参数验证. 这种方式, 在你开始编写业务逻辑, 你知道用户是被授权的并且你拥有所有你需要的数据.

- 因为 Express 和 Socket.io 分享相同的会话存储配置, 你所有的安全策略同样拒绝实时 WebSocket 请求.

- Sails.js 拥有全自动的 asset 压缩. 在过去， 你不得不为你的 UI 手动的链接 CSS 和 Javascript. 现在不一样了. 通过 Sails, 你仅仅放置你的文件到适当的文件夹并且他们自动被包含到你的 layout 中. 接着, 当你准备切换到 production, 它们被缩小和 gpzip 压缩以尽可能的保留带宽. 这使的 push 你的 assets 到一个 CDN 云端非常容易并且加载更快.

### Get Started

我们为了这尽可能的简单竭尽全力.

仅仅需要安装 Sails.js 创建一个项目, 然后放到你的服务器上.

#### Installation

通过命令行安装最新的稳定发行版:

    sudo npm -g install sails
    
#### Creating a New Sails Project

新建一个 app:

    # Create the app sails new testProject
    sails new testProject
    
它将具有如下树形结构:

```shell
~/testProject$ tree
.
├── api
│   ├── adapters
│   ├── controllers
│   ├── models
│   ├── policies
│   │   └── authenticated.js
│   └── services
├── app.js
├── assets
│   ├── js
│   ├── mixins
│   │   ├── reset.css
│   │   └── sails.io.js
│   ├── styles
│   └── templates
├── config
│   ├── adapters.js
│   ├── application.js
│   ├── assets.js
│   ├── bootstrap.js
│   ├── locales
│   │   └── english.js
│   ├── local.ex.js
│   ├── local.js
│   ├── policies.js
│   ├── routes.js
│   └── views.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   └── robots.txt
├── README.md
└── views
    ├── 404.ejs
    ├── 500.ejs
    ├── home
    │   └── index.ejs
    └── layout.ejs

17 directories, 22 files
```

现在启动服务:

    # cd into the new folder cd test Project# Fire up the server sails lift
    sails lift
					
这时, 如果你访问 http://localhost:1337/ 你将会看到默认主页.

现在, 我们可以利用 Sails 来做很酷的东西了.
