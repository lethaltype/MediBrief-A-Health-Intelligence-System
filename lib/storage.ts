import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
];

export const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB, matches DESIGN.md upload panel copy

export interface SavedFile {
  url: string;
  buffer: Buffer;
}

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

/**
 * Saves an uploaded file and returns its public URL plus the raw bytes
 * (callers need the buffer for OCR — re-reading from disk doesn't work
 * once storage is remote, so we hand it back here instead).
 *
 * Storage backend is chosen automatically:
 *   - If BLOB_READ_WRITE_TOKEN is set (Vercel Blob is connected), uploads
 *     go to Vercel Blob. This is required on Vercel — its filesystem is
 *     read-only in production, so local disk writes silently fail there.
 *   - Otherwise, falls back to writing into /public/uploads, which is
 *     fine for local development and any server with a persistent disk.
 *
 * To use S3/GCS/Azure instead, replace the `saveFileToDisk` branch below
 * with a client call to that provider, keeping the same return shape.
 */
export async function saveFile(file: File): Promise<SavedFile> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const ext = file.name.split(".").pop() || "bin";
  const fileName = `${randomUUID()}.${ext}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import("@vercel/blob");
    const blob = await put(`uploads/${fileName}`, buffer, {
      access: "public",
      contentType: file.type,
    });
    return { url: blob.url, buffer };
  }

  return saveFileToDisk(fileName, buffer);
}

async function saveFileToDisk(fileName: string, buffer: Buffer): Promise<SavedFile> {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const filePath = path.join(UPLOAD_DIR, fileName);
  await writeFile(filePath, buffer);
  return { url: `/uploads/${fileName}`, buffer };
}

export function validateFile(file: File): string | null {
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return "Unsupported file type. Please upload a PDF, JPG, or PNG.";
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "File is too large. Maximum size is 50MB.";
  }
  return null;
}
