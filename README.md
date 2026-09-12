# AMUSEMAC STUDIO — “Mad About Cinema.”

> **The official digital identity and portfolio for Amusemac Studio, Mumbai.**
> Film Production • Production Design • Art Direction • Creative Direction • Commercials • Documentaries

---

## Creative Philosophy

Amusemac Studio is a Mumbai-based film production and creative studio. 
*Cinema is not just our business. It is our obsession.*
We build the world before the camera does.

- **Design Attitude**: Editorial rhythm, oversized grotesque typography, tight tracking, generous whitespace, asymmetrical work-first spreads, and slow intentional motion.
- **Palette**: A balance of light cinematic ivory (`#F8F5EE`), deep charcoal (`#121210`), warm black (`#090908`), and muted golden ochre (`#D89B37`).
- **Pacing**: Inspired by 35mm film stock, contact sheets, director notebooks, soundstage blueprints, and title cards.

---

## Architectural Sections

1. **Opening Title Sequence / Hero**: Full viewport 35mm slate, live 24 FPS frame rate indicator, and oversized `MAD ABOUT CINEMA.` typography.
2. **The Manifesto / Intro (Warm Ivory)**: Editorial asymmetric statement: `WE DON’T JUST MAKE FILMS. WE BUILD WORLDS FOR THEM.`
3. **Selected Work (From the Canvas)**: Asymmetrical layout of flagship films, shorts, documentaries, and sets with an interactive deep-dive modal dossier.
4. **35mm Contact Sheet Reel (Rolling Through The Work)**: GSAP ScrollTrigger-powered horizontal sequence with film perforations and frame counters.
5. **Production Design & World-Building**: Interactive 6-step workbench: *01 Concept → 02 Research → 03 Visual Development → 04 Design & Materiality → 05 Build & Dressing → 06 The Shoot*.
6. **Studio Disciplines**: 12 craft specializations with hover-triggered visual reveal and deliverable breakdowns.
7. **Behind The Lens**: Unpolished, authentic documentary studio wall with slate logs and location field notes.
8. **Watch The Reel**: Anamorphic 2.39:1 cinema player with custom timecode counter and audio spectrum visualizer.
9. **Mad About Creation (About)**: Studio pillars, craft ethos, and Mumbai roots.
10. **Collaborators & Honors**: Minimal typography roster of streamers, brands, and film festival recognitions.
11. **Final Frame / End Credits**: Contact desk and interactive call-sheet dispatch.

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP 3 + ScrollTrigger + Lenis Smooth Scroll
- **Audio Engine**: Web Audio API organic camera click & film reel synthesizer
- **Icons**: Lucide React

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Project Structure

```
amusemac-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, metadata, smooth scroll, grain, cursor
│   │   ├── page.tsx           # Main cinematic single-page canvas
│   │   ├── globals.css        # Tailwind v4, custom film typography, theme colors
│   │   ├── not-found.tsx      # Cinematic 404 cut screen
│   │   └── work/[slug]/       # Shareable dynamic project dossiers
│   ├── components/
│   │   ├── Header.tsx         # Status bar, Mumbai timecode, nav, audio toggle
│   │   ├── CustomCursor.tsx   # Kinetic magnetic cursor with contextual labels
│   │   ├── FilmGrain.tsx      # High-performance 35mm grain overlay
│   │   ├── AudioAmbiance.tsx  # Web Audio synthesizer toggle
│   │   ├── ProjectModal.tsx   # Rich project dossier drawer
│   │   ├── CinematicPlayer.tsx# 2.39:1 Anamorphic showreel player
│   │   ├── SmoothScroll.tsx   # Lenis + GSAP ScrollTrigger sync
│   │   └── Footer.tsx         # End credits & studio dispatch
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── FeaturedWorkSection.tsx
│   │   ├── HorizontalReelSection.tsx
│   │   ├── ProductionDesignSection.tsx
│   │   ├── DisciplinesSection.tsx
│   │   ├── BehindTheLensSection.tsx
│   │   ├── ShowreelSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CollaboratorsSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/
│   │   ├── projects.ts        # Flagship films & commercial projects
│   │   ├── disciplines.ts     # 12 studio disciplines
│   │   ├── productionDesign.ts# 6-step world-building system
│   │   ├── behindTheLens.ts   # Documentary BTS moments & slates
│   │   └── collaborators.ts   # Streamers, brands, awards
│   └── lib/
│       ├── audio.ts           # Web Audio organic sound design
│       └── utils.ts           # Helper utilities
└── public/
```

---

## Deployment to Vercel

1. Push this repository to GitHub: `git remote add origin https://github.com/jatwa/amusemac-studio.git`
2. Connect the repository on [Vercel](https://vercel.com).
3. Deploy with default Next.js settings. Zero configuration required.

---

© 2024–2026 AMUSEMAC STUDIO LLP. MAD ABOUT CINEMA.