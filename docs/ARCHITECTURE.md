# Architecture — Texxturalia

> How the site is built: file layout, CSS organization, pathing rules, and
> the conventions every new page must follow.

## Page anatomy

Every exhibit page follows the same skeleton:

```html
<main class="exhibit-container [theme-class]">
  <header class="exhibit-header">
    <span class="eyebrow">Atavic Envelopes</span>   <!-- conceptual label -->
    <h1>Arachne</h1>                                <!-- tutelary figure -->
    <div class="header-divider"></div>
    <p class="header-description">…</p>
  </header>
  <section class="exhibit-grid">
    <div class="exhibit-item reveal">
      <a href="items/[domain]/[piece].html">
        <div class="image-wrapper"> … </div>
        <div class="item-info">
          <span class="item-number">01</span>
          <h3>[Piece name]</h3>
        </div>
      </a>
    </div>
  </section>
</main>
```

Header hierarchy ("the triptych"): eyebrow (Montserrat, uppercase, wide
letter-spacing) → sacred name (`<h1>`, Cormorant Garamond Italic) → 1px oxide
divider (60px). Never use `<br>` for line breaks — use `.header-description`
with a `max-width` so text wraps organically on mobile.

Exhibit item hierarchy: `image-wrapper` (virtual frame) → `item-info`
(metadata zone) → `item-number` (Montserrat 0.65rem, grey, documentary).

## CSS organization (`style.css`, general → specific)

1. **Reset & Root** — box-sizing, background colors, font imports
2. **Shared components** — navbar, logo, nav-links, footer
3. **Home page** — hero, portal grid
4. **Exhibit pages** — the asymmetric "Ikebana" grid for all showcases
5. **Product details** — `/items/` pages; sticky split-screen layout
6. **Theme classes** — per-domain chromatic ambiances (`.textile-theme`,
   `.jewelry-theme`, …) including their `:hover` states — grouped together so
   recoloring one universe is one edit in one place
7. **Media queries** — mobile & split-screen adaptations, always last so they
   override desktop rules

**Golden rule:** any mobile layout change goes in section 7 and only
references classes defined above.

Key techniques:
- Ikebana grid: `grid-template-columns: 1.2fr 0.8fr`; even items pushed down
  via `.exhibit-item:nth-child(even) { margin-top: 200px }` — asymmetry as
  visual rhythm that slows scrolling.
- Split-screen product pages: `position: sticky` image left, text flowing right.
- Breakpoint at `850px`: menus/grids go vertical (`flex-direction: column`),
  `sticky` is cancelled, asymmetry margins removed, logo protected with
  `white-space: nowrap`.
- Separation of concerns: no inline styles, ever. All styling lives in
  `style.css`.
- Link styling: `.navbar a { text-decoration: none; color: inherit }` keeps
  the logo link from turning blue/underlined.

## JavaScript (`script.js`, single file for the whole site)

Linked at the end of `<body>` so HTML/CSS render first and the DOM exists
when the script runs. Three mechanisms:

1. Mobile menu toggle — `document.querySelector('.mobile-menu-toggle')` +
   `classList.toggle('active')`
2. Scroll reveal — `IntersectionObserver` adds a class when elements enter
   the viewport (`.reveal` on headers, items, paragraphs)
3. Sticky-header behavior

Philosophy: near-invisible motion. HTML is the noun, CSS the adjective,
JS the verb.

## Bilingual strategy (static mirroring)

- Root = English only; `/ro/` contains faithful structural replicas with
  translated text.
- Both languages share the same `style.css` → visual unity.
- **Mirror integrity is critical**: identical tag structure, only "matter"
  (text) changes. One broken `<div>` breaks the grid into chaos.
- Language switcher: `.lang-select` class in the navbar, with a fine
  `border-left` "silver needle" divider.

### Relative-path rules (the #1 source of bugs)

| Page location | To CSS | To images | To home |
|---|---|---|---|
| Root (`index.html`) | `style.css` | `images/…` | `index.html` |
| `/ro/` | `../style.css` | `../images/…` | `index.html` |
| `/items/jewelry/` | `../../style.css` | `../../images/…` | `../../index.html` |
| `/ro/items/jewelry/` | `../../../style.css` | `../../../images/…` | `../../index.html` |

Always verify the number of `../` hops matches folder depth when adding pages.

## Head requirements (every new page)

- `<link rel="stylesheet" href="[path]/style.css">`
- Google Fonts import (Cormorant Garamond + Montserrat)
- `<link rel="icon" href="[path]/images/branding/favicon.ico">`
- Viewport meta + unique meta description
- Shared `<nav>` component copied identically

## SEO conventions

- One `<h1>` per page; `<h2>` for section subtitles.
- Image filenames are descriptive before upload
  (`sculptura-argint-sideral-01.jpg`), each with a conceptual+technical
  `alt` attribute.
- Title tag ≤ 60 chars: `[Product] | [Collection] | Texxturalia`.
- Meta description ≤ 155 chars, active mystical voice; unique per page,
  including each `/items/` piece (avoids duplicate content, indexes every
  work as a unique entity). Invisible in the UI by design.
- Custom `404.html` at root ("The snapped thread"), bilingual with Romanian
  echo at reduced opacity.

## Collection management

- Pieces numbered `01, 02…` — limited-series/unique character.
- Grid stays flat (no subcategories) until ~20 objects per domain, to protect
  the immersive experience.
- Each product page is hand-duplicated from the template — intentional for
  now; see [BACKLOG.md](../BACKLOG.md) for the data-driven future.
- Indentation standard: 2 spaces everywhere.
