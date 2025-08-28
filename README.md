# Milledge Site (Next.js + Tailwind)

This is a simple Next.js site with your Milledge landing page.

## Quick Start
1. Install Node.js 18+
2. In a terminal:
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000

## Deploy (Vercel)
1. Create a free account at https://vercel.com
2. Create a new project from this folder (connect GitHub or use the Vercel CLI).
3. After deploy, in Project → Settings → Domains, add `milledge.ai` (and optionally `www.milledge.ai`).
4. Vercel will show DNS records; copy them into GoDaddy (Domain → DNS). After records are live, visiting `milledge.ai` will load this site.

## Notes
- Calendly CTAs open in a new tab and include UTM tags.
- Plausible analytics loads only when the site runs on the domain `milledge.ai`.
