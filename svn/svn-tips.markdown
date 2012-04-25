### linux下svn命令大全

<pre><shell>
svn delete ./1/wp-content/plugins/wp-code-highlight/
svn add ./1/wp-content/plugins/wp-code-highlight/
svn commit -m "update 'wp-code-highlight' to 1.2.4"
svn checkout https://svn.sinaapp.com/jhjguxin/
</shell></pre>

## Recommended Repository Layout

While Subversion's flexibility 灵活性 allows you to lay out your repository in any way that you choose, **we recommend that you create a `trunk` directory to hold the "main line" of development, a `branches` directory to contain branch copies, and a `tags` directory to contain tag copies**. For example:

  ```shell
  $ svn list file:///var/svn/repos
  /trunk
  /branches
  /tags
  ```

### What's with the .svn Directory?

**Every directory in a working copy contains an administrative area**---a subdirectory named `.svn`. Usually, directory listing commands won't show this subdirectory, but it is nevertheless an important directory. **Whatever you do, don't delete or change any-thing in the administrative area!Subversion depends on it to manage your working copy.**

NOTICE: If you accidentally remove the `.svn` subdirectory, the easiest way to fix the problem is to remove the entire containing directory (a normal system deletion, not `svn delete`), then run `svn update` from a parent directory. The Subversion client will download the directory you've deleted, with a new `.svn` area as well.

### Authenticating As a Different User

Since Subversion caches auth credentials by default (both username and password), it conveniently remembers who you were acting as the last time you modified your working copy. But sometimes that's not helpful—particularly if you're working in a shared working copy such as a system configuration directory or a web server document root. In this case, just pass the `--username` option on the command line, and Subversion will attempt to au-
thenticate as that user, prompting you for a password if necessary.

### Disabling Password Caching

**When you perform a Subversion operation that requires you to authenticate, by default Subversion caches your authentication credentials on disk.** This is done for convenience so that you don't have to continually reenter your password for future operations. If you're concerned about caching your Subversion passwords, you can disable caching either permanently 永久 or on a case-by-case basis.

To disable password caching for a particular one-time command, pass the `--no-auth-cache` option on the command line. To permanently disable caching, you can add the line `store-passwords = no` to your local machine's Subversion configuration file. See the section called “Client Credentials Caching” for details.

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

### Basic Work Cycle

The typical work cycle looks like this:

1. Update your working copy.
  * svn update
1. Make changes.
  * svn add
  * svn delete
  * svn copy
  * svn move
1. Examine your changes.
  * svn status # 查看状态
  * svn diff   # 查看不同
1. Possibly undo some changes.
  * svn revert
1. Resolve conflicts (merge others' changes).
  * svn update
  * svn resolve
1. Commit your changes.
  * svn commit

### Make Changes to Your Working Copy

Now you can get to work and make changes in your working copy. It's usually most convenient 方便 to decide on a discrete change (or set of changes) to make, such as writing a new feature, fixing a bug, and so on. The Subversion commands that you will use here are `svn add`, `svn delete`,`svn copy`, `svn move`, and `svn mkdir`. However, if you are merely editing files that are already in Subversion, you may not need to use any of these commands until you commit.

**You can make two kinds of changes to your working copy: file changes and tree changes.**You don't need to tell Subversion that you intend to change a file; just make your changes using your text editor, word processor, graphics program, or whatever tool you would normally use. Subversion automatically detects which files have been changed, and in addition, it handles binary files just as easily as it handles text files---and just as efficiently, too.
**For tree changes, you can ask Subversion to “mark” files and directories for scheduled removal, addition, copying, or moving. These changes may take place immediately in your working copy, but no additions or removals will happen in the repository until you commit them.**

`git` 只有一个 `.git` 其它，在项目子目录最多有 `.gitkeep`，`.gitingore` 之类的配置文件。因此 针对整个站点 可以 一个命令实现 添加 变更到版本库 而 svn是 针对每个 子目录都有一个 .svn 因此 必须 针对每个 目录 单独 操作 版本控制

### Changing the Repository Without a Working Copy

There are some use cases that immediately commit tree changes to the repository.This happens only when a subcommand is operating directly on a URL, rather than on a working-copy path. In particular, **specific uses of `svn mkdir`, `svn copy`, `svn move`, and `svn delete` can work with URLs (and don't forget that `svn import` always makes changes to a URL).**

URL operations behave in this manner 方式 because commands that operate on a working copy can use the working copy as a sort of “staging area” 临时区域 to set up your changes before committing them to the repository. Commands that operate on URLs don't have this luxury, so when you operate directly on a URL, any of the aforementioned 上述的 actions represents an immediate commit.

TIPS:
  **While your working copy is “just like any other collection of files and directories on your system,” you can edit files at will, but you must tell Subversion about everything else that you do**. For example, if you want to copy or move an item in a working copy, you should use `svn copy` or `svn move` instead of the `copy` and `move` commands provided by your operating system. We'll talk more about them later in this chapter.

1. 将文件checkout到本地目录
  <shell>svn checkout path（path是服务器 上的目录）</shell>
  例如：`svn checkout svn://192.168.1.1/pro/domain`
  简写：`svn co`

1. 往版本库中添加新的文件 
  <shell>svn add file</shell>
  例如：`svn add test.php(添加test.php)`
  `svn add *.php(添加当前目录下所有的php文件)`

1. 将改动的文件提交到版本库 
  <shell>svn commit -m "LogMessage" [-N] [--no-unlock] PATH(如果选择了保持锁，就使用–no-unlock开关)</shell>
  例如：`svn commit -m "add test file for my test" test.php`
  简写：`svn ci`

1. 加锁/解锁 
  <shell>svn lock -m "LockMessage" [--force] PATH</shell>
  例如：`svn lock -m "lock test file" test.php`
  `svn unlock PATH`

1. 更新到某个版本 
  <shell>svn update -r m path</shell>
  例如：
    `svn update`如果后面没有目录，默认将当前目录以及子目录下的所有文件都更新到最新版本 。
    `svn update -r 200 test.php(将版本库中的文件test.php还原到版本200)`
    `svn update test.php`(更新，于版本库同步。如果在提交的时候提示过期的话，是因为冲突，需要先update，修改 文件，然后清除svn resolved，最后再提交commit)
  简写：`svn up`

1. 查看文件或者目录状态 
  1. `svn status path`（目录下的文件和子目录的状态，正常状态不显示）【?：不在svn的控制中；M：内容被修改；C：发生冲突；A：预定加入到版本库；K：被锁定】
  1. `svn status -v path(显示文件和子目录状态)` 第一列保持相同，第二列显示工作版本号，第三和第四列显示最后一次修改的版本号和修改人。
  注：`svn status`、`svn diff`和 `svn revert`这三条命令在没有网络的情况下也可以执行的，原因是svn在本地的`.svn`s中保留了本地版本的原始拷贝。
简写：`svn st`

1. 删除 文件 
  `svn delete path -m "delete test fle"`
  例如：`svn delete svn://192.168.1.1/pro/domain/test.php -m "delete test file"`
  或者直接`svn delete test.php` 然后再`svn ci -m 'delete test file'`，推荐使用这种
  简写：`svn` (del, remove, rm)

1. 查看日志 
  `svn log path`
  例如：`svn log test.php` 显示这个文件的所有修改记录，及其版本号的变化

1. 查看文件详细信息 
  `svn info path`
  例如：`svn info test.php`

1. 比较差异 
  `svn diff path`(将修改的文件与基础版本比较)
  例如：`svn diff test.php`
  `svn diff -r m:n path`(对版本m和版本n比较差异)
  例如：`svn diff -r 200:201 test.php`
  简写：`svn di`

1. 将两个版本之间的差异合并到当前文件 
  `svn merge -r m:n path`
  例如：`svn merge -r 200:205 test.php`（将版本200与205之间的差异合并到当前文件，但是一般都会产生冲突，需要处理一下）

1. SVN 帮助 
  `svn help`
  `svn help ci`

——————————————————————————

以上是常用命令，下面写几个不经常用的

——————————————————————————

1. 版本库下的文件和目录列表 
  `svn list path`
  显示path目录下的所有属于版本库的文件和目录
  简写：`svn ls`

1. 创建纳入版本控制下的新目录 
  `svn mkdir`: 创建纳入版本控制下的新目录。
  用法:
    1. `mkdir PATH…`
    1. `mkdir URL…`

  创建版本控制的目录。
    1. 每一个以工作副本 PATH 指定的目录，都会创建在本地端，并且加入新增调度，以待下一次的提交。
    1. 每个以URL指定的目录，都会透过立即提交于仓库中创建。在这两个情况下，所有的中间目录都必须事先存在。

1. 恢复本地修改 
  `svn revert`: 恢复原始未改变的工作副本文件 (恢复大部份的本地修改)。revert:
  用法: `revert PATH…`
注意: 本子命令不会存取网络，并且会解除冲突的状况。但是它不会恢复被删除的目录

1. 代码 库URL变更 
  `svn switch (sw)`: 更新工作副本至不同的URL。
  用法: 
    1. `switch URL [PATH]`
    1. `switch –relocate FROM TO [PATH...]`

  1. 更新你的工作副本，映射到一个新的URL，其行为跟"svn update"很像，也会将服务器上文件与本地文件合并。这是将工作副本对应到同一仓库中某个分支或者标记的
方法。
  1. 改写工作副本的URL元数据，以反映单纯的URL上的改变。当仓库的根URL变动(比如方案名或是主机名称变动)，但是工作副本仍旧对映到同一仓库的同一目录时使用这个命令更新工作副本与仓库的对应关系。
    我的例子：svn switch --relocate http://59.41.99.254/mytt http://www.mysvn.com/mytt 

1. 解决 冲突 
  `svn resolved`: 移除工作副本的目录或文件的"冲突"状态。
  用法: `resolved PATH…`
  注意: 本子命令不会依语法来解决冲突或是移除冲突标记；它只是移除冲突的相关文件，然后让 PATH 可以再次提交。

1. 输出指定文件或URL的内容。 
  `svn cat` 目标[@版本]…如果指定了版本，将从指定的版本开始查找。
  `svn cat -r PREV filename > filename` (PREV 是上一版本,也可以写具体版本号,这样输出结果是可以提交的)

19、 查找工作拷贝中的所有遗留的日志文件，删除进程中的锁 。

当Subversion改变你的工作拷贝（或是.svn 中 的任何信息），它会尽可能的小心，在修改任何事情之前，它把意图写到日志文件中去，然后执行log文件中的命令，然后删掉日志文件，这与分类帐的文件系统 架构类似。如果Subversion的操作中断了（举个例子：进程被杀死了，机器死掉了），日志文件会保存在硬盘上，通过重新执行日志文 件，Subversion可以完成上一次开始的操作，你的工作拷贝可以回到一致的状态。

这就是svn cleanup 所作的：它查找工作拷贝中的所有遗留的日志文件，删除进程中的锁。如果Subversion告诉你工作拷贝中的一部分已经"锁定 "了，你就需要运行这个命令了。同样，svn status 将会使用L 显示锁定的项目：

$ svn status
 L somedir
 M somedir/foo.c 

 $ svn cleanup
 $ svn status
 M somedir/foo.c

 20、  拷贝用户的一个未被版本化的目录树到版本库。 

svn import 命令是拷贝用户的一个未被版本化的目录树到版本库最快的方法，如果需要，它也要建立一些中介文件。

$ svnadmin create /usr/local/svn/newrepos $ svn import mytree file:///usr/local/svn/newrepos/some/project Adding mytree/foo.c Adding mytree/bar.c Adding mytree/subdir Adding mytree/subdir/quux.h Committed revision 1.

在上一个例子里，将会拷贝目录mytree 到版本库的some/project 下：

$ svn list file:///usr/local/svn/newrepos/some/project bar.c foo.c subdir/

注意，在导入之后，原来的目录树并没有 转化成工作拷贝，为了开始工作，你还是需要运行svn checkout 导出一个工作拷贝。

另附：为SVN 加入Email通知 
可以通过Subversion的Hook脚本的方式为SVN 加入邮件列表功能 
编译安装了Subversion后 在源码的tools 下有一个comm-email.pl的Perl脚本，在你的档案目录下有一个hooks目录，进入到hooks目录把post-commit.tmpl 改名为post-commit并给它可执行的权限。 
更改post-commit脚本 把comm-email.pl脚本的决对路径加上，否则 SVN 找不到comm-email.pl 

REPOS="$1" 
REV="$2" 
/usr/local/svn /resp/commit-email.pl "$REPOS" "$REV" email@address1.com email@address2.com 
#log-commit.py --repository "$REPOS" --revision "$REV" 

最后一行是用来记日志的 我不用这个功能 所以注释掉了
