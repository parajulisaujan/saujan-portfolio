# Saujan Parajuli — Portfolio

Personal portfolio for a Computer Science graduate focused on AI, data, and software engineering. Production domain: **https://saujanparajuli.com**.

Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons. Most of the site renders on the server; navigation and theme switching use a small client component. Fonts are system fonts, with no external font requests.

## Development

Use Node.js 22 or newer.

```sh
npm install
npm run dev
```

## Checks and production

```sh
npm run lint
npm run typecheck
npm run build
npm start
npm test
```

Browser tests use locally installed Google Chrome and the production server on port 3000. If no server is running, the test configuration starts one. Run the build first.

## Structure and content

- `app/` — main page, printable resume, styles, and SEO routes.
- `components/` — navigation and portfolio sections.
- `data/` — editable personal details, projects, skills, work, education, and involvement.
- `public/resume/` — public downloadable PDF.
- `scripts/` — PDF generation.
- `tests/` — responsive, accessibility, theme, and content checks.

Update the files in `data/` to edit the site and printable resume together. Contact information is centralized in `data/site.ts`. Project links and the fictional-data disclosure live in `data/projects.ts`. `data/resume.ts` contains the shorter resume summary and skill groups; languages are shared with the website, including Java's Basic label.

With a server running the latest content, use `npm run resume` to regenerate the public PDF. It uses headless Google Chrome through Playwright and checks that the PDF is one page with matching contact information before replacing the public file. `SITE_URL` optionally points the script to a different local server. If using the production server, rebuild and restart it before generating the PDF.

Browser tests inspect layouts at five screen widths, navigation, themes, accessibility, and project links. PDF checks extract the actual document text and link annotations to catch stale contact information, missing skills, or extra pages. PDF.js is a development dependency only.

## Deployment

Import this repository into Vercel using the Next.js preset and the default build command, `npm run build`. No environment variables or external services are required. Add `saujanparajuli.com` in the deployment settings and configure the DNS records provided by Vercel. Keep the root domain primary and redirect `www` to it if configured. Metadata, sitemap, and social previews already use the root domain.
