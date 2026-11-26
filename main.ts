// Warning Label for Humans: One Line, Big Laugh
// Writes one single-line safety warning label for every human being to
// /output/entry.txt. The label is funny first and plausible second: it reads
// like a real printed warning, names a behaviour everyone recognises, and
// lands the laugh in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human runs on coffee, chaos, and one grudge from 2017 it will never explain.";

// The gate allows 1 to 160 characters of UTF-8 text, not only white space.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-160 gate`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
console.log(LINE);
