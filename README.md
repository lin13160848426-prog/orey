# XUMIN Packaging

Next.js App Router website with six routes, original public assets and responsive styles.

## Run

Requires Node.js 24.x and npm.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm start
```

## Vercel

Import this repository, use the repository root, select Next.js, and keep the default output directory. Build command: `npm run build`. Install command: `npm ci`.

No environment variables are required to build. Optionally configure `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` in Vercel for the embedded map; restrict the browser key to the deployed domain and Maps Embed API. Without it the page offers a Google Maps link. Never commit credentials.

## Current functionality

Home, product and contact forms submit to /api/inquiry, which forwards allowed fields to FormSubmit's official AJAX endpoint. The recipient is fixed server-side. Email activation is required. Failed submissions retain the visitor's input and show a direct email fallback. The endpoint checks origin, limits payload size, validates fields and rejects honeypot submissions. No inquiry payloads are logged. AJAX uses FormSubmit's service-side spam handling; it does not show the hosted CAPTCHA page. Test actual delivery after deployment; an accepted response is not proof of inbox delivery.
