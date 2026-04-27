// Renders public/og.svg → public/og.png at 1200x630 with embedded crest.
// Run: node scripts/build-og.mjs
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public/og.svg'), 'utf8');

// Inline the crest as base64 so resvg can resolve it without a server
const crestPng = readFileSync(join(root, 'public/crest.png'));
const crestDataUrl = `data:image/png;base64,${crestPng.toString('base64')}`;
const inlinedSvg = svg.replace('href="/crest.png"', `href="${crestDataUrl}"`);

const resvg = new Resvg(inlinedSvg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
  background: '#070d3d',
});
const png = resvg.render().asPng();
writeFileSync(join(root, 'public/og.png'), png);
console.log('wrote public/og.png', png.length, 'bytes');
