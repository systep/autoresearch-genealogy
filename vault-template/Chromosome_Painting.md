---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, genetics, chromosome-painting]
subject: L.D. Salmanson (Leonard Daniel Salmanson)
subject_sex: M
data_status: GAP — no raw ancestry-composition CSV present in vault
---

# Chromosome Painting

Per-chromosome ancestry analysis for **L.D. Salmanson** (Leonard Daniel Salmanson, male). This file is the working framework for chromosome-painting analysis when raw provider data becomes available.

## Subject

- **Name**: L.D. Salmanson (Leonard Daniel Salmanson)
- **Sex**: Male (relevant: X chromosome inherited only from mother, see X-calibration section)
- **Mother**: Kathryn Ann Kascher (Rhode Island)
- **Father**: Alan Carl Salmanson (Rhode Island)

## Data Status (2026-05-02)

**No raw ancestry-composition CSV is present in `vault-template/` or `Assets/`.** The 23andMe / AncestryDNA / MyHeritage / FTDNA / GEDmatch raw export referenced in the methodology is **not available** in this vault as of 2026-05-02. `Genetic_Profile.md` is also a template stub (placeholder values).

Until raw per-segment ancestry data is loaded, this file operates in **expected-ancestry-only mode**: the per-chromosome table below shows what ancestry components SHOULD appear (and on which copy) given the documented family tree, plus the X-calibration prediction for a male subject. When raw data is added, the actual Copy 1 / Copy 2 columns can be filled in and compared to these predictions.

A new Open Question logged this session (OQ #32) tracks ingestion of the raw export.

## Method

[Provider] assigns each segment of each chromosome to an ancestry population. Each chromosome has two copies (one from each parent). By analyzing which ancestry appears on which copy, we can begin to separate maternal from paternal contributions. **Without a parent's DNA, copy assignment is probabilistic, not definitive.**

## Documented Ancestry Composition (from Family_Tree.md)

Based on the documented tree (no DNA data, this is genealogical-record-derived):

### Paternal grandparents (contribute ~50% of L.D.'s autosomal DNA, all to NON-X chromosomes; X gets nothing from father)

| Grandparent | Origin | Expected genetic component |
|---|---|---|
| Leonard Irving Salmanson (1910-1975) | Lithuanian Jewish (Salmanson/Zalmanson, Vilnius → Brooklyn → Providence) + Russian Jewish (Salk, mother's side) | Ashkenazi Jewish (Eastern European, Litvak/Belarus/Russia cluster) |
| Thelma Markel (1920-2011) | Galician Jewish (Markel of Waniowice + Brandt/Goldbaum of Lisko/Lesko, Sambor district) | Ashkenazi Jewish (Galician/Polish-Ukrainian cluster) |

**Predicted paternal contribution**: ~50% Ashkenazi Jewish (heavily East-European Litvak + Galician).

### Maternal grandparents (contribute ~50% of autosomal; X chromosome 100% from this side)

| Grandparent | Origin | Expected genetic component |
|---|---|---|
| Kathryn Ann Kascher's father (Kascher line) | Transylvanian Jewish (Kascher/Falk, Waldhütten/Valchid → Ohio ~1910-1912; per Geographic Origins row in Family_Tree.md) | Ashkenazi Jewish (Hungarian/Romanian/Carpathian cluster) |
| Kathryn Ann Kascher's mother | South Carolina colonial mix: Cox (NC/VA, possibly English), Long, Huff (Brunswick VA), Moseley (VA), King (Ireland 1770), Stangle (England, surname German/Palatinate), Brecht/Bright (Schriesheim, Palatinate Germany 1726), Brasher (MD/VA), Cooley (VA/SC), Henderson, Goldsmith, Dolby (Ireland 1770) | British Isles (English, Scots-Irish/Ulster Scots) + Northwest European/Palatinate German |

**Predicted maternal contribution**: roughly half Ashkenazi (Kascher side) + half British Isles / NW European (SC colonial side), so overall ~25% Ashkenazi + ~25% British/NW-European on the maternal side.

### Overall predicted autosomal composition (genealogical, NOT genetic):
- **~75% Ashkenazi Jewish** (50% paternal + ~25% maternal/Kascher)
- **~25% British Isles + Northwest European** (maternal/Kascher mother → SC colonial)
- **<1% other** (any noise / NPE / unknown branches)

Per CLAUDE.md Guard Rail #8, these percentages should be treated as **rough expectations**, not exact targets. Genetic ancestry can deviate from genealogical proportions due to random chromosomal segregation (especially at the great-grandparent level and beyond).

## X Chromosome (Calibration)

L.D. is **male** → his single X chromosome is inherited **entirely from his mother Kathryn Ann Kascher**, with no paternal contribution. The X is therefore the cleanest calibration tool available.

**Predicted X chromosome ancestry** (based on documented tree):
- A mixture of Ashkenazi Jewish (Kascher Transylvanian-Jewish maternal-grandfather contribution) AND British Isles / NW European (Kascher's mother → SC colonial contribution).
- Roughly 50/50 Ashkenazi vs. British/NW-European, but with significant variance because the X has unusual recombination patterns (males pass X intact; females recombine it).
- **Specifically**: any Ashkenazi-labeled segments on the X must originate from Kathryn Ann Kascher's father's side (Kascher/Falk Transylvanian); any British/NW-European segments on the X must originate from Kathryn Ann Kascher's mother's side (Cox/Long/Huff/King/Stangle/Bright SC colonial).

**Implication for calibration**:
- If raw data shows the X is **predominantly British/NW-European**, then the SC colonial side passed more through the X (consistent with Kathryn's mother's mother's mother-line being entirely SC colonial).
- If the X is **predominantly Ashkenazi**, then the Kascher Transylvanian-Jewish line dominates Kathryn's X-inherited segments.
- Whichever ancestry dominates the X: that ancestry is **at least partly maternal**. The remainder of any Ashkenazi signal on the autosomes is then attributable to a mix of paternal (Salmanson + Markel) AND maternal-Kascher origins, which cannot be cleanly separated from autosomes alone.

## Per-Chromosome Analysis (Expected, awaiting raw data)

The table below records **predictions** based on the documented tree. The "Copy 1" / "Copy 2" columns will be filled in when raw provider segment data is loaded. "Likely Parent" prediction below assumes that each parent's contribution is roughly homogeneous in ancestry — **this is an oversimplification** because Kathryn Ann Kascher herself is mixed (Ashkenazi + British/NW-European), so on many chromosomes BOTH copies will contain Ashkenazi segments (one from each parent), making clean parental separation difficult on Ashkenazi-only chromosomes.

| Chr | Copy 1 Predicted Dominant | Copy 2 Predicted Dominant | Likely Parent (Copy 1) | Confidence (predicted) |
|---|---|---|---|---|
| 1 | Ashkenazi (paternal) | Mixed Ashkenazi + British/NW-Euro (maternal-Kascher) | Paternal (if Copy 1 is purely Ashkenazi and Copy 2 has British/NW-Euro segments) | Low-Moderate |
| 2 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 3 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 4 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 5 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 6 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 7 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 8 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 9 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 10 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 11 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 12 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 13 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 14 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 15 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 16 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 17 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 18 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 19 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 20 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 21 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| 22 | Ashkenazi (paternal) | Mixed (maternal) | Paternal | Low-Moderate |
| X | N/A (single copy in male) | Mixed Ashkenazi + British/NW-European (entirely from mother Kathryn) | Maternal (always, by inheritance pattern) | High (calibration anchor) |

**Note on confidence**: All non-X confidences are flagged Low-Moderate **even before raw data exists**, because (a) the maternal copy is itself mixed (Kascher-Ashkenazi + SC colonial British/NW-European), making it impossible to predict in advance which ancestry will dominate Copy 2 on any given chromosome; and (b) when Copy 2 also shows Ashkenazi (which will happen on roughly half of maternal chromosomes), the parental assignment on that chromosome cannot be made from ancestry-composition alone.

**Cleanest separations (highest predicted confidence) will be**: chromosomes where the maternal copy happens to inherit the SC-colonial contribution (~50% of maternal chromosomes, by random segregation). On those chromosomes, Copy 1 = pure Ashkenazi and Copy 2 = predominantly British/NW-European, giving a clean paternal/maternal call at **Moderate** confidence (would be High with a parent's DNA test for direct phasing).

## Summary (predicted, pending raw data)

### Maternal Components (X-chromosome-confirmed when data arrives)
- Ashkenazi Jewish: Kascher/Falk Transylvanian (Waldhütten/Valchid → Ohio)
- British Isles (English, Scots-Irish/Ulster): Cox, Long, Huff, Moseley, Holloway, King, Dolby, Cooley, Henderson, Goldsmith, Brasher
- Northwest European / Palatinate German: Stangle (England, German etymology), Brecht/Bright (Schriesheim Palatinate 1726), possibly Jungblut/Youngblood (per `Jungblut_MD_to_SC_Bridge_Research_2026_04_19.md`)

### Paternal Components
- Ashkenazi Jewish — Lithuanian/Belarusian (Salmanson/Zalmanson Vilnius, Salk Russia)
- Ashkenazi Jewish — Galician/Polish-Ukrainian (Markel Waniowice, Frei Waniowice, Brandt/Goldbaum Lisko)

**Note**: Paternal and maternal-Kascher are BOTH Ashkenazi Jewish from the standpoint of consumer genetic-ancestry algorithms (which typically lump all Ashkenazi into one bin). They cannot be separated by ancestry composition alone; would require IBD-segment matching to known Litvak vs. Galician vs. Transylvanian reference panels (e.g., GEDmatch Eurogenes K36, MyHeritage genetic groups).

## Segment Distribution Analysis (template, awaiting data)

| Ancestry | Chromosomes Present | Segment Count | Interpretation |
|---|---|---|---|
| Ashkenazi Jewish | (await raw data; expect all 22 + X) | (await raw data; expect ~50-200+ segments due to founder-effect endogamy producing many small segments) | Many small segments + endogamous IBD pile-up = consistent with documented multi-line Ashkenazi descent. Recent (Litvak + Galician + Transylvanian within last ~5 generations). |
| British Isles | (await raw data; expect distributed across many chromosomes) | (await raw data) | Expect a mix of medium and small segments from ~7-10 generations back (colonial 1700s ancestors + Irish 1770 immigrant Robert King II + Tabitha Dolby). |
| NW European / French + German | (await raw data) | (await raw data) | Expect smaller signal from Brecht/Bright (1726 Palatinate) and possibly Stangle (German etymology, English residency). |
| Sephardi / Mizrahi / North African | not predicted | 0 expected | If observed, would be **unexpected** — see Open Questions below. NB: L.D.'s wife Yaffit Shriki is Moroccan/Sephardi by surname, but that is a SPOUSE, not an ancestor of L.D.; her ancestry would only appear in their child Dean's DNA, not L.D.'s. |
| East Asian / South Asian / Sub-Saharan African / Native American | not predicted | 0 expected | Any signal >1% would be unexpected and require investigation (NPE, mis-attribution, or undocumented branch). Per Guard Rail #9, do not build theories on <1% trace ancestry. |

## Open Questions

1. **DATA GAP (logged as OQ #32 in [[Open_Questions]])**: No raw ancestry-composition CSV present in `vault-template/` or `Assets/`. To activate this analysis, ingest 23andMe Ancestry Composition CSV (chromosome painting file from `https://you.23andme.com/tools/data/download/`) OR AncestryDNA ethnicity-by-chromosome download (when available) OR MyHeritage / FTDNA segment data. File path target suggestion: `Assets/DNA/<provider>_<date>_chromosome_painting.csv`. Until then, this file remains in expected-ancestry-only mode.

2. **Parent's DNA**: Without DNA from at least one parent (Alan Carl Salmanson or Kathryn Ann Kascher), all Copy 1 / Copy 2 parental assignments are probabilistic. A parent's test would phase the chromosomes and convert all Low-Moderate confidence calls to High.

3. **Litvak vs. Galician vs. Transylvanian Ashkenazi separation**: Standard ancestry composition algorithms cannot distinguish these sub-populations. To separate paternal-line Ashkenazi (Salmanson/Salk Litvak + Markel/Frei/Brandt Galician) from maternal-line Ashkenazi (Kascher Transylvanian), would require GEDmatch admixture tools (Eurogenes K36, MDLP K23b) or IBD-matching to reference samples with known Litvak/Galician/Transylvanian endogamy.

4. **Unexpected components contingency**: When raw data arrives, any signal ≥1% from a population NOT predicted above (Sephardi, Mizrahi, East Asian, South Asian, Sub-Saharan African, Native American, Iberian, Italian, Scandinavian, Finnish, Eastern European non-Jewish, etc.) should be flagged. Per Guard Rail #9, signals <1% are likely noise / algorithmic artifact and should not be over-interpreted.

5. **Documentation discrepancy contingency**: Per the protocol, if raw data shows clearly contradictory genetic proportions (e.g., <50% Ashkenazi when documented tree predicts ~75%, or substantial unexpected components), the discrepancy must be logged in `Open_Questions.md` and `cross_reference_audit.md`. Per Guard Rail #4, do NOT silently rewrite the family tree to match genetic data — investigate, don't overwrite.
