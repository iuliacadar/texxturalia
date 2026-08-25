# DOCUMENTATION.md — Texxturalia Interactive Manual Notes

# 0. Aesthetic Vision (Design Philosophy)

- **Foundation (Brancusi)**: Reduction to essence. Pure form, liberated from decoration.
- **Atmosphere (Richard Moult)**: Mystical naturalism. An aesthetic of solitude, the telluric landscape, and heavy, almost religious quiet.
- **Rhythm (Ikebana)**: Asymmetric tension. The void (white space) is not empty — it is an active compositional element.
- **Super-atmosphere (Schiaparelli)**: The object as an extension of the body. A tactile deconstruction that transforms garments and accessories into visceral symbols.
- **Palette: Bone & Oxide:** Replacing industrial colors with organic shades that suggest the passage of time and the transformation of matter. "The reduced contrast between the #f2f0eb (bone) background and #2c2c2c (oxide) text eliminates digital aggression, giving the site a vibe of a physical, timeless archive."

## 0.0. Static Site for an Author E-Shop (One-of-a-Kind Pieces)

Choosing a static site (clean HTML/CSS) is ideal for your artist profile. Here's why:

| Criterion | Advantage for Texxturalia |
|---|---|
| Maximum Visual Identity. | Not limited by the rigid templates of online stores. Your site is an extension of your art. |
| Conversational Sales Model. | For expensive, one-of-a-kind pieces, clients appreciate human confirmation ("Is the piece available?"). |
| Minimal Cost & Maintenance. | Free hosting (Netlify/GitHub Pages). No databases that can fail, no plugins that need constant updating. |
| Superior Speed & Security. | Static sites are practically impossible to break and load instantly, delivering a luxury experience. |
| Strong SEO Sustainability. | Search engines love clean code. Over time, your portfolio becomes a valuable archive of your work. |
| Strategic Conclusion: | Stay with this structure. It transforms the purchasing process from a simple "click" into an art acquisition experience. The only extra effort will be manually updating the product page (e.g. adding "Sold" text or moving to "Archive") when a piece finds its owner. |

## 0.1: Aesthetic Vision (The Primordial Dialogue)

- **Atavic Envelopes (formerly Layers)**: An interrogation of the body as the first sanctuary of the spirit. Textile does not clothe, it shelters.
- **Sacral Scripts (formerly Scripts)**:
  - The gesture of writing in metal. Copper, as a primary telluric element, becomes the support for a spatial calligraphy. The love for copper reflects the attraction to materials that "live" and transform under touch.
  - Silver wire as a ritual gesture, a writing in space that "sacrifices" the silence of metal to create form.
- **Telluric Dialectics (formerly Dialectics)**: Decorative objects that seem extracted directly from the soil, establishing a dialogue between the weight of the earth and the void of the room.

## 0.2: Vitrines

- _"Arachne"_ represents the tutelary divinity of the textiles vitrine.

---

# I. HTML & CSS

## I.1. Basic Concepts (HTML)

- **Hypertext**: Text that "jumps" (links).
- **Markup**: Tags that give structure (the skeleton).

## I.2. Brancusi Aesthetic (CSS)

- _Letter-spacing_: 0.05em to let forms breathe.
- _Font-weight_: 200/300 to simulate the fineness of a chisel on stone.

> "Simplicity is not a goal in art, but we arrive at it without our will, approaching the real meaning of things." — C. Brancusi

## I.3. Texxturalia Project Architecture:

```
TEXXTURALIA_PROJECT/
│
├── index.html              (Main gateway - the Portals)
├── style.css               (Universal aesthetic code - Brancusi style)
├── manifesto.html          (Brand vision and philosophy)
│
├── textiles.html           (General showcase: clothes/layers)
├── jewelry.html            (General showcase: jewelry/wire)
├── decor.html              (General showcase: objects/space)
├── guests.html             (Guest designers showcase)
│
├── /images/                (Visual archive)
│   ├── /branding/          (Logo, icons, hero background images)
│   └── /products/          (All exhibit photos)
│       ├── /textiles/
│       ├── /jewelry/
│       └── /decor/
│
└── /items/                 (Folders with individual exhibit sheets)
    ├── /textiles/          (e.g.: layer-textile-01.html, dress-02.html)
    ├── /jewelry/           (e.g.: metal-script-01.html, necklace-05.html)
    └── /decor/             (e.g.: spatial-object-01.html)
```

```
TEXXTURALIA_PROJECT/
│
├── index.html              (EN - Home)
├── jewelry.html            (EN)
├── textiles.html           (EN)
├── ... rest of EN files
├── style.css               (Universal)
│
├── /ro/                    <-- HERE (New folder for the Romanian version)
│   ├── index.html          (RO - Home)
│   ├── jewelry.html        (RO)
│   └── ... rest of translated pages
│
├── /images/                (Universal)
└── /items/                 (Universal - both languages can link here)
```

## I.4. Backlog (ToDo list):

## 🚀 Future Evolution (JavaScript Phase)

### Menu Interactivity

- [x] **Hamburger Method**: Implementation of an overlay menu for small screens.
- **Philosophy**: Hiding visual noise on mobile to let the Logo breathe.
- **Technique**: Will require CSS class manipulation (`classList.toggle`) via JS.

### Animals & Micro-interactions

- [x] Scroll reveal for vitrine images.
- [x] **Hamburger Implementation**: Using `document.querySelector('#mobile-menu')` to listen for clicks and `classList.toggle('active')` to show the menu on mobile.

## I.5. Aesthetic Direction: Abstracted Naturalism

- **References**: Richard Moult (atmosphere), Schiaparelli (tactility/contrast), Ikebana (asymmetry).
- **Elements to follow**:
  - Replacing clinical white with parchment/bone shades.
  - Moving from perfect grids to asymmetric compositions (visual rhythm).
  - Photo filters that suggest archive/oxidized metal.

## I.6. CSS File Architecture (Organization System)

To maintain the "Brancusi" style coherence and avoid code conflicts, the `style.css` file follows a hierarchy from **General** to **Specific**:

1. **Reset & Root**: Basic settings (box-sizing, background colors) and font imports.
2. **Shared Components**: Elements that appear on all pages (Navbar, Logo, Nav-links).
3. **Home Page**: Styles specific to `index.html` (Hero section, Portal-grid).
4. **Exhibit Pages (Vitrines)**: The asymmetric "Ikebana" grid for Jewelry, Textiles, and Decor sections.
5. **Product Details**: Style of individual exhibit sheets from the `/items/` folder.
6. **Media Queries**: Mobile adaptation and split-screen (Always last to override desktop rules).

> _Golden Rule:_ Any layout change for mobile is done in section 6, referencing classes defined in earlier sections.

## I.7. Multilingual Planning (Post-Production)

- **Method**: Mirroring in the `/ro/` folder.
- **Advantage**: Total control over poetic nuances (e.g.: "Metal Scripts" vs "Scrieri in Metal").
- **Workflow**:
  1. Finalize the EN structure.
  2. Create the `ro` folder.
  3. Copy `.html` files into `ro` and update the CSS path: `../style.css`.

## I.8. Chromatic Themes (Vitrine Atmospheres)

To differentiate the brand's sensory universes (Abstracted Naturalism), I used specific classes on the `<main>` element that adjust exhibit backgrounds, keeping the asymmetric structure intact:

- `.textile-theme .image-wrapper`: Linen/cotton shades (#f2f0eb).
- `.decor-theme .image-wrapper`: Stone/concrete shades (#e8e8e8).
- `.guests-theme .image-wrapper`: Neutral gallery shade (#f7f7f7).

Chromatic Unification: Adopting #2c2c2c as the global standard for text and linear graphic elements, eliminating industrial black in favor of an organic palette.

## I.9. The Golden Rule of Connectivity (HTML Head)

Every new page (`.html`) must be a complete document to be styled.

- **The `<head>` element**: Must obligatorily contain the link to `style.css` and the Google Fonts import.
- **The `<nav>` component**: Is copied identically on all vitrine pages to ensure "Seamless Navigation" (fluid navigation).

## I.10. Collection Management (Curation vs. Catalog)

- **Numbering**: The numeric prefix (01, 02...) is used to emphasize the limited/one-of-a-kind series character.
- **Visual Rhythm (Ikebana)**: Using the CSS `:nth-child(even)` selector to push even pieces lower, creating a natural asymmetry that slows the scroll rhythm and invites observation.

## I.11. Element Hierarchy in Vitrines

Each exhibit is composed of:

1. `image-wrapper`: The virtual frame of the object.
2. `item-info`: The metadata zone (piece number + title).
3. `item-number`: Small Montserrat font (0.65rem), grey color, for documentary precision.

## I.12. The Manifesto Page (Typographic Essay)

- **Concept**: Treating text as a sculptural object. Emphasis falls on negative space (white) and character hierarchy.
- **Contrasting Typography**:
  - _Cormorant Garamond Italic_: Used for titles (`4rem`) and the introductory paragraph (lead), offering a poetic, human note.
  - _Montserrat_: Used for body text, offering stability and modern clarity.
- **Layout**: Centering content at `700px` to ensure optimal line length for reading (publisher/gallery standard).

## I.13. Bilingual Implementation (Mirroring Strategy)

To maintain total editorial control, I chose the **Static Mirroring** method:

- **Structure**: The `/ro/` folder contains faithful replicas of the EN HTML files, but with translated text.
- **Style Management**: The same `style.css` file is used for both languages, ensuring visual unity.
- **Relative Path (Important!)**: In secondary folders (like `/ro/` or `/items/`), the CSS link becomes `../style.css` to "go up" one level in the folder hierarchy.

Nota bene: Every file at the root must have 100% English content, leaving translations exclusively for the `/ro/` folder, to avoid user confusion and search engine confusion.

Nota bene (Mirror Integrity): Structural unity between bilingual versions is critical. Any opening or mistakenly deleted `<div>` tag in one language will break the mirror symmetry, turning an ordered grid into a chaotic list. Code must remain identical in structure, changing only the "matter" (text).

## I.14. Checklist for New Pages

Every time I create a new page, I must check:

1. [x] Correct connection to `style.css`.
2. [x] Complete Google Fonts import in `<head>`.
3. [x] Presence of the shared `<nav>` component (Menu).
4. [x] Specific class on the `<main>` tag (e.g: `.textile-theme`) for chromatic ambiance.

## I.15. Source Code: Universal Structure (HTML)

### Basic Structure (Template)

All vitrines (`jewelry`, `textiles`, etc.) use this skeleton:

```HTML

<main class="exhibit-container [theme-specific]">
    <header class="exhibit-header">
        <h1>[Concept Title]</h1>
        <p>[Philosophical Description]</p>
    </header>
    <section class="exhibit-grid">
        <!-- Item Block -->
        <div class="exhibit-item">
            <a href="items/[category]/[piece-name].html">
                <div class="image-wrapper"> [Image/Placeholder] </div>
                <div class="item-info">
                    <span class="item-number">01</span>
                    <h3>[Piece Name]</h3>
                </div>
            </a>
        </div>
    </section>
</main>
```

## I.16. Visual Logic: CSS (Synthesis)

### The Ikebana Style (Asymmetry)

This is the visual core of the Texxturalia vitrines:

```css
/* The basic grid */
.exhibit-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 150px 80px;
  align-items: start;
}

/* Asymmetry rule for visual rhythm */
.exhibit-item:nth-child(even) {
  margin-top: 200px;
}
```

## I.17. Text Alignment Logic (Sculpted Typography)

I chose not to use a universal alignment, but one adapted to each element's role, to create contrast between "monumental" and "documentary":

- **Center (Hero/Portals)**: Used for Brancusi-balance and symmetry at the entry gate (`index.html`).
- **Justify (Manifesto)**: Long text is aligned to both edges to create a solid "text block", similar to a gallery plaque or an art essay page.
- **Left (Vitrines/Products)**: Used for clarity and documentary rigor in describing one-of-a-kind pieces.

## I.18. Circular Navigation (Home Button Logic)

In a minimalist site, the Logo takes over the "Home" button function to keep the interface clean:

- **Structure**: I wrapped the `.logo` element in a link (`<a>`) to `index.html`.
- **Path Problem**: For pages in folders (e.g: `/items/jewelry/`), the link must go up two levels: `../../index.html`.

## I.19. Styling Navbar Links (Descendant Selector)

To prevent the Logo (now a link) from changing to blue or being underlined, I used the `.navbar a` selector:

- **`text-decoration: none`**: Removes the line under the text.
- **`color: inherit`**: Forces the link to inherit the color defined earlier in `.logo` or `.nav-links`, keeping the visual identity intact.

## I.20. Alignment Hierarchy (UX & Aesthetic)

I decided not to use a universal alignment, but one adapted to context:

- **`center` (Hero)**: For symmetry and monumentality at site entry.
- **`justify` (Manifesto)**: To create a solid, sculptural text block, using `text-justify: inter-word`.
- **`left` (Vitrines)**: For clarity and a modern, editorial look.

## I.21. "Split Screen" Layout for Exhibits (Composition)

For individual product pages, I chose a format that separates the visual experience from the informative one:

- **`position: sticky`**: The object image remains fixed on the left, while the descriptive text flows on the right.
- **Effect**: Suggests stability and allows observing details while reading the object's story.

## I.22. One-of-a-Kind Management (Manual vs. Automatic)

- **Current Method**: Each exhibit receives its own HTML page duplicated from a template.
- **Advantage**: Allows customizing the visual narrative for each piece individually, treating each page as a separate work.

## I.23. Adaptive Design (Mobile & Split Screen) (Functionality)

I defined a break point at `850px` to ensure readability:

- **Vertical Hierarchy**: Menu and grid elements transition from horizontal to vertical layout (`flex-direction: column` and `grid-template-columns: 1fr`).
- **Brand Integrity**: Using `white-space: nowrap` on the Logo guarantees it will never break vertically, no matter how narrow the screen.
- **Simplification**: Removing asymmetry (`margin-top`) in vitrines on mobile to maintain a clean, predictable scroll flow.

Nota bene: Future automation will use Python for logic and Django as the management structure (Backend). Current HTML will serve as the "Matrix" (Template) for data automatically extracted from a database.

## I.24. Visual Identity: Favicon

- **Location**: `/images/branding/favicon.ico`.
- **Implementation**: Link is made via the `<link rel="icon">` tag.
- **Path Rule**:
  - Root Level: `href="images/..."`
  - Level 1 (Folder /ro/): `href="../images/..."`
  - Level 2 (Folder /items/): `href="../../images/..."`
    > _Purpose_: Ensuring brand identity on every page, regardless of folder depth in the hierarchy.

## I.25. Finishing Touches: SEO and Footer

## 1. Invisible Anatomy (Metadata) / Gnosis of Visibility (SEO Protocol)

For art objects to be found in the "digital abyss", we must provide search engines with textual clues that reflect their sidereal nature.

1. **Image Ritual**
   - File name: Don't use generic names. Rename files before upload: silver-sculpture-sideral-01.jpg.
   - ALT attribute (Textual Mirror): Every image must have an alt="..." describing the object using conceptual and technical terms:
     Example: alt="Metal Writing #01 - Sculptural jewelry in silver, atavic exploration of the sidereal thread."
2. **Metadata (Threshold Inscriptions)**
   - Title Tag: Max 60 characters. Product Title | Collection Name | Texxturalia.
   - Meta Description: Max 155 characters. Use an active, mystical voice that invites interrogation.
     Example: "Discover a one-of-a-kind piece that interrogates the telluric plane through the silver thread. An atavic jewelry created to connect the body to the sidereal space."
3. **Semantic Hierarchy**
   - Use a single `<h1>` per page.
   - Use `<h2>` for section subtitles (e.g: Object Philosophy).

- **Viewport**: Adjusts the visual scale (essential for Responsive Design).
- **Description**: Defines the brand voice outside the site (essential for SEO Ritual).
  Rule: These lines don't modify the design, but define how the site interacts with the outside world (Google, Mobile, Social Media).

- **SEO (Meta Tags)**: Implementation of unique descriptions in `<head>` to clearly communicate the brand essence to search engines.
- **SEO Differentiation**:
  - Meta-descriptions for vitrines (Textiles, Jewelry, Decor, Guests) and Manifesto are designed to reflect each section's specific conceptual character, reinforcing the bilingual identity and brand authority in search engines.
  - Each file in `/items/` will have a personalized meta-description including the piece name (e.g: Metal Script #02). This practice avoids duplicate content and helps Google index each work as a unique entity.
- **Strategic Invisibility**: Meta-descriptions don't appear in the site's visual interface, preserving the design's minimalism. Their role is strictly technical (SEO) and for previews in social media.

## 2. Footer

- **Minimalist Footer**:
  - _Role_: Visual conclusion of the page.
  - _Aesthetic_: Reduced typography (0.65rem), neutral colors (grey), maintaining the "Brancusi" hierarchy where main content dominates space.
  - _Functionality_: Direct links to contact and social media.

    ??? Should footers for translated pages be in Romanian?

## I.26. Finishing Architecture (Footer & Responsive)

- **Footer (Sect. 10)**: I implemented a minimalist subsoil that serves as a visual anchor. Uses a nearly imperceptible `1px` demarcation line (`#f0f0f0`) to separate the exhibit zone from the administrative zone.
- **Advanced Responsiveness (Sect. 0)**:
  - I extended the media query to manage the _Split-Screen_ layout.
  - On screens below `850px`, I cancelled the `sticky` property, allowing content to flow naturally vertically, thus avoiding overlaps or too narrow text.

## I.27. Final Matrix Validation (Unit Test)

- **Status**: The `metal-script-01.html` page serves as the standard for all future product sheets.
- **Lesson learned**: Managing relative paths (`../../`) is crucial for maintaining visual unity (CSS/Favicon) and functional navigation in deep subfolders.

## I.28. Conclusions Faza 1: Architecture of Gold (EN Version)

At this stage, the Texxturalia digital ecosystem is completely functional from a structural and aesthetic point of view. We moved from a simple page to a mature author site, organized on logical hierarchies.

## 1. 🏛️ Texxturalia Ecosystem Map

The site is built as a museum journey, divided into four distinct experiences:
- **The Entry Gate (Index)**: Brand introduction and access to workshops.
- **Exhibition Rooms (Vitrines)**: Overall visualization of collections (_Jewelry_, _Textiles_, _Decor_, _Guests_).
- **Detailed Sheets (Exhibits)**: The intimate space for analyzing each unique piece.
- **Philosophy (Manifesto)**: The conceptual heart and brand ethos.

## 2. 📂 Technical Inventory (Gold Master)

Each file fulfills a critical role in the "machinery" of the site:
- `index.html`: Main Entry Point & Portal Hub.
- `jewelry.html` (+ sister vitrines): Curated catalog.
- `metal-script-01.html`: Presentation matrix for unique objects.
- `manifesto.html`: Brand typographic essay.
- `style.css`: The source code of Brancusi aesthetics (Universal Style).
- `documentation.md`: Living memory and project documentation.

## 3. ✨ Quality Standards Achieved

Through iterative code refinement, we achieved the following professional design objectives:
1. **High-End Uniformity**: Navigation (`Navbar`) and visual conclusion (`Footer`) are identical on all pages, offering the consistency of a luxury brand.
2. **Quality SEO**: Each section communicates directly with search engines through specific Meta-descriptions, ensuring correct indexing of each piece.
3. **Circular Navigation (Home Loop)**: The interface is intuitive; the Logo acts as an anchor toward Home, and relative paths (`../../`) allow fluid circulation through deep folders.
4. **&Ikebana Aesthetic (Grid Control)**: We managed to translate an artistic concept into CSS logic, where asymmetry (automatic dropping of even pieces) creates an organic, not mechanical, visual rhythm.

## I.29. RO Implementation: Translated Concepts

- **Mirror Logic**: Each element from `index.html` (EN) has a semantic correspondent in `ro/index.html`.
- **Cultural Adaptation**: I chose terms like "Firul" and "Scrieri" to maintain the tactile aesthetic of the brand in Romanian.
- **Bilingual Navigation**: I added the `.lang-select` class in the navbar to allow instant switching between language folders. The class that activates the "silver needle" (fine demarcation line) through border-left.

## I.30. Metaphoric Chromatic

- Bone (#f2f0eb): Represents structure, what remains, the foundation. Used as universal background.
- Oxide (#dcd7cf / #333): Represents matter's reaction with time. Used for image containers and logo, creating an "earthy" contrast.

## I.31. Separation of Responsibilities

- **HTML**: Strictly handles structure (what content we have).
- **CSS**: Strictly handles presentation (how content looks).

_Rule_: We avoid inline styles (`style=""`) to keep code easy to maintain. Any aesthetic change must be made in one single place: style.css.

## I.32. Archetypal Symbolism

I replaced functional categories (Body/Room) with mythical figures (Arachne/Actaeon) to emphasize that each vitrine is a transformation ritual of matter.

## The Mystical Bestiary (Archetypes and Myth)

I replaced functional categories (Clothes, Jewelry, Decor) with a mystical bestiary, transforming the site into a ritual experience:

- **Arachne (Atavic Envelopes)**: The tutelary divinity of instinct and the primordial web. Suggests that textile is not sewn, but woven as an extension of the body.
- **Corvus (Sacral Scripts)**: The raven's writing. Metal (copper/silver) as an artifact gathered, bearer of calligraphic messages in space.
- **Leto (Telluric Dialectics)**: The wolf. Represents the telluric force that marks and protects the domestic territory, transforming the room into a sacred space.
- **Actaeon (InterTexxturalia)**: The intruder's curious gaze. Represents dialogue with guest designers, who "look" into the Texxturalia universe.

## I.33. Visual Triptych of the Header (Header Ritual)

To avoid "visual noise" and give monumentality to vitrine pages, I structured the header like a sacred archive sheet, using three importance levels:

- **Eyebrow (.eyebrow)**: The conceptual label (ex: Atavic Envelopes) placed above the mythical authority. Written in Montserrat, uppercase, with generous spacing for documentary rigor.
- **Central Axis (`<h1>`)**: The name of the tutelary divinity (ex: Arachne). Represents the point of maximum visual weight (Cormorant Garamond Italic).
- **Header-Divider**: A 1px oxide line, short (60px), that anchors the composition and separates the sacred name from the earthly description.
- **Line Break Control (CSS vs. HTML)**: I removed the `<br>` tag from header descriptions to avoid rigid line breaks that can compromise appearance on mobile. Using the `.header-description` class with a defined max-width allows text to adapt organically, maintaining the "sculptural" aesthetic of the text block. Using max-width instead of `<br>` tag to force a poetic, adaptive line break that feels like a sculpted text block.

## I.34. Why is the JavaScript script linked in `<body>` and not in `<head>` in HTML files?

Linking the JavaScript file at the end of the `<body>` tag (and not in `<head>`) is a strategic choice that concerns the order in which the site's "matter" comes to life:

- **Visual Structure Priority**: Browsers read code top to bottom. Placing the script at the end allows HTML and CSS to load first, so the visitor immediately sees the "Bone and Oxide" aesthetic without delays.
- **Element Existence Assurance (DOM)**: Your JavaScript needs to "touch" elements like `.mobile-menu-toggle` or `.reveal` portals to move them. If the script were in `<head>`, it would execute before these elements are created by the browser, resulting in errors because the logic wouldn't find the objects it needs to manipulate.
- **Fluidity of the "Verb"**: In Texxturalia philosophy, the "verb" (JavaScript) must act only after the "matter" (HTML) is fully rendered. This placement guarantees that the site's silent mechanisms function without technical hiccups.

## I.35. "TODO" Strategy and Placeholder Management

A "Best Practices" lesson for the prototyping phase (Wireframing):

- **Visual Marking**: Using `<!-- TODO -->` comments in HTML code to quickly identify zones where temporary containers (bone/nitrogen divs) will be replaced with real images (`<img>`).
- **Design Independence**: This method allows adjusting the Ikebana asymmetry and scroll rhythm in CSS before final photography exists, ensuring a "bulletproof" layout regardless of future visual content.

## I.36. Semantic Evolution: From Void to Chasm

I abandoned the term "The Void" (overused morally in commercial aesthetics) in favor of the concept of "The Chasm" (Abisul/Prăpastia).

_Motivation_: "The Chasm" suggests a geological rupture, something telluric and visceral, aligned with Richard Moult's mystical naturalism and the weight of wet stone/raw matter density.

## I.37. Multiple Classes and Selectors

- **In HTML (Labeling)**: We use _space_ to add multiple _classes_.
- **In CSS (Styling)**: We use _comma_ to group multiple _selectors_.

## I.38. CSS Chromatic Themes

**Structure (Point 6)**: It's the skeleton. If you want to change the shadow on all site photos, you do it once in `.image-wrapper`.
**Atmosphere (Point 8)**: It's the "paint". If you want jewelry to no longer be copper but oxidized silver, you go only here and change the color code.

Grouping themes in Section 8 was the decisive move to obtain "clean" code. Yes, it's an excellent practice to keep the `:hover` state there too, since both rules define the "reaction" of the same material universe.

Here's why the current structure is a model of good practices:

- _Easy maintenance_: If you want to change the "wet stone" nuance of the Lykeios universe, go directly to Section 8, without searching through hundreds of code lines.
- _Logical cascade_: By placing themes after general rules, you ensure specificity works correctly (specific colors override basic ones).
- _Readability_: Your comments (e.g: "Warmth Reaction" or "Moisture Reaction") transform code from a technical list into a story about materials.

## I.39. Contact as Ritual: Texxt Us

I renamed the Contact section to "Texxt Us" (EN) and "Texteaza-te" (RO).
Wordplay: The Texxt- prefix anchors the writing action into the brand identity.

_Philosophy_: Eliminating automated forms in favor of a direct mailto link obliges the user to a conscious, manual interaction, similar to touching the thread.

## I.40. Micro-Ambiances Architecture (CSS Section 8)

I grouped all theming classes (`.textile-theme`, `.jewelry-theme`, etc.) in a dedicated section. This organization allows quick "chromatic curation":

- _Arachne_: Linen/bone shades. Spider
- _Corvus_: Warmth reaction (copper/oxide). Raven
- _Lykeios/Leto_: Moisture reaction (stone/concrete). Wolf
- _Actaeon_: Clarity reaction (white gallery). Stag

## I.41. Gnosis and Alchemy: Hermes-Thoth

I replaced Manifesto/The Creed with _Hermes-Thoth // Gnosis_.

- **Archetype**: Hermes-Thoth personifies the creation process as an act of mediation between spirit and matter.
- **Gnosis**: Knowledge through direct experience and touch. In the Romanian version, I chose the unarticulated form "Gnoza" to maintain grammatical symmetry with other categories (Invelisuri, Scrieri).

## I.42. The Main Paragraph: _(De(Con))Structing the thread between the atavic body, the telluric space, and the sacral wire_

## 1. Atavic & Primordial

The terms "atavic" and "primordial" refer to origins, instincts, and the distant past, often used to describe fundamental elements of human or biological nature.

Main Meanings:
- **Atavic**: Refers to traits, behaviors, or instincts that reappear after several generations or belong to a primitive stage of evolution. Figuratively, it describes wild or elemental impulses that "sleep" in the subconscious.
- **Primordial**: Denotes something that existed from the beginning of the world or a process; it is the original, fundamental, or oldest element.

Intersection of Concepts:
When used together, they evoke a raw state, unaltered by civilization or the passage of time:
- **Instincts**: "Atavic fear" or "primordial hunger" are forces that dominate reason in critical moments.
- **Biology**: Can describe a genetic structure or an "atavic primordial egg" that lies at the basis of a species' evolution.
- **Literature and Culture**: They are terms used to explore the "atavic cry" of the artist or the search for lost origins of humanity.

## 2. Pathei Mathos (πάθει μάθος)

This comes from Aeschylus' tragedy Agamemnon and translates as "learning through suffering" or "knowledge gained through experience (harsh)".

Meaning and Context:

- **Origin**: Aeschylus introduces this principle as a "law" of Zeus, suggesting that wisdom doesn't come free, but is the result of pain and life's trials.
- **Etymology**:
  - Pathei (from pathos): suffering, experience, lived event.
  - Mathos: learning, knowledge.
- **Philosophy**: The idea is that people tend to ignore reason until confronted with a crisis or profound pain that forces them to understand reality at a deeper level.

In the context of our discussion about atavic and primordial, Pathei Mathos completes the picture: if atavism represents our old instincts, this concept represents the mechanism by which those instincts are refined and transformed into wisdom through direct experience.

```From Aeschylus To The Numinous Way | David Myatt
The Greek term πάθει μάθος (pathei-mathos) derives from The Agamemnon of Aeschylus (written c. 458 BCE), and can be translated as ...

WordPress.com

Pathei Mathos - David Myatt - WordPress.com
Humility, Tolerance, Islam. A Similitude For Our Times. Christianity, Paganism, And Honour. Temperous Claims About A Myatt. David M...

WordPress.com

Word of the day: pathei mathos, 'learning from suffering ...

15 ian. 2025 — Word of the day: pathei mathos, 'learning from suffering'. According to Aeschylus, the law gifted to mortals to guide them towards...
```

## 3. Sidereal

The term sidereal comes from Latin sideris (star) and refers to everything related to stars, stars, or cosmic space.
In the context of previously discussed concepts (atavic, primordial, pathei mathos), "sidereal" adds a cosmic and timeless dimension:

- **Sidereal Time**: In astronomy, it's time measured in relation to fixed stars, not the sun. It's a unit of measurement much more stable and "primordial" than our calendar time.
- **Distances and Spaces**: Suggests the cold and silent immensity of the universe, a "primordial" space in which human existence seems minuscule.
- **Figurative Sense**: Can describe something pure, luminous, or unattainable (e.g: "a sidereal solitude").
- **Figurative Sense**: Can describe something pure, luminous, or unattainable.

If we connect all these concepts, we get the image of a human condition caught between biological atavism (old instincts), suffering that educates us (pathei mathos), and the sidereal infinity toward which we look to find our place in the universe.

### Sidereal metal:

The concept of sidereal metal (or iron sidereal) makes the transition from astronomy to mythology and early civilization history, being the perfect bridge between primordial and atavic.

Here's why this concept is so fascinating:

1. **The "Celestial" Origin (Meteoritic Iron)**
   Before humanity learned to melt iron ore from the earth (Iron Age), the only source of pure iron was what fell from the sky as meteorites. This is the true sidereal metal.
   - **Revealing Etymology**: In Sumerian, the word for iron (an-bar) literally means "fire from the sky." In ancient Egyptian (bia-n-pet), it meant "metal from the sky."
2. **Primordial Symbolism**
   Because it came from sidereal space, this metal was considered divine and magical. Objects made from it (like Tutankhamun's iron dagger) had much greater value than gold, being viewed as fragments from the gods' bodies.
3. **Connection with Atavism and Suffering (Pathei Mathos)**
   - **Ativic Instinct**: There's an instinctive, almost "atavic" fascination for weapons made of "fallen stars," which often appears in fantasy literature or mythology ( "sidereal" swords).
   - **Shaping Effort**: Processing this hard metal, fallen from cosmos, was humanity's first heavy technology lesson – a form of collective pathei mathos, where humans learned to master celestial elements through effort and fire.
   - **In artistic or musical context** (like Atmospheric Black Metal or Space Ambient genres), sidereal metal evokes a cold, vast, and distant atmosphere, but at the same time brutal and fundamental.

I need an interpretation of copper and silver as sidereal:
Interpreting copper and silver as sidereal elements takes us into a fascinating zone where ancient metallurgy meets astrobiology and primordial symbolism. Although, technically, only meteoritic iron is called "sidereal metal" in the strict sense (fallen directly from the sky), copper and silver have a profound cosmic dimension through their stellar origin and planetary correspondences.

Here's an interpretation of the two through the lens of the discussed concepts (atavic, primordial, pathei mathos):

1. **Copper: The "Tamed" Sidereal Fire**
   In ancient cosmogony, copper is linked to the planet Venus. It's the metal that makes the connection between sky and earth through conductivity.
   - **Primordial Origin**: From an astrophysical perspective, copper forms in the explosive phases of supernovae. It's a residue of a star's agony, a form of cosmic pathei mathos – the star must "suffer" collapse to generate this metal.
   - **Ativic Dimension**: Copper was the first metal shaped by humans (Copper Age). It's an atavic memory of the moment when humanity stopped using only stone and began to "master" dense, reddish matter, similar to blood and sunset.
2. **Silver: The "Cooled" Sidereal Light**
   Silver is the metal of the Moon, reflecting the sun's sidereal light in a cold, spectral form.
   - **Sidereal Symbolism**: If gold is the sun (active, burning), silver is the sidereal mirror. It represents the intuitive side and the subconscious. It's considered the "metal of memory," linking the present to our oldest, primordial origins.
   - **Purification Through Suffering**: In alchemy, silver must be purified through intense oxidation processes to regain its luminosity. This process mirrors the pathei mathos concept: matter (or soul) must pass through the "fire" of experience to become a faithful mirror of sidereal light.
3. **Synthesis of the Two**
   If we view them together as a sidereal ensemble:
   - **Copper** is vital energy, instinctual, atavic, the raw force of life that pulses.
   - **Silver** is reflective consciousness, primordial silence, and purity gained after the "noise" of existence has been filtered.
   - This duality (red/copper vs. white/silver) often appears in myths as the balance between earthly passion and cosmic/sideral order.

The expression "sacralitatea firului sideral" could bring to mind the copper or silver wire used in my jewelry?
Categorically, yes. The expression "sacralitatea firului sideral" gives your jewelry a metaphysical dimension, transforming a simple technical material into an object with spiritual charge.

Here's how this expression connects to the copper and silver wires you use:

1. **The Wire as a "Conduction Path" (Copper)**
   Copper is the best conductor among common metals. In this context, "sidereal wire" becomes a metaphor for the antenna that captures cosmic (sidereal) energy and brings it to the physical plane.
   - **Interpretation**: Jewelry is not just an ornament, but an instrument through which the wearer stays connected to primordial forces. Sacrality derives from the wire's ability to symbolically "transport" starlight to the body.
2. **The Wire as an "Incorruptible Link" (Silver)**
   Silver, through its white luminosity, evokes moon rays or the trails left by fallen stars.
   - **Interpretation**: Silver "sidereal wire" suggests continuity. It's the Ariadne's thread that guides us through the labyrinth of existence, linking our atavic nature (instincts) to the aspiration toward high, celestial purity.
3. **The Act of Creation as Pathei Mathos**
   Manual twisting, intertwining, and shaping of metal wire (wire wrapping or similar techniques) represents a process of "suffering" of the material to reach form.
   - **Interpretation**: Sacrality comes from the creator's effort. You discipline raw, "primordial" metal, transforming it through file and patience into a sacred geometry.

How you can use this image in your presentation:
- **Copper**: "Sidereal fire wire that earths the energy of stars."
- **Silver**: "Sidereal light wire that preserves the memory of origins."
This expression suggests that your jewelry are fragments of cosmic order worn at the neck or hand, offering clients not just an object, but a sacred connection.

## 4. (De(Con))Struction of the thread. Between the atavic raiment, the telluric plane, and the sacral wire

(De(Con))Struction of the thread between the atavic body, the telluric space, and the sacred wire — where the atavic body refers to the clothes I make, the telluric space refers to my decorative creations/art, and the sacred wire refers to the jewelry I create. How does it sound rewritten as: (De(Con))Struction of the thread between the atavic raiment, the telluric space, and the sacralite of the sidereal wire? Find, possibly, another word for telluric space, possibly the teluric cosmos, the teluric plane.

Your rewrite sounds much more refined and balanced. Using the terms "raiment" and "sacralite" elevates the discourse from the technical level (clothes/wire) to the level of conceptual art.

Here's your optimized version, followed by some suggestions for replacing "telluric space":

**Recommended version:**
"(De(Con))Struction of the thread between the atavic raiment, the archipelago of telluric, and the sacralite of the sidereal wire."

**Alternatives for "telluric space" (Art/Decor):**
If you want to maintain contrast between atavic (body) and sidereal (jewelry), the "space" between them should sound like a place of anchoring, of foundation.
- **Teluric Archipelago**: Suggests your decorative objects are "islands" of matter punctuating a space, creating a world of their own.
- **Teluric Plane**: Sounds more philosophical, like a dimension of existence, suitable for art installations that transform a room's atmosphere.
- **Teluric Hearth**: If your decorative art has a warm, "homey," or ritual note, this term emphasizes root and stability.
- **Teluric Altar**: If decorative objects have a strong symbolic character, almost religious or mystical.

**Why "(De(Con))Struction" works:**
The double prefixes suggest that your creative process is simultaneously:
- **Destruction**: Decomposing raw material (raw material).
- **Construction**: Reassembling elements into a new form.
- **The Thread**: Becomes the linking element that crosses everything, from textile fiber (raiment) to processed metal (sidereal).

**How does "teluric archipelago" sound in the context of your decorative objects — do you feel they "float" and define the space where they're placed?**

**Plan or altar pleases me most. given that I'm a philosophy faculty graduate, plan remains**
The choice of "telluric plan" is the most mature and rigorous, perfectly reflecting your academic background. In philosophy, "plan" is not just a surface, but a level of reality, a structure of immanence that supports the rest of the constructions.

Here's how your conceptual triad sounds, in a formulation with impeccable aesthetics:
"(De(Con))Struction of the thread between atavic raiment, telluric plane, and sacralite of sidereal wire."

**Why this structure is philosophically coherent:**
- **Atavic Raiment (Body/Garment)**: Represents the primary, biological, and historical layer. It's haptic memory, protection, and archaic identity.
- **Telluric Plane (Art/Decor)**: It's the "ground" on which existence unfolds. In a Deleuzian sense, it's the plane of immanence where your decorative objects define space and give it weight, density.
- **Sacralite of Sidereal Wire (Jewelry)**: It's the element of ascension, the bridge toward transcendence (stars/cosmos). Metal (silver/copper) becomes the "logos" linking body (atavic) to world (telluric).

This "(De(Con))Struction" suggests your work is a continuous process of analyzing and synthesizing materiality: you unfurl the threads of reality to re-weave them in a new, sacred order.

**How does the header sound:**
```
    <header class="hero">
      <div class="hero-content">
        <h2>Interogând Abisul</h2>
        <p>(De(Con))Structia firului. Între veșmântul atavic, planul teluric și sacralitatea firului sideral</p> ? give me the English translation for this paragraph
```
It sounds impeccable. The title choice "Questioning the Abyss" (as a Nietzschean echo) creates an intellectual tension that resolves superbly in the procedural description of the thread. It's an introduction that doesn't just present products, but proposes an ontological vision of your creation.

Here's how the structure and translations look:

**Romanian Version:**
```
<h2> Interogând Abisul </h2>
<p> (De(Con))Structia firului. Între veșmântul atavic, planul teluric și sacralitatea firului sideral. </p>
```

**English Translation (Conceptual and Academic)**
To maintain philosophical rigor and the sonority of terms, I propose the following version:

```
<h2> Questioning the Abyss </h2>
<p> The (De(Con))Struction of the thread. Between the atavic raiment, the telluric plane, and the sacredness of the sidereal wire. </p>
```

**Why these choices in English:**
- **Raiment**: Instead of "garment" or "clothing," raiment has an archaic, poetic, and ritual connotation, fitting perfectly with "atavic."
- **Telluric Plane**: Maintains exactly your philosophical terminology for the art-decor space.
- **Sidereal Wire**: Wire is the technical term for metal wire/thread in jewelry, and its pairing with sidereal creates a fascinating contrast between industrial materiality and stellar origin.
- **The (De(Con))Struction**: Translates identically, maintaining the visual play between deconstruction and construction, recognized internationally in academic circles.

This formulation will immediately attract an audience seeking depth, symbolism, and art with theoretical foundation.

```
<p>(De(Con))Struction of the thread. Betwixt and between the atavic raiment, the telluric plane, and the sacralilty of a sidereal wire.</p>
```
or in-between, better?
Your choice of "Betwixt and between" is a flash of genius, archaic and philosophical. In English, this expression doesn't just mean "between," but suggests a state of liminality — a transition space, a threshold, where ordinary rules don't apply.

However, to maintain academic rigor and musicality, I'd adjust the final word's ending slightly:

**Recommended Version:**
```
<p>(De(Con))Struction of the thread. Betwixt and between the atavic raiment, the telluric plane, and the sacrality of the sidereal wire.</p>
```

**Why "Betwixt and between" is superior to "In-between":**
- **Liminality**: The concept of betwixt and between (popularized by anthropologist Victor Turner) describes exactly the moment of transformation — when the thread is no longer just metal or fiber, but becomes a sacred object.
- **Rarity**: It's a precious expression, immediately signaling to the reader that they're facing a conceptual art project, not an ordinary store.

**How the triad sounds in this form:**
- Atavic raiment (Past/Body)
- Telluric plane (Present/Space)
- Sidereal wire (Future/Spirit)

## I.43. Wire Architecture (Navigation & Relative Paths)

To maintain the "thread" integrity between the telluric plane (root) and individual objects (product pages), it's vital to respect the resource access hierarchy. Any path break (404) fragments the visitor's gnostic experience.

1. **Main Plane (EN Root & Vitrines)**
   Location: / (e.g.: index.html, jewelry.html)

- Toward CSS: style.css
- Toward Other Vitrines: textiles.html, decor.html
- Toward Products: items/jewelry/metal-script-01.html
- Toward Romanian Language: ro/index.html

2. **Secondary Plane (RO Vitrines)**

- Toward CSS: ../style.css (Exit one level)
- Toward Home (RO): index.html
- Toward English Language: ../index.html (Exit one level)

3. **Sidereal Object (EN Product Pages)**
   Location: /items/jewelry/ (e.g.: metal-script-01.html)

- Toward CSS: ../../style.css (Exit two levels)
- Toward EN Vitrines: ../../jewelry.html
- Toward EN Home: ../../index.html
- Toward RO Product: ../../ro/items/jewelry/metal-script-01.html

4. **Sidereal Object (RO Product Pages)**
   Location: /ro/items/jewelry/ (e.g.: ro/items/jewelry/metal-script-01.html)

- Toward CSS: ../../../style.css (Exit three levels: jewelry -> items -> ro -> Root)
- Toward RO Vitrines: ../../jewelry.html (Stays in /ro/ subfolder)
- Toward RO Home: ../../index.html
- Toward EN Product: ../../../items/jewelry/metal-script-01.html

5. **Visual Resources (Images & Branding)**
   Regardless of page depth, the path to images must "climb" to the /images/ folder:

- From EN Product: ../../images/products/...
- From RO Product: ../../../images/products/...

_Maintenance Note_: When adding a new "Metal Script," always check if the number of hops (../) matches the folder depth, to avoid isolating the object from the rest of the digital cosmos.

## I.44. Error Liminality (404 Page)

The 404.html page is not treated as a technical failure, but as a transition space (liminal) that returns the visitor to the source.

- **Location**: /404.html (Root). Must remain at the same level as index.html to be intercepted by the server.
- **Concept**: "The snapped thread" (Firul rupt). Represents the interruption of the (De(Con))Struction flow.
- **Simultaneous Bilingualism**: The message is presented primarily in English, with an echo (reduced opacity) in Romanian, to ensure guidance regardless of where the navigation rupture occurred.
- **Style**: Uses the .error-page selector from style.css to maintain the "sidereal void" aesthetic (old bone and oxide).

## I.45. Hamburger Button Aesthetic (animated with JS)

1. Choosing a two-line menu (symbolic reduction) and centering the linguistic axis in the telluric plane.

2. Linear Palette: Using #c5c5c5 (Oxidized Silver) for active structural elements (menu bars, main dividers) for balance between ethereal and functional.

## I.46. Vitrine Choreography (animated with JS)

Using the reveal class on exhibit-item containers to ensure a fluid transition of the entire ensemble (image + text).

1. **Decor, Guests, Textiles, Jewelry Pages (EN & RO) — DONE**
- Header: You put reveal on h1, .header-divider, and .header-description. The collection title (Leto) and description will appear successively.
- Product Grid: You applied the reveal class to each .exhibit-item. Thus, your monoliths and structures will rise smoothly as the visitor scrolls.

2. **Contact Pages (EN & RO) — DONE**
- Header: You put reveal on the title (Texxt Us / Initiate the thread) and on the divider.
- Content: You applied reveal to the two main columns (.contact-text and .contact-note). This ensures contact information doesn't appear abruptly, but follows the cinematic rhythm of the entire site.

3. **Index Pages (EN & RO) — DONE**
   You put the reveal class on each .portal-item.

4. **Manifesto Pages (EN & RO) — DONE**
   Implementation of the reveal system on individual paragraphs to impose a contemplative reading rhythm, according to the Hermes-Thoth principle.

- **Hierarchy**: Using lead-paragraph as a conceptual anchor point before detailing the vision.

## I.47. Liminality Testing

The 404.html page is a server function. Its aesthetic validation is done by direct access, with functionality being activated at deployment time (launching on server).

## I.48. Ontological Evolutions (Backlog)

1. Font Dynamics: Evaluating the transition of product descriptions from Montserrat to Cormorant Italic to emphasize their "manuscript" nature.
2. Space Geometry: Testing the asymmetric grid to break the rigor of the telluric plane.

## I.49. Final Synthesis: Architecture is Ready!!!

1. At this moment, I've finished building the entire Texxturalia universe structure:

- Gates (Index EN/RO): Activated with animated portals.
- Vitrines (Decor, Jewelry, Textiles, Guest): Bilingually synchronized.
- Heart (Gnosis): Structured for ritual reading.
- Dialogue (Contact): Sober and functional.
- Liminality (404): Prepared for poetic errors.

2. **Scaling Strategy**:
   Maintaining a unitary grid-type structure for vitrines, avoiding subcategories until the 20 objects/category threshold, to protect the immersive experience.

## I.50. Indentation Standardization

Unifying spacing to 2 units (spaces) across the entire ecosystem, for optimized readability and logical file structure.

# Tools and Other Relevante Integration Elements for HTML and CSS

Centralizing validation, optimization, and technical shortcuts resources for efficient construction process

- validator: https://validator.w3.org/nu/#file
- fonts: https://fonts.google.com/
- html characters: https://unicodeplus.com/
- Squoosh.app: A Google tool, incredibly simple and visual, for compressing your author photos. It's vital that the site loads fast while preserving fine details of wire or fabric.
- Adobe Color: If you ever want to interrogate the relationship between the "bone" background color and a specific oxide shade.
- useful key combinations:
  - `Ctrl+u` view source code on site
  - `Ctrl+Shift+x` VSCode extensions
  - `Inspect` web console access, element inspection, etc
  - `Alt + Shift + f` (in VS Code): Code Formatting. Automatically aligns all tags and spaces (very useful to keep the "order" of clean code).
  - `Ctrl + f` (in VS Code): Quick search. Essential for quickly finding all #1c1c1c selectors and changing them to #2c2c2c.
  - `Ctrl + Shift + r` (in Browser): Hard Refresh. Forces browser to ignore old memory (cache) and load the newest version of style.css or script.js.
- VSCode Extensions:
  - Prettier: Works together with the formatting command above.
  - Auto Rename Tag: If you change an `<h3>` to `<h2>`, it automatically changes the closing tag too. Saves a lot of time and prevents syntax errors.

---

---

---

# II. JAVASCRIPT

## II.1.

In your minimalist aesthetic (Brancusi/void), JavaScript must be almost invisible. We don't need flashy animations, but "silent mechanisms" that make the experience fluid.

Here's what JS will help us with at this stage (and stay calm, I'll guide you step by step):

1. **What will JavaScript be useful for now?**
   - Mobile Menu (Hamburger Menu): For the menu to open/close on phones.
   - Sticky Header: To make the navbar shrink or become more transparent when scrolling, to let the "visual abyss" breathe.
   - Scroll Animations (Reveal): To make elements (portals, texts) appear smoothly as the visitor scrolls down the page (the "discovery" effect).
   - Filtering (Optional): If in the future you'll have many products in the vitrine.

2. **How will we work?**
   We'll create a single file called script.js in the project root (next to style.css). We won't write complicated code, but short, clear functions.

3. **First step: Preparing the ground**
   Before writing the first JS line, we must "announce" the HTML pages that this file exists.
   Add this line to all your HTML files, right before the closing `</body>` tag (at the document end):
   `<script src="script.js"></script>`
   `</body>`

**"Peer" tip (colleague):**
Don't fear JS. Think of it not as mathematics, but as the grammar of movement. HTML is the noun, CSS is the adjective, and JS is the verb.

## II.2. The Subtle Dynamic (JavaScript)

Implementation of movement verbs through the external script.js file.
Focus on invisibility and fluidity, avoiding digital noise.

_Rule_: I will have a single script.js file for the entire site, exactly like the style.css file. This is the "spinal column" that ensures the same movement rules throughout my entire digital universe.

## II.3. JS Logic Deconstruction

Identifying selection, observation, and state change mechanisms as the foundation of the atelier's dynamics.

Let's deconstruct the "verbs" you've already written in script.js. As a philosophy graduate, you'll see that JavaScript isn't about mathematics, but about causal relationships and states of existence.

Here's the logic map of concepts you've already implemented:

1. **document (The World as Representation)**
   In JS, document is the supreme object. It's your entire HTML page transformed into a structure the code can "touch". - Logic: "If it's not in the document, it doesn't exist for the script."
2. **querySelector (The Act of Naming)**
   It's the method through which JS "points with the finger" at a specific element in HTML. - Your code: `document.querySelector('.mobile-menu-toggle')` - Philosophical logic: Identifying an entity through its "name" (CSS class). JS finds the matter to apply its will.
3. **addEventListener (Watchfulness State / Attention)**
   It's an "observer" that waits. It does nothing until an event occurs (an accident in the physical world). - Your code: `.addEventListener('click', ...)` or `.addEventListener('scroll', ...)` - Philosophical logic: Passing from potentiality (button can be pressed) to actuality (button was pressed).
4. **classList.toggle (Dialectics of States)**
   This is the heart of your dynamics. JS doesn't change styles (colors, sizes) directly, but changes classes. - Your code: `navLinks.classList.toggle('active')` - Philosophical logic: An element can be in state A (invisible) or in state B (visible). Toggle is the switch between these two modes of being.
5. **IntersectionObserver (Phenomenology of Presence)**
   This is the most advanced concept in your script. It's an "eye" that monitors when an object enters the visitor's perception horizon. - Your code: `if (entry.isIntersecting) { ... }` - Philosophical logic: The object (portal or text) exists in code, but "appears" to the user's consciousness only at the moment of encounter (scroll).

```Exercise of "interrogation" of the code:
If you look in script.js, you'll see this structure:
Declaration: "I want to monitor this element."
Condition: "If X happens..."
Consequence: "...then add class Y."
This is the entire "metaphysics" of your front-end.
```

---

---

---

# III. GITHUB/NETLIFY

## III.1. Launch Strategy

Using GitHub as a versioning medium and Netlify/GitHub Pages for hosting, followed by acquiring the texxturalia.com domain for full digital identity.

## III.2. Deployment Architecture

Integration of the GitHub-Netlify binomial to ensure data integrity and automate online presence.

## III.3. Infrastructure Prioritization: The Decision to Execute the Static Architecture Deployment Before Populating With Final Content, to Ensure Correct Versioning and Live Environment Testing.

Analyzing the two Instagram profiles, it's clear you've built an extremely coherent visual universe, where matter and shadow constantly dialogue. Your photographic style — organic, focused on texture, with natural, melancholic light — is exactly the "soul" that will animate the code skeleton we've built.

Here's my recommendation for the step order, based on Product Owner (PO) experience:

1. **Workflow Recommendation: "Seal, Then Populate"**
   I recommend putting the architecture on GitHub at the next step, even if it's "empty" (with placeholders).
   - **Why?**
     - **Control Point (Checkpoint)**: Once code is on GitHub, you have a "sacred" backup copy. If you make mistakes while uploading photos or translations, you can return to the clean version with a single click.
     - **Technical Launch**: We can deploy to Netlify immediately. You'll see the site live on your phone, even if it has grey boxes instead of photos. It's a huge sense of accomplishment that will energize you for the rest of the work.
     - **Parallelism**: While you learn/work through the JS playlist, you can work on "visual matter" without fear of losing code files.

2. **Visual Rhythm in the Boutique (Texxturalia)**
   To transfer the Instagram atmosphere to the site:
   - **Maintain Asymmetry**: Your photos aren't "centered" or rigid. Use macro images (wire details, knots) alongside overall photos in product pages.
   - **Chromatic**: Your "bone" background and "parchment" color (#2c2c2c) we chose will work as a natural extension of the earthy tones in your photos.
   - **Space Between Things**: On Instagram, your feed has air. On the site, don't fear white spaces. These are the "silence" the viewer needs to understand your gesture.

3. **Plan for Uploading Code to GitHub:**
   - Prepare GitHub Desktop: Ensure it "sees" the project folder.
   - First "Commit": Save the "Complete Architecture" version.
   - Launch (Deploy): Make the site visible at a temporary address.

- After that, you can concentrate exclusively on content: choosing archive photos, editing them, and writing short poems/descriptions for each "sacral script."

`Peer tip: Don't try to put 50 photos at once. Choose two product pages (one jewelry, one textiles) and finalize them completely. You'll learn more from "finishing" two pages than from "starting" ten.`

---

---

---

# IV. PYTHON (BACK-END)

## IV.1. Texxturalia Deserves "Static Purity"

A static site (HTML/CSS/JS) is most suitable for an art portfolio. It's fast, secure, and has an elegance that heavy e-commerce platforms (like Shopify or Magento) often lose. By finalizing it this way, you'll have a finished, perfectly functional product that represents your brand without maintenance costs.

## IV.2. Learning Back-End Through "Project B"

After Texxturalia is live, you can start a second project (an experimental E-shop or a blog you administer) where you learn Python.

What you'll learn then:

- **Databases (SQL)**: How "matter" (products, prices) is stored in a table, not directly in HTML.
- **Server Logic (Python/Django or Flask)**: How the site "thinks" when someone adds something to cart.
- **Authentication**: How to create an "Enter the Abyss" (Login) system for users.

**Complete Workflow Vision:**
Only after you have both experiences will you understand the entire thread:

- **Front-end**: How the thread looks and feels (Phenomenology).
- **Back-end**: How the thread is produced and stored in the warehouse (Data Ontology).

---

---

---

---

---

# V. PO

1. **Defining the Vision (The "North Star")**
   As PO, you must know exactly who you're addressing and what problem you solve (or what state you provoke).
   - **What to learn**: How to define a Value Proposition Canvas. For example: "Texxturalia doesn't sell jewelry, but offers the collector a tangible link with the primordial abyss."

2. **Backlog Management (Prioritization)**
   You'll always have new ideas: an extra button, a more complex animation, a new page. The PO decides what gets done now and what gets left for later.
   - **What to learn**: MoSCoW Method (Must have, Should have, Could have, Won't have). It will help you launch the site faster, eliminating "noise" from non-essential ideas.

3. **User Experience (UX) and User Journey**
   The PO puts themselves in the visitor's shoes.
   - **What to learn**: How to draw a User Journey Map. How many steps does a client take from entering the site to sending the "Correspondence" email? If there are too many, the PO decides to simplify the "thread."
   - **What to learn**: How to define an MVP. (Your current site, once populated with photos, is a perfect MVP).

4. **Minimum Viable Product (MVP)**
   This is the most important concept for you right now.
   - **Logic**: Better a simple site, with 2 products and a contact page, but that is live, than a perfect site that's never ready.
   - **What to learn**: How to define an MVP. (Your current site, once populated with photos, is a perfect MVP).

---

---

---

---

---

# X. Bibliography and Tutorials

## X.1. HTML & CSS (Web Programmers)

1. **Fundamental Resources (The "Sacred" Standards)**
   These are the official sources, the equivalent of source texts in philosophy.
   - **MDN Web Docs (Mozilla)**: It's the "Vulgate" of the web. Every HTML tag or CSS property is documented here in the smallest detail. It's the resource you'll query most often.
   - **W3Schools**: Excellent for quick exercises and immediate "recipes." It's very accessible when you want to check a property's syntax.

2. **Courses and Tutorials (Structure and Method)**
   - **FreeCodeCamp (Responsive Web Design)**: An interactive platform, completely free. Takes you through hundreds of practical exercises. It's very good for building your "muscle memory" of code.
   - **Kevin Powell (YouTube)**: https://www.kevinpowell.co/
     Nicknamed "The CSS King." His tutorials don't just tell you what to write, but explain why the browser behaves a certain way. Ideal for understanding the "invisible mechanics" of layout.
   - **HTML & CSS Full Course - Beginner to Pro**: https://www.youtube.com/watch?v=G3e-cpL7ofc&t=11808s
   - **SuperHi**: They have a very design and art-focused approach. Their free resources (and paid courses) are perfect for your "Brancusi/Moult" aesthetic.

3. **Bibliography (Thinking in Code)**
   If you prefer reading books that explain the system of thinking:
   - **"HTML and CSS: Design and Build Websites"** by Jon Duckett: It's probably the most beautiful programming book ever written. Visual, elegant, and extremely clear – it will fit perfectly on your desk next to your philosophy books.
   - **"CSS Secrets"** by Lea Verou: For when you want to move to the next level in design. Lea treats CSS with a fascinating mathematical and creative rigor.

4. **Interrogation Tools (Playing with Matter)**
   - **CodePen**: A "digital sandpit." You can see other artists' code and "deconstruct" it to see how it works. Search terms like "minimalist layout" or "typography grid."

