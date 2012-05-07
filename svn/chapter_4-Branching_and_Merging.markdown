## Chapter 4. Branching and Merging

Table of Contents

* What's a Branch?
* Using Branches
  * Creating a Branch
  * Working with Your Branch
  * The Key Concepts Behind Branching
* Basic Merging
  * Changesets
  * Keeping a Branch in Sync
  * Reintegrating a Branch
  * Mergeinfo and Previews
  * Undoing Changes
  * Resurrecting Deleted Items
* Advanced Merging
  * Cherrypicking
  * Merge Syntax: Full Disclosure
  * Merges Without Mergeinfo
  * More on Merge Conflicts
  * Blocking Changes
  * Keeping a Reintegrated Branch Alive
  * Merge-Sensitive Logs and Annotations
  * Noticing or Ignoring Ancestry
  * Merges and Moves
  * Blocking Merge-Unaware Clients
  * The Final Word on Merge Tracking
* Traversing Branches
* Tags
  * Creating a Simple Tag
  * Creating a Complex Tag
* Branch Maintenance
  * Repository Layout
  * Data Lifetimes
* Common Branching Patterns
  * Release Branches
  * Feature Branches
* Vendor Branches
  * General Vendor Branch Management Procedure
  * svn_load_dirs.pl
* Summary

> "君子务本 (It is upon the Trunk that a gentleman works.)"
> --Confucius

**Branching, tagging, and merging are concepts common to almost all version control systems.** If you're not familiar with these ideas, we provide a good introduction in this chapter. If you are familiar, hopefully you'll find it interesting to see how Subversion implements 实现 them.

Branching is a fundamental part of version control. If you're going to allow Subversion to manage your data, this is a feature you'll eventually come to depend on. This chapter assumes that you're already familiar with Subversion's basic concepts ([Chapter 1, Fundamental Concepts](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic)).

### What's a Branch?

Suppose it's your job to maintain 维护 a document for a division in your company---a handbook of some sort. One day a different division asks you for the same handbook, but with a few parts “tweaked” 调整 for them, since they do things slightly 略 differently.

What do you do in this situation? You do the obvious: make a second copy of your document and begin maintaining the two copies separately. **As each department asks you to make small changes**, you incorporate 合并 them into one copy or the other.

**You often want to make the same change to both copies**. For example, if you discover a typo in the first copy, it's very likely that the same typo exists in the second copy. The two documents are almost the same, after all; they differ only in small, specific ways.

This is the basic concept of a branch—namely, a line of development that exists independently of another line, yet still shares a common history if you look far 看得远 enough back in time. A branch always begins life as a copy of something, and moves on from there, generating its own history (see [Figure 4.1, “Branches of development”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.whatis.dia-1)).

Subversion has commands to help you maintain parallel 并行 branches of your files and directories. It allows you to create branches by copying your data, and remembers that the copies are related to one another. It also helps you duplicate changes from one branch to another. Finally, it can make portions 部分 of your working copy reflect different branches so that you can “mix and match” different lines of development in your daily work.

### Using Branches

At this point, you should understand how each commit creates a new state of the filesystem tree (called a “revision”) in the repository. If you don't, go back and read about revisions in the section called [“Revisions”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic.in-action.revs).

For this chapter, we'll go back to the same example from [Chapter 1, Fundamental Concepts](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic). Remember that you and your collaborator, Sally, are sharing a repository that contains two projects, paint and calc. Notice that in [Figure 4.2, “Starting repository layout”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.using.dia-1), however, each project directory now contains subdirectories named trunk and branches. The reason for this will soon become clear.

**As before, assume that Sally and you both have working copies of the “calc” project**. Specifically, you each have a working copy of `/calc/trunk`. **All the files for the project are in this subdirectory rather than in `/calc` itself, because your team has decided that `/calc/trunk` is where the “main line” of development is going to take place**.

Let's say that you've been given the task of implementing a large software feature. It will take a long time to write, and will affect all the files in the project. The immediate 即时 problem is that you don't want to interfere with Sally, who is in the process of fixing small bugs here and there. She's depending on the fact that the latest version of the project (in `/calc/trunk`) is always usable. **If you start committing your changes bit by bit, you'll surely break things for Sally (and other team members as well).**

One strategy 策略 is to crawl into a hole(爬到一个洞里): **you and Sally can stop sharing information for a week or two**. That is, start gutting and reorganizing all the files in your working copy, **but don't commit or update until you're completely finished with the task**. There are a number of **problems** with this, though. **First**, it's not very safe. Most people like to save their work to the repository frequently, should something bad accidentally happen to their working copy. **Second**, it's not very flexible. If you do your work on different computers (perhaps you have a working copy of `/calc/trunk` on two different machines), you'll need to manually copy your changes back and forth or just do all the work on a single computer. By that same token, it's difficult to share your changes in progress with anyone else. A common software development “best practice” is to allow your peers 同行 to review your work as you go. If nobody sees your intermediate commits, you lose potential 潜在 feedback and may end up going down the wrong path for weeks before another person on your team notices. **Finally**, when you're finished with all your changes, you might find it very difficult to remerge your final work with the rest of the company's main body of code. Sally (or others) may have made many other changes in the repository that are difficult to incorporate into your working copy—especially if you run svn update after weeks of isolation.

**The better solution is to create your own branch**, or line of development, in the repository. This allows you to save your half-broken work frequently without interfering with others, yet you can still selectively share information with your collaborators. You'll see exactly how this works as we go.

#### Creating a Branch

**Creating a branch is very simple**---you make a copy of the project in the repository using the `svn copy` command. Subversion is able to copy not only single files, but whole directories as well. In this case, you want to make a copy of the `/calc/trunk` directory. Where should the new copy live? Wherever you wish---it's a matter of project policy. Let's say that your team has a policy of creating branches in the `/calc/branches` area of the repository, and you want to name your branch `my-calc-branch`. You'll want to create a new directory, `/calc/branches/my-calc-branch`, which begins its life as a copy of `/calc/trunk`.

You may already have seen `svn copy` used to copy one file to another within a working copy. But it can also be used to do a “remote” copy entirely within the repository. Just copy one URL to another:

<pre><shell>
$ svn copy http://svn.example.com/repos/calc/trunk \
           http://svn.example.com/repos/calc/branches/my-calc-branch \
      -m "Creating a private branch of /calc/trunk."

Committed revision 341.
</shell></pre>

**This command causes a near-instantaneous commit in the repository, creating a new directory in revision 341**. The new directory is a copy of `/calc/trunk`. This is shown in [Figure 4.3, “Repository with new copy”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.using.create.dia-1). **While it's also possible to create a branch by using `svn copy` to duplicate a directory within the working copy, this technique isn't recommended**. It can be quite slow, in fact! Copying a directory on the client side is a linear-time operation 线性时间操作 , in that it actually has to duplicate every file and subdirectory within that working copy directory on the local disk. **Copying a directory on the server, however, is a constant-time operation, and it's the way most people create branches**.

<pre>
##### Cheap Copies 廉价拷贝

Subversion's repository has a special design. When you copy a directory, you don't need to worry about the repository growing huge 巨大---**Subversion doesn't actually duplicate any data. Instead, it creates a new directory entry that points to an existing tree**. If you're an experienced Unix user, you'll recognize this as the same concept behind a hard link. As further changes are made to files and directories beneath the copied directory, Subversion continues to employ this hard link concept where it can. It duplicates data only when it is necessary to disambiguate 消除歧义 different versions of objects.

This is why you'll often hear Subversion users talk about “cheap copies.” It doesn't matter how large the directory is—it takes a very tiny, constant amount of time and space to make a copy of it. In fact, this feature is the basis of how commits work in Subversion: **each revision is a “cheap copy” of the previous revision, with a few items lazily changed within.** (To read more about this, visit Subversion's web site and read about the “bubble up” method in Subversion's design documents.)

Of course, these internal mechanics of copying and sharing data are hidden from the user, who simply sees copies of trees. The main point here is that copies are cheap, both in time and in space. **If you create a branch entirely within the repository (by running `svn copy URL1 URL2`), it's a quick, constant-time operation. Make branches as often as you want.**
</pre>

#### Working with Your Branch

Now that you've created a branch of the project, you can check out a new working copy to start using it:

<pre><shell>
$ svn checkout http://svn.example.com/repos/calc/branches/my-calc-branch
A  my-calc-branch/Makefile
A  my-calc-branch/integer.c
A  my-calc-branch/button.c
Checked out revision 341.
$
</shell></pre>

There's nothing special about this working copy; it simply mirrors a different directory in the repository. When you commit changes, however, Sally won't see them when she updates, because her working copy is of `/calc/trunk`. (Be sure to read the section called [“Traversing 遍历 Branches”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.switchwc) later in this chapter: the svn switch command is an alternative 替代 way of creating a working copy of a branch.)

Let's pretend 假意 that a week goes by, and the following commits happen:

  * You make a change to `/calc/branches/my-calc-branch/button.c`, which creates revision 342.

  * You make a change to `/calc/branches/my-calc-branch/integer.c`, which creates revision 343.

  * Sally makes a change to `/calc/trunk/integer.c`, which creates revision 344.

Now two independent lines of development (shown in [Figure 4.4, “The branching of one file's history”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.using.work.dia-1)) are happening on integer.c.

![The branching of one file's history](img/ch04dia4.png "Figure 4.4. The branching of one file's history")

Things get interesting when you look at the history of changes made to your copy of `integer.c`:

<pre><shell>
$ pwd
/home/user/my-calc-branch

$ svn log -v integer.c
------------------------------------------------------------------------
r343 | user | 2002-11-07 15:27:56 -0600 (Thu, 07 Nov 2002) | 2 lines
Changed paths:
   M /calc/branches/my-calc-branch/integer.c

* integer.c:  frozzled the wazjub.

------------------------------------------------------------------------
r341 | user | 2002-11-03 15:27:56 -0600 (Thu, 07 Nov 2002) | 2 lines
Changed paths:
   A /calc/branches/my-calc-branch (from /calc/trunk:340)

Creating a private branch of /calc/trunk.

------------------------------------------------------------------------
r303 | sally | 2002-10-29 21:14:35 -0600 (Tue, 29 Oct 2002) | 2 lines
Changed paths:
   M /calc/trunk/integer.c

* integer.c:  changed a docstring.

------------------------------------------------------------------------
r98 | sally | 2002-02-22 15:35:29 -0600 (Fri, 22 Feb 2002) | 2 lines
Changed paths:
   A /calc/trunk/integer.c

* integer.c:  adding this file to the project.

------------------------------------------------------------------------
</shell></pre>

Notice that Subversion is tracing the history of your branch's `integer.c` all the way back through time, even traversing the point where it was copied. It shows the creation of the branch as an event in the history, because `integer.c` was implicitly 隐式地 copied when all of `/calc/trunk/` was copied. Now look at what happens when Sally runs the same command on her copy of the file:

<pre><shell>
$ pwd
/home/sally/calc

$ svn log -v integer.c
------------------------------------------------------------------------
r344 | sally | 2002-11-07 15:27:56 -0600 (Thu, 07 Nov 2002) | 2 lines
Changed paths:
   M /calc/trunk/integer.c

* integer.c:  fix a bunch of spelling errors.

------------------------------------------------------------------------
r303 | sally | 2002-10-29 21:14:35 -0600 (Tue, 29 Oct 2002) | 2 lines
Changed paths:
   M /calc/trunk/integer.c

* integer.c:  changed a docstring.

------------------------------------------------------------------------
r98 | sally | 2002-02-22 15:35:29 -0600 (Fri, 22 Feb 2002) | 2 lines
Changed paths:
   A /calc/trunk/integer.c

* integer.c:  adding this file to the project.

------------------------------------------------------------------------
</shell></pre>

Sally sees her own revision 344 change, but not the change you made in revision 343. As far as Subversion is concerned, these two commits affected different files in different repository locations. However, Subversion does show that the two files share a common history. Before the branch copy was made in revision 341, the files used to be the same file. That's why you and Sally both see the changes made in revisions 303 and 98.

#### The Key Concepts 概念 Behind Branching

You should remember two important lessons from this section. **First**, Subversion has no internal concept of a branch---it knows only how to make copies. When you copy a directory, the resultant directory is only a “branch” because you attach that meaning to it. You may think of the directory differently, or treat it differently, but to Subversion it's just an ordinary directory that happens to carry some extra historical information.

**Second**, because of this copy mechanism, Subversion's branches exist as normal filesystem directories in the repository. This is different from other version control systems, where branches are typically defined by adding extra-dimensional “labels” to collections of files. The location of your branch directory doesn't matter to Subversion. Most teams follow a convention of putting all branches into a `/branches` directory, but you're free to invent any policy you wish.

### Basic Merging

Now you and Sally are working on parallel 并行 branches of the project: you're working on a private branch, and Sally is working on the trunk, or main line of development.

For projects that have a large number of contributors, it's common for most people to have working copies of the trunk. **Whenever someone needs to make a long-running change that is likely to disrupt 中断 the trunk, a standard procedure is to create a private branch and commit changes there until all the work is complete.**

So, the good news is that you and Sally aren't interfering 干扰 with each other. The bad news is that it's very easy to drift too far apart. Remember that one of the problems with the “crawl in a hole” strategy is that by the time you're finished with your branch, **it may be near-impossible to merge your changes back into the trunk without a huge number of conflicts**.

Instead, you and Sally might continue to share changes as you work. **It's up to you to decide which changes are worth sharing; Subversion gives you the ability to selectively “copy” changes between branches.** And when you're completely finished with your branch, your entire set of branch changes can be copied back into the trunk. In Subversion terminology 术语, the general act of replicating changes from one branch to another is called merging, and it is performed using various invocations of the `svn merge` command.

In the examples that follow, we're assuming that both your Subversion client and server are running Subversion 1.5 (or later). If either client or server is older than version 1.5, **things are more complicated**: the system won't track changes automatically, and you'll have to use painful manual methods to achieve similar results. **That is, you'll always need to use the detailed merge syntax to specify specific ranges of revisions to replicate** (see the section called [“Merge Syntax: Full Disclosure”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.advanced.advancedsyntax) later in this chapter), and take special care to keep track of what's already been merged and what hasn't. For this reason, we strongly recommend that you make sure your client and server are at least at **version 1.5**.

#### Changesets

Before we proceed 继续 further, we should warn you that there's going to be a lot of discussion of “changes” in the pages ahead. A lot of people experienced 有经验 with version control systems use the terms “change” and “changeset” interchangeably 互换, and we should clarify 阐明 what Subversion understands as a changeset.

Everyone seems to have a slightly 略略 different definition of changeset, or at least a different expectation of what it means for a version control system to have one. For our purposes, let's say that a changeset is just a collection of changes with a unique name. The changes might include textual edits to file contents, modifications to tree structure, or tweaks to metadata. **In more common speak, a changeset is just a patch with a name you can refer to.**

In Subversion, a global revision number `N` names a tree in the repository: it's the way the repository looked after the `N`th commit. It's also the name of an implicit 隐式 changeset: if you compare tree `N` with tree `N`-1, you can derive 派生 the exact patch that was committed. For this reason, it's easy to think of revision `N` as not just a tree, but a changeset as well. If you use an **issue tracker** to manage bugs, you can use the revision numbers to refer to particular patches that fix bugs---for example, “this issue was fixed by r9238.” Somebody can then `run svn log -r 9238` to read about the exact changeset that fixed the bug, and `run svn diff -c 9238` to see the patch itself. And (as you'll see shortly) Subversion's `svn merge` command is able to use revision numbers. You can merge specific changesets from one branch to another by naming them in the merge arguments: passing `-c 9238` to `svn merge` would merge changeset `r9238` into your working copy.

#### Keeping a Branch in Sync

Continuing with our running example, let's suppose that a week has passed since you started working on your private branch. **Your new feature isn't finished yet**, but at the same time you know that other people on your team have continued to make important changes in the project's `/trunk`. It's in your best interest to replicate 重复 those changes to your own branch, just to make sure they mesh well with your changes.

NOTICE: Frequently keeping your branch in sync with the main development line helps prevent “surprise” conflicts when the time comes for you to fold your changes back into the trunk.

Subversion is aware of the history of your branch and knows when it divided away from the trunk. To replicate the latest, greatest trunk changes to your branch, first make sure your working copy of the branch is “clean”—that it has no local modifications reported by `svn status`. Then simply run:

<pre><shell>
$ pwd
/home/user/my-calc-branch

$ svn merge ^/calc/trunk
--- Merging r345 through r356 into '.':
U    button.c
U    integer.c
$
</shell></pre>

This basic syntax---`svn merge URL`---tells Subversion to merge all recent changes from the URL to the current working directory (which is typically the root of your working copy). **Also notice** that we're using the caret (^)  to avoid having to type out the **entire `/trunk` URL**.

After running the prior example, your branch working copy now contains new local modifications, and these edits are duplications of all of the changes that have happened on the trunk since you first created your branch:

<pre><shell>
$ svn status
 M      .
M       button.c
M       integer.c
$
</shell></pre>

At this point, the wise thing to do is look at the changes carefully with `svn diff`, and then build and test your branch. Notice that the current working directory (“.”) has also been modified; the `svn diff` will show that its `svn:mergeinfo` property has been either created or modified. This is important merge-related metadata that you should not touch, since it will be needed by future `svn merge` commands. (We'll learn more about this metadata later in the chapter.)

After performing the merge, you might also need to resolve some conflicts (just as you do with `svn update`) or possibly make some small edits to get things working properly. (**Remember, just because there are no syntactic conflicts doesn't mean there aren't any semantic conflicts!**) If you encounter serious problems, you can always abort the local changes by running `svn revert . -R` (which will undo all local modifications) and start a long “what's going on?” discussion with your collaborators. If things look good, however, you can submit these changes into the repository:

<pre><shell>
$ svn commit -m "Merged latest trunk changes to my-calc-branch."
Sending        .
Sending        button.c
Sending        integer.c
Transmitting file data ..
Committed revision 357.
$
</shell></pre>

At this point, your private branch is now “in sync” with the trunk, so you can rest easier knowing that as you continue to work in isolation, you're not drifting too far away from what everyone else is doing.

<pre>
##### Why Not Use Patches Instead?

A question may be on your mind, especially if you're a Unix user: why bother to use `svn merge` at all? Why not simply use the operating system's patch command to accomplish the same job? For example:

<shell>
$ cd my-calc-branch
$ svn diff -r 341:HEAD ^/calc/trunk > patchfile
$ patch -p0  < patchfile
Patching file integer.c using Plan A...
Hunk #1 succeeded at 147.
Hunk #2 succeeded at 164.
Hunk #3 succeeded at 241.
Hunk #4 succeeded at 249.
done
$
</shell>

In this particular example, there really isn't much difference. **But `svn merge` has special abilities that surpass 超越 the patch program.** The file format used by patch is quite limited; it's able to tweak file contents only. There's no way to represent changes to trees, such as the addition, removal, or renaming of files and directories. Nor can the patch program notice changes to properties. If Sally's change had, say, added a new directory, the output of svn diff wouldn't have mentioned it at all. `svn diff` outputs only the limited patch format, so there are some ideas it simply can't express.

The `svn merge` command, however, can express changes in tree structure and properties by directly applying them to your working copy. Even more important, this command records the changes that have been duplicated to your branch so that Subversion is aware of exactly which changes exist in each location (see the section called [“Mergeinfo and Previews”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.basicmerging.mergeinfo)). This is a critical feature that makes branch management usable; without it, users would have to manually keep notes on which sets of changes have or haven't been merged yet.
</pre>

Suppose that another week has passed. You've committed more changes to your branch, and your comrades have continued to improve the trunk as well. Once again, you'd like to replicate the latest trunk changes to your branch and bring yourself in sync. Just run the same merge command again!

<pre><shell>
$ svn merge ^/calc/trunk
--- Merging r357 through r380 into '.':
U    integer.c
U    Makefile
A    README
$
</shell></pre>

Subversion knows which trunk changes you've already replicated to your branch, so it carefully replicates only those changes you don't yet have. Once again, you'll have to build, test, and `svn commit` the local modifications to your branch.

### Reintegrating 重返 a Branch

What happens when you finally finish your work, though? Your new feature is done, and you're ready to merge your branch changes back to the trunk (so your team can enjoy the bounty of your labor). The process is simple. First, bring your branch in sync with the trunk again, just as you've been doing all along:

<pre><shell>
$ svn merge ^/calc/trunk
--- Merging r381 through r385 into '.':
U    button.c
U    README

$ # build, test, ...

$ svn commit -m "Final merge of trunk changes to my-calc-branch."
Sending        .
Sending        button.c
Sending        README
Transmitting file data ..
Committed revision 390.
</shell></pre>

Now, **you use svn merge with the `--reintegrate` option to replicate your branch changes back into the trunk**. You'll need a working copy of `/trunk`. You can do this by either doing an `svn checkout`, dredging up an old trunk working copy from somewhere on your disk, or using `svn switch` (see the section called [“Traversing Branches”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.switchwc)). Your trunk working copy cannot have any local edits or be at mixed-revisions (see the section called [“Mixed-revision working copies”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic.in-action.mixedrevs)). While these are typically best practices for merging, they are required when using the `--reintegrate` option.

Once you have a clean working copy of the trunk, you're ready to merge your branch back into it:

<pre><shell>
$ pwd
/home/user/calc-trunk

$ svn update  # (make sure the working copy is up to date)
At revision 390.

$ svn merge --reintegrate ^/calc/branches/my-calc-branch
--- Merging differences between repository URLs into '.':
U    button.c
U    integer.c
U    Makefile
 U   .

$ # build, test, verify, ...

$ svn commit -m "Merge my-calc-branch back into trunk!"
Sending        .
Sending        button.c
Sending        integer.c
Sending        Makefile
Transmitting file data ..
Committed revision 391.
</shell></pre>

Congratulations, your branch has now been remerged back into the main line of development. **Notice** our use of the `--reintegrate` option this time around. The option is critical 关键 for reintegrating changes from a branch back into its original line of development---don't forget it! It's needed because this sort of “merge back” is a different sort of work than what you've been doing up until now. Previously, we had been asking `svn merge` to grab 抓取 the “next set” of changes from one line of development (the trunk) and duplicate them to another (your branch). This is fairly straightforward, and each time Subversion knows how to pick up where it left off. In our prior examples, **you can see that first it merges the ranges 345:356 from trunk to branch**; **later on**, **it continues by merging the next contiguously available range, 356:380**. When doing the final sync, it merges the range 380:385.

When merging your branch back to the trunk, however, the underlying mathematics is quite different. Your feature branch is now a mishmash of both duplicated trunk changes and private branch changes, so there's no simple contiguous range of revisions to copy over. By specifying the `--reintegrate` option, you're asking Subversion to carefully replicate only those changes unique to your branch. (And in fact, it does this by comparing the latest trunk tree with the latest branch tree: the resulting difference is exactly your branch changes!)

Keep in mind that the `--reintegrate` option is quite specialized in contrast to the more general nature of most Subversion subcommand options. It supports the use case described above, but has little applicability outside of that. Because of this narrow focus, in addition to requiring an up-to-date working copy with no mixed-revisions, it will not function in combination with most of the other `svn merge` options. **You'll get an error if you use any non-global options but these: `--accept`, `--dry-run`, `--diff3-cmd`, `--extensions`, or `--quiet`. **

Now that your private branch is merged to trunk, you may wish to remove it from the repository:

<pre><shell>
$ svn delete ^/calc/branches/my-calc-branch \
      -m "Remove my-calc-branch, reintegrated with trunk in r391."
Committed revision 392.
</shell></pre>

But wait! Isn't the history of that branch valuable? What if somebody wants to audit 审计 the evolution of your feature someday and look at all of your branch changes? No need to worry. Remember that even though your branch is no longer visible in the /branches directory, its existence is still an immutable part of the repository's history. A simple `svn log` command on the `/branches` URL will show the entire history of your branch. Your branch can even be resurrected 复活 at some point, should you desire 意愿 (see the section called [“Resurrecting Deleted Items”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.basicmerging.resurrect)).

Once a `--reintegrate` merge is done from branch to trunk, the branch is no longer usable for further work. It's not able to correctly absorb 吸收 new trunk changes, nor can it be properly reintegrated to trunk again. For this reason, **if you want to keep working on your feature branch, we recommend destroying it and then re-creating it from the trunk**:

<pre><shell>
$ svn delete http://svn.example.com/repos/calc/branches/my-calc-branch \
      -m "Remove my-calc-branch, reintegrated with trunk in r391."
Committed revision 392.

$ svn copy http://svn.example.com/repos/calc/trunk \
           http://svn.example.com/repos/calc/branches/my-calc-branch
      -m "Recreate my-calc-branch from trunk@HEAD."
Committed revision 393.
</shell></pre>

There is another way of making the branch usable again after reintegration, without deleting the branch. See the section called [“Keeping a Reintegrated Branch Alive”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.advanced.reintegratetwice).
