# Resources & Bibliography — Texxturalia

> Tools, references, and study materials — curated for building and positioning
> a handmade e-gallery for OOAK fashion and jewelry. Not a generic "learn to
> code" list. The general programming resources live in the digital-odyssey
> project; this file is about what makes **Texxturalia** specifically what it is.

---

## 1. The Stack — Tools Used to Build This Project

These are the actual tools in the Texxturalia toolchain. If you're building
something similar, start here.

### Validation & Quality

- **[W3C Markup Validator](https://validator.w3.org/nu/#file)** — HTML validation.
  Paste your file or upload it. Catches unclosed tags, invalid attributes, and
  accessibility issues. Run every page through this before considering it done.
- **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)** — Catches typos in
  property names and invalid values. Less critical than HTML validation (browsers
  are lenient with CSS), but useful for catching mistakes early.

### Fonts

- **[Google Fonts](https://fonts.google.com/)** — Cormorant Garamond (300, 400, italic)
  + Montserrat (100–400). The two-font system is explained in BRAND.md. Cormorant
  Garamond is the "presence" font (headings, manifesto, product names); Montserrat
  is the "voice" font (body text, labels, navigation).
  - [Google Fonts Knowledge Base](https://developers.google.com/fonts/docs/getting_started)
    — How web fonts work, the `preconnect` optimization, `display=swap` behavior.

### Image Work

- **[Squoosh](https://squoosh.app)** — Browser-based image compression by Google.
  **Critical for this project:** handmade textile and jewelry photos need to preserve
  wire/thread detail while loading fast. Squoosh lets you visually compare before/after
  at different quality levels. Use WebP at 75–85% quality for product photos; the
  detail in wire nets and fabric texture is more sensitive to compression than typical
  photographs.
- **[Adobe Color](https://color.adobe.com/)** — Exploring the bone/oxide relationship.
  The Texxturalia palette (#f2f0eb ground, #2c2c2c text, #c5c5c5 hairlines, #dcd7cf
  image-wrapper backgrounds) was developed here. The tool is useful for testing
  accessibility contrast ratios and exploring slight variations.
- **[Photopea](https://www.photopea.com/)** — Free browser-based Photoshop equivalent.
  Useful for quick edits: cropping product photos to 4:5 ratio, adjusting levels on
  textile photos, adding the thin oxide border to thumbnails.

### Development Environment

- **[VS Code](https://code.visualstudio.com/)** — The editor used for this project.
  - **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
    — Code formatting. Keeps HTML, CSS, and JS consistently formatted without manual
    effort. Run "Format Document" (Alt+Shift+F) before committing.
  - **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)**
    — Renames the closing tag automatically when you rename the opening tag. Essential
    for HTML editing — prevents mismatched tags.
  - **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**
    — Local development server with auto-reload. Start it on index.html and every save
    refreshes the browser instantly. Much faster iteration than opening files directly.

### Bilingual / Localization

- The project uses a **mirror-folder pattern** for Romanian: `ro/` directory mirrors
  the root structure. Each English file has a Romanian counterpart. Shared assets
  (style.css, script.js, images/) are referenced with `../` from the `ro/` folder.
  - **[Intl.Segmenter API](https://developer.mozilla.org/en-US/docs/Web/API/Intl/Segmenter)**
    — Future: if the project grows to more languages, this API handles word/line
    segmentation for languages with different text rules (e.g., CJK languages).
  - **[i18n best practices for static sites](https://www.smashingmagazine.com/2022/03/handling-internationalization-static-site-generators/)**
    — Article on patterns for bilingual/multilingual static sites. The mirror-folder
    pattern used here is one of several approaches; this article compares alternatives.

---

## 2. Niche Marketing — Handmade E-Galleries & Artisanal Fashion/Jewelry

This section is specifically about marketing **scarce, handmade, visual products**
online — not general e-commerce or general marketing. The resources here focus on
positioning, storytelling, audience building, and selling atmosphere rather than
specs.

### Positioning & Brand Story

- **"Building a StoryBrand" — Donald Miller** — Framework for clarifying what your
  customer wants, what problem you solve, and how your brand guides them to success.
  For Texxturalia: the customer doesn't want "a copper wire necklace" — they want
  to be the kind of person who wears a copper wire necklace that interrogates the
  primordial chasm. The StoryBrand framework helps you articulate that.
- **"Obviously Awesome" — April Dunford** — Positioning for products that don't fit
  neatly into existing categories. Texxturalia sells things that aren't quite jewelry,
  aren't quite sculpture, and aren't quite fashion. This book helps you find the
  right category (or create one) so customers understand what they're looking at.
- **"This Is Marketing" — Seth Godin** — Marketing as service, not interruption.
  Relevant for handmade creators who feel uncomfortable with "marketing" — the book
  reframes it as finding the smallest viable audience and serving them deeply, which
  is exactly the Texxturalia approach.

### Visual Presentation & Photography

- **"The Photographer's Eye" — Michael Freeman** — Composition for product/visual
  photography. The Texxturalia aesthetic depends on careful composition: the wire
  nets need to read as intentional art, not tangled metal. This book teaches you to
  see composition rather than just take photos.
- **[Adobe Lightroom Mobile](https://www.adobe.com/products/lightroom.html)** —
  Free tier available. For consistent color grading across all product photos. The
  Texxturalia palette (warm bone, oxidized charcoal) should be present in every photo
  — Lightroom presets make this consistent without editing each photo from scratch.
- **[Format.com](https://format.com/)** — Portfolio/presentation platform for visual
  creators. Not used in Texxturalia (the site is custom-built), but worth knowing as
  an alternative if you want a dedicated portfolio that's separate from the e-commerce
  function.

### Audience Building & Community

- **"Show Your Work!" — Austin Kleon** — The core philosophy behind Texxturalia's
  Instagram presence. Share the process, not just the finished product. For handmade
  creators: people buy the maker as much as the making. This book is about making that
  visible without being self-promotional in an unseemly way.
- **"Creative Mornings" talks (YouTube)** — A series of short talks by creative
  professionals. Many are relevant to handmade product creators: building an audience,
  pricing work, the relationship between craft and commerce. Search for talks by
  makers in your specific medium.
- **[The Creative Independent](https://thecreativeindependent.com/)** — Interviews
  and essays by and for creative people. Regularly features jewelry makers, textile
  artists, and small-scale craft 비즈니스를. Good for the emotional/practical reality
  of running a creative small business, not just the technical side.

### Selling Atmosphere — Product Descriptions & Copy

- **"The Copywriter's Handbook" — Robert Bly** — Classic copywriting text. The
  relevant chapter for Texxturalia is on "writing for specialty products" — how to
  describe something expensive and unusual in a way that justifies the price without
  sounding pretentious.
- **"Everybody Writes" — Ann Handley** — Content creation as a practice. For
  Texxturalia: every product description is a piece of writing that should carry the
  brand's voice. This book provides principles for writing well at scale (when you
  have 20+ products to describe).
- **Study: [Ahrefs Blog — E-commerce SEO](https://ahrefs.com/blog/ecommerce-seo/)**
  — Practical SEO for product pages. The relevant angle for Texxturalia: product
  descriptions should include the words customers actually search for (material,
  technique, style) while maintaining the brand's literary voice. This is the tension
  between SEO and brand voice — the Ahrefs articles are practical about balancing both.

### Niche-Specific: Handmade Fashion & Jewelry E-Commerce

- **[The Business of Handmade](https://www.thebusinessofhandmade.com/)** (podcast)
  — Directories, pricing, wholesale vs. retail, photographing small objects. Practical
  episodes on the specifics of selling handmade jewelry and textiles online.
- **"Selling Price" — Sean D'Souza** — Pricing psychology for products with no obvious
  market price. OOAK handmade work doesn't have a "market rate" the way mass-produced
  jewelry does. This book covers how to price based on the value to the buyer rather
  than the cost of materials + time.
- **[Etsy Seller Handbook](https://www.etsy.com/seller-handbook/)** — Despite being
  platform-specific, the handbook has genuinely useful articles on: photographing
  jewelry (lighting small reflective objects is hard), writing listings that convert,
  and understanding what customers of handmade goods actually care about. Read the
  photography and listing-writing articles regardless of whether you sell on Etsy.
- **"Luxury Brand Management" — Jean-Noël Kapferer** — The academic text on luxury
  branding. Texxturalia operates in the low-volume, high-intent space that overlaps
  with luxury positioning. The relevant concepts: scarcity as a feature (not a bug),
  the importance of the brand myth beyond the product, and why discounting destroys
  luxury value.

### Pricing & Scarcity

- **"The Psychology of Price" — Leigh Caldwell** — How customers perceive and react
  to prices. For OOAK work: the price tells a story. A $200 copper wire piece and a
  $2,000 copper wire piece are both "copper wire" — the price is part of the product
  definition. This book helps you understand what different price points signal.
- **Study: [Pricing luxury goods](https://hbr.org/2013/03/luxury-goods-are-different)**
  (HBR) — Why luxury goods don't follow normal supply/demand. Relevant to the
  "Fractional Scarcity" principle in BRAND.md: Texxturalia deliberately produces
  few pieces, and that scarcity is part of the value proposition.

---

## 3. E-Commerce for One-of-One / Small Inventory

Texxturalia doesn't sell volume — it sells individual pieces, one at a time. This
section covers the practicalities of running e-commerce when the inventory model is
fundamentally different from standard retail.

### Inventory Models for Scarce Work

- **"Drop: A New Model for Selling Online" — various practitioners** — The "drop"
  model: release a small batch at a specific time, sell out, next drop later. Relevant
  for Texxturalia's production rhythm. Not a single canonical book — search for
  "drop model e-commerce" for current practitioner discussions.
- **[Pre-order and waitlist patterns](https://www.productplan.com/guides/pre-order-strategy/)**
  — For pieces that haven't been made yet. Texxturalia's product detail pages could
  include a "notify when available" mechanism for pieces not yet photographed. This is
  a JavaScript feature that could be added to script.js (email collection + notification).

### Commission / Custom Work Flow

- **Study: [How independent jewelry makers handle commissions](https://www.rocketify.com/blog/how-to-handle-custom-jewelry-commissions)** —
  Process design for custom work: intake form, deposit, timeline, revisions,
  delivery. Texxturalia's contact page is the entry point for commissions; the
  process (what happens after someone emails) should be defined separately.
- **"The Commission Book" — various independent creators** — No single canonical text,
  but many independent jewelry/textile makers have published their commission workflows
  publicly. Search for "commission workflow jewelry maker" for specific examples.

### Presentation & Unboxing as Brand

- **"The Unboxing Experience" — various e-commerce design articles** — Packaging is
  part of the product for handmade luxury goods. The box, the wrapping, the note —
  these are the first physical interaction the customer has with Texxturalia, and they
  should carry the same aesthetic as the website. Search for "luxury unboxing experience
  handmade jewelry" for concrete examples and suppliers.
- **[NoIssue](https://noissue.com/)** — Custom sustainable packaging for small businesses.
  Relevant if Texxturalia wants branded boxes, tissue paper, or stickers at small
  quantities. The "sustainable" angle aligns with the handmade/natural aesthetic.

### Technical E-Commerce Considerations

- **[Google Search Central — Product Structured Data](https://developers.google.com/search/docs/appearance/structured-data/product)**
  — Adding structured data to product pages so Google displays price, availability,
  and review stars in search results. For Texxturalia: each product detail page should
  include JSON-LD structured data with the piece name, material, and (when available)
  price. This is a future enhancement, not currently implemented.
- **[Open Graph meta tags](https://ogp.me/)** — The tags that control how a link looks
  when shared on social media (title, description, image). Texxturalia's product pages
  should have OG tags so that when someone shares a piece on Instagram or Twitter, the
  preview shows the product image and name. Currently the site has basic meta tags but
  not full OG tags — a future enhancement.
- **[Canonical URLs](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls)**
  — Since Texxturalia has en/RO mirror pages with identical content (different language),
  canonical tags tell search engines which version to index. Important for SEO to avoid
  duplicate-content penalties. The current setup should be audited for canonical tags.

---

## 4. Product Ownership — Running a Creative Small Business

These resources are about the broader practice of owning and running a product business
when you're also the maker. Not "how to scale a startup" — "how to sustain a small
creative business without burning out or losing the work's integrity."

### The Practice of Product Ownership

- **"The Product Book" — Product School** — General product management introduction.
  The relevant insight for Texxturalia: a product owner thinks about the customer's
  problem first, not the solution. For a handmade business, the "product" isn't just
  the physical piece — it's the entire experience (discovery, purchase, unboxing,
  wearing, gifting). This book helps expand the definition of what you're owning.
- **"Escaping the Build Trap" — Melissa Perri** — Why companies that focus on building
  features (or in this case, making pieces) without understanding the customer value
  get trapped. For Texxturalia: the risk is making pieces because you enjoy making them,
  without checking whether they serve the customer's need (which might be different from
  your creative impulse). The book helps balance creative freedom with customer value.
- **Roman Pichler's blog ([pichler.com](https://www.pichler.com/))** — Product vision
  and strategy without "tech slavery." Pichler writes for product owners who want to
  think clearly about what they're building and why, without becoming slaves to
  agile/scrum dogma. Relevant for creative product owners who find traditional product
  management too sterile for their work.

### Running the Business Side

- **"The E-Myth Revisited" — Michael Gerber** — The classic on why small businesses
  fail: the technician (maker) tries to run the business without building systems. For
  Texxturalia: you're both the maker (jewelry/textiles) and the business owner (website,
  marketing, shipping). This book helps you separate those roles and build systems for
  the business side so the creative side can flourish.
- **"Profit First" — Mike Michalowicz** — Cash flow management for small businesses.
  Handmade businesses often have irregular income (a piece sells, then nothing for a
  month). This book provides a system for managing cash flow so the business survives
  the gaps between sales.
- **"The Art of SEO" — Eric Enge et al.** — Comprehensive SEO reference. Texxturalia
  needs SEO for: product page discoverability (someone searching "handmade copper wire
  jewelry" should find the Corvus universe), brand discoverability (someone searching
  "Texxturalia" should find the site), and bilingual SEO (English and Romanian mirrors
  should both rank in their respective languages). This book covers the depth; for a
  quicker start, see the Learning SEO resources below.

### Learning SEO (Practical, Structured)

- **[Google Search Central](https://developers.google.com/search)** — The primary source.
  Everything Google officially says about how search works, what they look for, and how
  to help them understand your site. Start here before any third-party SEO advice.
- **[Learning SEO](https://learningseo.io/)** — A structured free path through SEO
  fundamentals. Good starting point before the deep dive.
- **[Ahrefs Blog](https://ahrefs.com/blog/)** — Practical, current SEO advice. The
  articles on e-commerce SEO, local SEO, and content SEO are most relevant to
  Texxturalia. Ahrefs is opinionated but generally correct on the fundamentals.
- **[Backlinko](https://backlinko.com/)** — Brian Dean's SEO resource. Focuses on
  actionable tactics. The "link building" articles are relevant — Texxturalia will
  need backlinks from fashion/jewelry blogs, design sites, and maker directories to
  rank well.
- **[Semrush Academy](https://www.semrush.com/academy/)** — Free SEO courses with
  certificates. Good structured learning if you prefer courses over books.

### The Intersection of Craft and Commerce

- **"The War of Art" — Steven Pressfield** — Resistance: the force that keeps creative
  people from doing their work. Not about commerce directly, but essential reading for
  any creative business owner. The book's insight: the professional shows up every day
  regardless of inspiration. For Texxturalia, this applies to both the making and the
  business — you show up to make the pieces AND you show up to run the business.
- **"Creative, Inc." — Ama Rentia + Emily Ende** — Building a creative career as a
  business. Covers the practicalities: pricing, clients, contracts, marketing, finance.
  More general than the niche-specific resources above, but useful as a comprehensive
  starting point.
- **"Range" — David Epstein** — The argument that broad experience beats narrow
  specialization in many fields. Relevant to Texxturalia's multi-medium approach
  (textiles, jewelry, decor, guest artists). The book supports the idea that working
  across mediums isn't a lack of focus — it can be a strength when the mediums share
  a conceptual framework (the primordial chasm).

---

## 5. Texxturalia-Specific Study Notes

These are observations about the project itself — notes for a student studying how
this particular site was built and why.

### Design Decisions Worth Studying

1. **Why two fonts, not one?** — A single-font site is simpler but flatter. The two-font
   system (Montserrat for voice, Cormorant Garamond for presence) creates a tension
   between the rational (sans-serif, modern, geometric) and the ancient (serif, italic,
   carved). This tension IS the brand. Study the font loading strategy in index.html's
   `<head>` — the `preconnect` optimization and `display=swap` behavior are worth
   understanding.

2. **Why no framework?** — React/Vue/tailwind would be the "standard" choice in 2024.
   Texxturalia uses vanilla HTML/CSS/JS for several reasons: the project is small enough
   that a framework's overhead isn't justified; the code serves as a teaching example
   (students should see what actual DOM manipulation looks like, not framework abstractions);
   and the build step would add friction to a project that changes slowly. This is a
   deliberate choice, not a default.

3. **Why the mirror-folder pattern for bilingual?** — Two approaches for bilingual sites:
   (a) a single codebase with language detection/switching (i18n libraries), or (b) mirror
   folders (en/ and ro/ with shared assets). Texxturalia uses (b) because: the content is
   fundamentally different in each language (not just translations — the Romanian copy
   has different rhythm and cultural references); the site is small enough that maintaining
   two directories isn't burdensome; and it keeps the English and Romanian experiences
   cleanly separated. The tradeoff: shared CSS/JS changes must be applied in both places
   (though they're the same files, referenced via `../`).

4. **Why `minmax(0, 1fr)` in the mobile product grid?** — This is a specific CSS pattern
   explained in detail in style.css GROUP 13 and LEARNING.md. The short version: `1fr`
   tracks against the min-content size of the image, which can be very wide. `minmax(0, 1fr)`
   allows the column to shrink below that, preventing horizontal overflow on mobile. This
   is the kind of specific, non-obvious CSS decision that's worth studying.

5. **Why the click-vs-drag discrimination in the gallery?** — The gallery thumbnail strip
   is horizontally scrollable. If you attach a click handler to thumbnails without
   discriminating, dragging to scroll will also trigger the click (after the drag ends).
   The `moved > 10` check in script.js solves this. This is a real UX problem with a
   real solution — study the pointer event handlers in script.js lines 90-121.

### Tools That Ships With the Project

These are the tools used during development that a student reproducing this project
would need:

- **VS Code** with Prettier, Auto Rename Tag, Live Server
- **Squoosh** for image compression before uploading
- **W3C Validator** for checking HTML before committing
- **Google Fonts** (Cormorant Garamond + Montserrat) — embedded via the Google Fonts
  stylesheet link in each page's `<head>`
- **Adobe Color** for palette exploration (the current palette is locked but was
  developed here)
- **Git** for version control — the project is a Git repository. Each page, each change,
  is tracked. Study the commit history to see how the project evolved.

### What's NOT in the Stack (Deliberately)

- **No build step** — No webpack, no Vite, no npm. HTML/CSS/JS files are edited directly
  and deployed as-is. This is possible because the project doesn't use JSX, TypeScript,
  CSS preprocessors, or any compile-to-HTML language.
- **No backend** — No database, no server-side rendering, no API. The site is entirely
  static: HTML files served by a web server (or Netlify/GitHub Pages). This is both a
  constraint (no dynamic features without JavaScript) and a benefit (the site is fast,
  secure, and cheap to host).
- **No analytics** — No Google Analytics, no tracking pixels. The project values the
  visitor's privacy and the site's speed over data collection. If analytics are added
  in the future, they should be minimal and privacy-respecting (e.g., Plausible or
  Fathom, not Google Analytics).
- **No cookies** — The site doesn't set cookies. The hamburger menu state is managed
  via class toggling in the DOM, not via cookies or localStorage.

---

## 6. Further Study — Beyond This Project

If you've read through this file and LEARNING.md and want to go deeper into specific
aspects:

### Frontend Depth

- **"CSS Mastery" — Andy Budd** — Advanced CSS: layout, selectors, specificity, responsive
  design. Goes deeper than this project's CSS but builds directly on the patterns used here.
- **"Hardboiled Web Design" — Andy Clarke** — Practical, opinionated CSS with a focus on
  progressive enhancement and real-world constraints. The philosophy aligns with Texxturalia's
  "vanilla first" approach.
- **[CSS-Tricks](https://css-tricks.com/)** — The definitive online CSS reference. The
  "Almanac" section documents every CSS property. The "Guides" section has deep dives on
  specific topics (Grid, Flexbox, responsive images, etc.).

### JavaScript Depth

- **"You Don't Know JS" — Kyle Simpson** — Deep dive into JavaScript: scope, closures,
  prototypes, async. The project's script.js uses only basic JavaScript (DOM selection,
  event listeners, class manipulation). If you want to understand WHY those patterns
  work the way they do, this series explains the underlying mechanics.
- **[javascript.info](https://javascript.info/)** — Best-structured JavaScript reference
  online. Start with "The JavaScript Language" section; the DOM and events sections are
  directly relevant to script.js.

### Brand & Commerce Depth

- **"The 22 Immutable Laws of Marketing" — Al Ries and Jack Trout** — Foundational
  marketing laws. The relevant one for Texxturalia: the law of focus ("it's better to be
  strong in one area than weak in many"). Texxturalia's focus is narrow: handmade,
  scarce, philosophical objects at the intersection of textile and metal work. The book
  helps you see why narrowing the focus is a strength, not a limitation.
- **"Made to Stick" — Chip Heath and Dan Heath** — Why some ideas survive and others die.
  The Texxturalia brand story ("interrogating the primordial chasm through copper wire and
  atavic envelopes") is sticky — it's unusual, concrete, and emotional. This book explains
  why that works and how to make more of it.

### Looking at Other Handmade Brands

Study these for different approaches to the same challenge (selling scarce handmade work
online):

- **[Mood(s)](https://www.moodsw.net/)** — Jewelry brand with a strong visual aesthetic.
  Study their product photography and presentation.
- **[Woo Hair](https://www.woohair.com/)** — Hair jewelry with a specific aesthetic. Note
  how they present the making process alongside the finished pieces.
- **[Nudie Jeans](https://www.nudiejeans.com/)** — Not jewelry, but a master class in
  presenting handmade/repair culture as brand. Study their "repair shops" and "concept stores"
  as a model for how craft process becomes brand content.
- **[Laurie Trott](https://www.laurietrott.com/)** — Contemporary jewelry with strong
  conceptual positioning. Study how they write about pieces — each piece has a concept
  note, not just a materials list.

---

*This file is curated for the Texxturalia project. Resources are selected for relevance
to building and positioning a handmade e-gallery for OOAK fashion and jewelry. For
general frontend/backend learning paths, see the digital-odyssey project.*
