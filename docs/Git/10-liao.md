---
title: 廖雪峰 Git 教程
---

## 0.Git 简介

<center><img src='./figures/10-structure.jpg' align='center'></img></center>

### 0.1.git 用户配置

---

`$ git config --global user.name "Your Name"`

`$ git config --global user.email "email@example.com"`

### 0.2.创建版本库

---

`$ git init` 初始化一个 Git 仓库/版本库

`$ git add <file1> <file2>` 提交文件到**暂存区**可以反复多次使用，添加多个文件

`$ git commit -m <message>` 提交修改到**分支**,如 master 上

<br></br>

## 1.时光穿梭机

`$ git status` 查看工作区的状态

`$ git diff <file>`  查看怎么修改的

`$ cat <file>` 查看文件内容

### 1.1.版本回退

---

`$ git log` 和 `git log --pretty==oneline` 查看提交，**回到过去**

`$ git reflog` 查看命令历史，**穿梭未来**

`$ git reset --hard HEAD^` 回退到上一个版本

`$ git reset --hard commit_id`回退到指定 commit_id 的版本

`HEAD` 当前版本

`HEAD^` 上个版本

`HEAD^^` 上上个版本

`HEAD~100` 上100个版本

### 1.2.管理修改

---

`$ git diff <file>`  比较暂存区和工作区

`$ git diff HEAD -- <file>` 比较版本库的最新版本和工作区

### 1.3.撤销修改

---

`$ git restore <file>` 将不在暂存区的文件撤销更改，**工作区的修改将会丢失**。

`$ git restore --staged <file>` 假如已经 `$ git add <file>`，可以将文件从暂存区撤出，但不会撤销文件的更改,若要继续丢弃工作区的改动，则可以再用上述 `$ git restore <file>` 命令。

### 1.4.删除文件

---

`$ rm <file>` 删除文件
`$ rm -r <directory>` 删除文件夹

**情形 1**：的确想从版本库中删除该文件，`$ git rm test.txt`，同时`$ git commit` 提交删除记录

* 此时，若想再恢复则得回退版本，如 `$ git reset --hard commit_id`；
* 但若要保存当前版本号，且恢复该文件，可用`$ git checkout commit_id <file>` 从旧版本号里拿出该文件放到当前版本号

**情形 2**：不小心误删了，想恢复该文件，`$ git restore <file>`。

<br></br>

## 2.远程仓库

**Git的杀手级功能之一**

本地的 Git 仓库和 GitHub 仓库之间的传输是通过 SSH 加密的，所以要

**配置SSH**

* 创建SSH Key：`$ ssh-keygen -t rsa -C "your email@example"`

* 登陆GitHub，进行SSH Key的相关设置

* 第一次使用Git的 `clone` 和 `push` 会有相关的警告

C:/Users/XiaoM/.ssh 下的 `id_rsa` 和 `id_rsa.pub` 是SSH Key的密钥
`id_rsa` 是私玥，`id_rsa.pub` 是公玥。

GitHub 允许你添加多个 Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的 Key 都添加到 GitHub，就可以在每台电脑上往 GitHub 推送了。

### 2.1.添加远程库

---

现在的情景是，你已经在本地创建了一个 Git 仓库后，又想在 GitHub 创建一个 Git 仓库，
并且让这两个仓库进行远程同步，这样，GitHub 上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

`$ git remote add origin git@server-name:path/repo-name.git` 关联一个远程库（默认名称为 `origin`）

`$ git push -u origin master` 关联后，第一次推送 `master` 分支的所有内容

::: tip
`-u` 参数，Git不但会把本地的 `master` 分支内容推送到远程新的 `master` 分支，还会把本地的 `master` 分支和远程的 `master` 分支**关联**起来，在以后的推送或者拉取时就可以简化命令。
:::

`$ git push origin master` 此后，每次本地提交后，只要有必要，就可以使用该命令推送最新修改；

### 2.2.从远程库克隆

---

`$ git clone git@server-name:path/repo-name.git`

e.g. `$ git clone git@github.com:iScottMark/gitskills.git`

或 `$ git clone https://github.com/iScottMark/gitskills.git`

::: tip
Git 支持多种协议，包括 `https`，但 `ssh` 协议速度最快。
使用 `https` 除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放 http 端口的公司内部就无法使用 `ssh` 协议而只能用 `https`。
:::

* clone 太慢，尝试用 `$ git config --global http.postBuffer 524288000` 解决

<br></br>

## 3.分支管理

### 3.1.创建与合并分支

---

<center><img src='./figures/10-branch.png' align='center'></img></center>

~~`$ git checkout -b <name>` 加上 `-b` 参数表示创建并切换到分支 `<name>`，相当于以下两条命令~~

`$ git switch -c <name>` 加上 `-c` 参数表示创建并切换到新的 `name` 分支，相当于以下两条命令

`$ git branch <name>` + `$ git switch <name>`

`git branch` 查看分支

`$ git merge <name>` 合并指定的 `<name>` 分支到当前分支（即 `master` 分支）

* 这是 `Fast-forward` 合并方式，还有其他合并方式

`$ git branch -d <name>` 删除 `<name>` 分支

### 3.2.解决冲突

---

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

`$ git log --graph` 可以查看分支合并图

`$ git log --graph --pretty=oneline --abbrev-commit`
简约输出

### 3.3.分支管理策略

---

使用 `Fast-forward` 合并方式，删除分支后，容易丢失分支的信息，故我们可以采用 `no-ff` 合并方式。

`$ git merge --no-ff -m "merge with no-ff" dev` 效果如下图

<center><img src='./figures/10-branch2.png' align='center'></img></center>

**分支策略**

在实际开发中，我们应该按照几个基本原则进行分支管理：

首先，`master` 分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

那在哪干活呢？干活都在 `dev` 分支上，也就是说，`dev` 分支是不稳定的，到某个时候，比如 1.0 版本发布时，再把 `dev` 分支合并到 `master` 上，在 `master` 分支发布 1.0 版本；

你和你的小伙伴们每个人都在 `dev` 分支上干活，每个人都有自己的分支，时不时地往 `dev` 分支上合并就可以了。

所以，团队合作的分支看起来就像这样：

<center><img src='./figures/10-branch_strategy.png' align='center'></img></center>

### 3.4.Bug 分支

---

情形：你在 `dev` 分支上进行工作，但是 `master` 分支上有个紧急 *bug101* 需要你去处理，为了不丢失 `dev` 的工作进度，可以这样做

``` bash
$ git stash
$ git switch master
$ git switch -c issue-101
$ vim 文件 B  把bug 改成 fix bug！
$ git add 文件 B
$ git commit -m "fix bug 101"
$ git switch master  # 切回master分支
$ git merge --no-ff -m "merged bug fix 101" issue-101  # 合并
$ git branch -d issue-101  # 删除
```

现在我们再回到 `dev` 分支

`$ git stash pop` 恢复之前的工作进度，且删除 stash 中的内容

该条命令也可以细化成

``` bash
$ git stash list  # 查看多个stash的内容
$ git stash apply stash@{id}  # 选择指定的stash_id恢复
$ git stash drop  # 删除stash内容
```

- `$ git stash` 保存时，一定要将修改过的文件进行 `$ git add`，最后在这之前用 `$ git status` 查看一遍
- 在哪个分支上进行 bug 的修复，以及创建和合并分支，要切换到对应的分支上
- 此情境下，若想把 `master` 上的 bug 也提交到 `dev` 上，可以用 `$ git cherry-pick <commit_id>` 来减少手动重复修改的操作。但要注意的是**针对同一个文件，如 `readme.txt`，在 `dev` 分支下做了修改，然后 `stash`，但是 bug 也出现在 `master` 分支下的 `readme.txt` 文件，这样再使用 `$ git cherry-pick` 就会造成冲突，需要手动 `merge`）**

### 3.5.Feature 分支

---

开发一个新 feature，最好新建一个分支；

如果要丢弃一个没有被合并过的分支，可以通过 `git branch -D <name>` 强行删除。

::: danger
使用 `-D` 参数，会使得未合并分支的那次提交中的修改全部丢失！谨慎操作！
:::

**应用场景：**

- 开发一个新特性 *feature-vulcan*

``` bash
$ git switch -c feature-vulcan
$ git add vulcan.py
$ git commit 
```

- 切换 dev 分支

``` bash
$ git switch dev
```

- 此时，老板说经费不足，该特性不开发了，就地销毁

``` bash
$ git branch -d feature-vulcan
error: The branch 'feature-vulcan' is not fully merged.
If you are sure you want to delete it, run 'git branch -D feature-vulcan'.
```

- Git 会友情提醒“`feature-vulcan` 分支还没有被合并，如果删除，将丢失掉修改” ，若仍要强行删除，则使用 `-D` 参数

``` bash
$ git branch -D feature-vulcan
Deleted branch feature-vulcan (was 287773e).
```

### 3.6.多人协作

---

`$ git remote -v` 查看远程库信息，本地新建的分支如果不推送到远程，对其他人就是不可见的

`$ git push origin branch_name` 从本地推送分支，如果推送失败，先用 `git pull` 抓取远程的新提交

`$ git branch --set-upstream-to=origin/remote_branch  your_branch` 建立本地分支和远程分支的联系（两者名称最好保持一致）

`$ git pull` = `$ git fetch` + `$ git merge` 从远程抓取分支，如果有冲突，要先处理冲突

**多人协作的工作模式：**

1. 首先，可以试图用 `$ git push origin <branch-name>` 推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用 `$ git pull` 试图合并；
3. 如果 `$ git pull` 提示 `no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用 `$ git branch --set-upstream-to=origin/remote_branch  your_branch` 建立链接关系；
4. 如果合并有冲突，则解决冲突，并在本地提交；
5. 没有冲突或者解决掉冲突后，再用 `$ git push origin <branch-name>` 推送就能成功！

### 3.7.Rebase

---

`$ git rebase` 把分叉的提交历史“整理”成一条直线（拷贝分叉的提交历史，改个 commit_id，然后线性地加在后面），这样看上去更直观。缺点是本地的分叉提交已经被修改（或者说被丢弃）了。

<center><img src='./figures/3-7-rebase.png' align='center'></img></center>

与 `$ git merge` 的比较

<center><img src='./figures/3-7-rebase_merge.png' align='center'></img></center>

<br></br>

## 4.标签管理

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针，创建和删除标签都是瞬间完成的。

tag 就是一个让人容易记住的有意义的名字，它跟某个 commit 绑在一起。

::: tip
跟分支很像对不对？但是分支可以移动，标签**不**能移动！
:::

### 4.1.创建标签

---

`$ git tag <tagname>` 在最新提交的 commit 上打标签

`$ git tag <tagname> <commit_id>` 在指定的 commit 上打标签

`$ git tag` 查看所有标签（**注意**：标签不是按时间顺序列出，而是按字母排序的。）

`$ git tag -a <tagname> -m "xxx" <commit_id>` 在指定的 commit 上打标签，并附上说明

`$ git show <tagname>` 查看该 tag 的完整信息和说明

::: warning
注意：标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master 分支，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。
:::

### 4.2.操作标签

---

`$ git tag -d <tagname>` 删除一个本地标签

`$ git push origin <tagname>` 推送本地的一个标签

`$ git push origin --tags` 推送全部未被推送过的本地标签

`$ git push origin :refs/tags/<tagname>` 或 `$ git push origin -d tag <tagname>` 删除一个远程标签

<br></br>

## 5.远程仓库 GitHub 和 Gitee

`$ git remote -v` 查看所有远程仓库信息

`$ git remote rm <repo_name>` 删除远程仓库的关联（默认的 repo_name 为 origin）

同时关联 2 个远程仓库，并重新命名

`$ git remote add github git@github.com:<user_name>/<repo_name>.git `

`$ git remote add gitee git@gitee.com:<user_name>/<repo_name>.git`

同时将本地仓库推送到这两个仓库

`$ git push gitbub master`

`$ git push gitee master`

<br></br>

## 6.自定义 Git

`$ git config` 有很多可以配置的内容

### 6.1.忽略特殊文件 `.gitignore`

---

**忽略文件的原则**

- 忽略操作系统自动生成的文件，比如缩略图等；
- 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 .class 文件；
- 忽略你自己的带有敏感信息的配置文件，比如存放口令或密码的配置文件。

**配置 `.gitignore` 文件**

```
filename.py  # 忽略某个文件
*.py[cod]    # 忽略 .pyc, .pyo, .pyd 文件
dataset/     # 忽略某个文件夹及其中的所有文件和子文件夹
*.ini        # 忽略所有拓展名为 .ini 的文件
.*           # 忽略所有 . 开头的隐藏文件
```

GitHub `.gitignore` 配置[模板](https://github.com/github/gitignore)

**重新生效 `.gitignore`**

在 `.gitignore` 中加入新的忽略规则后，只能针对那些 untracked 的文件生效，若要对那些已经提交的文件生效，可以执行以下操作：

```bash
$ git rm -r --cached .  # 清除缓存
$ git add .  # 重新trace file
$ git commit -m "update .gitignore"  # 提交和注释
$ git push origin master  # 可选，如果需要同步到 remote 上的话
```

### 6.2.配置别名

---

`$ git config --global alias.st status` 将 `$ git status` 简化为 `$ git st`


类似地还有:

``` bash
$ git config --global alias.ci commit
$ git config --global alias.br branch
```

::: tip
笔者将根据个人使用习惯，单独使用一个篇幅来展示更多的“偷懒”配置。
:::
