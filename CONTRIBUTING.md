# Contributing to Fate-Orakel

Thank you for your interest in contributing to Fate-Orakel! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**: `npm install`
3. **Start the development server**: `npm start`
4. **Run tests**: `npm test`

## Development Guidelines

### For Human Contributors

This project follows specific design principles and coding standards to maintain its mystical, cosmic aesthetic. Please review the following before contributing:

- **Read the documentation**: Familiarize yourself with [`README.md`](README.md) and [`docs/Fate-Orakel-Masterclass.md`](docs/Fate-Orakel-Masterclass.md)
- **German language**: All user-facing text must be in German
- **Mystical tone**: Maintain the cosmic, mystical atmosphere
- **Accessibility**: All features must respect `prefers-reduced-motion` and WCAG standards
- **Minimal changes**: Make surgical, focused changes that preserve existing functionality

### For GitHub Copilot Coding Agent

If you're GitHub Copilot working on this repository, please consult the comprehensive instructions at [`.github/copilot-instructions.md`](.github/copilot-instructions.md). This file contains:

- Complete project overview and architecture
- Technology stack details
- Coding conventions and guidelines
- Testing strategies
- Development workflow
- Common pitfalls to avoid
- AI-specific guidance

## Code Style

- **JavaScript/React**: Use ES6+ syntax, functional components with hooks
- **CSS**: Use Tailwind utilities where possible, custom animations in `styles.css`
- **Naming**: 
  - Components: PascalCase
  - Functions: camelCase
  - Constants: SCREAMING_SNAKE_CASE
  - CSS classes: kebab-case

## Testing

All contributions should include appropriate tests:

- Write tests using Playwright (see `tests/fate.spec.ts` for examples)
- Ensure all tests pass: `npm test`
- Add `data-testid` attributes to new interactive elements

## Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the guidelines above
3. **Test thoroughly** - ensure `npm test` passes
4. **Write clear commit messages** describing what and why
5. **Open a pull request** with a detailed description of changes
6. **Respond to feedback** - be prepared to iterate on your changes

## Reporting Issues

When reporting issues, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Browser and OS** information

## Project-Specific Guidelines

### Visual Effects
- All animations must have `prefers-reduced-motion` fallbacks
- Glitch effects are intentional - don't "fix" them unless they're actually broken
- Maintain the 8-level glitch system as specified in the Masterclass document

### Fortune System
- Don't modify fortune texts casually - they're carefully crafted
- Maintain the seeded random number generation for reproducibility
- Preserve the keyword extraction and weighting system

### Card Design
- Each card type has specific colors, fonts, and visual treatments
- Schelm cards intentionally use Comic Sans
- Maintain the foil sheen and microstructure effects

## Questions?

If you have questions about contributing, please:
1. Review the documentation thoroughly
2. Check existing issues and discussions
3. Open a new issue with your question

Thank you for helping make Fate-Orakel even better! ✨
