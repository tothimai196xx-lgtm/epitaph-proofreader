// Famous Last Words: The Funniest Epitaph
// Writes one single-line epitaph to /output/entry.txt.
// The line is a proofreader's epitaph: the joke turns on the one typo
// he can see, carved in stone, and can never correct.
import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH =
  "Here lies a proofreader. This stone has one typo in it, and he cannot fix it.";

// The gate allows 1 to 150 characters; fail loudly instead of
// submitting a line the scorer would refuse.
if (EPITAPH.length < 1 || EPITAPH.length > 150) {
  throw new Error(`epitaph is ${EPITAPH.length} characters, must be 1-150`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
