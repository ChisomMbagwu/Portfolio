# Chisom Mbagwu, portfolio

Next.js 14 (App Router) + Tailwind CSS. Static pages, no server routes.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Where to edit
- **All copy:** `data/content.js` (hero, about, case studies, experience, skills).
- **Your photo:** put `headshot.jpg` in `public/` (4:5 portrait works best). A monogram shows until then.
- **Screenshots:** put images in `public/screens/<case-study-slug>/` (png, jpg or webp). They appear automatically on that case study page. Slugs: `vendstash-business-api`, `ajowa-validation`, `findryd-last-mile`. Blur anything confidential.
- **CV button:** drop your PDF in `public/` and set `site.cv` in `data/content.js`, for example `"/Chisom_Mbagwu_CV.pdf"`.
- **GitHub link:** set `site.github` in `data/content.js`.

## Contact form (Resend)
1. Create a free account at resend.com and an API key.
2. Copy `.env.example` to `.env.local` and fill it in.
3. On Vercel, add the same variables under Project Settings, Environment Variables.

Without these the form shows a friendly "email me directly" message, so nothing breaks.

## Deploy to Vercel
1. Create a GitHub repo and push this folder (`git init`, `git add .`, `git commit`, `git push`).
2. On vercel.com choose Add New, Project, import the repo. Framework is detected as Next.js. Click Deploy.
3. Add the environment variables above, set `NEXT_PUBLIC_SITE_URL` to your live URL, and redeploy.
4. Add the live link to LinkedIn (Featured) and your CV.

## Before you publish: the 6-point check
- Can a stranger understand every case study without knowing the industry?
- Is your role clearly separate from your team's?
- Can you defend every number in an interview?
- Is there one honest "what I'd do differently" in each?
- Does it load well on a phone?
- Is the live link public?
