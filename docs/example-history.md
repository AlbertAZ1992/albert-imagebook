# Archived example notes

Historical snapshots of earlier generations and export settings.
For the current gallery and workflow, see [source notes](sources.md).
Statements such as “current” and “being evaluated” below refer to their original snapshot.

The bundled prompts were separated from this repository’s existing authored Skill and recipe
instructions. They are not claimed to be verbatim original prompts. The earlier notes record
user-supplied inspiration with unresolved original authors, URLs, and reuse terms. No raw
third-party prompt has been added in this migration.

- **Crayon Memory Postcard** (crayon-memory-postcard): migrated from the repository's existing authored style instructions.
- **Editorial Painted Memory** (editorial-painted-memory): migrated from the repository's existing authored style instructions.
- **Enamel Travel Keepsake** (enamel-travel-keepsake): migrated from the repository's existing authored style instructions.
- **Impasto Miniature World** (impasto-miniature-world): migrated from the repository's existing authored style instructions.
- **Painted Editorial Reconstruction** (painted-editorial-reconstruction): migrated from the repository's existing authored style instructions.
- **Photo Doodle Story** (photo-doodle-story): migrated from the repository's existing authored style instructions.
- **Rubber Stamp Travel Journal** (rubber-stamp-travel-journal): migrated from the repository's existing authored style instructions.

The source photos were supplied by the project owner for demos. Existing generated examples
are retained under each style. Older paired examples were assembled from a source photograph
and a generated panel.

## Complete-canvas examples · 2026-09-09

The crayon and impasto `tree-street-design-only.webp` examples use the owner-supplied
`source-tree-street.webp` with the shared workflow, 3:4 portrait, design-only, no new text.
Each call used the complete corresponding `prompt.md` body and the same delivery block.
The built-in image tool generated the full canvas; the impasto result received a local
image-tool correction to remove lettering from painted signs. WebP copies are for display;
full PNG outputs are retained in the local ignored output directory.

## Beach comparison · 2026-09-09

The owner-supplied beach photograph was transformed with the complete Impasto Miniature
World prompt using the built-in image tool: 3:2, no text, compact paint with open paper.
The generated artwork is 1536×1024. The original and artwork were composed with
`scripts/compose.mjs` into a 1080×1440 PNG, each panel exactly 1080×720; source fit: contain.
These earlier WebP copies remain available in the style assets.

The separation of style instructions and deterministic panel export was informed by
[XXD Panel 100](https://github.com/nevertoday/xxd-panel-100) and its
[compositor](https://github.com/nevertoday/xxd-panel-100/blob/main/scripts/compose_panel.py).
The Node export script here was independently implemented.

## Earlier rectangular showcase · 2026-09-09

These earlier gallery assets use the owner-supplied photos below. Each showcase artwork was generated
with the built-in image tool using its complete style prompt and a shared full-bleed delivery
block. The export script then places the artwork in a centered rectangle covering 70% of the
artwork panel area (rounded to pixels), with a common warm-white outer background. The full-bleed
PNGs and generation prompts are kept locally; WebP display copies are included in each style folder.

| Display name | Stable style ID | Source photo |
| --- | --- | --- |
| Crayon Notes · 蜡笔小记 | crayon-memory-postcard | source-sunset.webp |
| Quiet Acrylic · 轻线丙烯 | editorial-painted-memory | source-coffee-terrace.webp |
| Enamel Keepsake · 珐琅拾光 | enamel-travel-keepsake | source-tree-street.webp |
| Impasto Island · 颜料小岛 | impasto-miniature-world | source-beach-sunset.webp |
| Painterly Stories · 笔触叙事 | painted-editorial-reconstruction | source-coffee-terrace.webp |
| Photo Play · 照片奇遇 | photo-doodle-story | source-beach-sunset.webp |
| Travel Stamps · 旅途印记 | rubber-stamp-travel-journal | source-tree-street.webp |

Each `showcase-comparison.webp` is a 1080×1440 top-bottom composition with exact
1080×720 panels. The source is kept whole using contain placement. The standalone
`showcase-artwork.webp` is a 1080×720 standalone export of the same raw artwork with the same
70% framing. The comparison is independently composed from the raw artwork, avoiding double margins.

The Enamel Keepsake landscape comparison uses a separately generated 8:9 artwork.
`showcase-left-right.webp` is exported at 1920×1080 with two exact 960×1080 panels;
the original is kept whole. It is not a crop of the 3:2 showcase artwork.

## Natural painted edges · 2026-09-09

The shared workflow now generates breathing space and material-specific edges in the image
itself. The compositor no longer places art in an inset rectangle. All seven style prompts
explicitly require peripheral marks to disperse into exposed paper, with subject-preserving
treatment for enamel and photographic elements.

The Impasto Island `natural-edges-artwork.webp` and `natural-edges-comparison.webp` replace
its earlier showcase links. The built-in image tool generated a fresh 1536×1024 beach artwork
from the owner-supplied source, using the corrected shared delivery block. The exact prompt
and raw PNG are retained in `output/albert-imagebook/natural-edges/impasto-miniature-world/`.
This call preceded the additional per-style edge wording. The complete image was resized
to 1080×720 and paired with the original at 1080×1440, source fit contain, with no artwork mat.
Other showcase images are earlier generations and have not been regenerated in this correction.

## Story and open paper · 2026-09-09

A further review of [XXD Panel 100](https://github.com/nevertoday/xxd-panel-100), its
[original prompt](https://github.com/nevertoday/xxd-panel-100/blob/main/references/original-prompt/zh-CN.md)
and samples [09](https://github.com/nevertoday/xxd-panel-100/blob/main/assets/examples/sample-09.png)
and [10](https://github.com/nevertoday/xxd-panel-100/blob/main/assets/examples/sample-10.png)
informed two changes: simplify the source into a focal relationship, and show the input and
actual result before delivery options. These are independently authored revisions to our own
style prompts. No reference artwork was supplied to the image model or copied into this gallery.

The `beach-artwork.webp` and `beach-comparison.webp` files are the current featured examples.
Crayon Notes, Quiet Acrylic and Painterly Stories were regenerated with more selective subject
interpretation and an artwork-only 70% content ceiling. Each received one focused correction.
Enamel, impasto, photo doodles and stamps reuse their earlier natural-edge beach generations;
they were not regenerated under the new ceiling instruction. All seven comparisons use cover
placement anchored west, preserving the three people without padding in the photo panel.
Standalone exports are 1080×720; comparisons are 1080×1440 with equal panels.

The built-in image tool generated the complete paper and artwork at 1536×1024. Exact prompts,
first attempts and corrections remain in the ignored local output directory. The preview copies
are WebP exports; composition only resizes and joins the complete images. Approximate paper-color
coverage is a diagnostic, not a semantic segmentation guarantee or a substitute for visual review.

## Centered composition and a 65% footprint ceiling · 2026-09-09

The shared composition rule now uses the extent of the whole subject group, including internal
paper gaps, with a 65% ceiling and optical centering. Colored-pixel coverage alone understated
how large the earlier crayon scene appeared. The beach crayon, quiet acrylic and painterly
examples were edited with the built-in image tool: the crayon group was reduced, and all three
were centered while retaining their material edges. Their featured assets use the
`beach-centered-artwork.webp` and `beach-centered-comparison.webp` names. Earlier files remain.

The coffee-terrace and tree-street photographs are also being evaluated with all seven complete
style prompts, the shared 3:2 delivery block, exact portrait comparisons and no new text.
These local evaluation outputs are separate from the featured beach gallery.
