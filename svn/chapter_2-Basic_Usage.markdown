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



