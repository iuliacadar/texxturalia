# Learning Notes — Texxturalia

> Personal study log from building this project. Not project documentation —
> this is the growth record. (Kept for the journey; a technical reader can
> skip it.)

## HTML & CSS fundamentals

- **Hypertext**: text that "jumps" (links). **Markup**: tags that give
  structure (the skeleton).
- Brâncuși aesthetics in CSS: `letter-spacing: 0.05em` so forms breathe;
  `font-weight: 200/300` to mimic the chisel's fineness on stone.
- **Multiple classes vs grouped selectors**: in HTML, *space* separates
  classes on one element; in CSS, *comma* groups multiple selectors.
- Text alignment is per-role, not universal: `center` (hero — monumental),
  `justify` (manifesto — sculptural block, `text-justify: inter-word`),
  `left` (vitrines — documentary clarity).

## JavaScript, learned through the DOM

For a philosophy background, JS is not math but grammar of motion:
HTML = noun, CSS = adjective, JS = verb.

The five concepts already used:

1. **`document`** — the whole page as an object JS can touch. "If it's not in
   document, it doesn't exist for the script."
2. **`querySelector`** — naming: identifying an entity by its class name.
3. **`addEventListener`** — watchfulness: from potentiality (button could be
   pressed) to actuality (it was pressed).
4. **`classList.toggle`** — dialectics of states: JS changes classes, not
   styles directly. Element exists as state A or state B.
5. **`IntersectionObserver`** — phenomenology of presence: objects appear to
   the visitor's consciousness only at the moment of encounter (scroll).

Every script pattern reduces to: Declaration ("monitor this element") →
Condition ("if X happens") → Consequence ("add class Y").

Why the `<script>` tag sits at the end of `<body>`: browsers read top-down;
HTML/CSS must render first, and the elements the script manipulates must
already exist.

## Workflow lessons

- **TODO markers**: use `<!-- TODO -->` comments during wireframing to mark
  placeholder containers; lets the Ikebana asymmetry be tuned in CSS before
  final photography exists.
- **Relative paths are crucial**: managing `../` hops correctly is what keeps
  CSS/favicon/navigation unified across deep subfolders. Lesson confirmed by
  validating `metal-script-01.html` as the template standard.
- **Indentation**: 2 spaces everywhere.
- Just-in-time learning: hit a need ("menu hides on scroll") → look up that
  specific problem → implement. Better than trying to learn everything first.

## Product Ownership (self-management)

- Define the North Star: Texxturalia doesn't sell jewelry; it offers the
  collector a tangible link with the primordial abyss.
- MoSCoW prioritization against idea-noise.
- Map the user journey (visitor → inquiry email); simplify if too many steps.
- Ship the MVP: live and simple beats perfect and unfinished.

## Backend horizon (Project B)

After Texxturalia is done: SQL (storing products in tables, not HTML),
server logic (Python/Django or Flask), authentication. The current HTML then
becomes the template layer for database-driven data.
