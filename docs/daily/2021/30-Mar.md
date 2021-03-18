---
title: 3 月
---

## 9 周

### 周四 03/04

---

**科研**

- 明确读论文的方式 - 轻整理，**重搜索**
  - PDF 标注
  - 手写笔记
  - Excel
  - 文档

<br></br>

### 周五 03/05

---

**科研**

- [星族](https://zh.wikipedia.org/zh-cn/%E6%98%9F%E6%97%8F)
  - 星族是银河系中年龄、化学物质组成、空间分布与运动特性较接近的恒星集合
  - **第 I 星族**，年轻的恒星（如太阳），通常这类恒星富含金属，故亦称为**富金属星**
  - **第 II 星族**，年长的恒星，通常这类恒星金属较为贫乏，故亦称为**贫金属星**

**Python**

- 抛出错误 `raise`

<br></br>

### 周六 03/06

---

**Python**

- 调试（`assert`, `logging` 和 IDE 等调试方法）
- 简单了解了 doctest 以及 `pydoc`

**PPT**

- 内容排版（4 步走）
- 渐变面积图表

<br></br>

### 周日 03/07

---

**Python**

- 单元测试
- 了解 `pydoc` 和 `doctest`

**PPT**

- 蒙版的高阶玩法

<br></br>

## 10 周

### 周一 03/08

---

**Python**

- 文档测试（`doctest`）

**PPT**

- 封面设计公式

<br></br>

### 周二 03/09

---

**科研**

- 理解 `xgboost` 基本用法
  - `.DMatrix()` 是核心数据结构
  - `.train()` 用于训练
  - `.Booster()` 用于提升

**Git**

- 规划 Git 文档结构
- :bug: : Vuepress 渲染时，如果 md 文档中只有单个（未配对的） html 标签，整篇文档会渲染成空白，如 `<img>`

**其他**

- Pycharm 分段执行代码的 2 种方法（[参考文章](https://cloud.tencent.com/developer/article/1739905)）
- `#!/usr/bin/python3` 和 `#!/usr/bin/env python3` 的作用（[参考文章](https://www.jianshu.com/p/400c612381dd)）
- Python 中 `~` 为按位取反运算符，如 `a = [True, False, True]`, `~a` 为 `[False, True, False]` （[参考文章](https://blog.csdn.net/weixin_38981172/article/details/90176525)）

<br></br>

### 周三 03/10

--- 

**科研**

- 光谱的预处理有：
  - 降低分辨率
  - 采样
- 将数据集和标签分别写入 2 个 `.csv` 文件中（数据持久化）

**Git**

- 复习廖雪峰 Git 教程，并规范书写格式
- 注意 2 个命令：
  - `$ git retore <file>` : 恢复工作区的最新动作 (有点像 `Ctrl` + `Z`)
  - `$ git merge --no-ff -m "xxx" <branch_name>` : `-m "xxx"` 参数可直接进行 ` $ git commit` 操作

<br></br>

### 周四 03/11

--- 

**科研**

- `xgboost.save_binary()` *无法*保存 `feature_names` 这个属性

**Git**

- `$ git pull` 命令[详解](https://www.yiibai.com/git/git_pull.html)
- 建立本地分支与远程分支的链接
- 多人协作流程

**小结**

- 今晚效率不高

<br></br>

### 周五 03/12

--- 

**科研**

- 代码完善，详情看 Git 提交历史以及 Project
- 代码部分的详细完成内容将不再在“日常”中，转至 Project，其他照旧

**Git**

- `$ git rebase` 命令详细理解
- `$ git revert` 用法
- `$ git reset` 的 `--soft <commit_id>` 和 `--hard <commit_id>` 的区别

**其他**

- 将科研代码的具体任务加入至 GitHub Project 中

<br></br>

### 周六 03/13

--- 

**科研**

- 修改昨日出现错误的代码并成功运行
- 读论文

<br></br>

### 周日 03/14

---

**科研**

- 读论文

**其他**

- 没有做运动 :disappointed_relieved:

<br></br>

## 11 周
### 周一 03/15

---

**其他**

活久见，北京沙尘暴过境！

<br></br>

### 周二 03/16

---

**科研**

- 学习 XGBoost 多分类问题的食用方法
- 对丰度重新编码

**Git**

- 廖雪峰 Git 教程完结 :lollipop:
- `.gitignore` 重新生效的[方法](https://blog.csdn.net/mingjie1212/article/details/51689606)

**其他**

- 禁用安全启动项，解决了无法进入 Linux Mint 系统的问题


<br></br>

### 周三 03/17

---

**科研**

- 与老师交流，确定了新的实验内容
- 配置服务器环境

**Git**

- 常用命令清单
- `git checkout` 被取代

**其他**

- 一篇生活感悟文，个人觉得很不错 -- [我们穷极一生，究竟追寻的是什么？](https://daily.zhihu.com/story/9733969)
- 学习使用 tmux
- 再次解决不翻墙无法访问 GitHub 的问题：
  - 进入该[网址](https://github.com.ipaddress.com/www.github.com)，获取本机最快的连接点 ip
  - 修改 `C:\Windows\System32\drivers\etc` 路径下 `host` 文件
  - cmd 中 `ipconfig /flushdns` 命令刷新 DNS


<br></br>

### 周四 03/18

---

**科研**

- 调试服务器，解决很多坑
  - DNS 解析问题（开始以为是自己 conda 源的问题，换源无果）
  - PyCharm SSH 远程连接服务器（汇总成经验贴）

**Git**

- Git 合并分支的几种方法
- 选择合适的合并方法（搜集了相关资料，并未详细阅读）
