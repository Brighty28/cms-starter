# CMS Website Starter — Next.js + Sanity + Vercel

Your reusable engine for Fiverr CMS website orders. Build once, clone per order, restyle, deploy. This is what turns a 30-hour build into a 4–8 hour one.

---

## What's in here

```
cms-starter/
├── sanity.config.js          # Studio config (the client's editing dashboard)
├── next.config.mjs
├── .env.example              # Copy to .env.local per project
├── src/
│   ├── app/
│   │   ├── layout.js         # Injects CMS theme colours as CSS variables
│   │   └── page.js           # Assembles the page from shared blocks
│   ├── components/
│   │   ├── Header.js         # Reused on every template
│   │   └── Blocks.js         # Hero, ContentSection, MenuSection, Contact, Footer
│   ├── sanity/
│   │   ├── client.js         # Sanity connection + image URL helper
│   │   ├── queries.js        # One GROQ query for the whole site
│   │   └── schemas/          # Content types the client edits
│   └── styles/globals.css    # Theme variables live here
```

The current demo is a **restaurant** (your highest-demand niche). It renders fully even with no Sanity project connected, using built-in fallback content — so you can deploy and screenshot immediately.

---

## First-time setup (do this once)

```bash
npm install
cp .env.example .env.local      # leave values blank to use demo fallbacks
npm run dev                      # http://localhost:3000
```

That's enough to see the styled demo and capture screenshots for your Fiverr gallery.

---

## Connecting a real Sanity CMS (per client order)

1. Create a free project at https://sanity.io/manage — copy the **Project ID**.
2. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Launch the editing dashboard:
   ```bash
   npm run studio
   ```
4. Add the client's content (business name, colours, menu items, sections).
5. The front-end reads it automatically — refresh and it's live.

---

## Your per-order workflow

1. **Clone** this repo into a new folder for the order.
2. **Pick the template** — the demo is restaurant; for trades/clinic, swap `MenuSection` for a services grid using the `service` schema (already included).
3. **Re-theme** — set the client's `primaryColor` and `accentColor` in the Studio. The whole site recolours with no code changes.
4. **Add their content** via the Studio. Upload their logo and images.
5. **Deploy** to Vercel:
   ```bash
   npx vercel --prod
   ```
   Add the two env vars in the Vercel dashboard → Settings → Environment Variables.
6. **Hand over** — deploy the Studio (`npm run studio:deploy`), give the client the URL + login. Record a 2-min Loom showing them how to edit. Done.

---

## Why this wins on Fiverr

- **Live demos as portfolio** — deploy each template variant to its own Vercel URL. Buyers click real sites, not mockups. Almost no seller at this price does this.
- **Genuinely editable** — the client controls content and theme from a clean dashboard. That's your headline gig promise, delivered.
- **Fast performance** — Next.js gives you the speed/SEO selling point honestly.
- **Reusable** — the same components serve every niche, so your delivery time keeps dropping as your template library grows.

---

## Next templates to build (in priority order)

1. ✅ Restaurant (this one)
2. Tradesperson / local service — swap menu for services grid + quote form
3. Clinic / practitioner — services + team + booking link
4. Portfolio / creative — image-led gallery
5. Agency — case studies + services

Each is a styled variant of the same engine. Build them on quiet evenings; each one you add widens what you can sell.
