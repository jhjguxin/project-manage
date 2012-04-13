# Chapter 1. Fundamental Concepts

This chapter is a short, casual随意 introduction to Subversion. If you're new to version control, this chapter is definitely for you. We begin with a discussion of general version control concepts, work our way into the specific ideas behind Subversion, and show some simple examples of Subversion in use.

Even though the examples in this chapter show people sharing collections of program source code, **keep in mind that Subversion can manage any sort of file collection**---it's not limited to helping computer programmers.它无限制的帮助了电脑程序员。

## The Repository

Subversion is a centralized集中 system for sharing information. At its core is a repository, which is a central store of data. The repository stores information in the form of a filesystem tree---a typical hierarchy of files and directories. Any number of clients connect to the repository, and then read or write to these files. By writing data, a client makes the information available to others; by reading data, the client receives information from others. Figure 1.1, “A typical client/server system” illustrates this.

![A typical client/server system](img/Figure-1.1-A typical_client_server_system.jpeg "A typical client/server system")

So why is this interesting? So far, this sounds like the definition of a typical file server. And indeed, the repository is a kind of file server, but it's not your usual breed. What makes the Subversion repository special is that it remembers every change ever written to it---every change to every file, and even changes to the directory tree itself, such as the addition, deletion, and rearrangement of files and directories.

## Versioning Models

**The core mission of a version control system is to enable collaborative editing and sharing of data**. But different systems use different strategies to achieve this. It's **important to understand these different strategies**, for a couple of reasons. First, it will help you compare and contrast existing version control systems, in case you encounter other systems similar to Subversion. Beyond that, it will also help you make more effective use of Subversion, since Subversion itself supports a couple of different ways of working.

## The Problem of File Sharing

All version control systems have to solve the same fundamental problem: how will the system allow users to share information, but prevent them from accidentally stepping on each other's feet? It's all too easy for users to accidentally overwrite each other's changes in the repository.
所有的版本控制系统都在解决根本上相同的问题：系统会怎样允许用户来分享信息，并且防止偶然的画蛇添足？对用户来说间或的覆盖其他的人的操作是很简单的事情。

Consider the scenario shown in Figure 1.2, "The problem to avoid". Suppose we have two coworkers, Harry and Sally. They each decide to edit the same repository file at the same time. __If Harry saves his changes to the repository first, it's possible that (a few moments later) Sally could accidentally overwrite them with her own new version of the file__. While Harry's version of the file won't be lost forever (**because the system remembers every change**), **any changes Harry made won't be present in Sally's newer version of the file, because she never saw Harry's changes to begin with**. Harry's work is still effectively lost---or at least missing from the latest version of the file---and probably by accident. This is definitely a situation we want to avoid!
Harry的工作仍然失去了有效性——或者至少失去了最新版本的文件——这些都是可能出现意外。这无疑是一个我们希望避免的情况！

![The problem to avoid](img/Figure-1.2-The_problem_to_avoid.jpeg "The problem to avoid")

##The Lock-Modify-Unlock Solution

Many version control systems use a lock-modify-unlock model to address the problem of many authors clobbering each other's work. In this model, the repository allows only one person to change a file at a time. This exclusivity policy is managed using locks.这种排他性的策略是使用锁来管理的。 Harry must "lock" a file before he can begin making changes to it. If Harry has locked a file, Sally cannot also lock it, and therefore cannot make any changes to that file. All she can do is read the file and wait for Harry to finish his changes and release his lock. After Harry unlocks the file, Sally can take her turn by locking and editing the file. Figure 1.3, "The lockmodify-unlock solution" demonstrates this simple solution.

![The lockmodify-unlock solution](img/Figure-1.3-The_lock-modify-unlock_solution.jpeg "The lockmodify-unlock solution")

The problem with the lock-modify-unlock model is that it's a bit restrictive限制性 and often becomes a roadblock路障 for users:

* Locking may cause administrative管理的 problems. Sometimes Harry will lock a file and then forget about it. Meanwhile, because Sally is still waiting to edit the file, her hands are tied. And then Harry goes on vacation. Now Sally has to get an administrator to release Harry's lock. The situation ends up causing a lot of unnecessary delay and wasted time.

* Locking may cause unnecessary serialization. What if Harry is editing the beginning of a text file, and Sally simply wants to edit the end of the same file? These changes don't overlap at all. They could easily edit the file simultaneously, and no great harm would come, assuming the changes were properly merged together. There's no need for them to take turns in this situation.

* Locking may create a false sense of security. Suppose Harry locks and edits file A, while Sally simultaneously locks and edits file B. **But what if A and B depend on one another,and the changes made to each are semantically incompatible?** Suddenly A and B don't work together anymore. The locking system was powerless to prevent the problem---yet it somehow provided a false sense of security. It's easy for Harry and Sally to imagine that by locking files, each is beginning a safe, insulated隔离 task, and thus they need not bother discussing their incompatible不相容 changes early on. Locking often becomes a substitute替补 for real communication.

## The Copy-Modify-Merge Solution

Subversion, CVS, and many other version control systems use a **copy-modify-merge model** as an alternative选择性的 to locking. __In this model, each user's client contacts the project repository and creates a personal working copy---a local reflection of the repository's files and directories. Users then work simultaneously and independently, modifying their private copies. Finally, the private copies are **merged together into a new, final version**. The version control system often assists with the merging, but ultimately, a human being is responsible 有责任 for making it happen correctly__.

Here's an example. Say that Harry and Sally each create working copies of the same project, copied from the repository. They work concurrently and make changes to the **same file A within their copies**. Sally saves her changes to the repository **first**. When Harry attempts to save his changes **later**, the repository informs him that his file A is **out of date**. In other words, file A in the repository has somehow changed since he last copied it. **So Harry asks his client to merge any new changes from the repository into his working copy of file A. Chances are that Sally's changes don't overlap with his own; once he has both sets of changes integrated, he saves his working copy back to the repository**. Figure 1.4, "The copy-modify-merge solution" and Figure 1.5, "The copy-modify-merge solution (continued)" show this process.

![The copy-modify-merge solution](img/Figure-1.4-The-copy-modify-merge-solution.jpeg "The copy-modify-merge solution")

Figure 1.5. The copy-modify-merge solution (continued)

![The copy-modify-merge solution (continued)](img/Figure-1.5-The-copy-modify-merge-solution_continued.jpeg "The copy-modify-merge solution (continued)")

But what if Sally's changes do overlap交叠 with Harry's changes? What then? **This situation is called a conflict**, and it's usually not much of a problem. When Harry asks his client to merge the latest repository changes into his working copy, his copy of file A is somehow flagged as being in a state of conflict: he'll be able to see both sets of conflicting changes and manually choose between them. Note that software can't automatically resolve conflicts; **only humans are capable of understanding and making the necessary intelligent choices. Once Harry has manually resolved the overlapping changes—perhaps after a discussion with Sally---he can safely save the merged file back to the repository**.

The **copy-modify-merge model** may sound a bit chaotic混乱的, but in practice, it runs extremely smoothly. Users can work in parallel并行, never waiting for one another. When they work on the same files, it turns out that most of their concurrent并发 changes don't overlap at all; conflicts are infrequent罕见. **And the amount of time it takes to resolve conflicts is usually far less than the time lost by a locking system**.

<pre>
## When Locking Is Necessary

While the lock-modify-unlock model is considered generally harmful to collaboration, 
sometimes locking is appropriate.
The **copy-modify-merge model** is based on the assumption that files are contextually内容相关
 mergeable---that is, that the majority of the files in the repository are line-based text
files
 (such as program source code). But for files with binary二进制 formats, such as artwork
or sound,
it's often impossible to merge conflicting changes. In these situations, it really is necessary
for users to take strict turns when changing the file. Without serialized access, somebody ends up
wasting time on changes that are ultimately discarded.
While
Subversion is **primarily a copy-modify-merge system**, it still recognizes the need to lock an
occasional file, and thus provides mechanisms for this. We discuss this feature in the section called "Locking".
</pre>

## Subversion in Action

It's time to move from the **abstract to the concrete** 抽象到具体. In this section, we'll show real examples of Subversion being used.

## Subversion Repository URLs

Throughout this book, Subversion uses URLs to identify 识别 versioned files and directories in Subversion repositories. For the most part, these URLs use the standard syntax, allowing
for server names and port numbers to be specified as part of the URL:

  ```shell
  $ svn checkout http://svn.example.com:9834/repos
  ...
  ```

But there are some nuances细微之处 in Subversion's handling of URLs that are notable显着. For example, URLs containing the `file://` access method (used for **local repositories**) must, in accordance with convention 按照公约, have either a server name of localhost or no server name at all:

  ```shell
  $ svn checkout file:///var/svn/repos
  ...
  $ svn checkout file://localhost/var/svn/repos
  ...
  ```

Also, users of the file:// scheme on Windows platforms will need to use an unofficially "standard" syntax for accessing repositories that are on the same machine, but on a different drive than the client's current working drive. Either of the two following URL path syntaxes will work, where X is the drive on which the repository resides:

  ```shell
  C:\> svn checkout file:///X:/var/svn/repos
  ...
  C:\> svn checkout "file:///X|/var/svn/repos"
  ...
  ```

In the second syntax, you need to quote the URL so that the vertical bar character is not interpreted as a pipe.你需要使用引号包含URL使得 `|`字符不会被中断为一个管道操作符。 Also,**note that a URL uses forward slashes 斜线 even though the native (non-URL) form of a path on Windows uses backslashes 反斜杠**.

* Tips
  You cannot use Subversion's `file://` URLs in a regular web browser the way typical `file://` URLs can. **When you attempt to view a file:// URL in a regular web browser, it reads and displays the contents of the file at that location by examining the filesystem directly**. However, Subversion's resources exist in a virtual filesystem (see the section called "Repository Layer"), and your browser will not understand how to interact with that filesystem.

Finally, it should be noted that the Subversion client will automatically encode URLs as necessary, just like a web browser does. For example, if a URL contains a space or upper ASCII character as in the following:

  ```shell
  $ svn checkout "http://host/path with space/project/españa"
  ```

then Subversion will escape the unsafe characters and behave as though you had typed:

  ```shell
  $ svn checkout http://host/path%20with%20space/project/espa%C3%B1a
  ```

**If the URL contains spaces, be sure to place it within quotation marks** so that your shell treats the whole thing as a single argument to the svn program.

### Repository URLs

You can access Subversion repositories through many different methods---**on local disk or through various network protocols**, depending on **how your administrator has set things up for you**. A repository location, however, is always a URL. Table 1.1, "Repository access URLs" describes how different URL schemes map to the available access methods.

#### Table 1.1. Repository access URLs

<table>
  <thead>
    <tr>
        <th>Schema</th><th>Access method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>file:///</td><td>Direct repository access (on local disk)</td>
    </tr>
    <tr>
        <td>http://</td><td>Access via WebDAV protocol to Subversion-aware Apache server</td>
    </tr>
    <tr>
        <td>https://</td><td>Same as http://, but with SSL encryption.</td>
    </tr>
    <tr>
        <td>svn://</td><td>Access via custom protocol to an svnserve server</td>
    </tr>
    <tr>
        <td>svn+ssh://</td><td>Same as svn://, but through an SSH tun-nel.</td>
    </tr>

    <tr>
        For more information on how Subversion parses URLs, see the section called "Subversion Repository URLs". For more information on the different types of network servers available for Subversion, see Chapter 6, Server Configuration.
    </tr>
  </tbody>
</table>

## Working Copies

You've already read about working copies; now we'll demonstrate 演示 how the Subversion client creates and uses them.

**A Subversion working copy is an ordinary directory tree on your local system, containing collection of files.** You can edit these files however you wish, and if they're source code files, you can compile your program from them in the usual way. Your working copy is your
own private work area: Subversion will never incorporate other people's changes, nor make your own changes available to others, **until you explicitly tell it to do so. You can even have multiple working copies of the same project**.

After you've made some changes to the files in your working copy and verified that they work properly, Subversion provides you with commands to "publish" your changes to the other people working with you on your project (by writing to the repository). If other people publish their own changes, Subversion provides you with commands to merge those changes into your working copy (by reading from the repository).

**A working copy also contains some extra files, created and maintained by Subversion, to help it carry out these commands**. In particular, each directory in your working copy contains a subdirectory named `.svn`, also known as the working copy's administrative directory. The files in each administrative directory help Subversion recognize which files contain unpublished changes, and which files are out of date with respect to others' work.

**A typical Subversion repository often holds the files (or source code) for several projects; usually, each project is a subdirectory in the repository's filesystem tree.** In this arrangement, a user's working copy will usually correspond to a particular subtree of the repository.

For example, suppose you have a repository that contains two software projects, paint and calc. Each project lives in its own top-level subdirectory, as shown in Figure 1.6, "The
repository's filesystem".

**Figure 1.6. The repository's filesystem**

![The repository's filesystem](img/Figure-1.6-The-repository's-filesystem.jpeg "The repository's filesystem")

To get a working copy, you must check out some subtree of the repository. (The term check out may sound like it has something to do with locking or reserving resources, but it doesn't; it simply creates a private copy of the project for you.) For example, if you check
out /calc, you will get a working copy like this:

  ```shell
  $ svn checkout http://svn.example.com/repos/calc
  A    calc/Makefile
  A    calc/integer.c
  A    calc/button.c
  Checked out revision 56.
  $ ls -A calc
  Makefile button.c integer.c .svn/
  ```

The list of letter `A` in the left margin indicates that Subversion is adding a number of items to your working copy. You now have a personal copy of the repository's `/calc` directory,with one additional entry—`.svn`—which holds the extra information needed by Subversion,as mentioned earlier.

Suppose you make changes to `button.c`. Since the `.svn` directory remembers the file's original modification date and contents, Subversion can tell that you've changed the file. However, **Subversion does not make your changes public until you explicitly tell it to.** The act of publishing your changes is more commonly known as committing (or checking in) changes to the repository.

To publish your changes to others, you can use Subversion's `svn commit` command:

  ```shell
  $ svn commit button.c -m "Fixed a typo in button.c."
  Sending
  button.c
  Transmitting file data .
  Committed revision 57.
  ```

Now your changes to `button.c` have been committed to the repository, with a note describing your change (namely, that you fixed a typo). If another user checks out a working copy of `/calc`, **she will see your changes in the latest version of the file**.

Suppose you have a collaborator, Sally, who checked out a working copy of `/calc` at the same time you did. When you commit your change to `button.c`, Sally's working copy is
left unchanged; **Subversion modifies working copies only at the user's request**.

To bring her project up to date, Sally can ask Subversion to update her working copy, **by using the svn update command. This will incorporate合并的 your changes into her working copy, as well as any others that have been committed since she checked it out.**

  ```shell
  $ pwd
  /home/sally/calc
  $ ls -A
  Makefile button.c integer.c .svn/
  $ svn update
  U    button.c
  Updated to revision 57.
  ```

The output from the `svn update` command indicates 指示 that Subversion updated the contents of `button.c`. Note that Sally didn't need to specify which files to update; **Subversion uses the information in the `.svn` directory as well as further information in the repository, to decide which files need to be brought up to date**.

## Revisions

An `svn commit` operation publishes changes to any number of files and directories as a single atomic 原 transaction. In your working copy, **you can change files' contents; create, delete, rename, and copy files and directories**; and then commit a complete set of changes as an atomic transaction.

By atomic transaction, we mean simply this: **either all of the changes happen in the repository, or none of them happens**. Subversion tries to retain 保留 this atomicity in the face of program crashes, system crashes, network problems, and other users' actions.

**Each time the repository accepts a commit, this creates a new state of the filesystem tree, called a revision**. Each revision is assigned a unique natural number, one greater than the number of the previous revision. The initial revision of a freshly created repository is numbered 0 and consists of nothing but an empty root directory.

**Figure 1.7. The repository**

![Figure 1.7. The repository](img/Figure-1.7-The-repository.jpeg "Figure 1.7. The repository")

<pre>
Global Revision Numbers

Unlike most version control systems, **Subversion's revision numbers apply to entire trees, not individual files**. **Each revision number selects an entire tree, a particular state of the repository after some committed change.** Another way to think about it is that revision `N` represents the state of the repository filesystem after the `Nth` commit.
When Subversion users talk about "revision 5 of foo.c," they really mean "foo.c as it appears in revision 5." **Notice that in general, revisions N and M of a file do not necessarily differ 不同!** Many other version control systems use per-file revision numbers, so this concept may seem unusual at first. (Former CVS users might want to see Appendix 附录
 B, Subversion for CVS Users for more details.)
</pre>

**It's important to note that working copies do not always correspond 对应 to any single revision in the repository; they may contain files from several different revisions.** For example, suppose you check out a working copy from a repository whose most recent revision is 4:

  ```shell
  calc/Makefile:4
  integer.c:4
  button.c:4
  ```

At the moment, this working directory corresponds exactly to revision 4 in the repository. However, suppose you make a change to `button.c`, and commit that change. Assuming no other commits have taken place, your commit will create revision 5 of the repository, and your working copy will now look like this:

  ```shell
  calc/Makefile:4
  integer.c:4
  button.c:5
  ```

Suppose that, at this point, Sally commits a change to `integer.c`, creating revision 6. If you use `svn update` to bring your working copy up to date, it will look like this:

  ```shell
  calc/Makefile:6
  integer.c:6
  button.c:6
  ```

Sally's change to `integer.c` will appear in your working copy, and your change will still be present in `button.c`. In this example, the text of Makefile is identical 表明 in revisions 4, 5, and 6, but Subversion will mark your working copy of Makefile with revision 6 to indicate that it is still current. **So, after you do a clean update at the top of your working copy, it will generally correspond to exactly one revision in the repository.**

## How Working Copies Track the Repository

For each file in a working directory, Subversion records two essential 必要 pieces of information in the `.svn/` administrative area:

* What revision your working file is based on (this is called the file's working revision)
* A timestamp recording when the local copy was last updated by the repository

Given this information, by talking to the repository, Subversion can tell which of the following four states a working file is in:

* Unchanged, and current
  The file is unchanged in the working directory, and no changes to that file have been committed to the repository since its working revision. An `svn commit` of the file will do nothing, and an `svn update` of the file will do nothing.

* Locally changed, and current
  The file has been changed in the working directory, and no changes to that file have been committed to the repository since you last updated. There are local changes that have not been committed to the repository; thus an `svn commit` of the file will succeed in publishing your changes, and an `svn update` of the file will do nothing.

* Unchanged, and out of date
  The file has not been changed in the working directory, but it has been changed in the repository. The file should eventually be updated in order to make it current with the latest public revision. An `svn commit` of the file will do nothing, and an `svn update` of the file will fold the latest changes into your working copy.

* Locally changed, and out of date
  The file has been changed both in the working directory and in the repository. An `svn commit` of the file will fail with an "out-of-date" error. **The file should be updated first;an svn update command will attempt to merge the public changes with the local changes**. If Subversion can't complete the merge in a plausible way automatically, it leaves it to the user to resolve the conflict.

This may sound like a lot to keep track of, but the `svn status` command will show you the state of any item in your working copy. For more information on that command, see the section called "See an overview of your changes".

## Mixed Revision Working Copies

As a general principle, Subversion tries to be as flexible as possible. One special kind of flexibility is the ability to have a working copy containing files and directories with a mix of different working revision numbers. **Unfortunately**, this flexibility tends to confuse a number of new users. If the earlier example showing mixed revisions perplexed 困惑 you, here's a primer入门级的 on why the feature exists and how to make use of it.

### Updates and commits are separate

One of the fundamental rules 根本规则 of Subversion is that a "push" action does not cause a "pull" 拉,nor vice versa. **Just because you're ready to submit new changes to the repository doesn't mean you're ready to receive changes from other people**. And if you have new changes still in progress, `svn update` should gracefully 优雅的 merge repository changes into your own,rather than forcing you to publish them.

The main side effect of this rule is that it means a working copy has to do extra bookkeeping to track mixed revisions as well as be tolerant 包容 of the mixture 合成. It's made more complicated 复杂 by the fact that directories themselves are versioned.

For example, suppose you have a working copy entirely at revision 10. You edit the file `foo.html` and then perform an `svn commit`, which creates revision 15 in the repository. After the commit succeeds, many new users would expect the working copy to be entirely at revision 15, but that's not the case! Any number of changes might have happened in the repository between revisions 10 and 15. The client knows nothing of those changes in the
repository, since you haven't yet run `svn update`, and `svn commit` doesn't pull down new
changes. If, on the other hand, `svn commit` were to automatically download the newest
changes, it would be possible to set the entire working copy to revision 15---but then we'd
be breaking the fundamental rule of "push" and "pull" remaining separate actions. Therefore, the only safe thing the Subversion client can do is mark the one file—`foo.html`—as
being at revision 15. The rest of the working copy remains at revision 10. Only by running
`svn update` can the latest changes be downloaded and the whole working copy be marked as revision 15.

### Mixed revisions are normal

The fact is, every time you run `svn commit` your working copy ends up with some mixture of revisions. The things you just committed are marked as having larger working revisions than everything else. After several commits (with no updates in between), your working copy will contain a whole mixture of revisions. Even if you're the only person using the repository, you will still see this phenomenon 现象. To examine your mixture of working revisions, **use the `svn status` command with the `--verbose` option** (see the section called "See an overview of your changes" for more information).

Often, new users are completely unaware that their working copy contains mixed revisions. This can be confusing, because many client commands are sensitive 敏感 to the working revision of the item they're examining. For example, the `svn log` command is used to display the history of changes to a file or directory (see the section called "Generating a List of Historical Changes"). When the user invokes this command on a working copy object, he expects to see the entire history of the object. But if the object's working revision is quite old (often because svn update hasn't been run in a long time), the history of the older version of the object is shown.

### Mixed revisions (复合的revisions号) are useful

If your project is sufficiently 充分 complex, you'll discover that it's sometimes nice to forcibly强制 backdate (or update to a revision older than the one you already have) portions of your working copy to an earlier revision; you'll learn how to do that in **Chapter 2, Basic Usage**. Perhaps you'd like to test an earlier version of a submodule contained in a subdirectory, or perhaps you'd like to figure out when a bug first came into existence in a specific file. This is the "time machine" aspect of a version control system—the feature that allows you to move any portion of your working copy forward and backward in history.

### Mixed revisions have limitations 复合 revisions 的不足

However you make use of mixed revisions in your working copy, there are limitations to this flexibility.

First, **you cannot commit the deletion of a file or directory that isn't fully up to date**. If a newer version of the item exists in the repository, your attempt to delete will be rejected to prevent you from accidentally 偶然 destroying changes you've not yet seen.

Second, you cannot commit a metadata change to a directory unless it's fully up to date. You'll learn about attaching "properties" to items in Chapter 3, Advanced Topics. A directory's working revision defines a specific set of entries and properties, and thus committing a property change to an out-of-date directory may destroy properties you've not yet seen.

## Summary

* We introduced the notions of the central repository, the client working copy, and the array of repository revision trees.
* We saw some simple examples of how two collaborators can use Subversion to publish and receive changes from one another, using the "copy-modify-merge" model.
* We talked a bit about the way Subversion tracks and manages information in a working copy.

At this point, you should have a good idea of how Subversion works in the most general sense. Armed with this knowledge, you should now be ready to move into the next chapter, which is a detailed tour of Subversion's commands and features.

