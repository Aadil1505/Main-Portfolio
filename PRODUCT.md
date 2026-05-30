# Product

## Register

brand

## Users

Three audiences, visiting in different mindsets, all evaluating one person:

- **Hiring managers & recruiters** — scanning fast, deciding in seconds whether to read further or book a call. They need credibility and a clear "what they do / proof they can do it" within the first fold.
- **Engineering peers & the industry** — other builders judging taste and craft. The site itself is a work sample; they read *how* it's built as much as what it says.
- **Potential clients** — looking for someone who can own a problem end to end and ship it. They want evidence of outcomes, not just artifacts.

The person behind the portfolio is a **full-stack software engineer with DevOps depth** — builds products front to back and owns how they run in production.

## Product Purpose

A personal portfolio that has to do four jobs at once: **be remembered, prove competence, earn the interview, and get the visitor to make contact.** Success is a message in the inbox or a calendar invite from someone who arrived a stranger. The distinctiveness is not decoration; in a feed of interchangeable AI-built portfolios, being forgettable is the failure mode, so the site must leave a specific impression of *this* engineer.

The portfolio is also itself the strongest proof artifact: for a technical audience, a site that is fast, accessible, and cleanly built is more persuasive than any claim written on it.

## Brand Personality

Three traits held in tension, on purpose:

- **Precise & engineered** — technical confidence carried through exactness: tight alignment, deliberate spacing, nothing approximate. Reads like infrastructure that works.
- **Calm & refined** — quiet authority over loudness. Restraint and polish; the work speaks, the page doesn't shout over it.
- **Playful & human** — there's a person here, not a résumé generator. Warmth, a little wit, a willingness to be unexpected so the visitor remembers a someone.

Voice: direct, specific, a touch dry. Confident without bravado. Reference feel: the engineered crispness of **Linear / Vercel**, the craft-forward dev-native register (mono accents, command-line literacy, dark surfaces as a material), and **editorial** confidence in typography and grid — used as a tool, not as the whole costume.

## Anti-references

- **The generic AI portfolio.** Project card grid, tiny uppercase eyebrows above every section, hero-metric stat blocks, "I'm a passionate developer" copy. If a visitor can guess it was AI-built, it has failed.
- **Corporate / sterile SaaS.** Soulless enterprise polish, stock-photo gloss, personality sanded off.
- **Over-designed / noisy.** Gradients everywhere, motion for its own sake, gimmicks that get between the visitor and the work.
- **Cluttered / dense.** Walls of text, cramped layout, everything competing. Refinement means editing things out.

A note on the editorial reference: editorial-typographic (display-serif + italic + ruled columns + mono labels) is a currently-saturated AI lane. Borrow its *grid discipline and type confidence*, do not land in its fingerprint.

## Design Principles

1. **The site is the work sample.** Every technical decision is on display to a technical audience — performance, accessibility, semantics, and build quality are part of the portfolio's argument, not housekeeping. Practice what the résumé claims.
2. **Credible in one fold, memorable by the end.** A scanning recruiter gets "who / what / proof" immediately; a lingering peer gets the craft. Serve the fast read and the slow read without compromising either.
3. **Show the work, don't narrate it.** Concrete projects, real outcomes, things that shipped — over adjective-heavy self-description. Specificity is the differentiator.
4. **Restraint with one point of view.** Calm and edited, but never timid or neutral. Pick a distinctive stance and commit; safe reads as invisible. Remove rather than decorate.
5. **Human in the details.** The personality lives in copy, microcopy, and a few deliberate, earned moments — not in noise. One memorable touch beats ten.

## Accessibility & Inclusion

No formal WCAG target, but "sensible and competent" is the bar — and for a technical audience, getting it right is itself a credibility signal:

- Body text readable against its background (aim for the 4.5:1 norm regardless of formal target).
- Fully keyboard-navigable with visible focus.
- Honors `prefers-reduced-motion` with a non-motion alternative for every animation.
- Semantic, well-structured markup.

**Theming constraint (hard requirement):** light and dark mode ship via `next-themes` + shadcn. The color scheme must map to the **existing CSS variables already defined in `app/globals.css`** (`--background`, `--foreground`, `--primary`, `--muted`, `--accent`, etc.). **No new color variables and no hardcoded colors** — everything routes through the established shadcn token names so theming stays consistent across both modes. The current page (`app/page.tsx`) uses raw `zinc-*` / `#hex` values from the scaffold; those are debt to replace with tokens, not a pattern to follow.
