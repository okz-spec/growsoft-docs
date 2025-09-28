# GrowSoft API Documentation

This repository contains the API documentation for the GrowSoft project.

## Repository structure

- `pages/` — source documentation pages (organized into `information/` and `structures/`).
- `public/` — static assets (icons, images, etc.).
- `package.json` — scripts for local development and build (VitePress is used).

## Quick start

Requirements:
- Node.js (recommended v16+)

Clone the repository and install dependencies:

```powershell
git clone <repo-url>
cd growsoft-docs
npm install
```

Run the site in development mode:

```powershell
npm run docs:dev
```

Build a static site:

```powershell
npm run docs:build
npm run docs:preview
```

## Writing style and formatting

- Use Markdown for all pages.
- Place documentation files under `pages/`. Add new pages there and group them logically.
- Keep content concise and clear; use examples and code blocks where appropriate.

Optional: add linters/formatters (e.g., markdownlint, Prettier) to keep documentation consistent.

## Contributing

Short summary:
- Fork the repository.
- Create a branch with prefix `docs/` or `fix/` (for example, `docs/add-item-structure`).
- Make changes and ensure the site builds locally.
- Open a Pull Request describing your changes.

## Code of Conduct

Be respectful and constructive.

## License

This repository is licensed under the [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
See the `LICENSE` file for details.
