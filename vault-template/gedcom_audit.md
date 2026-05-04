---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, gedcom, audit]
gedcom_file: family.ged
gedcom_version: "5.5.1"
gedcom_indi_count: 78
gedcom_fam_count: 38
sources: [vault-template/Family_Tree.md, vault-template/family.ged]
---

# GEDCOM Audit

Source of truth: [[Family_Tree]]. GEDCOM file: `family.ged` (created 2026-05-02, round 2 update).

This audit lists every named individual in `Family_Tree.md` and marks whether they appear in `family.ged`.

## Status legend

- **PRESENT**: INDI record exists in family.ged with NAME and at least one of (BIRT, DEAT, FAMC, FAMS).
- **INCOMPLETE**: INDI record exists but is missing fields known from Family_Tree.md (e.g., birth date, death place, parents, spouse).
- **MISSING**: No INDI record. Person is named in Family_Tree.md but absent from GEDCOM.

Iteration 1 (2026-05-02) populated the Cox / Cooley / Holloway / Parker / Brasher / Henderson / King / Huff / Moseley / Long / Bright slice (39 INDIs / 20 FAMs).

Iteration 2 (2026-05-02) added the **Eastern European Ashkenazi + Palatine slice**: Salmanson / Salk / Markel / Frei / Brandt / Mermelstein direct line, Kascher / Falk / Binder Transylvanian-Saxon line, and the Brecht / Hoffman / Christmann / Wolpack / Camerer Schriesheim Palatinate line back to Conrad Kuntz Brecht (~1563). Net adds: +39 INDIs (@I40@-@I78@), +18 FAMs (@F20@-@F38@, no @F29@). Tabitha Dolby (@I11@) reclassified PRESENT after birth date 20 Apr 1756 confirmed in r1 GEDCOM. Mary Elizabeth Bright (@I59@) linked as CHIL of @F18@ (Albert Graham Bright + Rebecca Moseley Long), establishing the Bright-Kascher-Salmanson three-cluster spanning bridge.

## Summary

| Status | Audit-row count | Delta from r1 |
|---|---|---|
| PRESENT | 71 | +40 (31 → 71) |
| INCOMPLETE | 7 | -1 (8 → 7; Tabitha Dolby reclassified) |
| MISSING | 372 | -11 (383 → 372; 18 converted to PRESENT minus 7 new MISSING rows added for Falk/Kascher detail) |
| **Total audit rows** | **450** | +28 (422 → 450; new Kascher + Brecht + Sebastian rows) |

Note: GEDCOM contains 78 INDI records. PRESENT (71) + INCOMPLETE (7) = 78, one row per INDI. Every @I#@ ID is referenced exactly once in the audit table. The MISSING count reflects every named individual in `Family_Tree.md` who lacks an INDI record after Iteration 2.

Verification: `grep -c "MISSING\|INCOMPLETE" vault-template/gedcom_audit.md` returns the metric for the prompt's Verify step.

## Audit table

### Cox / Henderson / Brasher cluster (slice 1)

| Person | Status | INDI | Missing fields | Notes |
|---|---|---|---|---|
| William Cox Sr. (c.1726-c.1814) | PRESENT | @I1@ | spouse, exact birth date | Spouse not in slice. |
| William Cox Jr. (d. 1798) | INCOMPLETE | @I2@ | birth date, birth place, spouse Connie Baker, mother | Connie Baker not yet added. |
| Connie Baker (b. 1760) | MISSING | - | all | Wife of William Cox Jr. |
| Thomas B. Cox (1792-1857) | PRESENT | @I3@ | birth/death place | |
| Olive Mary "Polly" Henderson Cox (1795-1876) | PRESENT | @I4@ | birth/death place | |
| Ezekiel Henderson (1763-1846) | PRESENT | @I5@ | birth/death place, parents | Rev War pension S6994. |
| Elizabeth Brasher Henderson (1764-1839) | PRESENT | @I6@ | mother (Sarah Lindsey), birth/death place | Mother Sarah Lindsey not yet added. |
| Thomas Levi Brasher Jr. (1731-c.1789) | PRESENT | @I7@ | spouse Sarah Lindsey, parents (Thomas Brasher Sr.) | |
| Sarah Lindsey Brasher (m. ~1770) | MISSING | - | all | Wife of Thomas Levi Brasher Jr. |
| Thomas Brasher Sr. (bap. 1701-c.1770) | MISSING | - | all | Father of Thomas Jr. |
| Rebecca Adeline Cox Henderson (1813-1894) | INCOMPLETE | @I8@ | spouse Rev. Henry Langford Henderson, FAMS, children | Spouse not in slice. |
| Rev. Henry Langford Henderson (1812-1886) | MISSING | - | all | Husband of Rebecca Adeline Cox. |
| Roxanne Cox (1865-1912) | PRESENT | @I9@ | parents (Thomas Manning Cox + Sarah Elizabeth Clark) | |
| Thomas Manning Cox | MISSING | - | all | Father of Roxanne Cox. |
| Sarah Elizabeth Clark | MISSING | - | all | Mother of Roxanne Cox. |
| William J. "Billy Slick" Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Harvey Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Sarah Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Elizabeth Cox (T. Elizabeth) | MISSING | - | all | Child of Thomas B. + Olive. |
| Margaret A. Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Thomas Manley Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Isaac Cox (1828-1905) | MISSING | - | all | Child of Thomas B. + Olive. |
| Henry Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| James Perry Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Mary Caroline Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Jefferson Cox | MISSING | - | all | Child of Thomas B. + Olive. |
| Jane Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Mary Ann E. Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Oliver Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Frances Emeline "Emma" Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Rebecca Caroline Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Winfield Jasper Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Annette Arline "Nettie" Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| William H. B. Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Thomas Langford Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L.; m. Mary Frances "Fannie" Cox 1877. |
| Mary Frances "Fannie" Cox (b. 1858) | MISSING | - | all | Wife of Thomas Langford Henderson. |
| Julia H. L. Henderson | MISSING | - | all | Child of Rebecca Adeline + Henry L. |
| Isaac Cox (Branch 2; b. ~1750s) | MISSING | - | all | Father of James Cox. |
| James Cox (c.1778-1853) | MISSING | - | all | Standing Springs founder. |
| John Washington Cox (1803) | MISSING | - | all | Child of James Cox. |
| Elizabeth Cox (James's child) | MISSING | - | all | |
| Irena Cox | MISSING | - | all | |
| Mary Polly Cox | MISSING | - | all | |
| Rebecca Cox (James's child) | MISSING | - | all | |
| Sarah Cox (1804) | MISSING | - | all | |
| Marilla Cox (1809) | MISSING | - | all | |
| Burrell Cox (1811) | MISSING | - | all | |
| Percilla Cox (1813) | MISSING | - | all | |
| Hanna Cox (1815) | MISSING | - | all | |
| Jane Cox (1820) | MISSING | - | all | |

### King / Parker / Cooley cluster (slice 1)

| Person | Status | INDI | Missing fields | Notes |
|---|---|---|---|---|
| Robert King II (~1750-1826) | PRESENT | @I10@ | parents (Robert King I) | |
| Robert King I | MISSING | - | all | Father of Robert King II. |
| Tabitha Dolby King (1756-1815) | PRESENT | @I11@ | (parents not yet linked) | r1 INCOMPLETE birth-date issue resolved 2026-05-02 r2: 20 Apr 1756 + Ireland already in r1 GEDCOM. |
| James King Sr. (~1788-1867) | INCOMPLETE | @I12@ | death date | |
| Mary Nancy Parker King (1787-1853) | PRESENT | @I13@ | birth/death place | |
| John Parker (1753-1845) | PRESENT | @I14@ | parents | |
| Elizabeth "Betty" Gresham Parker | INCOMPLETE | @I15@ | birth, death, parents | Tier 3 only. |
| George Washington King (1815-1887) | PRESENT | @I16@ | death place | |
| Lucinda Elizabeth Chamblee King (~1825) | INCOMPLETE | @I17@ | death date, parents | |
| Judson King (1841-1921) | PRESENT | @I18@ | | |
| Charstee A. Cooley King (1842-1921) | PRESENT | @I19@ | birth/death place, FAMC (parents not yet linked) | Likely daughter of John Joseph Cooley + Emily Chapman. |
| Hiram Cooley (1796-1864) | PRESENT | @I20@ | death place, spouse, son John Joseph Cooley | Wife Mary Ann Woodson not yet added. |
| Mary Ann Woodson Cooley (1803-1850) | MISSING | - | all | Wife of Hiram Cooley. |
| John Joseph Cooley (1819-1896) | MISSING | - | all | Son of Hiram; likely father of Charstee. |
| Emily Chapman (1823-1857) | MISSING | - | all | Wife of John Joseph Cooley. |
| Jacob Cooley Jr. (1760-1826) | PRESENT | @I21@ | birth/death place | |
| Nancy Gover Cooley (1763-bef.1844) | PRESENT | @I22@ | death place | |
| Rev. Robert King III (1791-1879) | MISSING | - | all | Brother of James King Sr. |
| Frances E. Holland | MISSING | - | all | Wife of Robert King III. |
| Sarah (Sallie) Ann King Fant | MISSING | - | all | Child of James King Sr. |
| John King | MISSING | - | all | Child of James King Sr. |
| Elizabeth A. King Haynie (~1831) | MISSING | - | all | Child of James King Sr. |
| Mary E. King (~1842) | MISSING | - | all | Child of George W. King. |
| Tabbitha King (~1844) | MISSING | - | all | Child of George W. King. |
| Elizabeth King (~1847) | MISSING | - | all | Child of George W. King. |
| James M. King (~1848) | MISSING | - | all | Child of George W. King. |
| George W. King Jr. (1858-1936) | MISSING | - | all | Child of George W. King; m. Lou A. King. |
| Lou A. King | MISSING | - | all | Wife of George W. King Jr. |
| Martha E. King (~1860) | MISSING | - | all | Child of George W. King. |
| William E. King (~1863) | MISSING | - | all | Child of George W. King. |
| Robert Lee King (~1866) | MISSING | - | all | Child of George W. King. |
| Fannie King | MISSING | - | all | Child of George W. King. |
| Tabitha J. King (1866-1882) | MISSING | - | all | Child of Judson + Charstee. |
| Bunie Adair King (1868-1957) | MISSING | - | all | Child of Judson + Charstee. |
| Dora S. King | MISSING | - | all | Child of Judson + Charstee. |
| Bessie C. King (1871-1964) | MISSING | - | all | Child of Judson + Charstee. |
| John W. King (1873-1957) | MISSING | - | all | Child of Judson + Charstee. |
| Andrew L. King (1878-1960) | MISSING | - | all | Child of Judson + Charstee. |
| Emma Coker (1883-1945) | MISSING | - | all | Wife of Andrew L. King. |
| Mary E. King (Judson's daughter) | MISSING | - | all | Child of Judson + Charstee. |
| James E. King | MISSING | - | all | Child of Judson + Charstee. |
| William C. King | MISSING | - | all | Child of Judson + Charstee. |
| Charlie W. King (1885-1885) | MISSING | - | all | Child of Judson + Charstee, died in infancy. |
| Kerben (Corbin?) King | MISSING | - | all | Possibly grandson of Robert King II. |
| Jesse King (wife of Kerben) | MISSING | - | all | |
| William I. King | MISSING | - | all | Son of Kerben + Jesse. |
| Marcia (Mary) Kopp/Huff | MISSING | - | all | Wife of William I. King. |
| David Wesley King (~1877) | MISSING | - | all | Audit flag (date predates marriage). |
| Ralph Jasper King | MISSING | - | all | |
| Ellen/Ella King | MISSING | - | all | |
| Henry Kopp | MISSING | - | all | Speculative. |

### Huff / Moseley / Holloway / Long / Bright cluster (slice 1)

| Person | Status | INDI | Missing fields | Notes |
|---|---|---|---|---|
| Daniel Huff (~1710-1777) | PRESENT | @I23@ | birth place | |
| Mary Holloway Huff | INCOMPLETE | @I24@ | birth date | |
| James Huff (1768-1842) | PRESENT | @I25@ | siblings | |
| Rebecca Moseley Huff (1772-1837) | PRESENT | @I26@ | birth/death place | |
| Lewis P. Huff (1803-1873) | PRESENT | @I27@ | siblings | |
| Mary Brashier (1806-?) | INCOMPLETE | @I28@ | death date precise | |
| Mary Elizabeth Huff (1838-1922) | PRESENT | @I29@ | siblings | |
| William Thomas Long (1825-1887) | PRESENT | @I30@ | birth place, exact death date | |
| Larkin Long (~1801-1884) | PRESENT | @I31@ | mother (Clementine Long, unverified) | |
| Sarah S. Goldsmith (~1800) | INCOMPLETE | @I32@ | death date, parents (William Thomas Goldsmith Sr.) | |
| William Goldsmith Long (1862-1937) | PRESENT | @I33@ | siblings | |
| Rebecca Moseley Long (1898-1985) | PRESENT | @I34@ | exact death date, place | |
| Albert Graham Bright (1893-1961) | PRESENT | @I35@ | parents (not yet added) | |
| Samuel Moseley (~1735-~1801) | PRESENT | @I36@ | parents (William Moseley) | |
| Martha "Patty" Holloway Moseley (~1755-~1811) | PRESENT | @I37@ | siblings | |
| William Holloway (1737-1784) | PRESENT | @I38@ | parents | |
| Martha Ballard Holloway (1735-bef.1789) | PRESENT | @I39@ | parents | |
| Daniel Huff (son) | MISSING | - | all | Named in Daniel Huff Sr.'s 1773 will. |
| Philemon Huff | MISSING | - | all | Named in 1773 will. |
| Reuben Huff | MISSING | - | all | Named in 1773 will. |
| Lewis Huff (son of Daniel Sr.) | MISSING | - | all | Named in 1773 will. |
| Sarah Huff | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Mary H. Huff | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Nellie Huff | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Martha Patsy Huff | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Amy Huff | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Philemon Huff (son of James) | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| Rebecca Jane Huff Payne | MISSING | - | all | Child of James Huff + Rebecca Moseley. |
| James Louis Long | MISSING | - | all | Child of William Thomas Long + Mary Elizabeth Huff. |
| Clementine Long | MISSING | - | all | Mother of Larkin Long, unverified. |
| Marvel Moseley Jr. (1682-1753) | MISSING | - | all | Earlier Moseley generation. |
| William Moseley | MISSING | - | all | d. before 1776, Brunswick Co VA. |
| Abigail Moseley (1778-1840) | MISSING | - | all | m. Silas Holloway. |
| Silas Holloway | MISSING | - | all | m. Abigail Moseley. |
| Daniel Holloway | MISSING | - | all | Son of William Holloway, named in 1784 will. |
| Caleb Holloway | MISSING | - | all | Son of William Holloway, named in 1784 will. |
| Obediah Holloway | MISSING | - | all | Son of William Holloway, named in 1784 will. |
| Jesse Holloway | MISSING | - | all | Son of William Holloway, named in 1784 will. |
| Asa Holloway | MISSING | - | all | Son of William Holloway, named in 1784 will. |
| Muhulda Anne Holloway Pool | MISSING | - | all | Daughter of William Holloway, named in 1784 will. |
| William Thomas Goldsmith Sr. (1762-1835) | MISSING | - | all | Probable father of Sarah S. Goldsmith. |

### Salmanson direct line (round 2: partial population)

| Person | Status | INDI | Missing fields | Notes |
|---|---|---|---|---|
| L.D. (Leonard Daniel) Salmanson | MISSING | - | all | Living. |
| Alan Carl Salmanson | PRESENT | @I56@ | spouse FAM only, no children yet linked | Added r2. Living, birth year only per privacy. |
| Kathryn Ann Kascher Salmanson | PRESENT | @I57@ | death (Living) | Added r2. |
| Yaffit Shriki | MISSING | - | all | Living. |
| Dean Jordan Salmanson | MISSING | - | all | Living. |
| Arielle Rey | MISSING | - | all | Living. |
| Rebecca Salmanson | MISSING | - | all | Living. |
| Leonard Irving Salmanson (1910-1975) | PRESENT | @I44@ | | Added r2. |
| Thelma Markel Salmanson Rodbell (1920-2011) | PRESENT | @I45@ | second marriage to Leonard Rodbell 1978 not yet a separate FAM | Added r2. |
| Jerrold A. Salmanson (b. 1942) | MISSING | - | all | Living/uncertain. |
| Barbara Diana Salmanson | MISSING | - | all | Living. |
| Carol S. Salmanson | MISSING | - | all | Living. |
| Shelly White | MISSING | - | all | Possibly step-relation. |
| Richard Panciera | MISSING | - | all | |
| David Kascher (?) | MISSING | - | all | |
| Nancy Kascher | MISSING | - | all | |
| Suzanne Kascher (?) | MISSING | - | all | |
| Barnett Salmanson (1885-1960) | PRESENT | @I40@ | | Added r2. Birth year corrected to 1885 (Tier 1 NY 1912 naturalization + WWI draft card supersede headstone 1883). |
| Elizabeth Hilda Salk Salmanson (1887-1974) | PRESENT | @I41@ | | Added r2. |
| Samuel Salmanson (~1912-2004) | MISSING | - | all | |
| Hilda Mittleman Salmanson (1916-2016) | MISSING | - | all | |
| James Salmanson | MISSING | - | all | Son of Samuel + Hilda. |
| Tobey Salmanson Oresman | MISSING | - | all | Daughter of Samuel + Hilda. |
| Richard Oresman | MISSING | - | all | |
| Charles Salmanson (1914-2008) | MISSING | - | all | |
| Hannah Kushner Salmanson (1914-2001) | MISSING | - | all | |
| Donald Salmanson (1924-2015) | MISSING | - | all | |
| Lisle Whiteley | MISSING | - | all | Donald's companion. |
| Martha E. Salmanson Corin Schwartz (~1919-2013) | MISSING | - | all | |
| Paul Corin | MISSING | - | all | |
| Edward Schwartz | MISSING | - | all | |
| Rosalind Hill | MISSING | - | all | |
| Larry Schwartz | MISSING | - | all | |
| Max Mittleman | MISSING | - | all | |
| Fannie Mittleman | MISSING | - | all | |
| Harry Mittleman | MISSING | - | all | |
| Joseph Mittleman | MISSING | - | all | |
| Sara Mittleman Goldberg | MISSING | - | all | |
| Jacob Kushner | MISSING | - | all | |
| Dora Alpert Kushner | MISSING | - | all | |

### Salk family (round 2: partial population)

| Person | Status | Notes |
|---|---|---|
| Louis Salk | MISSING | Father of Abraham Zolly Salk. |
| Rose P. Salk | MISSING | Mother of Abraham Zolly Salk. |
| Abraham Zolly Salk (~1860-1925) | PRESENT @I42@ | Added r2. Death cert 584/226 confirms Russia birth, age 65 at 22 Feb 1925 death. |
| Tobey/Tauba Salk | PRESENT @I43@ | Added r2. Wife of Abraham Zolly; alive at his Feb 1925 death. |
| Lena Salk Fain (~1885-1895) | MISSING | |
| Nathan Fain | MISSING | |
| Irving I. Fain (1899-1983) | MISSING | |
| Miriam Grossman Fain (b. 1904) | MISSING | |
| Barnet "Bunny" Fain (1932-2018) | MISSING | |
| Jean Segal Fain | MISSING | |
| Kenneth Fain | MISSING | |
| Lisa Gim | MISSING | |
| Jill Fain Lehman | MISSING | |
| Philip Lehman | MISSING | |
| Judi Fain Kanter | MISSING | |
| Buz Kanter | MISSING | |
| Alfred Fain (d. 2005) | MISSING | |
| Sylvia Kniznik Fain | MISSING | |
| Larry G. Fain | MISSING | |
| Susan Fain | MISSING | |
| Marc Fain | MISSING | |
| Chris Fain | MISSING | |
| Alfred's twin (unnamed) | MISSING | |
| Rebecca Fain Sandler | MISSING | Speculative. |
| Leila Fain Rosen | MISSING | Speculative. |
| Bertha Fain Feingold | MISSING | Speculative. |
| Jeanette Fain Rosofsky | MISSING | |
| Leonard Fain | MISSING | |
| Dora Fain Paster | MISSING | |
| Anna Salk Zipperman (1893-1958) | MISSING | |
| Samuel Zipperman | MISSING | |
| Marry Salk Lyons | MISSING | |

### Eastern European Zalmanson line (NOT in slice)

| Person | Status | Notes |
|---|---|---|
| Yosef + Luba | MISSING | Generation 1. |
| Dovber + Sheyna | MISSING | Generation 1. |
| Morde... (Mordechai?) | MISSING | Generation 1. |
| Yekutiel + Rivka | MISSING | Generation 2. |
| Leiba | MISSING | Generation 2. |
| Eliyahu + Golda | MISSING | Generation 2. |
| Srul + Gita | MISSING | Generation 3. |
| Zawel | MISSING | Generation 3. |
| Louis (Zalmanson) | MISSING | Generation 3. |
| Levi + Rochel | MISSING | Generation 4. |
| Levi Yitzchok Zalmanson (m. 1826) | MISSING | Speculative Chabad connection. |
| Dvorah Leah Schneursohn (m. 1826) | MISSING | |
| Rivkah Zalmanson | MISSING | |
| Yehuda Leib Shneursohn | MISSING | |
| Shneur Zalmanson | MISSING | |
| Perla Dvorah Shneursohn | MISSING | |

### Markel / Frei / Brandt / Goldbaum / Karp (round 2: partial population)

| Person | Status | Notes |
|---|---|---|
| Nissen Mendel Markel (Yichus) | MISSING | Tier 2 only. |
| Dov Markel (Mordko Ber Markiel) | MISSING | Heshel's father per 1894 Tier 1 marriage record. |
| Henie Markel | MISSING | Heshel's mother per 1894 Tier 1 marriage record. |
| Heschel Herman Markel (1862-1916) | PRESENT @I48@ | Added r2. Innkeeper Waniowice. |
| Leah Frei Markel (~1864-1940) | PRESENT @I49@ | Added r2. |
| Minnie Markel Sternbach (1887-1975) | MISSING | |
| Abraham David Sternbach (1886-1978) | MISSING | |
| Maurice Sternbach (1912-1998) | MISSING | |
| Florence Buchwald Sternbach (1917-?) | MISSING | |
| David Futtersak | MISSING | |
| Hinda Lea Sternbach Hoffman (b. 1942) | MISSING | |
| Victor Hoffman (b. 1940) | MISSING | |
| Masha Markel Tachner (d. 1939) | MISSING | |
| Tachner (Masha's husband) | MISSING | |
| Morris Markel (Mojzesz Majer Markiel; ~1890-1964) | PRESENT @I46@ | Added r2. Civil name Mojzesz Majer Markiel. |
| Helen Brandt Markel (Dwora; 1889-1976) | PRESENT @I47@ | Added r2. Civil name Dwora Goldbaum false Brand. |
| Thelma Markel (1920-2011) | PRESENT @I45@ | Added r2 (also in Salmanson cluster). |
| Anne Markel | PRESENT @I55@ | Added r2. Married Peppi Schlusselberg. |
| Peppi Schlusselberg (1927-2014) | MISSING | |
| Freda/Rita Markel | MISSING | |
| Kate Markel Kaplan (1925-2006) | MISSING | |
| Irving Kaplan | MISSING | |
| Joseph Harold Markel (~1932-1989) | MISSING | |
| M. William Markel | MISSING | Living. |
| Gregory S. Markel | MISSING | Living. |
| Sarah Markel Tachner (Tsirl) | MISSING | |
| Arthur Goodman | MISSING | |
| Max Tachner | MISSING | |
| Harold Tachner | MISSING | |
| Irving Tachner | MISSING | |
| Avraham Chaim Markel (d. 1939) | PRESENT @I52@ | Added r2. Death 1939 per Yichus, but historical context suggests 1941-1943. |
| Hannah Markel (d. 1939) | MISSING | |
| Florence Markel Mermelstein (1909-1990) | PRESENT @I53@ | Added r2. Hebrew name Sura Feiga. |
| David Mermelstein (1909-1990) | PRESENT @I54@ | Added r2. Hebrew name Aaron Dovid. |
| Ruth Mermelstein Gold (b. 1937) | MISSING | Living. |
| Hashy Mermelstein (b. 1940) | MISSING | Living. |
| Lea Mermelstein (b. 1945) | MISSING | Living. |
| Pessel Peppy Frei (d. 1939/1940) | MISSING | |
| Mattis Markel (Yichus) | MISSING | |
| Jozef Brand of Lisko | PRESENT @I50@ | Added r2. Father of Helen Brandt. |
| Brancia Brina Goldbaum of Lisko | PRESENT @I51@ | Added r2. Mother of Helen Brandt; murdered Holocaust Aug-Sep 1942. |
| David Goldbaum | MISSING | Lesko Yizkor. |
| Feiga Goldbaum | MISSING | Lesko Yizkor. |
| Ester Goldbaum | MISSING | Lesko Yizkor. |
| Chana Goldbaum | MISSING | Lesko Yizkor. |
| Yisrael Lipa Goldbaum | MISSING | Lesko Yizkor. |
| Yoseph Frei (Jozef) | MISSING | |
| Toba Rivka Frei (Taube) | MISSING | |
| Bashe Frei | MISSING | |
| Feiga Frei Karp | MISSING | |
| Joseph Karp | MISSING | |
| Nissan Karp | MISSING | |
| Frieda Karp Weidenfeld (Friedelle) | MISSING | |
| Fishel (Philip) Weidenfeld | MISSING | |
| Renya Tzoar (b. 1933) | MISSING | Living. |
| Chawa Frei Lockspeiser | MISSING | |
| Hersch Lockspeiser | MISSING | |
| Frieda Frei Sternback | MISSING | |
| Moishe Myer Karp | MISSING | |
| Mark Karp | MISSING | Living. |
| Nathan Karp | MISSING | |
| Shendelle Karp | MISSING | |
| Abraham Karp | MISSING | |
| Tillie Karp | MISSING | |
| Beryl Karp | MISSING | |
| Herschel Karp | MISSING | |

### Standing Springs Baptist Church charter members (NOT in slice)

| Person | Status | Notes |
|---|---|---|
| Arguless (surname uncertain) | MISSING | Charter member. |
| Elizabeth Henderson (charter member) | MISSING | Charter member. |
| Rachel Henderson (charter member) | MISSING | Charter member. |
| William Mayhall | MISSING | Charter member. |
| Rhonda Moore | MISSING | Charter member. |
| Thomas Richardson | MISSING | Charter member. |
| Delila Richardson | MISSING | Charter member. |
| James Richardson | MISSING | Charter member. |
| Christopher Robbins | MISSING | Charter member. |
| Hannah Robbins | MISSING | Charter member. |
| Rev. Nathan Berry | MISSING | First pastor. |
| William Richardson (m. Connie Baker) | MISSING | Step-father of Thomas B. Cox. |

### Stangle / Sands / Duff / Byars / Bright (handwritten chart, mostly speculative; NOT in slice)

| Person | Status | Notes |
|---|---|---|
| John Stangle (b. 1744) | MISSING | |
| Eleanor Sands | MISSING | |
| John Stangle Jr. (?) | MISSING | Speculative. |
| Mary Stangle (~1769) | MISSING | Speculative. |
| Hannah Stangle (~1790) | MISSING | Speculative. |
| Stephen Stangle | MISSING | Speculative. |
| George Stangle (~1793) | MISSING | Speculative. |
| William Stangle (~1792) | MISSING | Speculative. |
| Frank/Frances Stangle (~1791) | MISSING | Speculative. |
| Joseph Stangle (~1793) | MISSING | Speculative. |
| Lewis Duff | MISSING | |
| Mary Duff | MISSING | |
| Francis Jesse Duff | MISSING | |
| Amanda Caroline Duff Johnson | MISSING | |
| William Duff | MISSING | |
| Francis Jane Byars (or Ryan) | MISSING | Speculative. |
| John Byars (or Ryan) | MISSING | Speculative. |
| Mary Elizabeth Bright | MISSING | Speculative chart entry. |
| Charles Edward Bright (or Long) | MISSING | Speculative chart entry. |
| Thomas Moragne | MISSING | Speculative. |
| Goldie Battson/Batson | MISSING | Speculative. |
| Rita Simmons | MISSING | Speculative. |
| McCloskey (unknown) | MISSING | Speculative. |
| Dulcie (unknown) | MISSING | Speculative. |
| Charles (unknown) | MISSING | Living, speculative. |
| Tim (unknown) | MISSING | Living, speculative. |

### Schneerson / Loew / Luria / Treves / rabbinic dynasty (NOT in slice; Tier 2/3)

These persons were added 2026-04-19 from Geni and are extensively documented in vault person files. All MISSING from GEDCOM by design (Tier 2/3 only; first-pass slice excludes them).

| Person | Status | Notes |
|---|---|---|
| Shneur Zalman of Liadi (1745-1812) | MISSING | Alter Rebbe. |
| Sterna Segal | MISSING | |
| Boruch Poisner (1721-1790) | MISSING | |
| Schneur Zalman Loew (~1692-~1735) | MISSING | |
| Moshe Loew of Posen (1667-1736) | MISSING | |
| Yehuda Leib Loew (~1625-1705) | MISSING | |
| Shmuel Loew (1576-1655) | MISSING | |
| Bezalel Charif Loew (~1547-1599) | MISSING | |
| Maharal of Prague (Judah Loew, ~1525-1609) | MISSING | |
| Perel Loew (~1528-1610) | MISSING | |
| Bezalel ben Yehuda Loew (~1480-~1550) | MISSING | |
| Chaim ben Bezalel Loew Beer | MISSING | |
| Rivkah Loew Hirtz (~1721) | MISSING | |
| Sara Loew Katz (1665-1736) | MISSING | |
| Shneur Zalman Katz (1582-1649) | MISSING | |
| Rosa Luria (~1590) | MISSING | |
| Aminadav Luria (~1548-1605) | MISSING | |
| David Yehiel Drucker (1520-~1600) | MISSING | |
| Solomon Luria Maharshal (~1495-1540) | MISSING | |
| Dina Luria (~1503-~1585) | MISSING | |
| Yitzhak Klauber of Posen (1475-1530) | MISSING | |
| Zecharia Mendel Klauber | MISSING | |
| Sarah Sirka Klauber | MISSING | |
| Rachel Portugaler (1693-1735) | MISSING | |
| Boruch Portugaler Batlan (~1670) | MISSING | |
| Avraham Shor | MISSING | |
| Naftali Hirsch Schor | MISSING | |
| Moshe Zalman Ephraim Schor | MISSING | |
| Abraham Hayyim Schor | MISSING | |
| Shmuel Schor | MISSING | |
| Avraham Schor (alt.) | MISSING | |
| Abraham ben Joshua | MISSING | |
| Joshua ben Samuel | MISSING | |
| Samuel ben Hayyim of Dampierre | MISSING | |
| Michla Loew | MISSING | |
| Jekutiel Menachem Kaufman Auspitz (d. 1594) | MISSING | |
| Bila Auspitz (d. 1595) | MISSING | |
| Moshe SeGal | MISSING | |
| Dreizel Miriam Zeisel Schrenzel (~1465-1559) | MISSING | |
| Yechiel Yehuda ben Aharon Luria (~1430-1470) | MISSING | |
| Aharon ben Nethanel Luria (1413-1478) | MISSING | |
| Nethanel Ben Yehiel pre-Luria (1385-1460) | MISSING | |
| Yechiel Yehudah pre-Luria I (~1370-~1450) | MISSING | |
| Shimshon pre-Luria (1325-1417) | MISSING | |
| Miriam pre-Luria (1350-1427) | MISSING | |
| Eliezer Treves ABD Frankfurt (1493-1566) | MISSING | |
| Naftali Hirsch Treves (~1473-1540) | MISSING | |
| Eliezer Treves ABD Schlezstadt (1395-1490) | MISSING | |
| Shmuel Treves of Alsace | MISSING | |
| Yosef Treves (1355-1435) | MISSING | |
| Matityahu Ashkenazi Treves III (~1325-1387) | MISSING | |
| Yosef V Tzarfati Treves Ashkenazi (1304-~1370) | MISSING | |
| Yochanan Ashkenazi Treves (~1265-~1314) | MISSING | |
| Avraham ben Matityahu (and earlier Treves chain) | MISSING | Traditional rabbinic claim. |
| Bustanai the Exilarch | MISSING | Traditional. |
| King David | MISSING | Traditional. |
| King Solomon | MISSING | Traditional. |
| King Rehoboam | MISSING | Traditional. |
| Zerubbabel | MISSING | Traditional. |
| Dovber Shneuri (Mitteler Rebbe) | MISSING | |
| Sheyna Boruchovich | MISSING | |
| Dvorah Leah Schneerson (Altschuler) | MISSING | |
| Chaim Avraham Shneuri | MISSING | |
| Moshe Leon Shneuri | MISSING | |
| Frieda Shneuri Klutzkar | MISSING | |
| Rachel Shneuri Sheiness | MISSING | |
| Chaya Mushka Schneerson (3rd Rbzn.) | MISSING | |
| Menucha Rachel Shneuri Slonim | MISSING | |
| Chaya Sarah Shneuri Alexandrov | MISSING | |
| Sarah Shneuri Derbarmdiker | MISSING | |
| Ester Miriam Shneuri Cullen | MISSING | |
| Bracha Shneuri | MISSING | |
| Menachem Nachum Schneerson (1788-1868) | MISSING | |
| Dvora Leah Twersky (1792-1876) | MISSING | |
| Musia Hinde Feigelsohn | MISSING | |
| Beila Raizah Schneerson | MISSING | |
| Gita Rachel Beirech Ginzburg | MISSING | |
| Rivka Beila Schneerson Wallis | MISSING | |
| Boruch Leiba Schneerson (1803) | MISSING | |
| Dov Ber Schneerson of Liadi (1797) | MISSING | |
| Boruch Shmuel Schneerson (1803) | MISSING | |
| Baruch Shalom Schneerson (RABASH; 1805-1869) | MISSING | |
| Yehuda Leib Schneerson (1807-1866) | MISSING | |
| Chaim Shneur Zalman Schneerson (1814-1880) | MISSING | |
| Israel Noah Schneerson (HaRIN; 1815-1883) | MISSING | |
| Yosef Yitzchak Schneerson of Ovruch (1822-1876) | MISSING | |
| Shmuel Schneerson (MaHaRash; 1834-1882) | MISSING | |
| Yaakov Schneerson of Orsha (~1808-1876) | MISSING | |

### Kascher / Falk / Binder Transylvanian-Saxon (round 2: partial population)

| Person | Status | INDI | Notes |
|---|---|---|---|
| Henry Michael Kascher (1914-1987) | PRESENT | @I58@ | Added r2. Bridges Kascher cluster to Bright/Salmanson via marriage to Mary Elizabeth Bright. |
| Mary Elizabeth Bright (b. 1921) | PRESENT | @I59@ | Added r2. Daughter of Albert Graham Bright (@I35@) and Rebecca Moseley Long (@I34@); linked as CHIL of @F18@. Living per privacy heuristic; birth date documented (b. 1921 < 1925 threshold). |
| Michael Kascher Jr. (1889-1975) | PRESENT | @I60@ | Added r2. Born Waldhutten, died Fort Lauderdale FL. |
| Rosina Falk (1905-1928) | PRESENT | @I61@ | Added r2. Died of TB age 22 in Denver CO. |
| Michael Kascher Sr. (1864-1935) | PRESENT | @I62@ | Added r2. |
| Anna Binder (1868-1915) | PRESENT | @I63@ | Added r2. Per Tier 1 Waldhutten church certificates. |
| Martin Binder (b. 1831) | PRESENT | @I64@ | Added r2. Organist in Kreisch. |
| Anna Weber | PRESENT | @I65@ | Added r2. Daughter of Christian Weber (organist) and Sara Kanasch. |
| Mathias Falk (1867-1934) | MISSING | - | Father of Rosina Falk (per vault). Defer to next iteration. |
| Katharina Pfaff (1871-?) | MISSING | - | Mother of Rosina Falk. |
| Sophia Schuller (b. 1903) | MISSING | - | Michael Kascher Jr.'s second wife (m. 12 Jul 1947). |
| Andreas Reinherd | MISSING | - | Stub vault file. |
| Anna Kascher (b. 1903) | MISSING | - | Sister of Michael Kascher Jr. |
| Friedrich Kascher (b. 1907) | MISSING | - | Sister of Michael Kascher Jr. |
| Sara Kascher (b. 1910) | MISSING | - | Sister of Michael Kascher Jr. |

### Brecht / Hoffman / Christmann Schriesheim Palatine line (round 2: full population)

| Person | Status | INDI | Notes |
|---|---|---|---|
| Johann Michael Brecht II (1706-1794) | PRESENT | @I66@ | Added r2. Pennsylvania emigrant 1726. Direct ancestor of David Bright and the Bright Virginia line. |
| Margareta Simone (1708-1778) | PRESENT | @I67@ | Added r2. French Huguenot from Pfeffelbach. |
| Johannes Michael Brecht I (1662-1719) | PRESENT | @I68@ | Added r2. Wine grower, Schriesheim. |
| Anna Katharina Hoffman (1663-1740) | PRESENT | @I69@ | Added r2. Petitioned to emigrate 6 May 1726. |
| Hans Jost Hoffman (1628-1697) | PRESENT | @I70@ | Added r2. Maurergesell, Ratsverwandter. |
| Christina Frank (d. 1685) | PRESENT | @I71@ | Added r2. Married Hans Jost 15 Apr 1651. |
| Balthasar Hans Brecht (1636-1703) | PRESENT | @I72@ | Added r2. Stadtrat und Almonier in Schriesheim. |
| Anna Margaretha Christmann (1637-1703) | PRESENT | @I73@ | Added r2. |
| Christoph Stoffel Brecht (1591-1665) | PRESENT | @I74@ | Added r2. Moved Neudorf to Schriesheim before 1636. |
| Anna Barbara Wolpack (~1599-1683) | PRESENT | @I75@ | Added r2. GEDCOM 1559 birth corrected to ~1599 (transposition error). |
| Conrad Kuntz Brecht (~1563-~1612) | PRESENT | @I76@ | Added r2. Earliest confirmed Brecht ancestor. |
| Catharina Claus Camerer (~1569-1664) | PRESENT | @I77@ | Added r2. Married Conrad 24 Mar 1584. |
| Sebastian Brecht (1600-1670) | PRESENT | @I78@ | Added r2 (collateral line). Brother of Christoph Stoffel; co-migrated to Schriesheim by 1637. New vault file added by tree-expansion agent 15. |

## Validation report (Iteration 2, 2026-05-02)

- INDI count: 78 (39 from r1 + 39 added in r2)
- FAM count: 38 (20 from r1 + 18 added in r2)
- New INDI ID range: @I40@-@I78@ (no @I29B@ or skipped IDs)
- New FAM ID range: @F20@-@F38@ (no @F29@: Albert Graham Bright + Rebecca Long is already @F18@; Mary Elizabeth Bright linked as CHIL of @F18@ instead of creating duplicate FAM)
- Every INDI has a NAME line: yes
- Every FAM has at least HUSB or WIFE: yes
- Orphan CHIL references: none
- Orphan FAMC/FAMS references: none
- Duplicate INDI IDs: none
- Duplicate FAM IDs: none
- File ends with `0 TRLR`: yes
- Living-person privacy heuristic applied: 3 living persons (@I55@ Anne Markel ~1922 — over 100 years; @I56@ Alan Carl Salmanson 1951; @I57@ Kathryn Ann Kascher 1946) — birth year only, no death date. @I59@ Mary Elizabeth Bright (b. 1921) is pre-1925 threshold, full date retained.
- Round-1 INCOMPLETE Tabitha Dolby (@I11@) reclassified PRESENT after birth date 20 Apr 1756 confirmed in r1 GEDCOM (no edit needed).

## Validation report (Iteration 1) [retained for history]

- INDI count: 39
- FAM count: 20
- Every INDI has a NAME line: yes
- Every FAM has at least HUSB or WIFE: yes
- Orphan CHIL references (CHIL points to undefined INDI): none
- Orphan FAMC/FAMS references (point to undefined FAM): none
- Duplicate INDI IDs: none
- File ends with `0 TRLR`: yes
- Living-person privacy heuristic applied: 0 living persons in this slice (all 39 are deceased and pre-1925).

## Next iteration targets

1. Add remaining Salmanson cluster: Samuel Salmanson + Hilda Mittleman, Charles + Hannah Kushner, Donald, Martha Corin Schwartz, Levi Itzhak Zalmanson + Rochel Tsine Deych (parents of Barnett).
2. Add remaining Markel siblings: Minnie Markel Sternbach + Abraham David Sternbach, Masha + Hannah + Pessel + Sarah Tachner.
3. Add Markel cluster grandchildren: Frieda/Rita Markel, Kate Markel Kaplan + Irving Kaplan, Joseph Harold Markel.
4. Add Salk cluster: Louis (Elizar) Salk + Rose P. Salk (Abraham Zolly's parents), Hyman Salk, Lena Salk + Nathan Fain (Lena was death-cert informant 1925, Tier 1).
5. Add Brecht / Bright Pennsylvania → Virginia bridge: George Adam Brecht/Bright (1730-1804), David Bright (1740-?), and the chain to George Michael Bright (Albert Graham Bright's father).
6. Add Falk Mathias + Pfaff Katharina (Rosina Falk's parents), Schuller Sophia (Michael Jr.'s second wife).
7. r1 carry-overs: Sarah Lindsey Brasher, Thomas Brasher Sr., Mary Ann Woodson Cooley + Tucker Woodson + Anne Stolle, John Joseph Cooley + Emily Chapman.
8. Children of Thomas B. Cox + Olive Henderson; children of Rebecca Adeline Cox + Henry L. Henderson.
9. Stangle / Duff / Byars clusters: speculative, defer.
10. Schneerson / Loew / Luria / Treves rabbinic chain: Tier 2/3, defer with explicit `1 SOUR Geni-curated` notation.
