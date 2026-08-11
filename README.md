# camp-mac-landing

A rebuild of the [campmac.xyz](https://campmac.xyz/) landing page as a Next.js app.

The original is a Framer site, so this is not a port of its markup — Framer ships
generated, absolutely-positioned CSS with no reusable structure. Every value here was
measured off the live page and re-authored as semantic HTML and Tailwind utilities.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4
- [`motion`](https://motion.dev) for the scroll-driven headline, the hero stickers and
  the tab indicator
- Inter / Inter Tight / Manrope via `next/font/google`

## Running it

```bash
npm install
npm run dev
```

## Breakpoints

Framer authors three fixed layouts, and `app/globals.css` remaps Tailwind's scale so the
variants land exactly on them:

| Variant | Width | Framer layout |
| --- | --- | --- |
| _(base)_ | `< 810px` | phone |
| `md:` | `810px – 1511px` | tablet |
| `lg:` | `>= 1512px` | desktop |

Use only `md:` and `lg:` — anything else drifts off the original's layout boundaries.

## Structure

`app/page.tsx` composes eight sections in order:

| Component | Section |
| --- | --- |
| `Navbar` | fixed pill, collapses to logo + Download below 810px |
| `Hero` | gradient card, five rotated sticker tags |
| `Headline` | "Capture Everything." — scroll-driven scale |
| `WorkflowDemo` | demo video + Capture/Annotate/Search tabs (`#workflow`) |
| `Bento` | six-card feature grid (`#features`) |
| `Reviews` | three testimonials (`#reviews`) |
| `Cta` | "Capture what inspires you" + download buttons |
| `Footer` | links and credits |

Assets are vendored under `public/assets/` rather than hotlinked from
`framerusercontent.com`. The hand-drawn doodles are inline JSX `<svg>`, not data URIs.

## Fidelity

Verified by screenshotting both the original and this build at all three breakpoints
(deviceScaleFactor 2, video playback frozen so frame timing doesn't skew the comparison)
and diffing tile by tile:

| Breakpoint | Pixels differing | Page height |
| --- | --- | --- |
| Desktop 1512 | 0.29% | 4587px — matches |
| Tablet 1024 | 0.24% | 4318px — matches |
| Mobile 390 | 0.52% | 3967px — matches |

The remainder is almost entirely glyph antialiasing: Google Fonts' Inter differs slightly
from the cut Framer self-hosts. Text bounding boxes agree to within ~0.5px, so it is
rasterisation rather than metrics.

## Deviations from the original

Deliberate, and none of them change a rendered frame at rest:

- **Press and hover states.** The original has no `:active` or `:hover` state anywhere and
  no `transition` declarations. Pressable elements here scale to `0.97` on press, and
  links dim on hover (gated behind `@media (hover: hover)` so touch doesn't latch it).
- **Keyboard-navigable tabs.** The workflow tabs implement the full ARIA tabs pattern —
  arrow keys, Home/End. The original's segmented control is not keyboard operable.
- **`prefers-reduced-motion`** is honoured throughout.
- **The hero sticker entrance timing is invented.** Framer's appear-animation parameters
  live in its JS bundle, so only the settled end state could be measured.
