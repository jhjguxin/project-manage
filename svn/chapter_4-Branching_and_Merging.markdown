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

**Branching, tagging, and merging are concepts common to almost all version control systems.** If you're not familiar with these ideas, we provide a good introduction in this chapter. If you are familiar, hopefully you'll find it interesting to see how Subversion implements them.

Branching is a fundamental part of version control. If you're going to allow Subversion to manage your data, this is a feature you'll eventually come to depend on. This chapter assumes that you're already familiar with Subversion's basic concepts ([Chapter 1, Fundamental Concepts](http://svnbook.red-bean.com/en/1.6/svn-book.html#svn.basic)).
