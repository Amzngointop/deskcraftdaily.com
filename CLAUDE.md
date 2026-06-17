# DeskCraftDaily — Maintenance Guide

## Architecture

Next.js 16 App Router, TypeScript, Tailwind CSS. All pages are static (SSG). No backend, no database, no auth.

## Adding a New Product

1. Open `data/products.ts`
2. Add a new `Product` object to the `products` array
3. Set `articleSlug` to the correct existing slug
4. Set `rank` to the position (1–6) — re-rank others if needed
5. Use a real Amazon ASIN and construct `affiliateUrl` as `https://www.amazon.com/dp/ASIN?tag=YOURTAG-20`
6. Set `imageUrl` using the Amazon CDN pattern: `https://m.media-amazon.com/images/I/IMAGEID._AC_SL1500_.jpg`
7. Run `npm run build` to verify no errors

**Never use `<Image>` from next/image for Amazon product images** — use plain `<img>` tags. Amazon CDN URLs are already in `next.config.ts` remotePatterns but the plain img tag requirement is explicit.

## Adding a New Article

1. Add article config to `data/articles.ts`
2. Add 6 products for it in `data/products.ts` (rank 1–6, `articleSlug` matching new slug)
3. Add buying guide content to the `buyingGuideContent` object in `app/best/[slug]/page.tsx`
4. Add category icon and description to `app/page.tsx` (`categoryIcons` and `categoryDescriptions` objects)
5. Update `reviewCategories` in `data/site.ts` if adding a new nav link
6. Run `npm run build`

## Adding a New Guide

1. Add guide config to `data/guides.ts`
2. Add guide body content to `guideContent` object in `app/guides/[slug]/page.tsx`
3. Run `npm run build`

## Design System Rules

- Background: `#ffffff` everywhere — never colored section backgrounds except dark sections (`#0D1B2A`)
- Accent: `#1B4FD8` — links, buttons, badges, left-border accents
- Headings: `font-fraunces` class (Fraunces serif, 700 or 900)
- Body text: `font-inter` class or `style={{ fontFamily: 'var(--font-inter)' }}`
- 3D buttons: use `className="btn-3d"` — never recreate inline
- Dashed dividers: use `<hr className="dashed-divider" />`
- Callout boxes: use `className="callout-box"`
- No prices anywhere on the site
- No star ratings
- No personal testing claims ("we tested", "we tried")

## Content Rules

- All article titles must include "(2026)"
- Every article/guide needs 2+ outbound links to OSHA, NIH, Cornell Ergonomics, or similar authoritative sources
- Affiliate disclosure block required on every page with product links
- No lorem ipsum anywhere

## Affiliate Tag

Current tag: `YOURTAG-20`
To update: change `affiliateTag` in `data/site.ts`, then do a find-replace on `YOURTAG-20` across `data/products.ts`.

## Build Requirement

Always run `npm run build` after changes. The build must pass with zero errors before deployment.

```bash
npm run build
```

## Deployment

```bash
npm run build && pm2 reload deskcraftdaily
```

See README.md for full Nginx + PM2 deployment setup.
