## [Go 语言](http://golang.org)

### 文档

[Go 语言](http://golang.org) 是一个开源项目,它可以使程序员更高效.

Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It's a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.

Go 语言(善于)表达的, 简洁, 干净并且 高效. 它的 高并发机制用它写出的程序在多核(设备)和网络设备得到最有效地利用, 并且它的 novel type system 能够流畅和模块化程序结构. 快速的编译 Go 语言还可以获得便捷的垃圾回收和强大的 run-time reflection. 它是一个快速的, 静态的, 编译性语言但是具有动态语言的解释性特性的语言.

### Installing Go

#### [Getting Started](install.en-US.markdown)

介绍下载安装 Go 编译器, 工具以及库.

### Learning Go

#### [A Tour of Go](http://tour.golang.org/)

An interactive introduction to Go in three sections. The first section covers basic syntax and data structures; the second discusses methods and interfaces; and the third introduces Go's concurrency primitives. Each section concludes with a few exercises so you can practice what you've learned. You can [take the tour online](http://tour.golang.org/) or [install it locally](http://code.google.com/p/go-tour/).

用三部分来互动介绍 Go 语言. 第一部分涵盖了基础语法和数据结构; 第二部分讨论方法和接口; 第三部分说明 Go 的并发 [primitives(元语)](http://en.wikipedia.org/wiki/Primitive). 每部分通过练习来总结因此你可以体验到我们所知道的. 你可以 [访问线上的 tour](http://tour.golang.org/) 或者安装 [它的本地语言版](http://code.google.com/p/go-tour/).

### [How to write Go code](http://golang.org/doc/code.html)

How to use the [go command](http://golang.org/cmd/go/) to fetch, build, and install packages, commands, and run tests.

怎样使用[go 命令](http://golang.org/cmd/go/) 来刷新, 打包, 和安装包, 指令, 以及运行测试.

### [Effective Go 高效的 Go 语言](http://golang.org/doc/effective_go.html)

A document that gives tips for writing clear, idiomatic Go code. A must read for any new Go programmer. It augments the tour and the language specification, both of which should be read first.

一份关于编写简洁, 地道的 Go 代码的文档. 一份任何新手都该去阅读的文档. 它可以使你的体验更加规范, (不管是体验还是为了最佳实践) 都应该阅读这份文档.

### [Go References](http://golang.org/ref/)

指令和包的语言规范, memory model, 以及详细文档.

### [Getting Started with Go on App Engine](https://developers.google.com/appengine/docs/go/gettingstarted/)

如何使用 [Google App Engine](https://developers.google.com/appengine/) 来开发和部署一个简单的 Go 项目.

### Frequently Asked Questions (FAQ)

关于 Go 语言的一些常见问题的回答.

### [Go Language Community Wiki](http://code.google.com/p/go-wiki/wiki)

一份由社区维护的 wiki 文档.

### Go version 1

#### [Go 1 Release Notes](http://golang.org/doc/go1.html)

一份关于更新你的代码使其工作在 Go 1的教程.

#### [Go 1 and the Future of Go Programs](http://golang.org/doc/go1compat.html)

What Go 1 defines and the backwards-compatibility guarantees one can expect as Go 1 matures. 
Go 1 的新特性并且可以向前兼容并保证和正式的 Go 1 一样的结果.

### Go Articles

#### [The Go Blog](http://blog.golang.org/)

Go 项目的官方 blog, 最新的新闻以及来自 Go 团队质量很高的文章和教程.

##### Codewalks

Go 程序的体验教程.

* [First-Class Functions in Go](http://golang.org/doc/codewalk/functions)
* [Generating arbitrary text: a Markov chain algorithm](http://golang.org/doc/codewalk/markov)
* [Share Memory by Communicating](http://golang.org/doc/codewalk/sharemem)
* [Writing Web Applications](http://golang.org/doc/articles/wiki/) - 构建一个简单的 web 应用程序.

##### Language

* [JSON-RPC: a tale of interfaces](http://golang.org/doc/articles/json_rpc_tale_of_interfaces.html)
* [Go's Declaration Syntax](http://golang.org/doc/articles/gos_declaration_syntax.html)
* [Defer, Panic, and Recover](http://golang.org/doc/articles/defer_panic_recover.html)
* [Go Concurrency Patterns: Timing out, moving on](http://golang.org/doc/articles/concurrency_patterns.html)
* [Go Slices: usage and internals](http://golang.org/doc/articles/slices_usage_and_internals.html)
* [A GIF decoder: an exercise in Go interfaces](http://blog.golang.org/2011/05/gif-decoder-exercise-in-go-interfaces.html)
* [Error Handling and Go](http://golang.org/doc/articles/error_handling.html)

##### Packages

* [JSON and Go](http://golang.org/doc/articles/json_and_go.html) - using the [json](http://golang.org/pkg/encoding/json/) package.
* [Gobs of data](http://golang.org/doc/articles/gobs_of_data.html) - the design and use of the [gob](http://golang.org/pkg/encoding/gob/) package.
* The [Laws of Reflection](http://golang.org/doc/articles/laws_of_reflection.html) - the fundamentals of the [reflect](http://golang.org/pkg/reflect/) package.
* [The Go image package](http://golang.org/doc/articles/image_package.html) - the fundamentals of the [image](http://golang.org/pkg/image/) package.
* [The Go image/draw package](http://golang.org/doc/articles/image_draw.html) - the fundamentals of the [image/draw](http://golang.org/pkg/image/draw/) package.

##### Tools

* [About the Go command](http://golang.org/doc/articles/go_command.html) - why we wrote it, what it is, what it's not, and how to use it.
* [C? Go? Cgo!](http://golang.org/doc/articles/c_go_cgo.html) - linking against C code with [cgo](http://golang.org/cmd/cgo/).
* [Debugging Go Code with GDB](http://golang.org/doc/gdb)
* [Godoc: documenting Go code](http://golang.org/doc/articles/godoc_documenting_go_code.html) - writing good documentation for godoc.
* [Profiling Go Programs](http://blog.golang.org/2011/06/profiling-go-programs.html)

### Talks

talks 标记为红色(*) 是在 Go 1 之前写的并且包含一些不再正确例子, 但是它们仍然有一定价值.

### [A Video Tour of Go](http://research.swtch.com/gotour)

三件事使 Go fast, fun, and productive: 接口, reflection 以及并发. 构建一个有趣的爬虫来演示这些.

### [Go Concurrency Patterns Go 并发模式](http://www.youtube.com/watch?v=f6kdp27TYZs)

并发是高性能网络服务的关键设计. Go 的并发元(goroutines and channels) 提供一个执行并发表达式的简单, 有效的含义. 在这个 talk 中我们看到并发问题是怎样巧妙的被简单的 Go 代码优雅的解决的.

### [Meet the Go team](http://www.youtube.com/watch?v=sln-gJaURzk)

一个 David Symonds, Robert Griesemer, Rob Pike, Ken Thompson, Andrew Gerrand 以及 Brad Fitzpatrick 参与的讨论板.

### [Writing Web Apps in Go*](http://www.youtube.com/watch?v=-i0hat7pdpk)

一个来自于Rob Pike 和 Andrew Gerrand 在 Google I/O 2011的 talk. 它在构造或者开发一个简单的网络应用程序以及揭示[Go runtime for App Engine](http://blog.golang.org/2011/05/go-and-google-app-engine.html)很有用. 查看 [presentation slides](http://talks.golang.org/2011/Writing_Web_Apps_in_Go.pdf)
 

### [Go Programming*](http://www.youtube.com/watch?v=jgVhBThJdXc)

A presentation delivered by Rob Pike and Russ Cox at Google I/O 2010. It illustrates how programming in Go differs from other languages through a set of examples demonstrating features particular to Go. These include concurrency, embedded types, methods on any type, and program construction using interfaces. 
More

### Non-English Documentation

See the [NonEnglish](http://code.google.com/p/go-wiki/wiki/NonEnglish) page at the [Go Wiki](http://code.google.com/p/go-wiki/wiki) for localized documentation. 
查看本土化文档 [NonEnglish](http://code.google.com/p/go-wiki/wiki/NonEnglish) page at the [Go Wiki](http://code.google.com/p/go-wiki/wiki).

### The Go Community

#### [Go Nuts Mailing List](http://groups.google.com/group/golang-nuts)

The [golang-nuts](http://groups.google.com/group/golang-nuts) mailing list is for general Go discussion.

#### [Go Project Dashboard](http://godashboard.appspot.com/project)

A list of external Go projects including programs and libraries.

#### [Go IRC Channel](irc://irc.freenode.net/go-nuts)

#go-nuts on irc.freenode.net is the official Go IRC channel.

The Go Programming Language at Google+

#### [The Go project's Google+ page.](https://plus.google.com/101406623878176903605/posts)

#### [@go_nuts at Twitter](http://twitter.com/go_nuts)

The Go project's official Twitter account.
