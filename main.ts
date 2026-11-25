// u-alfasurya91-make-the-ai-judge-laugh-6ed40225: one office-life line, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const joke = "My out-of-office auto-responder has dated more people than I have while I was actually at my desk.";

const filePath = join(outputDir, 'entry.txt');
writeFileSync(filePath, joke, 'utf8');
