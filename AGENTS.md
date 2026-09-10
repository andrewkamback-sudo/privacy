# Repository Guidelines

## Project Structure & Module Organization

This repository is Cinderway Interactive’s static marketing and legal website, built with Jekyll for GitHub Pages.

- Root HTML files contain the studio homepage, privacy policy, terms, and account-deletion instructions.
- `flowstate-logic/` contains the product landing page, license, articles, and Markdown release notes in `patch-notes/`.
- `flowstate-reasoning/` contains that product’s privacy and terms pages.
- `_includes/` holds shared headers and footers; `_layouts/default.html` renders Markdown content.
- `css/`, `js/`, and `assets/` contain styles, browser scripts, fonts, badges, and screenshots. `_site/` is generated output.
- `_config.yml`, `CNAME`, `robots.txt`, and `sitemap.xml` control site configuration, domain, and discovery.

## Build, Test, and Development Commands

Use Ruby 3.3.6 from `.ruby-version` with Bundler. `bin/site` also supports a running Docker daemon when Bundler is unavailable. npm scripts wrap this helper:

- `npm run site:install` — install Ruby dependencies locally in `.bundle/`.
- `npm run site:build` — generate the website in `_site/`.
- `npm run site:serve` — serve at `http://localhost:4000` with live reload.
- `npm run site:doctor` — check Jekyll configuration for common problems.

The equivalent direct commands are `bin/site install`, `bin/site build`, and `bin/site doctor`.

## Coding Style & Naming Conventions

Use two-space indentation and follow surrounding HTML, CSS, and JavaScript conventions. Existing scripts use strict-mode IIFEs, single quotes, semicolons, and camelCase functions. Use kebab-case CSS classes and descriptive filenames. Reuse `css/tokens.css` variables and shared includes. Keep scripts and styles in external files to preserve CSP readiness. Escape Liquid values used in HTML attributes with `xml_escape`.

Keep Jekyll front matter on processed pages. Name release notes `v1.2.3.md` and follow existing `layout` and `title` metadata.

## Testing Guidelines

No automated test framework, coverage threshold, formatter, or linter is configured. Run the build and doctor commands after site changes. Preview affected pages on mobile and desktop; check navigation, keyboard interaction, galleries, links, and browser-console errors. Verify generated URLs and update `sitemap.xml` when adding public pages.

## Commit & Pull Request Guidelines

History uses short, imperative subjects such as “Add SEO metadata and sitemap”; follow that style. Keep commits focused. PRs should describe the affected pages, explain the change, record validation, link relevant issues, and include screenshots for visual changes.

## Security & Content Accuracy

Never commit credentials or private keys, including `*.p8`. Keep generated output and local dependencies untracked. Confirm product behavior before changing legal claims, pricing, or release descriptions; preserve existing public URLs.
