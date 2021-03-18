---
title: Git 合并分支的 3 种方法
---

## 1.Merge

`$ git merge` 是最为常用的合并分支的方法，而它又有 3 种方式

### ① Fast-Forward

---

该方式是默认参数下的合并方式。

如果待合并的分支在当前分支的下游，也就是说没有分叉时，会发生快速合并，从 test 分支切换到 master 分支，然后合并 test 分支。

``` bash
$ git switch master
$ git merge test
```

这种方法相当于直接把 master 分支移动到 test 分支所在的地方，并移动 HEAD 指针。

<center><img src='./figures/30-merge-ff.gif' align='center'></img></center>

### ② no-ff

---

即 'not fast-forward'。

如果我们不想要快速合并，那么我们可以强制指定为非快速合并，只需加上 `--no-ff` 参数。

``` bash
$ git switch master
$ git merge --no-ff test
```

这种合并方法会在 master 分支上新建一个提交节点，从而完成合并。

<center><img src='./figures/30-merge-noff.gif' align='center'></img></center>

### ③ squash

---

``` bash
$ git switch master
$ git merge –-squash test
```

squash 和 no-ff 非常类似，区别只有一点不会保留对合入分支的引用。

<center><img src='./figures/30-merge-squash.gif' align='center'></img></center>

<br></br>

## 2.Rebase

``` bash
$ git switch mywork
$ git rebase master
```

rebase 与 merge 不同，rebase 会将合入分支上超前的节点在待合入分支上重新提交一遍，如下图，C5, C6 会变为C5', C6'，看起来会变成**线性**历史。

<center><img src='./figures/3-7-rebase.png' align='center'></img></center>

<br></br>

## 3.cherry-pick

cherry-pick 命令的作用，就是将指定的提交（commit）应用于其他分支，非常自由。

> 笔者暂且用不到，故只做简单了解。

<br></br>

## 4.选择合适的合并方法

::: tip
:star: 先码住，以后需要了再看。
:::

- [git merge和git rebase的区别, 切记：永远用rebase](https://zhuanlan.zhihu.com/p/75499871)
- [在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？](https://www.zhihu.com/question/36509119)
- [为什么你应该停止使用 Git rebase 命令](https://zhuanlan.zhihu.com/p/29682134)
- [为什么我用 merge 而不用 rebase](https://zhuanlan.zhihu.com/p/32097637)

<br></br>

## 参考文献

- [图解4种git合并分支方法](https://yanhaijing.com/git/2017/07/14/four-method-for-git-merge/)
- [阮一峰 - git cherry-pick 教程](https://ruanyifeng.com/blog/2020/04/git-cherry-pick.html)
- [git merge和git rebase的区别, 切记：永远用rebase](https://zhuanlan.zhihu.com/p/75499871)
- [在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？](https://www.zhihu.com/question/36509119)
- [为什么你应该停止使用 Git rebase 命令](https://zhuanlan.zhihu.com/p/29682134)
- [为什么我用 merge 而不用 rebase](https://zhuanlan.zhihu.com/p/32097637)
