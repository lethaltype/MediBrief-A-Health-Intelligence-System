// Shared display types, kept structurally identical to prisma/schema.prisma.
//
// These are intentionally hand-written rather than imported from
// "@prisma/client" generated types: components should not need a
// successful `prisma generate` just to type-check, and structural typing
// means real Prisma query results satisfy these interfaces without casts.

// Prisma schema note: status/channel are plain `String` columns (not Prisma
// `enum`s), so Prisma's generated types for them are `string`, not a
// literal union. These aliases document the actual values in use, but the
// record interfaces below use `string` for those fields — a stricter
// union there would reject real Prisma query results (as happened: this
// mismatch only surfaces once `prisma generate` actually runs against the
// real schema, which didn't happen in earlier local type-checking).
export type ReportStatus = "uploaded" | "processing" | "analyzed" | "failed";
export type ShareChannel = "email" | "whatsapp";
export type ShareStatus = "pending" | "sent" | "failed";

export interface FindingRecord {
  id: string;
  reportId: string;
  labName: string;
  value: string;
  unit: string | null;
  referenceRange: string | null;
  isAbnormal: boolean;
}

export interface ReportFileRecord {
  id: string;
  reportId: string;
  fileName: string;
  fileType: string;
  storageUrl: string;
  ocrText: string | null;
  uploadedAt: Date;
}

export interface SummaryRecord {
  id: string;
  reportId: string;
  plainLanguageText: string;
  specialistSuggested: string | null;
  disclaimer: string;
  createdAt: Date;
}

export interface ShareLogRecord {
  id: string;
  reportId: string;
  channel: string;
  recipient: string;
  status: string;
  sentAt: Date | null;
  createdAt: Date;
}

export interface ReportRecord {
  id: string;
  userId: string;
  title: string | null;
  status: string;
  createdAt: Date;
}

export interface ReportWithRelations extends ReportRecord {
  files: ReportFileRecord[];
  findings: FindingRecord[];
  summary: SummaryRecord | null;
}
