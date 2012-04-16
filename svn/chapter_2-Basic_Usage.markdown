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
