# Version Control with Subversion
> -- (learn doc by francis)
_______________

## How to Read This Book

New users
> Your administrator has probably set up Subversion already, and you need to learn how to use the client. If you've **never used a version control system**, then Chapter 1, Fundamental Concepts(基本原则) is a vital introduction to the ideas behind version control. Chapter 2,Basic Usage is a guided tour of the Subversion client.
  第一章，目的是着重介绍基于版本控制的基本原则。第二章，Subversion client的体验的基本使用说明。

Advanced users
> Whether you're a user or administrator, eventually your project will grow larger. You're
going to want to learn how to do more advanced things with Subversion, such as howto use Subversion's property support (Chapter 3, Advanced Topics), how to use branches and perform merges（分支和执行合并） (Chapter 4, Branching and Merging), how to configure runtime options (Chapter 7, Customizing Your Subversion Experience), and other things. These chapters aren't critical紧要 at first, but be sure to read them once you're comfortable with the basics.

Developers
> Presumably, you're already familiar with Subversion, and now want to either extend it or build new software on top of its many APIs. Chapter 8, Embedding Subversion（嵌入式Subversion） is just for you.

The book ends with reference material—Chapter 9, Subversion Complete Reference is a reference guide for all Subversion commands, and the appendixes cover a number of useful topics. These are the chapters you're mostly likely to come back to after you've finished
the book.

## Conventions Used in This Book

The following typographic conventions are used in this book:

* Constant width 固定宽度
  Used for literal user input, command output, and command-line options
  用于用户输入文字，命令的输出，和命令行选项

* Italic 斜体
  Used for program and Subversion tool subcommand names, file and directory names, and new terms

* Constant width italic
  Used for replaceable items in code and text

## Organization of This Book

The chapters that follow and their contents are listed here:

* Chapter 1, Fundamental Concepts
  Explains the basics of version control and different versioning models, along with Subversion's repository, working copies, and revisions.

* Chapter 2, Basic Usage
  Walks you through a day in the life of a Subversion use. It demonstrates演示 how to use a
Subversion client to obtain, modify, and commit data.

* Chapter 3, Advanced Topics
  Covers more complex features that regular users will eventually come into contact
with, such as versioned metadata, file locking, and peg revisions修订.

* Chapter 4, Branching and Merging
  Discusses branches, merges, and tagging, including best practices for branching and
merging, common use cases, how to undo changes, and how to easily swing from one
branch to the next.

* Chapter 5, Repository Administration
  Describes the basics of the Subversion repository, how to create, configure, and maintain维护 a repository, and the tools you can use to do all of this.

* Chapter 6, Server Configuration
  Explains how to configure your Subversion server and offers different ways to access
your repository: HTTP, the svn protocol, and local disk access. It also covers the details of authentication, authorization and anonymous access.

* Chapter 7, Customizing Your Subversion Experience
  Explores the Subversion client configuration files, the handling of internationalized text,
and how to make external tools cooperate with Subversion.

* Chapter 8, Embedding Subversion
  Describes the internals of Subversion, the Subversion filesystem, and the working copy工作副本 administrative areas **from a programmer's point of view**. It also demonstrates how to use the public APIs to write a program that uses Subversion.还演示了怎用使用公共的 APIs来编写一个程序来使用 Subversion。

* Chapter 9, Subversion Complete Reference
  Explains in great detail every subcommand of svn, svnadmin, and svnlook with plenty of examples for the whole family!

* Appendix A, Subversion Quick-Start Guide
  For the impatient, a whirlwind explanation of how to install Subversion and start using it
immediately. You have been warned.

* Appendix B, Subversion for CVS Users
  Covers the similarities and differences between Subversion and CVS, with numerous suggestions on how to break all the bad habits you picked up from years of using CVS.Included are descriptions of Subversion revision numbers, versioned directories, offline
operations, update versus status, branches, tags, metadata, conflict resolution, and authentication.

* Appendix C, WebDAV and Autoversioning
  Describes the details of WebDAV and DeltaV and how you can configure your Subversion repository to be mounted read/write as a DAV share.

* Appendix D, Copyright
  A copy of the Creative Commons Attribution License, under which this book is licensed.

## What Is Subversion?

Subversion is a free/open source version control system. That is, Subversion manages files and directories, and the changes made to them, over time. This allows you to recover older versions of your data or examine the history of how your data changed. In this regard,**many people think of a version control system as a sort of “time machine.”**

**Subversion can operate across networks, which allows it to be used by people on different computers**. At some level, the ability for various people to modify and manage the same set of data from their respective各自 locations fosters collaboration促成协作. Progress can occur more quickly without a single conduit单通道 through which all modifications must occur. And because the work is versioned, you need not fear that quality is the trade-off for losing that conduit---if some incorrect change is made to the data, just undo that change.

Some version control systems are also **software configuration management (SCM) systems**. These systems are specifically tailored定制的 to manage trees of source code and have many features that are specific to software development---such as natively understanding programming languages, or supplying tools for building software. Subversion, however, is not one of these systems. It is a general system that can be used to manage any collection of files. For you, those files might be source code---for others, anything from grocery shopping lists to digital video mixdowns and beyond.

## Subversion's Architecture

Figure 1, "Subversion's architecture" illustrates a "mile-high" view of Subversion's design.

![Subversion's architecture](img/Figure-1-Subversion's_architecture.jpeg "Subversion's architecture")

**On one end is a Subversion repository that holds all of your versioned data. On the other end is your Subversion client program, which manages local reflections of portions of that versioned data (called "working copies")**. Between these extremes are multiple routes through various Repository Access (RA) layers. Some of these routes go across computer networks and through network servers which then access the repository. Others bypass the network altogether and access the repository directly.

## Subversion's Components Subversion 的组件

Subversion, once installed, has a number of different pieces. The following is a quick overview of what you get. Don't be alarmed惊慌 if the brief descriptions leave you scratching your head---plenty more pages in this book are devoted to alleviating that confusion.
如果简要说明，让你摸不着头脑——在这本书中以更大量的页的描述篇幅，以减轻这种混乱

* svn
  The command-line client program

* svnversion
  A program for reporting the state (in terms of revisions修订 of the items present) of a working copy

* svnlook
  A tool for directly inspecting检查 a Subversion repository

* svnadmin
  A tool for creating, tweaking, or repairing a Subversion repository

* mod_dav_svn
  A plug-in module for the Apache HTTP Server, used to make your repository available to others over a network

* svnserve
  A custom standalone server program, runnable as a daemon process or invokable by SSH; another way to make your repository available to others over a network.

* svndumpfilter
  A program for filtering Subversion repository dump streams

* svnsync
  A program for incrementally mirroring one repository to another over a network
  一个通过网络增量镜像一个仓库到另一个仓库的程序

