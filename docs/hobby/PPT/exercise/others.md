# 其他

## 01.交互效果

**教程来自于 B 站：**

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?aid=671177250&bvid=BV1FU4y147sk&cid=284861355&page=1&as_wide=1&high_quality=1&danmaku=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

**关键步骤：**

`插入` ▸ `动作` ▸ `鼠标悬停` ▸ `超链接到幻灯片` ▸ `勾选鼠标移过时突出显示`

<br></br>

## 02.平滑切换 :zap:

**教程来自于 B 站：**

<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?aid=497817673&bvid=BV1SK411V7gz&cid=181584378&page=1&as_wide=1&high_quality=1&danmaku=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

**关键步骤：**

`切换` ▸ `平滑` ▸ `效果选项` （根据需求选择 `对象`、`文字` 还是 `字符`）

**核心点：**

- 平滑切换的版本要求是 Office 365 或者 PPT 2019
- 属于**页间动画**
- 是针对**不同页面上同一元素**的平滑过渡

**控制要平滑的对象：**

有时 PPT 会认为不同页面上的同一元素之间没有继承关系，会将平滑效果变为淡化，解决方法为

- 将 2 个页面上的同一元素命名为相同的名字，且名字的格式遵循 `!!name`
- 如幻灯片 4 上的圆形命名为 `!!shape1`，幻灯片 5 上的正方形也命名为 `!!shape1`。
- 详情请参考微软的[这篇文章](https://support.microsoft.com/zh-cn/office/%E5%B9%B3%E6%BB%91%E5%88%87%E6%8D%A2%EF%BC%9A%E6%8F%90%E7%A4%BA%E5%92%8C%E6%8A%80%E5%B7%A7-bc7f48ff-f152-4ee8-9081-d3121788024f)

**应用场景：**

- 平滑过渡同一场景下不同的区域（比如介绍身体的不同部分）
- 文字强调
- 3D 模型展示
- 放大镜效果
