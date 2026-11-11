# Bhavy Patel Portfolio (React + TypeScript + Vite + Tailwind + Framer Motion)
Run: `npm install && npm run dev` | Build: `npm run build` | Preview: `npm run preview`
Deploy (Vercel/Netlify): import the repo, build command `npm run build`, output directory `dist`.
Content lives in `src/data/` (content.ts, certifications.ts, images.ts). Photos live in `public/images/`.
Missing photos (e.g. ) show an IMAGE_SLOT placeholder until you add the file.

## Adding a certificate
1. Drop the PDF/PNG/JPG into `public/certificates/` (use a clean filename, no spaces).
2. Append one object to the array in `src/data/certifications.ts` (title, provider, category, file; optional issued / validUntil / platform / verifyUrl).
Cards, search, category filters (new categories appear automatically) and Show more / Show less update with no UI changes.
Only add details that are printed on the certificate itself.
