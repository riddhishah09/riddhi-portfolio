# Riddhi Shah — Portfolio

A modern, elegant personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Live GitHub Integration** — Projects section fetches repos directly from GitHub API; updates automatically when new repos are pushed
- **Custom Cursor** — Glowing cursor with ring that expands on interactive elements
- **Scroll Progress Indicator** — Gradient bar at the top of the viewport
- **Typing Animation** — Multi-string typewriter effect in the hero
- **Glassmorphism UI** — Frosted glass cards throughout
- **Animated Background Blobs** — Soft, organic gradient shapes
- **Skill Bars** — Animated on scroll reveal
- **GitHub Stats** — Live stats cards (stats, languages, streak, contribution graph)
- **Fully Responsive** — Mobile-first design
- **SEO Optimized** — Metadata, OG tags, semantic HTML
- **Scroll Reveal Animations** — Elements animate in as they enter the viewport
- **Noise Texture Overlay** — Subtle grain for premium feel

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Cormorant Garamond + DM Sans + JetBrains Mono |
| Deployment | Vercel |

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, cursor, glassmorphism, animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page — composes all sections
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx  # Fetches live from GitHub API
│   │   ├── GitHubStats.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── ClientWrapper.tsx  # Cursor, scroll progress, reveal observer
│       └── ProjectCard.tsx
├── lib/
│   └── github.ts         # GitHub API utilities + color maps
└── types/
    └── github.ts         # TypeScript interfaces
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## 🌐 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/riddhishah09/portfolio)

```bash
npx vercel
```

No environment variables required — GitHub API is used as a public endpoint.

## 📝 Customization

1. **Personal details** — Update name, email, location in each section component
2. **Social links** — Grep for `riddhishah09` and replace with your handle
3. **Skills** — Edit `SKILL_GROUPS` in `Skills.tsx`
4. **Achievements** — Edit `ACHIEVEMENTS` array in `Achievements.tsx`
5. **Colors** — CSS variables in `globals.css` (`:root` block)

## 📄 License

MIT — feel free to use this as inspiration for your own portfolio.

---

Built with ❤️ by Riddhi Shah — Mumbai, India
