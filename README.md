# Texxturalia

A bilingual (EN/RO) static e-gallery and artisanal boutique for one-of-a-kind
textile art, sculptural jewelry, and decor objects — hand-built in plain
HTML/CSS/JS, no framework, no build step.

**Live:** [iuliacadar.github.io/texxturalia](https://iuliacadar.github.io/texxturalia/)
**Author:** Iulia-Alexandra Cadar

> *Telluric dialect(ic)s woven betwixt and between.*

## What this project is

A museum-like walk through four exhibition rooms (Textiles, Jewelry, Decor,
Guests), each piece presented as a curated exhibit with its own page — not a
grid-driven webshop. The purchase path is deliberately conversational
(`mailto:` inquiry): for unique pieces, buyers expect human confirmation.

## Tech stack

| Layer      | Choice                                   |
|------------|------------------------------------------|
| Markup     | Semantic HTML5, multi-page               |
| Styling    | Single `style.css`, mobile-first breakpoints |
| Behavior   | Vanilla JS (`script.js`): menu, scroll-reveal |
| Hosting    | GitHub Pages                             |
| i18n       | Static mirroring (`/ro/` folder)         |

## Documentation

| File                    | Contents                                        |
|-------------------------|-------------------------------------------------|
| [`docs/BRAND.md`](docs/BRAND.md)             | Aesthetic vision, palette, symbolism, naming |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | File layout, CSS organization, pathing rules, checklists |
| [`docs/DECISIONS.md`](docs/DECISIONS.md)     | Key decisions and their rationale             |
| [`BACKLOG.md`](BACKLOG.md)                   | Open tasks and future ideas                   |
| [`LEARNING.md`](LEARNING.md)                 | Personal study notes from building this       |
| [`RESOURCES.md`](RESOURCES.md)               | Tools, references, bibliography               |

## Run locally

```bash
git clone https://github.com/iuliacadar/texxturalia.git
cd texxturalia
# open index.html in a browser, or use any static server, e.g.:
python -m http.server 8000
```

## Project structure

```text
texxturalia/
├── index.html            # Home / portal hub
├── textiles.html         # Showcase: textiles
├── jewelry.html          # Showcase: jewelry
├── decor.html            # Showcase: decor objects
├── guests.html           # Showcase: guest designers
├── collection.html       # Full archive of every piece
├── manifesto.html        # Brand philosophy (typographic essay)
├── contact.html          # Contact ("Texxt Us")
├── 404.html              # Custom not-found page ("The snapped thread")
├── style.css             # All styling, organized general → specific
├── script.js             # Menu toggle + scroll reveal
├── ro/                   # Romanian mirror of every page
├── items/                # Individual product pages, by domain
│   └── jewelry/…
└── images/
    ├── branding/         # Favicon & identity assets
    └── products/         # Photography, organized by domain
```
