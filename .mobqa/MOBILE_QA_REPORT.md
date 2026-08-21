# Cross-page visual QA at mobile widths — t_9cc86da8

Date: 2026-08-21 · Method: headless Edge 151 (CDP), device-metrics emulation
at 390x844 (mobile) and 768x1024 (tablet), all 23 HTML pages (EN + ro/).
Screenshots: `.mobqa/*_390.png`, `.mobqa/*_768.png` (46 files).
Machine data: `.mobqa/results.json`, `.mobqa/interaction_checks.json`.

## Fail criteria
Any horizontal page scroll, clipped interactive element, or unusable control.

## Pass/fail table

| Page | 390 | 768 | Notes |
|---|---|---|---|
| index.html | PASS | PASS | hamburger opens nav (display:flex) |
| collection.html | PASS | PASS | docW 390/753 == viewport |
| jewelry.html | PASS | PASS | |
| decor.html | PASS | PASS | |
| textiles.html | PASS | PASS | |
| guests.html | PASS | PASS | |
| contact.html | PASS | PASS | |
| manifesto.html | PASS | PASS | |
| items/jewelry/orologiul-apelor.html | PASS* | PASS* | *thumbs strip overflows INTERNALLY by design |
| items/jewelry/metal-script-01.html | PASS | PASS | |
| items/jewelry/metal-script-02.html | PASS | PASS | |
| ro/index.html | PASS | PASS | |
| ro/collection.html | PASS | PASS | |
| ro/jewelry.html | PASS | PASS | |
| ro/decor.html | PASS | PASS | |
| ro/textiles.html | PASS | PASS | |
| ro/guests.html | PASS | PASS | |
| ro/contact.html | PASS | PASS | |
| ro/manifesto.html | PASS | PASS | |
| ro/items/jewelry/orologiul-apelor.html | PASS* | PASS* | same as EN twin |
| ro/items/jewelry/metal-script-01.html | PASS | PASS | |
| ro/items/jewelry/metal-script-02.html | PASS | PASS | |
| 404.html | PASS | PASS | no nav/hamburger by design; single CTA fits |

## Findings

1. **No horizontal page scroll anywhere.** documentElement.scrollWidth equals
   viewport on every page at both widths (docW 753 <= 768 due to scrollbar).

2. **Gallery thumbs flagged but NOT a defect.** On orologiul-apelor (EN+RO)
   only, `.gallery-thumb` buttons extend past the right edge at both widths.
   Verified: they live inside `.gallery-thumbs { overflow-x: auto }` — the strip
   scrolls internally (scrollWidth 1464 vs clientWidth 351 at 390px). Page-level
   scroll stays 390. This is an intentional swipeable thumbnail carousel.

3. **Hamburger menu works** on every page that has one (`button.mobile-menu-toggle`
   -> nav display:flex) across all checked pages at 390px. 404.html has no nav
   by design (single "return to source" CTA); not a fail.

4. **Gallery interaction verified** at 390px on both orologiul-apelor pages:
   thumbs swipeable + clicking thumb #2 swaps main image
   (orologiul-01.jpg -> orologiul-03.jpg). Both item galleries usable.

5. **Visual spot-check** (index_390.png, items_jewelry_orologiul-apelor_390.png):
   no overlap, clipping, or broken layout observed.

## Verdict: ALL PAGES PASS at 390x844 and 768x1024.
