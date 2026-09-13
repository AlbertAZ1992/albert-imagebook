# Sources and example provenance

## Prompts and inspiration

The seven bundled style prompts are maintained in [styles/](../styles/). They were adapted
from this repository's existing authored Skill and recipe instructions. Earlier notes mention
user-supplied inspiration whose original authors, URLs and reuse terms remain unresolved.
They are not presented as verbatim original third-party prompts. No raw third-party prompt
was added during the move to one shared Skill.

[XXD Panel 100](https://github.com/nevertoday/xxd-panel-100), its
[original prompt](https://github.com/nevertoday/xxd-panel-100/blob/main/references/original-prompt/zh-CN.md)
and examples informed our focus on a clear story, open paper and visible input-to-output examples.
Its [compositor](https://github.com/nevertoday/xxd-panel-100/blob/main/scripts/compose_panel.py)
also informed the separation of image generation from exact panel export.
Our prompts and Node export script were independently authored. No XXD example image was used
as a generation reference or copied into this gallery.

Documentation structure was informed by the public READMEs of
[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) and
[Anthropic Skills](https://github.com/anthropics/skills): state the outcome, show an example,
and give a short installation and invocation path.

## Source photographs

The project owner supplied the [example photographs](../assets/examples/README.md).
Source metadata was removed before publication. The current galleries use:

- [Beach sunset](../assets/examples/source-beach-sunset.webp)
- [Coffee terrace](../assets/examples/source-coffee-terrace.webp)
- [Tree-lined street](../assets/examples/source-tree-street.webp)

## Current gallery · 2026-09-09

Examples were generated with the built-in image tool. WebP files are display copies of PNG
exports. Comparisons are 1080×1440, with the original above the artwork in equal 1080×720
panels. The complete 1536×1024 artwork, including paper and material edges, is resized to its
panel without cropping, an added mat or a feather mask.

| Examples | Generation and export |
| --- | --- |
| Beach · Crayon Notes, Quiet Acrylic, Painterly Stories | Revised for a compact, centered scene under the current 65% footprint guidance; featured files use `beach-centered-*`. |
| Beach · Enamel Keepsake, Impasto Island, Photo Play, Travel Stamps | Retained natural-edge generations from before the 65% rule; featured files use `beach-*`. |
| Coffee terrace · all seven styles | Full style prompts plus shared delivery, 3:2 canvas, 65% scene footprint ceiling, no new text. Impasto received one scale correction. Files use `coffee-terrace-65-*`. |
| Tree-lined street · all seven styles | Same full workflow. Quiet Acrylic, Impasto and Painterly Stories received one correction each to remove generated sign lettering; the latter two also reduced scene scale. Files use `tree-street-65-*`. |

Beach originals use a west-anchored cover crop to retain all three people. Coffee and street
comparisons use a centered cover crop. The portrait street source loses upper and lower areas
in its landscape panel; every style page links the complete source photograph.

The 65% ceiling concerns the whole scene footprint, including gaps inside the subject group.
It is a composition instruction, not an exact semantic pixel measurement. All fourteen café
and street exports passed dimension and panel-preservation checks. Visual review remains
necessary: generated details and style strength vary between source photographs and reruns.

Raw PNGs, first attempts, correction prompts and export diagnostics remain in the ignored
local `output/albert-imagebook/` directory. Earlier public assets are retained for reference;
[archived example notes](example-history.md) explain their original workflows. Those older
settings do not define the current [Skill](../SKILL.md).

## Creative studies · 2026-09-10

[Seventeen creative studies](explorations.md) use the same owner-supplied beach source.
Three samples reuse the initial beach exploration; fourteen were generated subsequently.
They are exploratory outputs, not a completed cross-subject validation suite. Display WebPs
are metadata-stripped copies of the actual exported PNGs. Original prompts remain in local output.
The reusable study directions were distilled afterward and have not been independently rerun.

The Navy Outline sample used an owner-supplied social screenshot as a visual reference.
The screenshot shows the accounts siwokun and mahesapps; its original post URL and authorship
are unverified. The screenshot itself is not redistributed. Other user references informed
written material descriptions; their screenshots were not passed to those generations.
