# Add a style · 添加风格

Albert’s Imagebook has one workflow. A new style needs one prompt file.

Albert’s Imagebook 只有一套执行流程。增加风格只需要增加一份提示词。

## Style lifecycle · 风格生命周期

Keep the library easy to grow without treating every idea as a finished product:

1. Keep private, copied or unfinished material in the Git-ignored `prompt-inbox/`.
2. Use `docs/explorations.md` for a one-source study that is callable but still experimental.
3. Promote a direction to `styles/<style-id>/prompt.md` after its reusable prompt is clear.
4. Add examples and a root README feature only after it works on varied source photographs.

让风格库持续增长，但不要把每个想法都直接包装成成品：

1. 私有、摘录或尚未整理的素材留在 Git 忽略的 `prompt-inbox/`。
2. 只用一张照片试过的方向放进 `docs/explorations.md`，可以调用，但明确标为探索版。
3. 可复用的画法稳定后，再放进 `styles/<style-id>/prompt.md` 成为正式风格。
4. 在不同题材上验证通过后，再补案例并进入首页精选。

The root README is a curated cover, not a registry that must grow with every prompt. Keep
gallery assets deliberate and compressed; add images that demonstrate a new subject, layout or
failure boundary rather than near-duplicates.

根 README 是精选封面，不是每份提示词都必须登记的运行时目录。案例图片应保持克制并压缩，
只保留能证明新题材、新画幅或关键边界的结果，避免堆积相似样张。

Create `styles/<style-id>/prompt.md` with this shape:

```markdown
# Style name · 中文名称

A short description of the visible result and suitable source images.

## Prompt

Your complete style prompt goes here.
```

The title and description help the agent select a style. Everything after `## Prompt` is sent
to the image model unchanged, followed by the user's delivery settings. Chinese and English
prompts both work. No catalog entry, code change, additional Skill, or build step is required.

名称和简介用于选风格；`## Prompt` 后的完整内容会原样传给生图模型，再追加本次交付要求。
中文或英文提示词都可以。不需要注册目录，不需要写新 Skill，也不需要构建或同步。

Put the visual interpretation in the prompt: what to extract from the photo, how to depict it,
material, color, composition, and optional typography. Let the image model make the creative
decisions within that instruction. Input handling, output layout, dimensions, text choice, and
saving belong to the shared `SKILL.md`.

Every style prompt must describe marks dispersing naturally into exposed paper, using edges
appropriate to its medium: broken wax, scraped pigment, missing ink or fading painted traces.
For enamel and photographic subjects, preserve the subject and disperse the surrounding marks.
The shared workflow sets a 65% content ceiling for the artwork only, generally aiming around
45–55% or less. Judge the overall group footprint, including internal gaps; center it optically.
Sparse styles should remain much sparser. Select the essential story and let
paper flow between forms, rather than merely surrounding a complete painted scene. The model
generates the whole composition; export only sizes it and assembles comparisons.
Do not replace these material-specific edges with a rectangular inset or generic blur.

提示词负责从图中取什么、怎么画，以及材质、配色、构图、字体和自然边缘。
每种风格都要让笔触自然散开、露出纸底，并按材质描述涂抹、断笔或淡出。作品内容以 65% 为上限，
通常瞄准 45%～55% 或更少；疏朗风格可以远低于这个比例。按整组景物范围判断，包括组内空隙；默认视觉居中，保持四周留白平衡。
珐琅和真实照片主体保持完整，通过周围笔触与环境碎片过渡到纸底。
导出只负责尺寸和对照拼接，不缩图加白框，不统一套羽化蒙版。
选图、交付排版、尺寸、文字开关和保存由共享流程处理。

Try the new style on a photo using `$albert-imagebook`. Adjust the prompt if the actual artwork
misses the intended effect. When there are good examples to share, put them in that style's
`assets/`, add a `README.md` with the result and invocation, and link it from the root READMEs.
Use a short display name and a few concrete visual keywords. Keep the directory ID stable.
Add an English README and a Chinese README.zh-CN when maintaining both languages.
These showcase files are optional for using the style.

用 `$albert-imagebook` 实际生成一张，效果不对就调整提示词。有好作品后放到该风格的
`assets/`，再补展示用的 `README.md` 和首页入口。名称尽量简短，特色写成看得见的材质、画法和适用场景。
需要双语展示时分别维护 README.md 和 README.zh-CN.md，首页入口指向相应语言。
展示资料不影响风格本身被发现和调用。

Keep private or unfinished source material in the Git-ignored `prompt-inbox/`. Publish prompts
and examples you can share, and record known attribution in [docs/sources.md](docs/sources.md).
The public prompt file is the runtime source; a private inbox file is never required by users.

未整理或私有素材可以先放进 Git 忽略的 `prompt-inbox/`。正式使用的提示词必须在 Skill
包内公开，用户不需要你的本地素材。已知来源记录在 [docs/sources.md](docs/sources.md)。

## Repository structure · 项目结构

| Location | Responsibility · 职责 |
| --- | --- |
| `SKILL.md` | Shared photo-to-art workflow · 统一选图、交付与检查流程 |
| `styles/<style-id>/prompt.md` | Complete style prompt · 风格的唯一运行时来源 |
| `styles/<style-id>/README*.md` and `assets/` | Bilingual examples · 双语案例展示 |
| `scripts/compose.mjs` | Exact image export and comparisons · 精确尺寸与对照拼接 |
| `scripts/verify.mjs` | Local links and Skill structure · 链接与包结构校验 |
| `docs/sources.md` | Attribution and current example provenance · 素材与案例来源 |

For repository changes, run `npm run check` to check JavaScript lint and formatting,
local documentation links, prompt structure and discovery of the single installable Skill.
Run `npm run install:local` to refresh your local Codex installation after editing the Skill.
These checks do not judge image quality; review an actual generation when changing a prompt.

修改后运行 `npm run check`，检查代码、文档链接、风格结构与 Skill 发现；
用 `npm run install:local` 更新本机安装。修改提示词后仍需查看真实生成效果。

## Export comparisons · 导出对照图

The shared [export script](scripts/compose.mjs) handles exact sizing and 50:50 panels.
It needs Node 22+ and ImageMagick 7. Run `node scripts/compose.mjs --help` for examples.
Plan before generating: the artwork uses the **panel** aspect, not the whole comparison aspect.
The photo defaults to cover placement without padding. Inspect the crop and choose
`--photo-gravity` to retain important subjects; contain padding requires an explicit request.
Check the exported outer edges and seam for added white bars as well as checking pixel dimensions.
风格提示词不需要复制尺寸和拼接逻辑；先计算半幅比例，再生成包含自然留白的完整作品。
原图默认铺满半幅；检查裁切并调整对齐方向，避免丢失重要主体。仅在明确要求时完整保留并补边。
除了核对尺寸，还要检查成品外沿和拼接处是否出现额外白条。
Pass the complete generated artwork, including its paper/background, to `--art`.
Do not trim its natural edges or pass a previously assembled comparison.
始终把包含纸底和自然边缘的完整生图交给 `--art`，不裁掉留白，不重复拼接对照成品。
