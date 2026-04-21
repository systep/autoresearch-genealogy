---
type: hypothesis
created: 2026-04-21
tags: [audit, gedcom, data-quality, myheritage, geni]
status: open
evidence_for:
  - "Two confirmed GEDCOM concatenation defects (Christian_Schwartz Kolmsee, Simon_Kleinberg Krakow/Rakonitz) proven via prior research rounds"
  - "Reconnaissance grep over 1,213 vault .md files surfaces at least 23 additional candidate defects matching the same patterns"
  - "All candidate defects cite Tier 3 sources (MyHeritage GEDCOM or Geni World Family Tree export); zero primary-source corroboration"
evidence_against:
  - "Reconnaissance has not personally verified each hit against a gazetteer; a small number of hits may be legitimate place strings that merely look unusual"
decisive_record: "Per-file resolution via gazetteer lookup (Meyers Gazetteer, GOV genealogy.net, GeoNames) and, where possible, primary parish/civil registers"
---

# GEDCOM Artifact Audit (2026-04-19, recon retry)

## Scope and method

**Files in scope**: 1,213 `.md` files under `vault-template/`.
**Tool budget**: narrow reconnaissance only (approximately 8 grep/read calls, well under the 20-call ceiling). This is not an exhaustive enumeration; it is pattern-first triage intended to surface representative defects so a batch-fix pass can be planned.

**Patterns searched**:

1. Quadruple-comma multi-jurisdiction place strings (`City, County, Region, Country` with suspicious contents).
2. Literal doubled commas (`,,`) and field-separator artifacts.
3. Repeated-token place strings (`Kilkenny, Kilkenny, Kilkenny`; `Paris, France, Paris, France`).
4. Anachronistic jurisdiction labels (`Colonial America`; mixed `Bohemia, Austria` on Galician towns).
5. Unicode/RTL contamination in Geni-exported place fields (Hebrew text interleaved with Latin, often with leading comma).
6. Known-bad fragments carried over from the two confirmed defects (`Kolmsee`, `Rakonitz`).

## Defect patterns and counts

| Pattern | Confirmed hits | Interpretation |
|---|---|---|
| `Kolmsee, West Prussia, Germany` (gazetteer-absent village; confirmed surname, not a place) | 5 person files | MyHeritage GEDCOM concatenation / surname-as-place; Culmsee/Kulmsee/Chełmża is the likely intended referent (see `Schwartz_Kolmsee_West_Prussia_Research_2026_04_19.md`) |
| `Krakow, Rakonitz, Bohemia, Austria` (two cities ~600km apart in two different crown-lands) | 1 person file | MyHeritage PLAC field concat (see `Kleinberg_Jewish_Origin_Research_2026_04_19.md`) |
| Same-token repetition in place string (`Kilkenny, Kilkenny, Kilkenny, Ireland`; `Paris, France, Paris, France`) | 3 person files | Geni export padding the PLAC hierarchy by repeating the top-level token |
| Doubled comma (`Malopolskie,, Kraków, ...`) | 1 person file (plus two transclusions in Geni 20-gen export) | Geni export null-field artifact |
| Hebrew/RTL script interleaved with Latin place name, leading comma (`, ‫פלסטינה ארץ ירושלים‬/‫ישראל‬Jerusalem, Eretz Israel/Palestine`) | 5+ person files | Geni bilingual PLAC field joined without separator; RTL ordering reverses expected read direction |
| `Colonial America` as a GEDCOM country token | 3 person files (likely more on expanded grep) | Anachronistic; MyHeritage auto-promotes pre-1776 American places to this non-existent polity |
| `Heidleberg` misspelling (`Heidleberg, Berks, Pennsylvania`; `Heidleberg, Lebanon, Pennsylvania`) | 3 person files | Likely a single GEDCOM typo propagated across siblings; should be `Heidelberg Township`. Note: Berks and Lebanon counties are both plausible (township straddles the line historically) so cannot be auto-corrected |

**Total candidate defects surfaced in this pass: 23 person files** (some files contain multiple defect fields, so line-level count is higher).

## Specific file-line references

### Cluster 1: Kolmsee (surname-as-place from MyHeritage GEDCOM)

All five files list the same bogus PLAC string; likely siblings in the Schwartz family.

- `vault-template/Carl_Schwartz.md:21` — Born `16 JUL 1830, Kolmsee, West Prussia, Germany`. Suspected correction: `Kulmsee (Culmsee), Kreis Thorn, Regierungsbezirk Marienwerder, Westpreussen` (modern Chełmża, Poland).
- `vault-template/Carl_Schwartz.md:22` — Birthplace: same.
- `vault-template/Christian_Schwartz.md:21,22,31` — Born `24 DEC 1841, Kolmsee, West Prussia, Germany`. Correction: same as above (this is the already-confirmed defect).
- `vault-template/Friedrich_Schwartz.md:21,22,31` — Born `16 MAY 1826, Kolmsee, West Prussia, Germany`. Correction: same.
- `vault-template/Gottfried_Schwartz.md:21,22,31` — Born `14 JUL 1840, Kolmsee, West Prussia, Germany`. Correction: same.
- `vault-template/Wilhelm_Schwartz.md:21,22,31` — Born `26 JUL 1834, Kolmsee, West Prussia, Germany`. Correction: same.

### Cluster 2: Krakow/Rakonitz Kleinberg (confirmed)

- `vault-template/Simon_Kleinberg.md:21,22,31` — `1805, Krakow, Rakonitz, Bohemia, Austria`. Suspected correction: place unresolved; likely either Kraków (Galicia) or Rakovník (Bohemia), not both. Flag as `(place uncertain, GEDCOM-concat)`.

### Cluster 3: Geni repeated-token pattern

- `vault-template/Edward_Zaslavski.md:20` — Born `1800, Kilkenny, Kilkenny, Kilkenny, Ireland`. Suspected correction: `Kilkenny, County Kilkenny, Ireland`.
- `vault-template/Jechiel_Ben_Matityahu_AshkenaziTreves.md:21` — Born `circa 1110, Paris, France, Paris, France`. Correction: `Paris, Île-de-France, France`.
- `vault-template/Jechiel_Ben_Matityahu_AshkenaziTreves_The.md:21` — duplicate file of the above with same defect (also flag for dedup; the file base name `_The` appears to be a truncation artifact).

### Cluster 4: Doubled comma

- `vault-template/Moshe_Gershon_Altschuler.md:21` — Died `July 18, 1557, Malopolskie,, Kraków, Kraków County, Lesser Poland Voivodeship, Poland`. Correction: drop leading `Malopolskie,,` which is a null-admin-level duplicate of the voivodeship already named later.
- `vault-template/Moshe_Gershon_Altschuler.md:33` — same string repeated in the Geni quote.
- `vault-template/Shneur_Zalman_Liadi_Geni_Ancestors_20gen_2026.md:540, 1619` — transcluded appearances (export file, lower priority to fix).

### Cluster 5: RTL / Hebrew-Latin concatenation

- `vault-template/David_Tzvi_Arieh_Schneerson.md:20,21,33` — Born and Died strings contain Hebrew text glued directly to Latin `Jerusalem, Eretz Israel/Palestine` with a leading comma.
- `vault-template/Chaim_Avraham_Fundaminsky.md:23,35` — same pattern in spouse field.
- `vault-template/Dvora_Lea_Shmerling.md:21,34` — same for death place.
- `vault-template/Rachel_Fundaminsky.md:22,35` — same; plus typo `Israe/Palestine` (missing `l`).
- `vault-template/Yehuda_Leib_Zeliksohn.md:20,33` — place string also has death information glued to birth string (`b. 1874, ,‫רוסיה; ויעליזש‬d. February 16, 1920, ‫אוקריינאקייב‬`). Two fields concatenated into one.
- `vault-template/Yosef_HaIlem_Fundaminsky.md:21,33` — same pattern; additionally `Eretz Israel/ Palestine` with stray space.
- `vault-template/Shneur_Zalman_Ben_Nachum_Joseph_Schneerson.md:20,34` — Hebrew text glued to Latin `Liubavichi, Rudnyanskiy Rayon, ...`.

### Cluster 6: `Colonial America` anachronism

- `vault-template/Christiana_Bright_Brecht.md:21,22,31` — Born `12 AUG 1747, Heidleberg, Berks, Pennsylvania, Colonial America`. Correction: `Heidelberg Township, Berks County, Pennsylvania, British America` (or simply `Pennsylvania`). Note also `Heidleberg` misspelling.
- `vault-template/Mary_Cox.md:21,22,31` — Born `10 OCT 1719, Hockessin, New Castle County, Lower Counties on the Delaware, Colonial America`. Correction: `Hockessin, New Castle County, Delaware Colony, British America` (the 1719 `Lower Counties on the Delaware` label is technically correct, so the only real defect is `Colonial America` as country token).
- Expect additional hits across colonial-era Bright/Brecht/Cox siblings not enumerated in this pass.

### Cluster 7: Heidleberg misspelling (propagation from a single GEDCOM typo)

- `vault-template/Anna_Catherina_Bright_Brecht.md:21,22,31` — `Heidleberg, Lebanon, Pennsylvania, United States`.
- `vault-template/Christiana_Bright_Brecht.md` — listed in Cluster 6.
- `vault-template/Sarah_Bright_Brecht.md` — third file with the typo (not re-read; surfaced in files_with_matches).

### Cluster 8: Jurisdictional drift within a single person record

- `vault-template/Catharina_Schuller.md:21,22` — Birthplace `Waldhütten, Siebenburgen, Austria`.
- `vault-template/Catharina_Schuller.md:23,33` — Death place `Waldhütten, Transylvania, Austria`.
- Same village, same country, two different region labels (German `Siebenburgen` vs English `Transylvania`). Harmonize to one label in a later audit.

### Spot items (single-file oddities worth flagging)

- `vault-template/Bernhard_Friedrich.md:21,22,32` — `Grün, Komotau, Bohemia, Austria`. Komotau (Chomutov) is real; `Grün` is a plausible village suffix but should be verified against Meyers Gazetteer (at least 30 German villages named Grün exist).
- `vault-template/Bezalel_ben_Chaim.md:27` — Explicit conflict already documented: `Prague, Bohemia (GEDCOM I501104) or Worms, Germany (GEDCOM I501187) | Conflicting GEDCOM entries`. Not a new defect but confirms the source pattern.

## Recommended fix approach

**Programmatic (batch) pass**:

1. Write a Python script that walks `vault-template/*.md`, parses Born/Died/Birthplace/Place-of-Death table rows, and flags:
   - quadruple-comma place strings not on an allowlist of legitimate 4-part American places (`City, County, State, United States`);
   - literal `,,` or `, ,`;
   - duplicate adjacent tokens (`Kilkenny, Kilkenny`);
   - presence of Hebrew Unicode range `֐-׿` inside a Latin PLAC field;
   - literal strings `Colonial America`, `Kolmsee`, `Rakonitz`, `Heidleberg`.
2. Emit a CSV `GEDCOM_artifact_candidates.csv` (file, line, field, current value, flagged pattern, suggested canonical value). Do **not** auto-edit.

**Manual pass (human + AI)**:

1. Human reviews the CSV and approves/rejects each row.
2. AI applies approved corrections in a single commit per cluster (Kolmsee cluster, Heidleberg cluster, Hebrew-Latin cluster, Colonial-America cluster), preserving the `(unverified)` marker and citing the research hypothesis files as the source of the correction.
3. For every corrected file, append a `## Data Discrepancies` entry noting: original GEDCOM string, correction, justification, date of change.

**Do not attempt** to auto-correct:

- Kolmsee until the Culmsee parish register confirms a Schwartz baptism on the matching date.
- Simon_Kleinberg until a Galician or Bohemian primary record disambiguates Kraków vs Rakovník.
- `Waniowice/Vanyavitch` style Galician village spellings; these are historically legitimate and belong to the naming-conventions workflow, not this audit.

## Related files

- `[[Schwartz_Kolmsee_West_Prussia_Research_2026_04_19]]` — primary hypothesis document for Cluster 1.
- `[[Kleinberg_Jewish_Origin_Research_2026_04_19]]` — primary hypothesis document for Cluster 2.
- `[[cross_reference_audit]]` — general discrepancy tracker; each cluster above should get a one-line entry.
- `[[Research_Log]]` — log this reconnaissance pass.

## Status

Open. Awaiting human review and scheduling of a batch-fix session.
