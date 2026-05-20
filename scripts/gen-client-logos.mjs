import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "clientsLogo");
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f))
  .sort((a, b) => a.localeCompare(b));

function labelFromFile(file) {
  return file
    .replace(/\.[^.]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const entries = files.map((file) => ({
  file,
  label: labelFromFile(file),
}));

const out = `/** Auto-generated from public/clientsLogo — run: node scripts/gen-client-logos.mjs */\nexport const clientLogoFiles = ${JSON.stringify(entries, null, 2)} as const;\n`;

fs.writeFileSync(
  path.join(process.cwd(), "src", "data", "clientLogoFiles.ts"),
  out,
);
console.log(`Wrote ${entries.length} logos to src/data/clientLogoFiles.ts`);
