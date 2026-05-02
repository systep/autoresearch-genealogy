---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, gedcom, audit]
gedcom_file: family.ged
gedcom_version: "5.5.1"
gedcom_indi_count: 39
gedcom_fam_count: 20
sources: [vault-template/Family_Tree.md, vault-template/family.ged]
---

# GEDCOM Audit

Source of truth: [[Family_Tree]]. GEDCOM file: `family.ged` (created 2026-05-02, first pass).

This audit lists every named individual in `Family_Tree.md` and marks whether they appear in `family.ged`.

## Status legend

- **PRESENT**: INDI record exists in family.ged with NAME and at least one of (BIRT, DEAT, FAMC, FAMS).
- **INCOMPLETE**: INDI record exists but is missing fields known from Family_Tree.md (e.g., birth date, death place, parents, spouse).
- **MISSING**: No INDI record. Person is named in Family_Tree.md but absent from GEDCOM.

This is a first-pass seed file. Iteration 1 (2026-05-02) populated only the Cox / Cooley / Holloway / Parker / Brasher / Henderson / King / Huff / Moseley / Long / Bright slice (~39 INDIs). All other lines (Salmanson / Salk / Markel / Frei / Brandt / Karp / Kascher / Kuniansky / Bright pre-Albert / Schneerson / Loew / Luria / Treves / Stangle / Duff / Byars / Schor / etc.) are MISSING by design and will be filled in subsequent iterations.

## Summary

| Status | Audit-row count |
|---|---|
| PRESENT | 31 |
| INCOMPLETE | 8 |
| MISSING | 383 |
| **Total audit rows** | **422** |

Note: GEDCOM contains 39 INDI records. PRESENT (31) + INCOMPLETE (8) = 39, one row per INDI. Every @I#@ ID is referenced exactly once in the audit table. The MISSING count reflects every named individual in `Family_Tree.md` who lacks an INDI record after Iteration 1.

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
| Tabitha Dolby King (1756-1815) | PRESENT | @I11@ | parents | |
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

### Salmanson direct line (NOT in slice; all MISSING by design)

| Person | Status | INDI | Missing fields | Notes |
|---|---|---|---|---|
| L.D. (Leonard Daniel) Salmanson | MISSING | - | all | Living. |
| Alan Carl Salmanson | MISSING | - | all | Living. |
| Kathryn Ann Kascher Salmanson | MISSING | - | all | Living. |
| Yaffit Shriki | MISSING | - | all | Living. |
| Dean Jordan Salmanson | MISSING | - | all | Living. |
| Arielle Rey | MISSING | - | all | Living. |
| Rebecca Salmanson | MISSING | - | all | Living. |
| Leonard Irving Salmanson (1910-1975) | MISSING | - | all | |
| Thelma Markel Salmanson Rodbell (1920-2011) | MISSING | - | all | |
| Jerrold A. Salmanson (b. 1942) | MISSING | - | all | Living/uncertain. |
| Barbara Diana Salmanson | MISSING | - | all | Living. |
| Carol S. Salmanson | MISSING | - | all | Living. |
| Shelly White | MISSING | - | all | Possibly step-relation. |
| Richard Panciera | MISSING | - | all | |
| David Kascher (?) | MISSING | - | all | |
| Nancy Kascher | MISSING | - | all | |
| Suzanne Kascher (?) | MISSING | - | all | |
| Barnett Salmanson (1883-1960) | MISSING | - | all | |
| Elizabeth Hilda Salk Salmanson (1887-1974) | MISSING | - | all | |
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

### Salk family (NOT in slice)

| Person | Status | Notes |
|---|---|---|
| Louis Salk | MISSING | Father of Abraham Zolly Salk. |
| Rose P. Salk | MISSING | Mother of Abraham Zolly Salk. |
| Abraham Zolly Salk (~1860-1925) | MISSING | |
| Tobey/Tauba Salk | MISSING | Wife of Abraham Zolly. |
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

### Markel / Frei / Brandt / Goldbaum / Karp (NOT in slice)

| Person | Status | Notes |
|---|---|---|
| Nissen Mendel Markel (Yichus) | MISSING | Tier 2 only. |
| Dov Markel (Mordko Ber Markiel) | MISSING | |
| Henie Markel | MISSING | |
| Heschel Herman Markel (1862-1916) | MISSING | |
| Leah Frei Markel (~1864-1940) | MISSING | |
| Minnie Markel Sternbach (1887-1975) | MISSING | |
| Abraham David Sternbach (1886-1978) | MISSING | |
| Maurice Sternbach (1912-1998) | MISSING | |
| Florence Buchwald Sternbach (1917-?) | MISSING | |
| David Futtersak | MISSING | |
| Hinda Lea Sternbach Hoffman (b. 1942) | MISSING | |
| Victor Hoffman (b. 1940) | MISSING | |
| Masha Markel Tachner (d. 1939) | MISSING | |
| Tachner (Masha's husband) | MISSING | |
| Morris Markel (Mojzesz Majer Markiel; ~1890-1964) | MISSING | |
| Helen Brandt Markel (Dwora; 1889-1976) | MISSING | |
| Thelma Markel (1920-2011) | MISSING | (also listed in Salmanson cluster) |
| Anne Markel | MISSING | |
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
| Avraham Chaim Markel (d. 1939) | MISSING | |
| Hannah Markel (d. 1939) | MISSING | |
| Florence Markel Mermelstein (1909-1990) | MISSING | |
| David Mermelstein (1909-1990) | MISSING | |
| Ruth Mermelstein Gold (b. 1937) | MISSING | Living. |
| Hashy Mermelstein (b. 1940) | MISSING | Living. |
| Lea Mermelstein (b. 1945) | MISSING | Living. |
| Pessel Peppy Frei (d. 1939/1940) | MISSING | |
| Mattis Markel (Yichus) | MISSING | |
| Jozef Brand of Lisko | MISSING | Father of Helen Brandt. |
| Brancia Brina Goldbaum of Lisko | MISSING | Mother of Helen Brandt. |
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

## Validation report (Iteration 1)

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

1. Add Salmanson direct line (Barnett, Leonard Irving, Thelma, Alan Carl, Kathryn Ann, etc.) — ~20 INDIs.
2. Add Markel / Frei / Brandt slice — ~30 INDIs from documented Tier 1 ancestors.
3. Add Sarah Lindsey Brasher, Thomas Brasher Sr., Mary Ann Woodson Cooley, John Joseph Cooley, Emily Chapman — ~5 INDIs that complete first-degree links of currently-INCOMPLETE persons.
4. Add the 12 children of Thomas B. Cox + Olive Mary Henderson and the 10 children of Rebecca Adeline Cox + Henry L. Henderson where birth dates exist.
5. Stangle / Duff / Byars / Bright clusters can wait — speculative reading of handwritten chart, low confidence.
6. Schneerson / Loew / Luria / Treves chain — Tier 2/3, defer to later iteration with explicit `1 SOUR Geni-curated` notation.
