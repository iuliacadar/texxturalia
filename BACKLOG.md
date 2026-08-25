# Backlog — Texxturalia

> Ideas, improvements, and the slow automation of the atelier. Written for the
> future self who returns to this code — so nothing learned here is lost.

## The Dream: Data, not Duplication

Every product currently lives as its own hand-written HTML file. That is honest
and beautiful — but it does not scale to a hundred pieces. The long answer to
"how do we list 100 products?" is **not** 100 HTML files written by hand.

### Future: the Product Data + Generator

- [ ] **`products.json`** — a single data file holding every piece:
      `id`, `name` (en/ro), `title` (en/ro), `domain` (textiles/jewelry/decor/
      guests), `price`, `materials`, `technique`, `closure`, `dimensions`,
      `description` (en/ro), `photo` list.
- [ ] **Generator script** — reads `products.json` and writes all product
      pages (`items/<domain>/<id>.html` + `ro/items/<domain>/<id>.html`)
      from a single template. Adding a product = one entry in JSON + rerun.
- [ ] **Collection page from data** — `collection.html` builds its grid by
      reading `products.json`, so the archive updates itself.
- [ ] **Gallery pages from data** — `jewelry.html` (and siblings) read only
      the curated pieces (a `featured: true` flag), so the window stays
      curated while the archive holds everything.

> When: after the frontend/JSON/script journey reaches that shore. Not before.
> The manual work now is the apprenticeship that makes the generator meaningful.

## Product Pages

- [x] **Photo gallery** — main viewer + swipeable thumbnail strip
      (scrolls sideways, holds 20+ photos), click a thumbnail or use
      Prev/Next to change the main image.
- [ ] **Lightbox** — click the main image to view it full-screen, with
      prev/next. Optional; add when the gallery feels too small.

## Images

- [ ] **Curated galleries** (`textiles.html`, `jewelry.html`, `decor.html`,
      `guests.html`) still use placeholder boxes. When real photos arrive,
      replace the `.image-placeholder` divs with `<img>` tags and let them
      inherit the full-photo display.
- [ ] **Consistent framing** — decide one aspect ratio for all product photos
      (the collection grid uses 4:5). Shoot or crop to match, so the archive
      reads as one room, not a patchwork.
- [ ] **Image workflow** — rename the `orologiul-0X.jpg` files to meaningful
      names (`orologiul-front.jpg`, `orologiul-chain-detail.jpg`) once the
      hero/detail shots are chosen. Keep home-made, unedited photos — that is
      the atelier soul.
- [ ] **B&W rescue (isolated)** — a CSS class that grays out a single
      thumbnail/hero photo on demand, used only to save the *rare* image whose
      background clashes or whose colour temperature breaks the grid. Not a
      blanket filter: colour is the material truth of the pieces (copper,
      turquoise, amber), so B&W is the rescue tool, never the default.

## Code & Maintenance

- [x] **Comment audit & cleanup (ALL files)** — Every `.html`, `.css`, `.js`, and `.md` file in the project has been reviewed. Romanian comments translated to English. Stale/debug comments removed. Missing explanations added. A frontend novice can now read any file and understand what each block does. See [`docs/COMMENT_CLEANUP_REPORT.md`](docs/COMMENT_CLEANUP_REPORT.md) for full details.

## Backend Dreams (when the journey allows)

- [ ] **Stripe / payments** — a buy path beyond the `mailto:` inquiry button,
      when the collection is large enough to justify it.
- [ ] **Static site generator** — move to Eleventy/Jekyll so product pages
      build from data automatically. The JSON generator above is the
      stepping stone; this is the cathedral.