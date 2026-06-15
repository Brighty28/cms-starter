# Fiverr Gallery & Deployment Guide

Everything you need to turn this repo into a finished Fiverr gig gallery: how to
deploy the two demos, how to capture the screenshots, what images to upload, and
how to present your real client work (Bolt Services).

> **Key idea:** your gallery images are **screenshots of live websites**, not
> files from the zip. The zip is the *engine* that produces those sites. You run
> a demo, it renders, you screenshot it. That's the whole trick.

---

## 1. What goes in the gallery

Fiverr gives you up to **3 images + 1 video + 2 PDFs**. Recommended set:

| Slot | Use | Source |
| --- | --- | --- |
| Image 1 (main) | Branded title card | `gallery/title-card.html` (screenshot at 1280×769) |
| Image 2 | Restaurant demo — desktop | Screenshot of `/` |
| Image 3 | Trades demo — desktop (+ a mobile inset) | Screenshot of `/trades` |
| Video | 60-sec live-edit walkthrough | See `docs/loom-60s-script.md` |
| PDF (optional) | Your packages / process one-pager | Export from the gig pack |

Fiverr's recommended image size is **1280 × 769 px**. Shoot a little larger and crop to that ratio.

---

## 2. Deploy both demos to Vercel

You now have **two demos in one project**: the restaurant at `/` and the
tradesperson at `/trades`. Deploying once gives you two shareable URLs.

> I can't run this deploy for you — it signs into **your** Vercel account from
> your machine. Run these locally; it takes about two minutes.

```bash
# from the repo root, with the project running cleanly (npm run dev) at least once
npm i -g vercel        # one-time, if you don't have the CLI
vercel login           # opens the browser, sign in with GitHub
vercel --prod          # accept the defaults — it auto-detects Next.js
```

When it finishes you'll get a URL like `https://cms-starter-xyz.vercel.app`.
Your two gallery demos are then:

- Restaurant: `https://<your-url>.vercel.app/`
- Trades: `https://<your-url>.vercel.app/trades`

**No environment variables are needed** — both demos render from built-in
fallback content, so they deploy green with zero Sanity setup. (When you connect
a real client's CMS later, add `NEXT_PUBLIC_SANITY_PROJECT_ID` in
Vercel → Settings → Environment Variables and redeploy.)

**Want two separate domains instead of `/trades`?** Either deploy the repo a
second time as a new Vercel project with the root set to the trades route, or
(cleaner long-term) clone the repo per template as described in the main README.
For launching your gig today, the single deploy with two routes is plenty.

---

## 3. Capture the screenshots

**Desktop demo shots (Image 2 & 3):**
1. Run `npm run dev` (or open your live Vercel URL).
2. Set the browser window to ~1280px wide. In Chrome: `F12` → device toolbar
   (`Ctrl/Cmd+Shift+M`) → set width to **1280** → "Responsive".
3. Capture a full-page or above-the-fold shot:
   - Chrome DevTools → `Ctrl/Cmd+Shift+P` → type "screenshot" → **"Capture full size screenshot"**.
4. Do this for both `/` and `/trades`.

**The title card (Image 1):**
1. Open `gallery/title-card.html` in your browser.
2. It contains a frame sized to exactly **1280×769**. Screenshot just that frame
   (DevTools → select the `<div class="card">` → "Capture node screenshot" gives
   a pixel-perfect crop).

**Mobile inset (nice-to-have):**
- Set the device toolbar to iPhone width (~390px), screenshot, and drop it as a
  small phone-shaped overlay on the desktop image using any free editor (Canva,
  Photopea). This visually proves "responsive" in one glance.

---

## 4. Your portfolio entries

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

---

## 5. Launch checklist

- [ ] `vercel --prod` — both demos live and green
- [ ] Open `/` and `/trades` on the live URL, click around, confirm they look right
- [ ] Capture: title card, restaurant desktop, trades desktop (+ mobile insets)
- [ ] Capture a clean screenshot of the Bolt Services site for your portfolio
- [ ] Record the 60-sec Loom (`docs/loom-60s-script.md`)
- [ ] Upload all assets to the gig gallery (main image = title card)
- [ ] Paste the gig title, packages, description, FAQ from `docs/fiverr-gig-launch-pack.md`
