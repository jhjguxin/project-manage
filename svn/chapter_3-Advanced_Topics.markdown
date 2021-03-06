# Chapter 2. Basic Usage

## Table of Contents

* Revision Specifiers
  * Revision Keywords
  * Revision Dates
* Peg and Operative Revisions
* Properties
  * Why Properties?
  * Manipulating Properties
  * Properties and the Subversion Workflow
  * Automatic Property Setting
* File Portability
  * File Content Type
  * File Executability
  * End-of-Line Character Sequences
* Ignoring Unversioned Items
* Keyword Substitution
* Sparse Directories
* Locking
  * Creating Locks
  * Discovering Locks
  * Breaking and Stealing Locks
  * Lock Communication
* Externals Definitions
* Changelists
  * Creating and Modifying Changelists
  * Changelists As Operation Filters
  * Changelist Limitations
* Network Model
  * Requests and Responses
  * Client Credentials
    * Caching credentials
    * Disabling password caching
    * Removing cached credentials
    * Command-line authentication
    * Authentication wrap-up

## Summary

If you've been reading this book chapter by chapter, from start to finish, you should by now have acquired 已取得 enough knowledge to use the Subversion client to perform the most common version control operations. You understand how to check out a working copy from a Subversion repository. You are comfortable with submitting and receiving changes using the `svn commit` and `svn update` operations. You've probably even developed a reflex that causes you to run the svn status command almost unconsciously 不知不觉. For all intents and purposes, you are ready to use Subversion in a typical environment.

**But the Subversion feature set doesn't stop at “common version control operations.”** It has other bits of functionality besides just communicating file and directory changes to and from a central repository.

**This chapter highlights some of Subversion's features that, while important, may not be part of the typical user's daily routine**. It assumes that you are familiar with Subversion's basic file and directory versioning capabilities. If you aren't, you'll want to first read [Chapter 1, Fundamental Concepts](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic) and [Chapter 2, Basic Usage](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.tour). Once you've mastered those basics and consumed this chapter, you'll be a Subversion power user!

### Revision Specifiers

As we described in the section called [“Revisions”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic.in-action.revs), **revision numbers in Subversion are pretty straightforward—integers that keep getting larger as you commit more changes to your versioned data**. Still, it doesn't take long before you can no longer remember exactly what happened in each and every revision. **Fortunately**, the typical Subversion workflow doesn't often demand 需求 that you supply arbitrary 随意 revisions to the Subversion operations you perform. **For operations that do** require a revision specifier, you generally supply a revision number that you saw in a commit email, in the output of some other Subversion operation, or in some other context that would give meaning to that particular number.

NOTICE: Referring to revision numbers with an `r` prefix (`r314`, for example) is an established 既定 practice in Subversion communities, and is both supported and encouraged by many Subversion-related tools. In most places where you would specify a bare revision number on the command line, you may also use the `rNNN` syntax.

But occasionally 偶尔, you need to pinpoint 查明 a moment in time for which you don't already have a revision number memorized or handy. So besides the integer revision numbers, svn allows as input some **additional forms** of revision specifiers: **revision keywords** and **revision dates**.

NOTICE: The various forms of Subversion revision specifiers can be mixed and matched when used to specify **revision ranges**. For example, you can use `-r REV1:REV2` where `REV1` is a **revision keyword** and `REV2` is a **revision number**, or where `REV1` is a date and `REV2` is a revision keyword, and so on. The individual revision specifiers are independently evaluated, so you can put whatever you want on the opposite sides of that colon.

#### Revision Keywords

The Subversion client understands a number of **revision keywords**. These keywords can be used instead of integer arguments to the `--revision` (`-r`) option, and are resolved into specific revision numbers by Subversion:

The Subversion client understands a number of revision keywords. These keywords can be used instead of integer arguments to the --revision (-r) option, and are resolved into specific revision numbers by Subversion:

* `HEAD`
    The latest (or “youngest”) revision in the repository.
* `BASE`
    The revision number of an item in a **working copy**. If the item has been locally modified, this refers to the way the item appears without those local modifications.
* `COMMITTED`
    The most recent revision prior to, or equal to, `BASE`, in which an item changed.
* `PREV`
    The revision immediately before the last revision in which an item changed. Technically, this boils down to COMMITTED-1.

As can be derived 派生 from their descriptions, the `PREV`, `BASE`, and `COMMITTED` revision keywords are used only when referring to a **working copy path**---they **don't apply to** repository URLs. `HEAD`, on the other hand, can be used in conjunction with both of these path types.

Here are some examples of revision keywords in action:

<pre><shell>
$ svn diff -r PREV:COMMITTED foo.c
# shows the last change committed to foo.c

$ svn log -r HEAD
# shows log message for the latest repository commit

$ svn diff -r HEAD
# compares 比较 your working copy (with all of its local changes) to the
# latest version of that tree in the repository

$ svn diff -r BASE:HEAD foo.c
# compares the unmodified version of foo.c with the latest version of
# foo.c in the repository

$ svn log -r BASE:HEAD
# shows all commit logs for the current versioned directory since you
# last updated

$ svn update -r PREV foo.c
# rewinds the last change on foo.c, decreasing foo.c's working revision

$ svn diff -r BASE:14 foo.c
# compares the unmodified version of foo.c with the way foo.c looked
# in revision 14
</shell></pre>

#### Revision Dates

Revision numbers reveal 展示 nothing about the world outside the version control system, but sometimes you need to correlate a moment in **real time** with a moment in version history. To facilitate this, the `--revision` (`-r`) option can also accept as input date specifiers wrapped in +curly braces+ 大括号 (`{` and `}`). Subversion accepts the standard **ISO-8601** date and time formats, plus a few others. Here are some examples.

<pre><shell>
$ svn checkout -r {2006-02-17}
$ svn checkout -r {15:30}
$ svn checkout -r {15:30:00.200000}
$ svn checkout -r {"2006-02-17 15:30"}
$ svn checkout -r {"2006-02-17 15:30 +0230"}
$ svn checkout -r {2006-02-17T15:30}
$ svn checkout -r {2006-02-17T15:30Z}
$ svn checkout -r {2006-02-17T15:30-04:00}
$ svn checkout -r {20060217T1530}
$ svn checkout -r {20060217T1530Z}
$ svn checkout -r {20060217T1530-0500}
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin$ svn checkout -r {2012-04-03} https://svn.sinaapp.com/jhjguxin/1/newfile 1
svn: Unable to find repository location for 'https://svn.sinaapp.com/jhjguxin/1/newfile' in revision 360
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin$ svn checkout -r {2012-05-01} https://svn.sinaapp.com/jhjguxin/1/newfile
svn: URL 'https://svn.sinaapp.com/jhjguxin/1/newfile' refers to a file, not a directory
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin$ svn cat -r {2012-05-01} https://svn.sinaapp.com/jhjguxin/1/newfile
the first content for newfile
…
</shell></pre>

NOTICE: Keep in mind that most shells will require you to, at a minimum, quote 引用 or otherwise escape any spaces that are included as part of revision date specifiers. Certain shells may also take issue with the unescaped use of curly brances, too. Consult your shell's documentation for the requirements specific to your environment.

When you specify a date, Subversion resolves that date to the most recent revision of the repository as of that date, and then continues to operate against that resolved revision number:

<pre><shell>
$ svn log -r {2006-11-28}
------------------------------------------------------------------------
r12 | ira | 2006-11-27 12:31:51 -0600 (Mon, 27 Nov 2006) | 6 lines
…
</shell></pre>

<pre>
##### Is Subversion a Day Early?

If you specify a single date as a revision without specifying a time of day (for example 2006-11-27), you may think that Subversion should give you the last revision that took place on the 27th of November. Instead, you'll get back a revision from the 26th, or even earlier. **Remember that Subversion will find the most recent revision of the repository as of the date you give**. If you give a date without a timestamp, **such as 2006-11-27, Subversion assumes a time of 00:00:00**, so looking for the most recent revision won't return anything on the 27th.

If you want to include the 27th in your search, you can either specify the 27th with the time ({"2006-11-27 23:59"}), or just specify the next day ({2006-11-28}).
</pre>

You can also use a range of dates. Subversion will find all revisions between both dates, inclusive:

<pre><shell>
$ svn log -r {2006-11-20}:{2006-11-29}
…
</shell></pre>

WARING: Since the timestamp of a revision is stored as an **unversioned**, modifiable property of the revision (see [the section called “Properties”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.props)), revision timestamps can be changed to represent complete falsifications of true chronology, or even removed altogether. Subversion's ability to correctly convert revision dates into real revision numbers depends on revision datestamps maintaining a sequential ordering—the younger the revision, the younger its timestamp. If this ordering isn't maintained, you will likely find that trying to use dates to specify revision ranges in your repository doesn't always return the data you might have expected.

### Peg 橛 and Operative Revisions

**We copy, move, rename, and completely replace files and directories on our computers all the time**. **And your version control system shouldn't get in the way of your doing these things with your version-controlled files and directories, either**. Subversion's file management support is quite liberating 解放出来, affording 提供 almost as much flexibility for versioned files as you'd expect when manipulating 操纵 your unversioned ones. But that flexibility means that across the lifetime of your repository, a given versioned object might have many paths, and a given path might represent several entirely different versioned objects. **This introduces a certain level of complexity to your interactions 互动 with those paths and objects.**

Subversion is pretty smart about noticing when an object's version history includes such “changes of address”. For example, if you ask for the revision history log of a particular file that was renamed last week, Subversion happily provides all those logs—the revision in which the rename itself happened, plus the logs of relevant revisions both before and after that rename. So, most of the time, you don't even have to think about such things. But occasionally 偶尔, Subversion needs your help to clear up ambiguities 含糊不清.

The simplest example of this occurs +when a directory or file is **deleted from version control**, and then a **new directory or file is created** with the same name and added to version control+. The thing you deleted and the thing you later added aren't the same thing. They merely happen to have had the same path---`/trunk/object`, for example. What, then, does it mean to ask Subversion about the history of `/trunk/object`? Are you asking about the thing currently at that location, or the old thing you deleted from that location? Are you asking about the operations that have happened to all the objects that have ever lived at that path? Subversion needs a hint 示意 about what you really want.

And thanks to `moves`, versioned object history can get far more twisted 扭曲 than even that. For example, +ou might have a directory named `concept`, containing some nascent 初期的 software project you've been toying with. Eventually 最后, though, that project matures to the point that the idea seems to actually have some wings 翅膀, so you do the unthinkable and decide to give the project a name. Let's say you called your software `Frabnaggilywort`. At this point, it makes sense to rename the directory to reflect the project's new name, so `concept` is renamed to `frabnaggilywort`. Life goes on, `Frabnaggilywort` releases a 1.0 version and is downloaded and used daily by hordes 成群 of people aiming to improve their lives.

It's a nice story, really, **but it doesn't end there.** Entrepreneur 主办人 that you are, you've already got another think in the tank. So you make a new directory, `concept`, and the `cycle` begins again. In fact, the `cycle` begins again many times over the years, each time starting with that old `concept` directory, then sometimes seeing that directory renamed as the idea cures, sometimes seeing it deleted when you scrap 废弃 the idea. Or, to get really sick, maybe you rename `concept` to something else for a while, but later rename the thing back to `concept` for some reason.

In scenarios like these, attempting to instruct Subversion to work with these reused 重复使用 paths can be a little like instructing a motorist 驾驶者 in Chicago's West Suburbs to drive east down Roosevelt Road and turn left onto Main Street. In a mere 20 minutes, you can cross “Main Street” in Wheaton, Glen Ellyn, and Lombard. And no, they aren't the same street. Our motorist---and our Subversion---need a little more detail to do the right thing.

Fortunately, Subversion allows you to tell it exactly which Main Street you meant. The mechanism 机制 used is called **a peg revision**, and you provide these to Subversion for the sole purpose of identifying 查明 unique lines of history. Because at most one versioned object may occupy a path at any given time—or, more precisely, in any one revision—---the combination of a path and **a peg revision** is all that is needed to unambiguously 明确 identify a specific line of history. Peg revisions are specified to the Subversion command-line client using at syntax, so called because the syntax involves appending an “at sign” (`@`) and the peg revision to the end of the path with which the revision is associated.

But what of the `--revision` (`-r`) of which we've spoken so much in this book? That revision (or set of revisions) is called the operative 执行 revision (or operative revision range). Once a particular line of history has been identified using a path and peg revision, Subversion performs the requested operation using the operative revision(s). To map this to our Chicagoland streets analogy, if we are told to go to +606 N. Main Street in Wheaton+, we can think of “Main Street” as our path and “Wheaton” as our peg revision. These two pieces of information identify a unique path that can be traveled 前往 (north or south on Main Street), and they keep us from traveling up and down the wrong Main Street in search of our destination. Now we throw in “606 N.” as our operative revision of sorts, and we know exactly where to go.

<pre>
#### The Peg Revision Algorithm

The Subversion command-line client performs the peg revision algorithm 算法 any time it needs to resolve possible ambiguities 含糊不清 in the paths and revisions provided to it. Here's an example of such an invocation:

<shell>
$ svn command -r OPERATIVE-REV item@PEG-REV
</shell>

If `OPERATIVE-REV` is older than `PEG-REV`, the algorithm is as follows:

  1. Locate `item` in the revision identified by `PEG-REV`. There can be only one such object.
  1. Trace the object's history backwards (through any possible renames) to its ancestor 祖先 in the revision `OPERATIVE-REV`.
  1. Perform the requested action on that ancestor, wherever it is located, or whatever its name might be or might have been at that time.

But what if `OPERATIVE-REV` is younger than `PEG-REV`? Well, that adds some complexity to the theoretical problem of locating the path in `OPERATIVE-REV`, because the path's history could have forked multiple times (thanks to copy operations) between `PEG-REV` and `OPERATIVE-REV`. And that's not all---Subversion doesn't store enough information to performantly trace an object's history forward, anyway. So the algorithm is a little different:

  1. Locate item in the revision identified by `OPERATIVE-REV`. There can be only one such object.
  1. Trace the object's history backward (through any possible renames) to its ancestor in the revision `PEG-REV`.
  1. Verify that the object's location (path-wise) in `PEG-REV` is the same as it is in `OPERATIVE-REV`. If that's the case, at least the two locations are known to be directly related, so perform the requested action on the location in `OPERATIVE-REV`. Otherwise, relatedness was not established, so error out with a loud complaint that no viable location was found. (Someday, we expect that Subversion will be able to handle this usage scenario with more flexibility and grace.)

Note that even when you don't explicitly supply a peg revision or operative revision, they are still present. For your convenience, the default peg revision is BASE for working copy items and HEAD for repository URLs. And when no operative revision is provided, it defaults to being the same revision as the peg revision.
</pre>

Say that **long ago** we created our repository, and in +revision 1+ we added our first `concept` directory, plus an `IDEA` file in that directory talking about the `concept`. After several revisions in which real code was added and tweaked, we, in +revision 20+, renamed this directory to `frabnaggilywort`. By +revision 27+, we had a new `concept`, a new `concept` directory to hold it, and a new `IDEA` file to describe it. And then five years and thousands of revisions flew by, just like they would in any good romance story.

Now, years later, we wonder what the `IDEA` file looked like back in +revision 1+. But Subversion needs to know whether we are asking about how the current file looked back in +revision 1+, or whether we are asking for the contents of whatever file lived at `concepts/IDEA` in +revision 1+. Certainly those questions have different answers, and because of **peg revisions**, you can ask those questions. To find out how the current `IDEA` file looked in that old revision, you run:

<pre><shell>
$ svn cat -r 1 concept/IDEA 
svn: Unable to find repository location for 'concept/IDEA' in revision 1
</shell></pre>

Of course, in this example, the current `IDEA` file didn't exist yet in +revision 1+, so Subversion gives an error. The previous command is shorthand for a longer notation 表示法 which explicitly lists a peg revision. The expanded notation is:

<pre><shell>
$ svn cat -r 1 concept/IDEA@BASE
svn: Unable to find repository location for 'concept/IDEA' in revision 1
</shell></pre>

And when executed, it has the expected results.

The perceptive 感觉灵敏的 reader is probably wondering at this point whether the peg revision syntax causes problems for working copy paths or URLs that actually have at signs in them. After all, **how does svn know whether news@11 is the name of a directory in my tree or just a syntax for “revision 11 of news”?** Thankfully, **while svn will always assume the latter**, there is a trivial workaround. You need only append an at sign to the end of the path, such as `news@11@`(this mean `news@11` is a directory),`news@@`(this mean `news@` is a directory). svn cares only about the last at sign in the argument, and it is not considered illegal to omit a literal peg revision specifier after that at sign. This workaround even applies to paths that end in an at sign---you would use filename@@ to talk about a file named filename@.

Let's ask the other question, then---in +revision 1+, what were the contents of whatever file occupied the address `concepts/IDEA` at the time? We'll use an explicit peg revision to help us out.

<pre><shell>
$ svn cat concept/IDEA@1
The idea behind this project is to come up with a piece of software
that can frab a naggily wort.  Frabbing naggily worts is tricky
business, and doing it incorrectly can have serious ramifications, so
we need to employ over-the-top input validation and data verification
mechanisms.
</shell></pre>

Notice that we didn't provide an +operative revision+ this time. That's because when no operative revision is specified, Subversion assumes a default operative revision that's the same as the +peg revision+.

As you can see, the output from our operation appears to be correct. The text even mentions frabbing naggily worts, so this is almost certainly the file that describes the software now called `Frabnaggilywort`. In fact, we can verify this using the combination of an explicit peg revision and explicit operative revision. We know that in `HEAD`, the Frabnaggilywort project is located in the frabnaggilywort directory. So we specify that we want to see how the line of history identified in `HEAD` as the path `frabnaggilywort/IDEA` looked in revision 1.

<pre><shell>
$ svn cat -r 1 frabnaggilywort/IDEA@HEAD
The idea behind this project is to come up with a piece of software
that can frab a naggily wort.  Frabbing naggily worts is tricky
business, and doing it incorrectly can have serious ramifications, so
we need to employ over-the-top input validation and data verification
mechanisms.
</shell></pre>

And the peg and operative revisions need not be so trivial, either. For example, say `frabnaggilywort` had been deleted from `HEAD`, but we know it existed in +revision 20+, and we want to see the diffs for its `IDEA` file between +revisions 4+ and +10+. We can use peg revision 20 in conjunction 关联 with the URL that would have held Frabnaggilywort's `IDEA` file in +revision 20+, and then use 4 and 10 as our operative revision range.

<pre><shell>
$ svn diff -r 4:10 http://svn.red-bean.com/projects/frabnaggilywort/IDEA@20
Index: frabnaggilywort/IDEA
===================================================================
--- frabnaggilywort/IDEA	(revision 4)
+++ frabnaggilywort/IDEA	(revision 10)
@@ -1,5 +1,5 @@
-The idea behind this project is to come up with a piece of software
-that can frab a naggily wort.  Frabbing naggily worts is tricky
-business, and doing it incorrectly can have serious ramifications, so
-we need to employ over-the-top input validation and data verification
-mechanisms.
+The idea behind this project is to come up with a piece of
+client-server software that can remotely frab a naggily wort.
+Frabbing naggily worts is tricky business, and doing it incorrectly
+can have serious ramifications, so we need to employ over-the-top
+input validation and data verification mechanisms.
</shell></pre>

### Properties 属性

We've already covered in detail how Subversion stores and retrieves various versions of files and directories in its repository. Whole chapters have been devoted to this most fundamental piece of functionality provided by the tool. And if the versioning support stopped there, Subversion would still be complete from a version control perspective.

In addition to versioning your directories and files, **Subversion provides interfaces for adding, modifying, and removing versioned metadata on each of your versioned directories and files. We refer to this metadata as properties**, and they can be thought of as two-column tables that map **property names to arbitrary values attached to each item in your working copy**. Generally speaking, the names and values of the properties can be whatever you want them to be, with the constraint 强制 that the names must contain only ASCII characters. And the best part about these properties is that they, too, are versioned, just like the textual contents of your files. You can modify, commit, and revert property changes as easily as you can file content changes. And the sending and receiving of property changes occurs as part of your typical commit and update operations—you don't have to change your basic processes to accommodate them.

NOTICE: Subversion has reserved the set of properties whose names begin with `svn`: as its own. While there are only a handful of such properties in use today, you should avoid creating custom properties for your own needs whose names begin with this prefix. Otherwise, you run the risk that a future release of Subversion will grow support for a feature or behavior driven by a property of the same name but with perhaps an entirely different interpretation.
