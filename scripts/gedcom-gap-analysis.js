const fs = require('fs');
const path = require('path');

// Load parsed GEDCOM data
const people = JSON.parse(fs.readFileSync('C:/systep/autoresearch-genealogy/scripts/gedcom-people.json', 'utf8'));

// Load vault file names
const vaultDir = 'C:/systep/autoresearch-genealogy/vault-template';
const vaultFiles = fs.readdirSync(vaultDir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', ''));

// Normalize names for comparison
function normalize(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Create a set of normalized vault names
const vaultNormalized = new Set(vaultFiles.map(f => normalize(f.replace(/_/g, ' '))));

// Also create a lookup of key words in vault files
const vaultWords = new Set();
vaultFiles.forEach(f => {
  f.replace(/_/g, ' ').split(' ').forEach(w => vaultWords.add(w.toLowerCase()));
});

// Filter to people with meaningful data (not just a name)
const meaningfulPeople = people.filter(p => {
  if (!p.name || p.name === 'Unknown') return false;
  // Must have birth, death, children, or spouses
  return p.birth.date || p.birth.place || p.death.date || p.death.place || p.children.length > 0 || p.spouses.length > 0;
});

// Check which meaningful people don't have vault files
const missing = [];
const matched = [];

for (const p of meaningfulPeople) {
  const normName = normalize(p.name);

  // Check exact match
  let found = vaultNormalized.has(normName);

  // Check partial matches (surname + first name)
  if (!found) {
    const parts = p.name.split(' ').filter(Boolean);
    const surname = (p.surname || parts[parts.length - 1] || '').toLowerCase();
    const given = (p.givenName || parts[0] || '').toLowerCase();

    for (const vf of vaultFiles) {
      const vfNorm = normalize(vf.replace(/_/g, ' '));
      if (vfNorm.includes(surname) && vfNorm.includes(given.split(' ')[0])) {
        found = true;
        break;
      }
    }
  }

  if (found) {
    matched.push(p);
  } else {
    missing.push(p);
  }
}

// Sort missing by relevance (those with more data first)
missing.sort((a, b) => {
  const scoreA = (a.birth.date ? 2 : 0) + (a.death.date ? 2 : 0) + (a.children.length * 1) + (a.spouses.length * 1) + (a.birth.place ? 1 : 0);
  const scoreB = (b.birth.date ? 2 : 0) + (b.death.date ? 2 : 0) + (b.children.length * 1) + (b.spouses.length * 1) + (b.birth.place ? 1 : 0);
  return scoreB - scoreA;
});

console.log(`=== GEDCOM GAP ANALYSIS ===`);
console.log(`Total GEDCOM people: ${people.length}`);
console.log(`With meaningful data: ${meaningfulPeople.length}`);
console.log(`Matched to vault files: ${matched.length}`);
console.log(`MISSING from vault: ${missing.length}`);
console.log(`\n=== MISSING PEOPLE (sorted by data richness) ===\n`);

for (const p of missing) {
  const b = p.birth.date ? `b.${p.birth.date}` : '';
  const bp = p.birth.place ? ` (${p.birth.place})` : '';
  const d = p.death.date ? `d.${p.death.date}` : '';
  const dp = p.death.place ? ` (${p.death.place})` : '';
  const sp = p.spouses.length ? ` m.[${p.spouses.join('; ')}]` : '';
  const ch = p.children.length ? ` ch:[${p.children.join('; ')}]` : '';
  const par = p.parents.father || p.parents.mother ? ` par:[${p.parents.father || '?'}/${p.parents.mother || '?'}]` : '';
  console.log(`${p.name} | ${p.sex} | ${b}${bp} ${d}${dp}${sp}${ch}${par}`);
}

// Save to file
fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/gedcom-missing.json', JSON.stringify(missing, null, 2));
console.log(`\nResults saved to scripts/gedcom-missing.json`);
