# Deployment Guide

This guide covers deploying the CraftoryX website to various platforms.

---

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest option for Next.js projects:

### Via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `craftoryx.com`)
4. Update your DNS records as instructed

---

## Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

Or use the Netlify dashboard:
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## Deploy to Railway

1. Visit [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Railway auto-detects Next.js
4. Click "Deploy"

---

## Deploy to Cloudflare Pages

```bash
# Install Wrangler
npm install -g wrangler

# Deploy
npx @cloudflare/next-on-pages
wrangler pages publish
```

---

## Self-Hosted (VPS/Docker)

### Using Node.js directly

```bash
# On your server
git clone your-repo
cd craftoryx
npm install
npm run build
npm start
```

Use PM2 for production:
```bash
npm install -g pm2
pm2 start npm --name "craftoryx" -- start
pm2 save
pm2 startup
```

### Using Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t craftoryx .
docker run -p 3000:3000 craftoryx
```

---

## Environment Variables

If you add environment variables, set them in your deployment platform:

**Vercel/Netlify:**
- Add in project settings dashboard

**Railway:**
- Add in "Variables" tab

**Self-hosted:**
- Create `.env.local` file (never commit!)

Example `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://craftoryx.com
CONTACT_EMAIL=hello@craftoryx.com
```

---

## Post-Deployment Checklist

- [ ] Site loads at your domain
- [ ] Dark/light mode toggle works
- [ ] All navigation links work
- [ ] RSS feed accessible at `/dev-log/rss.xml`
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Contact form submits (add backend)
- [ ] Newsletter signup works (add backend)
- [ ] Mobile responsive on all pages
- [ ] Test with screen reader (VoiceOver)
- [ ] Run Lighthouse audit (aim for 95+)

---

## Performance Optimization

### Add Next.js Image Optimization

Replace `<img>` tags with Next.js `Image` component:

```tsx
import Image from 'next/image';

<Image
  src="/app-screenshot.png"
  alt="App screenshot"
  width={400}
  height={800}
/>
```

### Enable Analytics

Add to `app/layout.tsx`:

**Plausible:**
```tsx
<script defer data-domain="craftoryx.com" src="https://plausible.io/js/script.js"></script>
```

**Google Analytics:**
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## Troubleshooting

### Build fails on deployment

- Check Node.js version (18+)
- Run `npm run build` locally first
- Check for TypeScript errors

### Static generation errors

- Ensure all dynamic routes have `generateStaticParams`
- Check data imports are correct

### 404 errors

- Verify file structure matches URLs
- Check `next.config.js` settings

### Slow builds

- Use incremental static regeneration
- Consider switching to dynamic routes for frequently updated content

---

## Monitoring & Maintenance

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) (free)
- [Pingdom](https://www.pingdom.com)

### Error Tracking
- [Sentry](https://sentry.io)
- Check Vercel deployment logs

### SEO Monitoring
- Google Search Console
- Submit sitemap: `https://craftoryx.com/sitemap.xml`

---

**Need help?** Open an issue on GitHub or email hello@craftoryx.com
