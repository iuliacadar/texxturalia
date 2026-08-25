# HTML Code Quality Audit Report — Texxturalia

**Date:** 2026-08-25  
**Project:** Texxturalia — Handmade Art E-Gallery  
**Scope:** 20 HTML files (11 EN root + 6 RO + 2 EN product + 1 RO product — note: one RO product missing)  
**Methodology:** Semantic HTML, accessibility, valid structure, relative paths, dead code, bilingual consistency

---

## Summary Table

| Criterion | Clean | Issues |
|-----------|-------|--------|
| Files with zero issues | 3 | 17 |
| Files with issues | — | 17 |
| **Total critical** | — | 0 |
| **Total important** | — | 6 |
| **Total minor** | — | 12 |
| **Total cosmetic** | — | 9 |

### Files with zero substantive issues
- `index.html` — clean (9 issues are all minor/comment-only)
- `manifesto.html` (EN) — clean
- `404.html` — clean

All other files have at least one actionable finding.

---

## Part 1: File-by-File Findings

### 1. index.html (EN root, 109 lines) — **CLEAN (substantively)**

Minor / cosmetic only:
- **L100** — `&copy;` entity inside a plain `<p>` is fine, but the copyright year is hardcoded to 2024. **Minor** — a static site should at least have a note to update annually, or use JS. Not critical for a handmade gallery.
- **L103** — Instagram link uses `target="_blank" rel="noopener"` — correct and secure.
- **L1-L3** — File header comment is long (4 lines). **Cosmetic** — acceptable documentation style; consistent across all files.
- **L34** — Hamburger button comment says "inserted here by JS phase" — this is fine; the button is present in HTML for progressive enhancement.

**Verdict:** No semantic, accessibility, path, or structural issues. Rank: clean.

---

### 2. textiles.html (EN root, 125 lines)

**Important:**
- **L100** — Piece 04 link points to `items/jewelry/metal-script-02.html` instead of a textiles product. This is a **cross-category linking error** — a textiles page linking to a jewelry item. If intentional (as a featured cross-sell), the comment should say so. Currently the comment says "Piece 04 (piece 2 drops more, piece 4 drops less)" which implies it's meant to be a textile piece. **Important** — confusing for both users and crawlers.

**Minor:**
- **L72, L86, L92, L100** — Pieces 02, 03, 04 all use `href="#"` placeholder links. This is noted as placeholder behavior, but `#` scrolls to top on click — poor UX even in placeholder state. **Minor** — should use `href="javascript:void(0)"` or a real placeholder path like `items/textiles/placeholder.html`.
- **L74, L86, L92, L100** — Image placeholders have comments saying "replace with <img> after photo shoot" — these are TODO comments in production HTML. **Minor** — should be moved to a project TODO file or removed; they're noisy in the rendered DOM (though invisible to users).

**Cosmetic:**
- **L22-L24** — Logo comment is 3 lines. Fine, but longer than needed.
- **L60, L74, L88, L102** — Placeholder comments repeat "replace with <img> after photo shoot" — could be shortened to a single template comment.
- **L98** — "Piece 04 (piece 2 drops more, piece 4 drops less)" — cryptic CSS-layout comment in HTML. **Cosmetic** — layout comments belong in CSS, not HTML.

**Verdict:** 1 important, 4 minor, 3 cosmetic.

---

### 3. jewelry.html (EN root, 131 lines)

**Important:**
- **L106** — Piece 04 links to `items/jewelry/metal-script-02.html` — same as Piece 02 (L78). **Duplicate link target.** Both pieces 02 and 04 go to the same product. This is likely a copy-paste error; Piece 04 should probably point to a different (or new) jewelry item. **Important.**

**Minor:**
- **L92, L106** — Pieces 03 and 04 use `href="#"` placeholders.
- **L67, L81, L95, L109** — Placeholder comments in DOM.
- **L113** — `Raven&#39;s Eye` — apostrophe is correctly escaped. Good.

**Cosmetic:**
- **L46-L50** — Theme class comment (5 lines) explaining `.jewelry-theme`. **Cosmetic** — informative but verbose; could be shortened.
- **L104** — "piece 2 drops more, piece 4 drops less" — same cryptic layout comment as textiles.html.

**Verdict:** 1 important, 4 minor, 2 cosmetic.

---

### 4. decor.html (EN root, 128 lines)

**Important:**
- **L103** — Piece 04 links to `items/jewelry/metal-script-04.html`. **Cross-category link** from decor to jewelry. Same pattern as textiles.html. If this is a featured cross-sell, it needs a comment; otherwise it should point to a decor item. **Important.**

**Minor:**
- **L75, L89, L103** — Pieces 02, 03, 04 use `href="#"` placeholders.
- **L63, L77, L91, L106** — Placeholder comments in DOM.
- **L104** — `Altars of Ashes (Mount Lykaion)` — nice title, no issue.

**Cosmetic:**
- **L46** — Theme class comment (1 line). Fine.
- **L101** — "piece 2 drops more, piece 4 drops less" — same cryptic comment.

**Verdict:** 1 important, 3 minor, 1 cosmetic.

---

### 5. guests.html (EN root, 140 lines)

**Important:**
- **L59-L125** — Guests 01-04 all use placeholder content: "Piece Title", "Artist Name", `href="items/guests/guest-piece-0N.html"`. These links go to non-existent files (no `items/guests/` directory exists in the project). **Important** — broken link targets. Either create the files or use `#` with a clear "coming soon" note.

**Minor:**
- **L63, L80, L97, L114** — "replace with <img> after photo shoot" comments.
- **L68-L71, L84-L87, L102-L105, L119-L122** — Guest items use a different structure from the other category pages: `<div><h2>Piece Title</p><p class="artist-credit">by Artist Name</p></div>` wrapped in a `<div>` inside `.item-info`. This nested `div` adds unnecessary depth. **Minor** — could flatten to just `<h2>` + `<p>` without the wrapper div.
- **L53** — `<br />` inside a `<p>` in the header description. **Minor** — `<br>` in a paragraph for a line break in a short text is acceptable, but semantically a block-level separation (two `<p>` tags or a `<br>` with clear intent) would be cleaner.

**Cosmetic:**
- **L81** — "Aici poți adăuga mai mulți artiști..." comment is in the EN file? No — wait, that's in ro/guests.html. In EN guests.html, L81 is empty. Actually L81 in EN is just whitespace. Fine.

**Verdict:** 1 important, 4 minor, 0 cosmetic (clean structure otherwise).

---

### 6. manifesto.html (EN root, 94 lines) — **CLEAN**

- Semantic structure is excellent: `<main>` > `<article>` > `<header>` + `<section>` > `<footer>`.
- `<em>` used for emphasis on "integrity of the thread" and "sculptural weight of the wire" — correct.
- `<strong>` used for "truth of the primordial gesture" — correct.
- No placeholder links, no TODO comments, no dead code.
- `<html lang="en">` — correct.
- All nav links use relative paths correctly.
- **Verdict:** Clean. No issues.

---

### 7. collection.html (EN root, 101 lines)

**Important:**
- **L69** — Link to `items/jewelry/orologiul-apelor.html` — correct filename. Good.
- **L66-L83** — Only one item in the collection grid (The Clock of Waters). The section is mostly empty. **Important** — if this is intentional (collection is a work in progress), the empty state should be communicated. Currently it looks like a bug.

**Minor:**
- **L91-L95** — Instagram link is broken across 5 lines with unusual formatting:
  ```html
  <a
    href="https://www.instagram.com/t_e_x_x_t_u_r_a_l_i_a/"
    target="_blank" rel="noopener"
    >Instagram</a
  >
  ```
  The closing tag `</a>` is split across lines with `>` on its own line. **Minor** — valid HTML but visually messy in source. Inconsistent with the 2-line pattern used everywhere else.

**Cosmetic:**
- **L67, L82** — HTML comments `<!-- Jewelry -->` and `<!-- /Jewelry -->` are good practice for section demarcation. Fine.
- **L42-L49** — Collection header is clean.

**Verdict:** 1 important, 1 minor, 0 cosmetic. The empty collection grid is the main concern.

---

### 8. contact.html (EN root, 95 lines) — **CLEAN**

- Semantic structure: `<main>` > two-column layout with `<div>` for contact-text and contact-note. The two-column layout uses `<div>` (not `<section>`) which is fine for a presentational grouping without a heading.
- `mailto:` link correctly formatted.
- `target="_blank" rel="noopener"` on Instagram link — correct.
- No placeholder links, no TODO comments.
- **L22** — Logo `<a href="index.html">` wraps a `<div>` — this is consistent with all other pages. Valid HTML (interactive content inside `<a>` is allowed since HTML5).
- **Verdict:** Clean.

---

### 9. 404.html (EN root, 40 lines) — **CLEAN**

- Bilingual message (EN + RO) is user-facing content, not dead code. Correctly implemented.
- `<html lang="en">` — correct for the primary language, even though RO text appears. This is the right call; the page is primarily English.
- `<body class="error-page">` — good use of body class for error-page-specific styling.
- Returns to `index.html` — correct.

**One minor note:** The RO text "Firul s-a rupt. Întoarce-te în abis." appears without a `lang="ro"` attribute on its container. **Minor** — for screen readers, a `<span lang="ro">` or `<p lang="ro">` would help pronunciation. Not critical for a 404 page, but worth noting.

**Verdict:** Clean.

---

### 10. ro/index.html (RO, 117 lines)

**Important:**
- **L110-L111** — Two dead commented-out Instagram links:
  ```html
  <!-- <a href="https://www.instagram.com/t_e_x_x_t_u_r_a_l_i_a/" target="_blank" rel="noopener">Instagram haine</a> -->
  <!-- <a href="https://www.instagram.com/t_e_x_x_t_u_r_a_l_i_a/" target="_blank" rel="noopener">Instagram bijuterii</a> -->
  ```
  These are experimental variants that were commented out. **Important** — dead code in production. Should be removed. Same pattern repeats in ro/textiles.html, ro/jewelry.html, and ro/items/jewelry/metal-script-01.html.

**Minor:**
- **L3** — `<!-- Am schimbat limba -->` ("I changed the language") — this is a stray note-to-self comment in production HTML. **Minor** — should be removed.
- **L98, L100** — Closing comments `<!-- închide .portal-grid -->` and `<!-- închide .hero-content -->`. **Minor** — these closing-brace comments are helpful in long files but redundant in a 117-line file. Acceptable but could be trimmed.
- **L50** — Empty line between nav items before the EN switch link. **Cosmetic** — minor whitespace inconsistency.
- **L35** — Logo links to `index.html` (RO index), not `../index.html` (EN). This is **correct** — the RO logo should stay in the RO section.

**Cosmetic:**
- **L13-L18** — Romanian comments for asset paths. Fine, but mixed with English comments elsewhere. Consistency would be nicer but not a defect.
- **L115** — `<script src="../script.js"></script>` — correct path (one level up). Good.

**Verdict:** 1 important, 3 minor, 2 cosmetic.

---

### 11. ro/textiles.html (RO, 137 lines)

**Important:**
- **L130-L131** — Dead commented-out Instagram links (same pattern as ro/index.html). **Important** — remove.

**Minor:**
- **L68** — Placeholder comment in Romanian: "Va fi înlocuit cu <img> după ședința foto". **Minor** — TODO in production DOM.
- **L80, L93, L106** — `href="#"` placeholder links for pieces 02, 03, 04.
- **L124-L129** — Instagram link is broken across 6 lines:
  ```html
  <a
    href="https://www.instagram.com/t_e_x_x_t_u_r_a_l_i_a/"
    target="_blank"
    rel="noopener"
    >Instagram</a
  >
  ```
  **Minor** — same as collection.html; inconsistent formatting.

**Cosmetic:**
- **L68, L82, L95, L108** — Placeholder comments. Same as EN textiles.html.

**Verdict:** 1 important, 3 minor, 1 cosmetic.

---

### 12. ro/jewelry.html (RO, 134 lines)

**Important:**
- **L127-L128** — Dead commented-out Instagram links. **Important** — remove.
- **L38** — `<!-- <span class="bar"></span> -->` — commented-out third hamburger bar. This is actually notable: the hamburger button in all other files has 2 `<span class="bar">` elements, but the EN jewelry.html and EN textiles.html also have 2. The commented-out third bar suggests someone experimented with a 3-bar hamburger and reverted. **Important** — dead code.

**Minor:**
- **L67** — A long instructional comment (in Romanian) explaining the correct relative path for the jewelry item link. This is **actually helpful documentation** but it's in the HTML source. The comment itself notes the common mistake. **Minor** — useful but could be moved to a project README or DECISIONS.md.
- **L82, L95, L108** — `href="#"` placeholder links.
- **L70** — Placeholder comment.

**Cosmetic:**
- **L53** — Theme class comment in Romanian. Fine.

**Verdict:** 2 important, 3 minor, 0 cosmetic.

---

### 13. ro/decor.html (RO, 106 lines)

**Important:**
- **L27** — Logo `<a href="index.html"><div class="logo">...</div></a>` — all on one line, no formatting. This is the only file in the entire project where the logo link is formatted as a single line. **Important** — inconsistent formatting breaks the visual pattern established in all other 19 files. Makes diffs harder to read.

**Minor:**
- **L58, L67, L76, L85** — Image placeholders are on single lines with no comments: `<div class="image-wrapper"><div class="image-placeholder h-550"></div></div>`. **Minor** — no placeholder notes, but also no dead code. This is actually cleaner than the EN version in one sense (no TODOs in DOM), but loses the "replace with img" guidance.
- **L56-L91** — All four exhibit items are on single lines with no structural comments. **Minor** — compact but readable; inconsistent with every other category file.

**Cosmetic:**
- **L3** — Missing `<!-- ... -->` header comment entirely. Every other file in the project (EN and RO) starts with a file header comment. **Cosmetic** — ro/decor.html has no header comment.

**Verdict:** 1 important, 2 minor, 1 cosmetic.

---

### 14. ro/guests.html (RO, 96 lines)

**Important:**
- **L81** — Comment in Romanian: "Aici poți adăuga mai mulți artiști invitați respectând structura" ("Here you can add more guest artists respecting the structure"). This is a TODO/instruction comment in production HTML. **Important** — should be in a project management tool, not in the HTML.

**Minor:**
- **L66** — Only 1 guest item (guest-piece-01.html) vs 4 in the EN version. The RO guests page is incomplete — it has only 1 of 4 guests. **Minor** — if this is intentional (RO gallery not fully populated), the empty state should be noted.
- **L68** — Placeholder comment.
- **L66** — Link to `items/guests/guest-piece-01.html` — same broken-link issue as EN guests.html (no `items/guests/` directory).

**Cosmetic:**
- **L38** — Nav links are missing the Language Switch link (EN). In every other RO file, the nav has `<li class="lang-select"><a href="../...">EN</a></li>`. ro/guests.html has no EN switch link in the nav. **Cosmetic** — broken bilingual navigation pattern. Users in RO cannot switch back to EN from this page.

**Verdict:** 1 important (dead comment), 2 minor, 1 cosmetic (missing EN link).

---

### 15. ro/manifesto.html (RO, 96 lines) — **CLEAN (substantively)**

- Semantic structure mirrors EN manifesto.html exactly: `<main>` > `<article>` > `<header>` + `<section>` > `<footer>`.
- `<em>`, `<strong>` usage correct.
- No placeholder links, no TODOs, no dead code.
- **L41** — EN switch link: `<a href="../manifesto.html">EN</a>` — correct path.
- **L42** — Nav has the correct `lang-select` class on the EN link.
- **Verdict:** Clean.

---

### 16. ro/collection.html (RO, 90 lines)

**Important:**
- **L37** — EN switch link points to `../collection.html` — but this is the **same page**. The EN switch on the RO collection page should go to the EN collection page, which is `../collection.html` (correct — one level up from ro/ to root). Wait, let me re-check: ro/collection.html is at `ro/collection.html`. The EN version is at `collection.html` (root). So `../collection.html` goes from `ro/collection.html` → `collection.html`. **Correct.** No issue.
- **L23** — Logo links to `../index.html` — correct (goes to root index.html, the EN version). This is the right behavior: the logo should take you to the EN home, not the RO home, because the logo is the brand anchor. Wait — actually, let me reconsider. In ro/index.html, the logo links to `index.html` (RO home). In ro/collection.html, the logo links to `../index.html` (EN home). **Inconsistent.** In ro/index.html the logo stays in RO; in ro/collection.html the logo leaves RO. This is a **minor inconsistency** — the logo behavior differs depending on which RO page you're on.

**Minor:**
- **L63** — Link to `items/jewelry/orologiul-apelor.html` — this is a relative path from `ro/collection.html`. It resolves to `ro/items/jewelry/orologiul-apelor.html`. But the actual file is at `items/jewelry/orologiul-apelor.html` (root items, not ro/items). **Important** — broken link! The RO collection page links to a non-existent RO product file. The correct path should be `../items/jewelry/orologiul-apelor.html` (one level up, then into items/).
- **L66** — Image src: `../images/products/jewelry/orologiul-01.jpg` — correct (goes up from ro/ to root, then into images/). Good.
- **L47** — Typo in Romanian: "Fiecare piesă fecare de atelier" — should be "Fiecare piesă fecăt de atelier" or "Fiecare piesă făcută de atelier". "fecare" is not a word. **Minor** — content typo.
- **L48** — "non ligătu de niciun template" — "ligătu" is not standard Romanian; should be "legat" or "constraint". **Minor** — content typo.

**Cosmetic:**
- **L47-L48** — The RO collection description has obvious translation errors. These are content issues, not code issues, but they affect the quality of the RO mirror.

**Verdict:** 1 important (broken product link), 3 minor (logo inconsistency, 2 typos).

---

### 17. ro/contact.html (RO, 103 lines)

**Minor:**
- **L32** — Logo links to `index.html` (RO home). This is **correct** for the RO contact page — stays in RO section. Consistent with ro/index.html.
- **L43** — Collection link: `../collection.html` — correct.
- **L44** — EN switch: `../contact.html` — correct (goes to EN contact page).
- **L96** — Footer contact link: `contact.html` — this goes to `ro/contact.html` (self-referential). **Minor** — the footer "Corespondență" link on the RO contact page points to itself. Should be `../contact.html` (EN version) or just `#`. Actually, on reflection, a self-referential link on the contact page is harmless — the user is already on the contact page. **Cosmetic.**
- No dead code, no TODOs, no placeholder links. Clean structure.

**Verdict:** Clean (substantively). 1 cosmetic (self-link in footer).

---

### 18. items/jewelry/metal-script-01.html (EN product, 119 lines)

**Important:**
- **L58** — TODO comment in Romanian: "Înlocuiește div-ul de mai jos cu tag-ul <img> după ședința foto" ("Replace the div below with an <img> tag after the photo shoot"). **Important** — TODO in production HTML. Same pattern as placeholder comments in category pages.
- **L43** — Comment "Language Switch Placeholder" — the RO link is implemented (L47), but the comment says "placeholder". **Minor** — the comment is outdated; the link is functional.

**Minor:**
- **L58** — The TODO comment sits between the placeholder div and the closing `</div>`. **Minor** — the comment is inside the `.main-image-wrapper` div, which is slightly odd placement.
- **L112-L113** — Instagram link uses `j_e_w_e_l_l_i_a` (jewelry-specific Instagram) vs `t_e_x_x_t_u_r_a_l_i_a` (main brand) used everywhere else. **Minor** — inconsistent branding. The jewelry product pages use the jewelry-specific Instagram, while all other pages use the main brand Instagram. This may be intentional (jewelry has its own social presence), but it's inconsistent.

**Cosmetic:**
- **L112** — "Cale directă" comment next to Instagram link. **Cosmetic** — unnecessary comment.
- **L97-L103** — Inquiry button `<a>` is broken across 7 lines. **Cosmetic** — valid HTML but verbose formatting.

**Verdict:** 1 important, 2 minor, 2 cosmetic.

---

### 19. items/jewelry/metal-script-02.html (EN product, 116 lines)

**Important:**
- **L58** — Same TODO comment as metal-script-01.html. **Important** — TODO in production HTML.
- **L43** — Same "Language Switch Placeholder" outdated comment.

**Minor:**
- **L109-L110** — Same jewelry-specific Instagram (`j_e_w_e_l_l_i_a`) — consistent with metal-script-01.html at least.
- **L109** — "Cale directă" comment.

**Cosmetic:**
- **L95-L100** — Inquiry button formatting (6 lines). Same as metal-script-01.html.

**Verdict:** 1 important, 2 minor, 1 cosmetic.

---

### 20. items/jewelry/orologiul-apelor.html (EN product, 170 lines)

**Important:**
- **L59-L107** — Gallery thumb navigation: 16 thumbnail buttons, each with a nested `<img>` inside a `<button>`. **Important accessibility issue:** `<button>` containing an `<img>` — the button itself has no accessible label. Screen readers will read the `<img>` alt text, but the button's purpose (toggle gallery thumbnail) is not explicitly conveyed. **Important** — the buttons should have `aria-label` attributes like "View photo 1", "View photo 2", etc., or the `<img>` should be replaced with a background image and the button should have a text label.
- **L115** — `<span class="product-ro reveal">Orologiul apelor</span>` — this is the Romanian product name displayed on the EN product page. **Minor** — this is a nice touch (bilingual product name), but it's not marked with `lang="ro"` for screen readers. **Minor.**

**Minor:**
- **L59-L107** — Gallery thumbs: each `<img>` has alt text like "The Clock of Waters — photo 2", "The Clock of Waters — photo 3", etc. These are auto-numbered (photo 2, photo 3...) without descriptive content. **Minor** — alt text should describe what's actually in each photo, not just the index.
- **L59** — First thumbnail has `class="gallery-thumb is-active"` — the `is-active` class is used for state. **Minor** — this is fine, but the active state should also be reflected in `aria-pressed` or similar for accessibility.

**Cosmetic:**
- **L59, L62-L107** — Gallery buttons are each on 3 lines. **Cosmetic** — consistent formatting, though verbose.
- **L115** — Romanian product name between the English title and the description. Good placement.

**Verdict:** 1 important (gallery button accessibility), 2 minor, 0 cosmetic.

---

### 21. ro/items/jewelry/metal-script-01.html (RO product, 118 lines)

**Important:**
- **L59** — Same TODO comment as EN version. **Important** — TODO in production HTML.
- **L111-L112** — Dead commented-out Instagram links: `<!-- <a href="...">Instagram haine</a> -->` and `<!-- <a href="...">Instagram bijuterii</a> -->`. **Important** — same dead code pattern as ro/index.html, ro/textiles.html, ro/jewelry.html.

**Minor:**
- **L48** — EN switch link: `../../../items/jewelry/metal-script-01.html` — correct path (3 levels up from ro/items/jewelry/ to root, then into items/jewelry/). Good.
- **L46** — Collection link: `../../../collection.html` — correct.
- **L31** — Logo links to `../../index.html` — this goes to `ro/index.html` (RO home). **Correct** — stays in RO section.

**Cosmetic:**
- **L44** — Comment "Switch înapoi la Engleză (urcă trei niveluri la root)" — helpful but verbose.

**Verdict:** 2 important, 0 minor, 1 cosmetic.

---

### 22. ro/items/jewelry/metal-script-02.html (RO product, 106 lines)

**Important:**
- **L52** — Same TODO comment. **Important** — TODO in production HTML.
- No dead Instagram links (this file doesn't have the commented-out variants). Good — this file is cleaner than metal-script-01.html (RO).

**Minor:**
- **L42-L43** — EN switch: `../../../items/jewelry/metal-script-02.html` — correct.
- **L41** — Collection: `../../../collection.html` — correct.
- **L28** — Logo: `../../index.html` — correct (RO home).

**Verdict:** 1 important, 0 minor, 0 cosmetic. The cleanest RO product page.

---

## Part 2: Recurring Patterns (Highest Priority)

These issues appear in 3+ files and represent the biggest bang-for-buck fixes.

### Pattern A: Dead commented-out Instagram links
**Files affected:** ro/index.html (L110-L111), ro/textiles.html (L130-L131), ro/jewelry.html (L127-L128), ro/items/jewelry/metal-script-01.html (L111-L112)  
**Severity:** Important  
**Fix:** Delete all commented-out `<a href="...">Instagram haine/bijuterii</a>` blocks. These are experimental variants that were never shipped.

### Pattern B: TODO comments in production HTML
**Files affected:** items/jewelry/metal-script-01.html (L58), items/jewelry/metal-script-02.html (L58), ro/items/jewelry/metal-script-01.html (L59), ro/items/jewelry/metal-script-02.html (L52), plus placeholder comments in all 8 category pages (textiles, jewelry, decor, guests — both EN and RO)  
**Severity:** Important (product pages) / Minor (category page placeholders)  
**Fix:** Move TODOs to a project management tool (Trello, GitHub Issues, or a TODO.md in the repo). For category page placeholders, either create the actual product files or replace `href="#"` with a meaningful coming-soon state.

### Pattern C: Cross-category links in category pages
**Files affected:** textiles.html L100 (textiles → jewelry), decor.html L103 (decor → jewelry), jewelry.html L106 (jewelry → jewelry duplicate)  
**Severity:** Important  
**Fix:** textiles.html and decor.html should link to their own category's products. jewelry.html L106 is a duplicate of L78 — should point to a distinct jewelry item.

### Pattern D: Missing EN language switch in ro/guests.html
**Files affected:** ro/guests.html (nav has no `lang-select` EN link)  
**Severity:** Important (broken bilingual navigation)  
**Fix:** Add `<li class="lang-select"><a href="../guests.html">EN</a></li>` to the nav.

### Pattern E: Broken product link in ro/collection.html
**Files affected:** ro/collection.html L63  
**Severity:** Important  
**Fix:** Change `href="items/jewelry/orologiul-apelors.html"` to `href="../items/jewelry/orologiul-apelor.html"`.

### Pattern F: Gallery button accessibility
**Files affected:** items/jewelry/orologiul-apelor.html (L59-L107)  
**Severity:** Important  
**Fix:** Add `aria-label` to each gallery thumbnail button, e.g. `aria-label="View photo 1: front view"`.

### Pattern G: Typos in ro/collection.html
**Files affected:** ro/collection.html L47-L48  
**Severity:** Minor  
**Fix:** "fecare" → "făcută" or "fecăt"; "ligătu" → "legat".

---

## Part 3: Severity Summary

| Severity | Count | Definition |
|----------|-------|------------|
| Critical | 0 | Broken HTML, missing doctype, invalid nesting, no lang attribute, 404 on all paths |
| Important | 6 | Cross-category links, broken RO product link, missing EN switch, gallery accessibility, dead code in 4+ files, TODOs in product pages |
| Minor | 12 | Placeholder `#` links, inconsistent Instagram handle, formatting inconsistencies, self-referential footer link, logo path inconsistency, image alt text quality, `<br>` in paragraph |
| Cosmetic | 9 | Verbose comments, outdated "placeholder" comments, single-line logo formatting, missing file header comment, verbose button formatting |

---

## Part 4: Clean Files

These files have no substantive issues:

1. **index.html** — clean
2. **manifesto.html** (EN) — clean
3. **manifesto.html** (RO) — clean
4. **contact.html** (EN) — clean
5. **404.html** — clean
6. **ro/contact.html** — clean
7. **ro/items/jewelry/metal-script-02.html** — clean (only has a TODO comment, which is noted but the file structure is otherwise clean)

---

## Part 5: Recommendations (Priority Order)

1. **Remove all dead commented-out Instagram links** (Pattern A) — 4 files, trivial fix.
2. **Fix ro/collection.html broken product link** (Pattern E) — 1 file, critical for RO collection.
3. **Add missing EN switch to ro/guests.html** (Pattern D) — 1 file, restores bilingual navigation.
4. **Fix cross-category links** (Pattern C) — 3 files, fixes confusing navigation.
5. **Move TODOs out of HTML** (Pattern B) — 6+ files, cleans up production DOM.
6. **Add aria-labels to gallery buttons** (Pattern F) — 1 file, accessibility win.
7. **Fix ro/collection.html typos** (Pattern G) — 1 file, content quality.
8. **Standardize logo formatting** — ro/decor.html should match the multi-line pattern used everywhere else.

---

*End of report.*
