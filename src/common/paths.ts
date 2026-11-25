import { join } from "node:path";

export const repoRoot = join(import.meta.dirname, "..", "..");
export const publicFolder = join(repoRoot, "public");
