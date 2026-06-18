# Ridgeview Consulting

Website for Ridgeview Consulting — a student-led organization delivering market intelligence and competitive research for B2B companies.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + CSS transitions
- **Deployment:** Docker / GCP Cloud Run

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All placeholder content lives in `src/data/content.ts`:

- **Team members** — `leadership` and `analysts` arrays
- **Case studies** — `caseStudies` array
- **Services** — `services` array
- **Blog articles** — `articles` array
- **Site config** — email, domain, tagline in `siteConfig`

Edit the arrays and the site updates automatically.

## Deployment (GCP Cloud Run)

```bash
# Build and push container
gcloud builds submit --tag gcr.io/PROJECT_ID/ridgeview-website

# Deploy to Cloud Run
gcloud run deploy ridgeview-website \
  --image gcr.io/PROJECT_ID/ridgeview-website \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

Map `ridgeviewconsulting.in` to the Cloud Run service via domain mapping.

## Project Structure

```
src/
  app/              # Next.js pages (home, team, insights)
  components/       # Reusable UI components
  data/content.ts   # All editable site content
```
