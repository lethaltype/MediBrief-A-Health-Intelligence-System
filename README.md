# MediBrief — Setup

## Run locally

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in:
   - `DATABASE_URL` — a real PostgreSQL connection string
   - `NEXTAUTH_SECRET` — any random string (`openssl rand -base64 32`)
   - `NEXTAUTH_URL` — `http://localhost:3000` for local dev
   - `GEMINI_API_KEY` — optional; enables real OCR + AI summaries via Google Gemini (see below) — no billing/credit card required for the free tier
   - `N8N_WEBHOOK_URL` — optional; enables real email/WhatsApp delivery (see below)
3. `npx prisma migrate dev --name init`
4. `npm run dev`

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Yes | Random secret for session signing (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Yes | Base URL of the app (`http://localhost:3000` locally, your deployed URL in production) |
| `GEMINI_API_KEY` | No | Enables real OCR (via Gemini's vision capability) and real AI summaries |
| `GEMINI_MODEL` | No | Defaults to `gemini-3.6-flash` |
| `N8N_WEBHOOK_URL` | No | Enables real email/WhatsApp delivery |
| `BLOB_READ_WRITE_TOKEN` | No | Auto-set by Vercel when you attach Vercel Blob storage — required for file uploads to work once deployed to Vercel (see DEPLOYMENT.md) |

## What's real vs. stubbed

Everything is wired end-to-end and real once you add `GEMINI_API_KEY`
(get one free, no billing required, at https://aistudio.google.com/apikey
— make sure it starts with `AIzaSy`, not any other prefix). Without it,
both OCR and AI summary fall back to clearly-labeled placeholders so the
pipeline still runs in dev:

- **OCR (`lib/ocr.ts`)** — uses Gemini's multimodal (vision) capability to
  read the uploaded image or PDF directly and transcribe its text — no
  separate OCR provider or billing account needed. Without the key,
  uploads get a `[OCR STUB]` placeholder instead. Note: very large
  multi-page PDFs (beyond Gemini's ~20MB inline request limit) aren't
  handled — fine for typical 1-2 page lab reports.
- **AI summary (`lib/ai.ts`)** — if `GEMINI_API_KEY` is set, this calls the
  real Google Gemini API (`gemini-3.6-flash` by default, override with
  `GEMINI_MODEL`) and returns a genuine plain-language summary. If it's not
  set, it falls back to a deterministic, clearly-labeled template summary
  so the pipeline still runs end-to-end in dev. Gemini model IDs change
  fairly often — if the default starts returning 404s, check
  https://ai.google.dev/gemini-api/docs/models for the current flash-tier
  model name and set `GEMINI_MODEL` accordingly.
- **Sharing (`app/api/share/route.ts`)** — every share is logged in the
  `ShareLog` table. If `N8N_WEBHOOK_URL` is set, the share payload (channel,
  recipient, summary, file URLs) is POSTed there for actual delivery. If
  not, the share is recorded as `pending` and the API response includes a
  warning that nothing was actually sent.

PDF export (`lib/pdf.ts`) is fully real — it generates an actual PDF with
`pdf-lib`, no external service required.

**File storage (`lib/storage.ts`)** is fully real, and picks its backend
automatically: if `BLOB_READ_WRITE_TOKEN` is set (Vercel Blob), uploads go
there; otherwise it writes to local disk under `/public/uploads`, which
works for local dev and any host with a persistent filesystem — but
**not** Vercel's serverless functions, whose filesystem is read-only in
production. See `DEPLOYMENT.md` for the Vercel Blob setup.

## Known gap

This was built and validated (`tsc --noEmit`, `next build` through type
checking) in a sandbox without a database or general internet access, so
the full user flow has not been run end-to-end yet. Run it against a real
Postgres instance and fix anything that surfaces before treating it as
demo-ready.
