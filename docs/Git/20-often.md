---
title: Git 补充
---

## 常用命令清单

参考 [Git Cheat Sheet](https://liaoxuefeng.gitee.io/resource.liaoxuefeng.com/git/git-cheat-sheet.pdf)

<br></br>

## 常用 Alias 配置

```
dog = log --all --decorate --oneline --graph
s = status
ci = commit -m
br = branch -a
sw = switch
d = diff
```

<br></br>

## git checkout 被取代

### 前言

---

Git 社区发布了 Git 的新版本 2.23。在该版本中，有一个特性非常引人瞩目，就是新版本的 Git 引入了 2 个新命令 `git switch` 和 `git restore`，用以替代现在的 `git checkout`。**换言之，`git checkout` 将逐渐退出历史舞台**。

Git 社区决定这样做，是因为目前 `git checkout` 命令承载了太多的功能，这让新手们感到困惑。`git checkout` 的核心功能包括两个方面:一个是分支的管理，一个是文件的恢复。这两个核心功能由 `git switch` 和 `git restore` 分别负责。

### 新旧对比

---

**分支管理**

``` bash
# 旧
$ git checkout <branch_name>     # 切换分支
$ git checkout -b <branch_name>  # 创建并切换到该分支

# 新
$ git switch <branch_name>     # 切换分支
$ git switch -c <branch_name>  # 创建并切换到该分支
```

**文件恢复**

``` bash
# 旧
$ git checkout (--worktree) <filename>  # (默认参数) 撤销文件在工作区的修改
$ git checkout --staged <filename>      # 撤销文件在暂存区的修改

# 新
$ git restore (--worktree) <filename>   # (默认参数) 撤销文件在工作区的修改
$ git restore --staged <filename>       # 撤销文件在暂存区的修改
$ git restore -s HEAD~1 <filename>      # 将当前工作区的文件切换到上个 commit 版本
$ git restore -s <commit_id> <filename> # 将当前工作区的文件切换到指定 commit 版本
```

> 笔者将会单独用一个篇幅具体阐述 `$ git restore`, `$ git revert` 和 `$ git reset` 的用法和区别。

<br></br>

## 参考

- [我常用的 Git 别名](https://juejin.cn/post/6844903976245133326)
- [工具系列 | git checkout 可替换命令 git switch 和 git restore](https://www.cnblogs.com/tinywan/p/12344267.html)
- [GIT撤销修改 restore](https://www.jianshu.com/p/dcef204dba74)
