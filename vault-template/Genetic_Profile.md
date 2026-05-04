---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, genetics, ancestry, dna]
subject: L.D. Salmanson (Leonard Daniel Salmanson)
subject_sex: M
data_status: GAP — no raw test results in vault as of 2026-05-02
---

# Genetic Profile

Working model of genetic ancestry for **L.D. Salmanson** (male). Based on documented genealogical lines pending consumer DNA testing.

## Subject

- L.D. Salmanson (Leonard Daniel Salmanson)
- Sex: Male (Y chromosome present, X inherited only from mother)
- Father: Alan Carl Salmanson
- Mother: Kathryn Ann Kascher

## Raw Data Sources

| Source | Date | File | Notes |
|---|---|---|---|
| (none ingested) | — | — | **DATA GAP**: No 23andMe / AncestryDNA / MyHeritage / FTDNA / GEDmatch raw export present in `vault-template/` or `Assets/` as of 2026-05-02. See [[Open_Questions]] OQ #32. |

When raw data is added, suggested file layout:

- `Assets/DNA/23andMe_<date>_genome_v5.txt` (raw SNPs)
- `Assets/DNA/23andMe_<date>_ancestry_composition.csv` (per-segment ancestry; powers [[Chromosome_Painting]])
- `Assets/DNA/AncestryDNA_<date>_raw.txt`
- `Assets/DNA/MyHeritage_<date>_raw.csv`

## Haplogroups (predicted from documented patrilineal/matrilineal lines)

### Maternal mtDNA: (unknown until tested)

L.D.'s mtDNA traces through his unbroken maternal line:
**Kathryn Ann Kascher → her mother → ... → eventually to a SC colonial woman or a Kascher Transylvanian-Jewish woman, depending on which side of Kathryn's lineage the unbroken female-line traces back through.**

Without the actual mother's mother's mother chain documented in Family_Tree.md (Kascher's mother's surname not yet captured in the vault — see [[Open_Questions]] #4), the mtDNA haplogroup cannot be predicted. It will be either:
- A common Ashkenazi mt haplogroup (K1a1b1a, K1a9, N1b, HV0b, etc.) if the unbroken female line traces to the Kascher Transylvanian-Jewish side, OR
- A Northwest European mt haplogroup (H, U5, J, T, etc.) if it traces to the SC colonial side (Long/Cox/King/Stangle/Bright).

**Genealogical implication**: The mtDNA haplogroup will resolve OQ #4 (how SC colonial families connect to Kascher) on the female-only line.

### Paternal Y-DNA: (unknown until tested)

L.D.'s Y-DNA traces:
**Alan Carl Salmanson → Leonard Irving Salmanson → Barnett Salmanson → Levi (?) Zalmanson → ... → Eastern European Zalmanson/Salmanson line (Vilnius region)**

**Predicted Y haplogroup**: An Ashkenazi Y-DNA haplogroup. Most common Ashkenazi Y haplogroups include J1-Z18 (Cohen-modal), J2a-M67/M410, R1a-M582 (Levite cluster), R1b-U106, E1b1b-M35, G2c-M377, Q-M242. The Salmanson surname is patronymic ("son of Zalman/Solomon"), giving no surname-based clue.

**Genealogical implication**: If Y-DNA matches the Chabad-Schneerson / Zalmanson cluster on FTDNA Big-Y or YFull, this would substantially advance OQ #9 (Chabad-Lubavitch dynasty connection) — currently a Tier 3 claim from loebtree.com. Per Guard Rail #2, this requires independent corroboration before treating as confirmed.

## Ancestry Composition: Provider Comparison

| Category | [Provider 1] | [Provider 2] | Notes |
|---|---|---|---|
| (await test) | — | — | When data arrives, expect **~75% Ashkenazi Jewish** + **~25% British Isles / Northwest European**. See [[Chromosome_Painting]] for derivation. |

## Confidence-Tiered Synthesis

### Strong Signal (predicted, contingent on raw data confirming)

**~50% Ashkenazi Jewish (paternal)**
- Lines: Salmanson/Zalmanson (Vilnius/Lithuanian), Salk (Russian), Markel (Galician), Frei (Galician), Brandt/Goldbaum (Lisko/Lesko Galician)
- Supported by: documented Tier 1 Galician civil records, Tier 2 RIJHA obituaries, Tier 2 Yichus narrative; haplogroup prediction Ashkenazi Y-DNA
- See [[Family_Tree]] §Paternal Line: Salmanson, §Markel Family, §Brandt/Goldbaum Family, §Frei Family

### Moderate Signal (predicted)

**~25% Ashkenazi Jewish (maternal-Kascher)**
- Lines: Kascher, Falk (Waldhütten/Valchid Transylvania → Ohio ~1910-1912)
- Limitation: Standard provider algorithms will combine this with the paternal Ashkenazi signal into a single bin. Sub-population separation (Litvak/Galician/Transylvanian) requires GEDmatch admixture tools.

**~25% British Isles + Northwest European (maternal-SC-colonial)**
- Lines: Cox (NC/VA/SC, Y-DNA R1b-I "Carolina Coxes"), Long, Huff, Moseley, Holloway, King (Ireland 1770), Dolby (Ireland 1770), Cooley, Henderson, Goldsmith, Brasher (MD/VA), Stangle (England, German etymology), Brecht/Bright (Schriesheim Palatinate 1726)
- Confidence moderate because: many of these lines are Tier 3 user-tree-derived; some have unresolved discrepancies (see [[cross_reference_audit]]).

### Speculative / Low Confidence

**<1% any other component**
- Per Guard Rail #9, **do not build theories on <1% trace ancestry**.
- Possible noise sources: Ashkenazi reference-panel bleed into "Italian," "Iberian," "Caucasus" bins is well-known in 23andMe and AncestryDNA; British colonial reference bleed into "Scandinavian" or "French/German" is also common.

## Provider Bias Notes

- 23andMe historically over-assigns Ashkenazi to the "Ashkenazi Jewish" bin when the segment is in fact Sephardi or Mizrahi.
- AncestryDNA's "Eastern Europe & Russia" bin overlaps Ashkenazi-not-flagged populations; their dedicated "European Jewish" bin was added in v3+.
- Algorithm updates (e.g., 23andMe's 2022 update redistributed "French & German" → "Northwestern European" subcategories) can shift reported percentages by several points without underlying data change.
- Per CLAUDE.md Guard Rail #8, do not treat any single provider's ethnicity percentages as exact numbers; they are point estimates within wide confidence intervals.

## Genetic-to-Genealogical Mapping (predicted)

| Genetic Component | Predicted % | Family Lines | Region File | Confidence |
|---|---|---|---|---|
| Ashkenazi Jewish (Litvak/Belarus) | ~25% (paternal-PGF) | Salmanson/Zalmanson, Salk | (regions file pending) | Moderate (predicted) |
| Ashkenazi Jewish (Galician) | ~25% (paternal-PGM) | Markel, Frei, Brandt/Goldbaum | (regions file pending) | Moderate (predicted) |
| Ashkenazi Jewish (Transylvanian) | ~25% (maternal-MGF) | Kascher, Falk | (regions file pending) | Moderate (predicted) |
| British Isles (English + Ulster Scots) | ~15-20% (maternal-MGM) | Cox, Long, Huff, Moseley, Holloway, King, Dolby, Cooley, Henderson | (regions file pending) | Moderate (predicted) |
| Northwest European / Palatinate German | ~5-10% (maternal-MGM) | Stangle, Brecht/Bright, possibly Jungblut | (regions file pending) | Low (predicted) |

## Cross-validation when data arrives

The chromosome-painting analysis in [[Chromosome_Painting]] provides the X-chromosome calibration. As a **male subject**, L.D.'s X comes 100% from his mother Kathryn Ann Kascher, so:
- Whatever ancestry appears on the X is **necessarily maternal**.
- The X-ancestry mix should reflect Kathryn's own composition: roughly half Ashkenazi (Kascher) + half British/NW-European (SC colonial), with significant variance.
- Comparison: any **Ashkenazi-labeled segments on the X** must come from the Kascher Transylvanian line (provides a partial separation from paternal Ashkenazi).
