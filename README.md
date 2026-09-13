<div align="center">

# Albert’s Imagebook · Photo-to-Art Skill

### Turn the moments you photograph into little artworks worth keeping.

**One Skill. One command. A growing photo-to-art style book for Codex.**

[简体中文](README.zh-CN.md) · [Browse styles](#the-style-book) · [Get started](#get-started) · [Add a style](CONTRIBUTING.md)

</div>

**Bring a photo → choose a style → save your artwork.** Turn people, travel and everyday
photographs into little paper-textured artworks, with an optional original-and-art comparison.
One Skill includes the whole style library.

| Your photograph | Recalled in Crayon Notes |
| --- | --- |
| ![Original beach sunset](assets/examples/source-beach-sunset.webp) | [![Three companions watching the sunset in crayon](styles/crayon-memory-postcard/assets/beach-centered-artwork.webp)](styles/crayon-memory-postcard/README.md) |

Keep the shared moment and gestures; suggest the setting with a few colors and exposed paper.
Choose Quiet Acrylic for a small, spacious drawing, or Impasto Island for visible paint relief.

## Why one Imagebook?

The original [Image Skillbook](https://github.com/AlbertAZ1992/image-skillbook) packaged seven
styles as seven independently installable Skills. That made each style easy to test on its own,
but made one creative library feel like seven separate products to discover, install and invoke.

Albert's Imagebook brings the shared workflow and every style under one `$albert-imagebook`.
Install it once, name the look you want, and switch styles without learning another command.
New styles can join the same book instead of becoming new SKUs. Active style development
continues here; the original independent Skills remain available for existing users.

## Explore photo stickers, paper cutouts and pixel art

**7 established styles + 17 experimental directions in one Skill.**
The established styles have three photo subjects each; the studies compare one beach photo.

| Navy Outline sticker | Geometric cardstock | Pixel Coast |
| --- | --- | --- |
| ![Navy outline photo sticker](docs/assets/exploration/navy-outline-standalone.webp) | ![Layered cardstock beach illustration](docs/assets/exploration/geometric-card-standalone.webp) | ![Pixel art beach miniature](docs/assets/exploration/pixel-coast-standalone.webp) |

[Browse all 17 studies, comparisons and prompts](docs/explorations.md).

```text
Use $albert-imagebook. Turn this photo into experimental navy-outline, no text.
```

## Get started

```bash
npx --yes skills@1.5.24 add AlbertAZ1992/albert-imagebook \
  --skill albert-imagebook --global --agent codex --yes
```

This installs the complete style library into Codex. Start a new session, attach a photo, and ask:

```text
Use $albert-imagebook. Turn this photo into Impasto Island, no text.
```

The default is **one 1080×1440 portrait artwork with no added text**: the story of your photo,
recomposed with handmade marks and open paper.
Then try:

```text
Switch to Crayon Notes and keep the other settings.
Make a top-bottom comparison, original above artwork, exactly half each.
Make a 1920×1080 left-right comparison, original on the left.
Make it square and add the words “Keep this day”.
Use Travel Stamps on the photos in this directory; save each separately.
```

<details>
<summary>Install from a local checkout</summary>

Download the repository, open a terminal in its directory, and run:

```bash
npx --yes skills@1.5.24 add . --skill albert-imagebook --global --agent codex --yes
```

</details>

Need help choosing? Ask which two styles would suit your photo.

Requires a Skill-compatible agent with image generation/editing. The local installer targets
Codex; generation uses the host's available image tool. Exact PNG export and composition require
**Node 22+ and ImageMagick 7**. Installing this Skill does not provide a model or image credits.

## The style book

One beach photograph, different ways to remember it. Open an image or title for the complete
artwork, original comparison and an example request. Every style page also includes
a café and a tree-lined street, so you can compare different subjects.

<table>
  <tr>
    <th width="50%"><a href="styles/crayon-memory-postcard/README.md">Crayon Notes</a></th>
    <th width="50%"><a href="styles/editorial-painted-memory/README.md">Quiet Acrylic</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/crayon-memory-postcard/README.md"><img src="styles/crayon-memory-postcard/assets/beach-centered-artwork.webp" alt="Crayon Notes: Wax grain · wonky lines · a few warm colors"></a><br>
      <strong>Wax grain · wonky lines · a few warm colors</strong><br>
      A small, imperfect crayon recollection of a walk, a trip, or an ordinary day.
    </td>
    <td>
      <a href="styles/editorial-painted-memory/README.md"><img src="styles/editorial-painted-memory/assets/beach-centered-artwork.webp" alt="Quiet Acrylic: Fine lines · flat acrylic color · concise storytelling"></a><br>
      <strong>Fine lines · flat acrylic color · concise storytelling</strong><br>
      A few fine lines and matte color shapes tell one quiet story from your photograph.
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/enamel-travel-keepsake/README.md">Enamel Keepsake</a></th>
    <th width="50%"><a href="styles/impasto-miniature-world/README.md">Impasto Island</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/enamel-travel-keepsake/README.md"><img src="styles/enamel-travel-keepsake/assets/beach-artwork.webp" alt="Enamel Keepsake: Tiny keepsake · metal outlines · enamel sheen"></a><br>
      <strong>Tiny keepsake · metal outlines · enamel sheen</strong><br>
      Keep a memorable silhouette as a small enamel object with real thickness and a soft glint.
    </td>
    <td>
      <a href="styles/impasto-miniature-world/README.md"><img src="styles/impasto-miniature-world/assets/beach-artwork.webp" alt="Impasto Island: Thick pigment · palette-knife relief · paper island"></a><br>
      <strong>Thick pigment · palette-knife relief · paper island</strong><br>
      Sculpt a scene into a small island of thick paint, with ridges that catch the light.
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/painted-editorial-reconstruction/README.md">Painterly Stories</a></th>
    <th width="50%"><a href="styles/photo-doodle-story/README.md">Photo Play</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/painted-editorial-reconstruction/README.md"><img src="styles/painted-editorial-reconstruction/assets/beach-centered-artwork.webp" alt="Painterly Stories: Broad brushwork · color planes · movement"></a><br>
      <strong>Broad brushwork · color planes · movement</strong><br>
      Retell the movement and atmosphere of a photograph with a few expressive painted shapes.
    </td>
    <td>
      <a href="styles/photo-doodle-story/README.md"><img src="styles/photo-doodle-story/assets/beach-artwork.webp" alt="Photo Play: Real photo subjects · line characters · tiny humor"></a><br>
      <strong>Real photo subjects · line characters · tiny humor</strong><br>
      Keep the real photographic subject and invite a few tiny drawn characters into its story.
    </td>
  </tr>
  <tr>
    <th width="50%"><a href="styles/rubber-stamp-travel-journal/README.md">Travel Stamps</a></th>
  </tr>
  <tr>
    <td>
      <a href="styles/rubber-stamp-travel-journal/README.md"><img src="styles/rubber-stamp-travel-journal/assets/beach-artwork.webp" alt="Travel Stamps: Carved contours · imperfect registration · warm paper"></a><br>
      <strong>Carved contours · imperfect registration · warm paper</strong><br>
      Distill a roofline, street, or shoreline into a small layered ink impression worth keeping.
    </td>
  </tr>
</table>

## Made to keep. Sized to share.

| Canvas | Final dimensions | Use |
| --- | --- | --- |
| Portrait · 3:4 (default) | 1080×1440 | Photo-art posts |
| Feed · 4:5 | 1080×1350 | Portrait feed posts |
| Square · 1:1 | 1080×1080 | Square posts and carousels |
| Story · 9:16 | 1080×1920 | Stories, vertical covers, phone wallpapers |
| Landscape · 16:9 | 1920×1080 | Landscape sharing and comparisons |

Choose **artwork only, top-bottom 50:50, or left-right 50:50**. Dimensions describe the final
image. Comparisons use your original file and a separately generated artwork; both are saved.
These are convenient sharing presets, and custom dimensions are welcome.

**Breathing room belongs in the artwork.** The model composes the subject, surrounding paper
and natural edges together. Content has a 65% ceiling within the artwork, usually less;
sparse styles leave much more paper. Open passages between forms help the focal story read.
Export preserves the complete image and its style-specific marks; comparisons keep the
original photo in its own half.

<details>
<summary>More delivery options: original placement, text, batches and wallpapers</summary>

- **Original photo:** fills its half without white bars, cropping excess at its original aspect.
  The crop is positioned to retain important subjects. Ask to keep the whole photo with padding
  when that matters more than filling the panel.
- **Artwork:** generated for its actual panel aspect. Different aspects get separate compositions.
- **Text:** none by default; supply exact wording or let the style create copy in a chosen language.
- **Batches:** choose multiple photos, styles or sizes. Each original is processed independently.
- **Wallpapers:** specify device dimensions and choose a coherent set or independent artworks.
- **Files:** saved in `output/albert-imagebook/` in your working directory, or your chosen destination.

</details>

## Frequently asked questions

**Which style should I start with?** Try Crayon Notes for everyday memories, Quiet Acrylic for
simple human relationships, or Impasto Island for thick paint. Photo Play keeps the main subject
photographic. You can also ask the agent to recommend a style for your photo.

**Will my result match an example exactly?** Examples show actual outputs, not fixed templates.
Subjects, composition and details vary with the source photo and each generation.

**What does 65% mean?** It limits the overall scene footprint within the artwork, including
gaps inside the group. Default composition is optically centered and usually aims around 45–55%
or less. In comparisons, the original photo still fills its half.

**Can I use another agent?** This repository provides a standard SKILL.md; the installation
example and verified environment use Codex. Another host needs Skill support, reference-image
generation and access to the local export command.

## Contribute a style

Describe the visual treatment in one prompt file, then show what it produces.
The [contributing guide](CONTRIBUTING.md) covers structure, composition and checks.

[MIT License](LICENSE) · [Sources and inspiration](docs/sources.md) · [Agent instructions](SKILL.md)
