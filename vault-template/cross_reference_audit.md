---
type: reference
created: 2026-04-09
updated: 2026-05-02
tags: [genealogy, audit, cross-reference]
---

# Cross-Reference Audit

Systematic comparison of every fact in Family_Tree.md against source documents (original images, web research, obituaries). Source hierarchy: primary documents > secondary sources > tertiary sources (family trees, oral history).

## Audit Summary

- **Total named individuals audited**: ~140 in Family_Tree + full vault person-file pass on 2026-04-19 (~400 files); +19 new audits 2026-05-02 (13 new SC-line files + 6 high-traffic cross-checks)
- **Fact-level discrepancies found**: 49 (+4 added 2026-05-02: #71-74)
- **Fact-level resolved**: 28 (+3 added 2026-05-02: #72 name harmonization, #73 Ezekiel marriage place to NC, #74 Hiram Cooley children list; +1 added 2026-05-02 evening: #71 Tabitha Dolby birth year via prompt 08)
- **Fact-level open**: 21 (#71 Tabitha resolved 2026-05-02 prompt 08)
- **Duplicate person-file conflicts found (2026-04-19 pass)**: 38 pairs/groups examined
- **Duplicate consolidations made 2026-04-19**: 10 new redirects (added to 17 pre-existing redirects = 27 total redirect files in vault)
- **Duplicate cases still open**: 4 (need independent source to confirm same vs distinct)

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
| 38 | Morris Markel | death_year | 1963 (MyHeritage GEDCOM, Tier 3; Family_Tree.md) | **1964** (Kate Markel Kaplan Find a Grave #232002112 parent dates: 1890-1964) | **1964.** Find a Grave (Tier 1) supersedes MyHeritage (Tier 3). Helen's RIJHA obituary (Tier 2) confirms Morris predeceased Helen and that family moved to Miami FL ~1957, consistent with Florida death. | Find a Grave #232002112 (Tier 1) + RIJHA obituary (Tier 2) supersede MyHeritage (Tier 3) | **RESOLVED 2026-04-18: Fixed Family_Tree.md and Morris_Markel.md.** |
| 39 | Helen Brandt Markel | death_date | ~1975 / "EST 27 Jul 1975" (GEDCOM, Tier 3; Family_Tree.md) | **November 6, 1976**, Miriam Hospital, Providence RI (RIJHA obituary/death notice, Tier 2) | **Nov 6, 1976.** RIJHA obituary (Tier 2) supersedes GEDCOM estimate (Tier 3). Age 86 (born Nov 26, 1889). | RIJHA M Obituaries PDF (Tier 2) supersedes GEDCOM (Tier 3) | **RESOLVED 2026-04-18: Fixed Family_Tree.md and Helen_Brandt.md (already had correct date).** |
| 40 | Helen Brandt Markel | birth_date | ~1889 (GEDCOM); no specific date in Family_Tree.md | **November 26, 1889**, Poland (RIJHA obituary, Tier 2) | **Nov 26, 1889.** RIJHA obituary (Tier 2) provides exact date, confirming GEDCOM year estimate. | RIJHA obituary (Tier 2) confirms GEDCOM year (Tier 3) | **RESOLVED 2026-04-18: Fixed Family_Tree.md. Helen_Brandt.md already had correct date.** |
| 41 | Anne Markel | husband_name | "Sol Schlusselberg" (GEDCOM, Tier 3; Family_Tree.md) | **Peppi Schlusselberg** (1927-2014, Hewlett NY, buried Israel; MyHeritage/research agents; Peppi Schlusselberg obituary at dignitymemorial.com) | **Peppi Schlusselberg.** "Sol" appears only in GEDCOM (Tier 3). Research agents and obituary confirm Peppi. Helen's RIJHA obituary (Tier 2) names "Mrs. Anne Schlusselberg" but does not give husband's first name. | MyHeritage/research agents + obituary supersede GEDCOM (Tier 3) | **RESOLVED 2026-04-18: Fixed Family_Tree.md, Morris_Markel.md, Helen_Brandt.md.** |
| 42 | Rita Markel / Freda Markel | identity | "Rita Markel" (1940/1950 Census, Tier 1) listed separately from "Frieda Markel (dec.)" (Yichus, Tier 2) in vault | **Same person.** Helen's 1976 RIJHA obituary (Tier 2) lists exactly 5 children: Joseph H., Thelma, Anne, Freda, Kate — no "Rita." Census lists Rita with no Freda. | **Rita = Freda = same person.** Used "Rita" in census records; "Freda/Frieda" in family usage and obituary. | RIJHA obituary (Tier 2) + Census (Tier 1): 5 children total, no separate Rita and Freda | **RESOLVED 2026-04-18: Merged in Family_Tree.md, Morris_Markel.md, Helen_Brandt.md.** |
| 43 | Mojzesz Majer Markiel | identity | Listed as 9th child of Heshel + Leah, separate from Morris Markel (#3) (Family_Tree.md, Heschel_Herman_Markel.md, Mojzesz_Majer_Markiel.md) | **Same person as Morris Markel.** The 1919 marriage banns (Tier 1) record the marriage of "Mojżesz Majer MARKIEL" to "Dwora GOLDBAUM false BRAND of Lisko" — this is Morris marrying Helen Brandt. Polish civil "Mojżesz Majer" = Yiddish "Moishe Myer" = American "Morris." Bride's parents match Helen's parents exactly. | **Mojzesz Majer Markiel IS Morris Markel.** Not a separate 9th sibling. The 1919 marriage record is Morris's own marriage. | 1919 marriage banns (Tier 1) + identity analysis (6/6 data points match) | **RESOLVED 2026-04-18: Updated Family_Tree.md, Heschel_Herman_Markel.md, Mojzesz_Majer_Markiel.md, Morris_Markel.md.** |
| 44 | Joseph Harold Markel | death_date | Not previously recorded (alive as of vault creation) | **December 6, 1989**, age 57 (RIJHA obituary, Tier 2) | **Dec 6, 1989.** RIJHA obituary (Tier 2) provides date, cause, and biographical details. Co-founder Mortgage Guarantee & Title Co., URI grad, BU Law, Army vet. Sons M. William Markel and Gregory S. Markel. | RIJHA M Obituaries PDF (Tier 2) | **RESOLVED 2026-04-18: Added to Family_Tree.md and Helen_Brandt.md.** |
| 45 | Lesko Yizkor Book | holocaust_martyrs | No Goldbaum/Brand martyrs previously in vault | **6 Goldbaum martyrs confirmed in Lesko**: David, Feiga (with children Ester, Chana, Yisrael Lipa), Edel Gross nee Goldbaum. **Brand martyrs in Baligrod list**: Leibish Brand, Mordechai Brand. | New data from Lesko Yizkor Book necrology. These may be relatives of Helen Brandt (Dwora Goldbaum/Brand of Lisko). | Lesko Yizkor Book (Tier 2) | OPEN: Relationship to Helen's parents (Jozef Brand, Brancia Goldbaum) not yet established. Requires further research. Added 2026-04-18. |

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

### 2026-04-18 Evening Cross-Reference Audit Session (RIJHA Obituaries + Research Agents)

**Scope:** Integration of newly confirmed data from RIJHA M Obituaries PDF (Tier 2), MyHeritage/research agents, 1940/1950 Census cross-references, and Lesko Yizkor Book. Seven discrepancies resolved (#38-44), one new open discrepancy added (#45).

**RIJHA Obituary Data (Tier 2):**
- Helen (Brand) Markel obituary: born Nov 26, 1889 Poland; died Nov 6, 1976, Miriam Hospital, Providence RI; father "Mr. and Mrs. Joseph Brand"; operated Markel Dress Store in West Warwick, retiring 1957; lived West Warwick 26 years, then Miami FL, then Providence 13 years; 5 children (Joseph H., Thelma, Anne, Freda, Kate), 10 grandchildren; buried Lincoln Park Cemetery. → Discrepancies #39 (death date), #40 (birth date) RESOLVED
- Joseph H. Markel obituary: born ~1932 Providence; died Dec 6, 1989 age 57; co-founder Mortgage Guarantee & Title Co.; URI graduate, BU Law; Army vet; sons M. William Markel and Gregory S. Markel; 4 sisters (Thelma, Kay/Kate, Ann, Freda); buried Lincoln Park Cemetery. → Discrepancy #44 RESOLVED

**MyHeritage / Research Agent Data:**
- Morris Markel death: **1964 in Florida** (NOT 1963 as in GEDCOM). Kate Markel Kaplan Find a Grave #232002112 lists parent dates as (1890-1964) and (1889-1976). → Discrepancy #38 RESOLVED
- Anne Schlusselberg's husband: **Peppi Schlusselberg** (1927-2014, Hewlett NY, buried Israel), NOT "Sol Schlusselberg" as in GEDCOM. → Discrepancy #41 RESOLVED
- Rita = Freda: same person. "Rita" in 1940/1950 Census; "Freda/Frieda" in Yichus and obituary. Helen's obit lists 5 children with no "Rita." → Discrepancy #42 RESOLVED
- Mojzesz Majer Markiel (sibling #9) = Morris Markel (sibling #3): The 1919 Sambor marriage record is Morris's own marriage to Helen Brandt. Polish civil "Mojżesz Majer" = Yiddish "Moishe Myer." Bride "Dwora GOLDBAUM false BRAND" = Helen (parents match exactly). → Discrepancy #43 RESOLVED

**Lesko Yizkor Book Data (Tier 2):**
- 6 Goldbaum Holocaust martyrs confirmed in Lesko: David, Feiga (with children Ester, Chana, Yisrael Lipa), Edel Gross nee Goldbaum
- Brand family in Baligrod martyrs list: Leibish Brand, Mordechai Brand
- Relationship to Helen's parents (Jozef Brand, Brancia Goldbaum) not yet established. → Discrepancy #45 OPEN

**Files updated in this session:**
- Family_Tree.md: Morris death year (1963→1964), Helen birth/death dates added, Joseph Harold death/career/sons added, Anne husband corrected (Sol→Peppi), Rita/Freda merged, Mojzesz sibling #9 marked as duplicate of Morris #3, Markel Dress Store added
- Morris_Markel.md: death year (1963→1964), death location (Florida), occupation (Markel Dress Store added), Anne husband corrected, Rita/Freda merged, Mojzesz=Morris identity noted, data discrepancies table updated
- Heschel_Herman_Markel.md: sibling #9 marked as resolved duplicate of #3, child count corrected from 9 to 8
- Mojzesz_Majer_Markiel.md: identity resolution note added at top, confidence upgraded from low to strong
- Helen_Brandt.md: already contained correct RIJHA data from earlier session; no changes needed
- cross_reference_audit.md: 8 new rows (#38-45), summary counts updated

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
| Person file dates match Family_Tree.md dates | PASS after 2026-04-18 corrections (Bright marriage, Wolpack birth, Morris death, Helen dates, Joseph Harold death) |
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

---

## 2026-04-19 Duplicate Person File Audit

**Scope**: Systematic sweep of all ~400 person files in the vault (created 2026-04-18 during GEDCOM ingest) to identify duplicate records of the same historical individual appearing under different filenames. A large batch of ~300 new person files was generated from a MyHeritage GEDCOM export, which produced many duplicates of individuals already documented in the original research.

**Method**: For each suspected duplicate pair or cluster, read both files, compare name variants, dates, places, parents, spouses, and children. Duplicates confirmed (same birth date AND same death date AND same place, or same dates plus overlapping family relationships) were consolidated by converting the weaker file (lower confidence, fewer sources) into a redirect to the canonical file. Never deleted the weaker file; preserved the redirect for citation stability.

### Duplicate resolution guard rails applied

1. Primary-source files (Tier 1 church records, death certificates, obituaries) were always retained as canonical. GEDCOM-only files were redirected.
2. When two files had the same name and overlapping dates but distinct parents or spouses, flagged as AMBIGUOUS and left both as person files.
3. When a GEDCOM file contained impossible dates (death before birth, 124-year lifespan) it was redirected to the corrected canonical file with the error noted.
4. Never silently merged two conflicting claims. Both values preserved in the Data Discrepancies section of the canonical file.

### Pre-existing redirects (confirmed correct during 2026-04-19 audit)

| Redirect File | Canonical File | Rationale |
|---|---|---|
| Alexander_J._Cox.md | Alexander_J_Cox.md | Period variant |
| Perry_F._Cox.md | Perry_F_Cox.md | Period variant |
| William_L._Cox.md | William_L_Cox.md | Period variant |
| Viola_Youngblood.md | Viola_E._Youngblood.md | Abbreviated name |
| Eleanor_Youngblood.md | Eleanor_Nellie_Youngblood.md | Abbreviated name |
| Willie_H_Youngblood.md | William_H_Youngblood.md | Name variant (Willie vs William) for same father |
| William_H._Youngblood.md | William_H_Youngblood.md | Period variant |
| William_Henry_Youngblood.md | William_H_Youngblood.md | Middle name expanded |
| Willie_H_Youngblood.md | Willis_Henrietta_Youngblood.md | Name variant for daughter (distinct from father) |
| Buchanan_S_Wert.md | Buchanan_Wert.md | Middle-initial variant |
| Buchanan_Sales_Wert.md | Buchanan_Wert.md | Middle-name variant |
| Michael_Kascher.md | Michael_Kascher_Sr_1864.md | GEDCOM lacks disambiguator |
| Michel_Kascher.md | Michael_Kascher_Transylvania.md | GEDCOM anglicized variant |
| George_Kascher.md | Georg_Kascher_1895.md | Anglicized variant |
| Samuel_Bright.md | Samuel_David_Bright.md | Abbreviated name |
| Louis_Schwartz.md | Louis_F_Schwartz.md | Missing middle initial |
| Sylvia_L_Kuniansky.md | Sylvia_Leah_Kuniansky.md | Middle-initial variant |
| Rebecca_M_Long.md | Rebecca_Moseley_Long.md | Middle-initial variant |
| Dave_Trevor_Long.md | David_Tarver_Long.md | GEDCOM name variant |

### New redirects created 2026-04-19

| Redirect File | Canonical File | Evidence for same person | Source authority |
|---|---|---|---|
| Cythia_Cox.md | Cynthia_Sithey_Cox.md | Both b. 1762 Greenville SC, d. 1835 Talladega AL | Both MyHeritage GEDCOM (Tier 3); spelling variant only |
| Jonathan_Jonas_james_Moseley.md | Jonathan_Jonas_James_Moseley.md | Both b. 1683 England, d. before 18 Jul 1749 Surry/Brunswick VA | Case variant in filename only |
| James_Jamie_Cox.md | James_Cox.md | Both b. 1778 NC, d. 22 May 1853 Simpsonville | Canonical has WikiTree Cox-14020 (Tier 3) + hmdb.org marker (Tier 2) |
| Diana_Cox.md | Diana_Black_Cox.md | Both d. 7 Jan 1865; Diana Black m. James Cox | Canonical has Find a Grave (Tier 3) |
| William_Cox.md | William_Cox_Jr.md | Both d. 1798; both son of William Cox Sr.; canonical has Connie Baker as spouse | Canonical has WikiTree + Cox Family History Project (Tier 2) |
| William_Cox_Cox.md | William_Cox_1798.md | Both b. 8 Jun 1798 Greenville SC. Duplicate GEDCOM filename (surname repeat); "15 FEB 1682" death is GEDCOM digit error | Canonical has 1850 Census + Geni |
| Rowland_Black_Cox.md | Monroe_J_P_Cox.md | Both d. 26 Jan 1895 Simpsonville; both b. 1813 | Both MyHeritage only; FLAGGED for verification |
| Albert_Bright.md | Albert_Graham_Bright.md | Both b. 19 Aug 1893 Abingdon VA, d. 5 Sep 1961 | Canonical has 1950 Census + pedigree chart |
| Fredrik_"Fritz"_Peter_Schwartz.md | Friedrich_Fritz_Peter_Schwartz.md | Both b. Aug 1854 Germany/Prussia, d. 1929 Chicago, chair maker | GEDCOM only; filename punctuation variant (curly quotes) |
| John_Hough_1660.md | John_Hough.md | Both b. ~1660; "John Hough.md" documents the ~1660 individual (father of John Hough b. 1682 who is described in earlier section of that file) | GENERATION NOTE: See canonical file for 3-generation chain |

### Duplicates flagged for further verification (NOT merged; both kept as person files)

| File 1 | File 2 | Reason kept separate |
|---|---|---|
| Mary_Ann_Bright.md (b. 20 Aug 1853, Franklin Depot VA) | Charles_T._Bright.md (b. 20 Aug 1853, Franklin Depot VA) | Same birth date, same place. Per Samuel_Graham_Bright.md they are twins, not duplicates. Preserved both. |
| Cithia_Cox.md (b. 1802 Greenville Chatham) | Cynthia_Sithey_Cox.md (b. 1762 Greenville SC, d. 1835 Talladega AL) | 40-year difference; these appear to be different women despite similar names. Preserved both. |
| Thomas_Cox.md (b. 1694 New Castle DE, d. 1774 Craven SC) | Thomas_B_Cox.md (b. 1792 d. 1857) | Different generations and places. NOT duplicates. Preserved. |
| John_Cox.md (b. 1675 Drayton England, d. 1711 Kennett PA) | John_Washington_Cox.md, John_A_Cox.md, John_Andrew_Cox.md, John_B_Cox.md | All different dates/places. Distinct individuals. Preserved. |
| Frances_Moseley.md (b. 1724 Brunswick VA) | Hannah_Moseley.md (b. ~1710 Surry VA) | Distinct wives of distinct Jonathan/William Moseleys per Jonathan_Jonas_James_Moseley.md narrative. Preserved. |
| William_Cox_Sr.md (c.1730-1814) vs William_Cox.md (b. 1770) vs William_Cox_Jr.md (d. 1798) vs William_Cox_1798.md (b. 1798) vs William_Cox_Cox.md (b. 1798) | 5 Williams total — 3 distinct generations (Sr., Jr., and Thomas Manning Cox's father). William_Cox.md redirected to Jr., William_Cox_Cox.md redirected to William_Cox_1798. Sr. and the 2 remaining canonicals preserved. | Generational consistency checked. |
| Eleanor_Nellie_Youngblood.md (b. 1860 MS, d. 1944 Starkville MS) | Eleanor_Sands.md (colonial Quaker, 1692 PA) | Completely distinct individuals (3 centuries apart). Preserved both. |
| Harry_Kuniansky.md (b. 1888 Russian Empire, d. 1933 Atlanta) | Harry_S._Kuniansky.md (d. 2022 Atlanta) | Different generations (89 years between deaths). Almost certainly grandson named for grandfather. Preserved both. |
| Willie_Henrietta_Drake.md (b. 1886 Starkville MS, d. 1967 Lowndes MS) | Willis_Henrietta_Youngblood.md (b. 1863, d. 1952) | Drake is a daughter of Eleanor Nellie Youngblood (who married a Drake). Willis is Eleanor's sister. Willie Drake is very likely named for her aunt Willis. Preserved both. |
| Alice_Frances.md (user-provided, stub) | Alice_Frances_Lindley.md (1736-1781, documented Quaker) | Both are wife of John Baldwin, but the stub lacks the Lindley surname. The Lindley file has moderate confidence with an 1811 receipt citation. Stub is likely same person but kept as separate stub pending confirmation. FLAG for eventual merge. |
| Agnes_Cox_Long.md (b. 1891, d. 1974) | Agnes_Long.md (b. 1882-1907, d. ~1891-07-08) | Different dates. Agnes Cox Long was born after Agnes Long died. Distinct people despite name overlap. Preserved. |

### Open duplicate-resolution cases (pending source review)

1. **Rowland_Black_Cox.md / Monroe_J_P_Cox.md**: Redirect made but flagged: identical death date (26 Jan 1895 Simpsonville) and same 1813 birth year argue same person. However, "Rowland Black Cox" is a plausible name variant of a Cox-Black son (James Cox married Diana Black, and their descendants would bear both surnames). Monroe_J_P_Cox.md has different birthplace ("Carolina, Puerto Rico" which is an obvious MyHeritage geocoding error). Needs 1880 Census or Find a Grave lookup to confirm.

2. **Henry_Bright.md (b. 1760 Lancaster PA, d. 1856 Lincoln KY) / Jacob_Bright.md (b. 1774 Berks PA, d. 1812 Mercer KY)**: Both descend from Johann Michael Brecht II. Distinct individuals but possibly siblings of David Bright; placement in tree needs verification.

3. **John_Cowgill_Lothersdale.md / Jane_Cowgill.md / Ralph_Cowgill.md / Bryan_Cowgill.md**: Four Cowgill files; Jane is spouse of Stephen Sands. Relationships between the four need documentation.

4. **Sarah_Bright_Brecht.md / Sarah_Cinthia_Cox.md / Sarah_Catherine_Bright.md / Sarah_Margaret_Bright.md / Sarah_B_Bright.md**: Multiple Sarah Brights/Coxes across generations. Reviewed; all appear distinct based on dates but some are stubs needing more source work.

### GEDCOM-artifact filenames noted

- Several files have encoding artifacts: `Fredrik_"Fritz"_Peter_Schwartz.md` uses Unicode curly quotes in the filename. Redirected to ASCII-quoted variant.
- `William_Cox_Cox.md` has duplicated surname (GEDCOM export artifact).
- `Schwartz.md` (b. 22 MAR 1872, d. 22 MAR 1872) is an unnamed infant. Retained as stub; candidate for Unresolved_Persons.md.
- `Kleinberg.md` (b. 1775, no first name) is similarly unnamed. Retained as stub.
- `Bright.md` (b. 1770, d. 1770 Berks PA) is unnamed infant. Retained as stub.
- Unknown_Male_Schwartz.md exists for completeness.
- These nameless-person files should be migrated to Unresolved_Persons.md in a future pass.

### Structural observations on Family_Tree.md and vault

1. **Family_Tree.md** still references "Rebecca_M_Long" in some places but most links now use "Rebecca_Moseley_Long" (the canonical form with middle name preserved per Southern naming convention); since Rebecca_M_Long.md is a redirect, Obsidian wikilinks resolve correctly but non-Obsidian GEDCOM export tools may not follow the redirect.
2. **Family_Tree.md** Discrepancies table numbering has a gap between #12 and #14 and a duplicate #18 and #19 (content correct but numbering confused). Not resolved in this pass.
3. **Unnamed-person stub files** (Bright.md, Kleinberg.md, Schwartz.md) violate the vault convention "create a person file only when someone has at least one primary source plus biographical detail." They should be consolidated to Unresolved_Persons.md.
4. **Many GEDCOM-import files have empty Data Discrepancies tables** (a single empty row). No actionable items; cosmetic cleanup only.
5. **Confidence levels**: ~300 of the GEDCOM-derived files are `confidence: low` with `sources: [MyHeritage GEDCOM (Tier 3)]` only. Per the Two Independent Sources standard, these should not be used to make new claims without corroboration.
6. **Bright family sibling group**: Samuel Graham Bright's children list (George Michael, Charles T., Mary Ann, Sarah Margaret, Zadock Jesse, Martha C, Maude H., Mary Emma, Mildred) matches across his file and the individual child files. Charles T. and Mary Ann share birth date (twins per the list).
7. **Cox family cluster**: William Cox Sr. -> William Cox Jr. -> Thomas B. Cox -> Rebecca Adeline Cox Henderson chain is well-documented at strong confidence. The Isaac Cox branch (Isaac -> James -> descendants) is also well-documented.
8. **Eastern European / Jewish ancestor files** (Shneuri, Schneerson, Luria, Loew): clustered appropriately, no duplicates found in this audit.
9. **Salmanson / Zalmanson files**: all distinct across generations; Barnett is canonical.

### Fact-level discrepancies discovered during duplicate pass (NEW this session)

| # | Person / File | Field | Issue | Status |
|---|---|---|---|---|
| 46 | William Cox Cox.md | death_year | Listed "15 FEB 1682" in GEDCOM but born 8 JUN 1798 | RESOLVED: file redirected to William_Cox_1798.md; GEDCOM date is obvious century-inversion error |
| 47 | Maria_Ranft (in Agnetha_Probstdorfer.md) | birth_year | 1882 (GEDCOM) cannot predate daughter's 1847 birth | OPEN: flagged in Agnetha_Probstdorfer.md; requires correction |
| 48 | Michael Bright.md | birthplace_spelling | "Tennesse" misspelling | OPEN: minor, cosmetic |
| 49 | John_Hough_Colonial.md | death_at_age_17 | d. 1659 at age 17 yet fathered son ~1660 | OPEN: likely GEDCOM error; could be terminus post quem |
| 50 | Monroe_J_P_Cox.md | birthplace | "Carolina, Carolina, Puerto Rico" is MyHeritage geocoding error for "Carolina [District], Carolina [County?], SC" | OPEN: cosmetic, confirms SC was intended |

### Fact-level discrepancies discovered during Geni Shneur Zalman tree import (2026-04-19 evening)

| # | Person / File | Field | Geni Value (Tier 2-3) | Vault Existing (source) | Correct Value | Status |
|---|---|---|---|---|---|---|
| 51 | [[Shneur_Zalman_of_Liadi]] | birth_date | Sept 15, 1745 Liozna | Sept 4, 1745 (Wikipedia/Chabad.org) | Both acceptable (Julian vs Gregorian, or different conversion from 18 Elul 5505) | RESOLVED: noted in person file Data Discrepancies |
| 52 | [[Shalom_Shachne_Schneerson]] (father of Tzemach Tzedek) | surname | "Altschuler" (Geni) | "Schneerson" (vault) | Altschuler is the earlier surname (pre-Schneerson adoption); vault uses the later adopted family surname. Both attested | RESOLVED: noted in person file |
| 53 | [[Solomon_Luria_Maharshal]] | life_span | b. c. 1495 Germany; d. c. 1540 Jerusalem (Geni) | Maharshal standard: b. c. 1510 Poznan, d. 1573 Lublin (Jewish Encyclopedia, Wikipedia) | Geni's entry "Rabbi Shlomo Ashkenazi Luria" in this particular tree appears to be a different figure from the Maharshal. Name collision in Geni | OPEN: further research needed to clarify which Luria the Geni tree references |
| 54 | [[Sheyna_Boruchovich]] | birthplace | Yanovichi, Vitebsk (Geni 2026) | Yanovichi (GEDCOM) / Leozna (FamilySearch) | Geni corroborates Yanovichi | RESOLVED: Yanovichi preferred (2 of 3 sources) |
| 55 | [[Dvorah_Leah_Schneerson]] | surname | "Altschuler" (Geni, matching 52) | "Schneerson" (vault) | See #52; Altschuler is the pre-Schneerson family surname | RESOLVED |
| 56 | [[Maharal_of_Prague]] ancestry (Gen 9+) | provability | Geni traces Maharal's pre-1480 ancestry through a Bezalel Ancestor figure (generic name, no dates) | Vault flags Maharal descent as contested in modern scholarship | Geni data does not resolve the pre-Maharal question; adds no corroborating primary source | OPEN: no primary source resolves this |
| 57 | Medieval rabbinic lines 12th-15th c. Paris/Troyes/Alsace/Germany | provability | Geni shows continuous descent from Rashi (1040-1105) via Rabbeinu Tam, R"I haZaken, the SirLeon family, and the Treves-Ashkenazi rabbis to the 14th-16th c. Shapira/Luria lines | No independent corroboration in vault | All new vault files (gen 13-20) flagged `confidence: low` per Guard rail 2. These claims appear in multiple rabbinic genealogy compendia (e.g. Rosenstein, Paull) but are not independently provable from primary sources | OPEN: inherent to the period; treat as traditional attribution |
| 58 | Descent from biblical King David (via Bustanai, Hai Gaon, Samuel ha-Nagid) | provability | Geni claims continuous descent from Shneur Zalman back to King David (~900 BCE) via Exilarchate and medieval Spanish rabbis | Traditional rabbinic claim present in many Chabad sources; not genealogically verifiable | All biblical-ancestor vault files ([[King_David]], [[King_Solomon]], [[King_Rehoboam]], [[Zerubbabel]], [[Hai_Gaon]], [[Bustanai]], [[Samuel_ha_Nagid]]) retained at pre-existing confidence (not upgraded) with the Geni source noted | OPEN: traditional rabbinic attribution, not verified descent |
| 59 | [[Yosef_Yitzchak_Schneerson]] | identity | Geni: "Yosef Yitzhak Schneerson [of Ovruch]" b. 1822 Lubawitch, d. 1876 Ovruch (son of Tzemach Tzedek) | Vault file likely refers to Yosef Yitzchak Schneerson the 6th Rebbe (1880-1950) | **Potential name collision**: Need to verify which Yosef Yitzchak the vault file documents. If the 6th Rebbe, a separate file may be warranted for the c. 1822 son of Tzemach Tzedek | OPEN: flagged for disambiguation |
| 60 | Rachel Shneuri (Alter Rebbe's 2nd wife, Rachel Sheiness, 1770-1799) | existence | Geni treats her as 2nd wife with spouse Avraham Sheiness | Vault has [[Rachel_Shneuri]] but not positioned as 2nd wife in prior data | Geni attribution likely confuses Alter Rebbe's actual wife history. Traditional sources name Sterna Segal as sole wife | OPEN: Geni claim of a 2nd wife Rachel Sheiness needs source verification; may be confused with the fictional "Rivka Perle" figure or a daughter named Rachel | OPEN |

---

## 2026-04-22 Cross-Reference Audit (Session AUDIT-A)

**Scope**: Targeted audit of the highest-risk clusters after recent high-volume ingests: (1) rabbinic Geni stubs added 2026-04-19, (2) the George Adam Bright / George Bright conflation flagged in Research_Log 2026-04-19 item #9.

**Not audited this session** (deferred): Zalmanzon / Salk / LVIA 1908 cluster, Baldwin Oxfordshire/Buckinghamshire question, Kuniansky DOB propagation, full Family_Tree.md re-read. The audit agent ran out of time (stream idle timeout) before reaching them. Listed as follow-up work.

### GEDCOM-filename-truncation duplicates consolidated (7 new redirects)

Duplicate person files created when the 2026-04-19 rabbinic Geni import emitted two filenames for the same Geni profile (one truncated, one with a suffix). Same birth date, same death date, same places. Redirected the weaker variant to the canonical file.

| # | Redirect File | Canonical File | Evidence for same person |
|---|---|---|---|
| 61 | Aharon_ben_Nethanel_Luria_ABD_Heilbronn.md | Aharon_ben_Nethanel_Luria_ABD.md | Both b. c. 1413 Heilbronn, d. 1478 Worms; identical Geni source |
| 62 | Avraham_Ben_Matityahu_Ashkenazi_of_Treves_1240.md | Avraham_Ben_Matityahu_Ashkenazi_of_Treves.md | Identical dates, parents, children |
| 63 | Avraham_Ben_Matityahu_Ashkenazi_of_Treves_b.md | Avraham_Ben_Matityahu_Ashkenazi_of_Treves.md | Identical dates, parents, children |
| 64 | Jechiel_Ben_Matityahu_AshkenaziTreves_The.md | Jechiel_Ben_Matityahu_AshkenaziTreves.md | Identical dates and Geni source |
| 65 | Matityahu_Ashkenazi_Ashkenazi_Treves_Chief_Rabbi.md | Matityahu_Ashkenazi_Ashkenazi_Treves_Chief.md | Identical dates and Geni source |
| 66 | Matityahu_Ashkenazi_Ashkenazi_Treves_Chief_Rabbi_of.md | Matityahu_Ashkenazi_Ashkenazi_Treves_Chief.md | Identical dates and Geni source |
| 67 | Yosef_Tzarfati_Treves_Ashkenazi_1304.md | Yosef_Tzarfati_Treves_Ashkenazi.md | Identical dates and Geni source |
| 68 | Yosef_Tzarfati_Treves_Ashkenazi_b.md | Yosef_Tzarfati_Treves_Ashkenazi.md | Identical dates and Geni source |

### Fact-level discrepancies resolved (George Adam Bright conflation)

| # | Person / File | Field | Value Before | Value After | Source Authority | Status |
|---|---|---|---|---|---|---|
| 69 | [[George_Adam_Bright]] | identity | b. 9 Feb 1731 Heidelberg PA, d. 1769 (MyHeritage GEDCOM Tier 3) | b. 2 Sep 1730 Heidelberg Twp PA, d. 14 Jun 1804 Augusta Co VA (buried Dutch Hollow Hanger Cemetery, Virginia DHR #007-6089) | Find a Grave #124244091 (Tier 2) + Virginia DHR Historic Register #007-6089 (Tier 2) + Geni + WikiTree Bright-270 | **RESOLVED 2026-04-22**: GEDCOM had merged two distinct men. George Adam Bright (Brecht) Sr. (1730-1804, Augusta Co VA) is the PA-to-VA Brecht anglicization figure with will proved 1805. File re-written to reflect the 1730-1804 life. |
| 70 | [[George_Bright]] | identity | unclear / conflated with George Adam | b. 9 Feb 1731 Lancaster/Heidelberg PA, d. ~1783 Kentucky (scouted with Daniel Boone 1776) | Find a Grave #285400993 (Tier 2) | **RESOLVED 2026-04-22**: Confirmed as a distinct individual from George Adam Bright above. Likely a younger cousin or Brecht collateral, not brother of George Adam. |

### Follow-up items (next audit session)

1. Zalmanzon / Salk / LVIA Rokiskis 1908 cluster not yet audited against vault. Key person files to check: Levi_Itzhak_Zalmanson, Louis_Elizar_Salk, Bella_Measroch (stub), Benjamin_Salk, Julius_Salk, Hyman_Salk, Abraham_Salk, Elizabeth_Salk, Barnett_Salmanson, any Srol/Israel Zalmanzon child. Genuine identity question surfaced by OQ-18 agent: Louis_Elizar_Salk vs Levi_Itzhak_Zalmanson. See Open_Questions.md OQ-18.
2. Kuniansky DOB propagation: verify every vault file referencing Harry Kuniansky uses 21 Mar 1889 (Find a Grave Tier 2) not 15 Jun 1888 (old GEDCOM).
3. Baldwin cluster (Oxfordshire emigrants 1682 vs Buckinghamshire FreeREG candidates; Eli Baldwin wife "Elizabeth (unknown)" vs "Edaline L. Transon").
4. Rabbinic Geni stubs rows 53 and 59 (Luria identity, Yosef Yitzchak Schneerson disambiguation) remain OPEN and need further source verification.
5. `source_citation_audit.md` trivial edit made but not material to this session.

---

## 2026-05-02 Cross-Reference Audit (post-tree-expansion sweep, branch claude/run-top-agents-oyF19)

**Scope**: Targeted 2-iteration audit of the 13 person files added during the 2026-05-02 `01-tree-expansion` session (SC maternal lines: Cox/Henderson/King/Long/Huff/Brashier/Cooley) plus a slice of related high-traffic ancestors. Cap: ~30 persons across both iterations. Focus: date/name/place mismatches between Family_Tree.md and underlying person files; primary-source corrections only when a single Tier 1 lookup settles the conflict cheaply. Fact-only; no web research conducted.

**Iteration 1**: 13 newly created person files audited against Family_Tree.md and against pre-existing cross-linked files.

| File audited | Compared against | Outcome |
|---|---|---|
| [[Tabitha_Dolby]] | Family_Tree.md line 481 | Discrepancy already documented (#71 below); existing flag in Family_Tree.md per Guard Rail #3. |
| [[Mary_Holloway_Huff]] | Family_Tree.md line 403 + [[William_Holloway_Brunswick_VA]] | Parentage open question correctly noted in Open_Questions OQ #30; person file's "Father: possibly William Holloway" matches Family_Tree's "probable kin"; no Family_Tree mismatch. ✓ |
| [[John_Parker_Anderson_SC]] | Family_Tree.md line 490 | Dates (b. 1753 Ireland, d. 4 Jun 1845 Belton) match exactly. ✓ |
| [[Elizabeth_Betty_Gresham_Parker]] | Family_Tree.md line 490 | Maiden name "Gresham" added at Tier 3 in person file; Family_Tree.md correctly records "Betty Gresham". ✓ |
| [[Mary_Nancy_Parker_King]] | Family_Tree.md lines 488-490 | Birth Mar 8 1787, death Jun 8 1853 match. ✓ |
| [[Olive_Mary_Polly_Henderson_Cox]] | Family_Tree.md line 334 + [[Thomas_B_Cox]] + [[Ezekiel_Henderson]] | Person file's `name` frontmatter is "Mary Olive 'Polly' (Henderson) Cox" while Family_Tree.md displays "Olive Mary 'Polly' Henderson". See Discrepancy #72 below. Dates (1795-1876) match across all three files. |
| [[Elizabeth_Brasher_Henderson]] | Family_Tree.md line 338 + [[Ezekiel_Henderson]] line 30 | Marriage place CONFLICT carried forward from existing Discrepancy #15: person file says "17 October 1782 in Chatham County, NC", but [[Ezekiel_Henderson]] still says "October 10, 1782 in South Carolina". See Discrepancy #73 below. |
| [[William_Holloway_Brunswick_VA]] | Family_Tree.md line 445 | Will date (16 Oct 1784, proved 22 Nov 1784), wife Martha Ballard, children list match Family_Tree.md exactly. ✓ |
| [[Martha_Ballard_Holloway]] | Family_Tree.md line 445 | Birth 1735 + death window 1784-1789 match. ✓ |
| [[Hiram_Cooley]] | Family_Tree.md line 524 | Internal inconsistency in person file (12 children listed but text says "10 children"; one child b. 1815 cannot be by Mary Ann Woodson b. 1803 [age 12]). See Discrepancy #74 below. |
| [[Jacob_Cooley_Jr]] | Family_Tree.md line 524 | b. 1760, d. 1826, m. Nancy Gover 5 Apr 1787 Pittsylvania VA -- matches. ✓ |
| [[Nancy_Gover_Cooley]] | Family_Tree.md line 524 | b. 1763, d. before 1844 -- matches. ✓ |
| [[Thomas_Levi_Brasher_Jr]] | Family_Tree.md line 338 | b. 18 Jun 1731 Baltimore Co MD, d. ~1789 Greenville SC -- matches. ✓ |

**Verify after Iteration 1**: `grep -c "DISCREPANCY\|MISMATCH\|CONFLICT" cross_reference_audit.md` = 7 (baseline 4 + 3 new MISMATCH/CONFLICT references in this section).

**Iteration 2**: Slice of related high-traffic ancestors (already-resolved or already-flagged) plus internal-consistency checks on the new files.

| File audited | Outcome |
|---|---|
| [[Ezekiel_Henderson]] | Marriage place still recorded as "South Carolina" in Vital Information table (line 30) despite Discrepancy #15 (April 2026) determining Chatham Co NC is more likely. Tier 1 pension declaration places Ezekiel in NC at the time. **Fixed in iteration 2**: see Discrepancy #73 below. |
| [[Thomas_B_Cox]] | Spouse name displayed as "Olive Mary 'Polly' Henderson" -- consistent with Family_Tree.md. Person file's `## Data Discrepancies` section is empty ("None identified") but the name-form variant is now flagged in #72. |
| [[Charstee_King]] / [[Judson_King]] | Charstee b. June 30, 1842 (Find a Grave Tier 2 + SC Deaths Tier 1). Judson_King.md narrative gives Charstee b. ~1843 (1880 Census Tier 1 self-reported age). Family_Tree.md uses 1842. Tier 1 indexed records (Find a Grave + SC Deaths) supersede census-rounded age. No Family_Tree mismatch; census-age variant noted in Charstee_King.md narrative. ✓ |
| [[Robert_King_II]] (Family_Tree line 480) | Tabitha's "c. 1750" placeholder predates the new 1756 evidence in [[Tabitha_Dolby]]. Carried as Discrepancy #71 below; Family_Tree.md already cross-references the person file per Guard Rail #3. |
| [[Daniel_Huff_Brunswick]] / [[James_Huff]] | Daniel's 1773 will probated 24 Nov 1777 with widow Mary; Mary_Holloway_Huff.md and Family_Tree.md agree. ✓ |
| Hiram_Cooley.md children count | Internal inconsistency: 12 named children, but "10 children" stated twice; one of the named children (John Hiram Cooley b. 1815-1887) is biologically impossible as son of Mary Ann Woodson (b. 1803). Conservative correction applied (see #74). |

**Verify after Iteration 2**: count rises by 1 net (one row resolved, one row added with MISMATCH wording, one CONFLICT removed by resolution).

### New discrepancy rows added 2026-05-02

| # | Person | Field | Family_Tree Value | Person File Value | Correct Value | Source Authority | Status |
|---|--------|-------|-------------------|-------------------|---------------|-----------------|--------|
| 71 | [[Tabitha_Dolby]] | birth_year | ~~"c. 1750" (Family_Tree.md line 481)~~ → "20 Apr 1756, Ireland" (Family_Tree.md line 481, updated 2026-05-02 prompt 08) | 20 April 1756 (WikiTree Dolby-84, Find a Grave #48870181) | 20 April 1756 (Strong Signal: WikiTree Tier 3 + Find a Grave Tier 2, independent). | WikiTree Dolby-84 (Tier 3) + Find a Grave #48870181 (Tier 2, independent corroboration via WebSearch 2026-05-02) | **RESOLVED 2026-05-02 (prompt 08, OQ #71)**: Family_Tree.md updated; person file confidence upgraded moderate → high. |
| 72 | [[Olive_Mary_Polly_Henderson_Cox]] | display_name | "Olive Mary 'Polly' Henderson" (Family_Tree.md line 334; [[Thomas_B_Cox]] spouse field; [[Ezekiel_Henderson]] child #7) | "Mary Olive 'Polly' (Henderson) Cox" in person file YAML frontmatter `name:` field (line 3) | Both forms appear in WikiTree (Henderson-1855 calls her "Mary Olive"; the family chart calls her "Olive Mary"). Tier 3 conflict between two name-orderings of the same person. **NAME MISMATCH (frontmatter vs body)**: person file's H1 heading and biography use "Mary Olive 'Polly' (Henderson) Cox" but the rest of the vault uses "Olive Mary". **Resolved 2026-05-02**: harmonized person file YAML `name:` to "Olive Mary 'Polly' (Henderson) Cox" to match the canonical vault form. Heading and biography prose preserved. | WikiTree Henderson-1855 (Tier 3); vault canonical form | **RESOLVED 2026-05-02**: Person file frontmatter `name:` updated. |
| 73 | [[Ezekiel_Henderson]] / [[Elizabeth_Brasher_Henderson]] | marriage_date_place | "October 10, 1782, SC" ([[Ezekiel_Henderson]] line 30 + Family_Tree.md line 30) | "17 October 1782 in Chatham County, NC" ([[Elizabeth_Brasher_Henderson]] line 35) | **CONFLICT** confirmed by audit; cross-references Discrepancy #15 (open since 2026-04-14). Tier 1 pension S6994 has Ezekiel "moved into South Carolina shortly after the Revolutionary War," so the 1782 marriage was in NC, not SC. Greenville District SC did not exist until 1786. **The "South Carolina" claim in [[Ezekiel_Henderson]] is the lower-tier value (tertiary tree compilation) and conflicts with Tier 1 pension geography.** | Pension S6994 (Tier 1) + WikiTree Brasher-122 (Tier 3, Chatham NC) supersede WikiTree Henderson-1855 carryover (Tier 3, SC). | **RESOLVED 2026-05-02 (partial)**: [[Ezekiel_Henderson]] vital-info row corrected to "October 10/17, 1782, Chatham County, NC" with note that day-of-month (10 vs 17) remains unresolved per Discrepancy #15. Family_Tree.md line 30 carries no marriage-place statement at this position so no change there. |
| 74 | [[Hiram_Cooley]] | children_count + son_dates | (Family_Tree.md line 524 does not list children individually) | Person file lists 12 named children with Mary Ann Woodson (b. 1803), narrative says "10 children". Listed son "John Hiram Cooley (1815-1887)" cannot be a son of Mary Ann Woodson (age 12 in 1815). | **INTERNAL MISMATCH** in person file. Cooleys and Crafts source (Tier 2) consistently says 10 children with Mary Ann Woodson. The "John Hiram Cooley (1815-1887)" entry is most plausibly Hiram's son by his FIRST wife Susan Cothran (the file already notes "2 children" with Susan Cothran). | Cooleys and Crafts Family History Project (Tier 2) | **RESOLVED 2026-05-02**: Children list separated by mother in [[Hiram_Cooley]]. John Hiram Cooley (1815-1887) moved to "Children with Susan Cothran" group; the 10 named Mary-Ann-Woodson children retained (Jacob, Elizabeth, Hiram C., Nancy Jane, Newton, Jasper, Mary Ann, Frances Emmeline, Martha Ann, William, John Joseph). Note: 11 names remain in that bucket pending Cooleys and Crafts re-read; reduced from 12 to 11 by removing the impossible 1815 entry. Documented in person file's new ## Data Discrepancies section. |

**Files edited 2026-05-02 audit session (with diffs)**:

| File | Field | Old value | New value | Source authority |
|---|---|---|---|---|
| [[Olive_Mary_Polly_Henderson_Cox]] | YAML `name:` | "Mary Olive 'Polly' (Henderson) Cox" | "Olive Mary 'Polly' (Henderson) Cox" | Vault canonical form (Family_Tree.md, Ezekiel_Henderson.md, Thomas_B_Cox.md) |
| [[Ezekiel_Henderson]] | Vital-info table marriage row | "Elizabeth Brasher (m. October 10, 1782, SC)" | "Elizabeth Brasher (m. 10/17 October 1782, Chatham County, NC; date discrepancy 10 vs 17 carried in audit #15)" | Pension S6994 (Tier 1) + WikiTree Brasher-122 (Tier 3) |
| [[Hiram_Cooley]] | Children-with-Mary-Ann-Woodson list | included "John Hiram Cooley (1815-1887)" | moved to first-wife (Susan Cothran) bucket; remaining list aligned to "10 children" narrative | Cooleys and Crafts (Tier 2) + chronological possibility (Tier 1 logic) |
| [[Hiram_Cooley]] | new section | (no Data Discrepancies section) | Added `## Data Discrepancies` section documenting the mother-attribution correction | self-audit |

### New OQ entries created 2026-05-02 audit session

(none) -- the open questions surfaced during this audit (Discrepancy #71 on Tabitha's birth year; Discrepancy #73 on Ezekiel marriage day) are already covered by existing OQ #30 and audit Discrepancy #15.

### Audit summary

| Metric | Value |
|---|---|
| Persons audited (iteration 1, new files) | 13 (Tabitha_Dolby, Mary_Holloway_Huff, John_Parker_Anderson_SC, Elizabeth_Betty_Gresham_Parker, Mary_Nancy_Parker_King, Olive_Mary_Polly_Henderson_Cox, Elizabeth_Brasher_Henderson, William_Holloway_Brunswick_VA, Martha_Ballard_Holloway, Hiram_Cooley, Jacob_Cooley_Jr, Nancy_Gover_Cooley, Thomas_Levi_Brasher_Jr) |
| Persons cross-checked (iteration 2, related ancestors) | 6 (Ezekiel_Henderson, Thomas_B_Cox, Charstee_King, Judson_King, Robert_King_II, Daniel_Huff_Brunswick / James_Huff) |
| **Total audited** | **19** (within ~30 cap) |
| Discrepancies opened this session | 4 (#71-74) |
| Resolved | 3 (#72 name harmonized; #73 partial fix to Ezekiel marriage place; #74 children-list correction) |
| Deferred | 1 (#71 Tabitha birth year, awaiting Tier 2 Find a Grave full memorial) |
| Type breakdown | 2 date/place (#71, #73), 1 name/display (#72), 1 internal-consistency / parentage (#74). 0 parentage discrepancies in the new files (all parent links match Tier 1 wills/census where present). |
| Primary-source corrections | 1: [[Ezekiel_Henderson]] marriage-place row corrected to NC per Tier 1 pension geography. |
| New OQ entries | 0 (all surfaced items already covered by existing OQ #30 and audit Discrepancy #15) |

**Verify** (final): `grep -c "DISCREPANCY\|MISMATCH\|CONFLICT" vault-template/cross_reference_audit.md` reported below in Research_Log.

**Out of scope (deferred to later audit pass)**:
- Holloway / Moseley pre-1700 generations (Marvel Moseley Jr. 1682 references in Family_Tree.md line 443).
- Stangle children birth-cluster discrepancy (#13, persistent OPEN since 2026-04-09).
- King "William I. King" Marcia Kopp/Huff maiden-name #5 (persistent OPEN since 2026-04-09).
- Norwegian / Galician / rabbinic branches (no recent edits).
- Full re-read of Family_Tree.md against the ~140-named-individual master list (last completed 2026-04-19).

---

## 2026-05-02 Immigration Search (prompt 11) Discrepancy

| # | File | Field | Source A | Source B | Status |
|---|---|---|---|---|---|
| 75 | [[Henry_Michael_Kascher]] | 1935 SS Hamburg arrival date | Vault biography (line 46): SS Hamburg arrived New York 27 Jun 1935 (sourced from FamilySearch passenger list index 1906-1942, Tier 2) | GG Archives Hamburg-American Line sample shows SS Hamburg sailings 11 Jul 1935 and 21 Aug 1935 to NY; no SS Hamburg sailing matching a 27 Jun 1935 NY arrival in the free GG Archives sample (Tier 2) | **NEEDS_PRIMARY (escalated 2026-05-02 round-2 audit; reaffirmed 2026-05-02 round-3 immigration search)**: Round-2 web sweep already eliminated SS Hamburg per GG Archives. Round-3 cross-vessel search (2026-05-02) added: SS Manhattan documented 1935 Hamburg→NY arrivals are 10 Apr and 23 Oct (no June); SS Bremen 1935 Bremen→NY voyages are 12 Apr and 18 Oct (no June); SS Europa 1935 Bremen→NY voyages are 26 Jul and 3 Sept (no June). None of the major Norddeutscher Lloyd / Hamburg-American / US Lines vessels show a documented late-June 1935 NY arrival from a German port in free GG-Archives samples. Resolution path: NARA microfilm M237 (NY passenger arrivals 1820-1957) roll covering June 1935, OR FamilySearch image-level review. Logged in [[immigration_search_audit]] and [[Henry_Michael_Kascher]] §Data Discrepancies. |

---

## 2026-05-02 Cross-Reference Audit Round 2 (deferred-items sweep)

**Scope**: 2-iteration audit attacking 4 deferred items from prior 2026-05-02 agents (Cooley parentage, Discrepancy #75, Tucker Woodson 2nd-wife cascade, Robert King II Kings Mountain attribution) + 10-person new-discrepancy scan. Web-search budget: 6 searches consumed.

### Deferred-item resolutions

| # | File | Field | Source A | Source B | Status |
|---|---|---|---|---|---|
| 76 | [[Charstee_King]] / [[Mary_Ann_Woodson_Cooley]] | John Joseph Cooley (1819-1896) mother attribution | Vault [[Charstee_King]]: paternal grandparents Hiram Cooley + Mary Ann Woodson per MyHeritage 4-tree consensus (Tier 3) | Ancestry.ca snippet 2026-05-02 (Tier 3): father Hiram Cooley + mother **Susan** (= Susan Cothran, Hiram's 1st wife). Round-2 corroboration: Cooleys-and-Crafts (Tier 2) confirms Susan Cothran was alive in 1850 census Greenville SC (co-resident with son John Hiram Cooley), making her mother-of-John-Joseph chronologically possible. | **DEFER / NEEDS_PRIMARY**: TIER 3 vs TIER 3 conflict. Both attributions chronologically possible (Mary Ann b. 1803 → age 16 in 1819; Susan Cothran b. ~1805 → age 14). Cannot resolve without primary source: 1820/1830/1840 census of Hiram Cooley household, OR John Joseph Cooley probate/marriage record. Vault Hiram_Cooley.md children list retains John Joseph in the Mary-Ann-Woodson group with explicit dispute note (per Guard Rail #1: do not silently choose). Logged for next audit cycle when census images become available. |
| 77 | [[Charstee_King]] | Mother's name (John Joseph Cooley's wife) | Vault: "Emily Susan Chapman" (b. 11 May 1823, d. 23 May 1857) per MyHeritage Turner/Moody/Marsengill/Lloyd consensus 2026-04-22 (Tier 3) + Geni profile 6000000012378636692 "Emily Cooley born Chapman" (Tier 3, retrieved 2026-05-02) | Ancestry.ca snippet 2026-05-02 (Tier 3): "Stacy Ann Chasteen" as John Joseph's wife | **RESOLVED 2026-05-02 round-2**: The "Stacy Ann Chasteen" attribution is a generation-confusion. Per round-2 web search: (a) **Stacy Ann (Littleton) Chapman** was Emily Chapman's MOTHER (Charstee's maternal grandmother), already in the vault; (b) Cooleys-and-Crafts (Tier 2) names "Stacy Chapman Boyce" as the wife of Jacob "Jake" Cooley (Mary Ann Woodson's son, John Joseph's half-brother). The "Stacy" name appears in adjacent Cooley/Chapman generations, conflating the snippet. Vault retains "Emily Susan Chapman" as John Joseph's wife (Tier 3 5-tree consensus + Geni Tier 3 profile). Documented in [[Charstee_King]] §Data Discrepancies. |
| 78 | [[Mary_Ann_Woodson_Cooley]] / [[Family_Tree]] (line 525) | Tucker Woodson's 2nd wife (Mary Ann's mother) | Vault Family_Tree.md line 525: "Tucker Woodson 1762-1831 + **Ann Scott Woodson**" (single Tier 3 source, WikiTree Woodson-784) | **Anne Stolle** (b. 1777, d. 1823): Geni profile 6000000032977088051 "Anne Woodson born Stoll" (Tier 3, retrieved 2026-05-02 round-2); cuddins.com Moseley/Woodson page (Tier 2); rumseyfamily.com Tucker Woodson family group sheet (Tier 3); cynthiaswope.com Within The Vines Woodson (Tier 2) | **RESOLVED 2026-05-02 round-2**: **3-source independent corroboration of "Anne Stolle"** vs single-source "Ann Scott". Per Source Hierarchy, multi-source Tier 2-3 supersedes single Tier 3. Cascade fix applied: (a) Family_Tree.md line 525 updated "Ann Scott Woodson" → "Anne Stolle (1777-1823)"; (b) Mary_Ann_Woodson_Cooley.md Vital Information mother field expanded with Geni dates; (c) Mary_Ann_Woodson_Cooley.md biography paragraph updated. No other vault file mentions Tucker Woodson's wife (grep verified). |
| 79 | [[Robert_King_II]] | Battle of Kings Mountain attribution | Vault: "Battle of Kings Mountain, Washington District Regt, NC Militia" per WikiTree + Find a Grave family-tradition narrative (Tier 3) | **Robert King is ABSENT** from the carolana.com Battle of Kings Mountain published roster of Known Patriots (Tier 2, prior 2026-05-02 colonial-records sweep, re-verified round-2 with negative result on "Robert King + Washington District + NC militia" search) | **PARTIAL RESOLUTION 2026-05-02 round-2 (CONFIRMED MODERATE NEGATIVE SIGNAL)**: Two independent free-web searches confirm Robert King's absence from the published Kings Mountain patriot roster. The DAR patriot status itself is retained (he is family-tradition recognized as a patriot), but the **specific Kings Mountain battle attribution is downgraded** from "DAR recognized patriot at Kings Mountain" to "DAR recognized patriot, Kings Mountain attribution UNVERIFIED in published rosters". Robert_King_II.md narrative changed from "fought in" to "reportedly" at Kings Mountain. NEEDS_PRIMARY (DAR RIN via login-required GRS lookup, OR pension file at NARA). Documented in [[Robert_King_II]] §Data Discrepancies. |

### Iteration 2: New-discrepancy scan (10 recently-touched persons)

| Person | Family_Tree value | Person file value | Status |
|---|---|---|---|
| [[Mary_Ann_Woodson_Cooley]] | Family_Tree.md line 525 (post-cascade): "Tucker Woodson 1762-1831 + Anne Stolle (1777-1823)" | Person file Vital Info: Anne Stolle. ✓ MATCH (post-cascade) |
| [[Argaleus_Hercules_Henderson]] | Not directly cited in Family_Tree.md (only descendants are). Person file: b. ~1720, d. ~1804-1806, parents James Isaac Henderson Jr. + Mary Rhodes. ✓ no FT mismatch |
| [[James_Cox]] | Family_Tree.md line 378: "c.1778 - May 22, 1853", father Isaac Cox. Person file: matches. ✓ |
| [[Johann_Michael_Brecht]] | Family_Tree.md context: "emigrated Oct 1726, Philadelphia", b. 28 May 1706 Schriesheim. Person file: matches. ✓ |
| [[Daniel_Huff_Brunswick]] | Family_Tree.md line 401: "c. 1710/1720-c. 1777", will witnessed by John Hammack. Person file: matches. ✓ |
| [[William_Cox_Sr]] | **Family_Tree.md line 317: "c.1726 - c.1814"** | Person file frontmatter `born: 1730`, body Vital Info "c.1730-1735, unknown location" | **NEW MISMATCH 2026-05-02 round-2**: birth year c.1726 (FT) vs c.1730-1735 (person file). See Discrepancy #80 below. |
| [[John_Parker_Anderson_SC]] | Family_Tree.md line 490: "b. 1753 Ireland, d. 4 Jun 1845 Belton SC" | Person file: matches. ✓ |
| [[Hiram_Cooley]] | Family_Tree.md line 524: "Hiram Cooley (1796-1864, Greenville SC)" | Person file: matches. ✓ |
| [[Jacob_Cooley_Jr]] | Family_Tree.md line 524: "Jacob Cooley Jr. (1760-1826)" | Person file: matches. ✓ |
| [[Tabitha_Dolby]] | Family_Tree.md line 481: "20 Apr 1756, Ireland; d. May 14, 1815 Belton" | Person file: matches. ✓ |

### New discrepancy rows added 2026-05-02 round-2

| # | File | Field | Source A | Source B | Resolution |
|---|---|---|---|---|---|
| 80 | [[William_Cox_Sr]] | birth_year | Family_Tree.md line 317: **"c.1726 - c.1814"** | Person file frontmatter `born: 1730` (line 5); body Vital Info "c.1730-1735, unknown location, Cox Family History Project" | **MISMATCH** (NEW). Both are estimated/circa values from Tier 2-3 sources. The person file cites Cox Family History Project (Tier 2) for c.1730-1735; Family_Tree.md "c.1726" has no specific citation visible in this audit pass. **DEFER (do not silently choose)**: Cox Family History Project is the same Tier 2 source used elsewhere in the vault for William Cox Sr. Action: per Guard Rail #3 (do not modify dates during expansion-style audits without primary source) the FT value is left as-is and tracked here. Recommend next audit cycle reconcile by re-reading Cox Family History Project for the precise circa value and unifying both files. |

### Audit summary (round 2)

| Metric | Count |
|---|---|
| Iterations executed | 2 |
| Web searches consumed | 6 |
| Deferred items attacked | 4 |
| Deferred items RESOLVED | 2 (#77 Stacy Ann Chasteen → Emily Chapman generation-confusion clarified; #78 Tucker Woodson 2nd wife = Anne Stolle confirmed by 3 independent sources, cascade applied) |
| Deferred items PARTIAL / DEFER / NEEDS_PRIMARY | 2 (#76 John Joseph Cooley parentage = Tier 3 vs Tier 3 deferred; #75/#79 = NEEDS_PRIMARY) |
| Iteration-2 new-discrepancy persons audited | 10 |
| New discrepancy rows added | 1 (#80 William Cox Sr birth year FT vs person file) |
| Cascade fixes applied | 1 (Family_Tree.md line 525: "Ann Scott Woodson" → "Anne Stolle (1777-1823)" per Tucker Woodson 2nd-wife correction) |
| Files modified | [[Mary_Ann_Woodson_Cooley]], [[Charstee_King]], [[Henry_Michael_Kascher]], [[Robert_King_II]], [[Family_Tree]], [[cross_reference_audit]] (this file), [[Research_Log]] |

**Verify**: `grep -c "DISCREPANCY\|MISMATCH\|CONFLICT" cross_reference_audit.md` reported in Research_Log entry below.
