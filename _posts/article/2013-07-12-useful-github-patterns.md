---
layout: post
title: "一些常见的GITHUB模式"
description: ""
category: article
tags: [github, git]
---
{% include JB/setup %}

source: [http://blog.quickpeople.co.uk/2013/07/10/useful-github-patterns/]()


__PR: pull request__

### 1. the peel-off PR

场景：

     * 我正在feature branch上编码
     * 我看到一些有问题的代码，想马上修复，但这些修改与我当前所做的feature完全无关（例如：一些小BUG，代码风格不一致等）

措施：

     * 暂停正在做的工作（commit或stash）
     * checkout master
     * 创建一个新的branch
     * 修正问题，创建一个PR
     * 切换回feature branch，继续工作
     * 最后，与feature分支合并

这既可以立即修复无关问题，又可以保证feature branch干净。

### 2. the optimistic branch

场景：

     * 有一个未合并的分支（branch-A），暂时不能被合并（例如 CI不通过，代码审查太忙等等）
     * 我需要修改与branch-A相关的代码

措施：

     * 基于branch-A创建一个新的分支branch-B
     * 当branch-A合并到master分支后，我将branch-B分支rebase到master分支上，并解决合并冲突
     * branch-A上之后的bugfixes也会合并到branch-B上

如果branch-A上的修改很大，这种措施可能会带来一些代码冲突，但是乐观上来看，在95%情况下是没问题的。

### 3 the heads-up PR

场景：

     * 我正在做一些不需要代码审查的修改
     * 但我仍然希望别人知道

措施：

     * 在分支上开发
     * 创建一个PR
     * 然后自己将PR合并

这种方法并没有影响我自己，但GitHub仍然会向其它人发Email通知PR，因此其它人仍然可以对代码评论。

### 4. the sneaky commit

场景：

     * 代码已经经过审查并且合并到了master分支上
     * 我需要做些小修改，这些修改不值得通知其它人

措施：

     * 直接将代码提交到master分支上

### 5. the roger roger comment

场景：

     * 在分支的代码审查时，我收到一些不好的反馈
     * 我需要基于反馈来进行问题修复

措施：

     * 我对这个PR创建一个评论，里面注明修复commit的ref
     * GitHub会自动将评论中的ref转换为diff的链接地址，因此我的同事会：
          * 收到邮件通知
          * 点击链接地址，查看修改
          * 然后知道可以继续审查代码

### 6. the creepin' commit

场景：

     * 我发现一些很小的代码格式问题（如 不必要的空格，文件末尾缺少空白行等等）
     * 一段代码的修改应该属于上一次提交
     * 我的代码不应该commit（例如 不能通过测试）但我仍然希望能够回滚到这里，以便安全地做些实验

措施：

     * 对前两种情况，我直接修正(amend)上一次提交
     * 对第三种情况，我创建一个开发提交(work-in-progress commit), 然后开发时对这个分支进行不断修改，直到满足提交的要求。

### 7. the forced branch

场景：

     * 我需要修改一个远程库里的分支，例如：我在一次提交注释中措辞不当。

措施：

     * 我在本地修改这次提交
     * 然后强制推送到远程库的分支上

尽管强制推送到远程库这种做法很不推荐，但我的经验是：在这种情况下，很少会出问题（只要它只针对分支，而非master分支）。GitHub会自动解决好强制推送到分支的问题，例如不会丢失之前提交的注释等等。

### 8. the reformat peel-off

场景：

     * 我需要修改和重新格式化些代码

措施：

     * 我向master分支上单独做次只包含重新格式化修改的commit
     * 我将分支rebase到master上

用这种方式，分支上的修改做起对比来会显得非常干净整洁，很有利于代码审查，因为它不会包含重新格式化修改。

### 9. the prototype PR

场景：

     我在代码完全实现前想得到更多的反馈

措施：

     * 我在一条分支上做些hack
     * 我发起一个PR，这个PR并不是要提交代码，而是发起一个讨论
     * 当得到讨论结果后，关闭这个PR（并删除分支）
     * 我创建另一个分支和PR

我曾经以为PR只是当代码完成时对代码进行提交，现在我深刻理解了“[Pull request are a great way to start a conversation](https://github.com/blog/1124-how-we-use-pull-requests-to-build-github)" - GitHub围绕PR相关的功能（比如 代码行评论，回复，通知和比较）非常有利于编码及设计讨论，而且可以防止开发者走进死胡同。
