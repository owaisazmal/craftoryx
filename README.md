# CraftoryX

A public-build website for an indie iOS studio shipping 10 Swift apps in 12 months.

**Live Site:** [craftoryx.com](https://craftoryx.com) (Coming soon)

---

## Project Overview

CraftoryX tracks the journey of building and shipping 10 production-ready iOS apps between September 2025 and August 2026. This site features:

- **Mission & Progress Tracking**: Visual progress bar, timeline, and milestone tracking (0/10 → 10/10)
- **App Showcase**: Individual pages for each of 10 apps with status, tech stack, roadmaps, and changelogs
- **Dev Log**: Weekly build logs with RSS feed
- **Community**: TestFlight beta signups and newsletter subscription
- **Build in Public**: Transparent development with open roadmaps

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

### Accessibility
- VoiceOver support with ARIA labels
- Keyboard navigation
- Skip to main content link
- Color contrast WCAG AA+
- Dynamic Type support

### SEO
- Meta tags on all pages
- Open Graph tags
- Twitter Card support
- Sitemap.xml (auto-generated)
- robots.txt
- RSS feed for blog

### Performance
- Static generation where possible
- Optimized images (add Next.js Image component)
- Minimal JavaScript
- Fast page loads

### Dark Mode
- System preference detection
- Manual toggle
- localStorage persistence

---

## Customization Ideas

- **Analytics**: Add Plausible, Fathom, or Google Analytics
- **Newsletter**: Integrate ConvertKit, Mailchimp, or Buttondown
- **Search**: Add Algolia or Pagefind for content search
- **Comments**: Add Giscus or Utterances to blog posts
- **Monitoring**: Integrate Sentry for error tracking

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
- [ ] Add real app screenshots
- [ ] Integrate analytics
- [ ] Connect newsletter service
- [ ] Add search functionality
- [ ] Set up contact form backend
- [ ] Deploy to production

---

**Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com) ∙ Deployed on [Vercel](https://vercel.com)**
