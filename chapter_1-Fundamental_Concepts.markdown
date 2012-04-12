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

While the lock-modify-unlock model is considered generally harmful to collaboration, sometimes locking is appropriate.
The **copy-modify-merge model** is based on the assumption that files are contextually内容相关 mergeable---that is, that the majority of the files in the repository are line-based text
files (such as program source code). But for files with binary二进制 formats, such as artwork
or sound, it's often impossible to merge conflicting changes. In these situations, it really is necessary for users to take strict turns when changing the file. Without serialized access, somebody ends up wasting time on changes that are ultimately discarded.
While Subversion is **primarily a copy-modify-merge system**, it still recognizes the need to lock an occasional file, and thus provides mechanisms for this. We discuss this feature in the section called "Locking".
</pre>

