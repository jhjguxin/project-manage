# Configuration

因此, 现在拟已经安装了 Sails.js 并且它承载了你神奇的新项目. 什么? 这还不够好? 好吧, 来看看我们可以配置些什么使得它可以更加适合你的需要!

# Overview of configuration files

Sails.js 一个主要的有点是它的灵活性. 如同大多数的 MVC 框架, Sails.js 设定标准原则, 但是同样允许你更改它的配置来适应你的需要. 下面一个列表以及对每个简短的解释.

* <a href="#adapters.js">adapters.js</a>      (这个文件处理 数据库/数据源 适配器)
* <a href="#application.js">application.js</a>   (这个文件处理你应用程序的常规配置)
* <a href="#assets.js">assets.js</a>        (这个文件处理 CSS/Js/styles 和其他 asset 资源的配置)
* <a href="#bootstrap.js">bootstrap.js</a>     (这个文件拥有在 app 启动前需要执行的代码)
* <a href="#locales">locales</a>          (文件夹拥有特定的 locale 设定)
	* <a href="#english.js">english.js</a>   (这个文件处理 locale 翻译字符串所需的)
* <a href="#local.js">local.js</a>         (这个文件被包含在 `.gitignore` 中并且将不会推送到你的 git 仓库. 它处理任何所需的 LOCAL 覆盖)
	* <a href="#local.ex.js">local.ex.js</a>      (这是一个 local.js 的示例文件)
* <a href="#policies.js">policies.js</a>      (这个文件定义策略用来授予或者禁止用户访问)
* <a href="#routes.js">routes.js</a>        (这个文件包含所有的用户为系统指定的路由. 如果这是空白的系统将会试图动态 route)
* <a href="#views.js">views.js</a>         (这个文件处理所有相关的设定, 例如 view engine 和 layout)

<span id="adapters.js"></span>
## adapters.js
`adapters.js` 是你为你的整个应用指定数据库选项. 来看一下文件内容并且熟悉整个部分.

```javascript
// Configure installed adapters
// If you define an adapter in your model definition, 
// it will override anything from this global config.
module.exports.adapters = {

	// If you leave the adapter config unspecified 
	// in a model definition, 'default' will be used.
	'default': 'disk',
	
	// In-memory adapter for DEVELOPMENT ONLY
	// (data is NOT preserved when the server shuts down)
	memory: {
		module: 'sails-dirty',
		inMemory: true
	},

	// Persistent adapter for DEVELOPMENT ONLY
	// (data IS preserved when the server shuts down)
	disk: {
		module: 'sails-dirty',
		filePath: './.tmp/dirty.db',
		inMemory: false
	},

	// MySQL is the world's most popular relational database.
	// Learn more: http://en.wikipedia.org/wiki/MySQL
	mysql: {
		module		: 'sails-mysql',
		host		: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
		user		: 'YOUR_MYSQL_USER',
		password	: 'YOUR_MYSQL_PASSWORD',
		database	: 'YOUR_MYSQL_DB'
	}
};
```

Okay, so the first thing you may have noticed is the _default_ setting.  This is set to _disk_ by default.  Disk means that the data is stored on the local file system instead of in a database.  You can change this to any of the other defined options below that.  This is the default that will be used throughtout your entire app.  If you need to override this on a per model basis, you can do that inside the model itself.  See [Models](Models).

_**memory:**_  This is an option for _'default':_ .  Memory stores all data in memory.  This memory is erased when the server is shutdown.

_**disk:**_  This is an option for _'default':_ .  Disk stores all data on disk in the .tmp folder.  This is persisted through restarts.

_**mysql:**_ This is an option for _'default':_ .  Mysql stores all data in a MySQL Database.  This is persisted through restarts.  This requires the setup of a Mysql server either locally or remote.
