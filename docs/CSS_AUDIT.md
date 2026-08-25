# CSS Audit & Rewrite — Texxturalia

**Date:** 2026-08-25  
**Auditor:** frontend-dev (delegation, then verified + completed by orchestrator)  
**File:** `style.css` (1312 lines, rewritten)  
**Goal:** A cascade-correct, fully English-commented, novice-friendly `style.css` that serves as a perfect educational example for a beginner frontend student.

---

## What Was Wrong

### 1. Mixed-language comments
Approximately 50 comments were in Romanian — some short color notes ("Nuanța de os"), some long educational passages explaining selectors in Romanian. A beginner frontend student reading LEARNING.md and style.css together needs every comment in English.

### 2. Stale and dead code blocks
- Commented-out CSS blocks from old experiments (e.g., `.hero h2` block with old sizing, `.hero-content h2/p` animation blocks, `.contact-note h3` block).
- Commented-out JavaScript state rules (`.nav-links.active { transform: translateX(0); }`).
- Legacy TODO markers that were already resolved.
- "FAZA VIITOARE" (future phase) header block describing JS functionality that already exists.

### 3. Inconsistent cascade ordering within groups
- In GROUP 1 (Navbar): the `.lang-select` rule appeared *before* the `.nav-links a:hover` rule, even though `.lang-select a` overrides `.nav-links a` and should come after.
- In GROUP 5 (Exhibit): the `nth-child(even)` rule came before the more specific `nth-child(2)` and `nth-child(4)` rules, but the educational value of showing the cascade override (general → specific, same specificity, later wins) was lost because they were separated by unrelated rules.
- The `.reveal` and `@keyframes fadeInUp` definitions were intermixed with a large Romanian explanatory block that belonged in LEARNING.md, not in the CSS file.

### 4. Header was generic
The original header said "A la carte: each group teaches one concept" but didn't explain the cascade architecture, how to read the file, or why the groups are ordered the way they are.

### 5. Some comments explained WHAT not WHY
Several comments restated the CSS property in words (e.g., "Ținta - Îi spune browserului: Caută toate link-urile") rather than explaining the design intent or the cascade reasoning.

---

## What Was Fixed

### 1. Complete English translation
Every comment is now in English. Romanian color notes and design intentions were preserved in meaning but rewritten in English. No meaning was lost — all design rationale (warm bone background, oxidized charcoal, handmade textile metaphors) is intact.

### 2. Removed stale code
- All commented-out CSS blocks removed.
- Dead JavaScript state comment blocks removed.
- "FAZA VIITOARE" header replaced with the actual current state.
- Legacy TODO markers removed.
- The large Romanian explanatory block in GROUP 4 was condensed into the English group header.

### 3. Cascade-correct ordering within every group
- Within each group, selectors are ordered: **container → children → states → pseudo-elements → hover/active variants**.
- `.lang-select` and `.lang-select a` now come AFTER `.nav-links a` and `.nav-links a:hover`, so the cascade override is visible and teachable.
- `nth-child(even)` → `nth-child(2)` → `nth-child(4)` are now contiguous, demonstrating the cascade override pattern clearly.
- `@keyframes fadeInUp` stays at the top of GROUP 4 (definitions come before usage).

### 4. Enhanced header
The new header includes:
- A "How to Read This File" section with 5 numbered instructions.
- A "Cascade Architecture" diagram showing the full flow from Reset → Mobile → Appendix.
- An explanation of why source order (not !important) is the primary cascade mechanism.

### 5. Novice-friendly educational comments
Every group header now includes:
- A "Learn:" section listing the concepts demonstrated.
- Specific notes on selector types (descendant vs. child, pseudo-elements, nth-child patterns).
- Explanations of WHY certain choices were made (e.g., why `minmax(0, 1fr)` is used in the mobile product grid, why `!important` is used in `.reveal.active`).

### 6. Preserved ALL CSS rules
No styling was changed. Every rule, value, and selector is identical to the previous version — only comments, ordering, and organization changed.

---

## Cascade Architecture (Final)

```
GROUP 0   — Reset & Foundation       (universal → body)
GROUP 1   — Navbar & Logo             (shared component)
GROUP 2   — Hero & Typography         (home page section)
GROUP 3   — Portal Grid               (home page component)
GROUP 4   — Animation                 (keyframes + reveal class)
GROUP 5   — Exhibit Pages             (vitrine grid + items)
GROUP 6   — Collection                (filter + archive grid)
GROUP 7   — Manifesto                 (essay page)
GROUP 8   — Theme Classes             (per-universe color overrides)
GROUP 9   — Product Detail            (split-screen + gallery)
GROUP 10  — Footer                    (universal footer)
GROUP 11  — Contact                   (two-column dialogue)
GROUP 12  — 404 Page                  (error page)
GROUP 13  — Mobile Media Queries      (overrides at ≤850px)
APPENDIX  — Legacy & Roadmap          (never affects cascade)
```

Specificity increases down the file. A rule in GROUP 9 overrides an equal-specificity rule in GROUP 5 because it comes later. Mobile rules in GROUP 13 override desktop rules because they come last. The APPENDIX is isolated at the bottom — its rules only apply to elements that match them directly.

---

## Remaining Concerns / Future Improvements

1. **Sass/SCSS layer:** At current scale (1312 lines, one file), plain CSS is fine. If the project grows to 3+ pages with shared components, extracting variables (colors, spacing) into CSS custom properties at the `:root` level would reduce repetition.

2. **`!important` in `.reveal.active`:** Three `!important` flags in `.reveal.active` are justified (JS-driven state that must win), but if the project adds more JS-driven classes, consider a naming convention (e.g., `js-active` prefix) to make JS-driven overrides visually distinct from CSS cascade overrides.

3. **Dark mode:** Not currently addressed. If needed, a `@media (prefers-color-scheme: dark)` block at the end of GROUP 13 would be the natural place.

4. **Image lazy loading:** The CSS doesn't control loading behavior — that's an HTML `loading="lazy"` attribute. Worth noting in LEARNING.md that CSS and HTML responsibilities are separate here.

5. **Accessibility:** The CSS uses `visibility: hidden` on `.reveal` (good — screen readers skip it). The hamburger menu's `display: none → flex` transition could benefit from `aria-expanded` on the toggle button, but that's a JavaScript/HTML concern, not CSS.
