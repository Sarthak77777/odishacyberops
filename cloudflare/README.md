# Cloudflare Deployment Architecture

This directory contains worker examples and deployment guidance for Cloudflare Workers and Cloudflare Pages.

## Worker modules

- `workers/ingest.ts` — static threat feed ingestion utilities for JSON and API feeds.
- `workers/rss-worker.ts` — RSS ingestion worker skeleton for edge caching external advisories.
- `workers/api-worker.ts` — simple example API worker for serverless threat feed access.

## Deployment options

- Cloudflare Pages can build this Next.js project with static output.
- Cloudflare Workers can host edge ingestion and RSS proxy endpoints for vendor feeds.

## Recommended pipeline

1. Build the Next.js site locally or in CI.
2. Export static assets via `next export` for GitHub Pages.
3. Deploy static site to Cloudflare Pages or GitHub Pages.
4. Use Cloudflare Worker deployment for feed ingestion and caching with `wrangler`.
