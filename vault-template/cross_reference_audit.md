---
type: reference
created: 2026-04-09
updated: 2026-04-09
tags: [genealogy, audit, cross-reference]
---

# Cross-Reference Audit

Systematic comparison of every fact in Family_Tree.md against source documents (original images, web research, obituaries). Source hierarchy: primary documents > secondary sources > tertiary sources (family trees, oral history).

## Audit Summary

- **Total named individuals audited**: ~125
- **Discrepancies found**: 14
- **Resolved this session**: 3
- **Remaining open**: 11

---

## Discrepancy Register

| # | Person | Field | Family_Tree Value | Source/Comparison Value | Correct Value | Source Authority | Status |
|---|--------|-------|-------------------|------------------------|---------------|-----------------|--------|
| 1 | John Stangle | immigration_date | "Sept 1683" (IMG_0789) | b. 1744 (same page) | Likely **1783** (re-examination: digit appears to be "7" not "6"; age 39 at immigration is plausible) | Handwritten notes (single source) | LIKELY RESOLVED: 1783 not 1683 |
| 2 | Stangle children | birth_century | Appear to read as 1600s | Father born 1744 | **1700s** (century digits misread in cursive; 1769, 1790, 1793 etc.) | Handwritten notes | RESOLVED: Century digit error in transcription |
| 3 | Church ancestor | nationality | "A faithful German" (IMG_0791) | John Stangle "Born England" (IMG_0789); James Cox born NC (WikiTree) | Unknown | Family note vs. handwritten notes vs. WikiTree | OPEN |
| 4 | William Stangle | death_date | b. Nov 10, ~1792; d. ~1781 | Death predates birth by 11 years | One date misread | Handwritten notes (single source) | OPEN: Remove death date or mark as unreadable |
| 5 | Marcia King (nee) | maiden_name | "Kopp" (IMG_0786) | "Huff" (IMG_0792) | Unknown; **two different pages by same author give different surnames** | Both are handwritten notes | OPEN: CONFIRMED as real discrepancy in source documents |
| 6 | Richard Panciera | relationship | Among Kascher siblings (Screenshot 125748) | Different surname from other Kascher siblings | Unknown | Digital tree (strong) | OPEN |
| 7 | Jerrold Salmanson | parentage | Samuel's obit: "nephew" | Thelma's memorial: not listed as her child; b. 1942, marriage 1947 | Unknown: Leonard's from prior relationship? Or Charles's son? | Obituary (secondary) vs. Find a Grave (secondary) | OPEN |
| 8 | Shelly White | relationship | Shown with Alan's siblings in tree app | Not on Thelma's 3-child list (Alan, Barbara, Carol) | Not a biological sibling of Alan | Digital tree vs. Find a Grave memorial | OPEN |
| 9 | Zalmanson-Schneerson | connection | loebtree.com links family to Chabad dynasty | No independent corroboration | Unverified | User-contributed tree (tertiary) | OPEN: Needs independent source |
| 10 | Samuel Salmanson | children | "James, Tobey (Oresman), Richard Oresman" | Hilda's obit: "James Salmanson, Tobey and Richard Oresman" + grandchildren with Oresman surname | **James, Tobey (m. Richard Oresman)** -- Richard is son-in-law, not child | Obituary (secondary) | **RESOLVED: Fixed in Family_Tree.md** |
| 11 | Martha E. Corin | death_date | "~2020s" | Survived by Donald (d. Sept 7, 2015); died at age 95 | **~2014-2015** (born ~1919-1920, died before Donald at age 95) | Obituary cross-reference | **RESOLVED: Fixed in Family_Tree.md** |
| 12 | David Wesley King | birth_date vs parents_marriage | b. ~1877 | Parents (William I. King + Marcia) married ~1887 | **Birth predates marriage by 10 years** -- either (a) birth year is 1887/1897 not 1877, (b) marriage year is 1877 not 1887, (c) David from prior relationship, (d) born before marriage | Handwritten notes (single source, ambiguous digits) | OPEN: Digit ambiguity (7 vs 8 vs 9) |
| 13 | Stangle children | birth_dates cluster | Frank ~1791, William ~1792, George ~Sept 1793, Joseph ~Jan 1793 | 4 children in 26 months is biologically improbable for one mother | Some dates are misread, or children are from different mothers, or includes stepchildren | Handwritten notes (single source) | OPEN: Dates need verification |
| 14 | Arguless (charter member) | surname | "Arguless Henderson" (Family_Tree.md) | hmdb.org: "Arguless, Elizabeth and Rachel Henderson" -- comma placement ambiguous | **Surname uncertain** -- "Arguless" may not be a Henderson; could be separate person | Historical marker (primary) | **RESOLVED: Noted as ambiguous in Family_Tree.md** |

---

## Detailed Audit by Family Line

### Salmanson Line (Rhode Island)

**Leonard Irving Salmanson (1910-1975)**
- Birth: June 21, 1910 -- Find a Grave ✓, AncientFaces ✓
- Death: May 15, 1975 -- Find a Grave ✓
- Burial: Lincoln Park Cemetery, Warwick, RI -- Find a Grave ✓
- Parents: Barnett + Elizabeth (Salk) Salmanson -- Find a Grave ✓, Martha Corin obit ✓, Donald obit ✓
- Spouse: Thelma Markel (m. 1947) -- Find a Grave #231959788 ✓
- Children: Alan C., Barbara, Carol -- Thelma's memorial ✓
- CONFLICT: Jerrold listed as child in Family_Tree but NOT on Thelma's memorial → Discrepancy #7

**Thelma (Markel) Salmanson Rodbell (1920-2011)**
- Birth: Sept 12, 1920 -- Find a Grave ✓
- Death: Sept 22, 2011 -- Find a Grave ✓
- Marriage to Leonard: 1947 -- Find a Grave ✓
- Children: Alan C., Barbara, Carol S. -- Find a Grave ✓
- Remarried Rodbell after Leonard's death (1975) -- Find a Grave ✓
- CONSISTENCY CHECK: Alan graduated Moses Brown 1969 (age ~18) → born ~1951; married 1947 → born 4 years after marriage ✓

**Samuel Salmanson (~1912-2004)**
- Death: Oct 21, 2004, age 92 → born ~1912 ✓
- Born Brooklyn, NY -- obit ✓
- Wife: Hilda (Mittleman) -- obit ✓, Hilda's obit ✓
- CORRECTION: Children are James + Tobey (married Oresman), NOT James + Tobey + Richard → Discrepancy #10 RESOLVED

**Hilda (Mittleman) Salmanson (1916-2016)**
- Born Providence, RI -- obit ✓
- Died West Palm Beach, FL, age 99 -- obit ✓
- Parents: Max + Fannie Mittleman -- obit ✓
- Children: James Salmanson, Tobey (m. Richard Oresman) -- obit ✓
- Grandchildren: Matthew Oresman, Heather Wong, Lauren+Marc Regardie, Brian Salmanson, Nikki DeMartinis -- obit ✓

**Charles Salmanson (1914-2008)**
- Dates: AncientFaces ✓
- Wife: Hannah Kushner -- Find a Grave #185239892 ✓
- CONSISTENCY: Charles (1914) and Hannah (1914) same birth year ✓

**Hannah (Kushner) Salmanson (1914-2001)**
- Born June 26, 1914; died Dec 4, 2001, age 87 -- Find a Grave ✓
- Parents: Jacob + Dora (Alpert) Kushner -- Find a Grave ✓
- Wife of CHARLES (not Leonard) -- Find a Grave ✓, AncientFaces ✓

**Donald Salmanson (1924-2015)**
- Born 1924; died Sept 7, 2015, age 91 -- obit ✓
- Siblings all predeceased: Leonard (d.1975), Samuel (d.2004), Charles (d.2008), Martha -- obit ✓
- No children -- obit ✓

**Martha E. (Salmanson) Corin**
- Parents: Barnett + Elizabeth (Salk) Salmanson -- obit ✓
- CORRECTION: Death listed as ~2020s but survived by Donald (d. 2015) → died ~2014-2015 at age 95 → born ~1919-1920 → Discrepancy #11 RESOLVED
- Spouses: Paul Corin, then Edward Schwartz -- obit ✓
- Children: Rosalind Hill, Larry Schwartz -- obit ✓

### Eastern European Zalmanson Line

**All names from Screenshot 125824 only (single source)**
- Names readable: Yosef, Luba, Dovber, Sheyna, Yekutiel, Rivka, Leiba, Eliyahu(?), Golda, Srul, Gita, Zawel, Louis, Levi, Rochel, Barnett, Elizabeth ✓
- Connections between generations: interpreted from visual layout of tree app, not text -- moderate confidence
- No corroboration from any other source for Eastern European ancestors
- Zalmanson-Schneerson link (loebtree.com): user-contributed, no independent verification → Discrepancy #9

### Cox Family (South Carolina)

**William Cox Sr. (c.1726-c.1814)**
- WikiTree Cox-14022 ✓
- Moved from Orange County, NC to Greenville County, SC in late 1780s -- WikiTree ✓, Cox Family History Project ✓
- Intermarried families: Longs, Blacks, Paynes, Lees, Brashiers -- Cox Family History Project ✓

**William Cox Jr. (d. 1798)**
- WikiTree ✓, Cox Family History Project ✓
- Born Orange County, NC -- WikiTree ✓
- Married Connie Baker (b. 1760) -- WikiTree ✓
- Connie remarried William Richardson -- WikiTree ✓

**Thomas B. Cox (1792-1857)**
- WikiTree Cox-18821 ✓
- Parents: William Cox Jr. + Connie Baker -- WikiTree ✓
- Wife: Olive Mary "Polly" Henderson -- WikiTree ✓
- 12 children listed -- WikiTree ✓
- CONSISTENCY: Thomas born 1792, first child Rebecca born 1813 (age 21) ✓

**James Cox (c.1778-1853)**
- WikiTree Cox-14020 ✓
- Father: Isaac Cox -- WikiTree ✓
- Born NC, died Simpsonville SC -- WikiTree ✓
- Standing Springs Cemetery burial -- WikiTree ✓
- Church meetings in home 1818, land donated for meetinghouse c.1836 -- hmdb.org ✓
- CONFLICT: Family note says "great-great-grandfather" gave land and was "German"; James Cox is confirmed land donor but no evidence he was German → Discrepancy #3

**Rebecca Adeline Cox Henderson (1813-1894)**
- WikiTree Cox-18821 ✓
- Parents: Thomas B. Cox + Olive Mary Henderson -- WikiTree ✓
- Husband: Rev. Henry Langford Henderson (1812-1886) -- WikiTree Henderson-12233 ✓
- 10 children listed -- WikiTree ✓
- Buried Standing Springs Cemetery -- WikiTree ✓

### Stangle Family

**John Stangle (b. 1744)**
- Single source: IMG_0789 (handwritten notes)
- CONFLICT: Immigration date reads as 1683 but born 1744 → re-examination suggests 1783 → Discrepancy #1 LIKELY RESOLVED
- No web corroboration found for this individual
- German surname origin confirmed (Stengel/Stangl) -- Geneanet, igenea.com ✓

**Stangle children**
- Single source: IMG_0789
- Century digits consistently misread → Discrepancy #2 RESOLVED (all dates are 1700s)
- Birth cluster 1791-1793: biologically improbable for single mother → Discrepancy #13 OPEN
- William Stangle death date conflicts with birth → Discrepancy #4 OPEN

### King Family

**William I. King**
- Single source: IMG_0792, IMG_0786 (handwritten notes)
- Two pages give different maiden names for wife: "Kopp" (IMG_0786) vs "Huff" (IMG_0792) → Discrepancy #5 CONFIRMED
- David Wesley birth (1877) vs marriage (~1887) conflict → Discrepancy #12 OPEN

### Standing Springs Baptist Church

**Charter members (hmdb.org historical marker):**
- Source text: "Arguless, Elizabeth and Rachel Henderson, William Mayhall, Rhonda Moore, Thomas, Delila and James Richardson and Christopher and Hannah Robbins"
- "Arguless" surname assignment uncertain → Discrepancy #14 RESOLVED (noted as ambiguous)
- First pastor Rev. Nathan Berry -- hmdb.org ✓
- Organized 1818 as arm of Fork Shoals Baptist Church -- hmdb.org ✓

---

## Consistency Checks Passed

| Check | Result |
|-------|--------|
| All birth dates precede death dates (where both known) | PASS (except William Stangle, Discrepancy #4) |
| All parents born before children | PASS (except Stangle century errors, resolved) |
| All marriages occur between birth and death | PASS (except David Wesley/King marriage issue, #12) |
| Sibling birth dates allow for biological possibility | FAIL for Stangle children (#13) |
| Names consistent across all mentions in Family_Tree.md | PASS |
| Web-sourced dates match across multiple web sources | PASS (Salmanson dates consistent across Find a Grave, obituaries, AncientFaces) |
| Handwritten note facts match across pages | FAIL for Kopp vs Huff (#5) |
| Family tree app data matches web research | PASS for Salmanson line |

---

## Source Quality Assessment

| Source Type | Examples | Reliability | Notes |
|-------------|----------|-------------|-------|
| Find a Grave memorials | #231959694, #231959788, #185239892 | Moderate-High | User-submitted but often cite primary sources |
| Published obituaries | Samuel (2004), Donald (2015), Hilda (2016), Martha | High | Contemporary, published in newspapers |
| WikiTree profiles | Cox-14020, Cox-18821, Henderson-12233 | Moderate | Community-sourced, references cited |
| Historical marker | hmdb.org #168369 | High | Placed by historical society, researched |
| Digital family tree screenshots | 125748, 125824 | Moderate | User-created tree, names clear but connections interpreted |
| Handwritten legal pad notes | IMG_0786-0792 | Low-Moderate | Difficult to read, single source, dates ambiguous |
| Large hand-drawn chart | IMG_0782-0785 | Low | Very difficult to read, speculative transcriptions |
| loebtree.com | Zalmanson page | Low | User-contributed, no citations, needs corroboration |
