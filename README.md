# WilVal Global Resources — website

Marketing site for WilVal Global Resources Ltd (Jos, Plateau State, Nigeria), built from **Version C** of the WilVal Website Design: global presence for partners, local service for collectors.

Stack: Vite 6 · React 19 · TypeScript · React Router 6. Plain CSS with design tokens (no UI framework).

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the built site at http://localhost:4173/wilvalglobal-website/
```

## Structure

```
src/
  App.tsx                 routes
  components/
    Layout.tsx            top strip, sticky header + mobile menu, footer, phone action bar
    LogoLockup.tsx        header logo (globe + live WILVAL wordmark)
    PayCalculator.tsx     "what will I get?" estimator (uses data/site.ts rates)
    FormShell.tsx         shared form wrapper — submit/sending/success states
    Ph.tsx                highlights copy still to be confirmed
  data/site.ts            ALL business details: phones, email, rates, hours, bag types, partner types, impact numbers
  pages/                  Home, Sell, Partner, About, Polythene, Community, Contact, NotFound
  styles/tokens.css       colours, type, spacing, radius (mirrors the WilVal Design System)
  styles/global.css       layout and component styles
  assets/                 logos and photos (from the WilVal Facebook page), exported as WebP
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home (hero + pay calculator, what we do, impact, work with us, gallery) |
| `/sell` | Sell your waste: rates, how it works, pickup form, yard, FAQ |
| `/partner` | Partner with us: strengths, partner types, enquiry form |
| `/about` | Story, promises, leadership, companies, milestones |
| `/polythene` | Wilval Polythene range and quote form |
| `/community` | Programmes, gallery, support a programme |
| `/contact` | Local desk, partner desk, general form |

## Before launch

1. **Rates** — set real prices in `src/data/site.ts` → `rates`, then `confirmed: true` (removes the "Sample rates" badge).
2. **Placeholders** — search the code for `<Ph>` or `[` to find copy to confirm: yard hours, pickup minimum, payment method, founding story, milestones, CEO quote, bag sizes, programme counts, impact figures, partner reply time, map pin.
3. **Forms** — `FormShell` only logs submissions. Pass an `onSubmit` that POSTs to your backend (e.g. a small FastAPI or Spring Boot endpoint that emails info@wilvalglobal.com) or a form service.
4. **Hosting (GitHub Pages)** — `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
   In the repo: Settings → Pages → Source: **GitHub Actions**. The site is served at
   https://devguywilly.github.io/wilvalglobal-website/ (`base` in `vite.config.ts`). The build copies `index.html` to
   `404.html` so deep links like `/sell` work. When you point a custom domain (wilvalglobal.com) at Pages, add a
   `public/CNAME` file containing the domain and set the repo variable / env `VITE_BASE=/`.
5. **Logo** — the logos are raster files recovered from Facebook. Commission a vector (SVG) redraw for print.
