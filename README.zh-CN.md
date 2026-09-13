<div align="center">

# Albert’s Imagebook · 照片转插画 Skill

### 把拍下的瞬间，变成想留下来的小作品。

**一个 Skill，一个指令，一本会继续长大的照片风格书。**

[English](README.md) · [挑一种风格](#风格手记) · [开始使用](#开始使用) · [添加风格](CONTRIBUTING.md)

</div>

**上传照片 → 选一种画法 → 保存作品。** 把人物、旅行和日常照片，变成插画、贴纸和纸上小作品，
也可以得到原图与作品各占一半的对照图。安装一个 Skill，就能使用全部风格。

| 你提供的照片 | 蜡笔小记会这样记下它 |
| --- | --- |
| ![海边日落原照片](assets/examples/source-beach-sunset.webp) | [![三个人一起看日落的蜡笔小记](styles/crayon-memory-postcard/assets/beach-centered-artwork.webp)](styles/crayon-memory-postcard/README.zh-CN.md) |

保留一起看日落的动作和关系，把复杂环境交给几笔颜色与露出的纸底。
想要更安静的小画，可以选「轻线丙烯」；喜欢可见的颜料厚度，可以选「颜料小岛」。

## 为什么合到一本 Imagebook？

旧版 [Image Skillbook](https://github.com/AlbertAZ1992/image-skillbook) 把 7 种风格做成了
7 个可以独立安装的 Skills。这样便于逐个验证，却也让同一套创作体验变成了 7 个需要分别发现、
安装和调用的产品。

Albert's Imagebook 把共用流程和全部风格收进一个 `$albert-imagebook`。安装一次，直接说出
想要的风格，之后换风格也不用记新指令。新增画法只需要加入同一本风格书，不再增加新的 SKU。
后续风格会在这里继续更新；旧版独立 Skills 仍保留给已有用户使用。

## 新探索：照片变贴纸、卡纸与像素画

**7 种已有风格 + 17 种探索方向，安装一个 Skill。**
已有风格覆盖三种题材；探索版先用同一张海滩照片展示差异，适合尝鲜和挑选。

| 蓝线贴纸 | 几何卡纸 | 像素假日 |
| --- | --- | --- |
| ![深蓝单色线描海滩贴纸](docs/assets/exploration/navy-outline-standalone.webp) | ![层叠卡纸海滩插画](docs/assets/exploration/geometric-card-standalone.webp) | ![像素海滩小场景](docs/assets/exploration/pixel-coast-standalone.webp) |

[查看全部 17 种样张、对照图和提示词](docs/explorations.md)。

```text
用 $albert-imagebook，把这张照片做成探索版「蓝线贴纸」，不加字。
```

## 开始使用

```bash
npx --yes skills@1.5.24 add AlbertAZ1992/albert-imagebook \
  --skill albert-imagebook --global --agent codex --yes
```

这会把整个风格库安装到 Codex。新开会话，上传照片，然后说：

```text
用 $albert-imagebook，把这张照片做成「颜料小岛」，不加字。
```

默认得到 **1080×1440 的无字竖版作品**：保留照片里的故事，让笔触和露出的纸底一起构图。
你也可以说：

```text
换成「蜡笔小记」，其他设置一样。
做成上下对照图，原图在上、作品在下，各占一半。
做一张 1920×1080 的左右对照图，原图在左。
做成方形，写上「把今天收好」。
把这个目录里的照片都做成「旅途印记」，每张单独保存。
```

<details>
<summary>从本地项目安装</summary>

下载本仓库，在项目目录打开终端，运行：

```bash
npx --yes skills@1.5.24 add . --skill albert-imagebook --global --agent codex --yes
```

</details>

不知道选什么时，直接问“这张照片适合哪两种风格？”

需要支持 Skill 的 Agent 和图片生成/编辑能力。当前本地安装入口面向 Codex；
生图使用宿主可用的图片工具。精确尺寸导出与拼接需要 **Node 22+、ImageMagick 7**。
Skill 本身不提供图片模型或模型额度。

## 风格手记

同一张海滩照片，看看不同画法会保留什么。点击图片或名称，打开完整作品、原图对照和调用示例。
每个风格页还收录了咖啡露台和树下街巷，方便比较不同题材。

<table>
  <tr>
    <th width="50%"><a href="styles/crayon-memory-postcard/README.zh-CN.md">蜡笔小记</a></th>
    <th width="50%"><a href="styles/editorial-painted-memory/README.zh-CN.md">轻线丙烯</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/crayon-memory-postcard/README.zh-CN.md"><img src="styles/crayon-memory-postcard/assets/beach-centered-artwork.webp" alt="蜡笔小记: 蜡粒纸感 · 歪拙线条 · 少量暖色"></a><br>
      <strong>蜡粒纸感 · 歪拙线条 · 少量暖色</strong><br>
      把一次散步、一段旅程画成随手留下的蜡笔小记，留下动作和记忆里的颜色。
    </td>
    <td>
      <a href="styles/editorial-painted-memory/README.zh-CN.md"><img src="styles/editorial-painted-memory/assets/beach-centered-artwork.webp" alt="轻线丙烯: 纤细手线 · 丙烯平涂 · 简洁叙事"></a><br>
      <strong>纤细手线 · 丙烯平涂 · 简洁叙事</strong><br>
      从热闹照片中选出一个关系，让几根细线和几块颜色讲完故事。
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/enamel-travel-keepsake/README.zh-CN.md">珐琅拾光</a></th>
    <th width="50%"><a href="styles/impasto-miniature-world/README.zh-CN.md">颜料小岛</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/enamel-travel-keepsake/README.zh-CN.md"><img src="styles/enamel-travel-keepsake/assets/beach-artwork.webp" alt="珐琅拾光: 小型纪念物 · 金属轮廓 · 珐琅光泽"></a><br>
      <strong>小型纪念物 · 金属轮廓 · 珐琅光泽</strong><br>
      把照片里最值得记住的轮廓，收成一枚有厚度、有光泽的小小珐琅纪念物。
    </td>
    <td>
      <a href="styles/impasto-miniature-world/README.zh-CN.md"><img src="styles/impasto-miniature-world/assets/beach-artwork.webp" alt="颜料小岛: 厚涂颜料 · 立体刀痕 · 纸上微缩景观"></a><br>
      <strong>厚涂颜料 · 立体刀痕 · 纸上微缩景观</strong><br>
      把风景和人物堆塑成纸上的颜料小岛，让夕阳、树影和浪花有摸得到的厚度。
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/painted-editorial-reconstruction/README.zh-CN.md">笔触叙事</a></th>
    <th width="50%"><a href="styles/photo-doodle-story/README.zh-CN.md">照片奇遇</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/painted-editorial-reconstruction/README.zh-CN.md"><img src="styles/painted-editorial-reconstruction/assets/beach-centered-artwork.webp" alt="笔触叙事: 宽笔触 · 大色面 · 动作与气氛"></a><br>
      <strong>宽笔触 · 大色面 · 动作与气氛</strong><br>
      用几笔有方向的颜色重讲照片里的动作和气氛，让画面像一页有故事的插画。
    </td>
    <td>
      <a href="styles/photo-doodle-story/README.zh-CN.md"><img src="styles/photo-doodle-story/assets/beach-artwork.webp" alt="照片奇遇: 真实照片主体 · 黑线小人 · 微型幽默"></a><br>
      <strong>真实照片主体 · 黑线小人 · 微型幽默</strong><br>
      让照片里的人和物保持真实，再邀请几个手绘小人进来，发生一点小小的奇遇。
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/rubber-stamp-travel-journal/README.zh-CN.md">旅途印记</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/rubber-stamp-travel-journal/README.zh-CN.md"><img src="styles/rubber-stamp-travel-journal/assets/beach-artwork.webp" alt="旅途印记: 手刻轮廓 · 错位套印 · 温暖旧纸"></a><br>
      <strong>手刻轮廓 · 错位套印 · 温暖旧纸</strong><br>
      把一座屋顶、一条街或一段海岸，印成旅行手账里值得收下的一枚彩色章印。
    </td>
  </tr>
</table>

## 一张作品，也是一张可以分享的图

| 画幅 | 成品尺寸 | 适合用途 |
| --- | --- | --- |
| 竖版 · 3:4（默认） | 1080×1440 | 图片笔记、竖版作品 |
| 信息流 · 4:5 | 1080×1350 | 竖版帖子 |
| 方形 · 1:1 | 1080×1080 | 方形帖子、轮播图 |
| 全屏竖版 · 9:16 | 1080×1920 | Story、竖屏封面、手机壁纸 |
| 横版 · 16:9 | 1920×1080 | 横版分享、左右对照 |

可选 **纯作品、上下各半、左右各半**。尺寸指最终成品；原照片直接拼入合成图，
作品另行生成，两个文件都会保存。这些是常用分享画幅，也可以指定其他尺寸。

**留白长在画里。** 主体、纸底和笔触边缘一起生成：涂抹、断笔、露纸或自然淡出由风格决定。
内容以作品区域的 65% 为上限，通常更疏朗；轻线丙烯等风格会留下更多纸面。留白也穿过主体之间，
让重点先被看见，不靠四周加框。导出保留完整画面；
对照图的原照片默认铺满自己的半幅，不额外加白条。

<details>
<summary>更多交付选项：原图摆放、文字、批量和壁纸</summary>

- **原照片**：默认按原比例铺满半幅，裁掉多余部分，并调整裁切位置保留重要主体。
  如果更重视原图完整，可以明确要求“完整原图，允许补边”。
- **作品**：按实际所在区域的比例独立生成。不同画幅分别构图，不拉伸或裁掉作品。
- **文字**：默认不加字；可以给准确文案，也可以让风格提示词用指定语言配字。
- **批量**：可以指定多张照片、多种风格或尺寸；每张原图独立处理。
- **壁纸**：指定设备与尺寸，可以做连贯系列，也可以各自创作。
- **保存**：默认在当前工作目录的 `output/albert-imagebook/`，也可以指定目的目录。

</details>

## 常见问题

**不知道选哪种？** 日常记忆试试蜡笔小记，简洁人物关系选轻线丙烯，喜欢厚重颜料选颜料小岛。
想保留真实的摄影主体，可以选照片奇遇。也可以让 Agent 根据你的照片推荐。

**为什么再次生成和案例不同？** 案例展示实际输出，不是固定模板。人物、构图与细节会随原图和生成变化。

**65% 指哪里？** 只限制作品区域内整组景物的范围，包括组内空隙；默认视觉居中，
通常以 45%～55% 或更少内容构图。原图半幅照常铺满。

**可以用在其他 Agent 中吗？** 本仓库提供标准 SKILL.md，当前安装示例和验证环境是 Codex。
其他宿主需要支持 Skill、参考图生图，以及本地导出命令。

## 添加一种新风格

用一份提示词描述画法，再用实际案例展示效果。
[贡献指南](CONTRIBUTING.md)包含文件结构、构图要求与检查命令。

[MIT License](LICENSE) · [素材与灵感来源](docs/sources.md) · [Skill 执行说明](SKILL.md)
