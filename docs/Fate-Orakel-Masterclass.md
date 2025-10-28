# Fate Orakel — Masterclass Analysis

This document combines an in‑depth understanding of the live site and a picture‑driven user‑view analysis. It is written to align design, animation, and engineering on the same mental model and provide practical levers for implementation.

## North Star

- Feel: premium, whimsical, cosmic; less occult, more mystical technology.
- Outcome: a repeated ritual that feels collectible and rare — glitch is the “foil/holo” chase.
- Pillars: clarity of flow, collectible‑grade card visuals, tasteful ambient motion, respectful accessibility.

## User Journey

1. Welcome
   - Cosmic gradient with subtle twinkles; headline “Fate Orakel” breathes with a rainbow wave. Subtitle: “Der Schleier lauscht.”
   - Suit icons communicate the six color families and glow gently.
2. Ask & Prepare
   - Left: question field with glassmorphism; placeholder “Welche Wahrheit möchtest du lüften?”.
   - Right: background‑music toggle; reduced‑motion users are informed music/animations are disabled.
3. Draw Ritual
   - CTA “Ziehe dein Schicksal”. A calm spinner and soft pre‑glitch hint build anticipation.
   - A shockwave pulse emanates behind the card as it reveals.
4. Card Reveal
   - Full‑face trading card with pristine borders, halo, and foil sheen. Bonus cards show a “BONUS” chip; glitches show a red “GLITCH” chip and a glitch progress bar (8 segments).
   - Archetype + (Name • Element) appear below; the card itself is clickable to draw again.
5. Interpretation
   - The question is echoed in a pill for context; the fortune types out with a caret (hide caret on completion). Metadata lists Archetyp, Element, Einfluss, and time.
6. Memory & Learning
   - “Letzte Deutungen” shows recent card thumbnails. Suit overview tiles serve as a living glossary.

## Visual Language

- Color
  - Background: indigo → violet → pink gradient (velvet, not neon). Suit accents: hearts (red), diamonds (blue), clubs (green), spades (steel), schelm (amber), stern (violet).
- Typography
  - Inter for UI copy; strong, clear headlines. Bonus flavor: Comic Sans (Schelm) and Playfair (Stern) in small amounts.
- Composition
  - Card is king. Interpretation is a distinct panel below. Recent cards and suit tiles build rhythm and trust.

## Card Rendering (Collectible‑Grade)

- Proportions & Radius
  - Aspect ratio 63×88; proportional corner radius (~5.5%) applied consistently across the image and all overlays.
- Image Fit
  - Full‑face image with tiny, controlled zoom so the inner ornamental frame touches the outer border evenly. Single tuning knob: `--card-zoom`.
- Premium Layers
  - Edge highlight, inner shadow, angled foil sweep, suit‑colored halo/outer ring. No hard white edges.
  - Badge placement: “BONUS” (top‑right, inside safe area). “GLITCH” (top‑left). “KETTE xN” chip sits just outside the top edge.
- Interactivity
  - The card is clickable to draw again (in addition to the “Erneut ziehen” button), reducing mouse travel.

## Motion & Effects

- Reveal
  - Single shockwave pulse; ≤0.8s; opacity fades instead of abrupt end.
- Fortune
  - Typewriter effect ending with caret hidden to signal completion.
- Ambient Background (VisualFX)
  - Twinkles and suit‑colored ring pulses; intensity briefly rises on reveals and higher glitch levels. Fully disabled under reduced motion.

## Glitch System (Levels 1 → 8)

Mapping: `glitch === true` enables levels; `glitchChain` selects level. Bonus suits bias upward (Schelm lively, Stern elegant). All levels honor reduced‑motion.

1) Level 1 — Subtle Static
   - Soft scanlines + micro RGB fringe; small saturation lift. Purpose: signal “rare” without harming readability.
2) Level 2 — Temporal Stutter
   - Brief freeze‑then‑catch‑up; 1–2 vertical shears. Controlled time slip.
3) Level 3 — Parallax Tears
   - 3–5 light parallax slices; a soft lens pulse glides over the face. Dimensionality without chaos.
4) Level 4 — Echo Phantoms (Card‑Local Canvas)
   - 2–3 faint suit‑colored silhouettes orbit; central bloom. Reads as ethereal resonance.
5) Level 5 — Frame Break
   - Two quick shards escape the frame, border desync pulses, slight tilt; controlled rupture.
6) Level 6 — Cosmic Interference
   - Lens ripple, mild refractive distortion, constellations shimmering via ambient canvas.
7) Level 7 — Portal Bloom (Blitz+)
   - Volumetric light cones, 3D lift/tilt, deep RGB split that recombines. Double shockwave with suit color.
8) Level 8 — Reality Collapse (Finale)
   - Phase A: invert/solarize; Phase B: stripe scramble; Phase C: particle dissolve; Phase D: snap‑back with brilliant sheen. Guard: rare, once per N draws; disabled when reduced motion.

## Ambient FX

- Background canvas: twinkles + ring pulses; palette from suit flash color. Particles can accent “achievement” moments (e.g., end of L8).
- Card‑local canvas: orbiting echoes for L4; extendable for L6 ripples or constellations within card silhouette.

## Audio

- Optional ambient per suit; fades and respects reduced motion. Never blocks interaction; safe play/pause with error handling.

## Interaction Design

- Primary controls: question → draw → interpretation → draw again. All extras feel optional.
- Glitch comprehension: chips + progress bar make rarity legible; tiny “?” tooltip can explain chains the first time glitch occurs.
- Fallback behavior: missing assets render a suit‑gradient face with large suit symbol. No whitescreens.

## Accessibility

- Reduced‑Motion: disables audio and nonessential animation; glitch levels fall back to Level 1 style.
- Contrast: sufficient text contrast on violet backgrounds; borders provide separation.
- Keyboard & Reader: draw button + card as `role="button"`; glitch and chain labeled via ARIA; live regions only where needed.

## Performance & Resilience

- GPU‑friendly CSS transforms/opacity/filters; canvas work kept light and canceled on unmount.
- Preload the selected suit image during reveal delay; use `decoding="async"`, `fetchpriority="high"` for the hero card; `loading="lazy"` for thumbnails.
- Guardrails: reduced motion disables heavy animations; background tab throttling is tolerated.

## State & Logic

- Registry: primary vs bonus suits; themed fortunes and icons; bonus visually distinct.
- Fortune text twist: token substitution to negative with fallback bleak words if no candidates found.
- Glitch probability: base per suit, boosted by `glitchBoostLeft` and chain; capped; fireworks on high chain.

## Content & Localization

- Tone: confident, curious, benevolent. Schelm playful; Stern philosophical.
- Encoding: ensure all fortunes are UTF‑8 (remove mojibake). Consider i18n (DE/EN toggle).

## Asset Craft

- Trim and padding consistency so the inner ornamental frame is aligned across all cards.
- DPI and `srcset` for crispness on high‑density displays; avoid oversizing on mobile.
- Palette discipline per suit; reserve hard whites and bright yellows for highlight moments.

## Tuning Knobs

- Card zoom: `--card-zoom` (typ. 1.045–1.055). Corner radius: `--card-radius` (5–6%).
- Glow strength: halo/edge shadows and `drop-shadow` intensities. Shockwave clamp sizes.
- Glitch mapping: clamp to level; bias Schelm upward; keep Stern elegant.

## Testing Protocol

- Visual snapshots desktop/mobile; corner and frame alignment; glow bleed; font clarity.
- Motion: reduced‑motion disables animations/audio; fortune still readable.
- Stability: repeated draws; RAF cancellation; no memory growth; no pointer‑event blocks.
- Accessibility: keyboard triggers; screen reader reads draw, glitch status, and fortune in logical order.

## Roadmap

- Short term: caret hides post‑typewriter; add “?” tooltip to glitch bar; micro‑tune `--card-zoom` per asset pack.
- Medium term: implement Glitch Levels 7–8; multi‑card spreads (3‑card, Celtic cross); share/export screenshots.
- Long term: PWA with offline assets; session history constellation view; unlockable holo variants.

## Principles

- Clarity over spectacle: effects frame the card, not overshadow it.
- Rarity feels earned: glitch escalates with chain; not chaos every time.
- Respect first: honor user motion settings; never force audio; keep controls human.

---

### File Pointers (Implementation Reference)

- `index.html` — boots Tailwind, React, Babel, and `app.js` with ambient canvas `#veil-bg`.
- `app.js`
  - React app (`FateOracle`) and state (reading, glitch chain, music, progress, thumbnails).
  - VisualFX ambient (twinkles + ring pulses); card‑local canvas for glitch echoes (L4).
  - Glitch levels 1–6 via CSS+canvas; badges, progress bar, safe image fallbacks.
- `styles.css`
  - Card layout, premium overlays, radius consistency, glow tuning, glitch levels (1–3 CSS; 5–6 CSS), progress bar styling.

