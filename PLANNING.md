# PLANNING.md

## Project overview
MediBrief is a health intelligence web app that lets users upload medical reports, extract text and structured findings, generate simple AI explanations, highlight abnormal values, compare reports over time, and securely share results with doctors or family.

The app is designed around a premium medical UI system defined in `DESIGN.md`. That design includes a splash screen, sign in/sign up pages, a dashboard, report analysis cards, history views, a share modal, and polished data visualization placeholders. The implementation should keep that visual system intact while turning the screens into working product flows.

## Product goals
- Make medical report review simple and understandable for non-technical users.
- Convert uploaded documents into structured health insights.
- Show a clean dashboard with progress, summaries, and recent reports.
- Help users compare reports and notice changes over time.
- Enable secure sharing through email and WhatsApp.
- Keep the experience trustworthy, modern, and clinically respectful.

## Primary user flow
1. User lands on the splash screen.
2. User signs in or creates an account.
3. User reaches the dashboard.
4. User uploads a medical report.
5. OCR extracts the document text.
6. AI analyzes the report and generates a plain-language summary.
7. The app highlights abnormal or notable findings.
8. The app suggests a likely specialist category.
9. The user views report history and comparisons.
10. The user exports or shares the report.

## Design system source
Use `DESIGN.md` as the visual source of truth.

Important style patterns from the design:
- Premium medical SaaS look.
- Soft blue/teal palette.
- Glassmorphism cards and panels.
- Rounded corners and gentle shadows.
- Material Symbols icons.
- Plus Jakarta Sans typography.
- Clean dashboard cards, side rail, and modal-based sharing flow.
- Minimal, trustworthy, high-clarity medical UX.

Do not redesign these screens from scratch. Reuse the visual language from the design file.

## Technical stack
Recommended stack:
- Next.js App Router.
- TypeScript.
- React.
- Tailwind CSS.
- Prisma.
- PostgreSQL.
- Auth via NextAuth or a lightweight custom auth system.
- OCR through a server API or external OCR provider.
- AI analysis through an LLM API.
- File storage through local dev storage and production object storage.
- n8n webhooks for email and WhatsApp delivery.

## Application structure
Suggested project structure:
- `app/` for routes and server actions.
- `components/` for reusable UI.
- `lib/` for helpers, API clients, parsing, and formatting.
- `prisma/` for schema and migrations.
- `public/` for static assets.
- `types/` for shared TypeScript types.

## Pages and screens
Build the following screens and flows:
- Splash screen.
- Sign in page.
- Sign up page.
- Main dashboard.
- Report detail page.
- Report history page.
- Comparison/trends page.
- Settings/account page.
- Share modal or share page.

## Core features
### Authentication
- Support sign in, sign up, and sign out.
- Protect dashboard and report pages behind auth.
- Add account dropdown and session-aware navigation.

### Upload and ingestion
- Allow uploading PDF, JPG, PNG, and similar medical files.
- Store file metadata.
- Trigger OCR processing after upload.
- Show upload and analysis progress in the dashboard.

### OCR and parsing
- Extract raw text from medical reports.
- Parse lab names, values, units, and reference ranges when available.
- Convert extracted text into structured JSON.
- Save findings to the database.

### AI analysis
- Summarize the report in plain language.
- Flag abnormal or borderline values.
- Explain what the findings may mean in simple terms.
- Suggest a likely specialist category.
- Include a disclaimer that the app is informational and not diagnostic.

### History and comparison
- Store every processed report.
- Allow users to compare the current report with previous ones.
- Show trends for repeated tests.
- Support time-based review of health changes.

### Charts and visualization
- Use stored data to render trends.
- Add line charts or bar charts for repeated lab values.
- Add a heatmap or severity view if useful.
- Keep chart styling consistent with the design system.

### Sharing and export
- Provide email and WhatsApp sharing from the share modal.
- Send share payloads to n8n.
- Track share status in the database.
- Generate PDF export for the report summary.

## Data model
Likely entities:
- `User`
- `Report`
- `ReportFile`
- `Finding`
- `Summary`
- `Comparison`
- `ShareLog`
- `NotificationLog`

## Backend responsibilities
The backend should handle:
- auth and sessions,
- file upload,
- OCR,
- AI summarization,
- finding extraction,
- comparison logic,
- report persistence,
- PDF generation,
- and webhook delivery.

Keep the processing pipeline modular so each step can be improved later without rewriting the app.

## API routes
Potential routes:
- `POST /api/upload`
- `POST /api/ocr`
- `POST /api/analyze`
- `GET /api/reports`
- `GET /api/reports/[id]`
- `POST /api/share`
- `POST /api/export/pdf`
- `POST /api/n8n/send`

## Implementation priorities
Build in this order:
1. Project scaffolding.
2. Design system setup from `DESIGN.md`.
3. Authentication screens and route protection.
4. Dashboard shell.
5. Upload flow.
6. OCR integration.
7. AI analysis and summary.
8. Report detail page.
9. History and comparison.
10. Charts and trends.
11. Share modal and delivery.
12. PDF export.

## MVP definition
The minimum useful version of the app should let a user:
- sign in,
- upload a report,
- get OCR text,
- view an AI summary,
- see abnormal findings,
- review past reports,
- and share the result.

## Non-goals for the first pass
- Advanced clinical decision support.
- Full doctor portal.
- Multi-tenant admin tooling.
- Complex billing/subscription flows.
- Too many extra analytics widgets.

## Quality standards
- Keep the UI polished and consistent with `DESIGN.md`.
- Prefer reusable components.
- Keep the codebase typed and modular.
- Make loading, empty, and error states explicit.
- Ensure medical language stays cautious and informational.

## Claude working rules
- Read `DESIGN.md` before generating UI.
- Read `TASKS.md` before coding.
- Implement only one milestone at a time.
- Do not rewrite unrelated files.
- Update `TASKS.md` when progress is made.
- Ask before making major architecture changes.

## Final product expectation
The final app should feel like the design in `DESIGN.md` came to life: a premium, modern, medically credible web app that helps users understand and share their health reports quickly and safely.