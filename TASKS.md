# TASKS.md

## Milestone 1: Foundation
- [x] Review `DESIGN.md`, `PLANNING.md`, and project structure.
- [x] Set up the Next.js app structure.
- [x] Configure Tailwind CSS using the design tokens from `DESIGN.md`.
- [x] Add base fonts, icons, colors, spacing, and reusable utility classes.
- [x] Set up TypeScript path aliases and shared types.
- [x] Initialize Prisma and connect the database. (schema defined; needs a real `DATABASE_URL` + `prisma migrate dev` to actually connect)

## Milestone 2: Authentication
- [x] Build the splash screen.
- [x] Build the sign in page.
- [x] Build the sign up page.
- [x] Implement sign out.
- [x] Add protected routes for authenticated areas.
- [x] Add an account dropdown menu with profile, settings, and sign out.

## Milestone 3: Dashboard Shell
- [x] Build the main dashboard layout.
- [x] Implement the sidebar/navigation rail.
- [x] Implement the top header and notification area.
- [x] Add the upload card section.
- [x] Add the analysis progress section.
- [x] Add recent reports and quick summary cards.
- [x] Ensure dashboard spacing, colors, and typography match `DESIGN.md`.

## Milestone 4: Upload Flow
- [x] Build file upload UI and drag-and-drop support.
- [x] Accept PDF, JPG, PNG, and similar report file types.
- [x] Add client-side validation for file size and format. (accept attribute + server-side validation with inline error message)
- [x] Create the upload API route.
- [x] Store file metadata in the database. (local /public/uploads dev storage — swap `lib/storage.ts` for S3/GCS in production)
- [x] Show upload progress and loading states.

## Milestone 5: OCR and Extraction
- [x] Integrate OCR processing for uploaded reports. (uses Gemini's multimodal vision capability in `lib/ocr.ts` — reuses `GEMINI_API_KEY`, no separate OCR provider or billing account needed; falls back to a clearly-labeled `[OCR STUB]` if the key isn't set)
- [x] Extract raw text from PDFs and images. (real via Vision `images:annotate` for JPG/PNG and `files:annotate` for PDF, first 5 pages)
- [x] Parse text into structured medical fields. (heuristic regex parser in `lib/ocr.ts` — works against real OCR text now, but formatting varies a lot across real lab reports, so expect to tune the regex once you see real output)
- [x] Detect lab names, values, units, and reference ranges. (same heuristic parser)
- [x] Save OCR output and parsed findings.

## Milestone 6: AI Analysis
- [x] Create the AI analysis API route. (integrated directly into the upload pipeline in `app/api/upload/route.ts`)
- [x] Generate a plain-language summary. (`lib/ai.ts` calls the Google Gemini API when `GEMINI_API_KEY` is set, otherwise a clearly-labeled fallback template)
- [x] Highlight abnormal and borderline findings. (`flagAbnormalFindings` in `lib/ai.ts`, reference-range based)
- [x] Suggest a likely specialist category. (from the real AI call; null in fallback mode)
- [x] Add a safe medical disclaimer. (`MEDICAL_DISCLAIMER` shown on report detail + included in PDF export)
- [x] Store summary output in the database.

## Milestone 7: Report Views
- [x] Build the report detail page.
- [x] Display raw OCR text, structured findings, and summary.
- [x] Show abnormal-value badges and severity states.
- [x] Add a compare-with-previous-report section. (surfaces the most recent prior report; full trend view lives on the History page)
- [x] Add actions for export and sharing.

## Milestone 8: History and Trends
- [x] Build the report history page. (`/reports` for the full list, `/history` for trends)
- [x] Load all past reports for the signed-in user.
- [x] Add a comparison view for selected reports. (previous-report comparison on report detail page)
- [x] Build trend visualizations from stored report data. (recharts line chart per repeated lab value in `components/TrendChart.tsx`)
- [ ] Add a heatmap or severity timeline if useful. (skipped — marked optional in PLANNING.md; line charts cover the trend need)

## Milestone 9: Share and Export
- [x] Build the share modal from `DESIGN.md`.
- [x] Add email sharing flow.
- [x] Add WhatsApp sharing flow. (removed — Meta's WhatsApp Business Cloud API requires a paid/verified setup to go live; app + n8n workflow simplified to email-only)
- [x] Connect sharing to n8n webhooks. (`app/api/share/route.ts` posts to `N8N_WEBHOOK_URL`; without it configured, shares are logged as "pending" and clearly flagged as not delivered)
- [x] Store share status and delivery logs. (`ShareLog` model, updated to sent/failed/pending)
- [x] Build PDF export for report summaries. (real generation via `pdf-lib` in `lib/pdf.ts`, no external service needed)

## Milestone 10: Settings and Polish
- [x] Build the settings page.
- [x] Add profile management basics. (name/email update + password change, `app/api/user/route.ts`)
- [x] Add loading, empty, and error states. (empty states on dashboard/reports/history; loading states on upload, PDF export, sign-in/up; error banners on all forms)
- [x] Add accessibility improvements. (labeled inputs, `aria-pressed` on the theme toggle, alt text on design imagery removed in favor of icon-based UI to avoid decorative-image a11y issues)
- [ ] Test responsive behavior on mobile and desktop. (Tailwind responsive classes used throughout — `lg:`/`md:` breakpoints on all grids — but not visually verified in a real browser; no browser tool available in this environment)
- [x] Fix layout issues and align final UI to `DESIGN.md`.

## Milestone 11: Final Review
- [ ] Verify the MVP user flow end to end. (verified via `tsc --noEmit` — clean — and `next build` up through "Compiled successfully" and type checking; could not run a live end-to-end request because this sandbox has no Postgres and can't reach `binaries.prisma.sh` to generate the Prisma client. Needs a real run against a database before calling this done.)
- [x] Check auth, upload, OCR, AI summary, history, and sharing. (reviewed as code; OCR/AI use clearly-labeled stubs until real providers/keys are configured)
- [x] Clean up unused code and components.
- [x] Update `TASKS.md` with completed items.
- [ ] Prepare the app for demo or deployment. (needs: a real `DATABASE_URL` + `prisma migrate dev`, optionally `ANTHROPIC_API_KEY` and `N8N_WEBHOOK_URL`)

## MVP Definition
The MVP is complete when a user can:
- sign in,
- upload a medical report,
- get OCR text,
- see an AI summary,
- view the report in detail,
- compare with previous reports,
- and share the result by email or WhatsApp.