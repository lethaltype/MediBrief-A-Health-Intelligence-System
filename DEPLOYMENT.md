# DEPLOYMENT.md — Local run → GitHub → Vercel

## Part 1 — Run it on your local machine

### Prerequisites
- Node.js 18 or later (`node -v` to check)
- A PostgreSQL database. Easiest options if you don't want to install
  Postgres yourself:
  - [Neon](https://neon.tech) — free tier, gives you a `DATABASE_URL` instantly
  - [Supabase](https://supabase.com) — same idea, also free tier
  - Or install Postgres locally / via Docker if you prefer

### Steps

```bash
# 1. Unzip the project
unzip medibrief-app.zip
cd medibrief

# 2. Install dependencies (this also runs `prisma generate` automatically
#    via the postinstall script)
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

Open `.env.local` and fill in:

```env
DATABASE_URL="postgresql://user:password@host:5432/medibrief"
NEXTAUTH_SECRET="<paste output of: openssl rand -base64 32>"
NEXTAUTH_URL="http://localhost:3000"
GEMINI_API_KEY=""      # optional — leave blank to use the stub AI summary
GEMINI_MODEL="gemini-3.6-flash"
N8N_WEBHOOK_URL=""     # optional — leave blank to just log shares without sending
```

```bash
# 4. Create the database tables
npx prisma migrate dev --name init

# 5. Run it
npm run dev
```

Open `http://localhost:3000`. You should see the splash screen, be able to
sign up, land on the dashboard, and upload a file.

**If something breaks here**, copy the exact terminal error (and browser
console error, if it's a client-side issue) back to me — this is the one
part of the app I have not been able to run myself, so this is the most
likely place for a first bug to surface.

---

## Part 2 — Push to GitHub

```bash
cd medibrief
git init
git add .
git commit -m "Initial commit: MediBrief"
```

Create a new empty repo on GitHub (github.com → New repository — **don't**
initialize it with a README, since your local project already has one),
then:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, and `.env*` — your
secrets won't get committed. Double-check `git status` before your first
push if you want to be extra sure nothing sensitive is staged.

---

## Part 3 — Deploy on Vercel

### 3.1 Import the project
1. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
2. Import the GitHub repo you just pushed.
3. Framework preset should auto-detect as **Next.js** — leave build/output
   settings on their defaults.

### 3.2 Set up a production database
Vercel doesn't host Postgres itself. Easiest path:
- In the Vercel dashboard: **Storage → Create Database → Postgres**
  (Vercel Postgres, powered by Neon) — this auto-injects `DATABASE_URL`
  into your project's environment variables.
- Or use a `DATABASE_URL` from Neon/Supabase directly, added manually
  (see 3.3 below).

### 3.3 Set environment variables
In the Vercel project: **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `DATABASE_URL` | From step 3.2 (auto-filled if you used Vercel Postgres) |
| `NEXTAUTH_SECRET` | Generate a new one: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Your Vercel URL, e.g. `https://your-app.vercel.app` (set this **after** your first deploy gives you the URL, then redeploy) |
| `GEMINI_API_KEY` | Optional |
| `GEMINI_MODEL` | Optional, defaults to `gemini-3.6-flash` |
| `N8N_WEBHOOK_URL` | Optional |

### 3.4 Set up file storage (required for uploads to work)
Vercel's serverless functions have a **read-only filesystem** in
production — the app's fallback local-disk storage will not work there.
Instead:
1. In the Vercel dashboard: **Storage → Create Database → Blob**.
2. Connect it to your project — this automatically adds
   `BLOB_READ_WRITE_TOKEN` to your environment variables.
3. `lib/storage.ts` already detects this token and switches to Vercel Blob
   automatically — no code changes needed.

### 3.5 Run the database migration against production
Vercel doesn't run `prisma migrate` for you. From your local machine, with
your **production** `DATABASE_URL` temporarily in `.env.local` (or passed
inline):

```bash
DATABASE_URL="<your production DATABASE_URL>" npx prisma migrate deploy
```

`migrate deploy` (not `migrate dev`) is the correct command for production —
it applies existing migrations without prompting or generating new ones.

### 3.6 Deploy
Push to `main` (or click **Deploy** in the Vercel dashboard). Vercel will:
1. Run `npm install`, which triggers `postinstall: prisma generate`
2. Run `next build`
3. Deploy

Once it's live, go back to **Settings → Environment Variables**, set
`NEXTAUTH_URL` to your actual deployed URL if you hadn't already, and
redeploy so auth callback URLs resolve correctly.

### 3.7 Optional: n8n sharing automation
If you're using the `medibrief-share-automation.json` n8n workflow from
earlier, set its production webhook URL as `N8N_WEBHOOK_URL` in Vercel's
environment variables (see `n8n-setup-README.md` for setting up n8n
itself).

---

## Troubleshooting checklist

- **500 error on sign up/sign in** → usually `DATABASE_URL` wrong or
  migrations not applied. Check `npx prisma migrate deploy` ran against
  the right database.
- **Upload succeeds but file is missing after refresh (on Vercel)** →
  Vercel Blob isn't connected. Check `BLOB_READ_WRITE_TOKEN` is set.
- **"Invalid `credentials`" or session issues** → `NEXTAUTH_SECRET` not
  set, or `NEXTAUTH_URL` doesn't match the actual deployed URL.
- **AI summaries look like `[AI STUB] ...`** → expected without
  `GEMINI_API_KEY` set. Not a bug.
- **Shares show as "pending" and nothing arrives** → expected without
  `N8N_WEBHOOK_URL` set and the n8n workflow activated. Not a bug.
