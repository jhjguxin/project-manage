# Chapter 2. Basic Usage

Now we will go into the details of using Subversion. By the time you reach the end of this chapter, you will be able to perform all the tasks you need to use Subversion in a normal day's work. You'll start with getting your files into Subversion, followed by an initial checkout of your code. We'll then walk you through making changes and examining those changes. You'll also see how to bring changes made by others into your working copy, examine them, and work through any conflicts that might arise.

Note that this chapter is **not meant to be an exhaustive 全面的 list of all of Subversion's commands**—rather, it's a conversational 对话式 introduction to the most common Subversion tasks that you'll encounter. This chapter assumes that you've read and understood Chapter 1,
Fundamental Concepts and are familiar with the general model of Subversion. For a complete reference of all commands, see Chapter 9, Subversion Complete Reference.

## Help!

Before reading on, here is the **most important command you'll ever need when using Subversion:** `svn help`. The Subversion command-line client is self-documenting—at any time, a quick `svn help` subcommand will describe the syntax, options, and behavior of the subcommand.

<pre>
~$ svn help import
import: Commit an unversioned file or tree into the repository.
usage: import [PATH] URL

  Recursively commit a copy of PATH to URL.
  If PATH is omitted '.' is assumed.
  Parent directories are created as necessary in the repository.
  If PATH is a directory, the contents of the directory are added
  directly under URL.
  Unversionable items such as device files and pipes are ignored
  if --force is specified.

Valid options:
  -q [--quiet]             : print nothing, or only summary information
  -N [--non-recursive]     : obsolete; try --depth=files or --depth=immediates
  --depth ARG              : limit operation by depth ARG ('empty', 'files',
                            'immediates', or 'infinity')
  --auto-props             : enable automatic properties
  --force                  : force operation to run
  --no-auto-props          : disable automatic properties
  -m [--message] ARG       : specify log message ARG
  -F [--file] ARG          : read log message from file ARG
  --force-log              : force validity of log message source
  --editor-cmd ARG         : use ARG as external editor
  --encoding ARG           : treat value as being in charset encoding ARG
  --with-revprop ARG       : set revision property ARG in new revision
                             using the name[=value] format
  --no-ignore              : disregard default and svn:ignore property ignores

Global options:
  --username ARG           : specify a username ARG
  --password ARG           : specify a password ARG
  --no-auth-cache          : do not cache authentication tokens
  --non-interactive        : do no interactive prompting
  --trust-server-cert      : accept unknown SSL server certificates without
                             prompting (but only with '--non-interactive')
  --config-dir ARG         : read user configuration files from directory ARG
  --config-option ARG      : set user configuration option in the format:
                                 FILE:SECTION:OPTION=[VALUE]
                             For example:
                                 servers:global:http-library=serf
</pre>

<pre>
Options and Switches and Flags, Oh My!

The Subversion command-line client has numerous command modifiers (which we call options), but there are two distinct 明显 kinds of options: short options are a single hyphen 连字符号 followed by a single letter, and long options consist of two hyphens followed by a number of letters (e.g., -s and --this-is-a-long-option, respectively). **Every option has a long format, but only certain options have an additional short format (these are typically options that are frequently used).** To maintain clarity, we usually use the long form in code examples, but when describing options, if there's a short form, we'll provide the long form (to improve clarity) and the short form (to make it easier to remember). You should use whichever one you're more comfortable with,but don't try to use both.
</pre>

## Getting Data into Your Repository

You can get new files into your Subversion repository in two ways: `svn import` `and svn add`. We'll discuss `svn import` now and will discuss `svn add` later in this chapter when we
review a typical day with Subversion.

### svn import

The `svn import` command is a quick way to copy an unversioned tree of files into a repository, creating intermediate directories as necessary. `svn import` doesn't require a working copy, and your files are immediately committed to the repository. **You typically use this when you have an existing tree of files that you want to begin tracking in your Subversion repository.** For example:

  ```shell
  $ svnadmin create /var/svn/newrepos
  $ svn import mytree file:///var/svn/newrepos/some/project \
      -m "Initial import"
  Adding    mytree/foo.c
  Adding    mytree/bar.c
  Adding    mytree/subdir
  Adding    mytree/subdir/quux.h
  Committed revision 1.
  ```

The previous example copied the contents of directory `mytree` under the directory `some/project` in the repository:

  ```shell
  $ svn list file:///var/svn/newrepos/some/project
  bar.c
  foo.c
  subdir/
  ```

Note that after the import is finished, the original tree is not converted into a working copy.To start working, you still need to `svn checkout` a fresh working copy of the tree.

## Recommended Repository Layout

While Subversion's flexibility 灵活性 allows you to lay out your repository in any way that you choose, **we recommend that you create a `trunk` directory to hold the "main line" of development, a `branches` directory to contain branch copies, and a `tags` directory to contain tag copies**. For example:

  ```shell
  $ svn list file:///var/svn/repos
  /trunk
  /branches
  /tags
  ```

You'll learn more about **tags and branches in Chapter 4, Branching and Merging**. For details and how to set up multiple projects, see the section called "Repository Layout" and the section called "Planning Your Repository Organization" to read more about project roots.

## Initial Checkout

Most of the time, you will start using a Subversion repository by doing a `checkout` of your project.Checking out a repository creates a “working copy” of it on your local machine.
This copy contains the HEAD (latest revision) of the Subversion repository that you specify on the command line

  ```shell
  $ svn checkout http://svn.collab.net/repos/svn/trunk
  A    trunk/Makefile.in
  A    trunk/ac-helpers
  A    trunk/ac-helpers/install.sh
  A    trunk/ac-helpers/install-sh
  A    trunk/build.conf
  ...
  Checked out revision 8810.
  ```

<pre>
**What's in a Name?**

Subversion tries hard not to limit the type of data you can place under version control.The contents of files and property values are stored and transmitted as __binary data__,and the section called “File Content Type” tells you how to give Subversion a hint 提示 that “textual” operations don't make sense for a particular file. There are a few places,however, where Subversion places restrictions 限制 on information it stores.

Subversion internally handles certain bits of data---for example, property names,pathnames, and log messages—as UTF-8-encoded Unicode. **This is not to say that all your interactions with Subversion must involve UTF-8, though. As a general rule**,Subversion clients will gracefully and transparently handle conversions **between UTF-8 and the encoding system in use on your computer**, if such a conversion can meaningfully be done (which is the case for most common encodings in use today).

In WebDAV exchanges and older versions of some of Subversion's administrative files, paths are used as XML attribute values, and property names in XML tag names.This means that pathnames can contain only legal XML (1.0) characters, and properties are further limited to ASCII characters. **Subversion also prohibits `TAB`, `CR`, and `LF` characters in path names to prevent paths from being broken up in diffs or in the output of commands such as `svn log` or `svn status`**.

While it may seem like a lot to remember, in practice these limitations are rarely 很少 a problem. As long as your locale settings are compatible with UTF-8 and you don't use control characters in path names, you should have no trouble communicating with Subversion. The command-line client adds an extra bit of help—to create “legally correct” versions for internal use it will automatically escape illegal path characters as needed in URLs that you type.
</pre>

Although the preceding example checks out the trunk directory, **you can just as easily check out any deep subdirectory of a repository by specifying the subdirectory in the checkout URL**:

  ```shell
  $ svn checkout \
    http://svn.collab.net/repos/svn/trunk/subversion/tests/cmdline/
  A    cmdline/revert_tests.py
  A    cmdline/diff_tests.py
  A    cmdline/autoprop_tests.py
  A    cmdline/xmltests
  A    cmdline/xmltests/svn-test.sh
  ...
  Checked out revision 8810.
  ```

Since Subversion uses a **copy-modify-merge model** instead of **lock-modify-unlock** (see the section called “Versioning Models”), you can immediately make changes to the files and directories in your working copy. **Your working copy is just like any other collection of files and directories on your system. You can edit and change it, move it around, even delete the entire working copy and forget about it.**

WARING: **While your working copy is “just like any other collection of files and directories on your system,” you can edit files at will, but you must tell Subversion about everything else that you do**. For example, if you want to copy or move an item in a working copy, you should use `svn copy` or `svn move` instead of the `copy` and `move` commands provided by your operating system. We'll talk more about them later in this chapter.

Unless you're ready to commit the addition of a new file or directory or changes to existing ones, there's no need to further notify the Subversion server that you've done anything.

<pre>
### What's with the .svn Directory?

Every directory in a working copy contains an administrative area---a subdirectory named `.svn`. Usually, directory listing commands won't show this subdirectory, but it is nevertheless an important directory. Whatever you do, don't delete or change any-thing in the administrative area!Subversion depends on it to manage your working copy.

If you accidentally remove the `.svn` subdirectory, the easiest way to fix the problem is to remove the entire containing directory (a normal system deletion, not `svn delete`), then run `svn update` from a parent directory. The Subversion client will download the directory you've deleted, with a new `.svn` area as well.
</pre>

While you can certainly check out a working copy with the URL of the repository as the only argument, **you can also specify a directory after your repository URL. This places your working copy in the new directory that you name.** For example:

  ```ruby
  $ svn checkout http://svn.collab.net/repos/svn/trunk subv
  A    subv/Makefile.in
  A    subv/ac-helpers
  A    subv/ac-helpers/install.sh
  A    subv/ac-helpers/install-sh
  A    subv/build.conf
  ...
  Checked out revision 8810.
  ```

That will place your working copy in a directory named `subv` instead of a directory named `trunk` as we did previously. The directory `subv` will be created if it doesn't already exist.

### Disabling Password Caching

**When you perform a Subversion operation that requires you to authenticate, by default Subversion caches your authentication credentials on disk.** This is done for convenience so that you don't have to continually reenter your password for future operations. If you're concerned about caching your Subversion passwords, you can disable caching either permanently 永久 or on a case-by-case basis.

To disable password caching for a particular one-time command, pass the `--no-auth-cache` option on the command line. To permanently disable caching, you can add the line `store-passwords = no` to your local machine's Subversion configuration file. See the section called “Client Credentials Caching” for details.

### Authenticating As a Different User

Since Subversion caches auth credentials by default (both username and password), it conveniently remembers who you were acting as the last time you modified your working copy. But sometimes that's not helpful---particularly if you're working in a shared working copy such as a system configuration directory or a web server document root. In this case, just pass the `--username` option on the command line, and Subversion will attempt to au-
thenticate as that user, prompting you for a password if necessary.

### Basic Work Cycle

Subversion has numerous features, options, bells, and whistles, but on a day-to-day basis,odds 可能性 are that you will use only a few of them. In this section, we'll run through the most common things that you might find yourself doing with Subversion in the course of a day's work.

The typical work cycle looks like this:

1. Update your working copy.
  * svn update
1. Make changes.
  * svn add
  * svn delete
  * svn copy
  * svn move
1. Examine your changes.
  * svn status
  * svn diff
1. Possibly undo some changes.
  * svn revert
1. Resolve conflicts (merge others' changes).
  * svn update
  * svn resolve
1. Commit your changes.
  * svn commit

### Update Your Working Copy

When working on a project with a team, you'll want to update your working copy to receive any changes other developers on the project have made since your last update. Use `svn update` to bring your working copy into sync with the latest revision in the repository:

  ```shell
  $ svn update
  U    foo.c
  U    bar.c
  Updated to revision 2.
  ```

In this case, it appears that someone checked in modifications to both `foo.c` and `bar.c` since the last time you updated, and Subversion has updated your working copy to include those changes.

When the server sends changes to your working copy via `svn update`, a letter code is displayed next to each item to let you know what actions Subversion performed to bring your working copy up to date. To find out what these letters mean, run `svn help update`.

### Make Changes to Your Working Copy

Now you can get to work and make changes in your working copy. It's usually most convenient 方便 to decide on a discrete change (or set of changes) to make, such as writing a new feature, fixing a bug, and so on. The Subversion commands that you will use here are `svn add`, `svn delete`,`svn copy`, `svn move`, and `svn mkdir`. However, if you are merely editing files that are already in Subversion, you may not need to use any of these commands until you commit.

**You can make two kinds of changes to your working copy: file changes and tree changes.**You don't need to tell Subversion that you intend to change a file; just make your changes using your text editor, word processor, graphics program, or whatever tool you would normally use. Subversion automatically detects which files have been changed, and in addition, it handles binary files just as easily as it handles text files---and just as efficiently, too.
**For tree changes, you can ask Subversion to “mark” files and directories for scheduled removal, addition, copying, or moving. These changes may take place immediately in your working copy, but no additions or removals will happen in the repository until you commit them.**

<pre>
#### Versioning Symbolic Links

**On non-Windows platforms, Subversion is able to version files of the special type symbolic link (or “symlink”)**. A symlink is a file that acts as a sort of transparent 透明 reference to some other object in the filesystem, allowing programs to read and write to those objects indirectly 间接 by way of performing operations on the symlink itself.__When a symlink is committed into a Subversion repository, Subversion remembers that the file was in fact a symlink, as well as the object to which the symlink “points.”__

**When that symlink is checked out to another working copy on a non-Windows system, Subversion reconstructs a real filesystem-level symbolic link from the versioned symlink.** But that doesn't in any way limit the usability of working copies on systems such as Windows that do not support symlinks. On such systems, Subversion simply creates a regular text file whose contents are the path to which to the original symlink pointed. While that file can't be used as a symlink on a Windows system, it also won't prevent Windows users from performing their other Subversion-related activities.

Example – Creating a symlink in your working copy:

<code>
$ mkdir A
$ ln -s A link
$ svn add --force .
A         A
A         link
$ svn commit -m "link there"
</code>

the contents of the link file in svn:

```shell
link A
```

Example – change symlink target

```shell
$ svn del --force link
$ svn commit -m "no link"
$ mkdir B
$ ln -s B link
$ svn add --force .
$ svn commit -m "link changed to B"
the contents of the link file in svn:
link B
```
</pre>

Here is an overview of the five Subversion subcommands that you'll use most often to make tree changes:

`svn add foo`
  Schedule file, directory, or symbolic link `foo` to be added to the repository. When you next commit, `foo` will become a child of its parent directory. **Note** that if `foo` is a directory, everything underneath `foo` will be scheduled for addition. If you want only to add `foo` itself, pass the `--depth empty` option.

`svn delete foo`
  Schedule file, directory, or symbolic link `foo` to be deleted from the repository. If `foo` is a file or link, it is immediately deleted from your working copy. **If `foo` is a directory, it is not deleted, but Subversion schedules it for deletion. When you commit your changes, `foo` will be entirely removed from your working copy and the repository.**

`svn copy foo bar`
  Create a new item `bar` as a duplicate of `foo` and automatically schedule `bar` for addition. When `bar` is added to the repository on the next commit, its copy history is recorded (as having originally come from `foo`). `svn copy` does not create intermediate directories unless you pass the `--parents` option.

`svn move foo bar`
  This command is exactly the same as running `svn copy foo bar`; `svn delete foo`. That is, `bar` is scheduled for addition as a copy of `foo`, and `foo` is scheduled for removal. `svn move` does not create intermediate directories unless you pass the `--parents` option.

`svn mkdir blort`
  This command is exactly the same as running mkdir `blort`; `svn add blort`.That is, a new directory named `blort` is created and scheduled for addition.

<pre>
### Changing the Repository Without a Working Copy

There are some use cases that immediately commit tree changes to the repository.This happens only when a subcommand is operating directly on a URL, rather than on a working-copy path. In particular, **specific uses of `svn mkdir`, `svn copy`, `svn move`, and `svn delete` can work with URLs (and don't forget that `svn import` always makes changes to a URL).**

URL operations behave in this manner 方式 because commands that operate on a working copy can use the working copy as a sort of “staging area” 临时区域 to set up your changes before committing them to the repository. Commands that operate on URLs don't have this luxury, so when you operate directly on a URL, any of the aforementioned 上述的 actions represents an immediate commit.
</pre>

### Examine Your Changes 检查你的更改

Once you've finished making changes, you need to commit them to the repository, but before you do so, it's usually a good idea to take a look at exactly what you've changed. By examining your changes before you commit, you can make a more accurate log message.You may also discover that you've inadvertently changed a file, and this gives you a chance to revert those changes before committing. Additionally, this is a good opportunity to review and scrutinize changes before publishing them. You can see an overview of the changes you've made by using `svn status`, and dig into the details of those changes by using `svn diff`.

<pre>
Look Ma! No Network!

You can use the commands `svn status`, `svn diff`, and `svn revert` without any network access even if your repository is across the network. This makes it easy to manage your changes-in-progress when you are somewhere without a network connection, such as traveling on an airplane, riding a commuter train, or hacking on the beach.

Subversion does this by keeping private caches of pristine versions of each versioned file inside the `.svn` administrative areas. This allows Subversion to report—and revert—local modifications to those files without network access. This cache (called the “text-base”) also allows Subversion to send the user's local modifications during a commit to the server as a compressed delta (or “difference”) against the pristine version. Having this cache is a tremendous benefit—even if you have a fast Internet connection, it's much faster to send only a file's changes rather than the whole file to the server.
</pre>

Subversion has been optimized to help you with this task, and it is able to do many things without communicating with the repository. In particular, your working copy contains a hidden cached “pristine” copy of each version-controlled file within the `.svn area`. Because of this, Subversion can quickly show you how your working files have changed or even allow you to undo your changes without contacting the repository.

### See an overview of your changes

To get an overview of your changes, you'll use the `svn status` command. You'll probably use `svn status` more than any other Subversion command.

<pre>
### CVS Users: Hold That Update!

You're probably used to using `cvs update` to see what changes you've made to your working copy. `svn status` will give you all the information you need regarding what has changed in your working copy—without accessing the repository or potentially incorporating new changes published by other users.

In Subversion, `svn update` does just that—it updates your working copy with any changes committed to the repository since the last time you updated your working copy. You may have to break the habit of using the `update` command to see what local modifications you've made.
</pre>

If you run `svn status` at the top of your working copy with no arguments, it will detect all file and tree changes you've made. Here are a few examples of the most common status codes that `svn status` can return. (Note that the text following # is not actually printed by `svn status`.)

  ```shell
  ?    scratch.c         # file is not under version control
  A    stuff/loot/bloo.h # file is scheduled for addition
  C    stuff/loot/lump.c # file has textual conflicts from an update
  D    stuff/fish.c      # file is scheduled for deletion
  M    bar.c             # the content in bar.c has local modifications
  ```

In this output format, `svn status` prints six columns of characters, followed by several whitespace characters, followed by a file or directory name. The first column tells the status of a file or directory and/or its contents. The codes we listed are:

* A item
    The file, directory, or symbolic link item has been scheduled for addition into the repository.
* C item
    The file item is in a state of conflict. That is, changes received from the server during an update overlap with local changes that you have in your working copy (and weren't resolved during the update). **You must resolve this conflict before committing your changes to the repository.**
* D item
    The file, directory, or symbolic link item has been scheduled for deletion from the repository.
* M item
    The contents of the file item have been modified.

**`svn status` also has a` --verbose` (-v) option, which will show you the status of every item in your working copy**, even if it has not been changed:

This is the “long form” output of `svn status`. The letters in the first column mean the same as before, but the second column shows the working revision of the item. The third and fourth columns show the revision in which the item last changed, and who changed it.

None of the prior invocations to `svn status` contact the repository---instead, they compare the metadata in the `.svn` directory with the working copy. Finally, there is the `--show-updates` (-u) option, which contacts the repository and adds information about things that are out of date:

  ```shell
  $ svn status -u -v
  M     *    44     23    sally   README
  M          44     20    harry bar.c
        *    44     35    harry stuff/trout.c
  D          44     19    ira stuff/fish.c
  A     0    ?      ?     stuff/things/bloo.h
  Status against revision:    46
  ```

Notice the two asterisks 星号: if you were to run svn update at this point, you would receive changes to `README` and `trout.c`. This tells you some very useful information—**you'll need to update and get the server changes on README before you commit, or the repository will reject your commit for being out of date (more on this subject later).**

`svn status` can display much more information about the files and directories in your working copy than we've shown here—for an exhaustive description of svn status and its output, see `svn status`.

### Examine the details of your local modifications

Another way to examine your changes is with the `svn diff` command. You can find out exactly how you've modified things by running svn diff with no arguments, which prints out file changes in unified diff format:

<pre><code>
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ touch newfile
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn add newfile 
A         newfile
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn diff newfile 
Index: newfile
===================================================================
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ echo "the new content ..." > newfile 
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn diff newfile Index: newfile
===================================================================
--- newfile	(revision 0)
+++ newfile	(revision 0)
@@ -0,0 +1 @@
+the new content ...

jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn di wp-rdf.php
Index: wp-rdf.php
===================================================================
--- wp-rdf.php	(revision 361)
+++ wp-rdf.php	(working copy)
@@ -1,12 +1,6 @@
 <?php
-/**
- * Redirects to the RDF feed
- * This file is deprecated and only exists for backwards compatibility
- *
- * @package WordPress
- */
 
+aaaaaaaaaaaaaaaaaaa
 require( './wp-load.php' );
 wp_redirect( get_bloginfo( 'rdf_url' ), 301 );
-exit;
-?>
+asdsd
</code></pre>

The `svn diff` command produces this output by comparing your working files against the cached “pristine” copies within the .svn area. Files scheduled for addition are displayed as all added text, and files scheduled for deletion are displayed as all deleted text.

Output is displayed in unified diff format. That is, removed lines are prefaced with `-`, and added lines are prefaced with `+`. `svn diff` also prints filename and offset information useful to the `patch` program, so you can generate “patches” by redirecting the diff output to a file:

<pre><code>
$ svn diff > patchfile
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn diff newfile 
Index: newfile
===================================================================
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn diff newfile > newfile
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ cat newfile
Index: newfile
===================================================================
</code></pre>

You could, for example, email the `patch` file to another developer for review or testing prior to a commit.

Subversion uses its internal diff engine, which produces unified diff format, by default. If you want diff output in a different format, specify an external diff program using `--diff-cmd` and pass any flags you'd like to it using the `--extensions (-x)` option. For example, to see local differences in file `foo.c` in context output format while ignoring case differences 忽略大小写差异, you might run `svn diff --diff-cmd /usr/bin/diff --extensions '-i' foo.c`.

### Undoing Working Changes

Suppose while viewing the output of `svn diff` you determine 判定 that all the changes you made to a particular file are mistakes. Maybe you shouldn't have changed the file at all, or perhaps it would be easier to make different changes starting from scratch.

This is a perfect opportunity to use `svn revert`:

  ```shell
  $ svn revert README
  Reverted 'README'
  ```

Subversion reverts the file to its premodified state by overwriting it with the cached “pristine” copy from the `.svn` area. But also **note that `svn revert` can undo any scheduled operations**---for example, you might decide that you don't want to add a new file after all:

<pre><code>
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ touch reverttest
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn st reverttest 
?       reverttest
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn add reverttest 
A         reverttest
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn revert reverttest 
Reverted 'reverttest'
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn st reverttest 
?       reverttest
</code></pre>

WARING: `svn revert item` has exactly the same effect as deleting `item` from your working copy and then running `svn update -r BASE item`. However, if
you're reverting a file, `svn revert` has one very noticeable 明显的 difference---it doesn't have to communicate with the repository to restore your file.

Or perhaps you mistakenly removed a file from version control:

  ```shell
  $ svn status README
  $ svn delete README
  D    README
  $ svn revert README
  Reverted 'README'
  $ svn status README
  ```

### Resolve Conflicts (Merging Others' Changes)

We've already seen how `svn status -u` can predict conflicts. Suppose you run `svn update` and some interesting things occur:

  ```shell
  $ svn update
  U INSTALL
  G README
  Conflict discovered in 'bar.c'.
  Select: (p) postpone, (df) diff-full, (e) edit,
          (h) help for more options:
  ```

The `U` and `G` codes are no cause for concern; those files cleanly absorbed changes from the repository. The files marked with `U` contained no local changes but were `U`pdated with changes from the repository. The `G` stands for mer`G`ed, which means that the file had local changes to begin with, but the changes coming from the repository didn't overlap 交叠 with the local changes.

It's the next few lines which are interesting. First, Subversion reports to you that in its attempt to merge outstanding server changes into the file `bar.c`, it has detected that some of those changes clash with local modifications you've made to that file in your working copy but have not yet committed. Perhaps someone has changed the same line of text you also changed. Whatever the reason, Subversion instantly flags this file as being in a state of conflict. It then asks you what you want to do about the problem, allowing you to interactively choose an action to take toward resolving the conflict. The most commonly used options are displayed, but you can see all of the options by typing `s`:

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/jhjguxin/1$ svn up
Conflict discovered in 'newfile'.
Select: (p) postpone, (df) diff-full, (e) edit,
        (mc) mine-conflict, (tc) theirs-conflict,
        (s) show all options: s

  (e)  edit             - change merged file in an editor
  (df) diff-full        - show all changes made to merged file
  (r)  resolved         - accept merged version of file

  (dc) display-conflict - show all conflicts (ignoring merged version)
  (mc) mine-conflict    - accept my version for all conflicts (same)
  (tc) theirs-conflict  - accept their version for all conflicts (same)

  (mf) mine-full        - accept my version of entire file (even non-conflicts)
  (tf) theirs-full      - accept their version of entire file (same)

  (p)  postpone         - mark the conflict to be resolved later
  (l)  launch           - launch external tool to resolve conflict
  (s)  show all         - show this list
</shell></pre>

Let's briefly review each of these options before we go into detail on what each option means.

`(e) edit`

    Open the file in conflict with your favorite editor, as set in the environment variable EDITOR.

`(df) diff-full`

    Display the differences between the base revision and the conflicted file itself in unified diff format.

`(r) resolved`

    After editing a file, tell svn that you've resolved the conflicts in the file and that it should accept the current contents—basically that you've “resolved” the conflict.

`(dc) display-conflict`

    Display all conflicting regions of the file, ignoring changes which were successfully merged.

`(mc) mine-conflict`

    **Discard any newly received changes from the server which conflict with your local changes to the file under review.** However, accept and merge all non-conflicting changes received from the server for that file.

`(tc) theirs-conflict`

    **Discard any local changes which conflict with incoming changes from the server for the file under review**. However, preserve all non-conflicting local changes to that file.

`(mf) mine-full`

    Discard all newly received changes from the server for the file under review, but preserve all your local changes for that file.

`(tf) theirs-full`

    Discard all your local changes to the file under review and use only the newly received changes from the server for that file.

`(p) postpone`

    **Leave the file in a conflicted state for you to resolve after your update is complete.**

`(l) launch`

    Launch an external program to perform the conflict resolution. This requires a bit of preparation beforehand.

`(s) show all`

    Show the list of all possible commands you can use in interactive conflict resolution.

#### Viewing conflict differences interactively

Before deciding how to attack a conflict interactively 交互, odds 可能性 are that you'd like to see exactly what is in conflict. Two of the commands available at the interactively conflict resolution prompt can assist you here. The first is the “diff-full” command (`df`), which displays all the local modifications to the file in question plus any conflict regions:

<pre><code>
…
Select: (p) postpone, (df) diff-full, (e) edit,
        (mc) mine-conflict, (tc) theirs-conflict,
        (s) show all options: df
--- .svn/text-base/sandwich.txt.svn-base      Tue Dec 11 21:33:57 2007
+++ .svn/tmp/tempfile.32.tmp     Tue Dec 11 21:34:33 2007
@@ -1 +1,5 @@
-Just buy a sandwich.
+<<<<<<< .mine
+Go pick up a cheesesteak.
+=======
+Bring me a taco!
+>>>>>>> .r32
…
</code></pre>

The first line of the diff content shows the previous contents of the working copy (the `BASE` revision), the next content line is your change, and the last content line is the change that was just received from the server (usually the `HEAD` revision).

The second command is similar to the first, but the **“display-conflict” (`dc`) command shows only the conflict regions**, not all the changes made to the file. Additionally, this command uses a slightly different display format for the conflict regions which allows you to more easily compare the file's contents in those regions as **they would appear in each of three states**: original and unedited; with your local changes applied and the server's conflicting changes ignored; and with only the server's incoming changes applied and your local, conflicting changes reverted.

After reviewing the information provided by these commands, you're ready to move on to the next action.

#### Resolving conflict differences interactively

There are several different ways to resolve conflicts interactively—two of which allow you to selectively merge and edit changes, the rest of which allow you to simply pick a version of the file and move along.

If you wish to choose some combination 组合 of your local changes, you can use the “edit” command (`e`) to manually edit the file with conflict markers in a text editor (configured per the instructions in the section called [“Using External Editors”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.externaleditors)). After you've edited the file, if you're satisfied with the changes you've made, you can tell Subversion that the edited file is no longer in conflict by using the “resolve” command (`r).

Regardless of what your local Unix snob will likely tell you, editing the file by hand in your favorite text editor is a somewhat low-tech way of remedying conflicts (see the section called [“Merging conflicts by hand”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.tour.cycle.resolve.byhand) for a walkthrough). For this reason, Subversion provides the “launch” resolution command (`l`) to fire up a fancy graphical merge tool instead (see the section called [“External merge”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.externaldifftools.merge)).

**If you decide that you don't need to merge any changes, but just want to accept one version of the file or the other**, you can either choose your changes (a.k.a. “mine”) by using the “mine-full” command (mf) or choose theirs by using the “theirs-full” command (tf).

Finally, there is also a pair of compromise 组合 options available. The “mine-conflict” (`mc`) and “theirs-conflict” (`tc`) commands instruct Subversion to select your local changes or the server's incoming changes, respectively, as the “winner” for **all conflicts** in the file. But, unlike the “mine-full” and “theirs-full” commands, these commands preserve both your local changes and changes received from the server in regions of the file where no conflict was detected.

#### Postponing 推迟 conflict resolution

This may sound like an appropriate 适当 section for avoiding marital disagreements 婚姻分歧, but it's actually still about Subversion, so read on. If you're doing an update and encounter a conflict that you're not prepared to review or resolve, you can type p to postpone resolving a conflict on a file-by-file basis when you run `svn update`. If you know in advance that you don't want to resolve any conflicts interactively, you can pass the `--non-interactive` option to `svn update, and any file in conflict will be marked with a `C` automatically.

  * Subversion prints a `C` during the update and remembers that the file is in a state of conflict.

  * If Subversion considers the file to be mergeable, it places conflict markers—special strings of text that delimit the “sides” of the conflict—into the file to visibly demonstrate the overlapping areas. (Subversion uses the svn:mime-type property to decide whether a file is capable of contextual, line-based merging. See the section called [“File Content Type”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.props.special.mime-type) to learn more.)

  * For every conflicted file, Subversion places three extra unversioned files in your working copy:
    `filename.mine`
      This is your file as it existed in your working copy before you began the update process. This version of the file contains your local modifications as well as conflict markers. (If Subversion considers the file to be unmergeable, the .mine file isn't created, since it would be identical 相同 to the working file.)
    `filename.rOLDREV`
      This is the file as it existed in the `BASE` revision—that is, the unmodified revision of the file in your working copy before you began the update process—where `OLDREV` is that base revision number.
    `filename.rNEWREV`
      This is the file that your Subversion client just received from the server via the update of your working copy, where `NEWREV` corresponds to the revision number to which you were updating (`HEAD`, unless otherwise requested).

For example, Sally makes changes to the file `sandwich.txt`, but does not yet commit those changes. Meanwhile, Harry commits changes to that same file. Sally updates her working copy before committing and she gets a conflict, which she postpones:

<pre><shell>
$ svn update
Conflict discovered in 'sandwich.txt'.
Select: (p) postpone, (df) diff-full, (e) edit,
        (mc) mine-conflict, (tc) theirs-conflict,
        (s) show all options: p
C    sandwich.txt
Updated to revision 2.
Summary of conflicts:
  Text conflicts: 1
$ ls -1
sandwich.txt
sandwich.txt.mine
sandwich.txt.r1
sandwich.txt.r2
</shell></pre>

At this point, Subversion will not allow Sally to commit the file `sandwich.txt` until the three temporary files are removed:

<pre><shell>
$ svn commit -m "Add a few more things"
svn: Commit failed (details follow):
svn: Aborting commit: '/home/sally/svn-work/sandwich.txt' remains in conflict
</shell></pre>

If you've postponed a conflict, you need to resolve the conflict before Subversion will allow you to commit your changes. You'll do this with the `svn resolve` command and one of several arguments to the `--accept` option.

If you want to choose the version of the file that you last checked out before making your edits, choose the `base` argument.

If you want to choose the version that contains only your edits, choose the `mine-full` argument.

If you want to choose the version that your most recent update pulled from the server (and thus discarding your edits entirely), choose the `theirs-full` argument.

However, if you want to pick and choose from your changes and the changes that your update fetched from the server, merge the conflicted text “by hand” (by examining and editing the conflict markers within the file) and then choose the `working` argument.

**`svn resolve` removes the three temporary files and accepts the version of the file that you specified with the --accept option, and Subversion no longer considers the file to be in a state of conflict**:

  ```shell
  $ svn resolve --accept working sandwich.txt
  Resolved conflicted state of 'sandwich.txt'
  ```
#### Merging conflicts by hand

Merging conflicts by hand can be quite intimidating 令人生畏 the first time you attempt it, but with a little practice, it can become as easy as falling off a bike.

Here's an example. Due to a miscommunication, you and Sally, your collaborator 合作者, both edit the file `sandwich.txt` at the same time. Sally commits her changes, and when you go to update your working copy, you get a conflict and you're going to have to edit `sandwich.txt` to resolve the conflict. First, let's take a look at the file:

<pre><shell>
$ cat sandwich.txt
Top piece of bread
Mayonnaise
Lettuce
Tomato
Provolone
<<<<<<< .mine
Salami
Mortadella
Prosciutto
=======
Sauerkraut
Grilled Chicken
>>>>>>> .r2
Creole Mustard
Bottom piece of bread
</shell></pre>

The strings of less-than signs, equals signs, and greater-than signs are conflict markers and are not part of the actual data in conflict. You generally want to ensure that those are removed from the file before your next commit. **The text between the first two sets of markers is composed of the changes you made in the conflicting area**:

<pre><shell>
<<<<<<< .mine
Salami
Mortadella
Prosciutto
=======
</shell></pre>

The text between the second and third sets of conflict markers is the text from Sally's commit:

<pre><shell>
=======
Sauerkraut
Grilled Chicken
>>>>>>> .r2
</shell></pre>

Usually you won't want to just delete the conflict markers and Sally's changes---she's going to be awfully surprised 非常惊讶 when the sandwich arrives and it's not what she wanted. __This is where you pick up the phone or walk across the office and explain to Sally that you can't get sauerkraut from an Italian deli__. Once you've agreed on the changes you will commit, edit your file and remove the conflict markers:

<pre><shell>
Top piece of bread
Mayonnaise
Lettuce
Tomato
Provolone
Salami
Mortadella
Prosciutto
Creole Mustard
Bottom piece of bread
</shell></pre>

Now use svn resolve, and you're ready to commit your changes:

<pre><shell>
$ svn resolve --accept working sandwich.txt
Resolved conflicted state of 'sandwich.txt'
$ svn commit -m "Go ahead and use my sandwich, discarding Sally's edits."
</shell></pre>

NOTE: Note that `svn resolve`, unlike most of the other commands we deal with in this chapter, **requires that you explicitly list any filenames that you wish to resolve**. In any case, you want to be careful and use `svn resolve` only when you're certain that you've fixed the conflict in your file---once the temporary files are removed, Subversion will let you commit the file **even if it still contains conflict markers**.

If you ever get confused while editing the conflicted file, you can always consult the three files that Subversion creates for you in your working copy—including your file as it was before you updated. You can even use a third-party interactive merging tool to examine those three files.

#### Discarding your changes in favor of a newly fetched revision

If you get a conflict and decide that you want to throw out your changes, you can svn `run resolve --accept theirs-full CONFLICTED-PATH` and Subversion will discard your edits and remove the temporary files:

<pre><shell>
$ svn update
Conflict discovered in 'sandwich.txt'.
Select: (p) postpone, (df) diff-full, (e) edit,
        (mc) mine-conflict, (tc) theirs-conflict,
        (s) show all options: p
C    sandwich.txt
Updated to revision 2.
Summary of conflicts:
  Text conflicts: 1
$ ls sandwich.*
sandwich.txt  sandwich.txt.mine  sandwich.txt.r2  sandwich.txt.r1
$ svn resolve --accept theirs-full sandwich.txt
Resolved conflicted state of 'sandwich.txt'
$
</shell></pre>

#### Punting: using svn revert

If you decide that you want to throw out your changes and start your edits again (whether this occurs after a conflict or anytime), just revert your changes:

<pre><shell>
$ svn revert sandwich.txt
Reverted 'sandwich.txt'
$ ls sandwich.*
sandwich.txt
$
</shell></pre>

NOTE: Note that when you revert a conflicted file, you don't have to use `svn resolve`.

### Commit Your Changes

Finally! Your edits are finished, you've merged all changes from the server, and you're ready to commit your changes to the repository.

The `svn commit` command sends all of your changes to the repository. When you commit a change, you need to supply a log message describing your change. Your log message will be attached to the new revision you create. If your log message is brief 简短, you may wish to supply it on the command line using the `--message (-m)` option:

<pre><shell>
$ svn commit -m "Corrected number of cheese slices."
Sending        sandwich.txt
Transmitting file data .
Committed revision 3.
</shell></pre>

However, if you've been composing your log message in some other text file as you work, you may want to tell Subversion to get the message from that file by passing its filename as the value of the `--file (-F) option:

<pre><shell>
$ svn commit -F logmsg
Sending        sandwich.txt
Transmitting file data .
Committed revision 4.
</shell></pre>

If you fail to specify either the `--message` (-m) or `--file` (-F) option, Subversion will automatically launch your favorite editor (see the information on `editor-cmd` in [the section called “Config”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.confarea.opts.config)) for composing a log message.

NOTICE: If you're in your editor writing a commit message and decide that you want to cancel your commit, you can just quit your editor without saving changes. If you've already saved your commit message, simply delete all the text, save again, and then abort:

<pre><shell>
$ svn commit
Waiting for Emacs...Done

Log message unchanged or not specified
(a)bort, (c)ontinue, (e)dit
a
$
</shell></pre>

(The exact wording of this error message depends on the network protocol and server you're using, but the idea is the same in all cases.)

At this point, you need to run svn update, deal with any merges or conflicts that result, and attempt your commit again.

That covers the basic work cycle for using Subversion. Subversion offers many other features that you can use to manage your repository and working copy, but most of your day-to-day use of Subversion will involve only the commands that we've discussed so far in this chapter. We will, however, cover a few more commands that you'll use fairly often.

### Examining History

Your Subversion repository is like a time machine. It keeps a record of every change ever committed and allows you to explore this history by examining previous versions of files and directories as well as the metadata that accompanies them. With a single Subversion command, you can check out the repository (or restore an existing working copy) exactly as it was at any date or revision number in the past. However, sometimes you just want to peer into the past instead of going into it.

`svn diff`
  Shows line-level details of a particular change

`svn log`
  Shows you broad information: log messages with date and author information attached to revisions and which paths changed in each revision

`svn cat`
  Retrieves a file as it existed in a particular revision number and displays it on your screen

`svn list`
  Displays the files in a directory for any given revision

#### Examining the Details of Historical Changes

We've already seen `svn diff` before—it displays file differences in unified diff format; we used it to show the local modifications made to our working copy before committing to the repository.

In fact, it turns out that there are three distinct uses of svn diff:

    * Examining local changes
    * Comparing your working copy to the repository
    * Comparing repository revisions

#### Examining local changes

As we've seen, invoking `svn diff` with no options will compare your working files to the cached “pristine” copies in the `.svn` area:

<pre><shell>
$ svn diff
Index: rules.txt
===================================================================
--- rules.txt	(revision 3)
+++ rules.txt	(working copy)
@@ -1,4 +1,5 @@
 Be kind to others
 Freedom = Responsibility
 Everything in moderation
-Chew with your mouth open
+Chew with your mouth closed
+Listen when others are speaking
$
</shell></pre>

#### Comparing working copy to repository

If a single `--revision` (-r) number is passed, your working copy is compared to the specified revision in the repository:

<pre><shell>
$ svn diff -r 3 rules.txt
Index: rules.txt
===================================================================
--- rules.txt	(revision 3)
+++ rules.txt	(working copy)
@@ -1,4 +1,5 @@
 Be kind to others
 Freedom = Responsibility
 Everything in moderation
-Chew with your mouth open
+Chew with your mouth closed
+Listen when others are speaking
$
</shell></pre>

#### Comparing repository revisions

If two revision numbers, separated by a colon, are passed via `--revision` (-r), the two revisions are directly compared:

<pre><shell>
$ svn diff -r 2:3 rules.txt
Index: rules.txt
===================================================================
--- rules.txt	(revision 2)
+++ rules.txt	(revision 3)
@@ -1,4 +1,4 @@
 Be kind to others
-Freedom = Chocolate Ice Cream
+Freedom = Responsibility
 Everything in moderation
 Chew with your mouth open
$
</shell></pre>

A more convenient way of comparing one revision to the previous revision is to use the `--change` (-c) option:

<pre><shell>
$ svn diff -c 3 rules.txt
Index: rules.txt
===================================================================
--- rules.txt	(revision 2)
+++ rules.txt	(revision 3)
@@ -1,4 +1,4 @@
 Be kind to others
-Freedom = Chocolate Ice Cream
+Freedom = Responsibility
 Everything in moderation
 Chew with your mouth open
$
</shell></pre>

Lastly, you can compare repository revisions even when you don't have a working copy on your local machine, just by including the appropriate URL on the command line:

<pre><shell>
$ svn diff -c 5 http://svn.example.com/repos/example/trunk/text/rules.txt
…
$
</shell></pre>

### Generating a List of Historical Changes

To find information about the history of a file or directory, use the `svn log` command. `svn log` will provide you with a record of who made changes to a file or directory, at what revision it changed, the time and date of that revision, and—if it was provided—the log message that accompanied the commit:

<pre><shell>
$ svn log
------------------------------------------------------------------------
r3 | sally | 2008-05-15 23:09:28 -0500 (Thu, 15 May 2008) | 1 line

Added include lines and corrected # of cheese slices.
------------------------------------------------------------------------
r2 | harry | 2008-05-14 18:43:15 -0500 (Wed, 14 May 2008) | 1 line

Added main() methods.
------------------------------------------------------------------------
r1 | sally | 2008-05-10 19:50:31 -0500 (Sat, 10 May 2008) | 1 line

Initial import
------------------------------------------------------------------------
</shell></pre>

Note that the log messages are printed in reverse chronological order by default. If you wish to see a different range of revisions in a particular order or just a single revision, pass the `--revision` (-r) option:

  Table 2.1. Common log requests
<table>
  <thead>
    <tr>
        <th>Command</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>svn log -r 5:19</td>
        <td>Display logs for revisions 5 through 19 in chronological order</td>
    </tr>
    <tr>
        <td>svn log -r 19:5</td><td>Display logs for revisions 5 through 19 in reverse</td>
    </tr>
    <tr>
        <td>svn log -r 8</td><td>Display logs for revision 8 only</td>
    </tr>
  </tbody>
</table>

You can also examine the log history of a single file or directory. For example:

<pre><code>
$ svn log foo.c
…
$ svn log http://foo.com/svn/trunk/code/foo.c
…
</code></pre>

These will display log messages only for those revisions in which the working file (or URL) changed.

<pre>
##### Why Does svn log Not Show Me What I Just Committed?

If you make a commit and immediately type `svn log` with no arguments, you may notice that your most recent commit doesn't show up in the list of log messages. This is due to a combination of the behavior of `svn commit` and the default behavior of `svn log`. First, when you commit changes to the repository, svn bumps only the revision of files (and directories) that it commits, **so usually the parent directory remains at the older revision** (See the section called [“Updates and commits are separate”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic.in-action.mixedrevs.update-commit) for an explanation of why). `svn log` then defaults to fetching the history of the directory at its current revision, and thus you don't see the newly committed changes. The solution here is to either update your working copy or explicitly provide a revision number to `svn log` by using the `--revision` (-r) option.
</pre>

If you want even more information about a file or directory, `svn log` also takes a `--verbose` (-v) option. Because Subversion allows you to move and copy files and directories, it is important to be able to track path changes in the filesystem. So, in verbose mode, `svn log` will include a list of changed paths in a revision in its output:

<pre><code>
$ svn log -r 8 -v
------------------------------------------------------------------------
r8 | sally | 2008-05-21 13:19:25 -0500 (Wed, 21 May 2008) | 1 line
Changed paths:
   M /trunk/code/foo.c
   M /trunk/code/bar.h
   A /trunk/code/doc/README

Frozzled the sub-space winch.

------------------------------------------------------------------------
</code></pre>

`svn log` also takes a `--quiet` (-q) option, which suppresses 抑制 the body of the log message. When combined with `--verbose` (-v), it gives just the names of the changed files.

<pre>
### Why Does svn log Give Me an Empty Response?

After working with Subversion for a bit, most users will come across something like this:

<code>
$ svn log -r 2
------------------------------------------------------------------------
$
</code>

At first glance, this seems like an error. But recall that while revisions are repository-wide, `svn log` operates on a path in the repository. If you supply no path, Subversion uses the current working directory as the default target. As a result, if you're operating in a subdirectory of your working copy and **attempt to see the log of a revision in which neither that directory nor any of its children was changed,** Subversion will show you an empty log. If you want to see what changed in that revision, try pointing `svn log` directly at the topmost URL of your repository, as in `svn log -r 2 ^/`.
</pre>

### Browsing the Repository

Using `svn cat` and `svn list`, you can view various revisions of files and directories without changing the working revision of your working copy. In fact, you don't even need a working copy to use either one.

#### svn cat

If you want to examine an earlier version of a file and not necessarily the differences between two files, you can use `svn cat`:

<pre><code>
$ svn cat -r 2 rules.txt
Be kind to others
Freedom = Chocolate Ice Cream
Everything in moderation
Chew with your mouth open
$
</code></pre>

You can also redirect the output directly into a file:

<pre><code>
$ svn cat -r 2 rules.txt > rules.txt.v2
$
</code></pre>

#### svn list

The svn list command shows you what files are in a repository directory without actually downloading the files to your local machine:

<pre><code>
$ svn list http://svn.example.com/repo/project
README
branches/
tags/
trunk/
</pre></code>

If you want a more detailed listing, pass the `--verbose` (`-v`) flag to get output like this:

<pre><code>
$ svn list -v http://svn.example.com/repo/project
  23351 sally                 Feb 05 13:26 ./
  20620 harry            1084 Jul 13  2006 README
  23339 harry                 Feb 04 01:40 branches/
  23198 harry                 Jan 23 17:17 tags/
  23351 sally                 Feb 05 13:26 trunk/
</code></pre>

The columns tell you the revision at which the file or directory was last modified, the user who modified it, the size if it is a file, the date it was last modified, and the item's name.

WARING: The `svn list` command with no arguments defaults to the **repository URL of the current working directory**, not the local working copy directory. After all, if you want a listing of your local directory, you could use just plain `ls` (or any reasonable non-Unixy equivalent或者 non-Unixy 中其他等价的命令).

### Fetching 抓取 Older Repository Snapshots 快照

In addition to all of the previous commands, you can use the `--revision` (`-r`) option with `svn update` to take an entire working copy “back in time”:

<pre><code>
# Make the current directory look like it did in r1729.
$ svn update -r 1729
…
$
</code></pre>

NOTICE: Many Subversion newcomers attempt to use the preceding 之前的 `svn update` example to “undo” committed changes, but **this won't work as you can't commit changes that you obtain 获得 from backdating a working copy if the changed files have newer revisions**. See the section called [“Resurrecting Deleted Items”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge.basicmerging.resurrect) for a description of how to “undo” a commit.

If you'd prefer to **reate a whole new working copy from an older snapshot**, you can do so by modifying the typical `svn checkout` command. As with `svn update`, you can provide the `--revision` (`-r`) option. But for reasons that we cover in the section called [“Peg and Operative Revisions”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.pegrevs), you might instead want to specify the target revision as part of Subversion's expanded URL syntax.

<pre><code>
# Checkout the trunk from r1729.
$ svn checkout http://svn.example.com/svn/repo/trunk@1729 trunk-1729
…
# Checkout the current trunk as it looked in r1729.
$ svn checkout http://svn.example.com/svn/repo/trunk -r 1729 trunk-1729
…
$
</code></pre>

Lastly, if you're building a release and **wish to bundle up your files from Subversion but don't want those pesky 讨厌的 `.svn` directories in the way**, you can use svn export to create a local copy of all or part of your repository sans 无 `.svn` directories. The basic syntax of this subcommand is identical 相同 to that of the `svn checkout`:

<pre><code>
# Export the trunk from the latest revision.
$ svn export http://svn.example.com/svn/repo/trunk trunk-export
…
# Export the trunk from r1729.
$ svn export http://svn.example.com/svn/repo/trunk@1729 trunk-1729
…
# Export the current trunk as it looked in r1729. 
$ svn export http://svn.example.com/svn/repo/trunk -r 1729 trunk-1729
…
$
</code></pre>

### Sometimes You Just Need to Clean Up

Now that we've covered the day-to-day tasks that you'll frequently use Subversion for, we'll review a few administrative tasks relating to your working copy.

#### Disposing 处置 of a Working Copy

Subversion doesn't track either the **state** or **the existence of working copies** on the server, so there's no server overhead 开销 to keeping working copies around. Likewise, **there's no need to let the server know that you're going to delete a working copy**.

If you're likely to use a working copy again, there's nothing wrong with just leaving it on disk until you're ready to use it again, at which point all it takes is an `svn update` to bring it **up to date** and ready for use.

However, **if you're definitely not going to use a working copy again, you can safely delete the entire thing using** whatever directory removal capabilities your operating system offers. We **recommend that before you do so you run `svn status` and review any files listed in its output that are prefixed with a `?` to make certain that they're not of importance.**

#### Recovering from an Interruption

**When Subversion modifies your working copy**---either your files or its own administrative state---it tries to do so as safely as possible. **Before changing the working copy**, Subversion logs its intentions in a private “to-do list”, of sorts. Next, it performs those actions to affect the desired change, h**olding a lock on the relevant part of the working copy while it works**. This prevents other Subversion clients from accessing the working copy mid-change. Finally, Subversion releases its lock and cleans up its private to-do list. Architecturally 从架构 , this is similar to a journaled filesystem. If a Subversion operation is interrupted (e.g, if the process is killed or if the machine crashes), the private to-do list remains on disk. This allows Subversion to return to that list later to complete any unfinished operations and return your working copy to a consistent state.

This is exactly what `svn cleanup` does: it searches your working copy and runs any leftover to-do items, removing working copy locks as it completes those operations. **If Subversion ever tells you that some part of your working copy is “locked,” run `svn cleanup` to remedy the problem**. The `svn status` command will inform you about administrative locks in the working copy, too, by displaying an `L` next to those locked paths:

<pre><code>
$ svn status
  L     somedir
M       somedir/foo.c
$ svn cleanup
$ svn status
M       somedir/foo.c
</code></pre>

**Don't confuse 混同 these working copy +administrative locks+ with the +user-managed locks+ that Subversion users create when using the lock-modify-unlock model of concurrent version control**; see the sidebar [The Three Meanings of “Lock”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.locking.meanings) for clarification.

#### Dealing with Structural Conflicts

**So far**, we have only talked about conflicts at the level of file content. When you and your collaborators make overlapping changes within the same file, Subversion forces you to merge those changes before you can commit.

**But what happens if your collaborators move or delete a file that you are still working on?** Maybe there was a miscommunication, and one person thinks the file should be deleted, while another person still wants to commit changes to the file. Or maybe your collaborators did some refactoring, renaming files and moving around directories in the process. If you were still working on these files, those modifications 改动 may need to be applied to the files at their new location. **Such conflicts manifest 表现为 themselves at the directory tree structure level rather than at the file content level, and are known as tree conflicts**.

<pre>
##### Tree conflicts prior to Subversion 1.6

Prior to Subversion 1.6, tree conflicts could yield rather unexpected results. For example, if a file was locally modified, but had been renamed in the repository, running `svn update` would make Subversion carry out the following steps:

  * Check the file to be renamed for local modifications.

  * Delete the file at its old location, and **if it had local modifications**, keep an on-disk copy of the file at the old location. This on-disk copy now appears as an **unversioned file** in the working copy.

  * Add the file, as it exists in the repository, at its new location.

When this situation arises, there is the possibility that the user makes a commit without realizing that local modifications have been left in a now-unversioned file in the working copy, and have not reached the repository. This gets more and more likely (and tedious) if the number of files affected by this problem is large.

Since Subversion 1.6, this and other similar situations are flagged as conflicts in the working copy.
</pre>

As with textual conflicts, **tree conflicts prevent a commit from being made from the conflicted state**, giving the user the opportunity to examine the state of the working copy for potential problems arising from the tree conflict, and resolving any such problems before committing.

#### An Example Tree Conflict

Suppose a software project you were working on currently looked like this:

<pre><shell>
$ svn list -Rv svn://svn.example.com/trunk/
      4 harry                 Feb 06 14:34 ./
      4 harry              23 Feb 06 14:34 COPYING
      4 harry              41 Feb 06 14:34 Makefile
      4 harry              33 Feb 06 14:34 README
      4 harry                 Feb 06 14:34 code/
      4 harry              51 Feb 06 14:34 code/bar.c
      4 harry             124 Feb 06 14:34 code/foo.c
</shell></pre>

+Your collaborator Harry has renamed the file bar.c to baz.c+. You are still working on bar.c in your working copy, but you don't know yet that the file has been renamed in the repository.

The log message to Harry's commit looked like this:

<pre><shell>
$ svn log -r5 svn://svn.example.com/trunk
------------------------------------------------------------------------
r5 | harry | 2009-02-06 14:42:59 +0000 (Fri, 06 Feb 2009) | 2 lines
Changed paths:
   M /trunk/Makefile
   D /trunk/code/bar.c
   A /trunk/code/baz.c (from /trunk/code/bar.c:4)

Rename bar.c to baz.c, and adjust Makefile accordingly 据此.
</shell></pre>

The local changes you have made look like this:

<pre><shell>
$ svn diff
Index: code/foo.c
===================================================================
--- code/foo.c  (revision 4)
+++ code/foo.c  (working copy)
@@ -3,5 +3,5 @@
 int main(int argc, char *argv[])
 {
        printf("I don't like being moved around!\n%s", bar());
-       return 0;
+       return 1;
 }
Index: code/bar.c
===================================================================
--- code/bar.c  (revision 4)
+++ code/bar.c  (working copy)
@@ -1,4 +1,4 @@
 const char *bar(void)
 {
-       return "Me neither!\n";
+       return "Well, I do like being moved around!\n";
 }
</shell></pre>

Your changes are all based on `revision 4`. They cannot be committed because Harry has already checked in `revision 5`:

<pre><shell>
$ svn commit -m "Small fixes"
Sending        code/bar.c
Sending        code/foo.c
Transmitting file data ..
svn: Commit failed (details follow):
svn: File not found: transaction '5-5', path '/trunk/code/bar.c'
</shell></pre>

At this point, you need to run `svn update`. Besides bringing our working copy up to date so that you can see Harry's changes, this also flags a tree conflict so you have the opportunity to evaluate and properly resolve it.

<pre><shell>
$ svn update
   C code/bar.c
A    code/baz.c
U    Makefile
Updated to revision 5.
Summary of conflicts:
  Tree conflicts: 1
</shell></pre>

In its output, `svn update` signifies tree conflicts using a capital `C` in the fourth output column. `svn status` reveals additional details of the conflict:

<pre><shell>
$ svn status
M       code/foo.c
A  +  C code/bar.c
      >   local edit, incoming delete upon update
M       code/baz.c
</shell></pre>

Note how `bar.c` is automatically scheduled for re-addition in your working copy, which simplifies things in case you want to keep the file.

Because a move in Subversion is implemented 实施 as **a copy operation followed by a delete operation**, and these two operations cannot be easily related to one another during an update, all Subversion can warn you about is an incoming delete operation on a locally modified file. This delete operation may be part of a move, or it could be a genuine delete operation. Talking to your collaborators, or, as a last resort, `svn log`, is a good way to find out what has actually happened.

Both `foo.c` and `baz.c` are reported as locally modified in the output of `svn status`. You made the changes to `foo.c` yourself, so this should not be surprising. But why is `baz.c` reported as locally modified?

The answer is that despite 尽管 the limitations of the move implementation, Subversion was smart enough to transfer your local edits in `bar.c` into `baz.c`:

<pre><shell>
$ svn diff code/baz.c
Index: code/baz.c
===================================================================
--- code/baz.c  (revision 5)
+++ code/baz.c  (working copy)
@@ -1,4 +1,4 @@
 const char *bar(void)
 {
-       return "Me neither!\n";
+       return "Well, I do like being moved around!\n";
 }
</shell></pre>

WARING: Local edits to the file `bar.c`, which is renamed during an update to `baz.c`, will only be applied to `bar.c` **if your working copy of `bar.c` is based on the revision in which it was last modified before being moved in the repository**. Otherwise, Subversion will resort to retreiving 检索 `baz.c` from the repository, and will not try to transfer your local modifications to it. You will have to do so manually.

`svn info` shows the URLs of the items involved in the conflict. The left URL shows the source of the local side of the conflict, while the right URL shows the source of the incoming side of the conflict. These URLs indicate 表明 where you should start searching the repository's history for the change which conflicts with your local change.

<pre><shell>
$ svn info code/bar.c | tail -n 4 
Tree conflict: local edit, incoming delete upon update
  Source  left: (file) ^/trunk/code/bar.c@4
  Source right: (none) ^/trunk/code/bar.c@5
</shell></pre>

`bar.c` is now said to be the victim of a tree conflict. It cannot be committed until the conflict is resolved:

<pre><shell>
$ svn commit -m "Small fixes" 
svn: Commit failed (details follow):
svn: Aborting commit: 'code/bar.c' remains in conflict
</shell></pre>

So how can this conflict be resolved? You can either agree or disagree with the move Harry made. **In case you agree**, you can delete `bar.c` and mark the tree conflict as resolved:

<pre><shell>
$ svn delete --force code/bar.c
D         code/bar.c
$ svn resolve --accept=working code/bar.c ##has some wrong in here ?
Resolved conflicted state of 'code/bar.c'
$ svn status
M       code/foo.c
M       code/baz.c
$ svn diff
Index: code/foo.c
===================================================================
--- code/foo.c  (revision 5)
+++ code/foo.c  (working copy)
@@ -3,5 +3,5 @@
 int main(int argc, char *argv[])
 {
        printf("I don't like being moved around!\n%s", bar());
-       return 0;
+       return 1;
 }
Index: code/baz.c
===================================================================
--- code/baz.c  (revision 5)
+++ code/baz.c  (working copy)
@@ -1,4 +1,4 @@
 const char *bar(void)
 {
-       return "Me neither!\n";
+       return "Well, I do like being moved around!\n";
 }
</shell></pre>

**If you do not agree with the move**, you can delete `baz.c` instead, after making sure any changes made to it after it was renamed are either preserved or not worth keeping. Do not forget to revert the changes Harry made to the Makefile. Since bar.c is already scheduled for re-addition, there is nothing else left to do, and the conflict can be marked resolved:

<pre><shell>
$ svn delete --force code/bar.c
D         code/bar.c
$ svn resolve --accept=working code/bar.c
Resolved conflicted state of 'code/bar.c'
$ svn status
M       code/foo.c
M       code/baz.c
$ svn diff
Index: code/foo.c
===================================================================
--- code/foo.c  (revision 5)
+++ code/foo.c  (working copy)
@@ -3,5 +3,5 @@
 int main(int argc, char *argv[])
 {
        printf("I don't like being moved around!\n%s", bar());
-       return 0;
+       return 1;
 }
Index: code/baz.c
===================================================================
--- code/baz.c  (revision 5)
+++ code/baz.c  (working copy)
@@ -1,4 +1,4 @@
 const char *bar(void)
 {
-       return "Me neither!\n";
+       return "Well, I do like being moved around!\n";
 }
</shell></pre>

In either case, you have now resolved your first tree conflict! You can commit your changes and tell Harry during tea break about all the extra work he caused for you.

### Summary

Now we've covered most of the Subversion client commands. Notable exceptions are those dealing with branching and merging (see [Chapter 4, Branching and Merging](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.branchmerge)) and properties (see the section called [“Properties”](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.advanced.props)). However, you may want to take a moment to skim through [Chapter 9, Subversion Complete Reference](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.ref) to get an idea of all the different commands that Subversion has—and how you can use them to make your work easier.


