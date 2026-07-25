# CLAUDE.md

You are helping build the MediBrief Health Intelligence web app.

## Rules
- Always read `PLANNING.md` and `TASKS.md` before starting work.
- Follow the design system in `DESIGN.md`.
- Keep the existing UI style consistent with Stitch output.
- Build one feature at a time.
- Update `TASKS.md` as tasks are completed.
- Do not redesign the whole app unless explicitly asked.
- Prefer small, safe changes over large rewrites.
- If a task is unclear, ask for clarification before coding.

## Workflow
1. Read `DESIGN.md`, `PLANNING.md`, and `TASKS.md`.
2. Identify the next unfinished task.
3. Implement only that task.
4. Verify the result.
5. Mark the task complete in `TASKS.md`.

## Project goal
Turn the MediBrief design into a working health intelligence web app with:
- auth,
- upload and OCR,
- AI summary,
- report detail,
- history and comparison,
- charts,
- share via email/WhatsApp,
- PDF export,
- and backend automation.

## Important constraints
- Use the design tokens and component patterns from `DESIGN.md`.
- Keep the app production-oriented and modular.
- Avoid introducing unnecessary libraries.
- Medical outputs must remain informational and not diagnose.