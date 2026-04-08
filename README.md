# DKIND TEX — Corporate Website

Premium corporate website for **DKIND TEX Export & Import**, a textile buying house based in Dhaka, Bangladesh.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **React Router DOM** — multi-page routing
- **Lucide React** — icons

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, intro, services, products, why us, quality preview, CTA |
| `/about` | About Us — Company story, mission/vision, values, team |
| `/services` | Services — Six detailed service blocks |
| `/products` | Products — Category showcase with click-to-expand modal |
| `/quality` | Quality & Compliance — Process, pillars, timeline |
| `/contact` | Contact — Inquiry form, contact details, map |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Company Info Used

```
Company:  DKIND TEX
Tagline:  Export & Import
Phone:    +88 01730477428
Email:    orangylemon@gmail.com
Address:  Plot# 05, Shere-E-Bangla Avenue, Block# B,
          Dalipara, Turag, Dhaka-1230, Bangladesh
```

## Updating Content

All text content is co-located in each page file under `src/pages/`. To update:

- **Company stats** → `src/pages/Home.jsx` → `stats` array
- **Services** → `src/pages/Services.jsx` → `services` array
- **Product categories** → `src/pages/Products.jsx` → `categories` array
- **Contact info** → `src/pages/Contact.jsx` + `src/components/Footer.jsx`

## Notes

- The contact form is currently frontend-only. To make it functional, connect it to a backend service (e.g. EmailJS, Formspree, or a custom API endpoint).
- Images are sourced from Unsplash. Replace with real product/factory photography for production.
- Google Maps embed in Contact page uses approximate coordinates for Turag, Dhaka. Update with exact embed URL from Google Maps for precision.
