---
title: 6 月
---

## 22 周

### 周二 06/01

**科研**

- 继续写代码
- 折腾 kite 自动补全（未成功）

**前端**

- 品优购项目初步认识

<br></br>

### 周三 06/02

---

**科研**

- 折腾环境
- 初步阅读文献

**前端**

- 网站初始化 (base.css, common.css)
- favicon
- 字体图标 fonticon (`@font-face`)
- 网站优化的 3 大标签

**其他**

- [linux服务器上配置Jupyter notebook与登录时密码无效踩坑](https://blog.csdn.net/lyxleft/article/details/100884104)

<br></br>

### 周四 06/03

---

**科研**

- 熟悉 LAMOST fits 文件基本结构
- 读文献

**前端**

- shortcut 设计
  - 版心
  - 左右各 1 个盒子

<br></br>

### 周五 06/04

---

**科研**

- 读文献 - StarNet

**前端**

- shortcut 左盒子
  - `.fl` 左浮动使得盒子在一行
- shortcut 右盒子
  - `|` 用 `li` 实现，给其一个 margin 和背景色
- header 制作初识（利用定位来实现里面的各个盒子）

**其他**

- [为什么南方人跟北方人长相差别很明显？](https://daily.zhihu.com/story/9736717)

<br></br>

### 周六 06/05

---

**科研**

- 读文献，整理文献笔记

<br></br>

### 周日 06/06

---

**科研**

- 做 屁屁踢

**其他**

- 和父母打电话
- 本周复习
- 下周计划

<br></br>

## 23 周

### 周一 06/07

---

**科研**

- 组会
- 准备好 PPT

**前端**

- 品优购项目第 4 天

<br></br>

### 周二 06/08

---

**科研**

- 检查光谱
- 代码推进

**前端**

- 品优购项目第 5 天
  - hotwords 制作
  - 热词不需要用 `<li>`，用 `<a>` 即可

**其他**

- [自己拥有一台服务器可以做哪些很酷的事情？](https://www.zhihu.com/question/40854395)
- [2021 年鸟类摄影比赛](https://www.sciencefocus.com/planet-earth/bird-photography-2021/)

<br></br>

### 周三 06/09

---

**科研**

- 配置 pytorch 环境
- 参考资料
  - [实验室服务器(非root用户)深度学习环境配置](https://blog.csdn.net/qq_43473554/article/details/104987481)
  - [Linux-非Root用户-配置深度学习环境](https://www.cnblogs.com/nrocky/p/13767316.html)

**前端**

- 品优购项目第 6 天
  - 购物车设计
  - 重点在于购物数目的盒子的制作（`border-radius`）

**其他**

- linux 常用命令练习 - [You-Dont-Need-GUI](https://github.com/you-dont-need/You-Dont-Need-GUI)
  - `du`, `df`, `grep`, `rsync`, `stat`, `tree`, `cal`, `bc`, `curl`, `touch`, `cat`, `less`, `top`
  - `Ctrl` + `R` : Lets you search through previously used commands
  - `Ctrl` + `W` : Delete the word before the cursor
  - `Ctrl` + `K` : Clear the line after the cursor
  - `Ctrl` + `T` : Swap the last two characters before the cursor
  - `Esc` + `T` : Swap the last two words before the cursor
  - `Alt` + `F` : Move cursor forward one word on the current line
  - `Alt` + `B` : Move cursor backward one word on the current line
- CUDA 版本问题
  - [Linux上查看已安装的CUDA和cuDNN版本号](https://bbs.huaweicloud.com/blogs/140384)
  - [nvidia-smi 和 nvcc 结果的版本为何不一致](https://blog.csdn.net/ljp1919/article/details/102640512)
  - [CUDA Driver Version和Runtime Version不一致](https://blog.csdn.net/qxqxqzzz/article/details/103453413)
  - [如何查看cudnn当前版本_Linux 和 Windows 查看 CUDA 和 cuDNN 版本](https://blog.csdn.net/weixin_39916758/article/details/111512561)
- [理清GPU、CUDA、CUDA Toolkit、cuDNN关系以及下载安装](https://blog.csdn.net/qq_42406643/article/details/109545766)
- [CUDA、CUDNN、CUDA Driver、CUDA Toolkit、NCVV的区别？](https://blog.csdn.net/weixin_45901519/article/details/107673714)
- [软件版本GA、RC、beta等含义](https://blog.csdn.net/gnail_oug/article/details/79998154)

<br></br>

### 周四 06/10

---

**科研**

- 深度学习
- 数据准备
  - `Dataloader` 和 `Dataset`
  - `Transform`

**前端**

- 品优购项目第 7 天
  - 思考先于下手写代码

**其他**

- python 字符串格式化的 4 种方式（目前推荐 'f-string' 方式）
  - [格式化字符串的4种方式](https://zhuanlan.zhihu.com/p/110406030)
  - [python字符串格式化深入详解（四种方法）](https://blog.csdn.net/qq_27825451/article/details/105652244)

<br></br>

### 周五 06/11

---

**科研**

- PyTorch 深入学习
- PyTorch 学习导图
  - 数据准备
  - 模型构建
  - 损失函数（计算图 + 自动求导 :zap: 非常重要）
  - 优化器（梯度清零）
- 构建自己的数据集（从 `torch.utils.data.Dataset` 类继承，必需改写 `__getitem` 和 `__len__` 方法）
- [一文解释PyTorch求导相关 (backward, autograd.grad)](https://zhuanlan.zhihu.com/p/279758736)

**前端**

- 品优购项目第 8 天
- 反思

**其他**

- [Python @classmethod](https://www.runoob.com/python/python-func-classmethod.html)
- [Python @staticmethod](https://www.runoob.com/python/python-func-staticmethod.html)
- [中国有哪些值得一去的峡谷？](https://daily.zhihu.com/story/9736906)

<br></br>

### 周六 06/12

---

**科研**

- 构建光谱的数据集（思路整理）

**其他**

- 摄影笔记整理
- 完成杂项（购买一些日常所需）

<br></br>

### 周日 06/13

---

**科研**

- 代码推进，完成基本数据集构建

**摄影**

- P10 - 13 课程和笔记

**其他**

- 本周简单复习
- [解决VScode终端远程连接服务器 zsh 出现乱码的问题](https://blog.csdn.net/DreamHome_S/article/details/105847030)
- [解决VS Code Remote Development插件无法建立SSH连接的问题](https://zhuanlan.zhihu.com/p/81039716?from_voters_page=true)

<br />

## 24 周

### 周一 06/14

---

**科研**

- 代码推进（构建自己的数据集）
- 发现深度学习用于回归问题的案例相对于分类问题比较少，可参考的较少

**摄影**

- 背景的定义、作用、处理

**其他**

- linux 实际上将『路径』和『分区』解耦，一个分区可以在多个挂载点下，但反之不行；同时还要注意，前面的『分区』指的是存储介质如硬盘的主分区、逻辑分区，要与 linux 『分区』的概念区别开来（如根目录 `/`，交换空间 `swap`，家目录 `/home`）
  - [linux 下各分区的作用](https://www.zhihu.com/question/454655784/answer/1837098148)
  - [同一个分区挂载在两个目录下怎么分开？](https://bbs.csdn.net/topics/392303861)
- `/usr/local/bin` 是给用户放置自己的可执行程序的地方，推荐放在这里，不会被系统升级而覆盖同名文件；而 `/usr/bin` 是系统预装的可执行程序，会随着系统升级而改变
  - [Linux /usr/bin与/usr/local/bin区别](https://www.jianshu.com/p/5de2286b2e97)

<br />

### 周二 06/15

---

**科研**

- 代码推进
- 发现深度学习对于一维数据和回归问题的处理示例较少

**摄影**

- 空白的定义、作用、处理
- 运动画面的处理（内部画面运动）

<br />

### 周三 06/16

---

**科研**

- 查资料

**摄影**

- 不同的拍摄角度的作用、特点
- 正面

**前端**

- 品优购项目第 9 天 (p34-37)
  - 底部 help 和 版权模块

**其他**

- [雪碧图／精灵图使用教程（CSS Sprites）](https://blog.csdn.net/lp15203883326/article/details/83214044)
- [webstorm等编译器快速编写HTML/CSS代码的技巧](https://www.cnblogs.com/xiayuhao/p/9000216.html)
- [摄影师陈漫个人主页](http://chenmaner.com/)

<br />

### 周四 06/17

---

**科研**

-  看 starnet 论文和源码

**摄影**

- 侧面
- 不同拍摄高度的特点和作用
   - 平视角度
   - 俯视角度

**前端**

- 品优购项目第 10 天 (p38-41)
  - 焦点轮播图的制作

**其他**

- [蒙太奇 (Montage) 手法](https://www.zhihu.com/topic/19581688/intro)

<br />

### 周五 06/18

---

**科研**

- 分析论文代码

**摄影**

- 拍摄高度：仰和顶角度
- 拍摄距离（远全中近特）
  - 远景
  - 全景

**其他**

- 将 frp 服务转移到新的服务器上
- [linux创建用户并给用户sudo权限](https://blog.csdn.net/wujunlei1595848/article/details/87027871)

<br />

### 周六 06/19

---

**摄影**

- 中景、近景、特写
- 线条与人的心理

<br />

### 周日 06/20

---

**科研**

- 跑通代码

**其他**

- 本周简单复习（未仔细复习摄影和前端所学）
- [中国空间站手工纸模型](https://axmpaperspacescalemodels.com/index.php/chinese-space-station-model/)
- [PyTorch 输入数据维度问题](https://stackoverflow.com/questions/57237381/runtimeerror-expected-4-dimensional-input-for-4-dimensional-weight-32-3-3-but)

<br />

## 25 周

### 周一 06/21

---

**其他**

- 体检
- [有哪些是「真正去过非洲的人」才知道的事？](https://daily.zhihu.com/story/9737266)

<br />

### 周一 06/22

---

**摄影**

- 形状
- 影调
- 色彩（色彩三属性、原色、补色、消色）

**其他**

- [爱德华·韦斯顿](https://zhuanlan.zhihu.com/p/29634159)
- 世界航拍第一人 - [亚恩·阿蒂斯-贝特朗](https://zh.wikipedia.org/wiki/%E4%BA%9A%E6%81%A9%C2%B7%E9%98%BF%E8%92%82%E6%96%AF-%E8%B4%9D%E7%89%B9%E6%9C%97)
