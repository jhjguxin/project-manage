## Node 入门

> Node website: [node.js](http://nodejs.org/)
> 作者： [Manuel Kiessling](http://twitter.com/manuelkiessling)
> 翻译： [goddyzhao](http://weibo.com/goddyzhao) & [GrayZhang](http://www.otakustay.com/) & [MondayChen](http://weibo.com/cmonday)

### 关于

本书致力于教会你如何用 Node.js 来开发应用，过程中会传授你所有所需的“高级” JavaScript 知识。本书绝不是一本 “Hello World” 的教程。

### 状态

你正在阅读的已经是本书的最终版。因此，只有当进行错误更正以及针对新版本 Node.js 的改动进行对应的修正时，才会进行更新。

本书中的代码案例都在 Node.js 0.6.11 版本中测试过，可以正确工作。

### 读者对象

本书最适合与我有相似技术背景的读者： **至少对一门诸如 Ruby、Python、PHP 或者 Java 这样面向对象的语言有一定的经验；对 JavaScript 处于初学阶段，并且完全是一个 Node.js 的新手。**

这里指的适合读者对象---对其他编程语言有一定经验的开发者，意思是说，本书不会对诸如数据类型、变量、控制结构等等之类非常基础的概念作介绍。要读懂本书，这些基础的概念我都假设你已经会了。

然而，本书还是会对 JavaScript 中的函数和对象作详细介绍，因为它们与其他同类编程语言中的函数和对象有很大的不同。

### 本书结构

读完本书之后，**你将完成一个完整的 web 应用，该应用允许用户浏览页面以及上传文件。**

当然了，应用本身并没有什么了不起的，相比为了实现该功能书写的代码本身，我们更关注的是如何创建一个框架来对我们应用的不同模块进行干净地剥离。 是不是很玄乎？稍后你就明白了。

本书先从介绍在 Node.js 环境中进行 JavaScript 开发和在浏览器环境中进行 JavaScript 开发的差异开始。

紧接着，会带领大家完成一个最传统的 “Hello World” 应用，这也是最基础的 Node.js 应用。

最后，会和大家讨论如何设计一个“真正”完整的应用，剖析要完成该应用需要实现的不同模块，并一步一步介绍如何来实现这些模块。

可以确保的是，在这过程中，大家会学到 JavaScript 中一些高级的概念、如何使用它们以及为什么使用这些概念就可以实现而其他编程语言中同类的概念就无法实现。

该应用所有的源代码都可以通过 [本书 Github 代码仓库](https://github.com/ManuelKiessling/NodeBeginnerBook/tree/master/code/application).

### 目录

* [关于](#关于)
  * [状态](#状态)
  * [读者对象](#读者对象)
  * [本书结构](#本书结构)
* [JavaScript 与 Node.js](#JavaScript 与 Node.js)
  * [JavaScript 与你](#JavaScript 与你)
  * [简短申明](#简短申明)
  * [服务器端 JavaScript](#服务器端 JavaScript)
  * [“Hello World”](#“Hello World”)
* [一个完整的基于 Node.js 的 web 应用](#一个完整的基于 Node.js 的 web 应用)
  * [用例](#用例)
  * [应用不同模块分析](#应用不同模块分析)
* [构建应用的模块](#构建应用的模块)
  * [一个基础的 HTTP 服务器](#一个基础的 HTTP 服务器)
  * [分析 HTTP 服务器](#分析 HTTP 服务器)
  * [进行函数传递](#进行函数传递)
  * [函数传递是如何让 HTTP 服务器工作的](#函数传递是如何让 HTTP 服务器工作的)
  * [基于事件驱动的回调](#基于事件驱动的回调)
  * [服务器是如何处理请求的](#服务器是如何处理请求的)
  * [服务端的模块放在哪里](#服务端的模块放在哪里)
  * [如何来进行请求的“路由”](#如何来进行请求的“路由”)
  * [行为驱动执行](#行为驱动执行)
  * [路由给真正的请求处理程序](#路由给真正的请求处理程序)
  * [让请求处理程序作出响应](#让请求处理程序作出响应)
    * [不好的实现方式](#不好的实现方式)
    * [阻塞与非阻塞](#阻塞与非阻塞)
    * [以非阻塞操作进行请求响应](#以非阻塞操作进行请求响应)
  * [更有用的场景](#更有用的场景)
    * [处理 POST 请求](#处理 POST 请求)
    * [处理文件上传](#处理文件上传)
  * [总结与展望](#总结与展望)

## JavaScript 与你

抛开技术，我们先来聊聊你以及你和 JavaScript 的关系。本章的主要目的是想让你看看，对你而言是否有必要继续阅读后续章节的内容。

如果你和我一样，那么你很早就开始利用 HTML 进行“开发”，正因如此，你接触到了这个叫 JavaScript 有趣的东西，而对于 JavaScript，你只会基本的操作——为 web 页面添加交互。

而你真正想要的是“干货”，你想要知道如何构建复杂的 web 站点 —— 于是，你学习了一种诸如 PHP、Ruby、Java 这样的编程语言，并开始书写“后端”代码。

与此同时，你还始终关注着 JavaScript，随着通过一些对 jQuery，Prototype之类技术的介绍，你慢慢了解到了很多 JavaScript 中的进阶技能，同时也感受到了 JavaScript 绝非仅仅是 `window.open()` 那么简单。

不过，这些毕竟都是前端技术，尽管当想要增强页面的时候，使用 jQuery总让你觉得很爽，但到最后，你顶多是个 JavaScript 用户，而非 JavaScript 开发者。

然后，出现了 Node.js，服务端的 JavaScript，这有多酷啊？

于是，你觉得是时候该重新拾起既熟悉又陌生的 JavaScript了。但是别急，写 Node.js 应用是一件事情；理解为什么它们要以它们书写的这种方式来书写则意味着——你要懂 JavaScript。这次是玩真的了。

问题来了： 由于 JavaScript 真正意义上以两种，甚至可以说是三种形态存在（从中世纪90年代的作为对DHTML进行增强的小玩具，到像jQuery那样严格意义上的前端技术，一直到现在的服务端技术），因此，很难找到一个“正确”的方式来学习 JavaScript，使得让你书写 Node.js 应用的时候感觉自己是在真正开发它而不仅仅是使用它。

因为这就是关键： 你本身已经是个有经验的开发者，你不想通过到处寻找各种解决方案（其中可能还有不正确的）来学习新的技术，你要确保自己是通过正确的方式来学习这项技术。

当然了，外面不乏很优秀的学习 JavaScript 的文章。但是，有的时候光靠那些文章是远远不够的。你需要的是指导。

本书的目标就是给你提供指导。

## 简短申明

业界有非常优秀的 JavaScript 程序员。而我并非其中一员。

我就是上一节中描述的那个我。我熟悉如何开发后端 web 应用，但是对“真正”的JavaScript 以及 Node.js，我都只是新手。我也只是最近学习了一些 JavaScript 的高级概念，并没有实践经验。

因此，本书并不是一本“从入门到精通”的书，更像是一本“从初级入门到高级入门”的书。

如果成功的话，那么本书就是我当初开始学习 Node.js 最希望拥有的教程。

## 服务端 JavaScript

JavaScript 最早是运行在浏览器中，然而浏览器只是提供了一个上下文，它定义了使用JavaScript可以做什么，但并没有“说”太多关于 JavaScript 语言本身可以做什么。事实上，JavaScript 是一门“完整”的语言： 它可以使用在不同的上下文中，其能力与其他同类语言相比有过之而无不及。

Node.js 事实上就是另外一种上下文，它允许在后端（脱离浏览器环境）运行 JavaScript 代码。

要实现在后台运行 JavaScript 代码，代码需要先被解释然后正确的执行。Node.js 的原理正是如此，它使用了 Google 的 V8 虚拟机（ Google 的 Chrome 浏览器使用的 JavaScript 执行环境），来解释和执行 JavaScript 代码。

除此之外，伴随着 Node.js 的还有许多有用的模块，它们可以简化很多重复的劳作，比如向终端输出字符串。

因此，Node.js 事实上既是一个运行时环境，同时又是一个库。

要使用 Node.js, 首先需要进行安装。关于如何安装 Node.js，这里就不赘述了，可以直接参考[官方的安装指南](https://github.com/joyent/node/wiki/Installation)。安装完成后，继续回来阅读本书下面的内容。
>  _推荐使用包管理器安装 Node.js [Installing from package managers](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)_

## “Hello World”

好了，“废话”不多说了，马上开始我们第一个 Node.js 应用：“Hello World”。

打开你最喜欢的编辑器，创建一个 `helloworld.js` 文件。我们要做就是向STDOUT输出 Hello World”，如下是实现该功能的代码：

```javascript
console.log("Hello World"); #echo 'console.log("Hello World");' > helloworld.js
```

保存该文件，并通过 Node.js 来执行：

```shell
node helloworld.js
```

正常的话，就会在终端输出 `Hello World`。

好吧，我承认这个应用是有点无趣，那么下面我们就来点“干货”。

## 一个完整的基于 Node.js 的 web 应用

### 用例

我们来把目标设定得简单点，不过也要够实际才行：

* 用户可以通过浏览器使用我们的应用。
* 当用户请求`http://domain/start` 时，可以看到一个欢迎页面，页面上有一个文件上传的表单。
* 用户可以选择一个图片并提交表单，随后文件将被上传到 `http://domain/upload`，该页面完成上传后会把图片显示在页面上。

差不多了，你现在也可以去 Google 一下，找点东西乱搞一下来完成功能。但是我们现在先不做这个。

更进一步地说，在完成这一目标的过程中，我们不是仅仅需要基础的代码而不管代码是否优雅。我们要对此进行抽象，从而来寻找一种适合构建更为复杂的 Node.js 应用的方式。

### 应用不同模块分析

我们来分解一下这个应用，为了实现上文的用例，我们需要实现哪些部分呢？

* 我们需要提供 Web 页面，因此需要一个 HTTP 服务器
* 对于不同的请求，根据请求的 URL，我们的服务器需要给予不同的响应，因此我们需要一个路由，用于把请求对应到请求处理程序（request handler）
* 当请求被服务器接收并通过路由传递之后，需要可以对其进行处理，因此我们需要最终的请求处理程序
* 路由还应该能处理 POST 数据，并且把数据封装成更友好的格式传递给请求处理入程序，因此需要请求数据处理功能
* 我们不仅仅要处理 URL 对应的请求，还要把内容显示出来，这意味着我们需要一些视图逻辑供请求处理程序使用，以便将内容发送给用户的浏览器
* 最后，用户需要上传图片，所以我们需要上传处理功能来处理这方面的细节

我们先来想想，使用 PHP 的话我们会怎么构建这个结构。一般来说我们会用一个 Apache HTTP 服务器并配上 `mod_php5` 模块。
从这个角度看，整个“接收 HTTP 请求并提供 Web 页面”的需求根本不需要 PHP 来处理。(django, rails, web.py 也一样的)

不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅在实现一个应用，同时还实现了整个 HTTP 服务器。事实上，我们的 Web 应用以及对应的 Web 服务器基本上是一样的。

听起来好像有一大堆活要做，但随后我们会逐渐意识到，对 Node.js 来说这并不是什么麻烦的事。

现在我们就来开始实现之路，先从第一个部分-- HTTP 服务器着手。

## 构建应用的模块

### 一个基础的HTTP服务器

当我准备开始写我的第一个“真正的” Node.js 应用的时候，我不但不知道怎么写 Node.js 代码，也不知道怎么组织这些代码。
我应该把所有东西都放进一个文件里吗？网上有很多教程都会教你把所有的逻辑都放进一个用 Node.js 写的基础 HTTP 服务器里。但是如果我想加入更多的内容，同时还想保持代码的可读性呢？

实际上，只要把不同功能的代码放入不同的模块中，保持代码分离还是相当简单的。

这种方法允许你拥有一个干净的主文件（main file），你可以用 Node.js 执行它；同时你可以拥有干净的模块，它们可以被主文件和其他的模块调用。

那么，现在我们来创建一个用于启动我们的应用的主文件，和一个保存着我们的 HTTP 服务器代码的模块。

在我的印象里，把主文件叫做 `index.js` 或多或少是个标准格式。把服务器模块放进叫 `server.js` 的文件里则很好理解。

让我们先从服务器模块开始。在你的项目的根目录下创建一个叫 `server.js` 的文件，并写入以下代码：

```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
```

搞定！你刚刚完成了一个可以工作的 HTTP 服务器。为了证明这一点，我们来运行并且测试这段代码。首先，用 Node.js 执行你的脚本：

```shell
node server.js
```

接下来，打开浏览器访问 [http://localhost:8888/](http://localhost:8888/)，你会看到一个写着 “Hello World” 的网页。

这很有趣，不是吗？让我们先来谈谈 HTTP 服务器的问题，把如何组织项目的事情先放一边吧，你觉得如何？我保证之后我们会解决那个问题的。

### 分析HTTP服务器

那么接下来，让我们分析一下这个 HTTP 服务器的构成。

第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。

接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个 HTTP 服务器监听的端口号。

咱们暂时先不管 http.createServer 的括号里的那个函数定义。

我们可以用这样的代码来启动服务器并侦听 8888 端口：

```javascript
var http = require("http");

var server = http.createServer();
server.listen(8888);
```

这段代码只会启动一个侦听 8888 端口的服务器，它不做任何别的事情，甚至连请求都不会应答。

The really interesting (and, if your background is a more conservative language like PHP, odd looking) part is the function definition right there where you would expect the first parameter of the createServer() call.
真的很有趣（并且，如果你之前的背景是一个更加保守的语言，比如PHP，以此综合起来看） `createSever()` 右边的定义部分, 你将会指定 `createSever()` 调用的第一个参数的地方。

Turns out, this function definition IS the first (and only) parameter we are giving to the createServer() call. Because in JavaScript, functions can be passed around like any other value.
实际上，这个函数定义是我们给予 `createServer()` 调用的的第一个也是唯一一个参数。因为在 JavaScript 中，函数可以像其他变量一样被传递。

### 进行函数传递

举例来说，你可以这样做：

```javascript
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");
```

请仔细阅读这段代码！在这里，我们把 `say` 函数作为 `execute` 函数的第一个变量进行了传递。这里返回的不是 `say` 的返回值，而是 `say` 本身！(类似于 ruby 中的 `send` 方法调用`self.send(:puts, "Hello")`)

这样一来， `say` 就变成了 `execute` 中的本地变量 `someFunction`，`execute` 可以通过调用 `someFunction()` （带括号的形式）来使用 `say` 函数。

当然，因为 `say` 有一个变量， `execute` 在调用 `someFunction` 时可以传递这样一个变量。

我们可以，就像刚才那样，用它的名字把一个函数作为变量传递。但是我们不一定要绕这个“先定义，再传递”的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数：

```javascript
function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");
```

我们在 `execute` 接受第一个参数的地方直接定义了我们准备传递给 `execute` 的函数。

用这种方式，我们甚至不用给这个函数起名字，这也是为什么它被叫做 `匿名函数`。

这是我们和我所认为的“进阶” JavaScript 的第一次亲密接触，不过我们还是得循序渐进。现在，我们先接受这一点：在 JavaScript 中，一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

### 函数传递是如何让HTTP服务器工作的

带着这些知识，我们再来看看我们简约而不简单的HTTP服务器：

```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
```

现在它看上去应该清晰了很多：我们向 `createServer` 函数传递了一个匿名函数。

用这样的代码也可以达到同样的目的：

```javascript
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
```

也许现在我们该问这个问题了：我们为什么要用这种方式呢？

### 基于事件驱动的回调

这个问题可不好回答（至少对我来说），不过这是 Node.js 原生的工作方式。它是事件驱动的，这也是它为什么这么快的原因。

你也许会想花点时间读一下 Felix Geisendörfer 的大作 [Understanding node.js](http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb)，它介绍了一些背景知识。

这一切都归结于 “Node.js是事件驱动的” 这一事实。好吧，其实我也不是特别确切的了解这句话的意思。不过我会试着解释，为什么它对我们用 Node.js 写网络应用（Web based application）是有意义的。

当我们使用 `http.createServer` 方法的时候，我们当然不只是想要一个侦听某个端口的服务器，我们还想要它在服务器收到一个 HTTP 请求的时候做点什么。

问题是，这是异步的：请求任何时候都可能到达，但是我们的服务器却跑在一个单进程中。

**写 PHP 应用的时候，我们一点也不为此担心：任何时候当有请求进入的时候，网页服务器（通常是 Apache）就为这一请求新建一个进程，并且开始从头到尾执行相应的 PHP 脚本。**

那么在我们的 Node.js 程序中，当一个新的请求到达 `8888` 端口的时候，**我们怎么控制流程呢？**

嗯，这就是 Node.js/JavaScript 的事件驱动设计能够真正帮上忙的地方了——虽然我们还得学一些新概念才能掌握它。让我们来看看这些概念是怎么应用在我们的服务器代码里的。

我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。

我们不知道这件事情什么时候会发生，但是我们现在有了一个处理请求的地方：**它就是我们传递过去的那个函数。**至于它是被预先定义的函数还是匿名函数，就无关紧要了。

这个就是传说中的 `回调`。我们给某个方法传递了一个函数，这个方法在有相应事件发生时调用这个函数来进行 `回调`。

至少对我来说，需要一些功夫才能弄懂它。你如果还是不太确定的话就再去读读 Felix 的博客文章。

让我们再来琢磨琢磨这个新概念。我们怎么证明，在创建完服务器之后，即使没有 HTTP 请求进来、我们的回调函数也没有被调用的情况下，我们的代码还继续有效呢？我们试试这个：
