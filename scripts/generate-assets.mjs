// NOTE: Foto-foto (hero, about, products, portfolio, blog, og) kini berupa file JPG
// asli yang diunduh dari Unsplash (lisensi bebas-royalti). Script ini hanya
// men-generate aset brand SVG: avatar direksi, logo klien, dan sertifikasi.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

function svg({ w, h, gradient, pattern = true, shapes = "", label = "", sub = "", badge = false }) {
  const g1 = gradient[0];
  const g2 = gradient[1];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${g1}"/>
      <stop offset="1" stop-color="${g2}"/>
    </linearGradient>
    ${
      pattern
        ? `<pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    </pattern>`
        : ""
    }
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${pattern ? `<rect width="${w}" height="${h}" fill="url(#grid)"/>` : ""}
  ${shapes}
  ${
    badge
      ? `<circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) * 0.32}" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
         <text x="${w / 2}" y="${h / 2}" fill="#fff" font-family="Arial, sans-serif" font-size="${Math.min(w, h) * 0.16}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${label}</text>`
      : `${
          label
            ? `<rect x="${w * 0.5 - Math.min(w, h) * 0.42}" y="${h * 0.5 - (sub ? 34 : 0)}" width="${Math.min(w, h) * 0.84}" height="${sub ? 84 : 56}" rx="14" fill="rgba(15,23,42,0.55)"/>
               <text x="${w / 2}" y="${h / 2 + (sub ? 4 : 0)}" fill="#fff" font-family="Arial, sans-serif" font-size="${Math.max(18, Math.min(w, h) * 0.075)}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${label}</text>
               ${
                 sub
                   ? `<text x="${w / 2}" y="${h / 2 + 40}" fill="rgba(255,255,255,0.75)" font-family="Arial, sans-serif" font-size="15" text-anchor="middle">${sub}</text>`
                   : ""
               }`
            : ""
        }`
  }
</svg>`;
}

const shapesFor = (w, h, count = 3) => {
  let out = "";
  for (let i = 0; i < count; i++) {
    const cx = (i + 1) * (w / (count + 1)) + (i % 2 ? -30 : 0);
    const cy = h * 0.25 + (i * 90) % Math.floor(h * 0.5);
    const r = 30 + i * 18;
    out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(255,255,255,0.1)"/>`;
  }
  return out;
};

const cities = [
  ["#1e3a8a", "#3b82f6"],
  ["#7c3aed", "#6366f1"],
  ["#0369a1", "#38bdf8"],
  ["#0f766e", "#2dd4bf"],
  ["#b45309", "#f59e0b"],
  ["#be123c", "#f43f5e"],
  ["#365314", "#65a30d"],
  ["#581c87", "#a855f7"],
];

const team = [
  ["ceo", "HW", "Direktur Utama"],
  ["cto", "AP", "Direktur Teknik"],
  ["cfo", "SR", "Direktur Keuangan"],
  ["coo", "BS", "Direktur Operasional"],
];
for (const [slug, initials, role] of team) {
  const g = cities[team.findIndex((t) => t[0] === slug) + 1] ?? cities[1];
  const s = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${g[0]}"/><stop offset="1" stop-color="${g[1]}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <circle cx="200" cy="160" r="72" fill="rgba(255,255,255,0.2)"/>
  <path d="M80 360 Q80 250 200 250 Q320 250 320 360 Z" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="167" fill="#fff" font-family="Arial, sans-serif" font-size="54" font-weight="700" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  <text x="200" y="320" fill="#fff" font-family="Arial, sans-serif" font-size="34" font-weight="700" text-anchor="middle">${initials}</text>
  <text x="200" y="352" fill="rgba(255,255,255,0.75)" font-family="Arial, sans-serif" font-size="16" text-anchor="middle">${role}</text>
</svg>`;
  const full = join(root, `team/${slug}.svg`);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, s);
  console.log("wrote", `team/${slug}.svg`);
}

const clients = [
  "BUMI PERKASA",
  "BANK NUSANTARA",
  "SARANA LOGISTIK",
  "GRUP CEMERLANG",
  "MEDIKA PRIMA",
];
for (let i = 0; i < clients.length; i++) {
  const g = cities[i + 1];
  const s = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 200 80">
  <rect width="200" height="80" rx="12" fill="#ffffff"/>
  <rect width="200" height="80" rx="12" fill="url(#lg)"/>
  <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g[0]}" stop-opacity="0.12"/><stop offset="1" stop-color="${g[1]}" stop-opacity="0.12"/></linearGradient></defs>
  <rect x="18" y="24" width="28" height="32" rx="7" fill="${g[0]}"/>
  <text x="32" y="47" fill="#fff" font-family="Arial, sans-serif" font-size="16" font-weight="700" text-anchor="middle">${clients[i][0]}</text>
  <text x="58" y="43" fill="#0f172a" font-family="Arial, sans-serif" font-size="13" font-weight="700">${clients[i]}</text>
  <text x="58" y="58" fill="#64748b" font-family="Arial, sans-serif" font-size="9" letter-spacing="1">LOGISTIC PARTNER</text>
</svg>`;
  const full = join(root, `clients/client-${i + 1}.svg`);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, s);
  console.log("wrote", `clients/client-${i + 1}.svg`);
}

const certs = [
  ["iso-9001", "ISO", "9001"],
  ["iso-14001", "ISO", "14001"],
  ["bujk", "BUJK", "GRED 7"],
  ["csms", "CSMS", "SMK3"],
];
for (const [slug, a, b] of certs) {
  const s = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
  <circle cx="75" cy="75" r="70" fill="#0f172a"/>
  <circle cx="75" cy="75" r="60" fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="10 6"/>
  <text x="75" y="68" fill="#fff" font-family="Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">${a}</text>
  <text x="75" y="92" fill="#93c5fd" font-family="Arial, sans-serif" font-size="15" text-anchor="middle">${b}</text>
</svg>`;
  const full = join(root, `certifications/${slug}.svg`);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, s);
  console.log("wrote", `certifications/${slug}.svg`);
}

console.log("Done generating assets.");