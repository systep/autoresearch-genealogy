---
type: reference
created: 2026-04-09
updated: 2026-04-18
tags: [genealogy, audit, cross-reference]
---

# Cross-Reference Audit

Systematic comparison of every fact in Family_Tree.md against source documents (original images, web research, obituaries). Source hierarchy: primary documents > secondary sources > tertiary sources (family trees, oral history).

## Audit Summary

- **Total named individuals audited**: ~135
- **Discrepancies found**: 37
- **Resolved**: 17 (including 2 from 2026-04-14 Yichus integration; 1 from 2026-04-17 Holocaust research; 5 from 2026-04-18 cross-reference audit)
- **Remaining open**: 20

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
| 15 | Ezekiel Henderson / Elizabeth Brasher | marriage_date_and_location | "October 10, 1782, Greenville, SC" (WikiTree Henderson-1855, Geni, Family_Tree.md) | "October 17, 1782, Chatham County, NC" (WikiTree Brasher-122) | **Chatham County, NC more likely**: (a) Greenville County did not exist until 1786; (b) Brasher family in Chatham Co. 1782 (land grants Oct 23, 1782); (c) Pension says Ezekiel "moved into South Carolina shortly after the Revolutionary War." Oct 10 vs. Oct 17 date unresolved. | WikiTree (Tier 3) vs. WikiTree (Tier 3); pension declaration (Tier 1) supports NC. | OPEN: Chatham Co. NC favored over Greenville SC on geographic and chronological grounds. Marriage bond in FamilySearch catalog 191194 could resolve. Added 2026-04-14. |
| 16 | George Michael Bright Jr. | marriage_date | "18 Sep 1891" (MyHeritage pedigree chart, page 4) | "Marriage Date: 18 Sep 1892" (Mississippi Marriages 1826-1900, cited ON the same pedigree chart page) | **One year discrepancy from same source page.** The MS Marriages database record (Tier 2) says 1892; the chart heading says 1891. 1892 is from the indexed record. | Pedigree chart (Tier 3) vs. Mississippi Marriages index (Tier 2) | OPEN: 1892 preferred (Tier 2 source). Added 2026-04-14. |
| 17 | Albert Graham Bright | marriage_date | "2 Sep 1920" (MyHeritage pedigree chart, page 1) | "September 2, 1928" (vault transcription of handwritten chart IMG_0783) | **1920 is correct**: daughter Mary Elizabeth born June 5, 1921 (9 months after Sep 1920 marriage). A 1928 date means she was born 7 years before the marriage. The "2" in "1920" likely misread as "8" on the handwritten chart. | Pedigree chart (Tier 3) vs. handwritten chart (Tier 3, ambiguous handwriting) | **RESOLVED 2026-04-18: Fixed Family_Tree.md and Rebecca_Moseley_Long.md.** See also Discrepancy #33. |
| 18 | Markel children | birth_order | Vault (pre-2026-04-14): 1. Minnie, 2. Avraham Chaim, 3. Masha, 4. Morris, 5. Sarah, 6. Hannah, 7. Florence, 8. Pessel | Yichus narrative (pages 6-8, Tier 2): 1. Freitca Miritza (Minnie), 2. Mashe (Masha), 3. Moishe Myer (Morris), 4. Tsirl (Sarah), 5. Avraham Chaim, 6. Hannah, 7. Sura Feiga (Florence), 8. Pessel (Peggy) | **Yichus order is authoritative**: Avraham Chaim is 5th not 2nd; Masha, Morris, Sarah moved up. | Yichus narrative by Ruth Gold (Tier 2) | **RESOLVED 2026-04-14**: All 10 vault person files and Family_Tree corrected. |
| 19 | Feiga Frei Karp | children | Earlier vault: Nissan, Abraham, Frieda (3 children) | Yichus typed listing page 10 (Tier 2): Abraham Karp is Joseph Karp's younger brother, not a child. Friedelle (not Frieda) is the daughter's formal name. | **Corrected**: Children are Nissan and Friedelle (Frieda). Abraham Karp was misidentified as a child; he is Joseph's brother. | Yichus page 10 (Tier 2) | **RESOLVED 2026-04-14**: Feiga_Frei_Karp.md corrected. |
| 18 | Albert Graham Bright | birth_date_month | "19 Apr 1893" (MyHeritage pedigree chart) | "Aug 19, 1893" (George_Michael_Bright.md, handwritten chart) | Day (19th) is consistent; month differs (April vs August). Could be a month/day format confusion. | Both Tier 3 | OPEN: Primary source needed. Added 2026-04-14. |
| 19 | Sara Schuller / Stephania Benning | **full_name** | "Sara Schuller" (GEDCOM, FamilySearch, MyHeritage, pedigree charts: all Tier 3) | **"verwitwete Stephania Benning"** (VATER church certificate, Assets/05.pdf, Tier 1, Pastor A. Bogeschdorfer, Waldhuetten, 10 Feb 1938) | **CRITICAL DISCREPANCY. Same person:** b. 27 Jan 1829, d. uterine cancer (Gebaermutterkrebs), same husband Michael Kascher (b. 1834, Wurmloch). VATER certificate (Tier 1) calls her "verwitwete Stephania Benning" (widowed Stephania Benning). GEDCOM/pedigree (Tier 3) calls her "Sara Schuller." Death date differs by 5 days: 22 Mai 1876 (Tier 1) vs 27 May 1876 (Tier 3). **Tier 1 supersedes Tier 3: her name per church registers is Stephania Benning, previously widowed, who married Michael Kascher on 4 Jan 1860.** The name "Sara Schuller" may derive from: (a) a confusion with her mother Sara Benning or maternal grandfather Leonhard Schuller, (b) a second given name (Stephania Sara), (c) a Transylvanian Saxon naming convention where "Schuller" was a Beiname. The GEDCOM's "Sara Schuller" appears to be a Tier 3 error propagated across multiple derivative trees. See [[Sara_Schuller]] for full analysis. | VATER church certificate (Tier 1) vs GEDCOM/FamilySearch (Tier 3). **Tier 1 wins.** | OPEN: Name corrected to Stephania Benning per Tier 1 source. Further research needed to determine origin of "Sara Schuller" name in GEDCOM. Added 2026-04-14. |
| 20 | Sara Schuller / Stephania Benning | death_date | 27 May 1876 (GEDCOM, Tier 3) | **22 Mai 1876** (VATER church certificate, Tier 1) | 5-day difference. **Tier 1 church register preferred: 22 May 1876.** GEDCOM's "27 May" is likely a transcription error or memory error by whoever submitted the GEDCOM. | VATER church certificate (Tier 1) vs GEDCOM (Tier 3) | RESOLVED: 22 May 1876 per Tier 1. Added 2026-04-14. |
| 21 | Michael Kascher I | death_date | 28 June 1880 (VATER church cert, Tier 1) | 28 June 1890 (user task description) | **Church certificate says 1880.** The "1890" in the task description appears to be a typo. The vault already records 1880 consistently. No action needed. | Church certificate (Tier 1) | RESOLVED: 1880 is correct. Added 2026-04-14. |
| 22 | Michael Kascher (son, child #1) | birth_year | 11 Feb 1889 (KINDER cert reading, Tier 1; corroborated by SSDI, 1913 marriage age 24, 1930 census age 41) | 11 Feb 1899 (alternate reading of KINDER cert digit) | **RESOLVED: 1889 is correct.** Chronological sequence of KINDER children requires 1889: next child (stillborn) is 1893, then 1895, 1897, etc. If Michael were born 1899, he would be younger than siblings born 1893-1897. Additionally, SSDI, marriage record (age 24 in 1913), and 1930 census (age 41) all confirm 1889. The church certificate digit was ambiguous but 1889 is the only possibility. | KINDER cert (Tier 1) + SSDI (Tier 1) + census (Tier 1) | RESOLVED: 1889 confirmed. Added 2026-04-14. |
| 23 | Ralph Neville | wife_identity | "Margaret de Audley, daughter of Hugh de Audley and Margaret de Clare" (Pedigree Charts 1-46.pdf, Tier 3) | Alice de Audley (d. 1374), daughter of Hugh de Audley, 1st Baron of Stratton Audley, and Isolde le Rous/Mortimer (Wikipedia, Tier 2) | **RESOLVED: Wife was ALICE de Audley, Hugh's SISTER, not daughter. Alice had no Plantagenet blood.** Hugh de Audley, 1st Earl of Gloucester's only child (Margaret) married Ralph Stafford, not Ralph Neville. This is a fatal break in the claimed royal descent. | Wikipedia (Tier 2) supersedes Pedigree Charts (Tier 3) | RESOLVED: Pedigree charts conflate two Audley women. Added 2026-04-14. |
| 24 | William Cox Sr. | parentage | Son of William Richardson Cox (1692-1767, Delaware) (Pedigree Charts, Ancestry.com, FamilySearch, Geni, Tier 3) | Parents UNKNOWN (brick wall). Y-DNA (Y-37, R1b-I "Carolina Coxes" R-M269) does NOT match Delaware Quaker Cox line. (Cox Family History Project, FamilyTreeDNA, Tier 1+2) | **RESOLVED: William Cox Sr. (c. 1730-1814, SC) is NOT the son of William Richardson Cox (DE).** DNA-disproven erroneous merger in multiple databases. This breaks the claimed royal descent chain at its terminal colonial connection. | DNA (Tier 1) + Cox Family History Project (Tier 2) supersede user-contributed trees (Tier 3) | RESOLVED: Erroneous merger. Added 2026-04-14. |
| 25 | Norman Cooke of Lavenham | existence | Listed as ancestor in Pedigree Charts (Tier 3) | WikiTree Space:Cooke-Dubious Pedigree: "Disproven Existence" for Cooke profiles 1025-1425 (Tier 2) | **RESOLVED: FABRICATION.** Norman Cooke of Lavenham and the entire Cooke ancestry of Lavenham pre-1442 is a known fabrication. No evidence has been proposed for any of these profiles. | WikiTree community research (Tier 2) supersedes Pedigree Charts (Tier 3) | RESOLVED: Fabricated ancestor. Added 2026-04-14. |

| 28 | Abraham Salk | hebrew_name | "Abraham" (GEDCOM/MyHeritage, Tier 3) | Elizabeth Salmanson headstone Hebrew inscription: "הילדה בת משה" = "Hilda bat Moshe" (BillionGraves, Lincoln Park Cemetery, Tier 1) | **OPEN: Father's Hebrew name may be Moshe (Moses), not Abraham.** Headstone (Tier 1) takes precedence over GEDCOM (Tier 3). However, the full inscription is complex and contains names from both the Salk and Salmanson lineages. "Avraham" appears later in the inscription but may refer to a Zalmanson ancestor. Professional Hebrew epigraphy review needed. Abraham's 1925 death record would provide independent confirmation. | BillionGraves headstone (Tier 1) vs MyHeritage GEDCOM (Tier 3) | OPEN: Requires death record and/or professional inscription review. Added 2026-04-14. |
| 29 | Markel siblings (Avraham Chaim, Masha, Hannah, Pessel) | death_date | "Rosh Hashanah 1939" (Yichus narrative, Tier 2) | Historical record: no mass killing of Jews in Sambor area Sept 1939. Wehrmacht occupied briefly Sept 8-20, only 2 Jews killed. Major massacres 1941-1943. (Sambor Ghetto Wikipedia, Pinkas Hakehillot, Tier 2) | **OPEN: Yichus date is almost certainly wrong. Actual death most likely 1941-1943 during Sambor Ghetto liquidation.** See [[Avraham_Chaim_Markel]] Holocaust Record Search for full analysis. | Historical record (Tier 2) contradicts Yichus (Tier 2). Historical record preferred as based on multiple independent documented sources vs. single oral tradition. | OPEN: Requires Yad Vashem/USHMM record search to establish actual date. Added 2026-04-17. |
| 30 | Markel siblings | death_location | "Rodzinka Forest" (Yichus narrative, Tier 2) | Documented execution site near Sambor was Radlowicze (Radlovitze, now Ralivka). "Rodzinka" does not appear in any historical source. | **OPEN: "Rodzinka" may be a garbled version of "Radlowicze."** Both are forests near Sambor. | Historical record (Tier 2) | OPEN: Toponymic analysis or additional testimony needed. Added 2026-04-17. |
| 31 | Markel siblings | perpetrators | "Polish Cossacks" (Yichus narrative, Tier 2) | Documented perpetrators in Sambor area: Wehrmacht (Sept 1939), Ukrainian nationalists (July 1941), German SS/police + Ukrainian auxiliary police (1942-1943). No "Polish Cossacks." | **OPEN: "Polish Cossacks" is historically anachronistic.** Most likely German SS/police and Ukrainian Hilfspolizei. | Historical record (Tier 2) | OPEN: Term may be family shorthand for irregular forces. Added 2026-04-17. |
| 32 | Renya Tzoar | survival_method | "Hidden in a convent" (Yichus narrative, Tier 2) | Evacuated to sanatorium then collective farm near Kuybyshev, Soviet Union; housed in convent AFTER returning to Poland post-war (USHMM irn619016, Tier 2) | **RESOLVED: Yichus conflated wartime evacuation with post-war convent.** During the war, Renya was in Soviet territory; convent came later. | USHMM oral history (Tier 2) supersedes Yichus (Tier 2) as first-person testimony vs. family retelling. | RESOLVED: See [[Frieda_Karp_Weidenfeld]]. Added 2026-04-17. |
| 33 | Rebecca Moseley Long / Albert Graham Bright | marriage_date | "September 2, 1928" (Family_Tree.md, Rebecca_Moseley_Long.md, handwritten chart IMG_0783) | "September 2, 1920" (MyHeritage pedigree chart, Albert_Graham_Bright.md) | **1920 is correct.** Daughter Mary Elizabeth born June 5, 1921 (9 months after Sep 1920 marriage). A 1928 date means she was born 7 years before the marriage. The "2" in "1920" was likely misread as "8" on the handwritten chart. | MyHeritage pedigree chart (Tier 3) vs handwritten chart (Tier 3, ambiguous). Chronological logic confirms 1920. | **RESOLVED 2026-04-18: Fixed Family_Tree.md and Rebecca_Moseley_Long.md.** |
| 34 | Anna Barbara Wolpack | birth_year | 1559 (GEDCOM, Tier 3) | Husband Christoph Stoffel Brecht born 1591; death 23 Dec 1683 | **~1599.** The GEDCOM's "1559" is a transposition error (decade digit 5 and 9 swapped). A 1559 birth creates an impossible 124-year lifespan and makes her 32 years older than her husband. Born ~1599: age ~84 at death (plausible), 8 years older than husband (plausible), first child 1616 at age ~17 (plausible). | GEDCOM (Tier 3); chronological impossibility analysis | **RESOLVED 2026-04-18: Corrected to ~1599 in Anna_Barbara_Wolpack.md.** |
| 35 | Michael Kascher (Transylvania) | father_spouse | "married Sara Schuller? or Anna Binder?" (Michael_Kascher_Transylvania.md) | Church certificate "KINDER" (Tier 1): married Anna Binder (1868-1915). Stephania Benning (GEDCOM: "Sara Schuller") was Michael Sr.'s mother, not wife. | **Anna Binder is correct.** The "Sara Schuller?" confusion arose from conflating generations: Stephania Benning was Michael I's wife (d. 1876), and Anna Binder was Michael Sr.'s wife (married 1888). | Church certificate "KINDER" (Tier 1) | **RESOLVED 2026-04-18: Fixed Michael_Kascher_Transylvania.md.** |
| 36 | Louis Elizar Salk | existence_confirmation | GEDCOM only (Tier 3) | **Abraham Salk death certificate No. 584/226, 1925 (Tier 1)**: father listed as "Louis Salk, born Russia" | **Confirmed at Tier 1.** Louis Salk's existence as Abraham's father is now corroborated by a primary source. Birthplace "Russia" on death cert vs "Lithuania" in GEDCOM: not contradictory (Lithuania was within the Russian Empire). | Death certificate (Tier 1) confirms GEDCOM (Tier 3) | **RESOLVED 2026-04-18: Updated Louis_Elizar_Salk.md with Tier 1 confirmation.** |
| 37 | Leonhard Schuller | descendant_name | "Stephania Benning/Sara Schuller" (plain text, not wikilinked) | Should use corrected display name per Discrepancy #19 | **Stephania Benning** is the Tier 1 name. | Church certificate "VATER" (Tier 1) | **RESOLVED 2026-04-18: Updated Leonhard_Schuller.md wikilink.** |

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

### 2026-04-18 Cross-Reference Audit Session

**Scope:** Focused audit on five high-risk areas: (1) Bright marriage date, (2) Wolpack birth year, (3) Markel line AGAD data, (4) Salk line birth year/father, (5) Sara Schuller references.

**Bright Line:**
- Rebecca_Moseley_Long.md: marriage date was "September 2, 1928" (from handwritten chart). Corrected to **September 2, 1920** (MyHeritage pedigree chart; confirmed by daughter Mary Elizabeth's June 5, 1921 birth). → Discrepancy #33 RESOLVED
- Family_Tree.md: same date corrected from 1928 to 1920.
- Albert_Graham_Bright.md: already had correct date (1920). No change needed.
- Albert Graham Bright birth month: April 19 (MyHeritage) vs August 19 (handwritten chart). Both Tier 3. → Discrepancy #18 (existing) remains OPEN.

**Brecht/Wolpack Line:**
- Anna_Barbara_Wolpack.md: birth year "1559" (GEDCOM) corrected to **~1599**. The 1559 date creates a 124-year lifespan and makes her 32 years older than husband (b. 1591). Transposition error in GEDCOM. → Discrepancy #34 RESOLVED

**Markel Line (AGAD data):**
- Family_Tree.md: already correctly records "[civil marriage registration 21 AUG 1894, Sambor; religious marriage 1878 per Yichus]". No mismatch.
- Heschel_Herman_Markel.md: marriage data consistent with Family_Tree.md. Discrepancy between 1878 (Yichus) and 1894 (AGAD) correctly documented as religious vs civil registration.
- Dov_Markel.md: correctly identifies "Mordko Ber MARKIEL" per AGAD. Consistent with Family_Tree.md.
- Mojzesz_Majer_Markiel listed as 9th child in both Family_Tree.md and Heschel_Herman_Markel.md. ✓
- Morris_Markel.md: birth order (child #3) consistent with Yichus and Family_Tree.md. ✓

**Salk Line:**
- Abraham_Zolly_Salk.md: correctly states born ~1859-1860 (death cert age 65, Tier 1). GEDCOM's ~1840 explicitly flagged as 20-year error. ✓
- Father Louis Salk confirmed at Tier 1 by death certificate. Louis_Elizar_Salk.md updated with this confirmation. → Discrepancy #36 RESOLVED
- Family_Tree.md: does not assert Abraham's birth year (only death date). No mismatch.
- Barnett birth year: 1883 (headstone, Tier 1) vs 1885 (draft card, Tier 1). Two Tier 1 sources conflict. Already documented in Barnett_Salmanson.md. OPEN (existing).
- Barnett Hebrew name "Dov Ber": consistently recorded across Barnett_Salmanson.md and headstone inscription. ✓

**Sara Schuller / Stephania Benning References:**
- Sara_Schuller.md: already correctly titled "Stephania Benning (GEDCOM: Sara Schuller)". ✓
- Michael_Kascher_Sr_1864.md: already uses corrected wikilink `[[Sara_Schuller|Stephania Benning]]`. ✓
- Regina_Kascher.md: already uses corrected wikilink. ✓
- Johann_Schuller.md: already uses corrected wikilink. ✓
- Sara_Benning.md: already uses corrected wikilink. ✓
- Henry_Michael_Kascher.md: already uses corrected name with audit reference. ✓
- Michael_Kascher_Transylvania.md: paternal grandparents field already corrected. Father field fixed (removed "Sara Schuller?" confusion). → Discrepancy #35 RESOLVED
- Leonhard_Schuller.md: plain text "Stephania Benning/Sara Schuller" updated to proper wikilink. → Discrepancy #37 RESOLVED
- Open_Questions.md: OQ #7 reference updated to note "Stephania Benning (forum says Sara Schuller)". ✓
- Research_Log.md: historical references to "Sara Schuller" preserved as-is (these document what was found at the time; changing them would falsify the log).
- Timeline.md: already uses "Stephania Benning (GEDCOM: Sara Schuller)" format. ✓
- Georg_Kascher.md: already uses corrected name. ✓

**Additional checks performed:**
- Leonard_Irving_Salmanson.md: dates match Family_Tree.md (June 21, 1910; May 15, 1975). ✓
- Thelma_Markel.md: dates match (Sept 12, 1920; Sept 22, 2011; married 1947). ✓
- Morris_Markel.md: children list consistent with Family_Tree.md (Thelma, Anne, Rita, Kate, Frieda, Joseph Harold). ✓
- Leah_Frei.md: parents (Jozef Frei, Taube Frei) consistent with Family_Tree.md and 1894 AGAD record. ✓
- Elizabeth_Salk.md: birth March 5, 1887; death November 30, 1974. Consistent with Family_Tree.md. ✓
- Donald_Salmanson.md: dates consistent (1924-2015). ✓
- Charles_Salmanson.md: dates consistent (1914-2008). ✓

---

## Consistency Checks Passed

| Check | Result |
|-------|--------|
| All birth dates precede death dates (where both known) | PASS (except William Stangle, Discrepancy #4) |
| All parents born before children | PASS (Anna Barbara Wolpack corrected from 1559 to ~1599, #34) |
| All marriages occur between birth and death | PASS (except David Wesley/King marriage issue, #12) |
| All marriages precede first child's birth | PASS (Bright marriage corrected from 1928 to 1920; child born 1921, #33) |
| Sibling birth dates allow for biological possibility | FAIL for Stangle children (#13) |
| Names consistent across all mentions in Family_Tree.md | PASS (Stephania Benning wikilinks corrected throughout, #19/#37) |
| Web-sourced dates match across multiple web sources | PASS (Salmanson dates consistent across Find a Grave, obituaries, AncientFaces) |
| Handwritten note facts match across pages | FAIL for Kopp vs Huff (#5) |
| Family tree app data matches web research | PASS for Salmanson line |
| Person file dates match Family_Tree.md dates | PASS after 2026-04-18 corrections (Bright marriage, Wolpack birth) |
| Generational consistency (father/son not confused) | PASS (Michael Kascher Transylvania father field corrected, #35) |

---

## Source Quality Assessment

| Source Type | Examples | Reliability | Notes |
|-------------|----------|-------------|-------|
| Waldhütten church certificates (VATER, MUTTER, KINDER) | Assets/03.pdf, 04.pdf, 05.pdf (1938, Pastor A. Bogeschdorfer) | **Very High (Tier 1)** | Extracted directly from Evangelical A.B. parish registers by serving pastor. Definitive primary source for Kascher/Binder/Schuller lines. |
| Find a Grave memorials | #231959694, #231959788, #185239892 | Moderate-High | User-submitted but often cite primary sources |
| Published obituaries | Samuel (2004), Donald (2015), Hilda (2016), Martha | High | Contemporary, published in newspapers |
| WikiTree profiles | Cox-14020, Cox-18821, Henderson-12233 | Moderate | Community-sourced, references cited |
| Historical marker | hmdb.org #168369 | High | Placed by historical society, researched |
| Digital family tree screenshots | 125748, 125824 | Moderate | User-created tree, names clear but connections interpreted |
| Handwritten legal pad notes | IMG_0786-0792 | Low-Moderate | Difficult to read, single source, dates ambiguous |
| Large hand-drawn chart | IMG_0782-0785 | Low | Very difficult to read, speculative transcriptions |
| loebtree.com | Zalmanson page | Low | User-contributed, no citations, needs corroboration |
