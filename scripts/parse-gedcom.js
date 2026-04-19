const fs = require('fs');

const raw = fs.readFileSync('C:/systep/autoresearch-genealogy/Assets/f266i6_859862b56ye2qz66897fd8_A.ged', 'utf8');
const lines = raw.split('\n');

const people = [];
let current = null;
let context = null; // BIRT, DEAT, MARR, NAME, etc.
let subContext = null;

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  const level = parseInt(trimmed[0]);
  const rest = trimmed.substring(2);

  if (level === 0) {
    if (current) people.push(current);
    if (rest.includes('INDI')) {
      const id = rest.split('@')[0] ? trimmed.match(/@(\w+)@/)?.[1] : null;
      current = { id, names: [], sex: '', birth: {}, death: {}, fams: [], famc: [], sources: [], occupation: '', residence: [] };
      context = null;
    } else {
      current = null;
      context = null;
    }
    continue;
  }

  if (!current) continue;

  if (level === 1) {
    subContext = null;
    if (rest.startsWith('NAME ')) {
      const nameVal = rest.substring(5).replace(/\//g, '').trim();
      current.names.push(nameVal);
      context = 'NAME';
    } else if (rest === 'BIRT') {
      context = 'BIRT';
    } else if (rest === 'DEAT') {
      context = 'DEAT';
    } else if (rest.startsWith('SEX ')) {
      current.sex = rest.substring(4).trim();
    } else if (rest.startsWith('FAMS ')) {
      current.fams.push(rest.match(/@(\w+)@/)?.[1]);
    } else if (rest.startsWith('FAMC ')) {
      current.famc.push(rest.match(/@(\w+)@/)?.[1]);
    } else if (rest.startsWith('OCCU ')) {
      current.occupation = rest.substring(5).trim();
    } else if (rest === 'RESI') {
      context = 'RESI';
    } else {
      context = rest.split(' ')[0];
    }
  }

  if (level === 2) {
    if (context === 'BIRT') {
      if (rest.startsWith('DATE ')) current.birth.date = rest.substring(5).trim();
      if (rest.startsWith('PLAC ')) current.birth.place = rest.substring(5).trim();
    } else if (context === 'DEAT') {
      if (rest.startsWith('DATE ')) current.death.date = rest.substring(5).trim();
      if (rest.startsWith('PLAC ')) current.death.place = rest.substring(5).trim();
      if (rest === 'Y' || rest.startsWith('Y')) current.death.confirmed = true;
    } else if (context === 'NAME') {
      if (rest.startsWith('GIVN ')) current.givenName = rest.substring(5).trim();
      if (rest.startsWith('SURN ')) current.surname = rest.substring(5).trim();
    }
  }
}
if (current) people.push(current);

// Also parse families
const families = [];
let curFam = null;
let famContext = null;

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  const level = parseInt(trimmed[0]);
  const rest = trimmed.substring(2);

  if (level === 0) {
    if (curFam) families.push(curFam);
    if (rest.includes('FAM')) {
      const id = trimmed.match(/@(\w+)@/)?.[1];
      curFam = { id, husb: null, wife: null, children: [], marriage: {} };
      famContext = null;
    } else {
      curFam = null;
    }
    continue;
  }
  if (!curFam) continue;

  if (level === 1) {
    if (rest.startsWith('HUSB ')) curFam.husb = rest.match(/@(\w+)@/)?.[1];
    if (rest.startsWith('WIFE ')) curFam.wife = rest.match(/@(\w+)@/)?.[1];
    if (rest.startsWith('CHIL ')) curFam.children.push(rest.match(/@(\w+)@/)?.[1]);
    if (rest === 'MARR') famContext = 'MARR';
    else famContext = null;
  }
  if (level === 2 && famContext === 'MARR') {
    if (rest.startsWith('DATE ')) curFam.marriage.date = rest.substring(5).trim();
    if (rest.startsWith('PLAC ')) curFam.marriage.place = rest.substring(5).trim();
  }
}
if (curFam) families.push(curFam);

// Build lookup
const personById = {};
people.forEach(p => { if (p.id) personById[p.id] = p; });
const famById = {};
families.forEach(f => { if (f.id) famById[f.id] = f; });

// Produce summary: name, sex, birth, death, spouse(s), children, parents
const summary = people.map(p => {
  const name = p.names[0] || 'Unknown';
  const spouses = p.fams.map(fid => {
    const f = famById[fid];
    if (!f) return null;
    const spouseId = f.husb === p.id ? f.wife : f.husb;
    const spouse = spouseId ? personById[spouseId] : null;
    return spouse ? spouse.names[0] : null;
  }).filter(Boolean);

  const parents = p.famc.map(fid => {
    const f = famById[fid];
    if (!f) return null;
    const father = f.husb ? personById[f.husb]?.names[0] : null;
    const mother = f.wife ? personById[f.wife]?.names[0] : null;
    return { father, mother };
  });

  const childrenNames = p.fams.flatMap(fid => {
    const f = famById[fid];
    if (!f) return [];
    return f.children.map(cid => personById[cid]?.names[0]).filter(Boolean);
  });

  return {
    id: p.id,
    name,
    sex: p.sex,
    birth: p.birth,
    death: p.death,
    occupation: p.occupation,
    spouses,
    parents: parents[0] || {},
    children: childrenNames
  };
}).filter(p => p.name !== 'Unknown' || p.birth.date || p.death.date);

fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/gedcom-people.json', JSON.stringify(summary, null, 2));
console.log(`Extracted ${summary.length} people from GEDCOM`);
console.log(`Extracted ${families.length} families from GEDCOM`);

// Print all people with dates (non-private)
const withData = summary.filter(p => p.birth.date || p.death.date || p.children.length > 0);
console.log(`\nPeople with dates or children: ${withData.length}`);
withData.forEach(p => {
  const b = p.birth.date ? `b.${p.birth.date}` : '';
  const bp = p.birth.place ? ` (${p.birth.place})` : '';
  const d = p.death.date ? `d.${p.death.date}` : '';
  const dp = p.death.place ? ` (${p.death.place})` : '';
  const sp = p.spouses.length ? ` m.${p.spouses.join(', ')}` : '';
  const ch = p.children.length ? ` ch:[${p.children.join('; ')}]` : '';
  const par = p.parents.father || p.parents.mother ? ` par:[${p.parents.father || '?'}/${p.parents.mother || '?'}]` : '';
  console.log(`  ${p.id} | ${p.name} | ${p.sex} | ${b}${bp} ${d}${dp}${sp}${ch}${par}`);
});
