# Marketing Site for {ProductName}

A modern, animated marketing site for a multi-tenant DBaaS targeting startups and SMBs. Built with Vite + React + Tailwind.

## Scripts

- npm run dev — start the dev server
- npm run build — production build
- npm run preview — preview the build

Environment:
- VITE_BACKEND_URL — base URL of the backend API
- VITE_PRODUCT_NAME — product display name

Backend endpoints used:
- POST /api/leads — capture email signups
- POST /api/demos — capture demo requests
- GET  /api/tenant/demo — demo tenant payload for playground

## Design & Motion
- Friendly, professional tone with generous whitespace
- Subtle glassmorphism panels, soft shadows
- Animations: entrance (600ms, cubic-bezier(.2,.9,.3,1)), hover micro-interactions (150–400ms)

## Run locally
1. Install deps and start the environment (this workspace auto-installs). If running outside, install Node 18+.
2. Set VITE_BACKEND_URL to your backend server origin.
3. npm run dev and open http://localhost:3000.

## Payments & Analytics placeholders
- Pricing buttons and note indicate where Stripe/Paddle hooks would go.

## Accessibility
- Semantic sections, aria labels on dialogs/forms, keyboard navigable.
