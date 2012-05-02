## The Raiders for Githug
> --- created by francis

### Get and install the 'Githug'

you can find the [githug](https://github.com/Gazler/githug)'s sources code on github.

more info Reference to [githug-readme](githug-readme.markdown)

#### Installation
To install Githug

    gem install githug

#### Getting start

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug -h
Tasks:
  githug help [TASK]  # Describe available tasks or one specific task
  githug hint         # Get a hint for the current level
  githug play         # Initialize the game
  githug reset        # Reset the current level
  githug test         # Test a level from a file path

jhjguxin@jhjguxin-virtual-machine:~$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
No githug directory found, do you wish to create one? [yn]  y
Welcome to Githug

Level: 1
Difficulty: *

Initialize an empty repository
</shell></pre>

### The Raiders

#### Level: 1

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug reset
********************************************************************************
*                                    Githug                                    *
********************************************************************************
resetting level

Level: 1
Difficulty: *

Initialize an empty repository

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git init 
Initialized empty Git repository in /home/jhjguxin/git_hug/.git/

</shell></pre>

#### Level: 2

<pre><shell>
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 2
Difficulty: *

There is a file in your folder called README, you should add it to your staging area

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ ls
README
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git add 
.git/         .gitignore    .profile.yml  README
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git add README
</shell></pre>

#### Level: 3

<pre><shell>
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 3
Difficulty: *

The README file has been added to your staging area, now commit it.


jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git commit -m "add the 'README'"
[master (root-commit) 4704019] add the 'README'
 0 files changed
 create mode 100644 README
</shell></pre>

#### Level: 4

<pre><shell>
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 4
Difficulty: *

Set up your git name and email, this is important so that your commits can be identified


jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git config --global user.name "Francis Jiang"
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git config --global user.email "8648765@qq.com"
</shell></pre>

#### Level: 5

<pre><shell>
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What is your name? Francis Jiang
What is your email? 8648765@qq.com
Your config has the following name: Francis Jiang
Your config has the following email: 8648765@qq.com
Congratulations, you have solved the level

Level: 5
Difficulty: *

Clone the repository at https://github.com/Gazler/cloneme
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git clone https://github.com/Gazler/cloneme
Cloning into 'cloneme'...
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0)
Unpacking objects: 100% (3/3), done
</shell></pre>

#### Level: 6

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 6
Difficulty: *

Clone the repository at https://github.com/Gazler/cloneme to 'my_cloned_repo'

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git clone https://github.com/Gazler/cloneme my_cloned_repo
Cloning into 'my_cloned_repo'...
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0)
Unpacking objects: 100% (3/3), done.
</shell></pre>

#### Level: 7

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 7
Difficulty: **

The text editor 'vim' creates files ending in .swp (swap files) for all files that are currently open.  We don't want them creeping into the repository.  Make this repository ignore .swp files.

edit and inset follow text:

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ cat .gitignore 
.profile.yml
.gitignore
*.swp

</shell></pre>

#### Level: 8

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 8
Difficulty: *

There are some files in this repository, one of the files is untracked, which file is it?

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git status 
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#	new file:   Guardfile
#	new file:   README
#	new file:   config.rb
#	new file:   deploy.rb
#	new file:   setup.rb
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#	database.yml
</shell></pre>

#### Level: 9

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What is the full file name of the untracked file? database.yml
Congratulations, you have solved the level

Level: 9
Difficulty: **

A file has been removed from the working tree, however the file was not removed from the repository.  Find out what this file was and remove it.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git status 
# On branch master
# Changes not staged for commit:
#   (use "git add/rm <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	deleted:    deleteme.rb
#
no changes added to commit (use "git add" and/or "git commit -a")
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rm deleteme.rb 
rm 'deleteme.rb'
</shell></pre>

#### Level: 10

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 10
Difficulty: **

A file (deleteme.rb) has accidentally been added to your staging area, find out which file and remove it from the staging area.  *NOTE* Do not remove the file system, only from git.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git status 
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#	new file:   deleteme.rb
#
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rm deleteme.rb 
error: 'deleteme.rb' has changes staged in the index
(use --cached to keep the file, or -f to force removal)
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rm deleteme.rb --cached 
rm 'deleteme.rb'
</shell></pre>

#### Level: 11

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 11
Difficulty: ***

We have a file called oldfile.txt. We want to rename it to newfile.txt and stage this change.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git mv oldfile.txt newfile.txt
</shell></pre>

#### Level: 12

<pre><shell>
jjhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 12
Difficulty: **

You will be asked for the first 7 chars of the hash of most recent commit.  You will need to investigate the logs of the repository for this.


jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git log 
commit 6abb871813449c3913e7a6635479278e2419b2cc
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 17:57:41 2012 +0800

    THIS IS THE COMMIT YOU ARE LOOKING FOR!
</shell></pre>

#### Level: 13

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What are the first 7 characters of the hash of the most recent commit? 6abb871
Congratulations, you have solved the level

Level: 13
Difficulty: **

We have a git repo and we want to tag the current commit with new_tag.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git tag new_tag
</shell></pre>

#### Level: 14

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
resetting level

Level: 14
Difficulty: **

The README file has been committed, but it looks like the file `forgotten_file.rb` was missing from the commit.  Add the file and amend your previous commit to include it.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git add forgotten_file.rb
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git commit --amend 
##insert 'new file:   forgotten_file.rb' ,then ctrl+x, y ,enter
[master ddc5df3] Initial commit new file:   forgotten_file.rb
 0 files changed
 create mode 100644 README
 create mode 100644 forgotten_file.rb
</shell></pre>

#### Level: 15

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 15
Difficulty: **

There are two files to be committed.  The goal was to add each file as a separate commit, however both were added by accident.  Unstage the file `to_commit_second` using the reset command (don't commit anything)

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug hint
********************************************************************************
*                                    Githug                                    *
********************************************************************************
You can get some useful information for git status, it will tell you the command you need to run
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#	new file:   to_commit_first.rb
#	new file:   to_commit_second.rb
#
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git reset HEAD to_commit_second.rb
</shell></pre>

#### Level: 16

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 16
Difficulty: ***

A file has been modified, but you don't want to keep the files.  Checkout the `config.rb` file from the last commit.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git checkout config.rb
</shell></pre>

#### Level: 17

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 17
Difficulty: **

This projects has a remote repository.  Identify it.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git remote 
add        prune      rename     rm         set-head   show       update 
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git remote show
my_remote_repo
</shell></pre>

#### Level: 18

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What is the name of the remote repository? my_remote_repo
Congratulations, you have solved the level

Level: 18
Difficulty: **

The remote repositories have a url associated to them.  Please enter the url of remote_location

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git remote -v
my_remote_repo	https://github.com/Gazler/githug (fetch)
my_remote_repo	https://github.com/Gazler/githug (push)
remote_location	https://github.com/githug/not_a_repo (fetch)
remote_location	https://github.com/githug/not_a_repo (push)
</shell></pre>

#### Level: 19

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What is the url of the remote repository? https://github.com/githug/not_a_repo
Congratulations, you have solved the level

Level: 19
Difficulty: **

You need to pull changes from your origin repository.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git pull origin 
HEAD     master
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git pull origin HEAD 
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 3 (delta 0)
Unpacking objects: 100% (3/3), done.
From https://github.com/pull-this/thing-to-pull
 * branch            HEAD       -> FETCH_HEAD
</shell></pre>

#### Level: 20

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 20
Difficulty: **

Add a remote repository called `origin` with the url `https://github.com/githug/githug`

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git remote add origin https://github.com/githug/githug
</shell></pre>

#### Level: 21

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 21
Difficulty: **

There have been modifications to the app.rb file since your last commit.  Find out which line has changed.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git diff app.rb
diff --git a/app.rb b/app.rb
index 4f703ca..3bfa839 100644
--- a/app.rb
+++ b/app.rb
@@ -23,7 +23,7 @@ get '/yet_another' do
   erb :success
 end
 get '/another_page' do
-  @message = get_response('data.json')
+  @message = get_response('server.json')
   erb :another
 end
### 23+3 =26
</shell></pre>

#### Level: 22

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
What is the number of the line which has changed? 26
Congratulations, you have solved the level

Level: 22
Difficulty: **

Someone has put a password inside the file 'config.rb' find out who it was

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug hint
********************************************************************************
*                                    Githug                                    *
********************************************************************************
You want to research the `git blame` command
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git blame config.rb
^5e8863d (Gary Rennie  2012-03-08 23:05:24 +0000  1) class Config
70d00535 (Bruce Banner 2012-03-08 23:07:41 +0000  2)   attr_accessor :name, :pas
97bdd0cc (Spider Man   2012-03-08 23:08:15 +0000  3)   def initialize(name, pass
^5e8863d (Gary Rennie  2012-03-08 23:05:24 +0000  4)     @name = name
97bdd0cc (Spider Man   2012-03-08 23:08:15 +0000  5)     @password = password ||
09409480 (Spider Man   2012-03-08 23:06:18 +0000  6)
09409480 (Spider Man   2012-03-08 23:06:18 +0000  7)     if options[:downcase]
09409480 (Spider Man   2012-03-08 23:06:18 +0000  8)       @name.downcase!
09409480 (Spider Man   2012-03-08 23:06:18 +0000  9)     end
70d00535 (Bruce Banner 2012-03-08 23:07:41 +0000 10) 
ffd39c2d (Gary Rennie  2012-03-08 23:08:58 +0000 11)     if options[:upcase]
ffd39c2d (Gary Rennie  2012-03-08 23:08:58 +0000 12)       @name.upcase!
ffd39c2d (Gary Rennie  2012-03-08 23:08:58 +0000 13)     end
ffd39c2d (Gary Rennie  2012-03-08 23:08:58 +0000 14) 
^5e8863d (Gary Rennie  2012-03-08 23:05:24 +0000 15)   end
^5e8863d (Gary Rennie  2012-03-08 23:05:24 +0000 16) end
### Spider Man
</shell></pre>

#### Level: 23

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Who made the commit with the password? Spider Man
Congratulations, you have solved the level

Level: 23
Difficulty: *

You want to work on a piece of code that has the potential to break things, create the branch test_code

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git branch test_code
</shell></pre>

#### Level: 24

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 24
Difficulty: **

Create and switch to a new branch called 'my_branch'.  You will need to create a branch like you did in the previous level

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git branch my_branch && git checkout my_branch
Switched to branch 'my_branch'
</shell></pre>

#### Level: 25

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 25
Difficulty: ***

You forgot to branch at the previous commit and made a commit on top of it. Create branch 'test_branch' at the commit before the last

hjguxin@jhjguxin-virtual-machine:~/git_hug$ git log
commit b5d59b4cf51123f710d1d6245ba45aee6913d142
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 18:55:09 2012 +0800

    Updating file1 again

commit 3567b3f2a20b95f530516145621ae0854d0a8324
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 18:55:09 2012 +0800

    Updating file1

commit e6f4781462506bf52749890607b23e14ce6cfba6
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 18:55:09 2012 +0800

    Adding file1
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git branch test_branch -v 3567b3f2a20b95f530516145621ae0854d0a8324
</shell></pre>

#### Level: 26

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
resetting level

Level: 26
Difficulty: **

We have a file in the branch 'feature'; Let's merge it to the master branch

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git merge feature 
Updating e12277f..cc8ea5a
Fast-forward
 0 files changed
 create mode 100644 file2
</shell></pre>

#### Level: 27

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 27
Difficulty: ***

Your new feature isn't worth the time and you're going to delete it. But it has one commit that fills in README file, and you want this commit to be on the master as well

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git log new-feature 
commit ea2a47c19b85fc321e2737ddc49db3deeba3a1b5
Author: Andrey <aslushnikov@gmail.com>
Date:   Wed Mar 28 02:28:35 2012 +0400

    some small fixes

commit 4a1961bce62840eaef9c4392fe5cc799e38c9b7b
Author: Andrey <aslushnikov@gmail.com>
Date:   Wed Mar 28 02:27:18 2012 +0400

    Fixed feature

commit ca32a6dac7b6f97975edbe19a4296c2ee7682f68
Author: Andrey <aslushnikov@gmail.com>
Date:   Wed Mar 28 02:25:51 2012 +0400

    Filled in README.md with proper input

commit 58a8c8edcfdd00c6d8cce9aada8f987a1677571f
Author: Andrey <aslushnikov@gmail.com>
Date:   Wed Mar 28 02:24:41 2012 +0400

    Added a stub for the feature

commit ea3dbcc5e2d2359698c3606b0ec44af9f76def54
Author: Andrey <aslushnikov@gmail.com>
Date:   Wed Mar 28 02:20:32 2012 +0400

    Initial commit
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git cherry-pick ca32a6dac7b6f97975edbe19a4296c2ee7682f68
[master 580bc84] Filled in README.md with proper input
 Author: Andrey <aslushnikov@gmail.com>
 1 file changed, 1 insertion(+), 2 deletions(-)
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git branch -d new-feature 
error: The branch 'new-feature' is not fully merged.
If you are sure you want to delete it, run 'git branch -D new-feature'.
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git branch -D new-feature 
Deleted branch new-feature (was ea2a47c).
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
</shell></pre>

#### Level: 28

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 28
Difficulty: ***

Correct the typo in the message of your first commit.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rebase -i master~2
<shell>pick 068ffe4 First commmit #change 'pick' to 'edit'</shell>
Successfully rebased and updated refs/heads/master.
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git commit --amend #to edit the spec commit
[detached HEAD dd05ef7] First commit
 0 files changed
 create mode 100644 file1
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rebase --continue
Successfully rebased and updated refs/heads/master.
</shell></pre>

#### Level: 29

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 29
Difficulty: ****

You have committed several times but would like all those changes to be one commit

##equal to 'git rebase -i master~3'
Successfully rebased and updated refs/heads/master.
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rebase -i HEAD~3
##change line 2,3 'pick' to 'squash' and 'save'
[detached HEAD aa07aaa] Updating README
 1 file changed, 3 insertions(+)
Successfully rebased and updated refs/heads/master.
</shell></pre>

#### Level: 30

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 30
Difficulty: ***

Merge all commits from the long-feature-branch as a single commit.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git merge --squash long-feature-branch
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git commit -a -m 'merge branch long-feature-branch' 
[master e7210c8] merge branch long-feature-branch
 1 file changed, 3 insertions(+)
 create mode 100644 file3
</shell></pre>

#### Level: 31

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 31
Difficulty: ****

You have committed several times but in the wrong order. Please reorder your commits

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git rebase -i HEAD~3
Successfully rebased and updated refs/heads/master.
## reoder the line2 and line3
</shell></pre>

#### Level: 32

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 32
Difficulty: ****

You've made changes within a single file that belong to two different features, but neither of the changes are yet staged. Stage only the changes belonging to the first feature.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git add feature.rb -e
## rm The last line
</shell></pre>

#### Level: 33

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 33
Difficulty: ****

You have been working on a branch but got distracted by a major issue and forgot the name of it. Switch back to that branch

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git reflog 
894a16d HEAD@{0}: commit: commit another todo
6876e5b HEAD@{1}: checkout: moving from solve_world_hunger to kill_the_batman
324336a HEAD@{2}: commit: commit todo
6876e5b HEAD@{3}: checkout: moving from blowup_sun_for_ransom to solve_world_hun
6876e5b HEAD@{4}: checkout: moving from kill_the_batman to blowup_sun_for_ransom
6876e5b HEAD@{5}: checkout: moving from cure_common_cold to kill_the_batman
6876e5b HEAD@{6}: commit (initial): initial commit
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git checkout solve_world_hunger
Switched to branch 'solve_world_hunger'
</shell></pre>

#### Level: 34

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 34
Difficulty: ****

You have committed several times but want to undo the middle commit.

jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git log 
commit 1084172904dae7d2ac1b4bc2188b86e0d17f78a9
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800

    Second commit

commit e399f8d7d6dd5f29bb0c5637f821b5011f694d99
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800

    Bad commit

commit 6f06639600a9d925ca1cdd85c508c020b601bdb2
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800

    First commit
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git revert HEAD~1 # exit and save
[master 77ab6b5] Revert "Bad commit"
 0 files changed
 delete mode 100644 file3
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ git log 
commit 77ab6b5461ada8b2b3a6f60bf16d070a3c7d088a
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:51 2012 +0800

    Revert "Bad commit"
    
    This reverts commit e399f8d7d6dd5f29bb0c5637f821b5011f694d99.

commit 1084172904dae7d2ac1b4bc2188b86e0d17f78a9
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800

    Second commit

commit e399f8d7d6dd5f29bb0c5637f821b5011f694d99
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800

    Bad commit

commit 6f06639600a9d925ca1cdd85c508c020b601bdb2
Author: Francis Jiang <8648765@qq.com>
Date:   Wed May 2 19:47:39 2012 +0800
</shell></pre>

#### Level: 35

<pre><shell>
jhjguxin@jhjguxin-virtual-machine:~/git_hug$ githug 
********************************************************************************
*                                    Githug                                    *
********************************************************************************
Congratulations, you have solved the level

Level: 35
Difficulty: ***

This is the final level, the goal is to contribute to this repository by making a pull request on Github.  Please note that this level is designed to encourage you to add a valid contribution to Githug, not testing your ability to create a pull request.  Contributions that are likely to be accepted are levels, bug fixes and improved documentation.
</shell></pre>
