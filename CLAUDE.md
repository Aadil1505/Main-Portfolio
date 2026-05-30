@AGENTS.md

# Project Context

Personal portfolio for **Aadil Alli** (full-stack engineer + DevOps). Before working, read **`PRODUCT.md`** (strategy/register) and **`DESIGN.md`** (visual system — "The Dithered Terminal"). A detailed current-state note also lives in the agent memory (`project-state.md`).

**Design system (`app/globals.css`):** warm **cream** theme + one cool **azure** accent (`--primary`), light + dark via `next-themes`. Every color routes through the shadcn tokens in both `:root` and `.dark` — no new color vars, no hardcoded colors (only exception: the WebGL shader hexes in `hero.tsx`). Fonts: **Departure Mono** (`font-pixel`, self-hosted in `app/fonts/`) for the name + all section titles, **Geist** (`font-sans`) for body, **IBM Plex Mono** (`font-mono`) for labels/metadata. Section header = mono `// kicker` + pixel uppercase title with one azure-accented word.

**Sections** (`app/page.tsx` order: hero → work → experience → about): `components/{hero,work,experience,about,site-header}.tsx`. Hero uses cult-ui Hero Dithering (`components/ui/hero-dithering.tsx`); theme toggle is `components/ui/animated-theme-toggler.tsx` (rewired onto next-themes). Not built yet: Education + Skills, Achievements (1st-place Amazon CTF), Contact/footer, header nav.

**Workflow:** run `bun run dev` (port 3000) and **leave it running**. Verify visually with headless Chrome over the DevTools Protocol (WebGL needs `--enable-unsafe-swiftshader --use-gl=angle --use-angle=swiftshader`; emulate `prefers-color-scheme` + `mobile` for light/dark/mobile; `deviceScaleFactor:1` keeps screenshots readable). Typecheck with `bunx tsc --noEmit`. The user curates copy/logos/screenshots and drops assets in `public/`; bias bold and distinctive (see the design-taste memory).
