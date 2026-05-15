# ODISACYBEROPS.IN

Production-grade cyber threat intelligence and incident response platform for Odisha and India.

## Project Overview

ODISACYBEROPS.IN is built with Next.js, TypeScript, TailwindCSS, Framer Motion, ECharts, Lucide Icons, and MDX.

Features:

- Regional SOC dashboard and threat intelligence hub
- Cyber emergency contact center
- Advisory aggregation and active exploitation radar
- Detection engineering knowledge base
- Incident response playbooks and threat actor profiles
- Odisha cyber awareness portal
- IOC search engine and secure consultation workflows
- Static-first architecture for GitHub Pages and Cloudflare Pages
- Cloudflare Workers edge ingestion and RSS proxy support

## Folder Structure

- `src/app` — app routes and homepage UI
- `src/components` — reusable interface and chart components
- `src/lib` — site metadata, data models, MDX helpers
- `content/blog` — MDX research posts and advisory content
- `public/data` — sample JSON threat feeds and schemas
- `workers` — edge worker and ingestion examples
- `cloudflare` — Cloudflare deployment guidance
- `.github/workflows` — CI/CD workflow examples

## Setup

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Export static site:

```bash
npm run export
```

## Deployment

### GitHub Pages

1. Run `npm run build`.
2. Run `npm run export`.
3. Deploy the resulting `out` directory to GitHub Pages.

### Cloudflare Pages

1. Configure build command as `npm run build`.
2. Set output directory to `out`.
3. Add environment variables from `.env.example`.

### Cloudflare Workers

Use the `workers` folder as a template for worker endpoints:

- `workers/api-worker.ts` — simple serverless API response example
- `workers/rss-worker.ts` — RSS feed proxy with edge caching
- `workers/ingest.ts` — threat feed ingestion helper utilities

## Notes

- Replace values in `.env.example` with production deployment values.
- Add more MDX posts under `content/blog`.
- Extend the platform with real backend APIs and persistent storage when needed.
