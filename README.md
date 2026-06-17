# DeskCraftDaily

Home office desk setup and ergonomics review site. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS.

## Install, Build, Start

```bash
npm install
npm run build
npm run start
```

Dev server:
```bash
npm run dev
```

## Project Structure

```
data/
  site.ts         — site config, nav, affiliate tag, editors
  products.ts     — 48 products (8 categories × 6 products)
  articles.ts     — 8 best-pick article configs
  guides.ts       — 6 guide configs

app/
  page.tsx                    — homepage
  best/[slug]/page.tsx        — best-pick articles (8 pages)
  guides/[slug]/page.tsx      — guide articles (6 pages)
  the-desk/page.tsx           — glossary
  setup-notes/page.tsx        — about/methodology
  reach-us/page.tsx           — contact
  how-it-works/page.tsx       — guides index
  privacy-policy/page.tsx
  terms/page.tsx
  affiliate-disclosure/page.tsx

components/
  Header.tsx
  Footer.tsx
  ProductCard.tsx
  ComparisonTable.tsx
  FAQ.tsx
  CTAButton.tsx
  ArticleSidebar.tsx
  RelatedSidebar.tsx
  AccordionSection.tsx
  ErgoCalculator.tsx
  ErgonomicScoreBar.tsx
  HomepageSidebar.tsx
  HomepageRightSidebar.tsx
  NewsletterForm.tsx
```

## Where to Edit Things

### Products
Open `data/products.ts`. Each product has:
- `articleSlug` — which article it belongs to
- `rank` — position in article (1–6)
- `asin` — Amazon ASIN
- `affiliateUrl` — full Amazon URL with tag
- `imageUrl` — Amazon CDN image URL
- `badge`, `summary`, `pros`, `cons`, `bestFor`, `whoItIsFor`, `howToUse`
- `comfortScore`, `buildScore`, `valueScore` — 0–100 for ErgonomicScoreBar

### Articles
Open `data/articles.ts` for metadata (slug, title, category, description, readTime).
Buying guide content (intro, sections, FAQs) is in `app/best/[slug]/page.tsx` in the `buyingGuideContent` object.

### Guides
Open `data/guides.ts` for metadata. Guide body content is in `app/guides/[slug]/page.tsx` in the `guideContent` object.

### Affiliate Tag
Change `affiliateTag` in `data/site.ts` and update all `affiliateUrl` values in `data/products.ts`.

### Site Config
`data/site.ts` — name, domain, email, navigation, editors.

## Deployment (VPS + PM2 + Nginx)

1. SSH into server
2. Clone repo and install: `npm install`
3. Build: `npm run build`
4. Start with PM2: `pm2 start npm --name deskcraftdaily -- start`
5. Configure Nginx reverse proxy to `localhost:3000`

### Nginx Config (example)
```nginx
server {
    listen 80;
    server_name deskcraftdaily.com www.deskcraftdaily.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Add SSL with Certbot: `certbot --nginx -d deskcraftdaily.com -d www.deskcraftdaily.com`

### PM2 Auto-restart on Deploy
```bash
npm run build && pm2 reload deskcraftdaily
```
