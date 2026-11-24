import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I outsourced your task to a smarter version of me, and he has stopped answering my messages.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
