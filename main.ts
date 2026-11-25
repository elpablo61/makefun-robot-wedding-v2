import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The entry is a single line of robot wedding vows, at most 160 characters.
copyFileSync(new URL("./entry.txt", import.meta.url), join(outDir, "entry.txt"));
