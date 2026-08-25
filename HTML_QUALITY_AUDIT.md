# HTML Code Quality Audit — all 23 HTML files

**Task:** t_53326dd3 · **Date:** 2026-08-25 · **Scope:** EN root (9), RO mirror (8), product pages EN (3) + RO (3). Total ~2,645 lines.

Severity legend: 🔴 critical (breaks users/build) · 🟠 important (real defect, should fix) · 🟡 minor · ⚪ cosmetic.

---

## 1. Repeated-pattern issues (fix once, apply everywhere)

### P1. 🟠 Dead links to non-existent pages (`href="#"` and hrefs to files never created)
Verified against the filesystem — these link targets do NOT exist anywhere:
- `items/textiles/layer-01.html` — linked from textiles.html:58, ro/textiles.html:66
- `items/decor/object-01.html` — decor.html:61, ro/decor.html:57
- `items/jewelry/metal-script-04.html` — decor.html:103
- `items/guests/guest-piece-01..04.html` — guests.html:61,78,95,112; ro/guests.html:66

Plus plain `href="#"` placeholders: textiles.html:72,86 · jewelry.html:92 · decor.html:75,89 · ro/textiles.html:80,93,106 · ro/jewelry.html:82,95,108 · ro/decor.html:66,75,84.
**Impact:** every placeholder `<a>` is a keyboard/touch target that navigates nowhere or scrolls to top. Fix: while a page doesn't exist, either drop the anchor wrapper entirely (keep the visual card as a div) or add `aria-disabled="true"` and a comment. Track real page creation in BACKLOG.md.
**Note:** this is a *known* pattern in the project (pre-photo-shoot scaffolding), but the audit checklist requires flagging it: it is the single largest quality gap across the site.

### P2. 🟠 Wrong-target copy-paste links inside exhibit grids
- textiles.html:100 — Piece 04 ("Caught Between the Tapestry…", a *textile*) links to `items/jewelry/metal-script-02.html`. Almost certainly a leftover from copying the jewelry grid. Should be a textiles item page.
- jewelry.html:106 — Piece 04 ("Raven's Eye") links to `metal-script-02.html`, same target as its own Piece 02 (jewelry.html:78). Duplicate destination for two different pieces.
- decor.html:103 — links to `items/jewelry/metal-script-04.html`: wrong category AND missing file (see P1).

### P3. 🟠 Commented-out dead code blocks (violates checklist #5)
The footer "Instagram haine / Instagram bijuterii" pair appears commented out in:
- ro/index.html:110–111 · ro/textiles.html:130–131 · ro/jewelry.html:127–128 · ro/items/jewelry/metal-script-01.html:111–112
And one stray bar in ro/jewelry.html:38: `<!-- <span class="bar"></span> -->`.
**Fix:** delete all of them. If the split-Instagram idea matters, it belongs in DECISIONS.md/BACKLOG.md, not as corpse markup in 4+ files.

### P4. 🟠 Stray TODOs written in Romanian inside EN files (checklist #5 + consistency)
- items/jewelry/metal-script-01.html:58 and metal-script-02.html:58 — `<!-- TODO: Înlocuiește div-ul de mai jos cu tag-ul <img> după ședința foto -->` sits in an English-language file (its neighbours' comments are English: line 56 "Placeholder for my high-res photography"). Same TODO correctly appears in the RO mirrors at ro/…/metal-script-01.html:59 and -02:52.
- The EN phrasing also says "de mai jos" ("below") but the placeholder div it refers to is *above* the comment — stale direction even in Romanian. Fix: translate to English in EN files ("Replace the div ABOVE with an <img> after the photo shoot") and fix the direction word in all four.

### P5. 🟠 Inconsistent `lang` attribute on the mobile menu button
EN root + product pages use `aria-label="Open Menu"`, but ro/decor.html:28 and ro/contact.html:32 kept `Open Menu` while all other ro/ files use `"Meniu"`. Also note index.html uses "Open Menu" with no state change — see A2 below about toggle behaviour.

### P6. 🟡 Bilingual mirroring drift (checklist #7)
The mirror pairs have diverged structurally in several places:
1. **ro/guests.html has only Guest 01** (line 64–79, ending with a helpful expansion hint at :81) while guests.html has Guests 01–04. Intentional trimming is fine but undocumented — one comment would prevent future confusion.
2. **ro/decor.html dropped ALL per-piece comments** (no "Piesa 01…04") and compressed each exhibit item to fewer lines, unlike every other exhibit page. It also silently changed piece 04: EN has `h-520` + title "Altars of Ashes (Mount Lykaion)" and a (broken) detail link; RO has `h-550`, "Altare de Cenușă", `href="#"`. The height-class mismatch changes the rendered layout vs. the EN page.
3. **ro/textiles.html piece 04** lost its detail link (EN: metal-script-02 — itself wrong per P2; RO: `#`). Once P2 is fixed both sides should get the correct textile link.
4. **ro/collection.html nav** points "Colecția" at `../collection.html` (the EN page!) at line 36, while every other nav item points into the RO tree. The Collection's own RO mirror exists (ro/collection.html) — self-link should be `collection.html`. Related: on ro/collection.html:37 the EN switch also goes to `../collection.html` which is correct only because there is no separate EN target issue — actually it IS correct there; the bug is line 36.
5. **ro/index.html:50** — same class of bug: "Colecția" → `../collection.html` (EN page) instead of `collection.html` (RO mirror).
   *(Check ro/textiles, ro/jewelry, etc.: they correctly use `../collection.html`? No — they also use `../collection.html` at e.g. ro/textiles.html:46. So ALL 8 ro/ pages link the nav "Colecția" to the EN collection page, even though ro/collection.html exists. This looks deliberate-ish (maybe collection was EN-only when written) but now that ro/collection.html exists it is a defect across the whole RO nav.)* → **Systemic fix: change nav Colecția href from `../collection.html` to `collection.html` in all 8 ro/ pages.**
6. **ro/collection.html translation quality** — several garbled words that will be user-visible: line 9 "dialoghe invitate / Feceată manual, unicată, viva"; line 47–48 "Fiecare piesă fecare de atelier, viva … fiecare unucă, țesut manual, non ligătu de niciun template"; line 53 "Totale" (should be "Toate"); line 67 "caboțe … rețeau" (should be "caboșoane … rețea"); alt text same issue. Suggested rewrite: *"Colecția Texxturalia — fiecare piesă unicat: învelișuri atavice, scriituri sacre, dialectici telurice și dialoguri invitate. Făcută manual, unică, cu voce tare."* / *"Fiecare piesă făcută de atelier, cu voce tare. Un catalog lent de gesturi — fiecare unicat, țesut manual, legat de niciun șablon."*
7. **ro/items/jewelry/orologiul-apelor.html:30** — `aria-label="Open Menu"` (English) unlike sibling RO product pages which use "Meniu".
8. Minor drift: ro/manifesto.html:36 writes "Scriituri sacrale" while other ro/ pages write "Scriituri sacre". Pick one term site-wide (the majority form is "Scriituri sacre").
9. ro/contact.html title is still "Texxt Us | Atelierul Texxturalia" (English brand pun kept) while h1 is "Scrie-ne" — acceptable branding choice, but worth one documenting comment since it looks like an untranslated leftover.

### P7. 🟡 Stale/noise teaching comments
- ro/index.html:3 — `<!-- Am schimbat limba -->` ("I changed the language"): a diary-style note past the point of usefulness. Replace with `<!-- lang="ro": declară limba paginii pentru screen readers și motoare de căutare -->`.
- ro/index.html:9 — "Traducere Meta Description pentru Google RO" states the obvious; keep or simplify to `<!-- Meta description în română pentru SEO -->`.
- items/jewelry/metal-script-01.html:68,81 — `<!-- Revelat ca bloc -->` ("revealed as block") explains nothing (mixed RO-in-EN again); metal-script-02 already had them removed — delete here too for parity.
- metal-script-01.html:101 `<!-- reveal = Butonul apare ultimul -->` (RO in EN file) — either translate or drop; -02 dropped it.
- metal-script-01/02.html:112 `<!-- Cale directă -->` — RO fragment in EN files; translate to `<!-- Direct path from items depth -->` or remove.
- ro/index.html:98–100 closing-tag echo comments (`<!-- închide .portal-grid -->`) exist ONLY in ro/index.html; no other file does this. Harmless but inconsistent — recommend removing (modern editors bracket-match) or adding everywhere (absurd). Remove.
- jewelry.html:104 & textiles.html:98 — `<!-- Piece 04 (piece 2 drops more, piece 4 drops less) -->`: cryptic shorthand referring to CSS offset behaviour; expand to name the mechanism, e.g. "Piece 04 — CSS nth-child offset lifts it slightly (mirrors piece 2's larger drop)". Same comment copied to decor/guests where offsets may differ — verify against style.css before keeping.

---

## 2. File-by-file findings

### EN root

**index.html**
- 🟡 :32 `<div class="logo">` inside the `<a>` — a block element wrapping inline content in a link is valid HTML5 but semantically odd; consider `<span class="logo">` (CSS likely unaffected if display is set). Applies to ALL 23 files via template.
- 🟡 :35 aria-label "Open Menu" — button never toggles label; fine if JS handles it, verify script.js updates it (see A2).
- 🟡 Hero is `<header class="hero">` containing the page's main content (h1 + portals) but there is **no `<main>`** on the homepage. Landmark structure: screen-reader users get nav + header + footer, no main. Fix: wrap hero in `<main>` (or make hero itself `<main>`-wrapped): recommended `<main><header class="hero">…</header></main>` or simply change tag to `<main class="hero">` keeping inner header for the h1 group. This is the most substantive semantic finding on EN root.
- ⚪ Numbered comments "1. NAVIGATION / 2. HERO SECTION" skip numbers (no 3) because footer lost its number; either renumber or drop numbering.

**textiles.html**
- P1 (`href="#"` ×2, layer-01 missing), P2 (:100 jewelry link on a textile piece), P7 (:98 cryptic offset comment).
- 🟢 Otherwise clean: good theme-class explanation absent here (jewelry/decor have it) — minor inconsistency, see pattern P9 below.

**jewelry.html**
- Best-commented exhibit page: the `.jewelry-theme` multi-class explanation (:46–50) is exactly the right didactic register. P1 (:92 `#`), P2 (:106 duplicate target).
- 🟡 The long logo-as-home comment (:23–25) is good but duplicated verbatim in 7 files — acceptable for a learning project; noted under consistency.

**decor.html**
- P1 (:61 object-01 missing, :75/:89 `#`, :103 metal-script-04 missing), P2 (:103 wrong category).
- 🟢 Theme-class comment present but abbreviated (:46) vs jewelry's fuller version — cosmetic.

**guests.html**
- P1 (all four guest-piece links target missing files — worse than `#` because they produce real 404s).
- 🟡 Placeholder content "Piece Title / by Artist Name" — expected pre-launch scaffold; ensure tracked in BACKLOG.
- 🟢 Structure/comments otherwise consistent.

**manifesto.html**
- 🟢 Cleanest page on the site. Correct `<article>` inside `<main>`, proper `<header>`/`<footer>` within the article (signature), good hierarchy h1 only. No findings beyond template-wide ones.

**collection.html**
- 🟢 Real `<img>`s with descriptive alt text (:73) — good.
- 🟡 Filter buttons (:52–63): buttons are correct elements ✓. Consider `aria-pressed` state management by script.js so AT users know which filter is active (verify script.js toggles `.active`; if so, add `aria-pressed` sync).
- 🟡 Only one product in grid; `<!-- Jewelry -->`/`<!-- /Bijuterie -->`-style open/close markers — the `/Closing` marker style appears here and ro/collection; fine but keep style consistent if more categories land.

**contact.html**
- 🟢 Clean. Correct heading order (h1 → h2 "The Working Process"). contact-grid uses divs — appropriate (not self-contained compositions). No findings.

**404.html**
- 🟢 Bilingual message is user-facing content (correctly not treated as a comment issue). `<main>` used properly.
- 🟡 No `<meta name="robots" content="noindex">` — customary on error pages so search engines don't index it. Add it.
- ⚪ Missing meta description (fine for 404, skip if desired).
- 🟡 Return link goes to `index.html` regardless of language — acceptable for a single-page bilingual fallback given the bilingual button label; optionally detect `navigator.language`.

### Product pages EN

**items/jewelry/metal-script-01.html**
- P4 (Romanian TODO at :58, stale "below" direction), P7 (:68, :81, :101, :112 RO fragments in EN file).
- 🟠 :64 `product-id` says "Object 01 — Jewelry" while the RO mirror says "Obiect 01" — consistent, fine; but note metal-script-02.html:64 ALSO says "Object 01" while its RO mirror (ro/...-02.html:57) says "**Obiect 02**". One of them is wrong: EN -02 should read "Object 02 — Jewelry".
- 🟢 Two-column product layout with section semantics is sound; sticky-visual comment helpful.

**items/jewelry/metal-script-02.html**
- Same P4 TODO (:58). Object-number bug above. Otherwise the cleaned twin of -01 — shows what the cleanup standard should look like.

**items/jewelry/orologiul-apelor.html**
- 🟢 First fully real page: gallery with buttons-as-thumbnails (correct element choice over clickable divs ✓), descriptive alts throughout, unique h1, secondary-title span for the cross-language name (nice touch).
- 🟡 Gallery thumb buttons lack accessible state: active thumb distinguished only visually via `.is-active`. Add `aria-pressed` (or `aria-current`) managed by script.js, plus `type="button"` on all 16 thumb buttons (they're outside a form so default submit is harmless, but explicit `type` is best practice).
- 🟡 Thumbs 03–17 alts are "photo N" — technically present but low-information; acceptable for a personal atelier, could inherit the piece name pattern already used ("The Clock of Waters — detail N").
- 🟡 16 near-identical 5-line blocks = 90 lines of markup; a candidate for later JS-driven rendering once the student learns templating. Not a defect.

### RO mirrors

**ro/index.html** — P3 (commented Instagram rows :110–111), P6.5 (nav Colecția → EN page), P7 (:3, :9, :98–100). Otherwise the most thoroughly commented RO file; the `../` path explanation (:14) is exemplary for the mirroring architecture.

**ro/textiles.html** — P1, P3 (:130–131), P6.3/P6.5. Good RO comment quality ("Piesa 01…" series).

**ro/jewelry.html** — P3 (:38 stray bar, :127–128), P6.5. Contains the project's best "learning scar": the long wrong-vs-correct href explanation at :67 — genuinely instructive but it's a fixed historical lesson attached to live code; suggest moving the lesson to LEARNING.md and leaving a one-line comment ("relative paths stay inside ro/ — see LEARNING.md §paths").

**ro/decor.html** — P6.2 (comment-stripped, layout-drifted, silent content divergence on piece 04). Needs re-syncing with the EN template.

**ro/guests.html** — P1 (guest-piece-01 missing), P6.1 (only one guest). The expansion-hint comment at :81 is good practice.

**ro/manifesto.html** — 🟢 Clean mirror; only P6.8 terminology drift and P6.5 nav issue. Mirrors the EN structure faithfully including `<article>` usage.

**ro/collection.html** — P6.4 (nav self-link bug), P6.6 (multiple garbled translations, user-visible). Highest-priority RO fix after the systemic nav issue.

**ro/contact.html** — P5 (kept "Open Menu"), P6.9 (title note). Otherwise faithful mirror.

**ro/items/jewelry/metal-script-01.html** — 🟢 Good: paths correctly go three levels up with explanatory comment (:12,:44), TODO correctly RO here. Consistent with EN twin except EN-side issues noted above.

**ro/items/jewelry/metal-script-02.html** — 🟢 Cleanest RO product page. Confirms "Obiect 02" numbering vs EN's "Object 01" bug.

**ro/items/jewelry/orologiul-apelor.html** — P5 variant (`aria-label="Open Menu"` at :30 instead of "Meniu"). Gallery same aria findings as EN twin. Translation has some rough spots (:121–124 "un strop cât un ocean legănat de un legăn…" reads awkward; "Teșere în rețeau" at :139 is garbled — likely "Împletire în rețele").

---

## 3. Accessibility summary (checklist #2)

| Check | Status |
|---|---|
| `lang` attribute per file | ✅ All 23 correct (`en` / `ro`) |
| alt text on real images | ✅ Present and descriptive (collection, both galleries) |
| Mobile menu button | ✅ Exists on all pages; ⚠️ label inconsistency (P5), no expanded-state signalling |
| Button vs link | ✅ Filters and gallery thumbs are `<button>`; nav/cards are `<a>` — correct choices |
| Heading hierarchy | ✅ Every page: exactly one h1; h2s only after it (guests artist cards, contact note, exhibit titles) |
| External links | ✅ All Instagram links carry `rel="noopener"` with `target="_blank"` |
| Icon-only / placeholder links | ⚠️ `href="#"` and dead-file links (P1) — keyboard traps to top-of-page |
| Landmarks | ⚠️ index.html lacks `<main>` (§index); all others correct |

## 4. Structure validation (checklist #3)

Doctype ✅ all 23 · charset ✅ · viewport ✅ · title ✅ unique per page · nesting/closing tags ✅ (no mismatches found on full read-through) · favicon + stylesheet paths verified correct for each directory depth (root ×1, ro/ ×2 levels, items/ ×2, ro/items/ ×3 — all `../` counts check out).

## 5. Summary table

| Group | Files | Critical | Important | Minor | Cosmetic |
|---|---|---|---|---|---|
| EN root | 9 | 0 | 7 (P1×3 files, P2×2, index main-missing, TODO/labels) | 6 | 3 |
| RO mirrors | 8 | 0 | 10 (nav-Colecția systemic, P3 dead code ×4, ro/collection translations, ro/decor drift) | 5 | 2 |
| Product EN | 3 | 0 | 4 (TODOs ×2, object-number, RO-in-EN comments) | 4 | 1 |
| Product RO | 3 | 0 | 2 (aria-label ×2) | 3 | 1 |
| **Total** | **23** | **0 critical** | **~23 important** | **18 minor** | **7 cosmetic** |

**Top 5 fixes by impact:**
1. Systemic: all 8 ro/ nav bars point "Colecția" at the EN `../collection.html` although ro/collection.html exists.
2. ro/collection.html user-visible garbled Romanian (title/description/filters/body/alt).
3. Dead/broken links in all exhibit grids (P1) + wrong-target links (P2).
4. Delete commented-out code blocks (P3) and translate/fix stray TODOs (P4).
5. Add `<main>` to index.html.

## 6. What's genuinely good (keep doing)

- Consistent 2-space indent, quoted attributes, lowercase tags across all 23 files.
- Path-depth discipline: every `../` count is correct at all four directory depths — the hardest thing in this architecture is being done right.
- The jewelry-theme multi-class explanation and the ro/jewelry relative-path lesson are model didactic comments.
- Semantic element choices (article for manifesto, button for interactive controls, rel=noopener) are consistently right.
