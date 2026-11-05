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

Home and product inquiries prepare local content/files; the contact form prepares an email for the visitor to send. They do not submit to a server. Connect a production inquiry service before using the website for lead collection. AI illustrations and catalog dates remain disclosed on the pages.
