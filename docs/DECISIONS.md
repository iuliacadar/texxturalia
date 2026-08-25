# Decisions — Texxturalia

> The "why" behind the choices, so future-self (and any collaborator) does
> not have to re-derive them.

## Static site instead of a shop platform

Plain HTML/CSS on GitHub Pages rather than Shopify/WooCommerce:

- **Maximal visual identity** — no rigid templates; the site is an extension
  of the art.
- **Conversational sales model** — for expensive unique pieces, clients value
  human confirmation ("Is the piece available?") over a cart button.
- **Minimal cost & maintenance** — free hosting; no databases to break, no
  plugins to update.
- **Speed & security** — static sites are near-impossible to break into and
  load instantly.
- **SEO sustainability** — clean code; the portfolio grows into a valuable
  archive.

Trade-off accepted: manually marking pieces "Sold" / moving them to Archive
when they find an owner.

## Hand-written product pages instead of automation (for now)

Each exhibit gets its own page duplicated from a template. This allows a
bespoke visual narrative per piece and doubles as apprenticeship: the manual
work now is what makes the future JSON→generator pipeline meaningful.
(See [BACKLOG.md](../BACKLOG.md) for the scaling plan.)

## Bilingual by mirroring, not i18n tooling

A `/ro/` folder of structural replicas sharing one `style.css`. Gives total
editorial control over poetic nuance ("Metal Scripts" vs "Scriituri în Metal").
English-first keeps the root canonical for users and search engines.

## JavaScript kept minimal

One small `script.js`: mobile menu + scroll reveal. No frameworks — the
aesthetic demands near-invisible motion ("silent mechanisms"), and zero
dependencies keep the site fast, secure, and understandable end-to-end.

## Deploy before populating

"Seal, then populate": the architecture went live with placeholders first,
to get version control checkpoints and real-environment testing early.
Content (photography, descriptions) fills in afterwards without fear.

## Learning path staged deliberately

Frontend first (HTML/CSS → JS), Python/Django backend deferred to a separate
experimental project ("Project B") after Texxturalia ships — so the current
site stays pure static while the backend is learned in a context where it's
actually needed.

## MVP mindset

Better a live simple site with 2 finished products than a perfect site never
finished. MoSCoW prioritization; subcategories postponed until ~20 items per
domain.
