# Learning Texxturalia — A Code Walkthrough

**For beginner frontend students who want to understand how this project is built, file by file, line by line.**

---

## How to Use This Document

1. Read each section in order — the project is introduced from the outside in (HTML structure → CSS styling → JavaScript behavior).
2. Open the referenced file in your editor alongside this document.
3. For each block of code, read the explanation, then look at the code. Try changing a value and reloading the page to see what happens.
4. The CSS section refers to `style.css` — read that file's group headers too; they're written as teaching notes.

---

## Part 1: The HTML Files

### What is HTML?

HTML (HyperText Markup Language) is the skeleton of every web page. It defines **what elements exist** on the page and **how they're nested**. CSS makes them look good. JavaScript makes them behave. HTML alone is just structure — like the frame of a house before plaster and paint.

Every HTML file in this project follows the same basic structure:

```html
<!doctype html>        <!-- Tells the browser: "this is HTML5" -->
<html lang="en">       <!-- Root element. lang="en" tells screen readers the page is in English -->
  <head>               <!-- Metadata: things the browser needs but users don't see -->
    ... links, titles, meta tags ...
  </head>
  <body>               <!-- Everything the user sees goes here -->
    ... navigation, content, footer ...
    <script src="script.js"></script>  <!-- Loads JavaScript at the very end -->
  </body>
</html>
```

---

### index.html — The Home Page (Main Entry Point)

**File:** `index.html` (109 lines)  
**Role:** The front door. Introduces the brand and provides portal links to each workshop.

#### Lines 1-3: File-level comment

```html
<!-- index.html — The home page (the first page visitors see).
     Introduces the Texxturalia brand and provides portal links
     (doors) to each workshop: Textiles, Jewelry, Decor.
     Think of this as the front door of the website — every other
     page is reached from here or from the navigation menu at the top. -->
```

This is the first thing you read when opening the file. It tells you what this file does in plain language: this is the home page, the first page anyone sees when they visit the site, and it links to every other section. You don't need to know any programming language to understand it.

#### Lines 4-26: The `<head>` section

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Texxturalia Atelier | Atavic Envelopes & Sacral Scripts</title>
    <meta name="description" content="..." />
    <link rel="icon" type="image/x-icon" href="images/branding/favicon.ico" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@100;200;300;400&display=swap" />
  </head>
```

**Line by line:**

- `<!doctype html>` — Always the first line. Tells the browser to render in standards mode (not quirks mode). Without this, older browsers would use a broken rendering engine.

- `<html lang="en">` — The root element. Everything in the file lives inside this. `lang="en"` is important for accessibility — screen readers use it to choose the correct pronunciation. The Romanian mirror (`ro/index.html`) uses `lang="ro"`. (See also the product detail page walkthrough's explanation of the `../../ro/...` path prefix — that section explains how Romanian mirrors live in parallel directory trees and how their relative paths differ from the English pages.)

- `<meta charset="UTF-8" />` — Character encoding. UTF-8 supports every written language (English, Romanian, special characters like em-dashes). Without this, accented characters could appear as garbage.

- `<meta name="viewport" ... />` — Tells mobile browsers: "don't zoom out to show the desktop width; show the page at the actual screen width." This is what makes the page responsive on phones. Without it, mobile phones would render the page as if it were a desktop monitor and shrink everything to fit.

- `<title>` — The text that appears in the browser tab. Also what search engines show as the clickable link in results.

- `<meta name="description" />` — A short summary that search engines may display under the title in search results. Not visible on the page itself.

- `<link rel="icon" ... />` — The favicon: the tiny icon in the browser tab. Points to `images/branding/favicon.ico`.

- `<link rel="stylesheet" href="style.css" />` — **The most important line in the head.** This loads the CSS file. Without it, the page would render with browser defaults (black text on white background, blue links, big fonts). Every visual choice in the project comes from this file.

- **Google Fonts setup (3 lines):**
  1. `preconnect` to `fonts.googleapis.com` — tells the browser to start connecting to Google's font server early, before the actual font request. This saves ~100-200ms.
  2. `preconnect` to `fonts.gstatic.com` with `crossorigin` — the actual font files live here. `crossorigin` is needed because the font files are served from a different domain.
  3. The `stylesheet` link — requests Montserrat (weights 100-400) and Cormorant Garamond (weight 300, both normal and italic). The `display=swap` parameter means text stays visible in a fallback font until the custom font loads, preventing the "invisible text" flash.

#### Lines 28-50: The Navigation (Navbar)

```html
<body>
  <nav class="navbar">
    <a href="index.html">
      <div class="logo">T E X X T U R A L I A</div>
    </a>
    <button class="mobile-menu-toggle" aria-label="Open Menu">
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul class="nav-links">
      <li><a href="textiles.html">Atavic Envelopes</a></li>
      <li><a href="jewelry.html">Sacral Scripts</a></li>
      <li><a href="decor.html">Telluric Dialect(ic)s</a></li>
      <li><a href="guests.html">InterTexxturalia</a></li>
      <li><a href="manifesto.html">Gnosis</a></li>
      <li><a href="collection.html">The Collection</a></li>
      <li class="lang-select"><a href="ro/index.html">RO</a></li>
    </ul>
  </nav>
```

**What's happening:**

- `<nav>` — The HTML5 semantic element for navigation. Screen readers announce "navigation" when they encounter this. Using `<nav>` (instead of a plain `<div>`) is an accessibility best practice.

- The logo is a link (`<a>`) wrapping a `<div>`. Clicking "T E X T U R A L I A" takes you home. The logo text uses letter-spacing (in CSS) to create the spaced-out brand signature.

  - **`display: contents` on the `<a>` (see CSS GROUP 1):** The logo `<div>` sits inside the `<a>` link. Normally, the `<a>` would create its own box, which would interfere with the navbar's flex layout. `display: contents` makes the `<a>` disappear as a box — its children (the logo `<div>`) take its place directly in the flex layout. This is why the logo aligns perfectly with the other navbar items. Without it, the `<a>` box would break the flex alignment.

- `<button class="mobile-menu-toggle">` — The hamburger button. It's hidden on desktop (`display: none` in CSS) and appears only on mobile. It contains two `<span>` bars that CSS styles as the hamburger icon lines. `aria-label="Open Menu"` is critical for accessibility — screen readers announce "Open Menu button" instead of just "button."

- `<ul class="nav-links">` — An unordered list of links. Using `<ul>` for menu items is semantically correct (a menu IS a list). Each `<li>` contains an `<a>` link.

- The links point to the workshop pages: textiles, jewelry, decor, guests, manifesto, and the collection. The last item (`lang-select`) is the language switcher — it links to the Romanian mirror (`ro/index.html`).

**Key concept — semantic HTML:** Notice that this structure uses the right HTML element for each purpose: `<nav>` for navigation, `<ul>` for a list of links, `<button>` for a clickable control, `<a>` for navigation links. This isn't just cleanliness — it directly affects accessibility and SEO.

#### Lines 52-96: The Hero Section

```html
<header class="hero">
  <div class="hero-content">
    <h1>Interrogating the Chasm</h1>
    <p>
      (De(Con))Struction of the thread. Betwixt and between the atavic
      raiment, the telluric plane, and the sacrality of the sidereal wire.
    </p>
    <div class="portal-grid">
      <div class="portal-item reveal" id="portal-body">
        <a href="textiles.html" class="btn-primary">
          <span class="anchor-label">Arachne</span>
          <span class="concept-label">Atavic Envelopes</span>
        </a>
      </div>
      <!-- ... three more portal items ... -->
    </div>
  </div>
</header>
```

**What's happening:**

- `<header class="hero">` — The hero is the top section of the page, the first thing users see. Using `<header>` is semantic (it IS a header), and the class `hero` connects it to the CSS rules in GROUP 2 of `style.css`.

- `<h1>Interrogating the Chasm</h1>` — The main heading. There should be exactly ONE `<h1>` per page. Search engines weigh `<h1>` heavily for understanding page content. The CSS makes this render in Cormorant Garamond Italic at 2.5rem (40px) — the most visually prominent text on the page.

- `<p>` — The manifesto tagline. The CSS switches this to Cormorant Garamond Italic as well, at 1.1rem, centered, with a max-width of 650px for readable line length.

- `<div class="portal-grid">` — The 4-portal grid. Each portal is a "door" to a workshop. The grid is created by CSS Grid (`display: grid` in style.css GROUP 3) with `auto-fit` and `minmax(280px, 1fr)` — meaning it creates as many columns as fit, each at least 280px wide.

- Each `.portal-item` has:
  - `class="reveal"` — This CSS class makes the item invisible (opacity: 0, pushed down 30px) until JavaScript's IntersectionObserver detects it entering the viewport, then adds `.active` to fade it in. This is the scroll-reveal animation system.
  - `id="portal-body"` (and similar) — IDs are unique identifiers. JavaScript or CSS can target a specific element by ID. Here, they're available for anchoring (e.g., `index.html#portal-body` would scroll to that portal).
  - An `<a>` link inside with `class="btn-primary"` — fills the entire card area (height: 100%, display: flex, centered content). Clicking anywhere on the card navigates to the workshop page.
  - Two `<span>` elements: `anchor-label` (the universe name: Arachne, Corvus, Leto, Actaeon) and `concept-label` (the workshop name). Both are styled by CSS — the anchor label is tiny uppercase gray text, the concept label is the larger display text.

**Key concept — the reveal system:** Every element you want to animate on scroll has `class="reveal"`. The CSS sets it to invisible and pushed down. JavaScript watches for it to enter the viewport and adds `class="active"`, which overrides the invisible state. This is a clean separation: CSS defines the states, JavaScript triggers the transition. You can read more in the script.js section.

#### Lines 98-106: The Footer

```html
<footer class="site-footer">
  <div class="footer-content">
    <p>&copy; 2024 TEXXTURALIA. All rights reserved.</p>
    <div class="footer-links">
      <a href="contact.html">Texxt Us</a>
      <a href="https://www.instagram.com/t_e_x_x_t_u_r_a_l_i_a/" target="_blank" rel="noopener">Instagram</a>
    </div>
  </div>
</footer>
```

- `<footer>` — Semantic footer element. Screen readers announce "footer." Contains the copyright and social links.
- `target="_blank"` — Opens Instagram in a new tab.
- `rel="noopener"` — A security best practice when using `target="_blank"`. Without it, the newly opened page can access the original page via `window.opener`, which is a vulnerability. `noopener` breaks that link.

  This pattern — `target="_blank" rel="noopener"` — is used consistently on every external link in this project that opens in a new tab. It's not optional: any `target="_blank"` without `rel="noopener"` exposes the original page to the opened page's JavaScript. The footer Instagram link (line 105 in index.html), the contact page Instagram link, and the product page Instagram links all follow this same pattern.

#### Line 107: The Script Load

```html
<script src="script.js"></script>
```

This loads the JavaScript file. It's placed at the END of the body (just before `</body>`) for a specific reason: **the browser parses HTML top-to-bottom**. If the script were in the `<head>`, the browser would stop rendering the page to download and execute the script, making the page feel slower. By placing it at the end, the browser renders all visible content first, then loads the script. Since this script only enhances interactions (menu toggle, scroll reveal, filtering), it doesn't need to block rendering.

---

### The Portal Pages: textiles.html, jewelry.html, decor.html, guests.html

**Files:** `textiles.html` (125 lines), `jewelry.html` (131 lines), `decor.html` (128 lines), `guests.html` (140 lines)  
**Role:** Each is a "vitrine" (showcase) page for one workshop universe.

These four files are nearly identical in structure — they share the same template. The differences are: the theme class, the content (title, description, piece names), and the links. Let's walk through `jewelry.html` in detail since it's the most complete.

#### The Head (lines 1-20)

Same structure as index.html: doctype, html lang, meta tags, title, favicon, style.css link, Google Fonts. The only differences are the `<title>` and `<meta name="description">` content, which are specific to the jewelry workshop.

**Key concept — page-specific metadata:** Each page has its own title and description. This matters for SEO — a search for "Texxturalia jewelry" should show the jewelry page, not the home page. The `<title>` and `<meta description>` tell search engines what each page is about.

#### The Navbar (lines 22-44)

Identical structure to index.html's navbar, but the RO language link points to the Romanian mirror of THIS page (`ro/jewelry.html` instead of `ro/index.html`).

#### The Theme Class (line 51)

```html
<main class="exhibit-container jewelry-theme">
```

This is one of the most important lines in the file. The `<main>` element has TWO classes:
- `exhibit-container` — provides the layout (padding, max-width, centering — defined in style.css GROUP 5)
- `jewelry-theme` — provides the color atmosphere (image wrapper backgrounds and hover states — defined in style.css GROUP 8)

**Key concept — combining classes for layout + theme:** The layout class (`exhibit-container`) is always the same. The theme class changes per page: `textile-theme` for textiles, `jewelry-theme` for jewelry, `decor-theme` for decor, `guests-theme` for guests. This means you can change the entire color atmosphere of a page by changing ONE class name. The actual color rules live in CSS GROUP 8, where each theme defines background-color and hover states for `.image-wrapper`.

This is superior to scattering color rules throughout the file because:
1. All theme overrides are in one place.
2. Adding a new universe means adding two rules in GROUP 8 — nothing else changes.
3. The HTML is clean: just a class name, no inline styles.

#### The Header Block (lines 52-59)

```html
<header class="exhibit-header">
  <span class="eyebrow">Sacral Scripts</span>
  <h1 class="reveal">Corvus</h1>
  <div class="header-divider reveal"></div>
  <p class="header-description reveal">
    The raven's script. Sacred copper traces in the primordial chasm.
  </p>
</header>
```

**The triptych pattern:** Every vitrine page uses the same three-part header:
1. **Eyebrow** (`<span class="eyebrow">`) — A tiny uppercase label above the title. "Sacral Scripts" tells you which universe you're in. CSS makes it 0.7rem, letter-spaced, gray (#999).
2. **Title** (`<h1 class="reveal">`) — The universe name. "Corvus" in Cormorant Garamond Italic at 4rem (64px). The `.reveal` class means it fades in on scroll.
3. **Divider** (`<div class="header-divider reveal">`) — An 80px vertical line (1px tall) that separates the title from the description. `margin: 30px auto` centers it. This is a design detail that references the handmade aesthetic — like a stitch between two concepts.
4. **Description** (`<p class="header-description reveal">`) — A one-sentence description of the universe, in 0.85rem Montserrat, centered, max-width 450px.

Every element in the header has `class="reveal"` — they all fade in when scrolled into view.

#### The Exhibit Grid (lines 61-117)

```html
<section class="exhibit-grid">
  <div class="exhibit-item reveal">
    <a href="items/jewelry/metal-script-01.html">
      <div class="image-wrapper">
        <div class="image-placeholder medium"></div>
      </div>
      <div class="item-info">
        <span class="item-number">01</span>
        <h2>Wire Fragment</h2>
      </div>
    </a>
  </div>
  <!-- ... three more items ... -->
</section>
```

**Grid structure — and the aesthetic behind the numbers:**

- `<section class="exhibit-grid">` — The grid container. CSS makes it `display: grid` with `grid-template-columns: 1.2fr 0.8fr` — a two-column asymmetric layout. The first column is 1.2fr (60% of available space), the second is 0.8fr (40%). This ratio is not an arbitrary choice — it mirrors ikebana, the Japanese art of arrangement, where asymmetry and the tension between filled and empty space are the whole point. The wider column carries the image; the narrower column gives it room to breathe. Two columns, but not equal, because equality would read as a spreadsheet. The project is not a spreadsheet.
- Four `.exhibit-item` divs, each containing:
  - An `<a>` link to the product detail page (or `#` for placeholder items not yet built).
  - An `.image-wrapper` div — the "mat" around the image. Has a background color and padding. Contains either an actual `<img>` or a `.image-placeholder` div.
  - An `.item-info` div — the label below the image: item number + title.

**The stagger pattern — the gravitational argument:** Items 2 and 4 get a `margin-top` offset (defined in CSS):
- `.exhibit-grid .exhibit-item:nth-child(2)` → `margin-top: 250px`
- `.exhibit-grid .exhibit-item:nth-child(4)` → `margin-top: 120px`
- `.exhibit-grid .exhibit-item:nth-child(even)` → `margin-top: 200px` (general rule for even items, overridden by the more specific rules above)

This is the project's answer to the handmade question. A computer grid with equal gaps between every item looks machine-made — which it is. The stagger breaks that rhythm: the second piece drops deeper than the fourth, the fourth drops deeper than the odd ones. It reads as if the pieces settled under their own weight, each at a different rate. Not random — deliberate — but the kind of deliberate that mimics gravity. The even-item rule (`margin-top: 200px`) is the "default fall" for even-positioned items; the specific rules for items 2 and 4 override it because those two carry more weight in the composition. Same specificity, later rule wins — the cascade doing aesthetic work.

This creates a staggered "falling" rhythm — the second piece drops more than the fourth, like objects settling at different rates.

**The intentionally blank slots — `href="#"` is not an error:**

You may notice that some exhibit items (and some collection items) link to `#` instead of a real product page. These are placeholder slots — intentional empty links where a product detail page will eventually live. They are not broken links, not forgotten work, not a bug. The project is built in layers: structure first (HTML, CSS, the grid, the layout), content second (the actual product pages, the photography). A `#` link preserves the grid's rhythm and the page's visual structure while the content underneath is being created. When the product page is built, the `href="#"` is replaced with the real path (e.g., `href="items/jewelry/metal-script-01.html"`). Until then, the card is a signpost pointing to something that exists as an intention but not yet as a file. This is a common pattern in multi-stage web projects — build the skeleton, populate it gradually, never let the skeleton collapse while waiting for the flesh.

**Image placeholders:** Since the real photos aren't shot yet, each image slot uses a `.image-placeholder` div with a height class (`.medium`, `.short`, `.h-450`, `.h-520`). These are defined in CSS GROUP 5 and create colored rectangles of specific heights. They maintain the grid's rhythm even without real images.

**Key concept — `data-*` attributes aren't used here but ARE used in collection.html:** The exhibit pages use direct `<a>` links to product pages. The collection page uses `data-category` attributes for JavaScript filtering. Both are valid patterns — direct links for simple navigation, data attributes for JavaScript-driven interactivity.

**A note on HTML semantics — why `<div>` and not `<article>` or `<section>`?**

You might notice that the items in the portal grid (index.html) and the exhibit grid (textiles.html, jewelry.html, decor.html, guests.html) use `<div class="portal-item">` and `<div class="exhibit-item">` — not `<article>` or `<section>`. This is a deliberate choice, and it's worth understanding why.

**What the HTML5 elements mean:**

- `<article>` — a self-contained composition that could be published on its own, independently of the page it's on. Think of a blog post, a news story, or a product card that contains all its own information. The test is: if you removed this element from the page, would it still make sense as a standalone piece?

- `<section>` — a thematic grouping of content, usually with a heading. It divides a page into logical chunks.

- `<div>` — a generic container with no semantic meaning. It's a hook for CSS and JavaScript. Use it when no other element better describes what the content is.

**Why the portal and exhibit items use `<div>`:**

The items in these grids are **teaser cards** — they point to full compositions that live on other pages. An exhibit item on the textiles page is a link (image + title + item number) that takes you to a product detail page. The card itself is not the complete composition; it's a navigation unit. Using `<article>` would imply the card IS the complete, self-contained work — which it isn't.

The actual self-contained compositions in this project DO use `<article>` and `<section>`:

- `manifesto.html` uses `<article class="manifesto-content">` for the essay — the essay is a self-contained piece of writing.
- The product detail pages (metal-script-01.html, metal-script-02.html, orologiul-apelor.html) use `<main>` and `<section>` for the split-screen layout — these are the real compositions.

So the project's semantic approach is: **`<div>` for navigation/teaser cards, `<article>`/`<section>` for actual content compositions.**

**An alternative view worth knowing:**

A strong counter-argument exists. Each exhibit card IS a self-contained unit — it has an image, a title, an item number, and a link. In modern web development, a product card in a gallery is often considered an `<article>` because it's a discrete, independently meaningful unit. The collection page (which uses `data-category` attributes for JavaScript filtering) makes this argument even stronger — those items are interactive, self-contained catalogue entries.

The project could just as well use `<article>` for these cards and be semantically correct either way. If you're learning HTML, the important thing is to understand what each element means and make a conscious choice — both positions are defensible. The `<div>` choice here emphasizes the cards' role as navigation; the `<article>` choice would emphasize their role as discrete content units.

---

### collection.html — The Archive

**File:** `collection.html` (101 lines)  
**Role:** A single page showing all pieces across all universes, with filter buttons.

#### The Filter System (lines 52-64)

```html
<div class="collection-filters reveal">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="textiles">Atavic Envelopes</button>
  <button class="filter-btn" data-filter="jewelry">Sacral Scripts</button>
  <button class="filter-btn" data-filter="decor">Telluric Dialect(ic)s</button>
  <button class="filter-btn" data-filter="guests">InterTexxturalia</button>
</div>
```

**How filtering works — HTML side:**
- Each button has `data-filter="..."` — a custom data attribute. JavaScript reads this attribute to know which category to show.
- The "All" button has `class="active"` — it's the default selected filter.
- Clicking a button triggers JavaScript that:
  1. Removes `.active` from all buttons.
  2. Adds `.active` to the clicked button.
  3. Reads `data-filter` from the clicked button.
  4. Shows/hides items based on whether their `data-category` matches.

**How filtering works — CSS side:**
- `.filter-btn` styles all buttons: transparent background, border, small uppercase text.
- `.filter-btn:hover` — dark background, light text.
- `.filter-btn.active` — same as hover but persistent (the button stays highlighted to show which filter is active).

#### The Collection Grid (lines 66-83)

```html
<section class="collection-grid" id="collection-grid">
  <div class="exhibit-item reveal" data-category="jewelry">
    <a href="items/jewelry/orologiul-apelor.html">
      <div class="image-wrapper">
        <img src="images/products/jewelry/orologiul-01.jpg"
          alt="The Clock of Waters — turquoise cabochons in copper wire nets" />
      </div>
      <div class="item-info">
        <span class="item-number">01</span>
        <h2>The Clock of Waters</h2>
      </div>
    </a>
  </div>
</section>
```

**Key differences from the exhibit pages:**
- The grid uses `id="collection-grid"` — JavaScript needs this ID to find the grid and filter its children.
- Each item has `data-category="..."` — JavaScript reads this to decide whether to show/hide the item.
- Images are real `<img>` tags (not placeholder divs) — the one product photo that exists is in the collection.
- The grid uses `auto-fill` with `minmax(300px, 1fr)` (CSS GROUP 6) — creates as many columns as fit at 300px minimum, unlike the exhibit grid's fixed 2-column asymmetry.

**Key concept — `data-*` attributes:** `data-category` and `data-filter` are custom HTML attributes. They don't affect rendering at all — they're purely for JavaScript to read. The `dataset` property in JavaScript gives you access: `element.dataset.category` returns `"jewelry"`. This is the standard way to pass data from HTML to JavaScript without using inline event handlers or hidden inputs.

---

### Product Detail Pages — The Split-Screen Layout

**Files:** `items/jewelry/metal-script-01.html` (119 lines), `items/jewelry/metal-script-02.html` (116 lines), `items/jewelry/orologiul-apelor.html` (170 lines)

**Role:** These are the individual product pages — the deepest level of the site. Each page presents a single piece in detail: a large visual (the piece itself) on the left, and the story + specifications on the right. This is the split-screen layout — the visitor's eye moves between image and text as they scroll.

All three files share the same basic structure. Two of them (`metal-script-01.html`, `metal-script-02.html`) are simpler — they use an image placeholder because the photography isn't ready yet. The third (`orologiul-apelor.html`) is the most complete and complex: it has a full gallery with 16 photos, a drag-to-scroll thumbnail strip, and the real product photography.

Let's walk through each one.

#### metal-script-01.html — The Simplest Product Page (119 lines)

This is the template that the other two build on. Open it side-by-side with this explanation.

##### Lines 1-26: The `<head>`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Metal Script 01 | The Texxturalia Atelier</title>
    <meta
      name="description"
      content="Detailed view of Metal Script #01. A unique silver wire sculpture from the Texxturalia Atelier. Hand-crafted and adaptable."
    />
    <link
      rel="icon"
      type="image/x-icon"
      href="../../images/branding/favicon.ico"
    />
    <link rel="stylesheet" href="../../style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@100;200;300;400&display=swap"
    />
  </head>
```

Same pattern as every other page: doctype, language, meta tags, title, description, favicon, style.css, Google Fonts. The one thing to notice is the **relative path** for the stylesheet: `../../style.css`. The product pages live two levels deep (`items/jewelry/`), so the path goes up two directories to reach the root. Compare with `index.html` which uses `style.css` (no prefix needed, since it's in the root). This is why the navbar links in these files also use `../../` — they need to climb back out of the `items/jewelry/` folder to reach the rest of the site.

##### Lines 28-50: The Navbar

```html
<nav class="navbar">
  <a href="../../index.html">
    <div class="logo">T E X X T U R A L I A</div>
  </a>
  <button class="mobile-menu-toggle" aria-label="Open Menu">
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
  <ul class="nav-links">
    <li><a href="../../textiles.html">Atavic Envelopes</a></li>
    <li><a href="../../jewelry.html">Sacral Scripts</a></li>
    <li><a href="../../decor.html">Telluric Dialect(ic)s</a></li>
    <li><a href="../../guests.html">InterTexxturalia</a></li>
    <li><a href="../../manifesto.html">Gnosis</a></li>
    <li><a href="../../collection.html">The Collection</a></li>
    <li class="lang-select">
      <a href="../../ro/items/jewelry/metal-script-01.html">RO</a>
    </li>
  </ul>
</nav>
```

Same structure as every other page. The nav links all use `../../` paths to reach the workshop pages, collection, and manifesto. The language switcher links to the Romanian mirror: `../../ro/items/jewelry/metal-script-01.html`.

##### Lines 52-60: The Left Column — Product Visual

```html
<main class="product-detail-container">
  <!-- Left Column: Sticky Visual -->
  <section class="product-visual reveal">
    <div class="main-image-wrapper">
      <!-- Placeholder for my high-res photography -->
      <div class="image-placeholder tall"></div>
    </div>
  </section>
```

This is the left half of the split-screen. Let's break it down:

- **`<main class="product-detail-container">`** — The root container for the entire product page. CSS (GROUP 9 in `style.css`) turns this into a two-column grid: the visual on the left, the info on the right. On mobile, the grid collapses to a single column (visual first, then text below).

- **`<section class="product-visual reveal">`** — The visual column. Two classes:
  - `product-visual` — tells CSS "this is the image column." GROUP 9 makes this column `position: sticky` (more on that below).
  - `reveal` — the scroll-reveal system. This section fades in when it enters the viewport, just like elements on every other page.

- **`<div class="main-image-wrapper">`** — The "mat" around the image. Like `.image-wrapper` on the exhibit pages, this provides padding and a background color. It's the frame that holds the image.

- **`<div class="image-placeholder tall">`** — Since the real photography isn't shot yet, this colored rectangle stands in. The `.tall` class gives it a specific height (defined in CSS GROUP 5) so the layout has the right proportions even without a real image. When the photo session happens, this `<div>` will be replaced with an `<img>` tag.

**Key concept — why a placeholder?** The project is built in order: structure first, content later. The HTML and CSS are complete — the layout works, the grid is correct, the sticky behavior is in place. The only thing missing is the actual photo. The placeholder ensures the page looks right during development and testing, and it's a single-line change to swap in the real `<img>` later.

##### Lines 62-104: The Right Column — Product Info

```html
<section class="product-info">
  <span class="product-id reveal">Object 01 — Jewelry</span>
  <h1 class="reveal">Metal Script #01</h1>

  <div class="philosophy-text reveal">
    <p>
      An exploration of the continuous line. Raw silver wire becomes a
      script in space, capturing an instinctive gesture that will never be
      repeated.
    </p>
    <p>
      This piece interrogates the fragility of metal when subjected to the
      organic movement of the hand.
    </p>
  </div>

  <div class="product-specs reveal">
    <div class="spec-row">
      <span>Material:</span> 925 Silver, Natural Silk Thread
    </div>
    <div class="spec-row">
      <span>Technique:</span> Cold forming, Spatial knots
    </div>
    <div class="spec-row">
      <span>Dimensions:</span> Adaptable (Custom size)
    </div>
    <div class="spec-row">
      <span>Availability:</span> Unique Piece / Exhibition
    </div>
  </div>

  <a
    href="mailto:atelier@texxturalia.com?subject=Metal%20Script%2001"
    class="btn-inquiry reveal"
  >
    Request Purchase / Customization
  </a>
</section>
```

- **`<section class="product-info">`** — The right column. This is where the visitor reads about the piece. Unlike the visual column, this one does NOT have `position: sticky` — it scrolls normally. As the user scrolls down through the text, the image on the left stays pinned to the viewport.

- **`<span class="product-id reveal">`** — A small label: "Object 01 — Jewelry." It's the breadcrumb-like identifier. CSS styles it as small, uppercase, gray text.

- **`<h1 class="reveal">`** — The piece name. This is the only `<h1>` on the page. Search engines use it to understand what the page is about.

- **`<div class="philosophy-text reveal">`** — The story of the piece. Two paragraphs of prose. CSS styles these in Cormorant Garamond Italic — the serif font that gives the project its literary voice. The `reveal` class makes the text block fade in as a unit when scrolled into view.

- **`<div class="product-specs reveal">`** — The specifications grid. Each `.spec-row` is a line like "Material: 925 Silver." CSS turns these into a clean definition-list style (label in a muted color, value next to it). All four rows are wrapped in a container with `reveal` — they appear together on scroll.

- **`<a class="btn-inquiry reveal">`** — The call-to-action button. It's a `mailto:` link that opens the visitor's email client with a pre-filled subject line. The `reveal` class makes it fade in last — the visitor reads the story and specs first, then sees the inquiry option.

##### Lines 107-117: Footer + Script

```html
<footer class="site-footer">
  <div class="footer-content">
    <p>&copy; 2024 TEXXTURALIA. All rights reserved.</p>
    <div class="footer-links">
      <a href="../../contact.html">Texxt Us</a>
      <a href="https://www.instagram.com/j_e_w_e_l_l_i_a/" target="_blank" rel="noopener">Instagram</a>
    </div>
  </div>
</footer>
<script src="../../script.js"></script>
```

Same pattern as every other page: copyright, social links, and `<script src="../../script.js"></script>` at the end of the body. The Instagram link points to the jewelry account (`j_e_w_e_l_l_i_a`).

#### metal-script-02.html — Same Structure, Different Piece (116 lines)

This file is nearly identical to `metal-script-01.html`. The only differences:

- `<title>` and `<meta name="description">` — specific to Metal Script #02
- The product name: "Metal Script #02" instead of "#01"
- The `mailto:` link subject: `Metal%20Script%2002`
- The Romanian mirror link points to `metal-script-02.html`

The structure is exactly the same: navbar → sticky visual (placeholder) → product info (id, title, philosophy, specs, inquiry button) → footer → script. This is intentional — the product pages are a template. When a new piece is added, you copy one of these files, change the text and links, and the layout is already correct.

#### orologiul-apelor.html — The Complete Product Page with Gallery (170 lines)

This is the most complex product page because it has a real gallery: 16 photos of "The Clock of Waters" that the visitor can browse. Let's walk through what makes it different from the metal-script pages.

##### Lines 47-110: The Gallery Section

```html
<section class="product-visual reveal">
  <div class="gallery" data-gallery>
    <div class="gallery-main">
      <img
        id="gallery-main-img"
        src="../../images/products/jewelry/orologiul-01.jpg"
        alt="The Clock of Waters — turquoise cabochons in copper wire nets"
      />
    </div>
    <div class="gallery-thumbs">
      <div class="gallery-track">
        <button class="gallery-thumb is-active" data-src="../../images/products/jewelry/orologiul-01.jpg">
          <img src="../../images/products/jewelry/orologiul-01.jpg" alt="The Clock of Waters — front view" />
        </button>
        <button class="gallery-thumb" data-src="../../images/products/jewelry/orologiul-03.jpg">
          <img src="../../images/products/jewelry/orologiul-03.jpg" alt="The Clock of Waters — photo 2" />
        </button>
        <!-- ... 14 more thumbnail buttons ... -->
      </div>
    </div>
  </div>
</section>
```

This is the gallery HTML structure. Let's break down every piece:

**`<div class="gallery" data-gallery>` — The gallery container.**

- `class="gallery"` — CSS styles the gallery: the main image area, the thumbnail strip, spacing, borders. All defined in `style.css` GROUP 9.
- `data-gallery` — **This is the key.** It's a custom data attribute with no value (its presence is the signal). JavaScript's `initGallery()` function finds every element with `[data-gallery]` on the page and sets up the gallery behavior for it. Without this attribute, the JavaScript ignores the section entirely. This is how HTML tells JavaScript "this is a gallery — handle it."

**`<div class="gallery-main">` — The main image display area.**

This is the large image the visitor sees first. It's a container that holds the display image. CSS gives it a fixed height (calculated with `calc(100vh - 300px)` — the viewport height minus space for the navbar, padding, and thumbnail strip) and centers the image inside with `object-fit: contain`.

**`<img id="gallery-main-img">` — The main display image.**

- `id="gallery-main-img"` — This ID is how JavaScript finds the main image. Inside `initGallery()`, the line `const mainImg = gallery.querySelector("#gallery-main-img")` looks for this exact ID.
- `src="..."` — The initial image shown when the page loads (the first photo, `orologiul-01.jpg`).
- `alt="..."` — Descriptive alt text for accessibility. Screen readers announce this.

**`<div class="gallery-thumbs">` — The thumbnail strip container.**

This is the horizontally scrollable area at the bottom of the gallery. CSS makes it:
- A fixed height (about 100px)
- `overflow-x: auto` — horizontal scrolling when there are more thumbnails than fit
- `scroll-snap-type: x mandatory` — the strip snaps to each thumbnail when scrolling stops, creating a clean deck-of-cards feel

**`<div class="gallery-track">` — The scrollable inner.**

This is the actual content that scrolls horizontally. It holds all the thumbnail buttons in a row. The `.gallery-thumbs` container is the "window" (what you see), and `.gallery-track` is the "film" (what scrolls behind it). This two-layer pattern is how horizontal scroll strips work: the outer container clips the inner content, and the inner content is wider than the container.

**`<button class="gallery-thumb" data-src="...">` — Each thumbnail button.**

There are 16 of these, one per photo. Each has:

- `class="gallery-thumb"` — CSS styles the button: it's a small circular/rounded image, with a border. The default state has a light border; the active state (`.is-active`) has a dark border.
- `data-src="..."` — **This is how the full-resolution image is pointed to.** Each thumbnail has a `data-src` attribute containing the path to the full-size image. When you click a thumbnail, JavaScript reads `thumb.dataset.src` and sets the main image's `src` to that value. The `<img>` inside the button is a *preview* (small version for the strip); the `data-src` points to the *full* version for the main display.
- `class="is-active"` (on the first one only) — The starting active state. The first thumbnail is highlighted when the page loads, matching the fact that the first image is shown in the main display.
- `<img>` inside — A small preview image shown *inside* the thumbnail button. This is what you see in the strip before clicking. It's a separate, smaller `src` from the `data-src` (though in this project they happen to point to the same files — the distinction matters when you want different thumbnails and full images).

##### How the Gallery Connects to JavaScript

In `script.js`, the `initGallery()` function (lines 75-124) does the following:

1. **Finds all galleries:** `document.querySelectorAll("[data-gallery]")` — finds every element with the `data-gallery` attribute. Each product page has one.

2. **For each gallery, finds the parts:**
   - `mainImg` = the element with `#gallery-main-img` (the big display image)
   - `thumbs` = all elements with `.gallery-thumb` (the 16 thumbnail buttons)
   - `viewport` = the element with `.gallery-thumbs` (the scrollable strip container)

3. **Defines `setMain(thumb)`:** When a thumbnail is clicked:
   - `mainImg.src = thumb.dataset.src` — swaps the main image to the full-res version
   - Removes `.is-active` from all thumbnails
   - Adds `.is-active` to the clicked thumbnail

4. **Sets up drag-to-scroll:** The thumbnail strip can be dragged left/right with the mouse (or finger on mobile). The code uses pointer events (`pointerdown`, `pointermove`, `pointerup`) which work for both mouse and touch. It tracks how far the pointer moved — if it moved more than 10px, it was a drag (scroll the strip); if less, it was a click (swap the image). This prevents the common bug where dragging to scroll accidentally triggers a thumbnail swap.

5. **Attaches click handlers to each thumbnail:** Each thumbnail gets a click listener. If the user clicked (not dragged), `setMain(thumb)` runs and the main image updates.

**Key concept — the gallery is self-contained.** The HTML has everything needed: the structure (`data-gallery`), the main image (`#gallery-main-img`), the thumbnails (`.gallery-thumb` with `data-src`), and the strip (`.gallery-thumbs`). The JavaScript finds these pieces by their classes and IDs and connects them. No inline event handlers, no `onclick` attributes — everything is wired up by the external script. This is the clean separation: HTML defines what exists, CSS defines how it looks, JavaScript defines how it behaves.

##### Lines 112-157: Product Info (same pattern as metal-script-01.html)

The right column follows the same structure: product ID, title, Romanian title (`Orologiul apelor`), philosophy text (two paragraphs), specs (5 rows including Length, which the metal-script pieces don't have), and the inquiry button. The `mailto:` subject is `The%20Clock%20of%20Waters`.

##### Key concept — the split-screen layout in practice:

When you scroll `orologiul-apelor.html`, here's what happens:
- The gallery image on the left stays pinned to the top of the viewport (thanks to `position: sticky` in CSS GROUP 9)
- The text on the right scrolls normally: first the product ID and title, then the philosophy, then the specs, then the inquiry button
- As you scroll through the thumbnails on the left, you can drag them or click to swap the main image
- The visitor can look at the image and read about the piece at the same time, without the image scrolling away

This is why the split-screen layout works for product pages: the object is always visible while the story unfolds beside it.

##### Lines 159-170: Footer + Script

Same pattern. The Romanian mirror link points to `../../ro/items/jewelry/orologiul-apelor.html`.

---

### manifesto.html — The Essay Page

**File:** `manifesto.html` (94 lines)  
**Role:** The brand's philosophical statement — long-form prose.

#### Structure (lines 44-81)

```html
<main class="manifesto-container">
  <article class="manifesto-content">
    <header class="manifesto-header">
      <span class="eyebrow">The Texxturalia Gnosis</span>
      <h1 class="reveal">Hermes-Thoth</h1>
      <div class="header-divider reveal"></div>
    </header>
    <section class="manifesto-text">
      <p class="lead-paragraph reveal">
        Texxturalia is not a production line. It is a slow dialogue...
      </p>
      <div class="body-text">
        <p class="reveal">We believe in the integrity of the thread...</p>
        <p class="reveal">Inspired by the essentialism of Brâncuși...</p>
        <p class="reveal">This is an invitation to slow down...</p>
      </div>
      <footer class="manifesto-signature reveal">
        <p>— The Texxturalia Atelier</p>
      </footer>
    </section>
  </article>
</main>
```

**Key concepts:**

- `<article>` — A self-contained composition (the essay). Semantic HTML: this content could stand alone.
- `<main>` — The dominant content of the page. Only one `<main>` per page.
- The layout is centered: `.manifesto-container` uses `display: flex; justify-content: center`, and `.manifesto-content` has `max-width: 700px` — the "publisher's golden width" for reading comfort (about 12-14 words per line).
- The lead paragraph (`.lead-paragraph`) is larger (2rem Cormorant Italic) — it sets the tone before the body text begins.
- Body text (`.body-text p`) uses `text-align: justify` — the publisher standard for long-form prose. Each paragraph has generous `margin-bottom: 40px` and `line-height: 1.8` for reading comfort.
- The signature (`.manifesto-signature`) is right-aligned, italic — a personal mark at the end.

---

### contact.html — The Contact Page

**File:** `contact.html` (95 lines)  
**Role:** Two-column layout: contact methods on the left, working process note on the right.

```html
<div class="contact-grid">
  <div class="contact-text reveal">
    <p>For inquiries, unique acquisitions...</p>
    <div class="method-item">
      <span class="label">Email</span>
      <a href="mailto:atelier@texxturalia.com" class="contact-link">atelier@texxturalia.com</a>
    </div>
    <div class="method-item">
      <span class="label">Digital Trace</span>
      <a href="..." target="_blank" rel="noopener" class="contact-link">Instagram</a>
    </div>
  </div>
  <div class="contact-note reveal">
    <h2>The Working Process</h2>
    <p>Each piece is a unique gesture...</p>
  </div>
</div>
```

**Key concepts:**
- `.contact-grid` is `display: grid; grid-template-columns: 1fr 1fr` — two equal columns on desktop, collapsing to one column on mobile (CSS GROUP 13).
- `mailto:` links open the default email client. This is a standard HTML feature — no JavaScript needed.
- `.contact-link` uses Cormorant Garamond Italic at 1.4rem — the serif font makes contact links feel personal, not mechanical.
- `.method-item` has a top border (`border-top: 1px solid #c5c5c5`) — the "stitch" visual motif continues here, separating each contact method.

---

### 404.html — The Error Page

**File:** `404.html` (40 lines) — the shortest file in the project.  
**Role:** A graceful error page when a visitor lands on a non-existent URL.

```html
<body class="error-page">
  <main class="error-container">
    <div class="error-content reveal">
      <h1 class="error-title">404</h1>
      <p class="error-message-en">The thread has snapped. Return to the abyss.</p>
      <p class="error-message-ro">Firul s-a ruptured. Întoarce-te în abis.</p>
      <div class="error-action">
        <a href="index.html" class="btn-back">RETURN TO THE ATELIER</a>
      </div>
    </div>
  </main>
</body>
```

**Key concepts:**
- `<body class="error-page">` — The body itself has a class. CSS makes `.error-page` fill the viewport (`height: 100vh`) and center its content with flexbox.
- The 404 number is displayed as a huge (5rem) lightweight (font-weight 100) heading in a muted color (#dcd7cf — pale oxide).
- Bilingual messages: the English message has higher opacity (more prominent) since the primary audience is English-speaking; the Romanian message is slightly dimmer. This hierarchy is a deliberate design choice — the EN message carries the primary content, while the RO message is a nod to the project's bilingual strategy, inviting Romanian-speaking visitors into the same experience.
- `.btn-back` is an understated button — not a heavy CTA, just a text link with a bottom border. The border acts as a "thread" connecting back to the homepage.

---

## Part 2: script.js — The JavaScript

**File:** `script.js` (132 lines)  
**Role:** Handles all interactive behavior. Four independent mechanisms + initialization.

**Key concept — what JavaScript does here:** Unlike many websites that load heavy frameworks (React, Vue, jQuery), this project uses vanilla JavaScript — no libraries, no build step, no npm. Every line is hand-written and does one specific thing. This is intentional: the project is small enough that a framework would be overkill, and the code serves as a teaching example of how JavaScript actually works.

---

### Mechanism 1: Hamburger Menu (lines 6-30)

```javascript
const initMobileMenu = () => {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.style.opacity = navLinks.classList.contains("active")
        ? "0.5"
        : "1";
    });
  }
};
```

**Line by line:**

- `const initMobileMenu = () => { ... }` — This is an arrow function assigned to a constant. It defines the initialization function for the mobile menu. It doesn't run yet — it's just defined. Think of it as a recipe that hasn't been cooked yet.

- `const menuToggle = document.querySelector(".mobile-menu-toggle");` — `document.querySelector()` finds the FIRST element in the document that matches the CSS selector. Here it finds the hamburger button. If no element matches, it returns `null`.

- `const navLinks = document.querySelector(".nav-links");` — Finds the `<ul>` containing the menu links.

- `if (menuToggle && navLinks)` — A safety check. If either element is missing (e.g., on a page that doesn't have a navbar), the code inside doesn't run. This prevents JavaScript errors on pages where the menu doesn't exist.

- `menuToggle.addEventListener("click", () => { ... })` — Attaches a "click" event listener to the hamburger button. Every time the button is clicked, the arrow function runs. This is the fundamental pattern of interactive JavaScript: **select an element → attach an event listener → do something in response.**

- `navLinks.classList.toggle("active")` — The `classList` API lets you manipulate CSS classes on an element. `toggle("active")` adds the class if it's not there, removes it if it is. This is how the mobile menu opens and closes — CSS has a rule `.nav-links.active { display: flex; }` (inside the mobile media query) that shows the menu when the class is present.

- `menuToggle.style.opacity = ...` — Directly sets a CSS property via JavaScript. The ternary operator (`condition ? valueIfTrue : valueIfFalse`) sets opacity to 0.5 when the menu is open (the button "dims" to show it's active) and 1 when closed.

**Key concept — classList.toggle():** This is one of the most useful JavaScript-DOM patterns. Instead of manually checking `if (element.classList.contains('active'))` and then adding or removing, `toggle()` does both in one call. CSS handles the visual result — JavaScript only changes the class.

---

### Mechanism 2: The Reveal System (lines 32-49)

```javascript
const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => observer.observe(el));
};
```

**Line by line:**

- `const observer = new IntersectionObserver(...)` — Creates a new IntersectionObserver. This is a browser API that watches elements and tells you when they enter or leave the viewport (the visible area of the screen). It's much more efficient than listening to scroll events — the browser handles the observation at the compositor level.

- The callback function `(entries) => { ... }` runs whenever one or more observed elements cross the threshold. `entries` is an array of `IntersectionObserverEntry` objects, one per element that changed.

- `entries.forEach((entry) => { ... })` — Loop through each entry.

- `if (entry.isIntersecting)` — `isIntersecting` is `true` when the element is visible in the viewport, `false` when it scrolls out. We only care about the element becoming visible.

- `entry.target.classList.add("active")` — `entry.target` is the actual HTML element being observed. We add the `.active` class, which triggers the CSS transition (opacity 0 → 1, translateY(30px) → 0).

- `{ threshold: 0.1 }` — Configuration. `threshold: 0.1` means "notify me when at least 10% of the element is visible." Without this, the observer would fire as soon as a single pixel is visible, which might be too early. 10% is a good balance — the element is clearly entering the viewport.

- `document.querySelectorAll(".reveal")` — Finds ALL elements with class `reveal` on the page. This returns a NodeList (like an array of elements).

- `elements.forEach((el) => observer.observe(el))` — For each element, tell the observer to start watching it. `observer.observe(el)` is the command that starts observation.

**Key concept — IntersectionObserver vs. scroll events:** Before IntersectionObserver existed, developers had to listen to scroll events and calculate element positions manually using `getBoundingClientRect()`. This was expensive (scroll events fire dozens of times per second) and error-prone. IntersectionObserver is the modern solution — the browser handles the math, and your callback only fires when something actually crosses the threshold.

**Why `.reveal` and `@keyframes fadeInUp` coexist:** In `style.css` GROUP 4, you'll find both:
- `@keyframes fadeInUp` — an automatic animation that runs on page load (no JavaScript needed). Used for above-the-fold elements that should animate immediately.
- `.reveal` + `.active` — a scroll-triggered system. The element stays hidden until it enters the viewport.

These are two different tools for two different jobs. The hero section (above the fold) uses `fadeInUp` (or could, but currently doesn't — the hero elements don't have the animation class). Elements below the fold use `.reveal`. In a larger project, you might use both on the same page: automatic for the hero, scroll-triggered for everything else.

---

### Mechanism 3: Collection Filter (lines 51-73)

```javascript
const initCollectionFilter = () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("collection-grid");
  if (!buttons.length || !grid) return;

  const applyFilter = (filter) => {
    const items = grid.querySelectorAll(".exhibit-item");
    items.forEach((item) => {
      const cat = item.dataset.category || "all";
      const show = filter === "all" || cat === filter;
      item.style.display = show ? "" : "none";
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
};
```

**Line by line:**

- `document.querySelectorAll(".filter-btn")` — Finds all filter buttons.
- `document.getElementById("collection-grid")` — Finds the collection grid by its ID (faster than querySelector for ID lookups). This is the container whose children will be filtered.

- `if (!buttons.length || !grid) return;` — Safety check. If there are no buttons or no grid (e.g., on a page that doesn't have a collection), exit early. This prevents errors.

- `const applyFilter = (filter) => { ... }` — A nested function that does the actual filtering. It takes a filter string ("all", "textiles", "jewelry", etc.) and shows/hides items.

  - `grid.querySelectorAll(".exhibit-item")` — Finds all items inside the grid.
  - `item.dataset.category || "all"` — Reads the `data-category` attribute. If it doesn't exist, defaults to "all" (so items without a category always show).
  - `const show = filter === "all" || cat === filter;` — The logic: show if the filter is "all" (show everything) OR if the item's category matches the filter.
  - `item.style.display = show ? "" : "none";` — The actual show/hide. Setting `display: "none"` removes the element from the layout (it disappears and other elements fill the space). Setting `display: ""` (empty string) removes the inline display style, letting CSS control it again — the element reappears.

- `buttons.forEach((btn) => { ... })` — For each filter button, attach a click handler.

  - First, remove `.active` from ALL buttons (deselect everything).
  - Then add `.active` to the clicked button (select it).
  - Then call `applyFilter(btn.dataset.filter)` — read the filter value from the clicked button and apply it.

**Key concept — event delegation alternative:** This approach attaches a separate event listener to each button. For 5 buttons, that's 5 listeners — fine. For 100 buttons, you'd use "event delegation" instead: attach ONE listener to the parent container and use `event.target` to figure out which button was clicked. That's more efficient for large lists. This project uses the simple approach because there are only 5 buttons.

---

### Mechanism 4: Product Gallery Thumbnail Swapper (lines 75-124)

```javascript
const initGallery = () => {
  const galleries = document.querySelectorAll("[data-gallery]");
  galleries.forEach((gallery) => {
    const mainImg = gallery.querySelector("#gallery-main-img");
    const thumbs = gallery.querySelectorAll(".gallery-thumb");
    const viewport = gallery.querySelector(".gallery-thumbs");
    if (!mainImg || !thumbs.length) return;

    const setMain = (thumb) => {
      mainImg.src = thumb.dataset.src;
      thumbs.forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
    };

    // Slider: mouse drag on the native scroll container.
    if (viewport) {
      let isDragging = false;
      let startX = 0;
      let startScroll = 0;
      let moved = 0;

      viewport.addEventListener("pointerdown", (e) => {
        isDragging = true;
        moved = 0;
        startX = e.clientX;
        startScroll = viewport.scrollLeft;
      });
      viewport.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const dx = startX - e.clientX;
        moved += Math.abs(dx);
        viewport.scrollLeft = startScroll + dx;
      });
      const endDrag = () => {
        isDragging = false;
      };
      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointerleave", endDrag);

      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          if (moved > 10) return; // it was a drag, not a click
          setMain(thumb);
        });
      });
    }
  });
};
```

**This is the most complex mechanism in the file. Read it carefully.**

**Line by line:**

- `document.querySelectorAll("[data-gallery]")` — Finds all elements with a `data-gallery` attribute. This is how the JavaScript finds product gallery sections. Each product detail page has one gallery.

- `galleries.forEach((gallery) => { ... })` — For each gallery on the page, set it up independently. A page could have multiple galleries (though currently each product page has one).

- `const mainImg = gallery.querySelector("#gallery-main-img")` — Finds the main display image by ID. This is the large image that changes when you click a thumbnail.

- `const thumbs = gallery.querySelectorAll(".gallery-thumb")` — Finds all thumbnail images.

- `const viewport = gallery.querySelector(".gallery-thumbs")` — Finds the thumbnail strip container (the horizontally scrollable area).

- `if (!mainImg || !thumbs.length) return;` — Safety check.

**The setMain function:**
- `mainImg.src = thumb.dataset.src` — Changes the main image's source to the thumbnail's `data-src` attribute. Each thumbnail has a `data-src` attribute pointing to the full-resolution image. When you click a thumbnail, the main image swaps to that source.
- `thumbs.forEach((t) => t.classList.remove("is-active"))` — Removes the active highlight from ALL thumbnails.
- `thumb.classList.add("is-active")` — Adds the active highlight to the clicked thumbnail (CSS makes the border turn dark).

**The drag-to-scroll system:**
This is a custom drag implementation for the thumbnail strip. The browser has native horizontal scrolling, but the project adds drag support so users can click and drag the strip left/right (in addition to using a trackpad or scroll wheel).

- `let isDragging = false` — State: are we currently dragging?
- `let startX = 0` — Where did the drag start (X coordinate)?
- `let startScroll = 0` — How far was the strip scrolled when the drag started?
- `let moved = 0` — How far has the pointer moved during this drag? Used to distinguish clicks from drags.

**pointerdown** (mouse/finger presses down):
- Set `isDragging = true`
- Reset `moved = 0`
- Record `startX = e.clientX` (where the pointer is)
- Record `startScroll = viewport.scrollLeft` (where the strip is currently scrolled)

**pointermove** (mouse/finger moves):
- `if (!isDragging) return;` — If we're not dragging, ignore this event.
- `const dx = startX - e.clientX` — How far has the pointer moved since the drag started? (positive = moved left, negative = moved right)
- `moved += Math.abs(dx)` — Accumulate total distance moved (for click-vs-drag detection)
- `viewport.scrollLeft = startScroll + dx` — Set the scroll position to where it was at the start, plus the drag distance. This creates the drag effect.

**pointerup / pointerleave** (mouse/finger releases or leaves the strip):
- `isDragging = false` — We're no longer dragging.

**The click-vs-drag discrimination (critical):**
```javascript
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (moved > 10) return; // it was a drag, not a click
    setMain(thumb);
  });
});
```

This solves a UX problem: on a horizontally scrollable strip, clicking a thumbnail should swap the image, but dragging the strip should scroll it. If you attach a click handler to thumbnails inside a scrollable area, the click fires AFTER a drag too — the user drags to scroll and accidentally swaps the image.

The solution: track how far the pointer moved during the gesture. If it moved more than 10 pixels, it was a drag — ignore the click. If it moved less than 10 pixels, it was a click — swap the image.

**Key concept — pointer events vs. mouse events:** The code uses `pointerdown`, `pointermove`, `pointerup` instead of `mousedown`, `mousemove`, `mouseup`. Pointer events are the modern standard — they work for both mouse AND touch (finger on mobile). Using mouse events would work on desktop but fail on mobile. Pointer events unify both.

---

### Mechanism 5: Initialization (lines 126-132)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initReveal();
  initCollectionFilter();
  initGallery();
});
```

**Line by line:**

- `document.addEventListener("DOMContentLoaded", () => { ... })` — This is the entry point. `DOMContentLoaded` fires when the HTML has been fully parsed and the DOM tree is built, but BEFORE external resources (images, stylesheets) finish loading. This is earlier than `window.onload` (which waits for everything including images). We use `DOMContentLoaded` because our JavaScript doesn't need images to be loaded — it only needs the DOM elements to exist.

- Inside the callback, we call all four initialization functions. They were defined earlier but never executed — defining a function doesn't run it. This is where the "engine starts."

**Key concept — why wait for DOMContentLoaded?** If you try to select an element with `document.querySelector()` before the HTML has been parsed, the element doesn't exist yet and you get `null`. By waiting for `DOMContentLoaded`, you guarantee that all elements are in the DOM. Alternatively, you could place the `<script>` tag at the end of the body (which this project does) — by the time the browser reaches that script, all previous HTML has been parsed. Both approaches work; `DOMContentLoaded` is more explicit about the intent.

---

## Part 3: style.css — The Stylesheet

**File:** `style.css` (1358 lines, rewritten)  
**Role:** Every visual aspect of the project. Read the file's header comment first — it explains the cascade architecture.

**How to approach this file as a student:**

1. Read the header comment (lines 1-29). It explains the cascade architecture and how to read the file.
2. Read each GROUP header. Every group starts with a comment block that says what concept it teaches.
3. Within each group, read from top to bottom — selectors are ordered from general (container) to specific (child, state, pseudo-element).
4. The "Learn:" sections in each group header tell you what to pay attention to.

The CSS file is fully commented in English. Below is a summary of each group and what it teaches, with pointers to the most important concepts.

---

### GROUP 0 — Reset & Foundation

**Concepts:** Universal selector, box-sizing, body as canvas.

- `* { margin: 0; padding: 0; box-sizing: border-box; }` — The universal reset. `box-sizing: border-box` is THE most important line in the file. It changes how width is calculated: with `border-box`, padding and border are INCLUDED in the width. Without it (the default `content-box`), padding is ADDED to the width — a 200px wide box with 20px padding becomes 240px wide. This causes endless layout bugs. `border-box` fixes it globally.

- `body` — Sets the font (Montserrat 200), background color (#f2f0eb — warm bone), text color (#2c2c2c — warm charcoal), and `overflow-x: hidden` (prevents horizontal scroll from images slightly wider than the viewport).

---

### GROUP 1 — Shared Components: Navbar & Logo

**Concepts:** Flexbox, descendant selectors, color inheritance, transitions.

- `.navbar { display: flex; justify-content: space-between; }` — Flexbox layout. `justify-content: space-between` pushes the logo to the far left and the menu to the far right.

- `.navbar a { color: inherit; }` — Links inherit the navbar's text color instead of the browser default blue. `inherit` is a CSS keyword that says "take the parent's value."

- `.navbar a { display: contents; }` — The link doesn't create its own box. This is important for the logo: the logo `<div>` inside the `<a>` participates in the navbar's flex layout directly. Without `display: contents`, the `<a>` would create a box that interferes with the flex alignment.

- `.nav-links a` — Descendant selector: targets links INSIDE `.nav-links`. This is different from `.nav-links > a` (child selector), which would only target direct children. The descendant selector is broader and matches the structure here.

---

### GROUP 2 — Hero & Typography

**Concepts:** Font-family switching, max-width for readability, centering.

- `.hero h1` uses Cormorant Garamond (serif) while `body` uses Montserrat (sans-serif). This is a deliberate font-family switch — the hero/essay content uses the serif for literary tone, the UI elements use the sans-serif for clarity.

- `.hero p { max-width: 650px; }` — Caps line length for readability. Without max-width, lines could stretch across a wide screen and become hard to read (the eye has to travel too far). 650px is approximately 12-14 words per line — the comfortable reading range.

---

### GROUP 3 — Home Page: Portal Grid

**Concepts:** CSS Grid with auto-fit/minmax, ::after pseudo-element, transitions.

- `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` — The responsive grid pattern. `auto-fit` creates as many columns as fit. `minmax(280px, 1fr)` means each column is at least 280px and takes equal share of remaining space. No media queries needed — the grid adapts automatically.

- `.portal-item::after` — The `::after` pseudo-element creates a transparent overlay on top of the card. `content: ""` is required (pseudo-elements need content to exist). On hover, the overlay darkens slightly — a "veil" effect. Pseudo-elements are purely visual — they don't exist in the HTML, they're generated by CSS.

---

### GROUP 4 — Animation: Keyframes vs Reveal

**Concepts:** @keyframes, CSS transitions, the reveal pattern.

- `@keyframes fadeInUp` — Defines the animation recipe. From invisible + 30px lower, to visible + original position. This is just a definition — it doesn't apply to anything until something references it with `animation: fadeInUp`.

- `.reveal` — Starting state: invisible, pushed down, with a transition defined. The transition animates the change when `.active` is added.

- `.reveal.active { !important }` — The revealed state. `!important` is used here because JavaScript toggles this class and we need it to win over any other opacity/transform rule. In most of the file, we avoid `!important` and rely on cascade order. This is one of the few justified uses.

---

### GROUP 5 — Exhibit Pages: The Ikebana Grid

**Concepts:** Asymmetric grid, nth-child selectors, image-wrapper as virtual frame, item-info hierarchy. The numbers here are aesthetic choices, not arbitrary defaults — see the exhibit grid walkthrough in Part 1 for the ikebana and gravitational reasoning behind `1.2fr`/`0.8fr` and the stagger pattern.

- `grid-template-columns: 1.2fr 0.8fr` — Asymmetric 2-column layout. The first column is 60% of available space, the second is 40%.

- `nth-child(even)`, `nth-child(2)`, `nth-child(4)` — Stagger pattern. The general `nth-child(even)` rule is overridden by the more specific `nth-child(2)` and `nth-child(4)` rules because they come LATER in the cascade with equal specificity. This is the CSS cascade in action: same specificity, later rule wins.

- `.image-placeholder` with height variants — Colored rectangles that maintain grid rhythm when real images aren't available.

---

### GROUP 6 — The Collection: Filter & Archive Grid

**Concepts:** data- attribute selectors (CSS side), auto-fill grid, aspect-ratio, object-fit.

- `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))` — Like auto-fit but keeps empty columns (better for a fixed archive layout).

- `aspect-ratio: 4 / 5` — Forces all collection images to the same portrait proportion. Every piece in the archive has the same frame.

- `object-fit: contain` — The image fills the frame without cropping. Important for artwork where every detail matters. (Contrast with `object-fit: cover` which crops to fill — used for thumbnails where uniformity matters more than showing the full image.)

---

### GROUP 7 — The Creed: Manifesto Page

**Concepts:** Justified text, max-width for reading comfort, lead paragraph as typographic hero.

- `text-align: justify` — Publisher standard for long-form prose. Each line is stretched to fill the column width, creating clean edges on both sides.

- `max-width: 700px` — The "publisher's golden width." About 12-14 words per line — the comfortable reading range for printed text, carried to the web.

---

### GROUP 8 — Theme Classes: Per-Domain Chromatic Ambiances

**Concepts:** Parent class scoping, hover states per theme, centralized theme overrides.

- `.jewelry-theme .image-wrapper` — The parent class (`jewelry-theme`) scopes the child selector. This rule ONLY applies to image wrappers inside a jewelry-themed page. Other pages are unaffected.

- Each universe has its own color pair: starting background + hover background. This creates a distinct personality for each gallery.

- All theme overrides live in ONE place (GROUP 8). Adding a new universe means adding two rules here — nothing else changes.

---

### GROUP 9 — Product Detail Page: Split-Screen Layout

**Concepts:** position: sticky, calc() for viewport height, gallery thumb swapper, horizontal scroll snap.

- `position: sticky; top: 20px;` — The image column sticks to the top of the viewport while the user scrolls through the text. The piece is always visible as you read about it. Sticky positioning is a hybrid: the element behaves like `relative` until you scroll past its container, then it behaves like `fixed` within the scroll range.

- `height: calc(100vh - 300px)` — The gallery height is the viewport height minus 300px (navbar + padding + thumbnails + breathing room). `calc()` lets you do math in CSS. `100vh` is 100% of the viewport height.

- `scroll-snap-type: x mandatory` — The thumbnail strip snaps to each thumbnail when scrolling stops. `x` means horizontal snapping. `mandatory` means the browser MUST snap (not just "should"). This creates a clean, deck-of-cards feel when scrolling through thumbnails.

- `.gallery-thumb.is-active` — The active thumbnail gets a dark border. JavaScript adds/removes this class when a thumbnail is clicked.

---

### GROUP 10 — Footer

**Concepts:** border-top for separation, flex for link grouping, small-type hierarchy.

- `.site-footer` — The universal footer. `border-top: 1px solid #f0f0f0` creates a thin separation line. `margin-top: 100px` pushes the footer away from the content above.

---

### GROUP 11 — Contact Page

**Concepts:** Grid for side-by-side columns, method-item as documentary list, serif for contact links.

- `.contact-grid` — Two equal columns on desktop (`1fr 1fr`), one column on mobile.
- `.contact-link` — Cormorant Garamond Italic at 1.4rem. The serif font makes contact links feel personal rather than mechanical.

---

### GROUP 12 — 404 Page

**Concepts:** Full-viewport centering with flexbox, bilingual message hierarchy.

- `.error-page { height: 100vh; display: flex; align-items: center; justify-content: center; }` — Centers content both vertically and horizontally in the viewport.
- `.error-message-en` (higher opacity) is the primary message; `.error-message-ro` (lower opacity) is secondary — reflecting the audience language priority.

---

### GROUP 13 — Mobile Adaptation (Media Queries)

**Concepts:** The 850px breakpoint, overriding desktop rules, touch target sizing, minmax(0, 1fr) for mobile grids.

- `@media (max-width: 850px)` — Everything inside this block applies ONLY when the viewport is 850px wide or less. This is the breakpoint where the site switches from desktop to mobile layout.

- Each rule inside the media query has the SAME specificity as its desktop counterpart. It wins because it comes LATER in the source order (cascade), not because media queries add specificity. This is a key concept: **media queries don't change specificity; they gate whether a rule applies at all.**

- Touch targets: `.filter-btn { min-height: 44px; }` and `.mobile-menu-toggle { padding: 15px 10px; }` — both ensure the clickable area is at least 44px tall, the minimum recommended by accessibility guidelines.

- `minmax(0, 1fr)` in the mobile product grid — On mobile, the product detail grid collapses to a single column. `minmax(0, 1fr)` is used instead of just `1fr` because `1fr` tracks against the min-content size of the image content, which can be very wide. `minmax(0, 1fr)` allows the column to shrink below the image's natural width (the image then scales down via `object-fit: contain`).

- `.exhibit-grid .exhibit-item:nth-child(even), nth-child(2), nth-child(4) { margin-top: 0; }` — The stagger offsets are removed on mobile. The grid becomes a single column, so the staggered rhythm doesn't apply.

---

### APPENDIX — Legacy & Roadmap

**Concepts:** Isolation of non-critical rules.

- `#portal-body { background-image: url("poza_ta.jpg"); }` — A legacy experiment. The image file doesn't exist, so this rule has no visible effect. It's kept at the very bottom (after the media query) so it can never interfere with the cascade above. If you want to use a background image on the portal page in the future, this is the hook.

---

## Part 4: The Markdown Files — What Each One Does

### README.md — The Project's Front Door

**File:** `README.md` (30 lines)  
**Role:** The first thing anyone sees when they open the project repository. It answers: "What is this? Who made it? How do I see it?"

A good README contains:
- Project name and one-line description
- Screenshots or a preview link
- Tech stack (what tools/languages were used)
- How to run it locally
- Author and contact

For Texxturalia, the README is the project's business card. It should be clean, evocative, and link to the live site.

---

### BACKLOG.md — The Task Board

**File:** `BACKLOG.md` (63 lines)  
**Role:** The project's task tracker. Every pending feature, fix, and maintenance item lives here as a checkbox.

Sections:
- **Must Do Before Launch** — Critical items that block launch.
- **Polish (Pre-Launch)** — Nice-to-have improvements.
- **Code & Maintenance** — Technical debt and cleanup tasks (including the comment audit).
- **Backend Dreams** — Future ideas that aren't in scope now.

**How to use it:** When you think of something that needs doing, add it to the backlog. When you start working on it, move it to the appropriate section. When it's done, check the box. The backlog is the project's memory — it prevents things from being forgotten.

---

### BRAND.md — The Brand System

**File:** `docs/BRAND.md`  
**Role:** The single source of truth for the project's visual and verbal identity. Every design decision flows from this document.

Contains:
- **Brand essence** — What Texxturalia IS (and isn't).
- **Name architecture** — The four universes (Arachne, Corvus, Leto, Actaeon) and what each represents.
- **Color palette** — Every color used in the project, with hex values and the emotion it carries.
- **Typography** — The two-font system (Montserrat for voice, Cormorant Garamond for presence).
- **Motion philosophy** — How the site moves (slow, gravitational, understated).
- **The three laws** — The governing principles: Material Monotheism, Digital Silence, Fractional Scarcity.

**Why this matters:** When you're designing a new page or component, you consult BRAND.md first. It tells you which colors to use, which font to apply, how the page should move. This ensures consistency across the entire project — every page feels like it belongs to the same world.

---

### ARCHITECTURE.md — The Technical Blueprint

**File:** `docs/ARCHITECTURE.md`  
**Role:** How the project is built, technically. For developers who need to understand the structure.

Contains:
- **Site map** — Every page and how they're organized.
- **File structure** — The directory layout, what each folder contains.
- **Component inventory** — Every reusable UI component (navbar, hero, footer, image-wrapper, etc.) and what it does.
- **Theme system** — How the per-universe color themes work (the `.jewelry-theme` / `.textile-theme` pattern).
- **JavaScript architecture** — The four mechanisms and how they're organized.
- **CSS architecture** — The cascade order and group structure (mirrors what's in style.css).

**Why this matters:** If someone new joins the project, ARCHITECTURE.md is the first thing they read to understand how everything fits together. It's the map.

---

### DECISIONS.md — The Decision Log

**File:** `docs/DECISIONS.md`  
**Role:** Records major decisions and WHY they were made. Prevents "why did we do it this way?" confusion later.

Each entry has:
- **What was decided** — The decision.
- **Why** — The reasoning.
- **Alternatives considered** — What else was discussed.
- **Consequences** — What this decision affects.

**Why this matters:** Projects accumulate decisions over time. Without a record, the reasoning is lost and future contributors (or your future self) might "fix" something that was deliberately chosen. DECISIONS.md preserves the context.

---

### RESOURCES.md — Tools & References

**File:** `docs/RESOURCES.md`  
**Role:** The curated list of tools, references, and study materials used to build Texxturalia. Tailored to the project's specificity — not generic "learn to code" resources.

Contains:
- **Tools** — The actual software used: W3C Validator, Google Fonts, Squoosh (image compression), Adobe Color, CodePen.
- **Editor setup** — VS Code shortcuts and extensions used in development.
- **Niche marketing & product ownership** — Resources specific to handmade e-galleries, OOAK fashion/jewelry e-commerce, and product ownership for creative businesses.

**Why this matters:** RESOURCES.md is the project's study guide. A beginner frontend student reading this document learns not just HOW the project was built, but WHAT tools and references the builder used. It's a curated path, not a generic list.

---

### LEARNING.md — The Code Walkthrough (this file)

**File:** `docs/LEARNING.md` (this file)  
**Role:** The comprehensive walkthrough for beginner frontend students. Explains every file in the project, block by block, line by line.

**Structure:**
- **Part 1: HTML files** — Every page, element by element.
- **Part 2: script.js** — Every mechanism, line by line.
- **Part 3: style.css** — Group by group, concept by concept.
- **Part 4: Markdown files** — The role of each doc file.

**How it was written:** Each section starts with the file's purpose, then walks through the code in the order it appears. Code blocks show the actual code, and explanations follow. The goal is that a student with basic HTML/CSS/JS knowledge can read this document alongside the project files and understand every line.

---

## Part 5: Architectural Decisions — The Why Behind the How

### The Romanian Mirror — Two Parallel File Trees

The project ships a Romanian version of every page alongside the English original. The Romanian pages live under `ro/` and mirror the exact same directory structure as the English files — `ro/index.html` corresponds to `index.html`, `ro/jewelry.html` to `jewelry.html`, `ro/items/jewelry/orologiul-apelor.html` to `items/jewelry/orologiul-apelor.html`, and so on.

**The structural rule:** Romanian files are structural replicas — same HTML skeleton, same CSS class names, same JavaScript wiring — with Romanian text substituted in every visible string. The paths adjust because the files sit one level deeper: a Romanian product page under `ro/items/jewelry/` needs `../../` to reach the root-level CSS and nav links, just like its English counterpart under `items/jewelry/`. The rule of thumb for writing these paths: every `../` climbs one level toward the root from wherever the file sits. A file at `ro/items/jewelry/metal-script-01.html` is three levels deep (ro → items → jewelry → file), so it needs `../../../` to reach `index.html` at the root, and `../../style.css` to reach the stylesheet.

**Why this approach instead of i18n (internationalization libraries):**

1. **Editorial control.** Every Romanian phrase is hand-written, not machine-translated. The atelier's voice — its register, its word choices, its silences — is preserved in the source. i18n frameworks that rely on translation keys or auto-translation pipelines strip that voice out; the Romanian becomes a mirror of the English skeleton rather than a living text. With parallel files, the Romanian is written by a Romanian speaker (or a writer who knows the language) and lives in its own files, not in a translation table.

2. **No JavaScript required for language switching.** The language switcher in the navbar is a plain `<a href="ro/index.html">` — an ordinary link. No JS framework, no cookie, no localStorage, no URL hash routing. The browser navigates to a different page the same way it navigates to any other page. This means the site works with JavaScript disabled, works on the first load without a hydration step, and works on every browser back to IE5. The cost is that the Romanian is a separate page, not a toggled layer — but that's the same trade-off the rest of the project makes (no framework, no build step, no npm).

3. **Free hosting, no server logic.** The site is served as static files. There is no server-side language detection, no Accept-Language header parsing, no locale middleware. The Romanian mirror is just another directory of HTML files the web server sends when asked. Hosting is zero-config: drop the files on any static host (GitHub Pages, Netlify, a VPS with nginx) and both languages work. An i18n approach that relies on server-side routing or client-side JavaScript to swap content adds complexity that the project's hosting model doesn't need.

4. **The mirror is a Teaching artifact, not just a translation.** The Romanian files are part of what the project teaches. A student reading LEARNING.md can open `ro/index.html` and compare it side-by-side with `index.html` — same structure, different language. That comparison teaches something about how HTML structure is language-agnostic and how content lives in text nodes, not in the markup. It's a deliberate didactic choice, not an accident of implementation.

**What this means in practice:** Every time a new English page is added, a Romanian counterpart should be created under `ro/` with the same path. Every time English text is updated, the Romanian should be checked for consistency. The two trees are peers — neither is derived from the other. They are written by different hands, for different readers, about the same project.

---

### Why Bilingual Mirroring — The Editorial Rationale

The project is bilingual by design, not by accident. The English pages are the canonical, primary version — they are written first, they are the reference for what the project says. The Romanian pages are a deliberate second voice, not a derivative. Here is why:

**Total editorial control over Romanian phrasing.** The Romanian text is not a translation in the machine-translation sense — it is a rewrite. A piece described in English as "The raven's script. Sacred copper traces in the primordial chasm." becomes, in Romanian, something written by someone who hears the language differently. The Romanian is not required to match the English sentence-by-sentence; it is required to carry the same intent, the same atmosphere, the same register. This is only possible when the Romanian lives in its own files, written by a person, not extracted from a translation key or generated by an API.

**No JavaScript for language switching.** The project is built around the idea that the web works without JavaScript. The language switcher is a link. The Romanian page loads independently, with its own `<html lang="ro">`, its own metadata, its own content. There is no framework detecting the user's browser language and redirecting them, no cookie remembering their choice, no client-side rendering swapping text nodes. This keeps the site fast, accessible, and honest about what it is: two separate pages, one in English, one in Romanian, each complete on its own.

**English-first canonical strategy.** The English version is the source of truth. When the project adds a new universe, a new piece, a new page, the English file is written first. The Romanian follows. This is not because English is more important — it is because the project was conceived in English, the primary writer works in English, and the Romanian is a deliberate act of translation-into-a-second-voice that happens after the English exists. The English-first order is an editorial workflow, not a statement about which language is superior.

**The Romanian mirror is not i18n — it is a second writing.** This distinction matters. i18n (internationalization) is the engineering practice of preparing a product to support multiple languages, usually by externalizing strings into translation files, adding locale-aware formatting, and building a system that can swap languages at runtime. The project does none of that. What it does instead is maintain two complete, independent sets of HTML files — one English, one Romanian — and let the reader choose which to read by clicking a link. This is simpler, slower to maintain (every English change needs a Romanian counterpart), and more honest about what bilingual content actually is: not a single text with a language switch, but two texts that happen to describe the same project.

---

## Summary: How the Project Fits Together

```
index.html          →  The front door. Four portal cards link to workshop pages.
textiles.html       →  Atavic Envelopes (Arachne universe) — textile pieces.
jewelry.html        →  Sacral Scripts (Corvus universe) — wire jewelry.
decor.html          →  Telluric Dialect(ic)s (Leto universe) — interior objects.
guests.html         →  InterTexxturalia (Actaeon universe) — invited artists.
manifesto.html      →  The brand essay — long-form prose.
collection.html     →  All pieces in one page, with filter buttons.
contact.html        →  Contact methods + working process note.
404.html            →  Graceful error page.

style.css           →  Every visual rule. 13 groups, cascade-ordered.
script.js           →  Four mechanisms: menu, reveal, filter, gallery.

README.md           →  Project front door.
BACKLOG.md          →  Task tracker.
BRAND.md            →  Visual/verbal identity system.
ARCHITECTURE.md     →  Technical blueprint.
DECISIONS.md        →  Decision log with reasoning.
RESOURCES.md        →  Curated tools and references.
LEARNING.md         →  This walkthrough.
```

Every file has a role. Together they form a complete, self-contained web project that a beginner can study, understand, and learn from.
