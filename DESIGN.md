---
name: Portfolio
description: A full-stack engineer's portfolio — warm cream paper, a pixel-terminal display voice, a dithered cool-azure signal.
---

# Design System: Portfolio

## 1. Overview

**Creative North Star: "The Dithered Terminal"**

A dev-native surface with a retro-computing soul, built by someone who lives in a terminal. The name is set huge in a pixel/bitmap display face; clean sans carries the prose; monospaced labels run alongside like a build log. The signature move is a dithered azure shader (a slowly swirling orb of pixel dots) that anchors the composition and gives the page real motion. A single committed azure is the only color with a pulse.

The system holds three traits in tension on purpose. **Precise and engineered**: pixel-grid type, tight alignment, mono metadata that reads like instrumentation. **Calm and refined**: restraint over loudness, generous whitespace, the work doing the talking. **Playful and human**: the pixel face, the dithered orb, and copy with actual personality keep it from going sterile — there is a person here, not a résumé generator with a stack list.

It explicitly rejects the generic AI portfolio (an even grid of project cards, a tiny uppercase eyebrow over every section, hero-metric stat blocks), the soulless enterprise-SaaS look, the safe-serif-on-white "editorial" template, and anything noisy or cluttered. Personality lives in voice and a few signature moments, not in noise.

**Key Characteristics:**
- Warm cream paper (light) / warm near-black (dark) carry the surface; one cool azure is the only saturated voice. The warm/cool tension is deliberate, not the default mono-cream.
- Three typographic voices on a contrast axis: pixel display, sans body, mono chrome.
- A dithered shader orb (system azure swirl on a dark-grey disc) is the signature visual: full right column on desktop, a contained centered orb below the copy on mobile.
- The name is the loudest element on the page, set large in the pixel face.
- Motion is the ambient shader plus responsive feedback, not gated scroll-reveals.
- Light and dark are equal citizens, both driven entirely by shadcn tokens.

## 2. Colors

A warm cream page (Claude-style warm neutrals, hue ~95–106) with one cool azure as the only saturated voice. The warm paper carries the calm; the cool blue carries the signal. Azure appears on primary actions, the dithered visual, links, and focus rings — nowhere does a second accent hue appear.

> **Token discipline (hard rule).** Every color routes through the shadcn CSS variables in `app/globals.css` (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--muted`, `--accent`, `--border`, `--ring`, etc.) in **both** `:root` and `.dark`. No new color variables. No hardcoded hex or `zinc-*` utility colors in components. The one exception is the WebGL shader (`hero.tsx`), which takes hex props CSS vars can't reach.

### Primary
- **Signal Azure** (`--primary` = `oklch(0.55 0.22 258)` light / `oklch(0.56 0.22 258)` dark): the one saturated color, against warm neutrals. Primary buttons, the dithered orb, active states, links, focus rings (`--ring` shares the hue). `--primary-foreground` is white in both modes and clears AA (4.99:1 light, 4.79:1 dark) — azure is capped at L0.56 precisely so white text stays legible.

### Neutral (warm)
- **Ink** (`--foreground`): warm dark brown-gray, `oklch(0.3438 0.0269 95.72)` light (10.98:1 on cream) / warm off-white `oklch(0.8074 0.0142 93.01)` dark. Carries body and the name.
- **Paper** (`--background`): the canvas. `oklch(0.9818 0.0054 95.10)` warm cream light / `oklch(0.2679 0.0036 106.64)` warm near-black dark. This is a deliberate warm cream, paired with the cool azure for contrast.
- **Surface** (`--card`, `--secondary`, `--muted`, `--accent`): warm cream steps for grouping and quiet panels, plus the soft `--shadow-*` ramp for the Claude-style lift.
- **Muted text** (`--muted-foreground`): light value darkened from the source palette to `oklch(0.52 0.02 96)` so small labels clear AA on cream (5.22:1). Don't restore the lighter source value.
- **Line** (`--border`, `--input`): warm hairline rules and dividers.

### Named Rules
**The One Blue Rule.** Azure is the only chroma in the system. There is no second accent hue, ever. If a surface needs emphasis and azure is wrong for it, the answer is weight, scale, or a neutral step — not a new color.

**The Token-Only Rule.** Color exists only as a shadcn token. A raw hex or `zinc-*` class in a component is a bug, because it breaks one of the two themes.

## 3. Typography

**Display Font:** **Departure Mono** (`--font-pixel` / `--font-departure`, weight 400, self-hosted woff2; `ui-monospace, monospace` fallback) — a monospace with a soft pixel/retro-terminal soul. Pixely without being a blocky arcade font. Carries the name and signature display moments. Also aliased to `--font-pixel-square` / `--font-pixel-circle` so the cult-ui hero classes resolve to it.
**Body Font:** **Geist** (`--font-sans`; `system-ui, sans-serif` fallback) — clean, dev-native, variable. All prose and UI.
**Label / Mono Font:** **IBM Plex Mono** (`--font-mono`, weights 400–600; `ui-monospace, monospace` fallback) — the workhorse mono for labels, metadata, and code.

**Character:** Three families on a contrast axis (pixel display vs. humanist sans vs. clean mono). Departure Mono is the personality and the loud display voice; Geist keeps reading comfortable; IBM Plex Mono is the quiet build-log chrome. Two distinct monospaces is intentional here: the pixel face is a display instrument, not body text.

### Hierarchy
- **Display / Name** (Departure Mono, `clamp(2.5rem, 6vw, ~8rem)`, line-height ~0.92, tracking ~-0.02em): the name and hero-scale moments. The loudest thing on the page.
- **Section title** (Departure Mono pixel face, ~`text-2xl`→`text-4xl`, leading tight): the title of each section, one azure-accented word/phrase. Smaller than the hero name, the same voice.
- **Title** (Geist, 600, ~1.25rem): card/project titles, smaller headings.
- **Body** (Geist, 400, ~1.0625rem, line-height ~1.6): prose. Cap measure at 65–75ch. `text-wrap: pretty`.
- **Label / Meta** (IBM Plex Mono, 400–500, ~0.8125rem): stack tags, dates, build-log metadata, nav, kicker lines, code. Sentence or as-is case, not tracked all-caps over every section.

### Named Rules
**The Pixel-Display Rule.** Departure Mono is the display voice: the hero name and **every section title** (the consistent thread across sections). Never body prose, never a paragraph, never a label IBM Plex Mono should carry. Pixely but not overly.

**The Margin-Mono Rule.** IBM Plex Mono is the voice of the machine: labels, metadata, file paths, stack tags, code. Never body prose; mono body fatigues and reads as costume.

## 4. Elevation

Mostly flat, with the soft Claude-style `--shadow-*` ramp (`--shadow-2xs` through `--shadow-2xl`, low-opacity black) available for gentle lift on cards, popovers, and badges. Depth leans first on warm hairline `--border` rules, tonal cream steps, and whitespace; shadows are subtle and small, never heavy 2014-app drops. Hover lift (a step up the ramp) is the main interactive use.

### Named Rules
**The Soft-Lift Rule.** Resting shadows stay at `--shadow-sm` or smaller. Bigger steps (`--shadow-lg`+) are reserved for genuinely floating surfaces (open popover, dialog). If a shadow is dark enough to notice as a shadow rather than feel as depth, it's too heavy.

## 5. Components

> Built so far: hero (`components/hero.tsx`), selected work (`components/work.tsx`), experience (`components/experience.tsx`), about (`components/about.tsx`), site header (`components/site-header.tsx`), an animated theme toggle (`components/ui/animated-theme-toggler.tsx`, rewired onto next-themes), and shadcn `button` / `badge`. The hero uses the cult-ui Hero Dithering primitives (`components/ui/hero-dithering.tsx`). Page order: hero → work → experience → about. The hero's "View work" anchors to `#work` (smooth scroll, `scroll-padding-top` clears the sticky header).

- **Selected Work:** a visual showcase (NOT the résumé-style list — that look is reserved for Experience). Alternating feature rows: each project pairs a live-site screenshot (in `public/shots/`, captured with the browser chrome already baked into the image, so it's shown plainly with rounded corners + a soft shadow, links out, lifts on hover) with a text column (logo + pixel uppercase name, blurb, mono azure-metric + `·` stack, `site ↗ / code ↗` links). The preview side alternates left/right per row; stacks preview-over-text on mobile. Closes with "More on GitHub". Screenshots are kept full-color (they're product previews); the Authlink logo still gets `dark:invert`.
- **Experience:** the résumé/CV treatment (the list look deliberately kept off Work), mirroring the user's actual LaTeX résumé (Jake Gutierrez template). Pixel section title, then `divide-y` rows. Each row leads with the company logo (`public/logos/`) filling a small white rounded square chip (consistent light surface so the mixed logos — Disko's white-on-black mark and the navy/gold Hofstra shield, which is shared by both Hofstra roles — read on both themes), then a two-row justified header: **company** (sans semibold) + location on the top line, title + dates (both mono muted) on the second, then bullets with small azure-square markers. Reverse-chronological, matching the résumé order. Bullets run full width (no max-w cap) so they reach the same right edge as the location/dates rather than wrapping early. On mobile the header lines stack.
- **About:** single-column, text-only — mono `// about` kicker, a pixel-face section title with one azure-accented phrase, two short paragraphs (the real bio in the user's own words), and a mono build-log detail line. The portrait was pulled (a formal grad-gown shot clashed with the build-PCs origin story); `public/aadil.png` is parked for a better-fitting placement later.

- **Hero Dithering (signature):** split layout — copy + CTAs on the left, a dithered orb on the right (`@paper-design/shaders-react`, swirl, 4x4). Colors are the system tokens as hex (the one allowed hex exception, since WebGL can't read CSS vars): `colorFront #006bf1` (= `--primary` azure), `colorBack #262624` (= our dark grey surface). One contained orb at every breakpoint — full right column on desktop, a centered square orb below the copy on mobile (`aspect-square`, `rounded-full`). Do not revert to the bottom-bleed mobile treatment.
- **Buttons:** primary = Signal Azure (`--primary` / `--primary-foreground`); secondary/ghost stay neutral. Display CTAs use the pixel face (`font-pixel`). Hover is a tonal shift + optional subtle lift, never a hue change. Visible `--ring` focus state is mandatory.
- **Badges:** outline on `--card`, hairline `--border`, subtle shadow + hover lift. Used for the stack row; name in semibold, optional version in mono.
- **Containers:** prefer hairline `--border` + whitespace over boxed cards. When a card is the right affordance, full borders only — never a colored side-stripe, never nested cards.
- **Navigation:** the header wordmark is the pixel face; links are ghost icon buttons; the theme toggle is an animated view-transition reveal driven by next-themes (`setTheme`/`resolvedTheme`), styled to match the icon buttons. Section kicker lines use IBM Plex Mono.
- **Radius:** inherit the existing `--radius` scale (`0.625rem` base with the `sm`→`4xl` ramp in `globals.css`). Don't introduce one-off radii.

## 6. Do's and Don'ts

### Do:
- **Do** route every color through a shadcn token in both `:root` and `.dark`. If a value isn't a token, it doesn't ship.
- **Do** keep azure as the single saturated voice — emphasis elsewhere comes from weight, scale, and whitespace.
- **Do** use Departure Mono for the name and signature display only; IBM Plex Mono for metadata/labels/code; Geist for headings and body.
- **Do** verify body text clears 4.5:1 in both themes — push toward `--foreground`, not toward light gray.
- **Do** separate sections with editorial rules and space; let the layout breathe.
- **Do** give every animation a `prefers-reduced-motion` fallback.

### Don't:
- **Don't** ship the generic AI portfolio: an even grid of identical project cards, a tiny uppercase tracked eyebrow over every section, or a hero-metric stat block.
- **Don't** let it read corporate/sterile — the azure signal and a human voice in the copy are what keep it warm.
- **Don't** go noisy or over-designed: no gradients everywhere, no motion for its own sake, no glassmorphism, no gimmicks between the visitor and the work.
- **Don't** crowd the page — walls of text and cramped layout are failure; refinement means editing out.
- **Don't** use `background-clip: text` gradient headings, `border-left`/`border-right` color stripes, or all-caps body copy.
- **Don't** introduce a second accent hue or a fourth font family.
- **Don't** put IBM Plex Mono (or any mono) on body prose.
