# CraftoryX

> A public-build website for an indie iOS studio shipping 10 Swift apps in 12 months.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Live Site:** [craftoryx.com](https://craftoryx.com) (Coming soon)

---

## 🚀 Quick Start

```bash
# Navigate to project
cd craftoryx

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📖 Project Overview

CraftoryX tracks the journey of building and shipping 10 production-ready iOS apps between September 2025 and August 2026.

### ✨ Key Features

- 📊 **Mission & Progress Tracking** - Visual progress bar, timeline, and milestone tracking (0/10 → 10/10)
- 📱 **App Showcase** - Individual pages for each of 10 apps with status, tech stack, roadmaps, and changelogs
- 📝 **Dev Log** - Weekly build logs with RSS feed
- 👥 **Community** - TestFlight beta signups and newsletter subscription
- 🔓 **Build in Public** - Transparent development with open roadmaps
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- ♿ **Accessible** - WCAG AA+ compliant with screen reader support
- 🌗 **Dark Mode** - System-aware theme with manual toggle

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **SEO**: Sitemap.xml, robots.txt, Open Graph tags

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/craftoryx.git
cd craftoryx

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
craftoryx/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── projects/            # Projects list & individual app pages
│   ├── dev-log/             # Blog list & post pages + RSS
│   ├── about/               # About page
│   ├── contact/             # Contact form
│   ├── privacy/             # Privacy policy
│   ├── sitemap.xml/         # Dynamic sitemap
│   └── robots.txt/          # SEO robots file
├── components/              # Reusable UI components
│   ├── AppCard.tsx          # App card component
│   ├── StatusChip.tsx       # Status badge
│   ├── ProgressBar.tsx      # Progress visualization
│   ├── Timeline.tsx         # Release timeline
│   ├── PostCard.tsx         # Blog post card
│   ├── Header.tsx           # Site header with nav
│   ├── Footer.tsx           # Site footer
│   └── ThemeToggle.tsx      # Dark/light mode toggle
├── data/                    # Data files
│   ├── apps.ts              # 10 app definitions
│   └── posts.ts             # Blog posts
├── types/                   # TypeScript types
│   └── index.ts             # Shared type definitions
├── public/                  # Static assets (add images here)
└── README.md                # This file
```

---

## Editing Content

### Adding/Editing Apps

Edit `data/apps.ts`:

```typescript
{
  id: 'a1',
  name: 'App Name',
  slug: 'app-name',
  shortDescription: '1-2 sentence pitch',
  description: 'Longer description',
  status: 'Planned' | 'In Progress' | 'Released',
  targetDate: '2026-01',
  tech: ['SwiftUI', 'CoreData'],
  features: ['Feature 1', 'Feature 2'],
  roadmap: [
    { label: 'MVP', done: true },
    { label: 'Beta', done: false }
  ],
  changelog: [
    {
      date: '2025-10-01',
      version: '0.1.0',
      notes: ['Initial release']
    }
  ],
  links: {
    testflight: 'https://testflight.apple.com/...',
    appstore: 'https://apps.apple.com/...'
  },
  problem: 'What problem does this solve?',
  solution: ['How does it solve it?']
}
```

### Adding Blog Posts

Edit `data/posts.ts`:

```typescript
{
  id: 'p1',
  title: 'Post Title',
  slug: 'post-slug',
  date: '2025-10-01',
  tags: ['tag1', 'tag2'],
  summary: '1-2 sentence summary',
  content: `Full markdown content here...`
}
```

### Customizing Branding

- **Site Name**: Update in `app/layout.tsx` metadata and `components/Header.tsx`
- **Colors**: Edit Tailwind classes throughout components
- **Logo**: Add to `public/` and update `components/Header.tsx`
- **Social Links**: Update in `components/Footer.tsx` and `app/about/page.tsx`

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables if needed
4. Deploy

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Cloudflare Pages

---

## Features

### 📱 Mobile Responsive
- Fully responsive on all devices (phone, tablet, desktop)
- Mobile hamburger menu with smooth animations
- Touch-friendly tap targets (≥44px)
- Optimized typography for all screen sizes
- Horizontal scroll timeline on mobile
- Tested on iPhone, iPad, and desktop browsers

### ♿ Accessibility
- VoiceOver support with ARIA labels
- Keyboard navigation throughout
- Skip to main content link
- Color contrast WCAG AA+
- Touch targets meet accessibility guidelines
- Screen reader optimized

### 🔍 SEO
- Meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap.xml (auto-generated)
- robots.txt configuration
- RSS feed for blog at `/dev-log/rss.xml`
- Semantic HTML structure

### ⚡ Performance
- Static generation where possible
- Fast page loads (< 1s)
- Minimal JavaScript bundle
- Lighthouse score ready (95+)
- Optimized Tailwind CSS output

### 🌗 Dark Mode
- System preference detection
- Manual toggle button
- localStorage persistence
- Smooth transitions
- High contrast in both modes

---

## 📋 Available Pages

- **/** - Home page with hero, progress, timeline, and featured apps
- **/projects** - All 10 apps with filterable status (All, Released, In Progress, Planned)
- **/projects/[slug]** - Individual app detail pages with roadmap, changelog, and features
- **/dev-log** - Blog list with 3 sample posts
- **/dev-log/[slug]** - Individual blog post pages
- **/dev-log/rss.xml** - RSS feed for blog subscribers
- **/about** - Mission, constraints, skills, and commitments
- **/contact** - Contact form, newsletter signup, and social links
- **/privacy** - Privacy policy
- **/sitemap.xml** - Auto-generated sitemap
- **/robots.txt** - SEO robots configuration

---

## 📚 Documentation

- **README.md** - This file (setup and usage)
- **DEPLOYMENT.md** - Deployment guide for various platforms
- **MOBILE_RESPONSIVE.md** - Mobile responsive design guide

---

## Customization Ideas

- **Analytics**: Add Plausible, Fathom, or Google Analytics
- **Newsletter**: Integrate ConvertKit, Mailchimp, or Buttondown
- **Search**: Add Algolia or Pagefind for content search
- **Comments**: Add Giscus or Utterances to blog posts
- **Monitoring**: Integrate Sentry for error tracking
- **Images**: Replace placeholder images with real app screenshots
- **Contact Form**: Connect to Formspree, SendGrid, or custom API

---

## Contributing

This is a personal project, but suggestions are welcome! Open an issue to discuss ideas.

---

## License

MIT License - feel free to use this as a template for your own projects.

---

## Support

Questions? Issues? Reach out:
- **Email**: hello@craftoryx.com
- **Twitter**: [@craftoryx](https://twitter.com/craftoryx)
- **GitHub Issues**: [github.com/yourusername/craftoryx/issues](https://github.com/yourusername/craftoryx/issues)

---

## Roadmap

- [x] Core site structure
- [x] All pages implemented
- [x] Dark mode
- [x] RSS feed
- [x] SEO optimization
- [x] Mobile responsive design
- [x] Accessibility features (WCAG AA+)
- [x] 10 app placeholders with sample data
- [x] 3 sample blog posts
- [ ] Add real app screenshots
- [ ] Integrate analytics
- [ ] Connect newsletter service
- [ ] Add search functionality
- [ ] Set up contact form backend
- [ ] Deploy to production

---

**Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com) ∙ Deployed on [Vercel](https://vercel.com)**
