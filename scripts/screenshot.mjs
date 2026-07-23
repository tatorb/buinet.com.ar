import { chromium } from 'playwright-core';

const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const BASE = process.env.BASE || 'http://localhost:4321';
const OUT = process.env.OUT || '/tmp/claude-0/-home-user-buinet-coml-ar/2fa9aecc-2a78-5ea1-b99c-e2176a4392c0/scratchpad';

const shots = [
  { path: '/', file: 'home.png', full: true },
  { path: '/sobre-nosotros/', file: 'sobre-nosotros.png', full: true },
  { path: '/videovigilancia/', file: 'videovigilancia.png', full: true },
  { path: '/contacto/', file: 'contacto.png', full: true },
  { path: '/novedades/', file: 'novedades.png', full: true },
];

const browser = await chromium.launch({ executablePath: EXEC, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
for (const s of shots) {
  await page.goto(BASE + s.path, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${OUT}/${s.file}`, fullPage: s.full });
  console.log('shot', s.file);
}
await browser.close();
console.log('done');
