# Yasser — Portfolio Website

A modern, SaaS-inspired personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS v3** — utility-first styling with custom theme
- **Framer Motion** — scroll and hover animations
- **React Router v6** — routing
- **Lucide React** — icons
- **@fontsource** — Plus Jakarta Sans & Inter (no CDN)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Contact Form

The contact section submits to [Formspree](https://formspree.io). To enable it:

1. Create a form at [formspree.io](https://formspree.io).
2. Copy your form ID from the endpoint (e.g. `https://formspree.io/f/xyzabc` → `xyzabc`).
3. Create a `.env` file and add:
   ```env
   VITE_FORMSPREE_ID=xyzabc
   ```
4. Restart the dev server.

See `.env.example` for reference.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, SectionWave
  hooks/           # useScrollY, useActiveSection
  lib/             # cn (clsx) utility
  styles/          # global.css (Tailwind + base styles)
  App.tsx
  main.tsx
```

## Customization

- **Colors & fonts**: `tailwind.config.js` (theme.extend)
- **Content**: Edit section components in `src/components/` (copy, links, projects, experience, stats).
- **Contact links**: Update email, LinkedIn, and GitHub URLs in `Contact.tsx`.
