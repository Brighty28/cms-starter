# Fiverr Gallery & Deployment Guide

Everything you need to turn this repo into a finished Fiverr gig gallery: how to
deploy the two demos, how to capture the screenshots, what images to upload, and
how to present your real client work (Bolt Services).

> **Key idea:** your gallery images are **screenshots of live websites**, not
> files from the zip. The zip is the *engine* that produces those sites. You run
> a demo, it renders, you screenshot it. That's the whole trick.

---

## 1. What goes in the gallery

Fiverr gives you up to **3 images + 1 video + 2 PDFs**. Everything below is
pre-built in the `gallery/` folder — you just open each file and screenshot (for
images) or Print → Save as PDF (for documents).

| Slot | Use | Source file |
| --- | --- | --- |
| Image 1 (main) | Branded title card | `gallery/title-card.html` |
| Image 2 | Restaurant site card | `gallery/restaurant-card.html` |
| Image 3 | Trades site card | `gallery/trades-card.html` |
| Video | 60-sec live-edit walkthrough | See `docs/loom-60s-script.md` |
| PDF 1 | Packages & process one-pager | `gallery/packages-onepager.html` |
| PDF 2 | Portfolio / template showcase | `gallery/portfolio-onepager.html` |

Each image card is a browser-framed, on-brand composition sized to Fiverr's
recommended **1280 × 769 px** — they read as polished site shots and look more
professional than raw screenshots. (Prefer an authentic raw screenshot of the
real live site instead? See §3 — both work.)

---

## 2. Deploy both demos to Vercel

You now have **three demos in one project**: the restaurant at `/`, the
tradesperson at `/trades`, and the clinic at `/clinic`. Deploying once gives you
three shareable URLs.

> **If your Vercel build fails with `No Output Directory named "dist" found`:**
> that's a wrong **Framework Preset** — the build succeeded, Vercel just looked
> in the wrong folder for the output. Fix it in
> **Project → Settings → Build & Output Settings**: set **Framework Preset =
> Next.js**, and set **Output Directory** back to its default (leave the override
> off — Next.js uses `.next`, handled automatically). Then **Redeploy**. The repo
> also ships a `vercel.json` (`"framework": "nextjs"`) so fresh imports get this
> right automatically.

> I can't run this deploy for you — it signs into **your** Vercel account from
> your machine. Run these locally; it takes about two minutes.

```bash
# from the repo root, with the project running cleanly (npm run dev) at least once
npm i -g vercel        # one-time, if you don't have the CLI
vercel login           # opens the browser, sign in with GitHub
vercel --prod          # accept the defaults — it auto-detects Next.js
```

When it finishes you'll get a URL like `https://cms-starter-xyz.vercel.app`.
Your three gallery demos are then:

- Restaurant: `https://<your-url>.vercel.app/`
- Trades: `https://<your-url>.vercel.app/trades`
- Clinic: `https://<your-url>.vercel.app/clinic`

**No environment variables are needed** — both demos render from built-in
fallback content, so they deploy green with zero Sanity setup. (When you connect
a real client's CMS later, add `NEXT_PUBLIC_SANITY_PROJECT_ID` in
Vercel → Settings → Environment Variables and redeploy.)

**Want two separate domains instead of `/trades`?** Either deploy the repo a
second time as a new Vercel project with the root set to the trades route, or
(cleaner long-term) clone the repo per template as described in the main README.
For launching your gig today, the single deploy with two routes is plenty.

---

## 3. Capture the three images (recommended: the gallery cards)

All three image cards work the same way — open the HTML file and screenshot the
1280×769 frame:

1. Open the file in Chrome: `gallery/title-card.html`, `gallery/restaurant-card.html`,
   `gallery/trades-card.html`.
2. Right-click the card → **Inspect** → in the Elements panel select the
   `<div class="card">` element.
3. With it selected, open the command menu (`Ctrl/Cmd+Shift+P`), type
   **"screenshot"**, choose **"Capture node screenshot"**. You get a pixel-perfect
   1280×769 PNG — no cropping needed.
4. Upload: title card → Image 1 (Primary), restaurant → Image 2, trades → Image 3.

> Give the page a second to load the web fonts before capturing.

**Alternative — raw screenshot of the real live site** (more authentic, optional):
1. Open your live `…vercel.app/` or `…/trades` (or run `npm run dev`).
2. `F12` → device toolbar (`Ctrl/Cmd+Shift+M`) → set width to **1280** → "Responsive".
3. `Ctrl/Cmd+Shift+P` → "screenshot" → **"Capture full size screenshot"**, then
   crop to a 1280×769 region.

**Mobile inset (nice-to-have):**
- Set the device toolbar to iPhone width (~390px), screenshot, and drop it as a
  small phone-shaped overlay on the desktop image using any free editor (Canva,
  Photopea). This visually proves "responsive" in one glance.

---

## 4. The two PDF documents

Fiverr's "Documents" slots accept **PDFs only**. Two are ready in `gallery/`:

- `packages-onepager.html` → **Packages & Process** (your tiers, how it works, add-ons)
- `portfolio-onepager.html` → **Portfolio & Template Showcase** (Bolt + the three demos)

Turn each into a PDF straight from your browser — no extra software:

1. Open the `.html` file in Chrome.
2. `Ctrl/Cmd+P` → **Destination: Save as PDF**.
3. **Paper size: A4**, **Margins: Default**, and tick **More settings → Background
   graphics** (this is what makes the coloured header bar print — don't skip it).
4. Save, then upload the two PDFs to Fiverr's Documents section.

---

## 5. Your portfolio entries

Use these as the captions / "My Portfolio" items on your gig and Fiverr profile.

### ⭐ Bolt Services — real client site (lead with this)
- **URL:** https://www.boltservices.co.uk/
- **Why it leads:** it's a real, recently launched, live client site — the
  single strongest trust signal you have. Real work beats demos every time.
- **To add it:** open the site, capture a clean desktop screenshot of the
  homepage (and a mobile one), and upload as a portfolio image with a short
  caption, e.g. *"Live client website — Bolt Services. Fast, responsive, built
  to convert."*
- _Note: fill in the one-line description of the business/services once you grab
  the screenshot — keep it benefit-led ("a fast, modern site that brings in
  enquiries"), not tech-led._

### Restaurant demo — "The Copper Table"
- **Route:** `/`
- **Shows:** hero, about, full menu, experience section, booking contact.
- **Caption idea:** *"Restaurant & café template — menu, gallery and bookings,
  all editable by the owner."*

### Tradesperson demo — "Sterling Plumbing & Heating"
- **Route:** `/trades`
- **Shows:** hero with quote CTA, trust bar, services grid, reviews, quote
  banner, contact.
- **Caption idea:** *"Local trades template — services, reviews and free-quote
  call-to-action. The owner edits everything themselves."*

### Clinic demo — "Riverside Dental & Wellness"
- **Route:** `/clinic`
- **Shows:** calming hero with booking CTA, trust bar, treatments grid, team
  section, patient reviews, and an appointment booking section.
- **Caption idea:** *"Clinic & practitioner template — treatments, team and
  online booking. Perfect for dentists, physios, therapists and salons."*

---

## 6. Launch checklist

- [ ] Deploy live and green (`/`, `/trades`, `/clinic` all load)
- [ ] Image 1: screenshot `gallery/title-card.html` → upload as Primary
- [ ] Image 2: screenshot `gallery/restaurant-card.html`
- [ ] Image 3: screenshot `gallery/trades-card.html`
- [ ] PDF 1: Print → Save as PDF from `gallery/packages-onepager.html` (Background graphics ON)
- [ ] PDF 2: Print → Save as PDF from `gallery/portfolio-onepager.html` (Background graphics ON)
- [ ] Record the 60-sec Loom (`docs/loom-60s-script.md`)
- [ ] Add a Bolt Services screenshot to your profile portfolio
- [ ] Paste the gig title, packages, description, FAQ from `docs/fiverr-gig-launch-pack.md`
