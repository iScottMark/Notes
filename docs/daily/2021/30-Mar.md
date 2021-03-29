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

<br></br>

### 周五 03/19

---

**科研**

- [M/H] - flux (shuffled), classification
  - correction < 50%
  - 基本上几次实验，第一个输入特征都贡献了很大的特征重要性
  - 2495 Å 左右的特征经常出现

**Git**

- restore, revert, reset 的比较和区别


**其他**

- 了解 PyCharm 下的 "Run", "Terminal" 和 "Console" 的区别，参考[此篇博客](https://blog.csdn.net/Onlyone_1314/article/details/109347481)
- 顺便了解了下日常经常提到的 "Terminal" 和 "Console" 这 2 个概念。有个不恰当的比方：电视机上只有一个控制面板（console）来操作电视的一些行为，但是可以很多个遥控器（terminal）来进行信号的输入。

<br></br>

### 周六 03/20

---

**Git**

- 整理常用的 Alias
- 初步了解 Git 最佳实践 - git-flow 的概念

**工具链**

- 计算机教育中缺失的一课 -- 1.课程概览与 Shell

**其他**

- 安装硬盘

<br></br>

### 周日 03/21

---

**AB 测试**

- 是一个从生物学实验中由来的概念
- 指在*同一时间*维度下，对具有*相似属性*的实验对象进行双盲测试（安慰剂/测试用药）
  - 同一时间规避了时间的影响
  - 相似属性是为了确保实验条件、环境等的一致
- 在实际开发中，AB 测试可以是“新-新”，也可以是“新-老”版本之间的测试对比
- 详情请参照 -- [AB测试，你读这篇文章就够了](https://zhuanlan.zhihu.com/p/159605797)

**Python 环境管理**

- 不了解不知道，一了解，本人已经抓狂，不深究了，等以后具体问题具体分析吧！（目前本人使用 conda + pip 的组合）
- pyenv: 不是环境管理的工具，是 Python 不同版本的管理工具
- venv: 自 Python 3.3 版本后，自带的环境管理工具，与 virtualenv 功能类似，只是部分命令不同
- virtualenv: Python 环境管理工具
- virtualenvwrapper: 可以看作是 virtualenv 的加强版，解决了 virtualenv 的一些缺点
- pipenv: 环境 + 包管理工具，具体不了解，但听说原作者已弃坑
- conda: 环境 + 包管理工具（个人只把它当作环境管理工具，包的安装还是用 pip，毕竟 conda 有些包不全，但 又了解到 conda + pip 的组合会有一些潜在的问题）
- 参考：
  - [What is the difference between pyenv, virtualenv, anaconda?](https://stackoverflow.com/questions/38217545/what-is-the-difference-between-pyenv-virtualenv-anaconda) 
  - [Python 多环境管理总结](https://zhuanlan.zhihu.com/p/106588887)
  - [只用来管理 Python 版本和虚拟环境，Miniconda 也是一个很好的选择](https://zhuanlan.zhihu.com/p/81321705)
  - [要不我们还是用回 virtualenv/venv 和 pip 吧](https://zhuanlan.zhihu.com/p/81568689)

**Python 依赖包管理**

- `pip install -r requirements.txt` 使用 requirements.txt 安装依赖
- 主要有 2 种方法 
  - `$ pip freeze > requirements.txt`，会列出当前环境下所有的依赖包极其版本号（适合单虚拟环境）
  - `$ pipreqs . --encoding=utf8 --force`，在当前目录下用 utf8 编码生成项目所需要的依赖包及其版本号，`--force` 参数用来覆盖已经存在的 requirements.txt 文件（需要安装 pipreqs 包）
- 其他依赖包管理 / 生成方法（以后了解）
  - pigar
  - pip-tools
  - pipdeptree
  - 参考 -- [Python 依赖库管理：pipreqs、pigar、pip-tools、pipdeptree](https://zhuanlan.zhihu.com/p/89756247)

**其他**

- Git 全部完成
- 初步了解 Vim

<br></br>

## 12 周

### 周一 03/22

---

**博客**

- 添加博客文章
- 修改博客默认 cover
- 确定个人写作的基本规范

**其他**

- 惠普 bios（参考[链接](https://blog.csdn.net/weixin_43955546/article/details/112547856)）
  - F9: 启动设备选项（选择从哪里启动系统，如 『U 盘』）
  - F10: 设置 bios（如『UEFI 模式』、『安全启动模式』）

<br></br>

 ### 周二 03/23

---

**其他**

没有状态的一天，但是还好坚持运动了。

<br></br>

### 周三 03/24

---

**科研**

- 深入研究了降低光谱分辨率的处理步骤
- 需要具体问题具体分析（已整理部分文档）

**其他**

- 继续学习 Vim 的食用方法

<br></br>

### 周四 03/25 

---

**科研**

- 将波长限制在 2550 - 4000 Å
- 删去不在上述波长范围内的 5 个指数
- 小改降分辨率程序（不是等步长的波长，过后可能还需要修改）

**其他**

- Vim 基本用法学完
- 今天跑 3 公里完全没有任何不适，但左小腿肚稍有不适

<br></br>

### 周五 03/26 

---

**科研**

- 理解了 UVBLUE 原始数据的具体含义
- 理清数据结构、数据预处理步骤，实验方案
- 重写了部分代码

**其他**

- 继续练习使用 Vim

<br></br>

### 周六 03/27 

---

**科研**

- 根据 UVBLUE 提供的 IDL 代码重构了降低分辨率的代码，效果还行
- 尝试使用并行处理，提高数据处理速度

**其他**

- 继续学习使用 Vim

<br></br>

### 周日 03/28 

---

**科研**

- 根据新的降低分辨率代码，重新生成了训练用的数据
- 整理降低分辨率的方法，并写成 wiki

**其他**

- 这个月每到周末，北京的天气就特别不好，都好几回沙尘暴了
- 今儿没跑步，难受得一匹 :sob:

<br></br>

## 13 周

### 周一 03/29

---

**科研**

- 完成 fluxes - Teff 及打乱顺序的 xgb 分类任务
  - 还是会出现第一个输入的特征就是重要特征的问题
- 完成 indices - Teff 及打乱顺序的 xgb 回归任务
  - 同样也有上述问题
  - 但 "BL2740" 这根线始终在前 3 个重要特征里
- 完成 fluxes - [M/H] 及打乱顺序的 xgb 分类任务
  - 尚未出现问题
  - "3550" 附近的线出现在重要特征里

**其他**

- 学习使用 shell
- 初步开启『数据实践』
- 和同学确定打卡计划
