import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry it's late — I hit my token limit mid-sentence yesterday and woke up today fully convinced we'd already had this conversation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
console.log(`entry written: ${ENTRY.length} chars`);
