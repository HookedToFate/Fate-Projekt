# GitHub Copilot Instructions for Fate-Orakel

## Project Overview

**Fate-Orakel** (Fate Oracle) is an interactive, mystical web application that provides fortune-telling experiences through a custom card system. The application combines cosmic aesthetics with collectible-grade card visuals, creating an immersive, ritualistic experience for users seeking insights or guidance.

**Key Features:**
- Interactive card drawing with six unique suit types (Herz, Karo, Kreuz, Pik, Schelm, Stern)
- Mystical glitch system with 8 progressive levels that create rare "chase" moments
- Question-based fortune interpretations with keyword extraction
- Collectible journal tracking discovered cards
- Rich ambient effects and optional background music
- Full accessibility support with reduced-motion preferences

**Target Audience:** Users seeking a premium, whimsical cosmic experience that feels both mystical and modern, with collectible-grade presentation.

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with German language content
- **CSS3**: Custom styles with Tailwind CSS integration
- **JavaScript (ES6+)**: Vanilla JS with React 17
- **React 17**: Component-based UI via UMD builds
- **Babel Standalone**: In-browser JSX transformation

### Development Tools
- **Node.js & npm**: Package management and build scripts
- **Playwright**: End-to-end testing framework
- **serve**: Local development server

### External Dependencies
- **Tailwind CSS**: Via CDN for utility-first styling
- **Google Fonts**: Inter (UI text) and Playfair Display (headers)
- **React/ReactDOM**: Via unpkg.com CDN

### Asset Management
- PNG images for card suit symbols (Herz.png, Karo.png, Kreuz.png, Pik.png, Stern.png, Trickster.png)
- Canvas-based background effects for nebula and ambient animations

## Repository Structure

```
Fate-Projekt/
├── .github/                    # GitHub configuration (workflows, Copilot instructions)
│   └── copilot-instructions.md # This file - repository-wide Copilot guidance
├── .vscode/                    # VS Code workspace settings
├── docs/                       # Documentation
│   └── Fate-Orakel-Masterclass.md  # Comprehensive design and implementation guide
├── tests/                      # Test files
│   └── fate.spec.ts           # Playwright test suite
├── index.html                  # Main entry point
├── app.js                      # Main application logic (~950 lines)
├── styles.css                  # Custom styling (~495 lines)
├── package.json                # Node dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── README.md                   # Project documentation in German
└── *.png                      # Card suit image assets
```

### Key Files and Their Purposes

- **`index.html`**: Application entry point with CDN imports and canvas backdrop
- **`app.js`**: Contains React components, fortune logic, glitch system, and card mechanics
- **`styles.css`**: Custom CSS including animations, glassmorphism effects, and responsive design
- **`docs/Fate-Orakel-Masterclass.md`**: Authoritative design document - consult this for visual language, motion design, and glitch level specifications
- **`tests/fate.spec.ts`**: Playwright tests covering core drawing mechanics and UI interactions
- **`README.md`**: Detailed German documentation of all features, visual effects, and user interactions

## Coding Guidelines

### General Principles
1. **Minimal Changes**: Make surgical, focused changes that preserve existing functionality
2. **German Language**: All user-facing text must be in German. Code comments can be English.
3. **Mystical Tone**: Maintain the cosmic, mystical atmosphere in UI text (e.g., "Der Schleier lauscht" not "Enter a question")
4. **No Breaking Changes**: Avoid modifying working code unless fixing bugs or implementing requested features

### JavaScript/React Conventions
- Use **React 17** patterns (class components or functional with hooks)
- Use **JSX** for component markup (transpiled by Babel in-browser)
- Prefer **const** for variables that don't change, **let** for those that do
- Use **template literals** for string interpolation
- Implement **seeded random number generation** for reproducible card draws
- All fortune text manipulation should preserve original structure (e.g., `twistFortuneText` for glitch effects)

### CSS Conventions
- Use **Tailwind CSS utilities** for common spacing, colors, and layout
- Custom animations go in `styles.css` with meaningful names (e.g., `@keyframes wave-letters`)
- Support **reduced-motion** preferences via `@media (prefers-reduced-motion: reduce)`
- Use **CSS custom properties** (variables) for theming when appropriate
- Glassmorphism effects: `backdrop-filter: blur()` with fallbacks
- All timing should use semantic durations (xs: 180ms, s: 500ms, m: 800ms, l: 1200ms, xl: 1800ms)

### Naming Conventions
- **Components**: PascalCase (e.g., `FateOracle`, `CardFace`)
- **Functions**: camelCase (e.g., `drawCard`, `twistFortuneText`)
- **Constants**: SCREAMING_SNAKE_CASE for true constants (e.g., `SUIT_REGISTRY`, `NEGATIVE_MAP`)
- **CSS classes**: kebab-case (e.g., `card-face`, `glitch-badge`)
- **Data attributes**: Use `data-testid` for test hooks (e.g., `data-testid="draw-btn"`)

### Code Organization
- Keep fortune logic, visual effects, and React components logically separated
- Glitch system has 8 distinct levels - reference `docs/Fate-Orakel-Masterclass.md` for specifications
- Card suits defined in `SUIT_REGISTRY` with colors, elements, archetypes, and fortunes
- Fortune twisting uses `NEGATIVE_MAP` to invert positive keywords for glitch effects

### Accessibility Requirements
- All animations must respect `prefers-reduced-motion`
- Interactive elements must have proper ARIA labels
- Keyboard navigation must work for all primary actions
- Focus indicators must be visible and meet WCAG standards
- Audio must be opt-in and pausable
- Sufficient color contrast on cosmic gradient backgrounds

## Testing Approach

### Test Framework
- **Playwright** for end-to-end testing
- Tests located in `tests/fate.spec.ts`
- Run tests with: `npm test`

### Testing Strategy
- **Core mechanics**: Card drawing, fortune display, glitch system
- **Resilient selectors**: Tests use `data-testid` hooks with fallbacks to text/role
- **Flexible expectations**: Tests accommodate evolving markup (see helper functions in `fate.spec.ts`)
- **Wait strategies**: Proper async handling with `waitForCardResult()` helper

### Test Helpers to Use
- `getDrawButton(page)`: Finds draw button using multiple strategies
- `expectLoaderDuring(page, action)`: Validates loading state during async operations
- `waitForCardResult(page)`: Waits for card to appear using multiple selectors
- `looksLikeFortune(text)`: Validates fortune text format

### Running Tests Locally
```bash
npm install           # Install dependencies
npm test             # Run Playwright tests
npm start            # Start local dev server
```

### Test Considerations
- Don't break existing tests unless test expectations are incorrect
- Add `data-testid` attributes to new interactive elements
- Glitch effects should not prevent tests from finding elements
- Tests should work with or without animations enabled

## Reference Resources

### Essential Documentation
- **[docs/Fate-Orakel-Masterclass.md](../docs/Fate-Orakel-Masterclass.md)**: Authoritative design specification including:
  - Visual language and color psychology
  - 8-level glitch system specifications
  - Motion and animation timing
  - Card rendering specifications
  - Accessibility requirements

- **[README.md](../README.md)**: Complete German documentation covering:
  - All card types and their meanings
  - Visual effects and animations
  - User interaction flows
  - Fortune generation and twisting logic
  - Insight generation system

### External References
- [React 17 Documentation](https://17.reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Playwright Documentation](https://playwright.dev/)
- [MDN Web Docs](https://developer.mozilla.org/) for canvas, animations, and web APIs

### Key Concepts to Understand

#### Fortune System
- Each suit has 5 pre-defined fortunes
- Fortunes can be "twisted" for glitch/chaos effects using `NEGATIVE_MAP`
- Keyword extraction from questions influences card weighting
- Insight generation combines fortune + question keywords + archetypal guidance

#### Glitch Levels (1-8)
Consult `docs/Fate-Orakel-Masterclass.md` for detailed specifications:
1. Subtle Static - scanlines, RGB fringe
2. Temporal Stutter - freeze/catch-up
3. Parallax Tears - dimensional slices
4. Echo Phantoms - orbiting silhouettes (card-local canvas)
5. Frame Break - escaping shards
6. Cosmic Interference - lens ripple, constellations
7. Portal Bloom - volumetric effects, RGB split
8. Reality Collapse - invert/scramble/dissolve/snap-back (rare finale)

#### Card Suits
- **Main suits**: Herz (♥ red, water), Karo (♦ blue, earth), Kreuz (♣ green, fire), Pik (♠ gray, air)
- **Bonus suits**: Schelm (🎷 amber, chaos), Stern (★ violet, cosmos)
- Each has archetype, element, influence description, and 5 fortunes

#### Visual Effects
- Nebula background with 3 drifting cloud layers
- Shockwave pulse on card reveal
- Foil sheen sweep across cards
- Glassmorphism UI elements
- Breathing/pulsing animations for ambient elements

## Development Workflow

### Making Changes
1. **Understand context**: Read relevant sections of README.md or Masterclass.md first
2. **Preserve existing**: Don't refactor working code unnecessarily
3. **Test locally**: Use `npm start` to view changes in browser
4. **Run tests**: Ensure `npm test` passes before committing
5. **Maintain accessibility**: Check reduced-motion and keyboard navigation

### When Adding Features
- Follow existing patterns in `app.js` for state management
- Add corresponding German UI text
- Include reduced-motion fallbacks for animations
- Add `data-testid` attributes for new interactive elements
- Update tests if new interactions are added

### When Fixing Bugs
- Identify root cause before making changes
- Ensure fix doesn't break related functionality
- Add test coverage if bug wasn't caught by existing tests
- Preserve existing visual effects and animations

### When Modifying Styles
- Check both desktop and mobile responsive breakpoints
- Verify glassmorphism effects work across browsers
- Ensure sufficient contrast on dark gradient background
- Test with reduced-motion preference enabled

## Common Pitfalls to Avoid

1. **Don't break the mystical tone**: Avoid generic/technical language in user-facing text
2. **Don't remove Comic Sans**: Schelm cards intentionally use it for chaotic aesthetic
3. **Don't simplify glitch effects**: The 8-level system is a core feature, not over-engineering
4. **Don't ignore reduced-motion**: Accessibility is a pillar of the design
5. **Don't modify fortune texts casually**: Each is carefully crafted to match suit archetype
6. **Don't change seeded RNG**: Reproducible draws are important for testing
7. **Don't remove "Der Schleier" metaphor**: It's central to the mystical atmosphere
8. **Don't break the card reveal ritual**: The timing and animation build anticipation

## AI-Specific Guidance

When assisting with this codebase:
- **Consult docs/Fate-Orakel-Masterclass.md** for any visual, animation, or glitch-related questions
- **Preserve the cosmic aesthetic**: Suggest changes that enhance rather than simplify the mystical feel
- **Respect the German language**: Don't translate user-facing text to English
- **Understand the ritual**: Card drawing is meant to feel special and collectible, not utilitarian
- **Know the architecture**: React handles UI, fortune logic is mostly pure functions
- **Remember accessibility**: Every motion effect needs a reduced-motion alternative

### When Asked to Add Features
- Align with existing visual language (cosmic gradients, glassmorphism, glowing effects)
- Use German for labels and descriptions
- Add to `SUIT_REGISTRY` if creating new card types
- Follow established animation timing patterns
- Include test coverage with Playwright

### When Asked to Debug
- Check browser console for errors
- Verify all image assets are loading
- Test with reduced-motion enabled/disabled
- Check if glitch effects are interfering
- Validate fortune text isn't broken by twist logic

### When Asked to Refactor
- Prefer minimal, surgical changes
- Don't remove "magical" variable names (e.g., "Der Schleier", "Schicksalsgöttinnen")
- Keep the collectible-grade card rendering intact
- Preserve all 8 glitch levels unless specifically asked to remove
- Maintain the seeded random number generation

---

## Quick Reference: Key Variables and Functions

### Core Constants
- `SUIT_REGISTRY`: Object defining all 6 card suits with colors, archetypes, fortunes
- `NEGATIVE_MAP`: Word replacements for fortune twisting during glitches
- `FALLBACK_FORTUNE`: Default text when fortune generation fails

### Main Functions
- `drawCard()`: Main card drawing logic with suit weighting
- `twistFortuneText()`: Inverts fortune for glitch/chaos effects
- `hashString()` / `mulberry32()`: Seeded random number generation
- `pick()`: Select random item from array
- `preserveCase()`: Maintain capitalization when replacing words

### React Components
- Main app component renders full oracle interface
- Card face rendering with glitch overlays
- Interpretation panel with fortune and metadata
- Journal panel for tracking discovered cards
- Admin panel for testing (gear icon, bottom-left)

### CSS Classes (notable)
- `.card-face`: Main card container
- `.glitch-*`: Various glitch effect overlays
- `.glassmorphism`: Frosted glass UI elements
- `.nebula-*`: Background cloud layers
- Animation keyframes in `styles.css`

---

**Remember**: This is a mystical, premium experience. Every suggestion should enhance the cosmic, collectible feel while maintaining accessibility and performance.
