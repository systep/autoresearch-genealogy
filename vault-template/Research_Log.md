---
type: reference
created: 2026-04-09
updated: 2026-04-19
last_session: "2026-04-19 Cross-Reference Audit (Prompt 02): Full vault duplicate-file pass across ~400 person files. 10 new redirects created consolidating confirmed duplicates (Cythia_Cox->Cynthia_Sithey_Cox, James_Jamie_Cox->James_Cox, Diana_Cox->Diana_Black_Cox, William_Cox->William_Cox_Jr, William_Cox_Cox->William_Cox_1798, Rowland_Black_Cox->Monroe_J_P_Cox, Albert_Bright->Albert_Graham_Bright, Fredrik_Fritz_Peter_Schwartz->Friedrich_Fritz_Peter_Schwartz, Jonathan_Jonas_james->Jonathan_Jonas_James, John_Hough_1660->John_Hough). Identified 4 duplicate cases requiring verification before merging and 3 naming-collision cases preserved as distinct (Moseley Frances vs Hannah, Willie_Henrietta_Drake vs Willis_Henrietta_Youngblood, Harry vs Harry_S. Kuniansky). See cross_reference_audit.md 'Duplicate Person File Audit' section."
tags: [genealogy, research, log]
---

# Research Log

Chronological record of every archive searched, every query run, and every result (positive or negative).

## 2026-04-19 (afternoon): Cross-Reference Audit Prompt 02 duplicate-file pass

### Summary

Executed cross_reference_audit prompt against all ~400 person files in vault. Identified 38 suspected duplicate pairs or clusters. Consolidated 10 via redirects (on top of 26 pre-existing redirects from 2026-04-18 session). Flagged 4 for further source verification. All changes logged in cross_reference_audit.md 'Duplicate Person File Audit' section.

### Key findings

1. **MyHeritage GEDCOM import (2026-04-18)** produced ~300 new low-confidence person files, many of which duplicate existing research-sourced files under different name variants (period vs. no period, abbreviated middle name vs. full, diminutive "Jamie" vs. "James", GEDCOM encoding artifacts with curly quotes, and in one case a repeated surname "William_Cox_Cox"). Redirects preserve link integrity while consolidating to canonical files.
2. **Impossible-date files** flagged: William_Cox_Cox.md listed death "15 FEB 1682" for someone born 8 JUN 1798 (century-inversion error). John_Hough_Colonial.md records death at age 17 but fathered a son. Maria Ranft's GEDCOM birth (1882) postdates her 1847 daughter.
3. **Twins preserved**: Mary_Ann_Bright and Charles_T._Bright share birth date 20 Aug 1853 Franklin Depot VA. These are documented twins per Samuel_Graham_Bright's children list, not duplicates.
4. **Naming conventions preserved**: Willie_Henrietta_Drake (b. 1886) is the daughter of Eleanor_Nellie_Youngblood (who married a Drake), almost certainly named for her aunt Willis_Henrietta_Youngblood (b. 1863). Both kept as person files.
5. **Generation clarifications**: Three John Hough generations appear: (1) John Hough b. ~1642 Yorkshire (colonial progenitor), (2) John Hough b. ~1660 Cheshire (his son), (3) John Hough b. 1682 Cheshire (grandson who emigrated to Bucks County PA). The 1660 stub was redirected to John_Hough.md which contains that generation's data.
6. **Unnamed-infant stubs**: Bright.md, Kleinberg.md, Schwartz.md, Unknown_Male_Schwartz.md all document unnamed infants from GEDCOM. Not merged; recommended for consolidation into Unresolved_Persons.md in future pass.

### Structural issues noted in Family_Tree.md

- Discrepancies table numbering has gap between #12 and #14 and duplicate #18 and #19 (content correct but numbering confused)
- Some wikilinks still reference Rebecca_M_Long (redirect file) rather than canonical Rebecca_Moseley_Long; Obsidian resolves but GEDCOM export may not

### No new external searches this session

All work was internal vault analysis; no external databases queried. 10 iterations of file-by-file comparison across Cox, Youngblood, Bright, Moseley, Long, Salk, Schwartz, Kuniansky, Wert, Hough, Kleinberg, Henderson, Culpeper, Kascher, Brecht, Drake family clusters.

## 2026-04-19: Timeline Gap Analysis (prompt 07), ~20 searches across 8 iterations

### Summary

Systematic timeline gap analysis per prompt 07. For every person in Family_Tree.md with known birth/death dates, generated expected records (census, military, immigration, vital records) and compared against existing vault documentation. Identified 55 new expected-record gaps across census (31 new), military (9 new), immigration (4 new), death records (5 new), marriage records (3 new), and naturalization (3 new). Conducted 20 web searches targeting HIGH/CRITICAL priority gaps. All census, military, and immigration databases remain behind login walls.

### Key Findings

1. **Marvin Sternbach KIA Okinawa 1945**: Per family tradition, a Sternbach was killed at Okinawa. However, Marvin Sternbach (1928-2006) found in web search is the WRONG person (too young and survived). Maurice Sternbach (1912-1998) also survived. The KIA individual is not among the known children of Abraham David and Minnie (Markel) Sternbach. NARA WWII Army Casualties RI list (archives.gov) timed out on automated fetch. This remains a CRITICAL gap requiring human action (direct NARA access, ABMC search, family clarification).

2. **Morris Markel death jurisdiction corrected**: Previous entry listed death as "~1963, Rhode Island." Corrected to **1964, Florida** based on Kate Markel FAG #232002112 parent dates (1890-1964) and Helen Markel's RIJHA obituary identifying her as "widow" living in Miami FL ~1957-1963. Search target changed from RI State Archives to Florida Death Index.

3. **Helen Markel death date confirmed**: RIJHA death notice confirms November 6, 1976, at Miriam Hospital, Providence RI. Post-1975 records at RI Dept of Health (not State Archives).

4. **Hilda Salmanson obituary confirmed**: Found at Legacy.com (Boston Globe). Died West Palm Beach FL, age 99. Wife of Samuel Salmanson. Daughter of Max and Fannie Mittleman. Sister of late Harry and Joseph Mittleman and Sara Goldberg. Funeral at Lincoln Park Cemetery chapel. No new information beyond what was already in vault.

5. **55 new gaps identified**: Every Salmanson child (Leonard, Samuel, Charles, Martha, Donald) should appear in multiple US censuses (1920-1950). Thelma Markel should appear in 1930 (first US census). Abraham David and Minnie Sternbach should appear in 1920, 1930, 1940. Michael Kascher family should appear in 1920 Youngstown OH. 9 military service/draft records expected for males of service age.

### Searches Conducted

| # | Search | Database/Source | Result |
|---|---|---|---|
| 1 | "Marvin Sternbach killed action Okinawa 1945 World War II" | Web/multiple | NEGATIVE. Only general Battle of Okinawa information. |
| 2 | "Sternbach killed Okinawa 1945 Rhode Island Providence" | Web/multiple | NEGATIVE. NARA RI casualty page found but content inaccessible. |
| 3 | NARA WWII Army Casualties RI page fetch (archives.gov) | WebFetch | FAILED: Socket connection closed (page too large). |
| 4 | "Maurice Sternbach OR Marvin Sternbach WWII military killed 1945" | Web/AncientFaces/Legacy | POSITIVE (negative for KIA): Maurice (1912-1999) and Marvin (1928-2006) both survived. |
| 5 | "Sternbach Okinawa killed 1945 Find a Grave" | Web/FAG | NEGATIVE. |
| 6 | "WWII army casualties Rhode Island Sternbach NARA" | Web/NARA | PARTIAL: Confirmed existence of RI casualty lists at NARA and RI State Archives. No Sternbach in snippets. |
| 7 | site:archives.gov "Sternbach" army casualties RI WWII | Web/NARA | NEGATIVE. |
| 8 | "Abraham Sternbach OR Abraham David Sternbach WWI draft Providence" | Web/NARA | NEGATIVE. General info only. |
| 9 | "Michael Kascher immigration Youngstown Ohio 1913 Transylvania" | Web/multiple | NEGATIVE. Anna Binder Kascher confirmed on Siebenbuerger.de. No immigration record. |
| 10 | "Leonard Salmanson OR Leonard Salmonson 1940 census Providence RI" | Web/multiple | PARTIAL: FAG #231959694 (known). Census behind login. |
| 11 | "Leonard Salmanson 1930 census Providence RI Adams Drug" | Web/Wikipedia/RIHS | NEGATIVE for census. Adams Drug 1932 confirmed. |
| 12 | "Florence Markel OR Sura Feiga Markel immigration 1923 Ellis Island" | Web/multiple | NEGATIVE. |
| 13 | "Kascher family Waldhutten Valchid immigration Youngstown" | Web/Siebenbuerger | PARTIAL: Binder-Kascher family confirmed. No ship record. |
| 14 | "Leonard Salmanson WWII draft 1942 Providence" | Web/Fold3/NARA | NEGATIVE. |
| 15 | "Markel family immigration Poland 1928 ship Providence RI" | Web/NARA | NEGATIVE. |
| 16 | "Hilda Mittleman OR Hilda Salmanson 1916 2016 obituary Providence" | Web/Legacy/JewishRhody | POSITIVE: Full obituary confirmed. No new data. |
| 17 | "Morris Markel obituary 1964 Florida Miami" | Web/Legacy | NEGATIVE. |
| 18 | "Joseph H Markel obituary Mortgage Guarantee Title Providence" | Web/Legacy | NEGATIVE. Wrong Joseph Markel found (Indiana, 2014). |
| 19 | "Donald Salmanson World War II military service" | Web/multiple | NEGATIVE. |
| 20 | "Tobey Salk OR Tauba Salk OR Theresa Salk death Providence RI" | Web/Legacy | NEGATIVE. |

### Negative Results (Important)

- **Marvin Sternbach KIA Okinawa**: No record found in any free web database. Name "Marvin" does not appear among known Sternbach children.
- **NARA WWII Casualties RI page**: Too large for automated fetch. Requires direct browser access.
- **All census records**: Behind FamilySearch/Ancestry login walls. 31 new gaps identified but none resolvable through free web search.
- **All immigration records**: Behind login walls. 4 new gaps identified.
- **Morris Markel Florida obituary**: 1964 Florida death records not freely accessible online.
- **Tobey/Tauba Salk death**: No obituary found. RI death index not accessible without login.

### Gap Count Summary

| Category | Previous OPEN | New Gaps Added | Total OPEN |
|---|---|---|---|
| Census | 7 | 31 | 38 |
| Immigration | 5 | 4 | 9 |
| Death Records | 3 | 5 | 8 |
| Marriage Records | 1 | 3 | 4 |
| Naturalization | 2 | 3 | 5 |
| Military Records | 2 (PARTIAL) | 9 | 11 |
| Burial Records | 7 | 0 | 7 |
| **TOTAL** | **27** | **55** | **82** |

### Priority Actions for Human

1. **CRITICAL**: Access NARA WWII Army Casualties RI page in browser (archives.gov/research/military/ww2/army-casualties/rhode-island.html), search S section for "Sternbach."
2. **CRITICAL**: Search ABMC (abmc.gov) for Sternbach burials in Pacific cemeteries.
3. **CRITICAL**: Ask family: Who was "Marvin Sternbach KIA Okinawa 1945"? Relationship to Abraham David + Minnie?
4. **CRITICAL**: FamilySearch login for 1930 censuses (Morris Markel West Warwick, Barnett Salmanson Providence).
5. **HIGH**: FamilySearch RI Naturalizations (coll. 2622566) for Barnett Salmanson and Morris Markel.
6. **HIGH**: FamilySearch WWI Draft Cards for Abraham David Sternbach, West Warwick RI.
7. **HIGH**: Florida Death Index on FamilySearch for Morris Markel, 1964.

---

## 2026-04-18: Open Question Resolution (late-night session), ~30 searches

### Summary

Systematic attack on open questions per prompt 08. Focused on questions resolvable with free web sources. Major breakthroughs on Lesko Yizkor Goldbaum martyrs, Fain family business history, Ahavath Sholom congregational history, SC marriage records dating, Eli Baldwin/Transou assessment, and Providence Salk family branches.

### Key Findings

1. **Lesko Yizkor Goldbaum martyrs (OQ #24)**: 5 named Goldbaum Holocaust victims confirmed on page 469 of Lesko Yizkor Book necrology (JewishGen): David Goldbaum (M), Feiga Goldbaum (F, mother of 3), Ester Goldbaum (F, daughter of Feiga), Chana Goldbaum (F, daughter of Feiga), Yisrael Lipa Goldbaum (M, son of Feiga). No Brand/Brandt in any necrology page. Feiga is a candidate for Brina (Brancia) Goldbaum.

2. **Lena (Salk) Fain family (OQ #36)**: Alfred Fain obituary fully confirmed (Legacy.com). Buried Lincoln Park Cemetery. Deceased siblings: Jeanette Rosofsky, Leonard Fain, Dora Paster. Barnet Fain (1932-2018) obituary reveals Fain's Floorcovering opened 1927 by "his father [Irving I. Fain] and uncle" on North Main Street. Two distinct Fain businesses documented.

3. **Ahavath Sholom / Morris Markel (OQ #23)**: JewishRhody.com article confirms congregation "could not afford a rabbi." Morris Markel was likely a lay religious leader, not an ordained rabbi.

4. **SC marriage records (OQ #15)**: South Carolina did NOT record marriages before July 1, 1911. No marriage record for Judson King + Charstee Cooley can exist. Hiram Cooley's children documented but no Charity/Charstee found.

5. **Eli Baldwin wife (OQ #25)**: WikiTree confirms wife as Elizabeth (maiden name unknown). GEDCOM's "Edaline L. Transon" almost certainly an error. Transou family was Moravian in Bethania; no Transou-Baldwin connection in any source.

6. **Providence Salk families (OQ #16)**: Now 5 distinct branches documented. Harold Salk (d. 2024) parents: Samuel and Ruth (Fleisig) Salk. Harvey M. Salk (1921-1997) daughter Patricia Fain creates Salk-Fain cross-link.

### Searches Conducted

| # | Search | Database/Source | Result |
|---|---|---|---|
| 1 | Charstee Cooley King Judson King marriage Greenville County SC | Web/multiple | NEGATIVE for marriage record. FINDING: SC marriages not recorded before 1911. |
| 2 | Lena Salk Fain Nathan Fain Providence RI obituary | Web/Legacy.com | NEGATIVE. Generic obituary database pages. |
| 3 | Albert G Bright parents Virginia 1894 Charles Edward Bright | Web/multiple | NEGATIVE. Charles Edward Bright = English businessman, wrong person. |
| 4 | William Thomas Long 1825 Standing Springs Cemetery | Web/Find a Grave | NEGATIVE. No memorial found at Standing Springs. Cemetery confirmed (696 records). |
| 5 | Nathan Fain Providence RI Fain's store Find a Grave | Web/FAG | NEGATIVE. No memorial found. |
| 6 | Find a Grave William Long Standing Springs Cemetery | Web | NEGATIVE. No specific memorial. |
| 7 | Edaline Transon / Eli Baldwin Greenville SC | Web/WikiTree | POSITIVE: WikiTree Baldwin-2330 confirms wife as Elizabeth (unknown). |
| 8 | Irving Fain Providence RI born 1899 obituary | Web/MyHeritage/RIHHF | POSITIVE: Irving b. Dec 18 1899, 11 siblings, married Miriam Grossman 1904. |
| 9 | Alfred Fain twin Providence Fain's Department Store 2005 | Web/Legacy.com | POSITIVE: Full obituary confirmed. Parents Nathan + Lena (Salk) Fain. |
| 10 | Hiram Cooley Greenville SC descendants Charity/Charstee | Web/blog/Geni | POSITIVE: Hiram's children documented, but no Charity/Charstee among them. |
| 11 | Alfred Fain obituary fetch (Legacy.com) | WebFetch | POSITIVE: Complete details extracted. Buried Lincoln Park Cemetery. |
| 12 | Barnet Fain obituary fetch (Legacy.com) | WebFetch | POSITIVE: Parents Irving I. Fain + Miriam Grossman. Store opened 1927. |
| 13 | Irving J. Fain RI Heritage Hall of Fame fetch | WebFetch | POSITIVE: Different person (b. 1906, parents Alfred and Elizabeth Stoneman Fain). |
| 14 | WikiTree Baldwin-2330 fetch | WebFetch | POSITIVE: Full family details extracted. |
| 15 | Hiram Cooley 1796-1864 blog fetch | WebFetch | PARTIAL: Children by two wives documented. Incomplete list. |
| 16 | RIJHA Ahavath Sholom PDF fetch | WebFetch | FAILED: Binary PDF, unreadable. |
| 17 | Baldwin families Chatham County NC blog fetch | WebFetch | POSITIVE: No mention of Eli Baldwin or SC migration. |
| 18 | Lesko Yizkor pages 467-476 fetch (JewishGen) | WebFetch | **MAJOR POSITIVE**: 5 Goldbaum martyrs confirmed page 469. |
| 19 | Feiga Goldbaum Lesko Yizkor martyrs search | Web | NEGATIVE. No additional details beyond Yizkor page. |
| 20 | Irving Israel Fain 1899 Nathan Lena Salk siblings | Web/MyHeritage | POSITIVE: 11 siblings confirmed. |
| 21 | Jeanette Rosofsky / Leonard Fain / Dora Paster Fain Salk | Web | PARTIAL: Harvey M Salk daughter Patricia Fain discovered. |
| 22 | Charstee Cooley / Charity Cooley King Greenville SC | Web | NEGATIVE. No match in any database. |
| 23 | Lesko Yizkor pages 476-482 fetch | WebFetch | POSITIVE: No Goldbaum in this section (Ustrzyki Dolne villages). |
| 24 | Goldbaum Lesko Yizkor David Feiga search | Web/USHMM | NEGATIVE. No additional detail. |
| 25 | Columbus Index Mississippi 1889 Chronicling America | Web/LOC | POSITIVE: Newspaper confirmed digitized 1869-1893 at LOC. |
| 26 | Willis Henrietta Youngblood II&C Columbus teacher | Web | NEGATIVE. No new data. |
| 27 | William Thomas Long 1825 1887/1897 Greenville SC | Web | NEGATIVE. seekingmyroots PDF too large to fetch. |
| 28 | Transou family Forsyth County NC genealogy | Web/WikiTree | POSITIVE: 55 Transou profiles, Moravian family. No Baldwin connection. |
| 29 | WikiTree Transou genealogy fetch | WebFetch | POSITIVE: Complete list. No Edaline, no Baldwin marriage. |
| 30 | Chronicling America Columbus Index fetch | WebFetch | REDIRECT then 403. |
| 31 | Ahavath Sholom West Warwick RI founding families | Web/JewishRhody | POSITIVE: Congregation confirmed no rabbi. |
| 32 | JewishRhody Ahavath Sholom article fetch | WebFetch | POSITIVE: No rabbi, no Markel mentioned. |
| 33 | Harvey M Salk 1921-1997 Find a Grave | Web/FAG/Dignity | POSITIVE: Harvey Salk obit confirmed (different Harvey). Patricia Fain daughter. |
| 34 | Harold Salk obituary 2024 | Web/Dignity | POSITIVE: Parents Samuel + Ruth (Fleisig) Salk confirmed. |
| 35 | Barnet Fain Dignity Memorial fetch | WebFetch | POSITIVE: Confirmed father Irving I. Fain, cousin Barry Fain. |
| 36 | Barnet Fain JewishRhody fetch | WebFetch | POSITIVE: Same details confirmed. |
| 37 | Lesko Yizkor pages 485-489 fetch | WebFetch | POSITIVE: No Goldbaum in this section. |
| 38 | Harvey Salk Dignity Memorial fetch | WebFetch | DIFFERENT PERSON: Harvey b. 1943, parents David + Dorothy Lipman Salk. |
| 39 | Harold Salk Dignity Memorial fetch | WebFetch | POSITIVE: Full details. Korean War, Temple Beth-El. |
| 40 | Stephen Salk obituary 2023 | Web | POSITIVE: Parents Gabriel and Frances (Shapiro) Salk. |

### Negative Results (Important)

- No marriage record for Judson King + Charstee Cooley can exist (SC pre-1911).
- No Find a Grave memorial for William Thomas Long at Standing Springs Cemetery.
- No Albert G Bright parents found in free web sources.
- "Edaline L. Transon" appears nowhere outside the GEDCOM. Almost certainly an error.
- No "Charity" or "Charstee" Cooley found among documented Hiram Cooley descendants.
- Columbus Index 1889 digitized but could not be accessed (redirect/403).
- No Willis Henrietta Youngblood found in any new source.

### Analysis

This session resolved or partially resolved 4 questions and advanced 3 others:
- OQ #24 (Brina Goldbaum): PARTIALLY RESOLVED with 5 named Goldbaum martyrs from Lesko Yizkor.
- OQ #23 (Morris Markel rabbi): PARTIALLY RESOLVED -- congregation had no rabbi; Morris was likely a lay leader.
- OQ #25 (Eli Baldwin wife): UPDATED with strong evidence that "Edaline Transon" is an error.
- OQ #36 (Lena Fain): SUBSTANTIALLY ADVANCED with full Alfred Fain obituary and two Fain businesses identified.
- OQ #15 (Judson King wife): UPDATED with SC marriage records limitation.
- OQ #16 (Hyman/Abraham Salk): UPDATED with 5 distinct Salk branches and new obituary data.
- OQ #1 (Mary Elizabeth Bright): No progress. Albert G Bright parents remain unknown.

## 2026-04-18: Judson King 1900 Census Search and H.H. King Identification, 10 searches

### Summary

Targeted search to locate Judson King in the 1900 US Census (Oaklawn Twp, Greenville Co, SC) and identify H.H. King of Pelzer, SC (informant on Judson's 1921 death certificate). 10 web searches conducted across Find a Grave, census transcription projects, WikiTree, BillionGraves, Genealogy Trails, and general genealogy databases. The 1900 census record itself remains inaccessible (behind Ancestry/FamilySearch login walls), but a significant new lead was found.

### Key Finding

**Georgia King Sims (1885-1974)**: Find a Grave memorial #13396670, buried at Fork Shoals Baptist Church Cemetery in Pelzer, Greenville County, SC, the same cemetery as Judson King (FAG #8422324). Born March 26, 1885, five years after the 1880 census. Georgia King is very likely a daughter of Judson and Charstee King born after the 1880 census. She married a man named Sims (surname from headstone). This confirms the hypothesis that additional children were born after 1880, and the 1900 census would list them.

### Searches Conducted

| # | Search | Database/Source | Result |
|---|---|---|---|
| 1 | "Judson King 1900 census Oaklawn Township Greenville County South Carolina" | Web/multiple | Positive: Found Greenville 1900 Census transcription team page (us-census.org), confirmed FAG #8422324. No census record content (login walls). |
| 2 | "H.H. King Pelzer South Carolina" (exact match) | Web | NEGATIVE. Zero results for this exact name+location combination. |
| 3 | "King family 1900 census Oaklawn Greenville SC children born after 1880" | Web/multiple | NEGATIVE. Generic census resource pages only. |
| 4 | Find a Grave memorial #8422324 (Judson King) direct fetch | Find a Grave | BLOCKED (403). Search snippet references 1870, 1880, 1900, and 1910 census records, confirming a 1900 census record exists. |
| 5 | "Find a Grave King Fork Shoals Baptist Church Cemetery Pelzer Greenville SC" | Web/Find a Grave | Positive: Confirmed cemetery has 999 memorials. Found Georgia King Sims (1885-1974) at same cemetery via Genealogy Trails result snippet. |
| 6 | "Judson King children Greenville South Carolina genealogy" | Web/multiple | NEGATIVE. Only FAG #8422324 returned. No children enumerated in free sources. |
| 7 | "Georgia King Sims 1885 Pelzer Greenville County SC Fork Shoals" | Web/Find a Grave | Positive: Confirmed FAG #13396670 for Georgia King Sims (b. Mar 26, 1885, d. Apr 8, 1974) at Fork Shoals Baptist Church Cemetery. |
| 8 | "Charstee King OR Judson King children family tree Ancestry WikiTree Geni" | Web/multiple | NEGATIVE. No WikiTree, Geni, or public Ancestry tree found for Judson King of Greenville SC. |
| 9 | WikiTree "Judson King" 1841 South Carolina children Oaklawn | WikiTree/Web | NEGATIVE. No WikiTree profile exists for Judson King. |
| 10 | "Henry King OR Hugh King OR Hiram King OR Homer King Pelzer SC 1900 1910 1920" | Web/multiple | NEGATIVE. No matching individuals in Pelzer SC found in free databases. |

### Negative Results (Important)

- No public family tree (WikiTree, Geni, or Ancestry) exists for Judson King of Greenville SC.
- No individual named "H.H. King" appears in any free database for Pelzer, SC.
- The Greenville 1900 Census transcription project (us-census.org) page returned 403 on fetch.
- BillionGraves Fork Shoals Cemetery page returned 403.
- Rootsweb/Genealogy Trails Fork Shoals cemetery transcription returned 403.
- No expanded name search (Henry, Hugh, Hiram, Homer King) produced results for Pelzer SC.

### Analysis

1. **Georgia King Sims (1885-1974)** is buried at the same cemetery as Judson King, which strongly suggests she is a family member. Born in 1885, she was born AFTER the 1880 census. If she is Judson and Charstee's daughter, she would be their 8th child. In 1900, she would be 15 and likely living at home.
2. **H.H. King remains unidentified.** The name does not match any known child. If there were children born after 1880 (Georgia King confirms at least one), there could have been a son with initials H.H. born between 1881 and ~1899. The 1900 census is the decisive record. Alternatively, H.H. could be a grandson (son of one of the 7 known children from 1880) who was living in Pelzer by 1921.
3. **1900 census confirmed to exist**: The Find a Grave memorial #8422324 references 1870, 1880, 1900, and 1910 census records for Judson King. This means a 1900 census record has been found and indexed in Ancestry/FamilySearch, and can be retrieved with login access.
4. **Pelzer as King family hub**: Judson's burial at Fork Shoals Baptist Church Cemetery (Pelzer), H.H. King's address (Pelzer), George W. King Jr.'s residence (Pelzer, RFD #3), and Georgia King Sims' burial (Fork Shoals, Pelzer) all point to Pelzer/Fork Shoals as a major King family settlement area.

### Action Required (Human)

1. **CRITICAL**: Access 1900 US Census for Judson King in Oaklawn Township, Greenville County, SC via Ancestry.com or FamilySearch (login required). This will list all children in the household, including those born after 1880, and should identify H.H. King.
2. Access Find a Grave memorial #13396670 (Georgia King Sims) for family links, photos, and additional information.
3. Access Find a Grave memorial #8422324 (Judson King) for linked family members (may list children).
4. Search Ancestry for "King" households in Pelzer/Fork Shoals area, 1900-1920 censuses.

## 2026-04-18: Lena Fain Research (targeted person research), 10 searches

### Summary

Researched Lena Fain, newly discovered daughter of Abraham and Tobey Salk, who served as informant on Abraham's 1925 death certificate (Providence Death Certificate No. 584/226). Lena was previously unknown in all family tree databases (GEDCOM, Geni, MyHeritage). 10 web searches conducted across Find a Grave, obituary databases, Jewish Rhode Island, RIJHA, and general genealogy sources.

### Key Finding

**Alfred Fain obituary (Providence Journal, 2005, Tier 2)** names his parents as **"Nathan and Lena (Salk) Fain."** This confirms:
1. Lena's maiden name was Salk (corroborating the death certificate's identification of her as Abraham's daughter).
2. Her husband was **Nathan Fain**.
3. Their children included: **Alfred Fain** (~1912, d. 2005, age ~93; twin; co-owner of Fain's Department Store, Providence, 53 years), Alfred's twin brother (name unknown), **Jeanette (Fain) Rosofsky**, **Leonard Fain**, and **Dora (Fain) Paster**.

### Searches Conducted

| # | Search | Database/Source | Result |
|---|---|---|---|
| 1 | "Lena Fain Find a Grave Rhode Island" | Web/Find a Grave | Negative. No specific result for Lena Fain. |
| 2 | "Lena Fain Providence Rhode Island obituary" | Web/Legacy.com | Negative. General obituary pages only. |
| 3 | "Lena Salk Providence Rhode Island" | Web/general | Negative. No specific match. |
| 4 | "Fain family Lincoln Park Cemetery Warwick RI" | Web/Find a Grave | Negative for specific Fain records. Lincoln Park has 13,809 memorials. |
| 5 | "Fain OR Fein Jewish family Providence RI early 1900s" | Web/general | **Positive.** Multiple Fain family members found. Irving Israel Fain (b. 1899, RI, 11 siblings). Fain family among founders of Howell Street shul. Barnet Fain (1932-2018) obituary found. |
| 6 | "Barnet Fain Providence RI parents wife children obituary" | Web/Legacy.com, Echovita | **Positive.** Barnet "Bunny" Fain (1932-2018), son of Irving I. Fain and Miriam Grossman. |
| 7 | "Irving Fain Providence RI Salk family Jewish obituary" | Web/general | Partial. Irving I. Fain (b. Dec 18, 1899, d. Sept 1983). Also found Irving J. Fain (b. 1906), different family. |
| 8 | "Alfred Fain twin Fain's Department Store parents Nathan Lena Salk" | Web/Legacy.com | **KEY FINDING.** Alfred Fain obituary (2005) names parents as "Nathan and Lena (Salk) Fain." Co-owner of Fain's Department Store with twin for 53 years. Wife: Sylvia (Kniznik). Siblings: Jeanette Rosofsky, Leonard Fain, Dora Paster. |
| 9 | "Irving Fain Providence RI parents mother father born 1899" | Web/RI Heritage Hall of Fame, Geni | Clarified: Irving J. Fain (b. 1906, son of Alfred Fain + Elizabeth Stoneman, Teknor Apex) is DIFFERENT from Irving I. Fain (b. 1899). |
| 10 | "Lena Fain OR Lena Salk Fain Find a Grave BillionGraves RI" | Web/Find a Grave, BillionGraves | Negative. No specific memorial found. |

### Fain Family Disambiguation (Providence, RI)

Two distinct prominent Jewish Fain families in Providence identified:

**Family A: Nathan + Lena (Salk) Fain** (our connection)
- Fain's Department Store
- Children: Alfred (twin), twin brother, Jeanette Rosofsky, Leonard Fain, Dora Paster
- Possibly also Irving I. Fain (b. 1899)

**Family B: Alfred A. Fain Sr. + Elizabeth (Stoneman) Fain**
- Apex Tire Company (1924), later Teknor Apex
- Children: Irving J. Fain (1906-1970, RI Heritage Hall of Fame), Edgar, Norman M. Fain (1914-2003), Janet, Selma

These are separate families. The Salk connection is exclusively to Family A.

### Negative Results

- No Find a Grave or BillionGraves memorial found for Lena Fain or Nathan Fain.
- No obituary for Lena Fain or Nathan Fain found in web-accessible sources.
- RIJHA obituary PDFs returned 403 errors (blocked).
- JewishRhody.com, DignityMemorial.com obituary pages returned 403 errors (blocked).
- No census records directly accessed (require login).

### Files Created/Updated

| File | Action |
|---|---|
| [[Lena_Fain]] | Created. Person file with all discovered information. |
| [[Abraham_Zolly_Salk]] | Updated. Added wikilink to Lena_Fain, expanded biography, added Alfred Fain obituary to sources. |
| [[Family_Tree]] | Updated. Added Salk Family section with Lena Fain branch. |
| [[Timeline]] | Updated. Added Lena Fain events. |
| [[Research_Log]] | Updated. This entry. |

### Recommended Next Steps

1. **Human browser search**: Search Find a Grave and BillionGraves directly for "Lena Fain" and "Nathan Fain" at Lincoln Park Cemetery, Warwick, RI.
2. **Census records**: Search 1910, 1920, 1930 census for Nathan Fain household in Providence. Would provide Lena's birth year, birthplace, immigration year, and children's names.
3. **Rhode Island vital records**: RI State Archives holds death records 1853-1975 (public after 50 years). Search for Lena Fain death record.
4. **Alfred Fain's twin brother**: Identify the twin's name from the Alfred Fain 2005 obituary (Providence Journal, behind paywall).
5. **Irving I. Fain parentage**: Determine if Irving I. Fain (b. 1899) was a son of Nathan and Lena Fain or a different Fain family.

---

## 2026-04-18: Find a Grave Sweep (prompts/03-findagrave-sweep.md), 10 priority targets, ~25 searches

### Summary

Executed Find a Grave sweep for the 10 highest-value deceased persons without existing Find a Grave links. Conducted 25 web searches including direct Find a Grave queries, site-restricted searches, name variant searches, and cemetery-specific searches. Find a Grave's memorial search API returns 403 on all programmatic access, limiting results to web search engine indexing.

**Results: 0 new memorials found. All 10 targets logged as NEEDS_FINDAGRAVE in findagrave_audit.md.**

Targets searched: Morris Markel (d. 1963), Helen Brandt Markel (d. ~1975), Abraham Salk (d. 1925), Tauba Salk (d. unknown), Willis Henrietta Youngblood (d. 1952), Albert Graham Bright (d. 1961), Rebecca Moseley Long Bright (d. 1985), George Bright Sr. (d. 1873), Samuel Graham Bright (d. 1909), Jeddiah W. Clark (d. 1860).

Key finding: Lincoln Park Cemetery (Warwick RI, 13,809 records) has coverage gap for Markel and Salk families. High Street Cemetery (Rocky Mount VA, 1,372 records) has no Bright memorials despite confirmed burials. One false positive eliminated: George Bright #23550848 is an Ohio Mennonite, not our target.

See findagrave_audit.md "2026-04-18 Sweep" section for full search table and human action items.

---

## 2026-04-18: Unresolved Persons (prompts/06-unresolved-persons.md)

### Summary

Executed the Unresolved Persons prompt to catalogue all named individuals in vault documents who lack person files or clear identification. Cross-referenced 11 known unresolved persons from current session research against Family_Tree.md, person files, and vault documents.

### Results

- **Total persons tracked**: 15
- **Resolved**: 1 (Regina Kascher, person file already existed)
- **Likely Family (Priority 1)**: 8 persons (H.H. King, Lena Fain, Mattis Markel, Yosef Markel, Arthur Goodman, Max Tachner, "Morris Markel Billy", Sara Hinde Markel Lutowiska)
- **Community Connections (Priority 2)**: 7 persons (6 Ahavath Sholom founders: Barney Hirshfield, Morris Shafrin, Joseph Dressler, Harry Fishtein, David Frank, one Glantz; plus Abraham David Sternbach who is already documented as family)
- **Awaiting Browser Access (Priority 3)**: 2 persons (Jack Schlusselberg Salem MA, Peppi Schlusselberg Hewlett NY; both Dignity Memorial obituaries returned 403)
- **Cannot Identify**: 0

### Witness Network Analysis

Updated Witness_Network.md with 5 certificate signers/informants, 7 congregational affiliates, 3 marriage network entries, 10 Standing Springs charter members, 3 recurring individuals, and 5 analytical patterns (Pelzer as King hub, Ahavath Sholom network, double Tachner-Markel marriages, informant discovery pattern, Schlusselberg bridge potential).

### Files Updated

- Unresolved_Persons.md: Complete rewrite with categorized persons, resolution log, statistics
- Witness_Network.md: Complete rewrite with categorized witness/informant entries and pattern analysis
- Research_Log.md: This entry

### Next Steps (HUMAN ACTION REQUIRED)

1. Access Jack Schlusselberg obituary: dignitymemorial.com/obituaries/salem-ma/jack-schlusselberg-8066256
2. Access Peppi Schlusselberg obituary: dignitymemorial.com/obituaries/hewlett-ny/peppi-schlusselberg-6029155
3. Access Joseph Markel obituary: legacy.com/obituaries/name/joseph-markel-obituary?pid=172362045
4. Search 1900 census for Judson King household to identify H.H. King (requires login-based database)
5. Search Providence RI census/city directories for Lena Fain (nee Salk) to establish dates and family

---

## 2026-04-18: Colonial Records Search (prompts/10-colonial-records-search.md), 10 iterations, ~30 searches

### Summary

Systematic search for colonial-era records (pre-1800) for seven South Carolina/North Carolina/Virginia families with deep American roots: Cox, Clark, Baldwin, Henderson, Brasher/Brashier, Huff, and Long. Focused on land grants, deeds, court records, militia/military records, church records, and cemetery records. Many free online sources blocked automated access (403 errors), but search result snippets yielded substantial new information.

### Key New Findings

#### Cox Family

1. **William Cox Sr. Granville Land Grants (1754)**: Three Granville grants dated June 11, 1754, totaling 1,440 acres on Deep River, Orange County NC. However, these likely belong to the DELAWARE Cox family (Harmon Cox's father), NOT our William Cox Sr., based on Y-DNA evidence.
2. **CRITICAL DISAMBIGUATION**: Harmon Cox (1723-1812) confirmed as son of Delaware William Cox (1692-1767), a Regulator leader. NOT related to our William Cox Sr. per Y-DNA (R1b-I "Carolina Coxes").
3. **1790 Census**: William Cox and "Isaac Cocks" listed in Greenville District along with Brassure, Long, Lee families.
4. **Sarah Elizabeth Clark Cox** (1836-1879): Find a Grave #8304975 at Standing Springs Cemetery. Confirms Clark-Cox intermarriage.

#### Henderson Family

5. **Argaleus Hercules Henderson I**: Regulators signer 1768. 1804 deed to son John (150 acres, Chatham Co NC). 1806 estate inventory (7 images).

#### Brasher Family

6. **Thomas Brasher Sr. 1770 will**: Named 5 sons + 7 daughters including Elizabeth Jones, Sarah Pyle, Hannah Teague. Two wives: Sarah Constant and Hannah.

#### Baldwin Family

7. **Quaker migration corridor confirmed**: Chester PA to Chatham NC. Land deeds: 1780 (first grant), 1786 (to John Jr.), 1801 (to Eli).

#### Church Records

8. **Fork Shoals Baptist Church records 1813-1899**: Digitized at SC Digital Library.

### Negative Results

James Hiriam Clark: no colonial records found. Larkin Long: no WikiTree profile. William Thomas Long: no Find a Grave memorial. Ezekiel Henderson: no specific land grant plat. James Huff: no War of 1812 service found.

### Records Requiring Human Browser Access

| Source | URL | Priority |
|---|---|---|
| SC Archives State Plats 1784-1868 | archivesindex.sc.gov | HIGH |
| Cox Family History Project (all subpages) | sites.google.com/site/coxfamilyhistoryproject | HIGH |
| Greenville County Register of Deeds (Pre-1985) | greenvillecounty.org/rod/searchrecords.aspx | HIGH |
| FamilySearch Greenville County deeds microfilm | familysearch.org | HIGH |
| Fork Shoals Church records 1813-1899 | scdl.contentdm.oclc.org | MEDIUM |
| Chatham County NC marriage bonds 1772-1853 | FamilySearch catalog 191194 | HIGH |
| A Brazier/Brasher Saga (532 pp.) | FamilySearch catalog 734009 | HIGH |

## 2026-04-18: Immigration Search, All Immigrant Ancestors (10 iterations, ~30 searches)

### Summary

Executed the Immigration Search protocol (prompts/11-immigration-search.md) for all 9 identified immigrant ancestors in the family tree. Conducted approximately 30 web searches across Steve Morse One Step, Ellis Island Foundation, JewishGen EIDB, FamilySearch, Gesher Galicia, GG Archives, NARA, WikiTree, Geni, and general web sources. **All primary passenger list databases (Ancestry collection 7488, FamilySearch T715, Ellis Island Foundation, JewishGen EIDB, Steve Morse One Step) require login or paid subscription for individual record access.** No actual passenger manifest images were obtained through free web search.

### KEY NEW FINDING: Robert King II, Ship Jupiter, 1770

**Robert King II** (c. 1750, Ireland; d. 1826, Anderson County, SC) emigrated from Ireland to America on the **ship Jupiter from Larne, Ireland in 1770** (WikiTree Dolby-84, Geni King-6000000029309542831; Tier 3, user-contributed). He traveled with his father-in-law Robert King I. The family settled near Belton, Anderson County, SC by 1772. This is the first ship name identified for any immigrant ancestor in the Cox/King/Henderson South Carolina lines. No original passenger list for the Jupiter has been located; Tier 3 attribution only.

### KEY CONFIRMATION: Johann Michael Brecht, Philadelphia, October 1726

Johann Michael Brecht (1706-1794) arrived in Philadelphia in **October 1726** with his mother Anna Catherina Brecht (widow) and brother Stephan, after petitioning to emigrate on **May 6, 1726** from Schriesheim. **No formal passenger list exists**: the Pennsylvania oath lists (Strassburger and Hinke) begin in **1727**.

### Searches Conducted by Immigrant (all dated 2026-04-18)

#### Barnett (Berko) Salmanson, SS Baltic, Dec 23, 1904

| # | Query/Source | Result |
|---|---|---|
| 1 | "Berko Zalmanson" / "Berl Zalmanson" SS Baltic 1904 manifest | NEGATIVE. Ship and route confirmed. No individual record. |
| 2 | SS Baltic Dec 1904 passenger list (GG Archives) | PARTIAL. GG Archives has RMS Baltic collection. Page returned 403. |
| 3 | JewishGen EIDB "Zalmanson" / "Salmanson" | NEGATIVE. Database confirmed. Requires direct access. |
| 4 | "Barnett Salmanson" naturalization Providence RI | NEGATIVE. RI naturalization records 1907-1991 at FamilySearch (collection 2622566), NARA Boston/Waltham confirmed. |
| 5 | FamilySearch "Barnett Salmanson" / "Berko Zalmanson" | NEGATIVE. No indexed records returned. |
| 6 | "Barnett/Benjamin Salmanson" WWI draft registration | NEGATIVE for new data. Draft card already in file (Tier 1). |

**Status**: Manifest NOT located. Best next step: FamilySearch collection 2622566 (RI naturalization) or Steve Morse One Step.

#### Elizabeth (Salk) Salmanson, arrived 1897, age ~10

| # | Query/Source | Result |
|---|---|---|
| 1 | "Elizabeth Salk" / "Elizabeth Zalk" passenger manifest 1897 | NEGATIVE. 1897 Ellis Island fire complicates search. FamilySearch "Index to Passengers Lists 1897-1902" confirmed. |

**Status**: Manifest NOT located. Ellis Island fire June 15, 1897 destroyed pre-fire records. Customs Lists survive for pre-fire arrivals.

#### Abraham Salk, arrived ~1894-1898

| # | Query/Source | Result |
|---|---|---|
| 1 | Abraham Salk / Zalk passenger manifest 1894-1896 | NEGATIVE. No individual record found. |
| 2 | Salk/Zalk immigration Providence RI 1890s | NEGATIVE. Providence port had no 1890s passenger lists. Abraham likely entered via New York. |

**Status**: Manifest NOT located. Search complicated by possible name discrepancy (Hebrew name Moshe, not Abraham).

#### Morris (Mojzesz Majer) Markiel/Markel, arrived ~1928

| # | Query/Source | Result |
|---|---|---|
| 1 | "Markel" / "Markiel" passenger manifest 1927-1929 Poland | NEGATIVE. |
| 2 | "Morris Markel" naturalization Rhode Island | NEGATIVE. FamilySearch collection 2622566 confirmed. |
| 3 | "Markel" 1930 census West Warwick RI | NEGATIVE. Requires direct database access. |

**Status**: Manifest NOT located. Morris's naturalization petition is the best alternative.

#### Helen (Dwora Goldbaum/Brand) Markel, arrived ~1928

Would be on same manifest as Morris. Not independently searched.

#### Florence (Sura Feiga) Markel, arrived 1923, ship "The Liberty"

| # | Query/Source | Result |
|---|---|---|
| 1 | "Florence Markel" / "Sura Feiga" passenger manifest 1923 | NEGATIVE. |
| 2 | "The Liberty" ship 1923 transatlantic passenger | NEGATIVE. No transatlantic vessel named "The Liberty" confirmed for 1923. Ship name likely a family memory error. |
| 3 | Gesher Galicia Mermelstein family page | Found at geshergalicia.org/families/?id=mermelstein/. Returned 403 on fetch. |

**Status**: Manifest NOT located. Ship name unconfirmed and likely incorrect. Ellis Island database (1892-1924) should contain her record under Yiddish name.

#### Michael Kascher, arrived ~1910s, from Waldhutten, Transylvania

| # | Query/Source | Result |
|---|---|---|
| 1 | "Michael Kascher" immigration Transylvania Youngstown Ohio | NEGATIVE. |
| 2 | Kascher family Waldhutten immigration Ohio | PARTIAL. Siebenbuerger.de confirms Anna Binder Kascher connection. No passenger list. |
| 3 | "Michael Kascher" naturalization Mahoning County Ohio | NEGATIVE. Mahoning County Clerk (330-740-2114) holds records. FamilySearch has Ohio Northern District Court records 1916-1931. |

**Status**: Manifest NOT located. Michael married in Beaver, PA May 10, 1913, confirming pre-1913 arrival.

#### Rosina Falk, from Petersdorf, Transylvania

| # | Query/Source | Result |
|---|---|---|
| 1 | "Rosina Falk" / "Rasina Falk" immigration Petersdorf Transylvania | NEGATIVE. |

**Status**: Manifest NOT located. Married Michael Kascher May 10, 1913 in Beaver, PA, so was in America by then.

#### Johann Michael Brecht, arrived October 1726, Philadelphia

| # | Query/Source | Result |
|---|---|---|
| 1 | "Johann Michael Brecht" Philadelphia 1726 Schriesheim Palatinate | POSITIVE. WikiTree Brecht-58 confirms petition May 6, 1726; arrival October 1726. |
| 2 | PA German Pioneers ship lists pre-1727 | CONFIRMED. Formal oath lists begin 1727. No 1726 list exists. |
| 3 | Brecht Schriesheim ship name 1726 | NEGATIVE. Ship name not recorded in any consulted source. |

**Status**: Immigration CONFIRMED. No formal passenger list. Ship name unrecoverable.

#### Robert King II (BONUS), arrived 1770, from Ireland

| # | Query/Source | Result |
|---|---|---|
| 1 | "Robert King" immigration Ireland 1770 SC | **POSITIVE (Tier 3).** Ship Jupiter from Larne, Ireland, 1770. Traveled with father-in-law Robert King I. |
| 2 | "Robert King" ship Jupiter Larne 1770 passenger list | PARTIAL. Ship confirmed. No original passenger list located. |

**Status**: Ship name IDENTIFIED (Jupiter, Larne, 1770). NEW DATA. No passenger list.

### Summary Table

| Immigrant | Ship | Arrival | Manifest? | Next Step |
|---|---|---|---|---|
| Barnett Salmanson | SS Baltic | Dec 23, 1904, NY | NO | RI naturalization (FamilySearch 2622566) |
| Elizabeth Salk | Unknown | 1897, NY | NO | FamilySearch passengers 1897-1902 |
| Abraham Salk | Unknown | ~1894-96, NY | NO | Steve Morse Gold Form |
| Morris Markel | Unknown | ~1928, NY | NO | RI naturalization (FamilySearch 2622566) |
| Helen Markel | Unknown | ~1928 (w/ Morris) | NO | Same as Morris |
| Florence Markel | "The Liberty" (unconfirmed) | 1923, NY | NO | Steve Morse for Markel female ~14, 1923 |
| Michael Kascher | Unknown | ~1910-12, NY | NO | Mahoning County naturalization |
| Rosina Falk | Unknown | ~1910-12 | NO | Search Falk from Austria-Hungary |
| J.M. Brecht | Unknown (pre-1727) | Oct 1726, Phila. | N/A | Ship name unrecoverable |
| Robert King II | **Jupiter** | 1770, SC | NO | SC Archives |

### Negative Results (All Logged)

1. No passenger manifest image located for any immigrant through free web search.
2. No naturalization record document located through free web search.
3. All primary databases (Ellis Island Foundation, JewishGen EIDB, FamilySearch, Ancestry) require login or subscription.
4. No ship named "The Liberty" confirmed as a 1923 transatlantic passenger vessel.
5. No formal passenger list exists for pre-1727 Philadelphia arrivals.
6. GG Archives SS Baltic page returned 403.
7. Gesher Galicia Mermelstein family page returned 403.

### Files Updated

- [[Robert_King_II]]: Ship Jupiter from Larne, Ireland, 1770 (NEW DATA)
- [[Johann_Michael_Brecht]]: Immigration search confirmation
- [[Barnett_Salmanson]]: Immigration search status update
- [[Morris_Markel]]: Immigration search status, naturalization references
- [[Florence_Markel_Mermelstein]]: "The Liberty" ship name analysis
- [[Michael_Kascher_Transylvania]]: Immigration search status
- [[Research_Log]]: This entry

---

## 2026-04-18: Open Question Resolution (prompts/08-open-question-resolution.md, ~30 searches)

### Summary

Executed Open Question Resolution prompt targeting 5 open questions: OQ #3 (Kerben/Corbin King), OQ #8 (Krauss/Krause Binder), OQ #15 (Charstee King maiden name), OQ #17 (H.H. King identity), OQ #19 (James Youngblood generation). Two questions partially resolved; three updated with significant new data.

### Searches Conducted

| # | Target OQ | Query/Source | Result |
|---|---|---|---|
| 1 | OQ #3 | "Corbin King" 1860 census Greenville County SC | NEGATIVE. No individual named Corbin King found. |
| 2 | OQ #3 | "Corbin King" Anderson/Greenville SC 1800s | NEGATIVE. No match. Peter Corbin (1749-1794, VA to Anderson SC) identified as unrelated Corbin family. |
| 3 | OQ #3 | James King Sr 1840 census Anderson SC | PARTIAL. James King age 82 in 1840 Census of Pensioners for Revolutionary Service. |
| 4 | OQ #3 | James King pensioner 1840 Anderson SC Revolutionary War | PARTIAL. Census of Pensioners records exist but specific entry not accessible. |
| 5 | OQ #3 | Robert King descendants Anderson SC | **MAJOR FIND.** Robert King II (c.1750-1826) identified as founding patriarch, 23 children by Tabitha Dolby. WikiTree King-12061, Geni, Find a Grave #48870135. |
| 6 | OQ #3 | Robert King II children list | **POSITIVE.** 13 named children: Hannah, Peter Sr., Grace (Evans), James, Pricilla, Robert III, William, Tabitha (White), John, Nancy, Josiah, Sabra Ann (Hall), Mary Ann. **Corbin NOT among them.** |
| 7 | OQ #3 | George Washington King born 1815 father James King | **MAJOR FIND.** GWK confirmed as son of James King + Mary Parker, born Belton Anderson SC, died 1887, buried Washington Cemetery, Ware Place, Greenville Co. Geni Tier 3. |
| 8 | OQ #3 | James King + Mary Parker children | PARTIAL. Siblings of GWK: Sarah (Sallie) Ann Fant, John King, Elizabeth Ann Haynie. Not all children documented. |
| 9 | OQ #15 | "Charstee Cooley" King SC | **MAJOR FIND.** Find a Grave #8422324 photo caption: "Judson and Charstee Cooley King 1908 taken in Pelzer SC by RL Snipes." Maiden name Cooley (Tier 2). |
| 10 | OQ #15 | Cooley family Greenville County SC | POSITIVE. Jacob Cooley Sr. (1735-1820) settled Greenville by 1790. Hiram Cooley (1796-1864) had plantation there. Family well established in area. |
| 11 | OQ #15 | Hiram Cooley Greenville SC children daughters | PARTIAL. Hiram Cooley documented but specific daughter names not accessible (403). |
| 12 | OQ #15 | "Charstee Cooley" OR "Charity Cooley" married King | NEGATIVE. No specific marriage record found via web search. |
| 13 | OQ #17 | "H.H. King" Pelzer SC 1900 1910 census | NEGATIVE. No individual match found. |
| 14 | OQ #17 | Judson King children H.H. King Pelzer | NEGATIVE. No specific child with H. initials identified. |
| 15 | OQ #17 | King family Pelzer Anderson SC 1900 | NEGATIVE. General resource pages only. |
| 16 | OQ #8 | "Krauss Binder" OR "Krause Binder" Transylvania Kreisch | **POSITIVE.** Siebenbuerger.de confirms "Petrus KRAUSS BINDER" as Martin Binder's father. |
| 17 | OQ #8 | "Petrus Krauss" Binder VGSS database | **POSITIVE.** VGSS record p=5502 exists (403 on access). Web results consistently name Petrus, not Johann. |
| 18 | OQ #8 | VGSS "Krauss Binder" Kreisch children | PARTIAL. Geneanet records also reference the family. All 403. |
| 19 | OQ #19 | James Youngblood Bibb County AL 1830-1850 | NEGATIVE. 1830/1840 census pages all 403. |
| 20 | OQ #19 | Youngblood-746 WikiTree James 1740 1792 sons | POSITIVE. James (c.1740-1792) wrote will Aug 1791. Sons: Jeremiah, Thomas, Eli. Died too early to be William Henry's father. |
| 21 | OQ #19 | "William Henry Youngblood" born 1828 Alabama father James | NEGATIVE. No direct connection found. |
| 22 | OQ #19 | James Jonathan Youngblood 1810 1889 WikiTree Bibb AL | PARTIAL. Different branch: son of Jonathan (1766-1852), born Warren Co TN, married Leah Jane Elam 1833. Not the right James. |
| 23 | OQ #19 | James Youngblood 1817 1909 Find a Grave | NEGATIVE. Born Marion County MS, different family entirely. |
| 24 | OQ #19 | FamilyTreeDNA Youngbloods of Edgefield background | 403. |
| 25 | OQ #3 | Fork Shoals Baptist Church Cemetery King burials | PARTIAL. Only Judson King memorial confirmed. Full cemetery listing 403. |
| 26 | OQ #15 | Charstee King Find a Grave Fork Shoals | PARTIAL. Confirmed photo caption text. No separate memorial for Charstee. |
| 27 | OQ #3 | Judson King George Washington King connection | PARTIAL. Geni and Find a Grave both document relationship. |
| 28 | OQ #3 | Robert King II 1750 Anderson SC 13 children full list | CONFIRMED. Multiple sources agree on child list. |
| 29-30 | Multiple | Verification searches | Confirmed key findings. |

### Key Findings

1. **Robert King II (c. 1750-1826)** identified as 5th-generation patriarch: emigrated from Ireland 1770, settled Anderson County SC, fought at Kings Mountain, had 23 children by Tabitha Dolby (13 named). Son James King (b. ~1788) was father of George Washington King (1815-1887), who was Judson King's father.
2. **Charstee King's maiden name likely Cooley**: Find a Grave photo caption (Tier 2) identifies her as "Charstee Cooley King." The Cooley family was established in Greenville County since 1790.
3. **Petrus Krauss Binder confirmed** as Martin Binder's father by multiple web sources. GEDCOM's "Johann" contradicted.
4. **Corbin King NOT found** among Robert King II's 13 named children, leaving the Kerben/Corbin King branch unconnected.
5. **H.H. King** remains unidentified; requires 1900 census access.
6. **James Youngblood (c.1740-1792)** definitively eliminated as William Henry Youngblood's father. The correct James is likely a grandson in a subsequent generation.

### Negative Results (Logged)

- No "Corbin King" found in any SC census or genealogy database
- No "H.H. King" found in Pelzer SC via web search
- No "Johann Krause Binder" found in any source other than the GEDCOM
- 1830/1840 Bibb County AL census pages inaccessible (403)
- FamilyTreeDNA Youngbloods project inaccessible (403)
- Fork Shoals cemetery complete listing inaccessible (403)

---

## 2026-04-18: Goldbaum Deep Search in Lisko/Lesko Galician Jewish Databases (15 searches)

### Summary

Systematic search for ANY Goldbaum connected to the Brandt family or to the Sambor/Tarnopol/Lisko region across all available Galician Jewish databases, immigration records, Holocaust databases, Yizkor books, and Geni genealogy projects. **No Goldbaum individual from Lesko/Lisko was found in any database.** All major database pages (JewishGen, Gesher Galicia, JRI-Poland, Yad Vashem, USHMM, Geni) returned 403 on automated access, requiring human browser-based searches.

### Context

The 1919 AGAD marriage record (Fond 424, File 212) names "Brancia GOLDBAUM" of Lisko as mother of the bride Dwora, and "Józef BRAND" of Lisko as father. This Tier 1 record places the Goldbaum/Brand family firmly in Lisko (Lesko), Sanok district. This session attempted to find ANY additional Goldbaum or Brand records from the Lesko area.

### Searches Conducted (15 searches)

| # | Query/Source | Result |
|---|---|---|
| 1 | Goldbaum in Lisko/Lesko Jewish records (JewishGen, Gesher Galicia, JRI-Poland, FamilySearch) | PARTIAL. Lesko has Gesher Galicia town page (12 FamilyFinder entries), JRI-Poland town page with surname list, Sanok sub-archive records. All 403. |
| 2 | Goldbaum + Brand/Brandt in Galicia marriage records | NEGATIVE. No specific marriage record. WMJGS confirms most Galician Jews had religious marriages only. |
| 3 | Yad Vashem: Goldbaum from Lesko/Lisko | NEGATIVE (403 on all access). |
| 4 | Yad Vashem: Brand/Brandt from Lesko/Lisko | NEGATIVE (403 on all access). |
| 5 | Lesko/Lisko Jewish community history and family names | POSITIVE. Population 2,400 (1921, 63%). Cemetery 2,000+ headstones. 3,000 residents on murder list in former synagogue. |
| 6 | Lesko Yizkor Book Goldbaum/Brandt entries | POSITIVE (structure). Necrology pp. 467-489 translated by JewishGen. All pages 403. |
| 7 | JewishGen Goldbaum in Lesko/Lisko district | NEGATIVE (403 on necrology database). |
| 8 | "Dwora Goldbaum" specifically | NEGATIVE. No results in any database. |
| 9 | Goldbaum immigration to Rhode Island or New York | NEGATIVE. Consistent with Brina never emigrating. |
| 10 | Geni: Goldbaum families in Lisko/Lesko area | PARTIAL. Geni project #28979 "Jewish Families from Lesko" lists Goldstoff, Heller, Rand, Schechter, Taub. **Goldbaum NOT listed.** |
| 11 | "Helen" as Americanization of "Dwora" | CONFIRMED PLAUSIBLE. No fixed rules; atypical but within norms. |
| 12 | Brand/Brandt families in Lisko/Lesko | PARTIAL. Gesher Galicia Brandt families page confirmed. No specific individuals from Lesko. |
| 13 | Gesher Galicia / All Galicia Database for Lesko records | PARTIAL. 900,000+ records, Lesko included. All 403. |
| 14 | Goldbaum-Brandt marriage in Galician records | NEGATIVE. AGAD Fond 300, Sanok sub-archive are repositories. |
| 15 | Lesko Jewish cemetery documentation | PARTIAL. 2,000+ headstones. No Goldbaum/Brand identified. |

### Key Findings

1. **Goldbaum NOT listed among documented Lesko Jewish families on Geni** (project #28979). Documented families: Goldstoff, Heller, Rand, Schechter, Taub.
2. **Lesko Yizkor Book necrology (pp. 467-489)** is the single most accessible check for Brina Goldbaum's fate. Translated by JewishGen, blocked on automated access. HUMAN ACTION REQUIRED.
3. **JewishGen Yizkor Necrology Database** is searchable by surname and would show Goldbaum across ALL indexed Yizkor books. HUMAN ACTION REQUIRED.
4. **3,000 murdered residents list displayed in former Lesko synagogue** could contain Goldbaum/Brand names.
5. **Sanok sub-archive** (AP Rzeszow, Oddzial Sanoku) holds Lesko Jewish vital records.
6. **Dwora-to-Helen name Americanization**: Confirmed atypical but plausible. No fixed equivalents existed.
7. **All Galicia Database**: Lesko is included in 900,000+ records. Free, no login. HUMAN ACTION REQUIRED.

### Negative Results (All Logged)

1. No Goldbaum individual from Lesko/Lisko found in ANY database.
2. No Brand/Brandt individual from Lesko/Lisko found in ANY database.
3. No Goldbaum-Brand/Brandt marriage record found.
4. No "Dwora Goldbaum" found in any database.
5. No Goldbaum immigration to Rhode Island or New York found.
6. No Goldbaum in Yad Vashem or USHMM web snippets for Lesko.
7. Goldbaum NOT listed among documented Lesko families on Geni.
8. All database pages returned 403 on automated fetch.

### Files Updated

- [[Brina_Goldbaum]]: Added full session log and revised research leads
- [[Helen_Brandt]]: Added summary of session findings
- [[Joseph_Brandt]]: Added summary of session findings
- [[Mojzesz_Majer_Markiel]]: Added cross-reference note
- [[Research_Log]]: This entry
- [[Open_Questions]]: Updated relevant questions

---

## 2026-04-18: Dwora Goldbaum/Brand Identity Analysis (15 searches)

### Summary

**MAJOR FINDING**: Dwora Goldbaum/Brand (bride in the 1919 Sambor marriage banns, AGAD Fond 424 File 212) is almost certainly the same person as Helen Brandt Markel, wife of Morris (Mojzesz Majer) Markiel. Every testable data point matches: same groom, father Józef Brand = Joseph Brandt, mother Brancia Goldbaum = Brina Goldbaum. The "Goldbaum/Brand" dual surname in the 1919 record is explained by the Galician "false" (fałsz) notation: Dwora's legal surname was Goldbaum (mother's maiden name, standard for children of religiously but not civilly married parents), with Brand as the father's surname alias.

**SECOND MAJOR FINDING**: Helen Brandt's origin town is **Lisko (Lesko)**, not Tarnopol. The previous inference that the Goldbaum/Brandt family was from Tarnopol (based on the Goldbaum surname appearing in the Tarnopol 1910 Census) is superseded by Tier 1 evidence from the 1919 marriage banns, which explicitly records both parents as "of Lisko." This changes the entire geographic research focus for the Brandt/Goldbaum line.

**THIRD FINDING**: Helen's Yiddish/Hebrew name was **Dwora** (Devorah). "Helen" was her Americanized name, adopted upon immigration (~1928). This is an atypical Americanization (Dwora usually becomes Dorothy or Dora; Helen usually corresponds to Hena/Chana), but such non-standard choices were common among Jewish immigrants.

### Implications

1. Helen Brandt's confidence upgraded from Speculative to **Moderate Signal** (1 Tier 1 source confirming parents' names, origin town, and marriage date).
2. Brina Goldbaum's origin corrected from Tarnopol (inference) to **Lisko** (Tier 1).
3. Research focus for Brand/Goldbaum records shifts from Tarnopol archives to **Lesko records at the Sanok sub-archive** (Archiwum Panstwowe w Rzeszowie, Oddzial w Sanoku) and the **Lesko (Lisko) Yizkor Book**.
4. The Lesko Jewish community (~2,400 Jews in 1921, 63% of population) was entirely exterminated in August 1942. If Brina Goldbaum remained in Lesko, she was murdered in this deportation.
5. Helen's birth year estimate revised to **~1894-1897** (consistent with both the 1919 marriage and the 1940 US Census).

### Searches Conducted (15 total)

| # | Query/Source | Result |
|---|---|---|
| 1 | AGAD Fond 424 details via Gesher Galicia | CONFIRMED: Fond 424 contains marriage banns. Sambor among 23 completed towns. 403 on page fetch. |
| 2 | Goldbaum/Brand/Brandt in Lisko/Lesko (Gesher Galicia) | Lesko town page exists, 12 FamilyFinder entries. Jewish pop. 1,976 (1880), 2,400 (1921). 403 on fetch. |
| 3 | Yiddish name "Helen" vs "Dwora" Americanization | Dwora = Dorothy/Dora typically. Helen = Hena/Henya/Chana. No fixed rules. |
| 4 | Lesko Yizkor Book details | CONFIRMED: Ed. Mark & Friedlander, Tel Aviv 1965, 516 pp, Hebrew/Yiddish. JewishGen translation available. USHMM #33405. |
| 5 | Galician "false/fałsz" surname notation | CONFIRMED: Alias notation for children of religiously married parents. Mother's maiden name = legal name; father's surname = alias. |
| 6 | "Brancia" as variant of "Brina" | CONFIRMED: Same name cluster (Breindel/Brayn-). Polish diminutive vs Yiddish form. |
| 7 | All Galicia Database for Brand in Lesko | 900,000+ records, Lesko included. 403 on search. HUMAN ACTION REQUIRED. |
| 8 | Yad Vashem Goldbaum from Lesko | No specific individuals via web search. HUMAN ACTION REQUIRED. |
| 9 | Lesko Jewish vital records at Sanok archive | CONFIRMED: AP Rzeszow, Oddzial Sanok holds records from 8 towns including Lesko. |
| 10 | JRI-Poland Lesko town page and surnames list | Page confirmed at jri-poland.org/town/lesko/. Surnames list exists. 403 on fetch. HUMAN ACTION REQUIRED. |
| 11 | "Józef Brand" in Lisko/Lesko records | No specific individual match. General Lesko history only. |
| 12 | Lesko Holocaust timeline | Jews deported August 1942, exterminated. |
| 13 | "Brancia Goldbaum" in any database | No web-accessible results. Name too specific for web search. |
| 14 | Lesko/Lisko community records and families | Lesko Jewish community from mid-16th century. Cemetery from 17th century. |
| 15 | Dwora/Dora Markiel in Sambor/Lisko records | No additional records beyond 1919 marriage banns via web search. |

### Updated Files

- [[Mojzesz_Majer_Markiel]]: Added full identity analysis section, updated follow-up priorities
- [[Helen_Brandt]]: Added Tier 1 source, updated vital information with Yiddish name, birthplace (Lisko), parents' names from Tier 1, revised birth year estimate, updated data discrepancies, upgraded confidence to Moderate
- [[Brina_Goldbaum]]: Corrected origin from Tarnopol to Lisko, added Tier 1 source, updated biography and geographic context
- [[Research_Log]]: This entry
- [[Open_Questions]]: Updated OQ #21 and #34

---

## 2026-04-18: Brandt and Goldbaum Surnames in Tarnopol District Jewish Census and Vital Records

### Summary

Focused research (13 web searches, 12 fetch attempts) on the Brandt and Goldbaum surnames in Tarnopol (Ternopil) district Jewish records. Both surnames are confirmed present in the Gesher Galicia Tarnopol 1910 Jewish Census surname list. The research targeted census data, vital records, Yizkor books, Geni projects, EHRI archival collections, Yad Vashem names database, and immigration records.

**Major finding**: A **Moses Goldbaum** is documented as a birth witness in Tarnopol Jewish vital records across multiple years (1879, 1880, 1889), serving as witness for children's births in the Wolfthal family. This is the first named Goldbaum individual located in Tarnopol primary source records. Moses Goldbaum's activity as a witness across a decade indicates he was an established member of the Tarnopol Jewish community and may be a relative (father, uncle, brother) of Brina Goldbaum.

**Second finding**: The All Galicia Database contains indexed data not only from the 1910 Tarnopol Jewish Census but also from the 1880 and 1890 census index books (held at AGAD Warsaw). All three censuses are searchable for free. The 1910 census includes: house numbers, street addresses, professions (Polish with English translation), ages, relationships within household, place of birth, when the individual moved to Tarnopol, information about religious vs. civil marriages, and crucially, details on former residents who had **emigrated** (including those listed as "absent in America" or "New York, America").

**Third finding**: AGAD Warsaw holds approximately 3,000 Jewish metrical books for the Tarnopol area (covering 1877 to 1911), and DATO in Ternopil holds mid-19th century marriage records plus the 1910 census originals. These are the repositories where Brandt and Goldbaum vital records (births, marriages, deaths) would be found.

### Searches Conducted (13 searches, 12 fetch attempts)

| # | Query/Source | Result |
|---|---|---|
| 1 | "Brandt Jewish family Tarnopol Galicia genealogy records" | PARTIAL. Confirmed Gesher Galicia Brandt families page (geshergalicia.org/families/?id=brandt/). CJH Ulrich Skaller Collection ME 605 (Brandt family in Galicia) re-confirmed. All Galicia Database has 900,000+ records. |
| 2 | "Goldbaum Jewish family Tarnopol Galicia genealogy records" | PARTIAL. Goldbaum confirmed in Tarnopol 1910 Census surname list. Ancestry collection 3132 (Galicia Jewish BMD 1789-1905) confirmed relevant. |
| 3 | Tarnopol 1910 Jewish Census data online (Gesher Galicia) | POSITIVE. Census is freely searchable on All Galicia Database (search.geshergalicia.org). ~14,000 names. Includes emigration data: people "absent" in "America" or "New York, America." 1880 and 1890 index books also indexed. |
| 4 | site:geni.com Brandt Tarnopol Jewish Galicia | PARTIAL. Found Geni project "Jewish Families from Ternopil (Tarnopol)" (#15742) and "Tarnopol Ghetto" project (#27298). No specific Brandt profiles in search snippets. |
| 5 | site:geni.com Goldbaum Tarnopol Ternopil | **POSITIVE.** Moses Goldbaum documented as birth witness for Wolfthal family children in Tarnopol (1879, 1880, 1889). 916 Goldbaum profiles on Geni. Geni surname page at geni.com/surnames/goldbaum. |
| 6 | Tarnopol Yizkor book Brandt Goldbaum JewishGen | PARTIAL. Tarnopol Yizkor Book confirmed (JewishGen Press, ed. Korngruen, trans. Kutten, name indexer Holzman, 358 pp.). Yiddish Book Center has digitized original. No specific Brandt/Goldbaum matches in web snippets. |
| 7 | JewishGen Tarnopol vital records index | PARTIAL. AGAD holds ~3,000 Jewish metrical books for Tarnopol area (1877-1911). DATO holds mid-19th century marriage records + 1910 census. JewishGen JOWBR has some Tarnopol burial records. |
| 8 | "Brandt" OR "Brand" Tarnopol Galicia immigration America | PARTIAL. 1910 Census notes emigration: people "absent" in "America." No specific Brandt immigration match. |
| 9 | EHRI portal Tarnopol Jewish community records | **POSITIVE.** Three key archival collections: (a) Jewish Community in Tarnopol (Sygn. 110) at USHMM; (b) DATO: Soviet Extraordinary Commission reports, Jewish organizations 1921-1939, community records 1925-1938; (c) Ternopil Oblast Archive: census/registration of Jews, forced labor name lists, Judenrat activities, confiscated property lists. |
| 10 | "Goldbaum" "Brandt" marriage Tarnopol Galicia | NEGATIVE. No specific marriage record found via web search. AGAD metrical books and DATO mid-19th century marriage records are the repositories. |
| 11 | "Joseph Brandt" Tarnopol Jewish Galicia | NEGATIVE for Joseph Brandt specifically. CJH Brandt family collection re-confirmed. |
| 12 | "Moses Goldbaum" Tarnopol witness birth records | **POSITIVE (Tier 1 via indexed vital records).** Moses Goldbaum witnessed births: Josef Dawid Wolfthal's daughter Malie (1879); Chune Wolfthal's daughters Beile Ruchel (1880) and Ester (1889); Herman Wolfthal's daughter Rosa. Wolfthal family were musicians from Galicia; Herman was Tysmenytsia town cantor. |
| 13 | Yad Vashem Goldbaum Tarnopol Holocaust victim | NEGATIVE (no specific match in web snippets). Browser access required at collections.yadvashem.org. |

### Negative Results (All Logged)

1. No specific "Joseph Brandt" from Tarnopol found in any database.
2. No Brandt-Goldbaum marriage record located via web search.
3. No Brandt or Goldbaum individuals found in Yad Vashem web search snippets (database requires browser access).
4. No Brandt or Goldbaum entries found in Tarnopol Yizkor Book via web search (book requires manual name index check).
5. No Brandt immigration records from Tarnopol located.
6. All Gesher Galicia pages, Geni project pages, JRI-Poland town page, EHRI portal detail pages returned 403 on automated fetch.

### Key New Data Points

1. **Moses Goldbaum (Tarnopol, active 1879-1889)**: First named Goldbaum individual in Tarnopol primary records. Birth witness for Wolfthal family. Contemporary of Brina Goldbaum's estimated father's generation.
2. **Three Tarnopol censuses searchable (1880, 1890, 1910)**: All indexed in free All Galicia Database.
3. **Emigration data in 1910 census**: People who left Tarnopol permanently are documented, including those in "America."
4. **DATO Ternopil holds mid-19th century marriage records**: Goldbaum-Brandt marriage would be in these records.
5. **EHRI archival collections**: Three distinct collections with Tarnopol Jewish community records spanning 1874-1943.
6. **Geni "Tarnopol Ghetto" project (#27298)**: May contain Brandt or Goldbaum victim profiles.

## 2026-04-18: RIJHA Obituary Search for Morris and Helen Markel

### Summary

Conducted 12 targeted searches for Morris Markel (~d. 1963) and Helen Brandt Markel (~d. 1970s) obituaries through the Rhode Island Jewish Historical Association (RIJHA), Find a Grave, BillionGraves, Providence Journal archives, and general web sources. **No obituary text was located.** All RIJHA resources (obituary PDFs, Jewish Voice Herald indices, Voice and Herald newspaper archives) returned 403 errors on programmatic access. Find a Grave direct memorial searches also returned 403. No Find a Grave memorials exist for either Morris or Helen Markel in web search results.

### Key Discovery: RIJHA Voice and Herald Newspaper Archive Structure

The RIJHA has digitized the full run of the Jewish Voice and Herald (formerly the Rhode Island Herald). Individual issues are available as PDFs organized by year (e.g., rijha.org/voice-and-herald-1967/). The obituary collection is a separate set of PDFs organized alphabetically by surname (e.g., rijha.org/wp-content/uploads/Obituaries/M%20Obituaries.pdf). Additionally, RIJHA maintains searchable indices of the Jewish Voice Herald at rijha.org/collections/periodicals/jewish-voice-herald-indices/. All of these require browser access.

### Key Discovery: Joseph Markel Obituary on Legacy.com

A Joseph Markel obituary exists at legacy.com/obituaries/name/joseph-markel-obituary?pid=172362045. This could be Joseph Harold Markel (Morris and Helen's son, b. ~1932). The page returned 403 on fetch. HUMAN ACTION REQUIRED: Access this obituary in browser. If this is the correct Joseph Harold Markel, it would likely name his parents (Morris and Helen) and siblings.

### Key Discovery: Peppi Schlusselberg Obituary

A Peppi Schlusselberg obituary exists at dignitymemorial.com/obituaries/hewlett-ny/peppi-schlusselberg-6029155 (Hewlett, NY). If Anne Markel married Sol Schlusselberg, Peppi could be Anne's mother-in-law or a relative in the Schlusselberg family. The page returned 403 on fetch. HUMAN ACTION REQUIRED: Access this obituary in browser. Check for any Markel family connections.

### Key Discovery: RI Death Records 1853-1973

The Rhode Island Department of State Archives holds Death Records 1853-1973 (catalog.sos.ri.gov/repositories/2/archival_objects/1920). Morris Markel's 1963 death record would be in this collection. Records over 50 years old are public. HUMAN ACTION REQUIRED: Contact RI State Archives to request Morris Markel death record (d. 1963, West Warwick). This would provide exact death date, cause, informant name (likely Helen), and parents' names.

### Searches Conducted (all dated 2026-04-18)

| # | Query/Source | Result |
|---|---|---|
| 1 | RIJHA "M" Obituaries PDF (rijha.org/wp-content/uploads/Obituaries/M%20Obituaries.pdf) | **403 on fetch.** This PDF is the single most likely source for Morris Markel's obituary from the Jewish Herald Voice. HUMAN ACTION REQUIRED. |
| 2 | Web search: "Morris Markel" obituary Rhode Island 1963 | **NEGATIVE.** No obituary found. General RI obituary archive links only. |
| 3 | Web search: "Helen Markel" obituary Rhode Island | **NEGATIVE.** One result for Helen G. Markel at Blileys funeral home (Richmond, VA) is unrelated. |
| 4 | Helen G. Markel obituary at blileys.com | **403 on fetch.** Blileys is a Richmond, VA funeral home. Almost certainly a different person. |
| 5 | Web search: "Morris Markel" obituary "West Warwick" rabbi | **NEGATIVE.** No relevant results. |
| 6 | Web search: "Helen Markel" death "West Warwick" OR "Warwick" Rhode Island | **NEGATIVE.** General obituary directory pages only. |
| 7 | Find a Grave search: Morris Markel at Lincoln Park Cemetery (#430349) | **403 on direct search.** No memorial found via web search either. |
| 8 | Find a Grave search: Helen Markel at Lincoln Park Cemetery (#430349) | **403 on direct search.** No memorial found via web search either. |
| 9 | Web search: site:rijha.org Markel obituary | **PARTIAL.** Confirmed RIJHA obituary collection structure (alphabetical PDFs). M Obituaries PDF URL confirmed. Indices page confirmed at rijha.org/collections/periodicals/jewish-voice-herald-indices/. |
| 10 | Web search: "Markel" "Lincoln Park Cemetery" BillionGraves Warwick | **NEGATIVE.** No specific Markel results on BillionGraves. |
| 11 | RIJHA Jewish Voice Herald indices page | **403 on fetch.** |
| 12 | RIJHA Voice and Herald 1967 page | **403 on fetch.** |

### Updated Action Items (HUMAN ACTION REQUIRED)

**Priority 1 (Immediate, browser-based):**
1. **RIJHA "M" Obituaries PDF**: Open rijha.org/wp-content/uploads/Obituaries/M%20Obituaries.pdf in browser. Use Ctrl+F to search for "Markel". Should contain Morris Markel's obituary (~1963) and possibly Helen Markel (~1970s) from the Jewish Herald Voice / Rhode Island Herald.
2. **RIJHA Jewish Voice Herald Indices**: Open rijha.org/collections/periodicals/jewish-voice-herald-indices/ in browser. Search indices for "Markel" entries. These would point to specific newspaper issues containing Markel family news.
3. **Joseph Markel obituary**: Open legacy.com/obituaries/name/joseph-markel-obituary?pid=172362045 in browser. Determine if this is Joseph Harold Markel (b. ~1932, son of Morris and Helen).
4. **Find a Grave search**: Search findagrave.com for Morris Markel and Helen Markel at Lincoln Park Cemetery, Warwick, RI (cemetery #430349). Also try "Markel" surname search within the cemetery.

**Priority 2 (Phone/mail request):**
5. **Lincoln Park Cemetery office (401-737-5333)**: Call to confirm Morris Markel and Helen Brandt Markel burials, request section/plot numbers and dates.
6. **RI State Archives death record**: Request Morris Markel death record (d. 1963, West Warwick, Kent County, RI) from catalog.sos.ri.gov. Records 1853-1973 are held. Would provide exact death date, informant, parents.
7. **RI Dept of Health**: Request Helen Markel death certificate (estimated d. ~1975, Rhode Island). Records over 50 years old are public. Would list parents' names (Joseph Brandt and Brina Goldbaum if GEDCOM is correct).

**Priority 3 (Additional leads):**
8. **Peppi Schlusselberg obituary**: Open dignitymemorial.com/obituaries/hewlett-ny/peppi-schlusselberg-6029155 in browser. Check for Markel family connections.
9. **Jack Schlusselberg obituary** (from prior session): Open dignitymemorial.com/obituaries/salem-ma/jack-schlusselberg-8066256 in browser. If Anne Markel Schlusselberg's son, may name Helen as grandmother.
10. **Heritage Hub / Providence Journal archives**: Access via Providence Public Library (provlib.org/databases/heritage-hub-providence-journal-obituaries/). Search for Markel obituaries from 1963 and 1970s. May require library card.

## 2026-04-17: Holocaust Records Search (All Family Lines Above Thelma Markel)

### Summary

Systematic search of Holocaust records for victims from both the Markel/Frei side (Sambor/Waniowice) and the Brandt/Goldbaum side (Tarnopol). Searched across Yad Vashem, USHMM, JewishGen Yizkor databases, Sambor Yizkor Book, Tarnopol Yizkor Book, Gesher Galicia Holocaust Project, Wikipedia, Pinkas Hakehillot, and general web sources.

**Major finding**: The Yichus narrative's "Rosh Hashanah 1939" date for the Rodzinka Forest massacre is almost certainly incorrect. Detailed reconstruction of the Sambor district Holocaust timeline shows no mass killing of Jews in September 1939 (the Wehrmacht occupied Sambor only briefly Sept 8-20 before Soviets arrived Sept 20; only 2 Jews documented killed). The family was most likely murdered between 1941-1943 during the Sambor Ghetto period. "Rodzinka Forest" may be a garbled memory of "Radlowicze" (now Ralivka), the documented execution site near Sambor.

**Second major finding**: USHMM oral history of Rebecca Tzoar (irn619016) independently confirms her parents as Frida Karp and Philip (Fishel) Weidenfeld of Sambor, and provides a corrected survival narrative (sanatorium evacuation to Soviet territory, not hidden in a convent during the war; convent was post-war).

### Searches Conducted (40+ searches)

**MARKEL LINE (Sambor/Waniowice)**

| # | Query/Source | Result |
|---|---|---|
| 1 | Yad Vashem: "Markel" from Sambor | 403 on database. HUMAN ACTION REQUIRED. |
| 2 | Yad Vashem: "Markiel" from Sambor/Waniowice | 403. HUMAN ACTION REQUIRED. |
| 3 | USHMM HSV Database: "Markel" residence Sambor | 403. HUMAN ACTION REQUIRED. |
| 4 | Sambor Yizkor Book necrology (jewishgen.org/yizkor/sambor/Sam258.html) | 403 on page. **CONFIRMED via web search snippets**: "Markel, Yosef and Family (5 People)" listed in necrology. POSITIVE (Tier 2). |
| 5 | "Rodzinka Forest" OR "Rodzbelska Forest" massacre | **NEGATIVE.** No record of this name as a massacre site. No Google results. Name may be garbled. |
| 6 | Sambor Ghetto Wikipedia | **POSITIVE (Tier 2).** Full timeline extracted: Wehrmacht Sept 8-11, 1939; Soviet takeover Sept 20; Ukrainian pogrom July 1, 1941; ghetto March 1942; Belzec deportations Aug-Dec 1942; Radlowicze forest executions Jan 1943 and June 1943. |
| 7 | Pinkas Hakehillot Stary Sambor (JewishGen) | 403. But web snippet confirms: "German soldiers tortured Jews... Two Jews murdered... evacuated end of September 1939." |
| 8 | Radlowicze (Ralivka) forest as execution site | **POSITIVE.** Confirmed as the main forest execution site near Sambor: 1,500 shot Jan 1943; final ghetto liquidation June 8-9, 1943. |
| 9 | Dynow massacre Rosh Hashanah 1939 comparison | **POSITIVE.** Dynow massacre (170-200 Jews marched to Zurawiec forest, shot) on Rosh Hashanah Sept 1939 is a close parallel but 100 km from Sambor. Pattern may have confused family memory. |
| 10 | "Vigdor Markel" OR "Etti Markel" Holocaust | **NEGATIVE.** No results in any database. |
| 11 | "Mattis Markel" Holocaust | **NEGATIVE.** No results. KehilaLinks Drohobycz Markel family page found but about a different Markel family. |
| 12 | JewishGen Yizkor Necrology Database: "Markel" Sambor | 403 on database. Confirmed 1,611 entries in Sambor necrology. |
| 13 | Sefer Sambor (Internet Archive) table of contents | Confirmed available at archive.org/details/nybc313978. Full Hebrew/Yiddish text. HUMAN ACTION REQUIRED for page-by-page search. |
| 14 | Sambor Encyclopedia.com entry | 403. Timeline confirmed via web snippets. |
| 15 | Gesher Galicia Holocaust records inventory | 403. Confirmed Holocaust Project exists at geshergalicia.org/holocaust-period/. |

**FREI/KARP/WEIDENFELD LINE (Sambor)**

| # | Query/Source | Result |
|---|---|---|
| 16 | Sambor Yizkor necrology: "Karp" | **POSITIVE (Tier 2).** "Karp, Yosef and Family (4 People)" confirmed in necrology. Independently corroborates Yichus. |
| 17 | USHMM oral history Rebecca Tzoar irn619016 | **POSITIVE (Tier 2).** Born Aug 15, 1933, Sambor. Mother: Frida Karp. Father: Philip (Fishel) Weidenfeld. Evacuated to sanatorium then Kuybyshev; learned of family's murder 1943; housed in convent post-war. |
| 18 | Yad Vashem: "Weidenfeld" from Sambor | 403. HUMAN ACTION REQUIRED. |
| 19 | Yad Vashem: "Karp" from Sambor | 403. HUMAN ACTION REQUIRED. |
| 20 | USHMM: "Karp" residence Sambor | 403. HUMAN ACTION REQUIRED. |
| 21 | USHMM: "Weidenfeld" residence Sambor | 403. HUMAN ACTION REQUIRED. |
| 22 | "Frei" OR "Frey" Jewish Sambor Waniowice Holocaust | NEGATIVE for our specific family. Found Adolf Frey (Sambor Jewish lawyer) but unrelated. |
| 23 | "Nissan Karp" Sambor Holocaust | NEGATIVE. |
| 24 | "Fishel Weidenfeld" OR "Philip Weidenfeld" Sambor | NEGATIVE via web search. |

**BRANDT/GOLDBAUM LINE (Tarnopol)**

| # | Query/Source | Result |
|---|---|---|
| 25 | Yad Vashem: "Goldbaum" from Tarnopol | 403. HUMAN ACTION REQUIRED. Item IDs found previously (788325, 6510903) but not accessible. |
| 26 | Yad Vashem: "Brandt" from Tarnopol | 403. HUMAN ACTION REQUIRED. |
| 27 | USHMM: "Goldbaum" residence Tarnopol | 403. HUMAN ACTION REQUIRED. |
| 28 | Tarnopol Ghetto Wikipedia | **POSITIVE (Tier 2).** Full timeline: 18,000 Jews pre-war; Wehrmacht July 2, 1941; 1,600-2,000 killed first week; ghetto Sept 1941; Aktions 1942 sent 6,000+ to Belzec; liquidation June 20, 1943. |
| 29 | Tarnopol Ghetto Holocaust Historical Society | 403. Same timeline confirmed via snippets. |
| 30 | Tarnopol Yizkor Book (JewishGen Press) | Confirmed at jewishgen.org/yizkor/ybip/YBIP_Ternopil.html. Name indexed by Stefanie Holzman. HUMAN ACTION REQUIRED to search index for Goldbaum/Brandt. |
| 31 | "Dwora Goldbaum" OR "Dwora Brand" Lisko Sambor Holocaust | NEGATIVE. |
| 32 | Lesko/Lisko Yizkor Book | Confirmed exists: "Memorial Book for Jews of Linsk, Istrik." 403 on text pages. HUMAN ACTION REQUIRED to search for Brand/Goldbaum. |
| 33 | Lesko Holocaust history | POSITIVE (context). Jewish community was 60% of population; virtually all murdered 1941-1944. |
| 34 | Geni.com Jewish Families from Tarnopol project 15742 | 403. HUMAN ACTION REQUIRED. |

**ADDITIONAL CONTEXT SEARCHES**

| # | Query/Source | Result |
|---|---|---|
| 35 | September 1939 Wehrmacht atrocities Jews villages Galicia | POSITIVE (context). ~7,000 Jews killed in first 55 days across all of Poland; but organized mass killings began only after June 1941 Soviet invasion. |
| 36 | Sambor district Sept 1939 timeline | POSITIVE. Wehrmacht arrived Sept 8; left by Sept 20; Soviets took over. Only 2 Jews killed in Sambor. |
| 37 | KehilaLinks Drohobycz Markel family page | 403. Content appears to be about Bartel family, not our Markels. |
| 38 | USHMM Sefer Sambor source page (SourceId=33369) | 403. Confirmed: contains alphabetical necrologies of Holocaust victims from Sambor and Stary Sambor. |
| 39 | USHMM names from Yizkor books for Galicia (SourceId=33098) | Confirmed: ~3,000 surnames of Galician Jews killed. HUMAN ACTION REQUIRED. |
| 40 | JewishGen Yizkor Book Master Name Index | 403 on search. Available on Ancestry (collection 5500) and MyHeritage (collection 20034). HUMAN ACTION REQUIRED. |

### Key Findings

1. **"Markel, Yosef and Family (5 People)"** in Sambor Yizkor Book necrology (Tier 2). Relationship to known Markel family members unclear (could be Mojzesz Majer or an unknown relative).

2. **"Karp, Yosef and Family (4 People)"** in Sambor Yizkor Book necrology (Tier 2). Independently corroborates Yichus narrative that Feiga Frei Karp and Joseph Karp were murdered. This is the second independent source for this claim.

3. **Rebecca Tzoar USHMM oral history (irn619016)** independently confirms: mother Frida Karp, father Philip (Fishel) Weidenfeld, born Aug 15, 1933 in Sambor. Corrects the Yichus claim that she was "hidden in a convent" (she was evacuated to Soviet territory; convent was post-war).

4. **The "Rosh Hashanah 1939" date is almost certainly wrong.** No mass killing of Jews in Sambor area during Sept 1939. The major killings occurred 1941-1943. "Rodzinka Forest" may be a garbled version of "Radlowicze," the documented execution site.

5. **Tarnopol Holocaust timeline**: 18,000 Jews pre-war; virtually all murdered 1941-1943 via pogroms, Belzec deportations, and local executions. If Brina Goldbaum remained in Tarnopol, she was almost certainly killed.

6. **The Dynow massacre** (Rosh Hashanah Sept 1939, 170-200 Jews marched to forest and shot) is a documented parallel event that may have been conflated with the Sambor family's actual later murder in family memory.

### Negative Results (Logged)

1. "Vigdor Markel" and "Etti Markel": no records found in any database.
2. "Mattis Markel" (Heshel's brother): no Holocaust records found.
3. "Rodzinka Forest" or "Rodzbelska Forest": no Google results for this place name.
4. "Nissan Karp" (son of Feiga and Joseph): no records found.
5. "Fishel/Philip Weidenfeld" from Sambor: no individual victim record found.
6. All individual Markel siblings (Avraham Chaim, Masha, Hannah, Pessel): not listed individually in the Sambor Yizkor Book necrology (which is acknowledged as incomplete).
7. "Dwora Goldbaum/Brand/Markiel" from Lisko/Sambor: no records found.
8. Joseph Brandt from Tarnopol: no records found.
9. Brina Goldbaum from Tarnopol: no individual records found (previous session also negative).

### Vault Updates Made

- **Avraham_Chaim_Markel.md**: Added comprehensive Holocaust Record Search section with Sambor timeline, date discrepancy analysis, Radlowicze forest identification, Rebecca Tzoar correction, and research leads.
- **Masha_Markel_Tachner.md**: Added Holocaust Record Search section with cross-reference to Avraham Chaim's analysis.
- **Hannah_Markel.md**: Added Holocaust Record Search section.
- **Pessel_Peppy_Frei.md**: Updated Data Discrepancies with revised analysis (neither 1939 nor 1940 correct; actual date likely 1942-1943).
- **Frieda_Karp_Weidenfeld.md**: Added Holocaust Record Search section with USHMM oral history findings and Sambor Yizkor Book confirmation.
- **Feiga_Frei_Karp.md**: Added Holocaust Record Search section. Confidence upgraded: two independent Tier 2 sources (Yichus + Sambor Yizkor necrology) now corroborate the Karp family's murder.
- **Brina_Goldbaum.md**: Updated Tarnopol Holocaust section with full Ghetto timeline.
- **Joseph_Brandt.md**: Added Holocaust context section with Tarnopol timeline and Brand/Brandt surname connection to Lisko.
- **Mojzesz_Majer_Markiel.md**: Added Holocaust Record Search section with Sambor Yizkor connection and Lisko/Brand/Goldbaum cross-reference.
- **Timeline.md**: Added 13 Holocaust timeline entries for Sambor and Tarnopol events (1939-1943), including the date discrepancy notation.
- **Research_Log.md**: This entry.

## 2026-04-17: Helen Brandt / Joseph Brandt / Brina Goldbaum Deep Research

### Summary
Conducted 20+ web searches targeting the thinnest line in the family tree: Helen Brandt (wife of Morris Markel), her father Joseph Brandt, and her mother Brina Goldbaum. All three individuals are at Speculative confidence with only Tier 3 (MyHeritage GEDCOM) as their source. Goal: find ANY primary or secondary source that corroborates or expands this line.

**Result: No new primary or secondary sources located through web search.** All key genealogical databases (Gesher Galicia All Galicia Database, Yad Vashem names database, Find a Grave cemetery search within Lincoln Park Cemetery, RIJHA obituary PDFs, MyHeritage Goldbaum family site, JRI-Poland Sambor page, KehilaLinks Markel family page) returned 403 errors on programmatic access. These databases require manual browser-based access.

**However, several significant leads were identified that are likely to yield results when accessed manually in a browser.**

### Searches Conducted

| # | Query | Source | Result |
|---|---|---|---|
| 1 | Helen Brandt Markel obituary Rhode Island | Web | NEGATIVE. Helen Brandt obit from Rock Island IL (2022) is unrelated. |
| 2 | Find a Grave Helen Markel Rhode Island Lincoln Park Cemetery | Find a Grave | NEGATIVE. No memorial found. Kate Kaplan (#232002112) confirmed. |
| 3 | Morris Markel obituary 1963 Rhode Island Providence Journal | Web | NEGATIVE. General database links only. |
| 4 | "Helen Brandt" Jewish immigration Poland Rhode Island 1928 | Web | NEGATIVE. General Jewish immigration history only. |
| 5 | "Anne Markel" Schlusselberg obituary Rhode Island | Web/Find a Grave | NEGATIVE. Thelma's memorial confirms Anne as sister. No standalone obit. |
| 6 | "Rita Markel" obituary Rhode Island | Web | NEGATIVE. Rita Martell (1930-2017, Pawtucket) is different person. |
| 7 | "Joseph Harold Markel" West Warwick | Web | NEGATIVE. |
| 8 | Brandt Jewish family Tarnopol Galicia JewishGen | Gesher Galicia | PARTIAL. Brandt families page at geshergalicia.org confirmed (403). |
| 9 | Goldbaum Jewish family Tarnopol Galicia Holocaust | Gesher Galicia | PARTIAL. Both surnames in Tarnopol 1910 Census confirmed. USHMM source 33098. |
| 10 | Yad Vashem "Goldbaum" Tarnopol | Yad Vashem | NEGATIVE (403 on search). |
| 11 | Yad Vashem "Brandt" Tarnopol | Yad Vashem | NEGATIVE (403 on search). |
| 12 | Jack Schlusselberg Salem MA obituary | Dignity Memorial | PARTIAL. Obituary exists (403 on fetch). Possible son of Anne Markel Schlusselberg. |
| 13 | Ferilyn Kaplan obituary West Warwick | Legacy.com | PARTIAL. Died Aug 6, 2019 (403 on fetch). Likely Kate Kaplan family. |
| 14 | Kate Kaplan obituary full text | Legacy.com | NEGATIVE (403). Snippet confirms: b. Poland, URI, Sloan Kettering, Atlanta. |
| 15 | Lincoln Park Cemetery Markel burial records | Web | PARTIAL. Cemetery confirmed: 401-737-5333, 13,809 memorials, 54 sections. |
| 16 | "Brandt" "Goldbaum" Jewish Poland Galicia | CJH/Gesher Galicia | POSITIVE. CJH collection documents Brandt family in Galicia. Gesher Galicia Brandt page. |
| 17 | MyHeritage "Helen Brandt" "Joseph Brandt" "Brina Goldbaum" | MyHeritage | POSITIVE. Goldbaum family site discovered (403 on access). |
| 18 | "Brandt" Tarnopol Jewish records 1880-1900 | Gesher Galicia/AGAD | PARTIAL. 1880/1890 censuses indexed in All Galicia Database. |
| 19 | Ahavath Sholom congregation history Markel | RIJHA/JewishRhody | PARTIAL. Articles exist (403). May name congregation members. |
| 20 | RIJHA obituaries M section | RIJHA | NEGATIVE (403). PDF at rijha.org likely contains Markel obituaries. |
| 21 | Morris Markel naturalization West Warwick | Web | NEGATIVE. |
| 22 | "Helen Brandt" born Poland ~1891 immigration | Web | NEGATIVE. |

### Key Leads Identified (HUMAN ACTION REQUIRED)

1. **RIJHA "M" Obituaries PDF** (rijha.org/wp-content/uploads/Obituaries/M%20Obituaries.pdf): Access in browser. Should contain Morris Markel (~1963) and Helen Markel (~1975) obituaries from the Jewish Herald Voice. **HIGHEST PRIORITY. DECISIVE RECORD.**
2. **Lincoln Park Cemetery** (401-737-5333): Phone call to confirm Morris + Helen burials and headstone data.
3. **Helen Markel RI death record** (~1975): Request from RI Dept of Health. Would list parents' names.
4. **MyHeritage Goldbaum family site** (myheritage.com/site-family-tree-1131568351/goldbaum-family-site): Access in browser.
5. **Gesher Galicia All Galicia Database**: Search for Brandt and Goldbaum in Tarnopol district.
6. **Jack Schlusselberg obituary** (Dignity Memorial): Access in browser.
7. **CJH Brandt family collection**: Contact CJH for finding aid.
8. **Yad Vashem names database**: Search for Brina Goldbaum.

### Vault Updates Made
- Helen_Brandt.md: Updated birth year estimate to ~1891, added 2026-04-17 research session with all 22 searches, updated research leads with prioritized human-action items.
- Joseph_Brandt.md: Added 2026-04-17 research update, new leads (Gesher Galicia Brandt page, CJH collection, MyHeritage Goldbaum site, RIJHA obituaries).
- Brina_Goldbaum.md: Added 2026-04-17 research update, new leads (MyHeritage Goldbaum site, Tarnopol censuses, USHMM Yizkor names, Tarnopol Yizkor book).
- Open_Questions.md: Updated #21 with full 2026-04-17 search history and revised leads. Merged #30 into #21. Updated #32 with additional search history. Added Data Acquisition Priorities #33-42.

## 2026-04-17: Four-stream parallel research sweep

Ran four concurrent research streams (Stream A = Salk death cert, Stream B = Deych Rokiskis, Stream C = Gesher Galicia click-throughs, Stream D = Kascher Wurmloch). Streams A/B/D were dispatched to web-research subagents; Stream C was performed directly via Gesher Galicia browser automation. Full details in `research-notes/` under four dated subfolders.

### Stream C — Gesher Galicia click-throughs (Hersch/Lea family)

**Major Tier 1 findings:**

- **Marriage of Hersch MARKEL × Lea FREI, 21 August 1894, Sambor Jewish Marriages register.** All six principals (Hersch, his parents Mordko Ber MARKIEL & Henie MARKEL; Lea, her parents Jozef FREI & Taube FREI) listed as from Waniowice. Lea's age 29 (confirms birth c. 1864-1865). Citation: AGAD Warsaw, Fond 424, File 103, Record 34, Scan 52. Identifier #137:295.
- **Marriage banns of Mojżesz Majer MARKIEL × Dwora GOLDBAUM false BRAND, 29 Nov–13 Dec 1919.** Groom born Waniowice, merchant in Sambor. Groom's father: **Hersch MARKIEL, innkeeper, of Waniowice.** Groom's mother: Lea FREY, of Waniowice. Bride: Dwora GOLDBAUM false BRAND of Lisko. Confirms Mojżesz Majer as a previously-unknown 9th documented child of Hersch and Lea. Citation: AGAD Fond 424, File 212, Record 65, Page 315. Identifier #206:1086.
- **New biographical facts**: Hersch Markel was an **innkeeper** in Waniowice (new Tier 1 fact, not in any prior vault document). The family's continuous residence in Waniowice across 1894-1919 (25 years) is now corroborated by two independent Tier 1 records.

**Corrections**: Two Jozef Frei records in AGD (Jozef Samuel FREI death 1900 Pruchnik; Jozef Szmul FREI birth 1902 Lutowiska) were previously hypothesized as possibly belonging to Lea's father. Click-through to detail confirmed both are in Przemyśl State Archive (Fond 154) in towns 80-100 km from Sambor. **Neither is our Jozef Frei.** Prior "Moderate confidence" lead retracted.

**Vault updates as a result of Stream C (2026-04-17)**:
- Updated: [[Heschel_Herman_Markel]], [[Leah_Frei]], [[Dov_Markel]], [[Nissen_Mendel_Markel]], [[Yoseph_Frei]], [[Toba_Rivka_Frei]]
- New person files: [[Mojzesz_Majer_Markiel]], [[Henie_Markel]]
- Confidence upgrades to **Strong** on Hersch, Lea, Jozef, Taube, Mordko Ber, and their Waniowice residence
- Discrepancy flagged: 1878 (Yichus religious marriage tradition) vs 1894 (civil registration) — likely reconciled as backfilled registration

### Stream A — Abraham Salk 1925 RI Death Certificate (agent; notes in `research-notes/salk-providence/`)

- Abraham Salk's Feb 22, 1925 death cert is **NOT** currently online. The RI State Archives Preservica digitization of Feb 16-28 Providence deaths stops at Feb 19. User must submit a vital records request at https://forms.sos.ri.gov/VitalRecordsOrderForm.
- **NEW: Abraham Salk had at least 3 daughters.** Previously known: Elizabeth (Salk) Salmanson. New via RIJHA obituary records: **Anna (Salk) Zipperman** (m. Sam, lived Atlanta GA, b. Russia) and **Mary (Salk) Kalmanovitch/Lyons** (m. Max, Providence; son Leonard Samuel Lyons d. 2002 Plant City FL). Tier 2 (obituary cascade).
- **NEW: Hyman Salk (Salk's Hardware founder 1900) connection.** Hyman's wife was herself an Elizabeth Salk (maiden = Salk), daughter of **Louis Salk and Dena (Hassel) Salk**, b. 18 Apr 1876 Russia, d. Lincoln Park Cemetery, Congregation Sons of Abraham. Children: Florence Brodsky, Louis Salk, Samuel Salk. Tier 2. Establishes Providence Salk endogamous cluster; "Louis Salk" may match OQ #18 (Troskunai Zalk connection candidate).
- **Other Salks at Lincoln Park Cemetery** for follow-up: Max Salk (1882-1969, wife Mollie Mistofsky, son Burton), and several sisters-married-out (Tillie/Lena/Bertha/Celia). Harvey M Salk is at a DIFFERENT cemetery (Sons of Israel and David), indicating a separate branch.
- Negative results: RIJHA obituary A-Z search (1960s+ only, no Abraham Salk 1925 hit); Find a Grave (blocked direct fetch, Google preview showed no Abraham Salk RI 1925 memorial).

### Stream B — Zawel Deykh Rokiskis (agent; notes in `research-notes/deych-rokiskis/`)

- **No direct Deych/Deich/Deutsch record located** for Rokiskis in any public source (JewishGen KehilaLinks 1908 Family List, 1897 Census extract, Rokiskis Necrology, Rokiskis Yizkor Book text pages all searched). Caveat: the 1897 census survives only in fragments; absence is weak negative.
- **Record location confirmed**: Rokiskis Jewish vital records 1874-1896 are in **LVIA Fond 1226** (Kovno gubernia rabbinate metrics, 93 reels). JewishGen Lithuania VR DB indexes these.
- **Best free path**: email Linda Cantor (Rokiskis SIG chair, `lincanfamily@gmail.com`) who holds a complete Kaunas-archive index.
- **Best paid path**: $100 LitvakSIG Zarasai DRG qualifying contribution unlocks 5-year Members Site access.
- **LVIA direct**: `istorijos.archyvas@archyvai.lt`, English accepted, 1-2 week response, nominal fee.
- **Tangential lead**: Rabbi Levi Yitzchok Zalmanson (1812-1872) on Geni, Lubavitch, children named Shneur Zalman / Mordekhai Ber / Yosef Chaim Zalmanson. Rokiskis was a Lubavitch stronghold. Potentially anchors existing vault Open Question R6 (Zalmanson-Schneerson connection) geographically. Tier 3.

### Stream D — Georg Kascher Wurmloch 1792 (agent; notes in `research-notes/kascher-wurmloch/`)

- **Tier 3 breakthrough via Genealogy.com GenForum topic 11540** (Austria forum): forum post asserts Georg Kascher (b. 1792 Wurmloch) married **Maria Wagner**, had son **Michael Kascher** (b. 1834 Wurmloch, d. 1880 Waldhuetten) who married **Sara Schuller** (widow of Stephann Benning), and they had children Michael and Regina. Poster identity and date not captured (page blocks automated fetch); user should open in browser.
- **Cross-reference support**: Siebenbuerger.de snippet for **Anna Binder Kascher** (b. 1 Apr 1868 Kreisch, d. 18 Oct 1915 Waldhuetten, father Martin Binder son of Petrus Krauss Binder) is consistent with the Michael Kascher Waldhuetten household.
- **Zentralarchiv Sibiu process verified**: casa.teutsch@gmail.com, German preferred, 10 EUR/hr, first 2 hours free for scientific inquiries, 10 EUR per Kirchenbuch confirmation, 3 EUR per digital scan.
- **Surname distribution**: Kascher is extremely rare (~137 bearers worldwide; 78 Brazil, 39 USA, 19 Germany, 1 Philippines per forebears.io). Flanders-origin family tradition has no surname-specific documentary basis. Bavaria Valentin Kascher baptism (from vault commit f59e10d) likely a name collision given Germany's low Kascher count.
- Negative results: VGSS database (login required, Wurmloch not in public portion); Archion.de (confirmed NOT covering Transylvania); WikiTree / Geni (no dedicated Kascher surname page).

### Data Acquisition Priorities unchanged or updated

- **OQ #10** (Sambor vital records for Markel family): now substantially resolved for Hersch/Lea/Mordko Ber. Shifts to: (a) find Mordko Ber's own birth/death, (b) verify Nissen Mendel via JRI Poland's 4 "Nissen+Markel" partner hits.
- **OQ #13, #14, #16, #17, #18** (Abraham Salk ecosystem): advanced substantially even without the death cert in hand; see Stream A notes.
- **OQ #15** (Zawel Deykh): LVIA Fond 1226 confirmed as target; Linda Cantor is the next contact.
- **OQ #7** (Georg Kascher 1792): Tier 3 forum lead extends line by one generation (son Michael b. 1834 Wurmloch); Zentralarchiv Sibiu request is the Tier 1 decisive next step.

## 2026-04-16: Bella Measroch Research (Levi Itzhak Zalmanson's Second Wife)

### Summary
Conducted 10 web searches to investigate Bella Measroch, listed as Levi Itzhak Zalmanson's second wife on MyHeritage. Searched Geni, JewishGen, MyHeritage, loebtree.com, forebears.io, namespedia.com, and South African genealogical databases. No biographical details (dates, children, location) for Bella herself were found. The Measroch surname was identified as extremely rare (approximately 12 occurrences worldwide in 4 countries) with a concentration in South Africa, consistent with Lithuanian Jewish immigration patterns (90% of South African Jews are Litvaks).

### Searches Conducted

**Search 1: "Bella Measroch Zalmanson MyHeritage"**
- **Result**: NEGATIVE for specific profile. MyHeritage did not surface a public profile for Bella Measroch Zalmanson. A PeekYou result confirmed the Measroch surname exists on social media. A LinkedIn profile for Leanne Measroch (Microsoft employee) was found, confirming the surname is still in use.

**Search 2: "Measroch surname Jewish Lithuania genealogy"**
- **Result**: NEGATIVE for Measroch specifically. Returned general Lithuanian Jewish genealogy resources (LitvakSIG, JewishGen, FamilySearch). The surname "Measroch" does not appear in any Lithuanian Jewish surname database indexed by search engines.

**Search 3: Geni.com Measroch family**
- **Result**: POSITIVE. Geni.com has **32 profiles** for the Measroch surname. Page returned 403 on direct fetch.

**Search 4: "Measroch" JewishGen surname distribution**
- **Result**: NEGATIVE on JewishGen. However, forebears.io has a "Masroh" page (possible variant). Namespedia.com has a Measroch entry stating the surname is "used at least 12 times in at least 4 countries." Both pages returned 403 on fetch.

**Search 5: loebtree.com Zalmanson Bella Measroch**
- **Result**: PARTIALLY POSITIVE. The loebtree.com ZALMANSON family tree page exists (http://www.loebtree.com/zalmanson.html) but returned 403 on direct fetch. Search snippets confirmed the page covers the Zalmanson/Schneersohn connection but did not surface "Bella" or "Measroch" in snippets.

**Search 6: Measroch surname origin etymology South Africa Jewish**
- **Result**: POSITIVE for surname distribution. The ancestor.co.za site has a MEASROCH page (South African family research). Simeon Julian Measroch married in Durban, Natal, South Africa on May 25, 1917. Pete/Peter Measroch was a musician in Durban in the 1960s/70s. The surname is concentrated in South Africa with a Lithuanian Jewish immigration context.

**Search 7: "Simeon Measroch" OR "Julian Measroch" Durban South Africa**
- **Result**: PARTIALLY POSITIVE. Confirmed Pete/Peter Measroch of Durban (musician, Abstract Truth band). The South African justice.gov.za estates database lists Measroch entries. No direct connection to the Zalmanson family established.

**Search 8: Geni "Bella Measroch" OR "Beila Measroch" Zalmanson wife Lithuania**
- **Result**: NEGATIVE. No results returned.

**Search 9: "Levi Itzhak Zalmanson" wife Geni MyHeritage**
- **Result**: NEGATIVE for the grandson (b. 1851). All results returned the grandfather Rabbi Levi Yitzchok Zalmanson (1812-1872) and his wife Dvorah Leah Schneersohn. The grandson's Geni profile does not appear in search engine results.

**Search 10: Geni "Srul Mendel Zalmanson" son "Levi" wife Measroch**
- **Result**: NEGATIVE. Only the grandfather's Geni page appeared.

### Key Findings

1. **Bella Measroch remains unverifiable through free web search.** No biographical details (birth/death dates, children, location) were found for Bella herself. The only source remains the MyHeritage GEDCOM/family tree (Tier 3).

2. **The Measroch surname is extremely rare** (approximately 12 occurrences worldwide, 4 countries) and concentrated in **South Africa**, which is consistent with Lithuanian Jewish origin. 90% of South African Jews descended from Lithuanian immigrants (vilnews.com).

3. **South African Measrochs are documented.** Simeon Julian Measroch married in Durban, 1917. Pete/Peter Measroch was active in Durban in the 1960s-70s. The surname appears in South African estate records (justice.gov.za). Leanne Measroch (contemporary) works at Microsoft.

4. **Geni has 32 Measroch profiles**, but the page returned 403 on automated access. Manual browser access is required to determine whether these profiles include Bella and whether any connect to the Zalmanson family.

5. **Rochel Tsine Deych's estimated death date (~July 26, 1935)** is already documented in the vault. If correct, this makes a sequential marriage plausible: Levi Itzhak could have married Bella after Rochel Tsine's death (though Levi Itzhak would have been approximately 84 years old in 1935, making a late remarriage unlikely). More likely, if the marriages were sequential, Rochel Tsine may have died earlier than the estimated date, or Bella was an earlier wife. The 1935 date is marked as estimated and sourced from the US Obituary Index, which may refer to something other than actual death date.

6. **loebtree.com Zalmanson page** exists but could not be fetched. This remains the most likely free source to contain information about Bella Measroch, as it is the user-contributed tree that likely feeds MyHeritage.

### Assessment

**Confidence: SPECULATIVE.** Bella Measroch's existence as Levi Itzhak's wife rests on a single Tier 3 source (MyHeritage user-contributed tree). No corroborating source found. The surname's rarity and South African concentration may indicate that the Measroch family emigrated from Lithuania to South Africa rather than to the United States, which would explain why Bella does not appear in US records.

**Possible scenarios:**
- (a) Bella was a second wife after Rochel Tsine's death (sequential marriage). This requires Rochel Tsine to have died earlier than 1935, or Levi Itzhak to have remarried at a very advanced age.
- (b) Bella was a first wife before Rochel Tsine (Levi Itzhak married Bella first, she died young, then he married Rochel Tsine in 1877). This would mean Bella died before approximately 1877.
- (c) The MyHeritage entry is a data error (wrong person linked as spouse, or a Geni merge error combining two different Levi Itzhak Zalmansons).

### Next Steps (HUMAN ACTION REQUIRED)
1. **Browse Geni.com Measroch surname page** (geni.com/surnames/measroch) manually in browser to review all 32 profiles. Check for Bella and any Zalmanson connections.
2. **Browse loebtree.com/zalmanson.html** manually to check for Bella Measroch.
3. **Search MyHeritage directly** (login required) for Bella Measroch's profile and check what family tree she appears in, who added her, and what sources are cited.
4. **Search SA Jewish Rootsbank** (jewishroots.uct.ac.za) for Measroch entries to establish the family's Lithuanian town of origin.
5. **Search JewishGen Family Finder** for researchers investigating the Measroch surname.

### Files Updated
- `Levi_Itzhak_Zalmanson.md`: Added research notes on Bella Measroch investigation.
- `Open_Questions.md`: Updated #5 with full research findings.
- `Research_Log.md`: This entry.

## 2026-04-16: Mary Brashier Parentage Research

### Summary
Conducted 13 web searches to determine whether Mary (Eliza) Brashier (b. 1806, married Lewis P. Huff) connects to the Thomas Levi Brasher Jr. family of Greenville County, SC. Evaluated five candidate fathers (sons of Thomas Levi Jr.). Most genealogy profile pages (WikiTree, Geni, Rootsweb) returned 403 errors on direct fetch; data extracted from search result snippets and the "Empty Branches on the Family Tree" blog references.

### Key Positive Results

1. **Thomas Levi Brasher III (1765-1841) identified as strongest candidate father.** He is the only son of Thomas Levi Jr. who remained in Greenville County after 1800. Per "A Brazier/Brasher Saga" (Brashear and McCoy, 1998), his descendants specifically adopted the "Brashier" spelling. His known children: Elizabeth Brashier, Thomas Brashier, John Brasher Sr., Aquilla "Cassa" Brashier, Sarah Pyle (nee Brashier), Hannah Teague (nee Brashier). Not all children may be documented online; a Mary born 1806 would fit within his childbearing years. Sources: Geni Thomas Brasher III profile, WikiTree Brasher-122, Empty Branches blog, "A Brazier/Brasher Saga" references.

2. **Henry Collins Brasher Sr. (1771-1852) evaluated and downgraded.** Married Eleanor Ashmore c. 1795; had 7 children (5 named: Jane Cynthenia, John Andrew Jackson, Henry Jr. b. 1801, Samuel Henry Sr., Richard Harrison). Two unnamed children could theoretically include Mary. However, Henry Collins moved to Shelby County, Alabama c. 1817, making it unlikely his daughter remained in Greenville to marry Lewis Huff there. Sources: WikiTree Brasher-121, Brasher-151; Find a Grave #66620694; Geni Henry Brasher Sr. profile.

3. **Aquilla B. Brasher (c. 1772-c. 1842) eliminated.** Moved to western KY after 1800. His four documented children (Lawrence, Thomas, Jane, Aquilla Jr.) do not include a Mary. Sources: WikiTree Brasher-147; Empty Branches blog "Aquilla Brasher & Mary: Who Are Their Children?"

4. **Lawrence Aquilla Brasher (1801-1862) had daughter Mary Ann Brasher, but she is a different person.** Lawrence Aquilla (grandson of Thomas Levi Jr., through Lawrence Brasher) married Frances Henderson c. 1818-1820. His daughter Mary Ann Henderson Brasher was likely born in the 1820s-1830s, not 1806. Also, Lawrence Aquilla's children are well-documented (13 children total on WikiTree Brasher-467) and this Mary Ann is accounted for separately. Sources: WikiTree Brasher-467, Rootsweb Fayette AL descendants page.

5. **"Brashier" spelling confirmed as Greenville-specific.** "A Brazier/Brasher Saga" states: "Thomas L. Brasher remained in Greenville, where many of his descendants spelled the surname Brashier." This is significant because Mary used the Brashier form, directly linking her to the Thomas III line rather than the branches that left Greenville. Sources: Genealogy.com forum references to "A Brazier/Brasher Saga."

6. **Parentage confirmed as community brick wall.** A Genealogy.com forum post (undated) seeks information about "Mary (Brauser) Huff (after 1815, about 1850) from Greenville, South Carolina" and asks about her parents. WikiTree G2G has a similar unresolved inquiry. This is not just our gap; it is an open question in the Brasher research community.

### Negative Results (Logged)

| Search | Database | Date | Result |
|---|---|---|---|
| WikiTree Mary Brashier married Lewis Huff Greenville SC | WikiTree (web search) | 2026-04-16 | Profile Huff-142 confirmed. No parentage for Mary. |
| Henry Collins Brasher children daughters Mary born 1806 | WikiTree, Geni (web search) | 2026-04-16 | 5 of 7 children named. No Mary found among named children. |
| Geni Brashier/Brasher family Greenville County SC 1800s | Geni | 2026-04-16 | Multiple profiles found. No Mary b. 1806 specifically listed. |
| WikiTree Brasher-151 (Henry Collins Jr.) direct fetch | WikiTree | 2026-04-16 | 403 error. |
| WikiTree Brasher-121 (Henry Collins Sr.) direct fetch | WikiTree | 2026-04-16 | 403 error. |
| Empty Branches blog Brasher category direct fetch | emptybranchesonthefamilytree.com | 2026-04-16 | 403 error. |
| Geni Henry Collins Brasher Sr. direct fetch | Geni | 2026-04-16 | 403 error. |
| Rootsweb Fayette AL Brasher descendants direct fetch | Rootsweb | 2026-04-16 | 403 error. |
| FamilySearch Thomas Levi Brasher III page direct fetch | FamilySearch | 2026-04-16 | 403 error. |
| Genealogy.com Glenn Brazier tree direct fetch | Genealogy.com | 2026-04-16 | 403 error. |
| Rootsweb tree 240183 direct fetch | Rootsweb | 2026-04-16 | 403 error. |
| Find a Grave Brasher/Brashier Simpsonville SC | Find a Grave | 2026-04-16 | Found later Brashier burials (Andrew J. b. 1867; Austin b. 1920) at Standing Springs/Simpsonville. No early 19th century Brashier burials found. |
| "Brasher Saga" Mary Brasher/Brashier Greenville | Genealogy.com forums | 2026-04-16 | Book confirmed as comprehensive (532 pages, 8,000 family members). Not directly consulted. |

### Assessment

Mary Brashier (b. 1806) is almost certainly a granddaughter of Thomas Levi Brasher Jr. through the Thomas Levi Brasher III (1765-1841) line. The key evidence: (a) the "Brashier" spelling is specific to descendants who stayed in Greenville, and Thomas III is the only son who remained; (b) Mary's birth year of 1806 fits; (c) Thomas III's children are incompletely documented online, leaving room for an undocumented daughter. The previous suggestion that Henry Collins Brasher (b. 1801) was her father is chronologically impossible (he was only 5 years older), and Henry Collins Brasher Sr. moved to Alabama by 1817. Confidence: SPECULATIVE. The decisive record would be "A Brazier/Brasher Saga" (1998) by Brashear and McCoy, which covers 8,000 family members and likely documents Thomas III's complete family.

### Next Steps
1. Obtain and consult "A Brazier/Brasher Saga" by Brashear and McCoy (1998). Available for order from Genealogy.com; may also be in genealogical libraries.
2. Search 1820 and 1830 Greenville District census for Brashier/Brasher households with females in the correct age range.
3. Search Greenville County marriage records for Lewis Huff marriage bond (would name Mary's father or guardian).
4. Check SC Will Book Vol A-B 1787-1820 for Thomas Levi Brasher III's will (would name children).

### Files Updated
- `Mary_Brashier.md`: Rewrote biography section with full parentage analysis. Added Parentage Hypothesis table. Updated sources list.
- `Open_Questions.md`: Updated #21 with research results.
- `Research_Log.md`: This entry.

## 2026-04-14: Georg Kascher Pre-1792 Wurmloch Origins Research

### Summary
Conducted 14 focused web searches to identify Georg Kascher's parents and pre-1792 origins in Wurmloch (Valea Viilor), Transylvania. Searched VGSS database references, Siebenbuerger.de, FamilySearch catalog, Archion.de scope, Conscriptio Cziraky (1819-1820 census), Kascher/Katscher surname etymology, Zentralarchiv Sibiu contact details, and Ancestry Transylvania collections. Most genealogy database pages returned 403 errors on direct fetch, limiting data extraction to search result snippets.

### Key Positive Results

1. **VGSS database confirmed to include Wurmloch**: The VGSS (Verein fuer Genealogie der Siebenbuerger Sachsen) database covers approximately 80 of 260 Transylvanian Saxon villages, with Wurmloch listed among covered settlements. The database is at vgss.de/genealogie-datenbank/ but returned 403 on automated access. Requires manual browser search for "Kascher" in Wurmloch. Source: vgss.de/genealogie/?page_id=32 (search snippet).

2. **Zentralarchiv contact details confirmed**: The Zentralarchiv der Evangelischen Kirche A.B. in Rumaenien is at the Friedrich Teutsch Haus, Str. Mitropoliei Nr. 30, RO-550179 Sibiu. Email: casa.teutsch@gmail.com. Fees: 10 EUR/50 Lei for scientific expert; 5 EUR/25 Lei for administrative staff. First 2 hours of scientific expert inquiries are free. They hold Kirchenbuecher (parish registers) from over 280 congregations, including Wurmloch. This is the single most actionable lead for extending the Kascher line. Source: teutsch.ro, evang.ro.

3. **Conscriptio Cziraky (1819-1820 census) confirmed available**: FamilySearch catalog #397171. Microfilmed on 53 rolls (Hungarian National Archives F 52, microfilm boxes 25674-25727). Available at FamilySearch Centers. Lists household heads by village, subdivided into Colonorum (farmers/serfs) and Inquilinorum (lodgers/tenants). Would confirm Georg Kascher (then age 27-28) as household head in Wurmloch circa 1819. Film notes list villages by Hungarian name (Nagybaromlak for Wurmloch). Source: familysearch.org/search/catalog/397171, rootsweb Transylvanian Census index.

4. **Kascher surname etymology**: Forebears.io shows "Kascher" most common in Brazil (78 bearers), extremely rare. "Katscher" most common in Germany (329 bearers, concentrated in NRW, Lower Saxony, Saxony). Katscher is also a Silesian town (now Kietrz, Poland). Related surname "Kasser" derives from German "Kaeser" (cheesemaker). Kascher may be: (a) occupational from Kaeser/Kasser with dialect shift, (b) toponymic from Katscher in Silesia, or (c) a Transylvanian Saxon dialect variant. No definitive etymology found. Source: forebears.io, ancestry.com surname pages.

5. **Ancestry collections confirmed**: Collection 5412 (Romania, Vital Records from Selected Regions, 1607-1914) and Collection 62878 (Transylvania, Romania, Birth, Marriage and Death, 1688-1919) both cover Transylvanian church records with focus on German populations. Subscription required. Source: ancestry.com collection pages.

6. **Archion.de does NOT cover Transylvania**: Archion digitizes German Evangelical church records from archives within Germany. Transylvanian Evangelical (Lutheran) records are held separately by the Zentralarchiv in Sibiu and are not on Archion. Source: archion.de, legacytree.com blog.

### Negative Results (Logged)

| Search | Database | Date | Result |
|---|---|---|---|
| "Kascher" in VGSS database | vgss.de/genealogie-datenbank/ | 2026-04-14 | 403 on fetch. Database confirmed to include Wurmloch but automated search blocked. Manual browser access required. |
| "Kascher" Wurmloch genealogy | Siebenbuerger.de | 2026-04-14 | No Kascher-specific results. Found Anna Binder Kascher (b. 1868, Kreisch) confirming family network but no pre-1792 data. |
| Wurmloch church records digitization status | General web | 2026-04-14 | NEGATIVE. No evidence of Wurmloch Kirchenbuecher being digitized online. Records remain at Zentralarchiv Sibiu. |
| FamilySearch catalog Wurmloch parish | familysearch.org | 2026-04-14 | No specific Wurmloch parish register catalog entry found in search results. FamilySearch wiki confirms church records in Romania start ~1600 but does not index Wurmloch specifically. |
| Wurmloch guestbook genealogy entries | siebenbuerger.de/ortschaften/wurmloch/gaestebuch/ | 2026-04-14 | 403 on fetch. Manual browser check needed for Kascher-related guestbook posts. |
| Teutsch Haus archive usage page | teutsch.ro/archiv-bibliothek/benutzung/ | 2026-04-14 | 403 on fetch. Contact details confirmed via search snippets. |
| Forebears.io Kascher page | forebears.io/surnames/kascher | 2026-04-14 | 403 on fetch. Distribution data confirmed via search snippets only. |
| Wurmloch 18th century Saxon families | General web | 2026-04-14 | NEGATIVE. No specific Wurmloch family lists found. Results returned Anglo-Saxon content instead. |

### Assessment

The research confirms that **no pre-1792 Kascher data is available online**. The brick wall remains. However, three actionable paths are now confirmed with specific contact details and procedures:

1. **Zentralarchiv Sibiu email request** (lowest cost, highest probability): Email casa.teutsch@gmail.com requesting a search of Wurmloch Kirchenbuecher for Georg Kascher baptism (March 1792) and his parents. First 2 hours free; additional work at 10 EUR/hour. This is the decisive record path.

2. **VGSS database manual search** (free, moderate probability): Visit vgss.de/genealogie-datenbank/ in a browser and search for Kascher in Wurmloch. If the Wurmloch parish registers have been transcribed by VGSS volunteers, Georg's baptism entry (with parents' names) may already be digitized.

3. **Conscriptio Cziraky at FamilySearch Center** (free, confirms presence): View FamilySearch microfilm catalog #397171 at a local FamilySearch Center. Find Nagybaromlak (Wurmloch) roll. Would confirm Georg Kascher as household head ~1819 and potentially list other Kascher households, suggesting relatives.

### Files Updated
- vault-template/Georg_Kascher.md: Added research findings and actionable next steps.
- vault-template/Open_Questions.md: Updated question #7 with 2026-04-14 research results.
- vault-template/Research_Log.md: This entry.

---

## 2026-04-14: Esther Lucy Kyle Parental Research

### Summary
Conducted 14 focused web searches to identify the parents of Esther Lucy Kyle (b. Jul 1827, Alabama; d. May 20, 1912, Chattanooga, TN), wife of William Henry Youngblood. Searched Find a Grave, WikiTree, Geni, Genealogy.com, FamilySearch wiki, Alabama GenWeb, and general genealogy databases. Most genealogy sites blocked automated page fetches (403 errors), limiting data extraction to search result snippets only.

### Key Positive Results

1. **James H. Kyle in 1830 Bibb County AL Census**: The 1830 Bibb County, Alabama Census index lists "Kyle, James H." as a head of household. Esther Lucy was born in July 1827 in Alabama, making her approximately 3 years old at this census. James H. Kyle is the strongest candidate for her father: correct county (Bibb, where William H. Youngblood was also born), correct timeframe, and consistent with 1880 Census data showing Esther Lucy's father was from Virginia. Source: trackingyourroots.com and algenweb.org census indices (both returned 403 on fetch; confirmed via search snippets).

2. **Genealogy.com James H Kyle family tree**: A user-submitted family tree exists at genealogy.com/ftm/k/y/l/James-H-Kyle/ODT7-0001.html. The page title is "James-H-Kyle - User Trees - Genealogy.com." Content inaccessible (403 error). This Tier 3 source requires manual browser verification and may name children, including potentially Esther Lucy.

3. **Kyle family in Grayson County, Virginia**: A published volume on "Pioneer Settlers of Grayson County, Virginia" lists Kyle as a principal family. This is consistent with the 1880 Census data indicating Esther Lucy's father was born in Virginia. Grayson County is in southwestern Virginia, a known corridor for migration to Alabama in the 1810s-1820s.

### Negative Results (Logged)

| Search | Database | Date | Result |
|---|---|---|---|
| Kyle surname memorials, Bibb County AL (pre-1900) | Find a Grave | 2026-04-14 | NEGATIVE. 403 on direct URL. Web search returned no Kyle memorials. |
| Kyle surname memorials, Lowndes County MS | Find a Grave | 2026-04-14 | NEGATIVE. No Kyle memorials found. |
| "Lucy Youngblood" or "Esther Youngblood" d. 1912, Chattanooga TN | Find a Grave | 2026-04-14 | NEGATIVE. No memorial found. |
| "Esther Lucy Kyle" or "Lucy Kyle" + Youngblood | WikiTree | 2026-04-14 | NEGATIVE. No profile found. |
| "Esther Lucy Kyle" or "Lucy Kyle" Alabama born 1827 | Geni | 2026-04-14 | NEGATIVE. No profile found. |
| "Lucy Kyle" Youngblood Alabama genealogy | Web search | 2026-04-14 | NEGATIVE. General results only. |
| "Esther Lucy Kyle" genealogy 1827 | Web search | 2026-04-14 | NEGATIVE. No specific match. |
| Kyle + Youngblood marriage, Alabama/Mississippi | Web search | 2026-04-14 | NEGATIVE. No marriage record found. |
| "William H Youngblood" 1850 census Kyle | Web search | 2026-04-14 | NEGATIVE. William Alexander Youngblood (Chambers Co) returned instead; different family. |
| Kyle family Virginia Bibb County Alabama 1820s settlers | Alabama Pioneers, general web | 2026-04-14 | Partial. Kyle listed in Grayson County VA pioneers but not confirmed in Bibb County settler lists (403 on page fetch). |
| 1850 Census Index, Bibb County AL (Kyle) | S-K Publications | 2026-04-14 | 403 on fetch. Index exists but content inaccessible. |
| "William Henry Youngblood" Chattanooga TN Find a Grave 1916 | Find a Grave | 2026-04-14 | NEGATIVE. No specific memorial returned. |

### Files Updated
- vault-template/Ester_Lucy.md: Added Verification Searches table (14 entries), Research Analysis section with hypothesis, and next steps.
- vault-template/Open_Questions.md: Updated question #20 with research findings and expanded Records Sought table (items 20a through 20f).
- vault-template/Research_Log.md: This entry.

### Assessment
The research is at a **wall that requires login-required databases** (FamilySearch individual records, Ancestry.com) or **manual browser access** (Genealogy.com, Find a Grave, Alabama GenWeb census pages). The James H. Kyle lead is promising but speculative. The 1830 census is pre-nominal, so even accessing it will only show whether the household had a female aged "under 5." The critical breakthrough will come from the **1850 census** (first to list individuals by name), which should show either a Kyle household with a "Lucy" or an early Youngblood-Kyle marriage record.

## 2026-04-14: Long/Huff/Moseley Line Verification and Expansion (Virginia to South Carolina)

### Summary
Conducted comprehensive web research to verify and expand the Long/Huff/Moseley family line from Brunswick County, Virginia to Greenville County, South Carolina. Ran 40+ web searches and 20+ web fetch attempts across WikiTree, Geni, RootsWeb, Find a Grave, FamilySearch, Genealogy.com, and other databases. WikiTree and most genealogical sites blocked direct page fetches (403 errors) but search result snippets provided substantial data.

### Key Positive Results

1. **MAJOR CORRECTION: Daniel Hough/Huff identity resolved.** The pedigree chart and GEDCOM incorrectly identify James Huff's (1768-1842) father as Daniel Hough (b. 1693, Bucks County, PA; WikiTree Hough-149). WikiTree research (Huff-1770, Huff-1775, Huff-446) demonstrates that James Huff's actual father was Daniel Huff (c. 1710/1720-c. 1777) of Brunswick County, VA, who married Mary Holloway and left a will in 1773 (probated 24 Nov 1777) naming wife Mary, sons Daniel, Philemon, Reuben, Lewis, and James, and granddaughter Tabitha. Created new file: Daniel_Huff_Brunswick.md. Updated: Daniel_Hough.md, James_Huff.md, Lewis_P_Huff.md, John_Hough.md.

2. **Daniel Huff (Brunswick Co VA) primary sources confirmed:** 1773 will (Tier 1), 1753 land grant of 360 acres on Pigeon Roost Creek (Tier 1), 1768 Brunswick County election poll listing Daniel and William "Hoof" (Tier 1).

3. **Huff-Holloway-Moseley intermarriage network documented:** James Huff's mother was Mary Holloway. His wife Rebecca Moseley's mother was Martha "Patty" Holloway. Abigail Moseley married Silas Holloway. William Holloway's 1784 will was witnessed by William Moseley Jr.

4. **Samuel Moseley lineage clarified:** Father was William Moseley (d. before 26 Aug 1776, Brunswick Co VA), not Marvel Moseley Jr. directly. Marvel Jr. (1682-1753) was Samuel's grandfather. Updated: Samuel_Moseley.md.

5. **Martha "Patty" Holloway's father identified:** William Holloway (c. 1734-1784), 1784 will in Brunswick County. Updated: Martha_Patty_Holloway.md.

6. **Sarah S. Goldsmith maiden name confirmed:** Geni and pedigree chart agree on Goldsmith. William Thomas Goldsmith Sr. (1762-1835) of Simpsonville had daughter "Sarah Sally Goldsmith" (b. 1805). Updated: Sarah_S_Long.md, Larkin_Long.md, William_Goldsmith_Long.md.

7. **William Thomas Long death date discrepancy identified:** Pedigree chart says 16 Oct 1897 age 72; headstone reads 1887. Updated: William_Thomas_Long.md.

8. **William Goldsmith Long dates expanded from pedigree chart:** Born 10 Feb 1862; married 10 Jan 1886; died 24 Mar 1937, Fort Pierce FL.

9. **Mary Brashier parentage remains unresolved.** Possibly a granddaughter of Thomas Levi Brasher Jr. through Henry Collins Brasher. Updated: Mary_Brashier.md.

10. **HuffHough Newsletter confirmed (FamilySearch catalog #638426):** Published by Max K. Huff, Vol. 1 Nos. 1-6 (1992-1993).

### Negative Results

1. Find a Grave searches for William Thomas Long, Mary Elizabeth Huff Long, Lewis Huff, William Goldsmith Long: no memorials found.
2. Search for "Clementine Long" (mother of Larkin Long): no results.
3. All WikiTree, RootsWeb, and genealogy site direct WebFetch attempts: 403 errors.

### Files Created
- Daniel_Huff_Brunswick.md

### Files Updated
- Daniel_Hough.md, James_Huff.md, Lewis_P_Huff.md, Samuel_Moseley.md, Martha_Patty_Holloway.md, Sarah_S_Long.md, Larkin_Long.md, William_Thomas_Long.md, William_Goldsmith_Long.md, Mary_Brashier.md, Rebecca_Moseley_Huff.md, John_Hough.md, Research_Log.md

---

## 2026-04-14: Barnett Salmanson Immigration Record Search and SS Baltic Verification

### Summary
Conducted comprehensive web research to locate Barnett (Berko) Salmanson's immigration record on the SS Baltic (White Star Line), arriving New York City December 23, 1904. Also searched for Elizabeth Salk's 1897 immigration record and Abraham Salk's immigration record. Ran 40+ web searches and 30+ web fetch attempts across Ellis Island databases, JewishGen EIDB, FamilySearch, Ancestry, GG Archives, NorwayHeritage, Wikipedia, Chronicling America, Steve Morse One Step tools, and the Morton Allan Directory. Nearly all genealogical databases blocked automated access (403 errors), consistent with CLAUDE.md guidance that login-required databases cannot be accessed by AI.

### Key Positive Results

1. **SS Baltic (White Star Line) confirmed operational in December 1904**: The RMS Baltic (23,876 gross register tons) was launched November 21, 1903, completed June 23, 1904, and made its maiden voyage Liverpool to New York on June 29, 1904 under Captain Edward Smith. The ship operated continuously on the Liverpool, Queenstown (Cobh), New York route from June 1904. A sailing schedule covering Liverpool to New York service from July 6, 1904 to January 13, 1905 is documented (GG Archives, Tier 2). A December 14, 1904 Liverpool departure is documented in the GG Archives sailing schedule. Sources: Wikipedia (en.wikipedia.org/wiki/RMS_Baltic_(1903)), NorwayHeritage (norwayheritage.com/p_ship.asp?sh=balt2), GG Archives (ggarchives.com/OceanTravel/ImmigrantShips/Baltic.html).

2. **Transit time validates December 23 arrival**: The Baltic's maiden voyage crossing took 7 days, 13 hours, 37 minutes at 16.1 knots average speed. A December 14 departure plus approximately 9 days (winter North Atlantic crossings were slower) yields a December 22-23 arrival, perfectly consistent with the claimed December 23, 1904 arrival date.

3. **Key databases identified for human follow-up**:
   - **Steve Morse One Step** (stevemorse.org/ellis/passengers.php): Enhanced search form for Ellis Island records with Soundex, phonetic matching, ship name, and date range filters. Free, no login.
   - **JewishGen EIDB** (jewishgen.org/databases/eidb/): Gold form search with town-of-origin field. Free with registration.
   - **Statue of Liberty / Ellis Island Foundation** (statueofliberty.org/discover/passenger-ship-search/): Free passenger search with 65 million records. Requires free registration.
   - **FamilySearch collection 1368704**: New York Passenger Arrival Lists (Ellis Island), 1892-1925. Free with login.
   - **Ancestry collection 7488**: New York arriving passenger and crew lists, 1820-1957. Requires paid subscription.
   - **NARA T715 microfilm**: Passenger and Crew Lists of Vessels Arriving at New York, 1897-1957. 8,892 rolls. Available at NARA facilities and through FamilySearch.
   - **Morton Allan Directory** (archive.org/details/mortonallandirec00balt): Lists all European steamship arrivals at New York 1890-1930 by year and line. Would confirm exact arrival date. Available free on Internet Archive but automated access blocked.

4. **Naturalization records identified**: Rhode Island naturalization records (1802-1945) at NARA Northeast Region (Waltham, MA) and FamilySearch catalog 1378655. Post-1906 naturalization petitions list date of arrival, port, ship name, and last foreign residence. Barnett likely filed in Providence, RI.

5. **WWI Draft Registration Cards identified**: FamilySearch collection 1968530 (free with login). Barnett would have registered in Providence, RI, 1917-1918. The card would contain birth date, birthplace, citizenship status, employer, physical description, and next of kin.

6. **Ellis Island fire impact on Salk records**: The June 15, 1897 fire destroyed the Main Immigration Building and all immigration records dating back to 1855. If Elizabeth Salk arrived before June 15, 1897, the manifest was destroyed (Customs Lists survive separately). If after, the record should exist in the Barge Office records (1897-1900) or rebuilt Ellis Island records (post December 1900).

7. **LitvakSIG All Lithuania Database**: Contains 2.8+ million records including vital records from Vilnius district. Zalmanson birth/marriage records from Vilna may be indexed. Free, searchable online at litvaksig.org.

### Negative Results (All Searches)

1. **Berko Zalmanson / Barnett Salmanson passenger manifest NOT found**: Searched under name variants Berko Zalmanson, Berl Zalmanson, Berko Zalmanzon, B. Salmanson, Barnett Salmanson, Benjamin Salmanson. No results from any web search. All databases require login or paid access for individual record searches.

2. **Elizabeth Salk / Zalk 1897 passenger manifest NOT found**: No results for Salk, Zalk, or variants arriving 1897 with a child from Poland/Russia.

3. **Abraham Salk / Moshe Salk immigration record NOT found**: No results for Abraham Salk arriving Providence, RI, 1894-1896.

4. **Barnett Salmanson naturalization record NOT found via web search**: Rhode Island naturalization records exist (FamilySearch catalog 1378655, NARA Waltham) but are not searchable via free web queries. Ancestry collection 61208 and 2897 cover RI naturalization records but require subscription.

5. **Barnett Salmanson 1960 obituary NOT accessed**: Multiple search results reference his children's obituaries mentioning him, but Barnett's own 1960 obituary full text was not retrievable (403 errors on Legacy.com, Dignity Memorial, Jewish Rhode Island).

6. **1930 Census record NOT directly accessed**: Known to list "Benjamin Salmonson" as head of household in Providence, RI (data already in vault from earlier research), but the original record was not re-accessed in this session.

7. **Chronicling America newspapers**: Attempted to search December 1904 New York newspapers for shipping intelligence mentioning the Baltic. Found a reference to The Sun (NY), December 20, 1904, page 13, but could not access the OCR text (403 error).

8. **Morton Allan Directory**: Available on Internet Archive (archive.org/details/mortonallandirec00balt) and Google Books. Would confirm exact Baltic arrival date for December 1904. Automated access blocked (403).

### Assessment

The SS Baltic immigration claim is **partially verified**: the ship, route, sailing date, and transit time are all confirmed by independent Tier 2 sources, making the December 23, 1904 arrival plausible and consistent. However, the individual passenger record for Berko Zalmanson has NOT been independently located. The claim remains at **Moderate Signal** confidence: one primary source (MyHeritage immigration record, Tier 3) with corroborating circumstantial evidence (ship confirmed operational, sailing date confirmed, transit time consistent) but no independent primary source verification.

### Recommended Human Follow-Up Actions

1. **Highest priority**: Search Steve Morse One Step (stevemorse.org/ellis/passengers.php) for Berko Zalmanson on SS Baltic, December 1904. Try Soundex and Daitch-Mokotoff phonetic searches. This is free and requires no login.
2. Search JewishGen EIDB Gold Form (jewishgen.org/databases/eidb/ellisgold.html) for last name Zalmanson with town Vilna. Free with JewishGen registration.
3. Search FamilySearch collection 1968530 for Barnett Salmanson WWI Draft Registration Card, Providence, RI. Free with FamilySearch login.
4. Search FamilySearch collection 1368704 for Berko Zalmanson, Ellis Island, 1904. Free with login.
5. Search Ancestry collection 7488 for Berko Zalmanson on SS Baltic, December 1904 (requires paid subscription).
6. Search LitvakSIG All Lithuania Database (litvaksig.org) for Zalmanson in Vilna/Vilnius.
7. Request Abraham Salk's 1925 Rhode Island death certificate from RI State Archives.
8. Search Statue of Liberty Foundation (statueofliberty.org) for Salk/Zalk arriving 1897, and for Abraham Salk arriving 1894-1896.

### Vault Files Updated
- Barnett_Salmanson.md: Added Immigration Record Verification section, additional data discrepancy entry for SS Baltic.
- Elizabeth_Salk.md: Added Immigration Record Search section with 1897 fire context and family travel analysis.
- Abraham_Zolly_Salk.md: Added Immigration Record Search section with database recommendations.
- Open_Questions.md: Updated #4 (Barnett's birth year) with search results and additional resolving records.
- Research_Log.md: This entry.

---

## 2026-04-14: Tier 1 Church Certificate Integration and Stephania Benning Name Discrepancy

### Summary
Systematic integration of Tier 1 church record data from three Waldhütten church certificates (KINDER/Assets/03.pdf, MUTTER/Assets/04.pdf, VATER/Assets/05.pdf) into vault files. All three certificates were issued by Pastor A. Bogeschdorfer from the Evangelical Church A.B. parish registers in Waldhütten (Valchid), Transylvania. These are Tier 1 primary sources and supersede all Tier 3 GEDCOM data.

### Critical Discrepancy: Stephania Benning vs Sara Schuller (cross_reference_audit.md #19)
The VATER church certificate (Tier 1) identifies Michael Kascher I's wife as **"verwitwete Stephania Benning"** (b. 27 Jan 1829, Waldhütten; d. 22 Mai 1876, Gebaermutterkrebs). The GEDCOM and all derivative trees call her **"Sara Schuller"** (b. 27 Jan 1829; d. 27 May 1876, uterine cancer). Same person, completely different names. Tier 1 supersedes: adopted **Stephania Benning** as correct. The "Sara Schuller" name likely arose from confusion with her mother Sara Benning and/or father Johann Schuller.

### Additional Discrepancy Resolved: Michael Kascher son birth year (#22)
KINDER certificate digit ambiguous (1889 or 1899). **1889 confirmed** by chronological sibling sequence, SSDI, 1913 marriage record (age 24), 1930 census (age 41).

### Data Integrated from VATER Certificate (Assets/05.pdf)
Georg Kascher (b. Mar 1792, Wurmloch) and Maria geb. Wagner now confirmed by Tier 1. Leonhard Schuller birth year ~1770 added. All dates for Michael Kascher I, Stephania Benning, Johann Schuller, Sara Benning confirmed.

### Data Integrated from MUTTER Certificate (Assets/04.pdf)
Martin Binder: Organist occupation added. Esthera Theil: birthplace corrected to Malmkrog (not Waldhütten). Marriage date 15 Jan 1817 added. Christian Weber: Organist in Kreisch. Wife's name corrected from garbled GEDCOM. Georg Krauss (Alias Binder): baptism 14 Feb 1794, father Johannes. Johann Binder: confirmed as Johann (not "Petrus" per Siebenbuerger.de).

### Files Updated
cross_reference_audit.md (#19-22), Sara_Schuller.md, Michael_Kascher_Sr_1864.md, Michael_Kascher_Transylvania.md, Regina_Kascher.md, Henry_Michael_Kascher.md, Georg_Kascher.md, Maria_Wagner.md, Leonhard_Schuller.md, Martin_Binder.md, Christian_Weber.md, Anna_Weber.md, Esthera_Theil.md, Georg_Krauss.md, Johann_Krause_Binder.md, Anna_Binder.md, Timeline.md (26 new events), Research_Log.md.

---

## 2026-04-14: Salk Family Research Part 2: Hebrew Headstone Inscription and Census Data

### Summary
Conducted targeted web research on the Salk family using new data from Elizabeth (Salk) Salmanson's headstone (BillionGraves, Lincoln Park Cemetery, Warwick, RI) and 1930 Census records. Ran 30+ web searches covering Hebrew headstone inscription parsing, Jewish naming conventions, Find a Grave, BillionGraves, Rhode Island death indexes, census records, Providence Salk family obituaries, and Jewish genealogy resources. Multiple sites returned 403 errors on programmatic access (Find a Grave, BillionGraves, JewishGen, Pealim.com, RI Historic Cemeteries database).

### Key Positive Results

1. **Hebrew headstone inscription parsed (preliminary)**: Elizabeth's headstone contains the text "הילדה בת משה שמואל בן דב בער זאוועל בן ר דב בערר ליבה בת ר אברהם ר דוב בער בר לוי יצחק סאלמאנסאן". Preliminary parsing indicates:
   - Elizabeth's Hebrew name: **Hilda** (הילדה)
   - Elizabeth's patronymic: **bat Moshe** (daughter of Moshe/Moses)
   - This suggests her father's Hebrew name was **Moshe**, not Abraham/Avraham as in the GEDCOM
   - The name **Avraham** appears later in the inscription but likely refers to a Salmanson/Zalmanson ancestor (Liba bat R' Avraham), not to Elizabeth's father
   - The inscription traces Barnett Salmanson's lineage: Shmuel ben Dov Ber, Zavel ben R' Dov Ber, and R' Dov Ber bar Levi Yitzchak Salmanson
   - Names are consistent with the known Zalmanson genealogy (Levi Itzhak Zalmanson, Srul Mendel, Zawel Deych)

2. **Hebrew abbreviation ר confirmed**: On Jewish tombstones, ר (resh) abbreviates "Reb" (Mr.), a respectful title, NOT necessarily indicating rabbinical office. This is distinct from הָרָב (ha-rav, "the Rabbi").

3. **Moshe and Abraham are distinct names**: Confirmed via multiple sources that Moshe (Moses) and Avraham (Abraham) are completely separate Hebrew names with no etymological connection. They are not variants of each other. This makes the discrepancy between the headstone (Moshe) and the GEDCOM (Abraham) significant.

4. **Norton E. Salk family confirmed**: Norton E. Salk (1927-2007), architect, born in Providence, was the son of **Louis and Belle (Feingold) Salk**. Siblings: Donald Salk, Judith Benharris, Harriet Simon. This confirms Norton as part of the Hyman Salk hardware family line (Hyman > Lewis/Louis + Belle Feingold > Norton).

5. **Harold Salk family confirmed**: Harold Salk (1932-2024) was born and raised in Providence, son of **Samuel and Ruth (Fleisig) Salk**. This confirms Harold as part of the Hyman Salk hardware family line (Hyman > Sam + Ruth Fleisig > Harold).

6. **Three distinct Salk families in Providence identified**:
   - Abraham Salk family (d. 1925; associated with Lincoln Park Cemetery)
   - Hyman Salk family (hardware store founder; sons Sam and Lewis/Louis)
   - Harvey M. Salk family (1921-1997; buried at Sons of David and Israel Cemetery)

7. **1930 Census data confirmed**: Elizabeth age 43, immigration 1897, husband "Benjamin Salmonson," both parents born in Poland. This is consistent with the existing vault data.

8. **Elizabeth's headstone dates confirmed**: Born March 5, 1887; Died November 30, 1974. Hebrew dates: ~5648 birth, 17 Kislev 5735 death. Age at death: 87 years, 8 months, 25 days (consistent calculation).

9. **Jewish married woman headstone conventions**: Standard Ashkenazi tombstone convention is to list the deceased's patronymic (father's name) via "bat" (daughter of). The husband's lineage may also be listed separately on the same stone, but the convention varies. Elizabeth's stone appears to contain both lineages.

10. **Rhode Island death records 1925 confirmed accessible**: RI State Archives (sos.ri.gov) holds death records 1853-1975; records 50+ years old are public and obtainable. FamilySearch has RI vital records indexes (1846-1950). Abraham's 1925 death record should be obtainable through either source.

### Key Negative Results

1. **No Find a Grave or BillionGraves record found for Abraham Salk**: Searched both databases; neither has an entry for Abraham Salk at Lincoln Park Cemetery or elsewhere in Rhode Island.
2. **No Find a Grave or BillionGraves record found for Tauba Salk**: No records under any name variant (Tauba, Toby, Fannie, Pheabe, Theresa Salk).
3. **No Abraham Salk obituary found**: Searched Providence Journal archives, Legacy.com, GenealogyBank; no results for 1925.
4. **No Salk family 1910/1920 Census records accessible**: Census records require Ancestry.com or FamilySearch subscription/login. Not accessible via web search.
5. **No Salk/Zalk passenger manifest found for 1897 immigration**: General passenger list resources identified but no specific family records located. Port of Providence passenger lists 1872-1910 are missing/presumed lost; family likely arrived via New York.
6. **No Anna Salk Zipperman or Marry Salk Lyons records found**: Searched obituaries and general web; no results for either of Abraham's other daughters.
7. **Rhode Island Historic Cemeteries database not searchable programmatically**: rihistoriccemeteries.org requires browser-based access for name searches.
8. **JewishGen given names database not accessible programmatically**: Requires browser access to search for Hebrew name equivalents.
9. **BillionGraves headstone photo not accessible**: Requires BillionGraves account to view full-resolution headstone images.

### Files Updated
Abraham_Zolly_Salk.md (Hebrew name discrepancy, burial location, other Salk families), Elizabeth_Salk.md (Hebrew inscription analysis, father's Hebrew name discrepancy), Open_Questions.md (OQ #13, #14, #16 updated; OQ #19 added for Hebrew inscription), Research_Log.md, Timeline.md (headstone dates added)

---

## 2026-04-14: Systematic Yichus Narrative Integration

### Summary
Performed a systematic review and integration of all data from the Yichus narrative (Assets/Yicchis and Narrative.PDF, 10 pages) into vault files. The document was partially integrated in earlier sessions; this session extracted remaining unintegrated data and corrected errors.

### Key Data Integrated

**1. Florence Markel Mermelstein: exact dates and immigration details added.**
- Birth: May 15, 1909 (from typed family tree listing, pages 1-5). Previously recorded as "1909" without exact date.
- Death: November 24, 1990 (from typed family tree listing). Previously recorded as "1990" without exact date.
- Immigration: 1923, arrived alone on the ship "The Liberty" (from Ruth Gold narrative, pages 6-8).
- Husband David Mermelstein's Hebrew name (Aaron Dovid) and dates (1909-1990) added from typed family tree listing.
- Files updated: [[Florence_Markel_Mermelstein]], [[Timeline]]

**2. Birth order of Heshel and Leah's eight surviving children: CORRECTED.**
- Previous vault order: 1. Minnie, 2. Avraham Chaim, 3. Masha, 4. Morris, 5. Sarah, 6. Hannah, 7. Florence, 8. Pessel.
- Corrected order per Yichus narrative (pages 6-8): 1. Freitca Miritza (Minnie), 2. Mashe (Masha), 3. Moishe Myer (Morris), 4. Tsirl (Sarah), 5. Avraham Chaim, 6. Hannah, 7. Sura Feiga (Florence), 8. Pessel (Peggy).
- The key change: Avraham Chaim moved from position #2 to position #5; Masha, Morris, and Sarah moved up.
- Hebrew/Yiddish names added to all children where the Yichus provides them.
- Files updated: [[Heschel_Herman_Markel]], [[Leah_Frei]], [[Minnie_Markel_Sternbach]], [[Masha_Markel_Tachner]], [[Morris_Markel]], [[Sarah_Markel_Tachner]], [[Avraham_Chaim_Markel]], [[Hannah_Markel]], [[Florence_Markel_Mermelstein]], [[Pessel_Peppy_Frei]]

**3. Karp family (page 10) expanded.**
- Joseph Karp's siblings (Feiga's brothers-in-law) added: Moishe Myer Karp (Rhode Island; son Mark Karp, professor at Harvard), Nathan Karp (wife Shendelle, 3 children), Abraham Karp (wife Tillie, sons Beryl, Herschel).
- Clarified that Abraham Karp listed in earlier vault version as Feiga's child was actually Joseph Karp's brother. Feiga's confirmed children: Nissan Karp and Friedelle (Frieda) Karp Weidenfeld.
- Daughter's name corrected from "Frieda" to "Friedelle" per the typed family tree listing.
- Files updated: [[Feiga_Frei_Karp]], [[Frieda_Karp_Weidenfeld]]

**4. Sternbach descendants (pages 1-5) expanded.**
- Maurice Sternbach (1912-1998), first child of Abraham David and Minnie, added.
- Florence Buchwald Sternbach (1917, dec.) documented with middle name "Buchwald" from the typed listing; confirmed as the same Florence Sternbach who married David Futtersak.
- Hinda Lea Sternbach Hoffman (b. 1942, m. Victor Hoffman b. 1940) added.
- Files updated: [[Minnie_Markel_Sternbach]]

**5. Open Questions #12 (Isserles/Landau connection) updated.**
- Status changed to PARTIALLY CONFIRMED. The Yichus narrative clarifies that the claimed descent from Isserles and Landau rabbis passes through Leah Frei's pedigree (the Frei/Falk line descended from the Pnei Yehoshua), not through the Markel line. If the Frei family's descent from the Pnei Yehoshua can be documented, the Isserles and Landau connections would follow from published rabbinical genealogies.
- File updated: [[Open_Questions]]

**6. Timeline updated with 16 new dated events** from the Yichus narrative, including the 1878 Heshel/Leah marriage, 1912 Sternbach immigration, 1923 Florence immigration, 1933 Renya Tzoar birth, 1936 Florence/David marriage, 1939 Pogrom, and 1990 Florence/David deaths.

### Data Already Integrated (Confirmed Present in Vault)
The following data from the Yichus was already correctly integrated in earlier sessions:
- Heshel's brother Mattis, 14 children / 8 surviving, conscription, gangrene death 1916.
- Marriage date 1878 (he 16, she 14).
- Pnei Yehoshua descent of the Frei family.
- Leah Frei's sisters (Bashe, Feiga, Frieda Sternback).
- Hannah's refusal of the emigration ticket because she was engaged.
- Sarah Markel's two marriages (Goodman, Tachner) and children (Harold, Irving).
- Rosh Hashanah 1939 Pogrom in Rodzolika Forest; Renya Tzoar as witness source.
- Vigdor Markel and Etti Markel among those murdered.

### Accuracy Check: Existing Person Files vs. Yichus Data
- **Heschel_Herman_Markel.md**: Accurate. All major data present. Birth order corrected this session.
- **Florence_Markel_Mermelstein.md**: Now complete with exact dates and immigration.
- **Morris_Markel.md**: Accurate. Census data and Yichus aligned.
- **Minnie_Markel_Sternbach.md**: Now expanded with all known Sternbach descendants.
- **Sarah_Markel_Tachner.md**: Accurate. Hebrew name Tsirl added this session.
- **Avraham_Chaim_Markel.md**: Accurate. Birth order position corrected (5th, not 2nd).
- **Masha_Markel_Tachner.md**: Accurate. Birth order position corrected (2nd, not 3rd).
- **Hannah_Markel.md**: Accurate. Birth order corrected.
- **Pessel_Peppy_Frei.md**: Accurate.
- **Leah_Frei.md**: Accurate. Birth order corrected.
- **Feiga_Frei_Karp.md**: Expanded with Karp siblings and corrected children list.
- **Frieda_Karp_Weidenfeld.md**: Name variant Friedelle added; Renya birth details added.

### Thelma Salmanson Rodbell Branch (from Yichus typed listing)
The Yichus typed family tree listing includes Thelma's descendants: Allan, Leonard, Kathy, Deborah, Barbara + Husband, Carol + Stephen Leto. The existing vault files (Thelma_Markel.md, Family_Tree.md) already document Alan, Barbara, and Carol. "Leonard" is L.D. Salmanson. "Kathy" and "Deborah" may be children of Barbara or Carol (grandchildren of Thelma), or may be additional names requiring investigation. These names have been noted but not yet assigned to specific family positions pending further clarification.

### Morris Markel "Billy" (from Yichus typed listing)
The Yichus typed listing mentions "Morris Markel (Billy) + Wife + Children." This likely refers to Morris and Helen's son Joseph Harold Markel (known as "Billy" as a nickname) or a grandson. The existing vault has Joseph Harold Markel (b. ~1932) from census records. The nickname "Billy" has not been assigned pending confirmation.

---

## 2026-04-14: Gateway Ancestor Verification for Claimed Royal Descent (Edward I, Henry II, Eleanor of Aquitaine)

### Summary
Conducted comprehensive research to verify whether the claimed descent from English royalty (Edward I Plantagenet, Henry II, Eleanor of Aquitaine) through the Cox family line is supported by a recognized Gateway Ancestor. Searched 30+ web queries across Gateway Ancestor databases, WikiTree, Geni, FamilySearch, Wikipedia, the Cox Family History Project, and scholarly reference works. Attempted to access (and received 403 errors from) charlemagne.org, hereditary.us, magnacharta.com, familypedia.fandom.com, dna-explained.com, and wikitree.com profile pages.

### The Claimed Lines
The pedigree charts (1-46.pdf, Tier 3) claim descent through two routes:
1. **De Clare/Audley/Neville path**: Edward I -> Joan Plantagenet -> Gilbert de Clare + Joan -> Margaret de Clare -> Hugh de Audley + Margaret -> "Baroness Alice DeAudley" -> Ralph Neville -> ... -> colonial families -> Cox line
2. **Courtenay/Clifford/Cocke path**: Edward I -> ... -> Anne Courtenay (1550-1604) -> Anthony Clifford -> Charles Clifford -> Elizabeth Clifford -> Robert Cocke (1561-1608) -> Thomas Cox (1626-1711) -> ... -> Coulson -> Embree -> William Richardson Cox Sr. (b. 1692) -> William Cox Sr. (c. 1730-1814)

### Key Positive Results

1. **Gateway Ancestor databases identified and searched**: The primary scholarly references are Gary Boyd Roberts, "The Royal Descents of 900 Immigrants" (688 immigrants, 387 colonial with progeny); Douglas Richardson, "Royal Ancestry" 5 vols. (257 gateway ancestors); the Hereditary Society Community list compiled by Taylor and Murphy; Order of the Crown of Charlemagne (390 immigrants); Baronial Order of the Magna Charta; David Faris, "Plantagenet Ancestry of Seventeenth-Century Colonists" (137 lines).

2. **No Cox, Cocke, Coulson, Embree, Clifford, Carr, or Richardson found in any Gateway Ancestor list**: Web search results for these surnames in conjunction with Gateway Ancestor databases returned no matches. None of these families appears in the scholarly compilations.

3. **Alice de Audley identity CONFIRMED as Hugh's SISTER (Break 1 verified)**: Alice de Audley (d. 1374), who married Ralph Neville, 2nd Baron Neville, was the daughter of Hugh de Audley, 1st Baron Audley of Stratton Audley, and Isolde le Rous/Mortimer. She was the SISTER of Hugh de Audley, 1st Earl of Gloucester (who married Margaret de Clare, the Plantagenet granddaughter). The Earl's ONLY child was Margaret de Audley, who married Ralph Stafford, 1st Earl of Stafford (NOT Ralph Neville). Sources: Wikipedia: Hugh de Audley, 1st Earl of Gloucester; Wikipedia: Ralph Neville, 2nd Baron Neville; Geni: Alice de Audley, Baroness Neville; Wikipedia: Margaret Audley, 2nd Baroness Audley (all Tier 2). This means Alice carried NO Plantagenet blood to the Neville line.

4. **"Sir Norman Cooke of Lavenham" fabrication CONFIRMED (Break 2 verified)**: WikiTree Space:Cooke-Dubious Pedigree documents that profiles for the Cooke family of Lavenham, Suffolk from approximately 1025-1425 have "Disproven Existence" notices. The G2G discussion (March 2023) confirms no evidence has been proposed for any of these fabricated profiles. Source: WikiTree (Tier 2).

5. **Margaret Neville marriages verified (Break 3 verified)**: Margaret Neville (d. 1372) married (1) William de Ros, 3rd Lord Ros of Helmsley, and (2) Henry Percy, KG. No "Jean Ross" or "Ena Ross" exists in the documented record. Sources: Wikipedia: Ralph Neville, 2nd Baron Neville; WikiTree Neville-349; Geni (all Tier 2).

6. **William Cox Sr. DNA disproof CONFIRMED (Break 4 verified)**: The Cox Family History Project (est. 2008, updated 2020) states explicitly: "William Cox is NOT 'William Richardson Cox' that many ancestry.com, LDS and other databases have mistaken him for and merged the two people into one." Y-DNA testing (Y-37, FamilyTreeDNA, haplogroup R1b-I "Carolina Coxes" R-M269) confirms different paternal lines. Sources: Cox Family History Project DNA page; WikiTree Cox-14022; FamilyTreeDNA Cox DNA Study (Tier 1 DNA + Tier 2 compiled research).

7. **Courtenay descent from Edward I IS real (but irrelevant to this claim)**: Peter Courtenay of Ugbrooke/Chudleigh (d. 1552) was the son of Sir William III Courtenay (1477-1535) of Powderham. The Powderham Courtenays descend from Sir Philip Courtenay (c. 1340-1406), 5th son of Hugh Courtenay, 2nd Earl of Devon (1303-1377), who married Margaret de Bohun (1311-1391), daughter of Humphrey de Bohun, 4th Earl of Hereford, by his wife Elizabeth Plantagenet (1282-1316), daughter of Edward I. This is a DIFFERENT descent route from Edward I (through Elizabeth Plantagenet, not Joan Plantagenet), and is well-documented in the Complete Peerage (Tier 2). However, even if the upper medieval portion through the Courtenays were accepted, the chain still breaks at Break 4 (DNA-disproven Cox connection).

8. **Anne Courtenay and Anthony Clifford CONFIRMED**: Anne Courtenay (1550-1604) was the daughter of Peter Courtenay of Ugbrooke and Elizabeth Shilstone. She married Anthony Clifford (1541-1580). Their children included Thomas Clifford (1572-1634, DD, clergyman), Charles Clifford, Elizabeth Clifford, and others. Elizabeth Clifford married Robert Cocke (b. 1608 per some sources). Sources: WikiTree Courtenay-328; Geni (Tier 3).

9. **Thomas Cox (1626) connection to Cocke/Clifford partially documented**: Thomas Cox was born August 27, 1626 in London, son of Robert Cocke and Elizabeth Clifford. Robert Cocke was born c. 1608 in St. Botolph Bishop, London. Sources: FamilySearch, Geni, genopro.com family trees (all Tier 3). These links are found in user-contributed trees only, not in scholarly sources.

### Negative Results

1. **No Cox/Cocke/Coulson/Embree/Clifford in any Gateway Ancestor database**: Searched all major compilations. None of these surnames appears.
2. **No scholarly source supports the Cocke-to-Clifford-to-Courtenay royal descent**: The claimed line through Robert Cocke -> Elizabeth Clifford -> Thomas Clifford -> Anne Courtenay appears only in user-contributed trees (Tier 3). David Faris's "Plantagenet Ancestry of Seventeenth-Century Colonists" does not include any Cocke/Cox colonist in its 137 documented lines.
3. **No independent verification of the Coulson chain**: Thomas Coulson (c. 1626-1698), Joseph Coulson (1669-1738), Samuel Coulson (1729-1776), and Esther Coulson appear only in user-contributed trees. Joseph Coulson (1669-1707/8) was found in Geni as from Hartshorne, Derbyshire, England, dying in Germantown, Philadelphia County, Pennsylvania; the link from his descendants to the Embree/Cox families is unverified.
4. **charlemagne.org, hereditary.us, magnacharta.com all returned 403 errors**: Could not directly access the full Gateway Ancestor lists. Findings based on web search result snippets and secondary descriptions of these databases.
5. **WikiTree profile pages returned 403 errors**: Could not directly access Cox-580, Cox-14022, Cooke-Dubious Pedigree. Findings based on web search result snippets.

### Conclusion

The claimed royal descent from Edward I, Henry II, and Eleanor of Aquitaine to the Cox family of South Carolina is **REFUTED** with **Strong Signal** confidence. Four independent fatal breaks in the chain have been verified:
1. Alice de Audley was Hugh's sister (no Plantagenet blood to Neville line)
2. Norman Cooke of Lavenham is a known fabrication
3. Margaret Neville's claimed spouse "Jean/Ena Ross" is fictitious
4. William Cox Sr. (SC) is not William Richardson Cox (DE) per DNA

No person in this line is a recognized Gateway Ancestor. The medieval royal figures are real, but they are NOT connected to this family through the claimed chain. Updated: Edward_I.md, Eleanor_of_Aquitaine.md, Henry_II.md.

---

## 2026-04-14: Willis Henrietta Youngblood II&C First Graduate Investigation

### Summary
Conducted targeted web research to determine whether Willis Henrietta Youngblood was among the first 10 graduates of the Mississippi Industrial Institute and College (II&C, now Mississippi University for Women) in Columbus, MS, Class of 1889. Ran 30+ web searches across Athena Commons, Internet Archive, HathiTrust, Chronicling America, Mississippi Encyclopedia, Wikipedia, DPLA, Google Books, MUW ArchivesSpace, and general genealogy databases. Multiple sites (athenacommons.muw.edu, archives.muw.edu, mshistorynow.mdah.ms.gov, mississippiencyclopedia.org, archive.org, en.wikipedia.org) returned 403 errors on automated fetch attempts; information was obtained primarily through web search result snippets.

### Key Positive Result
1. **Complete list of II&C Class of 1889 B.A. graduates identified**: The 1901-02 Annual Catalogue of the Industrial Institute and College (digitized on Internet Archive and indexed by HathiTrust) lists all graduates by year with their subsequent positions. The 10 members of the first graduating class (June 10, 1889) were: **Mary B. Bynum** (teaching in the Philippines), **Fannie A. Camp** (Mrs. S. F. Duggar, Auburn, AL), **Katherine M. Crusoe** (Natural Science, Bakersfield H.S., CA), **Eula Deaton** (teaching H.S., Austin, IL), **Mary H. Mayo** (Franklin Academy, Columbus, MS), **Minnie Paslay** (Professor of Latin at II&C), **Emma Thigpen** (Mrs. Martin, GA), **Cora Walker** (Professor of Natural Sciences at II&C), **Matilda Werner** (Public Schools, Canton, MS), **Mazyck Wilson** (teaching in New York City). Source: "Annual catalogue of the officers and students of the Industrial Institute and College, for the education of white girls of Mississippi," 17th session (1901-02), available at archive.org/stream/annualcatalogueo190102indu (Tier 2).

2. **1890 graduates identified**: Nancy B. Brooks, Louise C. Edmunds, Laura Harris, Ida K. Smith, Allie Stevens. No Youngblood.

3. **1891 graduates identified (partial)**: Rosa Peebles, Geraldine Pierce, Annabel Power, Annie Price, May Prince, Emma Reeves, Stella Rife, Mabel Robertson, Annie Scales, Irene Sherrod, Mary L. Smith, Agnes Stanton, Lula K. Stokes, Florence Stone, Annie Stovall, Bessie H. West, Bettie Young. No Youngblood.

4. **Columbus Index newspaper identified**: The Columbus Index (LCCN sn85034311, 1869-1893) is digitized on Chronicling America and would contain June 1889 commencement coverage. Not yet full-text searched.

5. **Miriam Greene Paslay confirmed as Class of 1889**: Wikipedia and Find a Grave (#157120443) confirm Miriam "Minnie" Greene Paslay (1869-1932) was a member of the first graduating class. She became Professor of Latin and Greek at the II&C. Her partner Pauline Van de Graaf Orr was faculty (hired 1885), not a graduate.

### Negative Results (All Searches)
1. **No Youngblood in any II&C graduate list 1889-1891**: The name Youngblood does not appear in the published graduate lists for 1889, 1890, or 1891 in the 1901-02 Annual Catalogue.
2. **No web results connecting any Youngblood to the II&C**: Multiple searches for "Willis Youngblood" and "Willie Youngblood" combined with "Mississippi Industrial Institute," "MUW," "Columbus MS," and "teacher/education" returned no relevant results.
3. **Athena Commons catalogs not accessible**: The MUW digital repository (athenacommons.muw.edu) blocked automated access. The Meh Lady yearbook begins in 1902, too late for Willis. Earlier catalogs (1889-91) may exist on Athena Commons but require browser access or direct inquiry.
4. **MUW ArchivesSpace not accessible**: archives.muw.edu blocked automated access.
5. **No Lowndes County newspaper articles found**: Chronicling America has the Columbus Index (1869-1893) but full-text search of June 1889 issues was not performed (requires browser access to the digitized pages).
6. **No MUW/II&C historical publication listing early graduates found online**: The university's history page (muw.edu/about/history) and Mississippi Encyclopedia entries confirm 10 graduates in 1889 but do not list names.

### Conclusion
Willis Henrietta Youngblood was **not** among the first 10 B.A. graduates of the II&C (Class of 1889). The handwritten family chart notation "1st Woman Graduate of U.S." is refuted as stated. Willis may have (a) attended the II&C without completing the B.A. program, (b) received an industrial arts certificate rather than an academic degree, or (c) graduated in a later class (1892-1893, before or shortly after her 1890 marriage). The student enrollment rosters (as opposed to the graduate lists) contain over 1,300 names and were not searchable via web research. A direct inquiry to MUW Beulah Culbertson Archives (archives@muw.edu, 662-241-7601) would definitively confirm or refute enrollment. Updated: Willis_Henrietta_Youngblood.md, Open_Questions.md (#18).

---

## 2026-04-14: Heshel Markel WWI Verlustlisten and Military Records Search

### Summary
Conducted comprehensive web research to locate Heshel Markel in the digitized Austro-Hungarian WWI casualty lists (Verlustlisten) and related military databases. Searched 40+ queries across multiple platforms. Key finding: identified the databases and regiment, but could not access the actual Verlustlisten search interfaces due to access restrictions (403 errors on digi.landesbibliothek.at, RadixIndex, GenTeam, DES genealogy.net, MyHeritage, Ancestry). The databases require browser based access with registration (GenTeam, RadixIndex) or paid subscriptions (MyHeritage, Ancestry).

### Databases Identified and Attempted

1. **digi.landesbibliothek.at** (Upper Austrian Regional Library): Hosts digitized Verlustlisten with full text search. Contains approximately 3 to 3.5 million names. URL: http://digi.landesbibliothek.at/viewer/. **Status**: 403 error on programmatic access. Requires browser based access.

2. **GenTeam.at/GenTeam.eu**: Free registration based database with an indexed Verlustliste project (led by Frank Raschka, verlustliste@gmail.com). Contains officers, soldiers, one year volunteers of all religions including Jewish soldiers. URL: https://www.genteam.eu/. **Status**: 403 error. Requires free registration and browser based access.

3. **RadixIndex.com**: Hungarian and Central European genealogy database with a Verlustliste collection (database #8). URL pattern: https://www.radixindex.com/en/databases/8/surname/[surname]. **Status**: 403 error. RadixIndex surname index shows MARKEL exists in the database (at least 1 record).

4. **DES genealogy.net (Daten Erfassungs System)**: Austrian Verlustlisten search at https://des.genealogy.net/ou1wk/search. Search by last name and first name fields. **Status**: 403 error on programmatic access.

5. **MyHeritage**: Collection 10953, "Austria-Hungary, World War I Casualty Lists, 1914-1918." Records include name, birth date/place, casualty list date, rank, unit, death date/place, casualty type. **Status**: 403 error. Requires paid subscription.

6. **Ancestry.com**: Collection 70940, "Austria-Hungary (Czech Republic), War Losses of the Austro-Hungarian Army, 1914-1918." **Status**: 403 error. Requires paid subscription.

7. **The World Remembers** (theworldremembers.org): International WWI names database. Search page at https://theworldremembers.org/search-the-names. **Status**: 403 error.

8. **Geni.com project**: "German / Austro-Hungarian Jewish Soldiers Killed in WWI" (project 12439). URL: https://www.geni.com/projects/German-Austro-Hungarian-Jewish-Soldiers-Killed-in-WWI/12439. **Status**: 403 error. No indexed Markel result visible in web search.

### Key Positive Findings

1. **Regiment identification**: The Sambor district (Bezirk Sambor) was the Ergänzungsbezirk (recruitment district) for **k.u.k. Infanterieregiment "Philipp Herzog von Württemberg" Nr. 77**. The I. Battalion of IR 77 was stationed in Sambor; headquarters, II., and III. Battalions in Przemysl; IV. Battalion in Tuzla. IR 77 was composed of 69% Ruthenians, 30% Croats/Serbs, and 1% others. However, Jewish soldiers from Sambor could also have been assigned to other units, particularly if mobilized during wartime. IR 9 (Graf Clerfait) had its II. Battalion in nearby Stryj and also recruited from the broader area.

2. **Waniowice confirmed near Sambor**: The German language genealogy forum Ahnenforschung.net has a thread titled "Tarnawa nizn, Szandrowiec und Waniowice bei Sambor in Galizien," confirming that Waniowice (the "Vanyavitch" of the Yichus narrative) was a village near Sambor in Galicia. This corroborates the Heschel Herman Markel person file.

3. **RadixIndex surname exists**: The RadixIndex surname search shows that "MARKEL" exists in their databases, including potentially the Verlustliste database. This is a lead for a browser based search.

4. **Yosef Markel in Sambor Yizkor book**: The Sambor/Stary Sambor Yizkor book (Sefer Sambor, ed. Aleksander Manor, Tel Aviv, 1980) lists "Markel, Yosef and Family (5 People)" among the Holocaust martyrs. Page at https://www.jewishgen.org/yizkor/sambor/Sam258.html. This Yosef Markel may be Avraham Chaim Markel's son or another family member (Avraham Chaim was murdered with family in 1939 per the Yichus narrative).

5. **JewishGen KehilaLinks Markel family page**: A dedicated Markel family page exists at https://kehilalinks.jewishgen.org/Drohobycz/families/markel.html. Contains information about Sara Hinde Markel who married Shamay Bartel in 1877, and references to Markel family members in the Drohobycz/Sambor region. Page could not be accessed (403 error) for full content.

6. **FamilySearch Galician military records**: 247 microfilm reels of Austrian military records (1865 to 1930) from the United Military Registration Office in Vienna are digitized on FamilySearch. These include registration cards and personnel files from Galician cities. However, records are organized loosely by surname with no unified index. Most Galician draftee registration sheets have been destroyed. Search the FamilySearch catalog by entering "Osterreich Armee" followed by the regiment name/number to find relevant microfilms.

7. **Jewish Military Chaplaincy Records**: The Rohatyn District Research Group documents that records of the Jewish Military Chaplaincy contain marriage and death records of soldiers from across Galicia, organized by chaplaincy district centers. This is a potential avenue for finding Heshel's death record.

### Negative Results (Logged)

1. Web search "Heshel Markel" OR "Hirsch Markel" OR "Herschel Markel" Sambor Galicia: no specific match
2. Web search "Heschel Markel" OR "Herman Markel" Galicia: no match
3. Web search "Hirsch Markel" OR "Hersch Markel" OR "Herszel Markel" genealogy: no match
4. Web search Verlustlisten "Markel" Galicia soldier: no individual record visible in web results
5. Web search "Markel" OR "Merkl" Verlustliste 1916 Galicia wounded killed: no match
6. Web search "Heshel" OR "Heszel" OR "Herschel" "Markel" OR "Merkel" OR "Merkl" Jewish soldier 1916 gangrene: no match
7. Web search site:radixindex.com Markel Verlustliste: no results indexed by Google
8. Web search site:ushmm.org "Markel" Sambor victims: no results
9. Web search Geni "Heshel Markel" OR "Heschel Markel": no direct profile found
10. All Galicia Database (search.geshergalicia.org) search for Markel in Sambor: 403 error, could not complete
11. JRI-Poland Town Explorer for Sambor (jri-poland.org/town/sambor.htm): 403 error
12. JewishGen JOWBR (burial registry) for Sambor: no specific Sambor records confirmed
13. Ancestry collection 70940 direct search for Markel: 403 error (requires subscription)
14. MyHeritage collection 10953 direct search for Markel: 403 error (requires subscription)
15. GenTeam Verlustliste search for Markel: 403 error (requires free registration via browser)
16. DES genealogy.net ou1wk search for Markel: 403 error
17. digi.landesbibliothek.at search for Markel: 403 error
18. The World Remembers search for Markel Austria: 403 error
19. Geni.com "Austro-Hungarian Jewish Soldiers Killed in WWI" project page: 403 error

### Variant Spellings Attempted
Surname: Markel, Merkl, Markl, Merkel, Marckl
Given name: Heshel, Heschel, Heszel, Herschel, Hersch, Hirsch, Herman

### Files Updated
- [[Open_Questions]]: Updated question #11 with search results and revised next steps
- [[Heschel_Herman_Markel]]: Added military records research section with regiment identification and search leads

### Next Steps (Human Action Required)
1. **GenTeam.eu (FREE, browser only)**: Register at genteam.eu (free) and search the Verlustliste database for "Markel" (and variants Merkl, Markl) in the Military section. This is the most promising free resource.
2. **digi.landesbibliothek.at (FREE, browser only)**: Visit http://digi.landesbibliothek.at/viewer/ in a browser and search for "Markel" in the full text search. Try variant spellings.
3. **RadixIndex.com (FREE/registration)**: Visit https://www.radixindex.com/en/databases/8 and search for surname MARKEL, MERKL, MARKL in the Verlustliste database.
4. **DES genealogy.net (FREE, browser only)**: Visit https://des.genealogy.net/ou1wk/search and search for surname Markel (and variants).
5. **MyHeritage (PAID)**: Search collection 10953 for Markel, Merkl, Markl with any first name variant.
6. **Ancestry.com (PAID)**: Search collection 70940 for Markel variants.
7. **JewishGen KehilaLinks Markel page**: Access https://kehilalinks.jewishgen.org/Drohobycz/families/markel.html in a browser for full family information.
8. **All Galicia Database**: Register at search.geshergalicia.org and search for Markel in Sambor.
9. **FamilySearch military microfilms**: Search FamilySearch catalog for "Osterreich Armee Infanterieregiment 77" to find Sambor recruitment district records.
10. **Kriegsarchiv Vienna (IN PERSON or mail request)**: Write to the Austrian State Archives Kriegsarchiv (kriegsarchiv@oesta.gv.at) requesting search for Heshel/Hirsch Markel, born 1862, Waniowice, Bezirk Sambor, in Grundbuchblatter and Verlustlisten.

---

## 2026-04-13: Brandt and Goldbaum Family Research (Thelma's Maternal Line)

### Summary
Conducted comprehensive web research on the Brandt and Goldbaum families to extend Thelma Markel's maternal line. Helen Brandt married Morris Markel; Helen's parents are Joseph Brandt + Brina Goldbaum (Tier 3 only). Ran 40+ web searches covering Find a Grave, obituaries, RIJHA articles, JewishGen, Gesher Galicia, Yad Vashem, surname etymology, Ahavath Sholom congregation history, census resources, Ellis Island databases, and Rhode Island vital records.

### Key Positive Results
1. **Kate Markel Kaplan (1925-2006) confirmed**: Find a Grave #232002112. Born Dec 6, 1925 (Poland), died Jan 11, 2006. Buried Lincoln Park Cemetery, Warwick RI. Obituary (Providence Journal, Jan 13, 2006): "Born in Poland, Mrs. Kaplan moved to W. Warwick, RI at the age of 3." URI graduate, biochemist at Sloan Kettering. This is the "Kay Kaplan" in the GEDCOM. Maiden name confirmed as Markel.
2. **Immigration date established (~1928)**: Kate born in Poland 1925, arrived West Warwick at age 3 = family immigrated ~1928. This means Thelma (b. 1920) and likely Anne and Frieda were also born in Poland.
3. **Minnie Sternbach = Minnie Markel independently confirmed**: RIJHA article by Rebecca Twersky (RI Jewish Historical Notes, Vol. 7, 1977) independently confirms "Abraham and Minnie Sternbach arrived in Arctic in 1912." The Yichus narrative identifies Minnie as Morris Markel's sister. This cross-confirmation (Tier 2 + Tier 2) elevates the Minnie Markel-Sternbach identification to Strong Signal.
4. **Ahavath Sholom founding history**: Chartered Dec 12, 1919. Seven founding members: Barney Hirshfield, Abraham Sternbach, Morris Shafrin, Joseph Dressler, Harry Fishtein, David Frank, and one Glantz. Congregation of 30 families "could not afford a rabbi"; had "learned men" instead. This creates a discrepancy with the Yichus claim that Morris served as rabbi.
5. **Florence Sternbach Futtersak confirmed as Minnie's daughter**: David Futtersak obituary (Jewish Rhode Island, 2024) identifies Florence (Sternbach) Futtersak as his wife and daughter of Abraham and the late Minnie Sternbach.
6. **Joseph Brandt GEDCOM dates debunked**: Birth ~1815 / death ~1891 are data errors. The identical "27 Jul" in both birth and death dates is a system artifact. A father born 1815 when daughter Helen was born ~1889 is biologically implausible (~74 years old).
7. **Surname etymology**: Brandt = Ashkenazi Jewish, from German/Yiddish "Brand" meaning "fire/conflagration." Goldbaum = Ashkenazi ornamental name, German "Gold" + "Baum" = "golden tree." Both surnames appear in Tarnopol 1910 Jewish Census surname list (Gesher Galicia).
8. **Thelma Rodbell obituary details**: Confirmed as mother of Barbara, Alan (and Shelly), and Carol Salmanson, and sister of Anne Schlusselberg. Stepmother of Sidney, Paul, and Arthur Rodbell.

### Negative Results (Logged)
1. "Joseph Brandt" Jewish immigration Rhode Island: no results
2. "Brina Goldbaum" OR "Bryna Goldbaum" immigration: no results
3. "Helen Brandt" "Morris Markel" marriage Providence Rhode Island: no results
4. "Anne Schlusselberg" obituary Markel Providence: no results
5. "Morris Markel" rabbi Rhode Island census 1920 1930: no results
6. "Helen Markel" OR "Helen Brandt" Find a Grave Lincoln Park Cemetery: not found (different Helen Markel in Virginia)
7. "Morris Markel" Find a Grave Rhode Island: not found
8. "Morris Markel" obituary 1963 Rhode Island: not found
9. "Frieda Markel" Rhode Island: no results
10. Yad Vashem search for "Goldbaum Brina": 403 error on direct database access
11. JewishGen KehilaLinks Drohobycz Markel family page: 403 error
12. RIJHA PDF article: 403 error on direct access
13. Geni.com profiles for Helen Brandt / Morris Markel: 403 errors on profile pages
14. MyHeritage Helen Markel records: 403 error

### Files Updated
- [[Helen_Brandt]]: Major update with immigration data, Kate Kaplan details, corrected dates, research leads
- [[Joseph_Brandt]]: Dates corrected, GEDCOM errors documented, surname research added
- [[Brina_Goldbaum]]: Enhanced with surname research, estimated dates, Holocaust research leads
- [[Morris_Markel]]: Immigration section added, Ahavath Sholom discrepancy documented, Kate Kaplan details
- [[Minnie_Markel_Sternbach]]: Ahavath Sholom founding role confirmed, daughter Florence identified
- [[Thelma_Markel]]: Birthplace and siblings updated
- [[Family_Tree]]: Markel section updated with corrected information and new sources
- [[Open_Questions]]: Added questions 30-32 (Brandt/Goldbaum identity, immigration manifest, Brina Holocaust ID)

### Next Steps
1. Search 1930 US Census for Markel household in West Warwick, RI (Ancestry/FamilySearch)
2. Search Ellis Island / Ancestry passenger manifests for Markel family arriving ~1926-1930
3. Search Gesher Galicia All Galicia Database for Brandt and Goldbaum
4. Search Yad Vashem Central Database for Brina Goldbaum
5. Contact Lincoln Park Cemetery for Morris and Helen Markel headstone data
6. Search Morris Markel naturalization records (FamilySearch RI Naturalization Records)

---

## 2026-04-13: Salk Family Research, Providence Rhode Island

### Summary
Conducted comprehensive web research on the Salk family of Providence, RI to extend Elizabeth (Salk) Salmanson's branch. Ran 30+ web searches covering Find a Grave, obituaries, census context, surname etymology, Lincoln Park Cemetery, Jonas Salk connection, other Providence Salk families, and Adams Drug Company history.

### Key Positive Results
1. **Surname etymology confirmed**: Salk = altered form of Zalk, Lithuanian Jewish, from Yiddish Zalkind (kinui for Shlomo/Solomon). Sources: Ancestry.com, Geneanet, JewishGen.
2. **Troskunai Zalk family identified**: JewishGen KehilaLinks documents a Zalk family from Troskunai (Trashkun), Lithuania. Earliest member Leyzer Zalk; grandson Samuel Zalk (b. ~1830) emigrated to Duluth, MN. Possible connection to Louis (Elizar/Lazar) Salk (b. ~1840 Lithuania): "Leyzer" and "Elizar/Lazar" are both forms of Eleazar.
3. **Hyman Salk hardware family mapped**: Hyman Salk (immigrant) founded tailor shop in Providence 1900. Sons Sam and Lewis. Sam's son Harold (3rd gen, d. 2024); Harold's son Jeffrey (4th gen). Lewis's son Norton (1927-2007, architect). Business now spans 5 generations with multiple RI/MA locations.
4. **Elizabeth (Salk) maiden name confirmed**: Verified by 4 independent Tier 2 obituary sources (Martha Corin, Donald Salmanson, Samuel Salmanson, Charles Salmanson).
5. **Tobey Oresman naming pattern**: Samuel Salmanson's daughter Tobey likely named for grandmother Tauba/Toby (Ashkenazi tradition).
6. **Adams Drug Company**: Founded 1932 by Barnett and sons; grew to 500+ stores, sold 1984 for $100M; became Brooks Pharmacy then Rite Aid.
7. **Jonas Salk**: No direct connection. His parents (Daniel + Dora Press) were NYC based Ashkenazi Jewish from Russian Empire.

### Key Negative Results
- No Find a Grave memorial for Abraham Salk found
- No obituary for Abraham Salk (d. 1925) found online
- "Abraham Zolly Salk" or "Abraham Zolly" returns zero results; name exists only in GEDCOM
- No records found for Anna Salk Zipperman or Mary/Marry Salk Lyons
- No direct documentary link between Abraham Salk and Hyman Salk families
- No 1910/1920 Census data accessible without Ancestry subscription
- Tauba Salk's maiden surname remains unknown

### Files Updated
Abraham_Zolly_Salk.md, Elizabeth_Salk.md, Louis_Elizar_Salk.md, Family_Tree.md, Timeline.md, Open_Questions.md (#13-17 added), Research_Log.md

---

## 2026-04-13: Clark Family of Greenville County, SC (Deep Research)

### Search: "James Hiriam Clark" OR "James Hiram Clark" Greenville County South Carolina
**Query**: Web search for James Hiriam Clark in Greenville County, SC
**Source**: Web search, Ancestry.com record page
**Results**: Found Ancestry.com user-contributed tree record (james-hiriam-clark-24-7cqh41) confirming: born Virginia c.1770, married Mary Neale, 1 child, died after 1835 in Simpsonville, Greenville, SC. No primary sources found. No census records, deeds, or church records located.
**Implication**: James Hiriam Clark remains thinly documented. Only Tier 3 sources exist. Census searches for 1800-1830 Greenville District should be conducted.

### Search: "Jeddiah Clark" / "Jedidiah Clark" South Carolina WikiTree Find a Grave
**Query**: Multiple web searches with name variants
**Source**: Web search, rootsweb sc12164
**Results**: WikiTree has no direct profile for Jeddiah Clark. Rootsweb sc12164 page lists Jeddiah W. Clark (b. 5 Mar 1801; d. 29 Jan 1860) married Gilla "Gilly" Baldwin (b. 9 Aug 1805; d. 25 May 1886). Children: Eli Berry (b. 1825), Perry F. (b. 1831), Jane, and Sarah Elizabeth. No Find a Grave memorial found for Jeddiah.
**Implication**: Rootsweb provides the most detailed children list found so far. Death date differs slightly from GEDCOM (29 Jan vs 27 Jan 1860). Four children now identified.

### Search: Eli Baldwin, Chatham County NC to Greenville County SC
**Query**: Multiple searches for Eli Baldwin WikiTree, Geni, land records
**Source**: WikiTree Baldwin-2330, Geni 6000000105789453937, Greenville County Deed Book I p.218, Chatham County Deed Book L pp.239-240
**Results**: **SIGNIFICANT FINDINGS.** Eli Baldwin (c.1775, Chatham NC; d. 18 Jan 1840, Greenville SC). Son of John Baldwin Sr. (c.1730, Chester PA; d. c.1811, Chatham NC) and Alice Francis Lindley (1736-1781, Quaker). Eli received land from father in Chatham Co. (Aug 1801), deeded land to brother William (Nov 1802), appeared in 1810 Greenville SC census, purchased 250 acres from John Croft in 1812 (Deed Book I, p.218). Married Elizabeth (unknown surname) per WikiTree, or Edaline L. Transon per GEDCOM. Children: Gilley Elizabeth Baldwin and Sylvanus Julius Baldwin.
**Implication**: Baldwin line extended back two generations with Tier 1 land records as corroboration. Quaker connection through Alice Lindley/James Lindley established. Mother's name discrepancy (Elizabeth vs. Edaline Transon) requires resolution.

### Search: John Baldwin Sr. and Alice Lindley
**Query**: WikiTree Baldwin-2336, Geni, FamilySearch
**Source**: WikiTree, Geni, Chatham Historical Journal (March 1994)
**Results**: John Baldwin Sr. (c.1730, Chester, PA; d. c.1811, Chatham, NC) married Alice Francis "Alsey" Lindley (1736-1781). Seven known children: Rachel (married Thompson, TN), Samuel (Baldwin's Mill), John James (moved to SC), Nancy (married Reeves, SC), Eli (SC), John Jr., William. Alice was daughter of James Lindley, Quaker from Chester County PA. Some genealogists question whether "Alsey Lindley" existed as documented.
**Implication**: Baldwin line now extends to Chester County, Pennsylvania with Quaker roots. Multiple Baldwin siblings migrated to SC.

### Search: Eli Berry Clark (1825-1895), son of Jeddiah Clark
**Query**: Multiple searches for Eli Berry Clark, Greenville SC
**Source**: WikiTree Henderson-12233 (indirect), MyHeritage, Cox Family History Project
**Results**: Eli Berry Clark (b. 31 Jul 1825; d. 26 Nov 1895). Married Eliza Jane Cox. Daughter Martha Ann "Mattie" Clark married Winfield Jasper Henderson (b. 9 Jul 1847; d. 10 Jan 1918) on 15 Dec 1868 in Greenville County. Buried at Sonpoint Baptist Fellowship Church Cemetery (formerly Bethuel Baptist Church), Greenville, SC. No Find a Grave memorial found.
**Implication**: New person file created. Eli Berry Clark's marriage to Eliza Jane Cox demonstrates Clark-Cox intermarriage pattern.

### Search: Eli Baldwin wife discrepancy (Elizabeth vs. Edaline Transon)
**Query**: Searches for "Edaline Transon" / "Adaline Transon" / "Edaline Transou" in NC
**Source**: Web search
**Results**: **NEGATIVE.** No results for "Edaline Transon" in Chatham County, NC. Found Rufus Transon in Wilkes County, NC (NC Digital Collections). No other Transon/Transou references in Chatham County.
**Implication**: The name "Edaline L. Transon" from the GEDCOM is very unusual and unverifiable. WikiTree says wife was "Elizabeth (unknown)" married in Forsyth, NC. This discrepancy remains open.

### Search: Molly Mary Clark Henderson connection
**Query**: Searches for Molly Mary Clark, Henderson, Chatham County NC
**Source**: WikiTree Henderson-7309, Geni, Find a Grave 11725276
**Results**: Molly Mary Clark (1722-1804) married Argaleus Hercules Henderson I (c.1720-1806) c.1740 in NC. Their children: Isaac, Nancy, Elizabeth, Ezekiel, John, Lewis, Hezekiah, Abner, James, Frances. Ezekiel Henderson married Elizabeth Brasher and their descendants intermarried with Cox and Clark families in Greenville County SC.
**Implication**: The Clark-Henderson connection through Molly Mary Clark (1722) predates James Hiriam Clark (c.1770) by two generations. She may be a relative of James Hiriam's. The Clark and Henderson families had intermarriage ties in both NC and SC. This is speculative and requires investigation.

### Search: Standing Springs Cemetery Clark burials
**Query**: Find a Grave, cemetery records, Clark family burials
**Source**: Find a Grave 8304975, BillionGraves
**Results**: Only Sarah Elizabeth "Lizzie" Clark Cox (1836-1879) confirmed at Standing Springs Cemetery. No other Clark burials found at Standing Springs. Eli Berry Clark is at Sonpoint/Bethuel Baptist Cemetery instead.
**Implication**: Clark family may have been divided between Standing Springs and Bethuel Baptist church communities.

### Search: Clark-Cox marriage record
**Query**: Thomas Manning Cox + Sarah Elizabeth Clark marriage Greenville SC
**Source**: Web search, Greenville County marriage records
**Results**: **NEGATIVE.** No specific marriage record found. South Carolina did not require marriage licensing until 1911. Record may exist in Standing Springs Baptist Church records (Furman University Special Collections has SC Baptist church records on microfilm).
**Implication**: Furman University's SC Baptist Collection is a key next step for primary source verification.

### Search: John Clarke (1558, Colonial) connection to SC Clarks
**Query**: John Clarke 1558 Great Munden Hertfordshire colonial America South Carolina
**Source**: Web search, Geni, WikiTree
**Results**: A John Clark of Great Munden went to colonial Connecticut (Saybrook, Milford) c.1632, not South Carolina. The existing GEDCOM links John Clarke (1558, Hertfordshire) through Ellen Clark to the Stackhouse family, not directly to the SC Clark line. No evidence of a direct connection between the 1558 John Clarke and James Hiriam Clark of Virginia/SC.
**Implication**: The John Clarke (1558) to SC Clark connection remains unverified and likely spurious. The GEDCOM connects them through the Stackhouse line, not through a direct Clark-to-Clark paternal line. This should be flagged as speculative.

## 2026-04-13: Deych Family Research (Barnett Salmanson's Maternal Line)

### Search: "Deych" / "Deich" / "Deutsch" Jewish family Rokiskis Lithuania
**Query**: Multiple web searches combining surname variants with Rokiskis, Lithuania, Jewish genealogy
**Source**: Web search (multiple databases and resources consulted)
**Results**: No specific individual records for the Deych/Deich family in Rokiskis were found via public web search. The surname is confirmed as an Ashkenazic Jewish variant of "Deutsch" (German), meaning "German" or denoting migration from a German speaking area. Variant spellings include Deych, Deich, Daych, Daitsh, Daitch, Deiches, Deutsch, Teutsch. The Forebears surname database shows "Daych" is most common in Russia (43 bearers), primarily in Moscow, Chelyabinsk Oblast, and St. Petersburg.
**Implication**: The surname is well documented etymologically. No individual records surfaced via web search alone; login-required databases (JewishGen ALD, LitvakSIG, Ancestry, FamilySearch) are needed.

### Search: "Zawel Deykh" / "Sawel Deich" Lithuania genealogy
**Query**: Exact name searches across web
**Source**: Web search
**Results**: **NEGATIVE.** No results found for any spelling variant of Zawel Deykh as an individual. The name does not appear in any publicly indexed web source.
**Implication**: Zawel Deykh is known only from the GEDCOM and Geni.com. His records, if they exist, are in databases requiring login (LitvakSIG ALD, Ancestry, LVIA) or in untranslated archival sources.

### Search: Given name "Zawel" / "Zavel" etymology
**Query**: Yiddish given name Zavel meaning Hebrew equivalent
**Source**: Wikipedia (Zavel Kwartin article), JewishGen Given Names databases references
**Results**: "Zavel" (also Zawel, Savel) is the Yiddish diminutive of the Hebrew name Zevulun (Zebulun). Confirmed by cantor Zevulun "Zavel" Kwartin (1874-1952), who was universally known by the Yiddish form. In Russian documents, the name may appear as "Savely" or "Sawel."
**Implication**: Zawel Deykh's Hebrew name was likely Zevulun. This is useful for searching Russian language archival records.

### Search: Rokiskis Jewish community resources and records
**Query**: Multiple searches for Rokiskis KehilaLinks, LitvakSIG, vital records
**Source**: JewishGen KehilaLinks, LitvakSIG, JewishGen Yizkor Book Project
**Results**: Rokiskis (Yiddish: Rakishok) had a Jewish population of 2,067 (75% of town) in 1900, and 3,500 (40%) in 1939. **Virtually all Jews in Rokiskis were Chabad (Lubavitch) Hasidim.** The Rokiskis SIG owns: 1897 All-Russian Census, candle/box tax records, 1891-1915 Postal Bank Records, 1908 Family List, and an index to vital records from Kaunas Archives. The Rokiskis town administration created a **book of abstracts from Jewish vital records covering 1876-1894** (held in Kaunas Regional Archives). These are abstracts, not full records; birth abstracts omit the mother's name.
**Implication**: CRITICAL. The Rokiskis vital records abstracts (1876-1894) should contain the 1877 Deych-Zalmanson marriage. The Rokiskis SIG may have an index to these records.

### Search: Rokiskis Yizkor Book (Yisker-bukh fun Rakishok un umgegnt)
**Query**: Searches for Deych/Deich in Rokiskis Yizkor book index
**Source**: JewishGen Yizkor Book Project
**Results**: The Yizkor book was published in Johannesburg in 1952 (626 pages, Yiddish). ~367 pages translated. Name index and necrology (165 entries) are searchable on JewishGen. Direct access blocked (403 errors); cannot confirm whether "Deych" appears in name index.
**Implication**: Must search JewishGen Yizkor Book Master Name Index directly (login required).

### Search: Daiches/Deiches rabbinic family of Lithuania
**Query**: "Deiches" family Lithuania rabbinic genealogy
**Source**: JewishEncyclopedia.com, Geni.com
**Results**: Documented Lithuanian rabbinic family. Key members include Rabbi David of Eishishok (c. 1750-1842), Lob Hirsch Daiches (1806-1891, Kovno), Israel Hayyim Daiches (1850-1937, Leeds, England). Centered on Eishishok/Kovno/Vilna, NOT Rokiskis.
**Implication**: Same etymological surname origin as Deykh but no direct connection established. Speculative.

### Search: Lithuanian archival access for Rokiskis Jewish records
**Query**: LVIA, Kaunas Regional Archives, FamilySearch microfilms
**Source**: LitvakSIG, FamilySearch wiki
**Results**: LVIA (Vilnius) holds Jewish vital records for all Lithuania up to 1940. Accepts email requests in English. Kaunas Regional Archives holds revision lists, family lists, tax records. FamilySearch has microfilmed many records. LitvakSIG VRT Project has translated 650,000+ of ~800,000 existing records.
**Implication**: The 1877 Rokiskis marriage record is most likely at LVIA. Can be requested by email.

### Actionable Research Steps (Prioritized)
1. **HIGH**: Search LitvakSIG All Lithuania Database for "Deych"/"Deich"/"Daych" in Zarasai District (free, requires registration).
2. **HIGH**: Contact Rokiskis SIG to search vital records index for 1877 Deych-Zalmanson marriage.
3. **HIGH**: Email LVIA for full 1877 Rokiskis Jewish marriage record.
4. **MEDIUM**: Search JewishGen Yizkor Book Master Name Index for Deych/Deich in Rokiskis.
5. **MEDIUM**: Search Avotaynu Consolidated Surname Index for Deych variants.
6. **MEDIUM**: Search Ancestry Collection 1416 (Lithuania Jewish Birth Records) and Collection 1448 (1897 Census). Subscription required.
7. **LOW**: Search JewishGen JOWBR for Rokiskis Jewish cemetery Deych burials.

---

## 2026-04-13: Youngblood Family Research and Willis Henrietta Youngblood Verification

### Search: Willis Henrietta Youngblood Census Records
**Query**: "Willis Henrietta Youngblood" Greenville SC census records; "Willie Youngblood" Lowndes Mississippi Columbus census 1880
**Source**: Web search, FamilySearch, MyHeritage
**Results**: No direct census images found via web search (login-required databases needed). Existing data confirmed: 1880 Census lists Willie Youngblood, age 17, in Beat 5, Lowndes, Mississippi. Family was in Lowndes County, MS, NOT Greenville County, SC. The SC connection is through the Bright family line.

### Search: "First Woman Graduate" Claim Verification
**Query**: "first woman graduate" United States 1880s; Mississippi Industrial Institute College Columbus first graduating class 1889
**Source**: Web search, Wesleyan College, MUW history, Mississippi Encyclopedia, Wikipedia
**Results**: SIGNIFICANT FINDING. The Mississippi Industrial Institute and College (II&C, now MUW) was chartered March 12, 1884 in Columbus, Mississippi (Willis's hometown), the first state-supported college for women in America. First 10 graduates received diplomas June 10, 1889. Willis was age 21-22 when classes began. Her death record lists "college school teacher." HYPOTHESIS: Willis may have been among the first 10 graduates of the II&C (1889). Known first-class member: Miriam "Minnie" Greene Paslay (1869-1932).
**Next step**: Check II&C catalogs 1889-91 in the Beulah Culbertson Archives at MUW.

### Search: James Youngblood Deeper Ancestry and Edgefield Migration
**Query**: Youngblood Edgefield South Carolina Alabama Mississippi migration; WikiTree Youngblood-746; FamilyTreeDNA project
**Source**: Web search, WikiTree, FamilyTreeDNA
**Results**: Documented Edgefield-to-Alabama migration after War of 1812. Town of Youngblood, Alabama settled 1834 by Edgefield Youngbloods. GEDCOM James is likely son/grandson of WikiTree Youngblood-746 (c. 1740-1792), part of this migration wave. FamilyTreeDNA identifies two Y-DNA groups: pre-1708 English and post-1710 Palatinate German (Jungblut).

### Search: Youngblood Surname Origin
**Query**: Youngblood surname origin German Jungblut
**Source**: FamilyTreeDNA, surname databases
**Results**: Anglicization of German "Jungblut." Peter Jungblut naturalized 1739 from Palatinate, Germany. Dutch variant: Jongbloet. German Jungblut tested did NOT match American Youngblood Y-DNA.

### Search: Bright-Youngblood Marriage Record
**Query**: George Michael Bright Willis Youngblood marriage 1890 Lowndes Mississippi
**Source**: Mississippi Genealogy & History Network, web search
**Results**: No specific marriage record found. Also found: James W. Youngblood married Louisa Clark, Sep 16, 1841, Lowndes County, establishing Youngblood presence by 1841.

### Search: Bernard Kyle Bright Confirmation
**Query**: "Bernard Kyle Bright" 1892 Abingdon Virginia
**Source**: Ancestry.com, Geni.com
**Results**: CONFIRMED. Born June 17, 1892, Abingdon, VA. Parents: George Michael Bright and Willie H. Youngblood. Died December 1978, Jonesborough, TN. Married Velma Imogean Jamison.

### Search: Viola E. Youngblood
**Query**: FamilySearch Viola E. Youngblood 1857-1924
**Source**: FamilySearch (ID LJ1H-YRB)
**Results**: Confirmed 1857-1924. Sister of Willis. Consistent with 1880 Census.

### Search: Commodorie S. Bright
**Query**: Find a Grave Commodorie S Bright
**Source**: Find a Grave (#78562893)
**Results**: Born Jan 31, 1880; died Apr 15, 1959. Buried Woodlawn Memorial Park, Greenville, SC. Wife Stella E. Bright (1894-1965). 1880 birth predates 1890 Bright-Youngblood marriage. Likely not Willis's son.

### Search: High Street Cemetery, Rocky Mount, VA
**Query**: Find a Grave High Street Cemetery
**Source**: Find a Grave (cemetery ID 1960179)
**Results**: 1,372 memorials. No Bright or Youngblood memorials returned in web search.

### Negative Results
- No obituary found for Willis Henrietta Youngblood/Bright (d. 1952 Bristol, VA).
- No Find a Grave memorial for William Henry Youngblood at Forest Hills Cemetery, Chattanooga, TN.
- No Find a Grave memorial for Willis/Willie Bright at High Street Cemetery, Rocky Mount, VA.
- No records found for William Wert Bright or Arthur Wade Bright.
- No records found for Esther Lucy Kyle family.

## 2026-04-13: Brasher/Brashier Family Deep Research

### Search: Elizabeth Brasher parents and Thomas Levi Brasher Jr. will
**Query**: Multiple searches for Elizabeth Brasher parents, Thomas Levi Brasher Jr. will 1789, WikiTree Brasher-122, Empty Branches blog
**Source**: Web search, WikiTree, Geni, Empty Branches on the Family Tree, Find a Grave, genealogy.com forums
**Results**: 
- **Critical finding**: Thomas Levi Brasher Jr.'s will (Sep 27, 1789, proved Apr 6, 1790, SC Will Book Vol A-B 1787-1820, p. 28) **named five sons and no daughters**: Thomas, Aquilla ("Quellea"), Henry, John, and Samuel. Elizabeth is NOT mentioned. However, she was already married (1782), and married daughters were commonly excluded from colonial-era wills.
- **Mother name discrepancy**: Three different names appear for Thomas Levi's wife: (1) "Sarah" in his will and 1790 census (primary sources); (2) "Naomi" on Find a Grave memorial 129180905 for Jane Brasher Ashmore (claimed daughter); (3) "Elizabeth" in one Geni/WikiTree Henderson source. The "A Brazier/Brasher Saga" notes: "we think from circumstances that she is Sarah Lindsey." Some FHL sheets say "Sarah Custace" (likely confusion with grandmother Sarah Constant/Constance).
- The parentage claim (Elizabeth as daughter of Thomas Levi Jr. and Sarah) remains SPECULATIVE. No primary source directly names her as his daughter.
**Updated files**: Elizabeth_Brasher.md (confidence assessment, discrepancies, sources)

### Search: Brasher/Brashier family Greenville County SC, WikiTree, land records
**Query**: Multiple searches across WikiTree Brashier genealogy, Greenville SC, 1790 census, deed books, land grants
**Source**: WikiTree, Find a Grave, Greenville County deeds, scgenweb.org census transcriptions
**Results**:
- 1790 Census Greenville District: Sarah (widow), Aquilla, James, John, Samuel, Thomas, and William Brasher all enumerated.
- Thomas L. Brasher bought 500-acre parcel on Cripple Creek of Reedy River ~1785 for 110 pounds.
- John Brasher: 208-acre grant, 96 District, Reedy Fork of Reedy Creek, Feb 5, 1787 (Book D, p. 195).
- Aquilla B. Brasher: inherited 120 acres on Cripple Creek in 1790; purchased 86 more acres in 1811 (Deed Book L, p. 84).
- Post-1800 dispersal confirmed: John and Aquilla to Christian County KY (~1808), Henry Collins to Shelby Co. AL (~1817), Samuel's widow to DeKalb Co. GA.
**Updated files**: Elizabeth_Brasher.md (migration section, sibling details)

### Search: Brashier/Brasher cemetery records, Find a Grave, Greenville SC
**Query**: Find a Grave Brashier Greenville SC, Standing Springs Cemetery, Ashmore Family Cemetery
**Source**: Find a Grave, web search
**Results**:
- Jane Brasher Ashmore (1776-1859): Find a Grave 129180905, Ashmore Family Cemetery #2, Greenville, SC. Father listed as "Thomas L. Brasher," mother as "Naomi Brasher." (Significant discrepancy with "Sarah" in will.)
- Henry Collins Brasher Sr. (Mar 1, 1771 - Sep 22, 1857): Find a Grave 66620694, Old Chapel Cemetery, Wilsonville, Shelby Co., AL.
- Austin Brashier (1920-1990): Find a Grave 8300037, Standing Springs Cemetery, Simpsonville, SC.
- Walt Brashier (1934-2021): Find a Grave 225014646, Woodlawn Memorial Park, Greenville, SC.
- Elizabeth Brasher Henderson: NO memorial found on Find a Grave. Burial location unknown.
**Updated files**: Elizabeth_Brasher.md (Brashier Legacy section, cemetery details, new Find a Grave sources)

### Search: French Huguenot Brasseur/Brasher origins
**Query**: Robert Brasseur Huguenot France Maryland Virginia, sonsofdewittcolony.org
**Source**: WikiTree Brasseur-19, Brasseur-2, Brasseur-20, sonsofdewittcolony.org, Geni, Find a Grave
**Results**:
- Robert Brasseur: baptized ~1595, Bouches-du-Rhone, France; died ~1663, Calvert Co., MD. Fled to Isle of Thanet, Kent, England; to Virginia ~1635 (1200-acre grant, Nansemond Co.); to Calvert Co., MD ~1658.
- Children included Benois "Bennet" Brasseur (bef. 1620, Rennes, France; d. ~1663), Thomas (~1626), Martha (~1636), Mary (Jan 3, 1646), and an unnamed daughter (~1632).
- The Brasseur surname has 35+ variant spellings.
- Full proposed lineage: Robert Brasseur > Benois > Robert III > William B. Sr. > Thomas Sr. > Thomas Levi Jr. > Elizabeth. Steps 1-5 better documented than 5-7.
**Updated files**: Elizabeth_Brasher.md (Huguenot ancestry section expanded with lineage chain)

### Search: Chatham County NC land grants for Brasher family
**Query**: Aquilla Brasher land grant Chatham County NC 1782, Terrell's Creek
**Source**: Empty Branches on the Family Tree blog, ncgenweb.us Chatham County Deed Abstracts
**Results**:
- Oct 23, 1782: Aquilla Brasher, Thomas Brasher, and "orphans of William Brasher deceased" all recorded land grants from NC.
- Aquilla's grant: 200 acres on Terrell's Creek, waters of Haw River. NC Land Grant #596: 300 acres on N fork of Terrell's Creek, survey certificate dated Nov 18, 1779.
- Aquilla's land boundary adjoined Thomas Brasher's line.
- Aug 5, 1784: Aquilla and wife Mary sold 200 acres to Eli Newlin (blacksmith) for 150 pounds.
- Oct 27, 1784: Thomas and wife Sarah sold their Chatham County land before moving to SC.
- "Orphans of William Brasher" indicates a deceased brother William who also held land.
**Updated files**: Elizabeth_Brasher.md (migration section)

### Search: tnyesterday.com Brasher family, Guilford County NC branch
**Query**: tnyesterday.com Brasher family, Guilford County connections
**Source**: Web search (page itself returned 403)
**Results**:
- Found a **separate Brasher branch** with Guilford County, NC connections: Philip Brashear (b. Dec 17, 1755, Guilford Co.; d. before 1812, Roane Co., TN), Nancy Brashear (b. May 11, 1773, Guilford Co.), Mary "Polly" Brashear (b. Mar 13, 1776, Guilford Co.), Robert B. Brashears (b. Jan 5, 1787, Guilford Co.), Elizabeth Brashear (~1778, Guilford Co., m. Jeremiah Satterfield ~1794, Pendleton District, SC).
- This branch went from Guilford County NC to SC/TN, NOT to Greenville Co. specifically. May be related to Thomas's family but connection unclear.
- The "Elizabeth Brashear" born ~1778 in Guilford County is a DIFFERENT person from Elizabeth Brasher Henderson (~1764/1765).
**Implication**: "Guilford County" reference for Elizabeth Brasher Henderson's family may be a confusion with this separate branch.

## 2026-04-12: Markel Family Galicia Research

### Search: Nissen Mendel Markel on Geni.com
**Query**: "Nissen Mendel Markel" Geni.com genealogy
**Source**: Web search, Geni.com
**Results**: No matching profile found on Geni for Nissen Mendel Markel, Dov Markel, or Heshel Markel. The Jewish Communities of Galicia project (Geni #15745) does not include a Markel family from Sambor/Waniowice.
**Implication**: The Markel family is not yet represented on Geni. This is a negative result.

### Search: JewishGen Markel in Sambor District
**Query**: JewishGen Markel Sambor district Galicia
**Source**: Web search, JewishGen KehilaLinks
**Results**: Found a Markel Family page on JewishGen KehilaLinks under the Drohobycz district: https://kehilalinks.jewishgen.org/Drohobycz/families/markel.html. The page documents Sara Hinde Markel (married Shamay Bartel, 1877) with Sambor area connections. Page returned 403 on direct fetch.
**Implication**: A Markel family from the Sambor/Drohobycz area exists on JewishGen. Relationship to Nissen Mendel Markel is unknown and requires further investigation.

### Search: Waniowice/Vanyavitch Jewish Community
**Query**: Multiple searches for "Waniowice" + Sambor + Jewish community
**Source**: Web search, Ahnenforschung.net forum, Gesher Galicia, Virtual Shtetl
**Results**: Waniowice confirmed as a real village near Sambor in the Sambor administrative district of Galicia. Listed in 1910 Galician census. German genealogy forum discusses the village alongside Tarnawa nizn and Szandrowiec. No specific Jewish community records found for Waniowice itself.
**Implication**: Jews in small Galician villages typically belonged to the nearest town's kahal. Waniowice Jews most likely belonged to the **Sambor kahal**, which had jurisdiction over surrounding villages. Jewish records for Waniowice residents would be filed under Sambor's metrical books.

### Search: Sambor District Jewish Vital Records
**Query**: Multiple searches for Sambor Jewish records, Austrian civil registration, archive locations
**Source**: Gesher Galicia, FamilySearch wiki, JRI-Poland, AGAD
**Results**: Sambor Jewish vital records held in two main archives: (1) Central State Historical Archives of Ukraine in Lviv (TsDIAL), Fond 701, Series 1; (2) AGAD Warsaw (1,750 Jewish metrical books, mainly 1877-1911). Gesher Galicia has completed indexing Sambor records, available on the All Galicia Database (free). FamilySearch microfilmed records from TsDIAL.
**Implication**: Sambor records are accessible. The All Galicia Database should be searched for "Markel" to find any indexed vital records.
**Next step**: Search the All Galicia Database (search.geshergalicia.org) for Markel entries from Sambor district.

### Search: Heshel Markel Military Service Correction
**Query**: WWI Galician Jewish soldiers, Austro-Hungarian army records, Verlustlisten
**Source**: Web search, FamilySearch wiki, Kriegsarchiv, RadixIndex
**Results**: The Yichus narrative's claim that Heshel was "conscripted into the Polish army" is anachronistic. Galicia was Austro-Hungarian 1772 to 1918. Heshel served in the k.u.k. Armee. The Verlustlisten (casualty lists) are digitized and searchable at digi.landesbibliothek.at. MyHeritage hosts Austria-Hungary WWI Casualty Lists 1914-1918. The Kriegsarchiv in Vienna holds registration sheets, though most Galician draftee records were destroyed.
**Updated files**: Heschel_Herman_Markel.md (biography corrected, Data Discrepancies updated).
**Next step**: Search the Verlustlisten for "Markel" to locate Heshel's regiment and casualty record.

### Search: Isserles and Landau Family Connections
**Query**: Geni.com Moses Isserles Rema Krakow Landau rabbinical family
**Source**: Geni.com, JewishGen, Wikipedia
**Results**: Rabbi Moses Isserles (Rema, c. 1530-1572) has 440 profiles on Geni. The Landau family has 12,656 profiles. Isserles and Landau families were interconnected through Krakow rabbinical circles (Moshe Landau served with the Rema on the Krakow Beit Din). Both families intermarried with Horowitz, Jaffe, Luria, Katzenellenbogen dynasties. A Markel family connection is plausible (many Galician Jewish families claimed rabbinical descent) but unverified.
**Implication**: The Yichus "Issarles and Landau" claim remains speculative (Tier 3) without specific genealogical documentation of the link.

---

## 2026-04-12: Culpeper Ancestor Person Files Created

### Files Created
Created five Culpeper ancestor person files extending the line from [[Martin_Culpepper]] back to the 12th century:

1. **Thomas_de_Colepeper_Recognitor.md**: Sir Thomas (c. 1170-1247). Recognitor of Grand Assize. Earliest documented Culpeper ancestor. Sources: WikiTree Culpepper-144, Geni, FamilySearch, culpepperconnections.com.
2. **Thomas_Colepeper_Executed.md**: Sir Thomas (c. 1271-1321/22). Executed at Winchelsea for supporting Earl of Lancaster. Married Margery of Bayhall. Sources: WikiTree Colepeper-7, Geni.
3. **John_Colepeper_Hardreshull.md**: Sir John (c. 1305-1376). Married Elizabeth Hardreshull. Sheriff of Kent 1364-1369. Restored after Edward III accession. Sources: WikiTree Colepeper-5, Geni.
4. **Walter_Colepeper_Calais.md**: Walter (c. 1455-1515). Under-Marshal of Calais. Married Anne Aucher. Sources: WikiTree Culpepper-600, WikiTree Aucher-1.
5. **William_Culpepper_Hunton.md**: William (c. 1509-1559). Married Cicely Barrett. "Most living Caucasian Culpeppers worldwide descend from him." Father of Dr. Martin Culpepper. Sources: WikiTree Culpeper-39, WikiTree Barrett-194.

### Lineage Established
Thomas the Recognitor (c. 1170) to Thomas of Brenchley to Thomas of Bayhall (executed 1321) to John of Hardreshull to Thomas of Bayhall to John Colepeper to Walter of Calais to William of Hunton to [[Martin_Culpepper]] (already in vault) to Mary/Mercy Culpepper to [[Samuel_Sandys_MP]] (already in vault).

### Confidence Assessment
All five files are rated Moderate confidence. The sources are predominantly Tier 3 (user-contributed trees: WikiTree, Geni, culpepperconnections.com). The medieval genealogies before c. 1400 should be treated with caution, though the Culpeper family is one of the better-documented English gentry families.

---

## 2026-04-09: Baseline

### Tree Expansion Baseline Count

**Source**: vault-template/Family_Tree.md
**Named individuals at start**: 65
**Breakdown**: Direct line (14), Eastern European (18), Stangle (10), King (5), Kopp (1), Duff (4), Byars (2), Bright (2), Other chart names (9)

---

## 2026-04-09: Iteration 2 — John Stangle

### Search: John Stangle + Eleanor Sands

**Query**: `"John Stangle" born 1744 England "Eleanor Sands" South Carolina genealogy`
**Source**: Web search
**Results**: No direct results for this specific couple. General SC genealogy resources returned.
**Implication**: Stangle family records may not be digitized or indexed online.
**Next step**: Try variant spellings (Stengel, Stangl).

### Search: Stangle/Stengel variants in SC

**Query**: `"Stengel" OR "Stangl" OR "Stangle" South Carolina 1700s colonial German genealogy Greenville Simpsonville`
**Source**: Web search, WikiTree, Geneanet, igenea.com
**Results**: Confirmed German origin of surname. Stangle is variant of Stengel/Stangl (Middle High German "stangen" + "el"). Georg Stengel (b. 1713, Endingen) went to "New-England" before 1752. No specific match for John Stangle in Greenville/Simpsonville.
**Implication**: Surname is definitely German. Colonial German migration to SC is well-documented but this specific family not yet found online.
**Next step**: Check Ancestry.com or FamilySearch directly for Stangle/Stengel in SC.

### Search: Stangle on WikiTree

**Query**: `site:wikitree.com "Stangle" South Carolina OR "Stengel" South Carolina 1700s 1800s`
**Source**: WikiTree
**Results**: ~45 Stangles on WikiTree, ~627 Stengels, but none specifically in SC during 1700s-1800s.
**Implication**: This family line may not yet be documented on WikiTree.
**Next step**: Consider submitting the family data to WikiTree once verified.

---

## 2026-04-09: Iteration 3 — King Family

### Search: William I. King and Kerben King

**Query**: `"William I. King" "Kerben King" Greenville South Carolina genealogy 1862`
**Source**: Web search
**Results**: No specific results for these individuals. General Greenville County genealogy resources returned.
**Next step**: "Kerben" may be an unusual spelling. Try variants.

### Search: Kerben King variants

**Query**: `"Kerben King" OR "Kerbin King" Greenville South Carolina genealogy 1800s`
**Source**: Web search
**Results**: No results. Name may be "Corbin," "Kirby," or another variant.
**Implication**: This family is not indexed under this spelling in free online sources.
**Next step**: Ask family for correct spelling; check Ancestry/FamilySearch.

### Search: King + Standing Springs connection

**Query**: `"King" family Greenville SC "Standing Springs" OR Simpsonville 1800s genealogy cemetery`
**Source**: Web search
**Results**: No specific King family results connected to Standing Springs area.
**Implication**: King family may not be directly connected to Standing Springs; may be a separate Greenville County family.

---

## 2026-04-09: Iteration 4 — Barnett Salmanson (MAJOR FINDS)

### Search: Barnett Salmanson

**Query**: `"Barnett Salmanson" genealogy`
**Source**: Web search
**Results**: FOUND. Leonard Irving Salmanson (1910-1975) on Find a Grave #231959694. Son of Barnett and Elizabeth (Salk) Salmanson. Five children: Leonard Irving, Samuel, Charles, Donald, Martha (Corin). Buried Lincoln Park Cemetery, Warwick, RI.
**Implication**: FILLS THE GENERATION GAP. Barnett + Elizabeth → Leonard Irving → Alan Carl → L.D.

### Search: Barnett + Elizabeth Salk details

**Query**: `"Barnett Salmanson" "Elizabeth Salk" children family`
**Source**: Web search, Jewish Rhode Island
**Results**: Martha E. (Salmanson) Corin obituary confirms parents as Barnett and Elizabeth (Salk) Salmanson. Providence, RI family. Three brothers (Samuel, Charles, Donald) and sister Martha.

### Search: Alan Carl Salmanson

**Query**: `"Alan Carl Salmanson" OR "Alan Salmanson" Rhode Island Providence`
**Source**: Web search, Vericora, Legacy.com
**Results**: FOUND. Alan C. Salmanson was son of Leonard Irving, graduated Moses Brown School 1969 (Providence, RI). Listed as Leonard Irving's survivor. Nephew of Samuel. Family involved in Brooks Drug business.
**Implication**: Confirms full patrilineal chain.

### Search: Samuel Salmanson obituary

**Query**: `"Samuel Salmanson" obituary 2004 "West Palm Beach" Brooks Drug Providence Rhode Island`
**Source**: Legacy.com (Palm Beach Post), Wikipedia
**Results**: FOUND. Samuel Salmanson (age 92, d. Oct 21, 2004). Co-founder of Brooks Drug (500 stores, 10 states). Born Brooklyn, NY. Son James worked in business; nephews Jerrold and Alan also involved. Wife: Hilda. Founded Adams Drug Company.

### Search: Donald Salmanson obituary

**Query**: `"Donald Salmanson" obituary 2015 Providence Rhode Island parents children`
**Source**: Dignity Memorial, Legacy.com, Jewish Rhode Island
**Results**: FOUND. Donald Salmanson (1924-2015), age 91. President of Adams Drug Co. 1975-1984. No children. All siblings predeceased him. Confirms family structure.

### Search: Hilda Salmanson

**Query**: `"Hilda Salmanson" 1916 2016 obituary wife Samuel Providence Rhode Island`
**Source**: Legacy.com (Boston Globe), Jewish Rhode Island
**Results**: FOUND. Hilda (Mittleman) Salmanson (1916-2016, age 99). Wife of Samuel. Daughter of Max and Fannie Mittleman. Children: James Salmanson, Tobey and Richard Oresman. Buried Lincoln Park Cemetery.

### Search: Hannah Kushner Salmanson

**Query**: `"Hannah Kushner Salmanson" OR "Hannah Salmanson" 1914 2001 wife Leonard`
**Source**: Find a Grave, AncientFaces
**Results**: FOUND. Hannah was wife of CHARLES Salmanson (not Leonard). Daughter of Jacob and Dora (Alpert) Kushner. Charles Salmanson (1914-2008).
**Implication**: Corrects earlier assumption. Leonard's wife was Thelma Markel, not Hannah.

### Search: Thelma Markel Salmanson

**Query**: `"Thelma Markel Salmanson" OR "Thelma Markel" 1920 2011 obituary parents children`
**Source**: Find a Grave #231959788
**Results**: FOUND. Thelma Markel Salmanson Rodbell (Sept 12, 1920 - Sept 22, 2011). Married Leonard Irving 1947. Children: Alan C. Salmanson, Barbara Salmanson, Carol S. Salmanson. Remarried Rodbell after Leonard's death.
**Implication**: Confirms Alan's siblings. Jerrold NOT listed as Thelma's child (born 1942, before 1947 marriage).

### Search: Martha Corin obituary

**Query**: `"Martha Salmanson Corin" OR "Martha E Corin" obituary Rhode Island Salmanson`
**Source**: Jewish Rhode Island
**Results**: FOUND. Martha E. Corin (age 95). Daughter of Barnett and Elizabeth (Salk) Salmanson. Married (1) Paul Corin, (2) Edward Schwartz. Children: Rosalind Hill, Larry Schwartz. Survived by brother Donald.

### Search: Jerrold Salmanson

**Query**: `"Jerrold Salmanson" Providence Rhode Island Brooks Drug family`
**Source**: Web search, Wikipedia (Brooks Pharmacy)
**Results**: Jerrold Salmanson (b. Jan 30, 1942), Providence, RI. Nephew of Samuel per obit. Works in family drug business.
**Implication**: Born 1942, 5 years before Leonard + Thelma married in 1947. Either Leonard's son from prior relationship, or Charles's son. Not listed on Thelma's memorial.

### Search: Barnett immigration

**Query**: `"Barnett Salmanson" born parents Russia Lithuania immigration Ellis Island`
**Source**: Web search
**Results**: No specific results. General Ellis Island and immigration resources.
**Next step**: Search Ellis Island passenger database directly; try Zalmanson variant.

### Search: Salmanson / Levi Zalmanson

**Query**: `"Levi Salmanson" OR "Levi Zalmanson" genealogy immigration Rhode Island`
**Source**: Web search, loebtree.com
**Results**: Found reference to "Levi Yitzchak Schneursohn Bunim Zalmanson" on loebtree.com Zalmanson family tree page. Zalmanson = Salmanson (son of Zalman/Solomon).
**Implication**: Potential connection to Chabad-Lubavitch Schneerson dynasty. Needs verification.

---

## 2026-04-09: Iteration 5-6 — King and Duff (negative results)

### Search: Kerben King

**Query**: Multiple variants attempted
**Results**: No results for any spelling variant.
**Implication**: Records not digitized, or name is significantly different from what was transcribed from handwriting.

### Search: Lewis and Mary Duff

**Query**: `"Lewis Duff" OR "Mary Duff" Greenville South Carolina 1800s genealogy "Francis Jesse"`
**Results**: No results.
**Implication**: Duff family records not available in free online sources for this area/period.

---

## 2026-04-09: Iteration 7 — Standing Springs Baptist Church (MAJOR FINDS)

### Search: Church history

**Query**: `Standing Springs Baptist Church Simpsonville SC history founders 1818 German deacon`
**Source**: hmdb.org, Simpsonville Sentinel, standingsprings.org
**Results**: FOUND. Organized 1818. 10 charter members identified. Rev. Nathan Berry first pastor. Meetings held in James Cox's home. Meeting house built c. 1836 on Cox's land.
**Implication**: James Cox confirmed as land donor. Charter members include Henderson and Richardson families.

### Search: James Cox WikiTree

**Query**: `site:wikitree.com "James Cox" 1778 1853 Simpsonville Greenville "Standing Springs" children`
**Source**: WikiTree Cox-14020
**Results**: FOUND. James Cox (c.1778-1853), son of Isaac Cox, born NC. Buried Standing Springs Cemetery. Multiple children documented.

### Search: Rebecca Adeline Cox Henderson

**Query**: `site:wikitree.com "Rebecca Adeline Cox" Henderson 1813 1894 parents children`
**Source**: WikiTree Cox-18821, Henderson-12233
**Results**: FOUND. Full family: Parents Thomas B. Cox + Olive Mary "Polly" Henderson. Married Rev. Henry Langford Henderson. 10 children listed.

### Search: Thomas B. Cox parents

**Query**: `site:wikitree.com "Thomas B. Cox" 1792 1857 South Carolina "Isaac Cox" father`
**Source**: WikiTree Cox-18821
**Results**: FOUND. Thomas B. Cox's parents were William Cox Jr. and Connie Baker (NOT Isaac Cox). Isaac Cox (1828-1905) was Thomas's SON.

### Search: William Cox family

**Query**: `"William Cox" "Connie Baker" South Carolina Greenville genealogy parents children`
**Source**: WikiTree Cox-14022, Cox Family History Project
**Results**: FOUND. William Cox Sr. (c.1726-c.1814) migrated from Orange County, NC to Greenville County, SC in late 1780s with intermarried families (Longs, Blacks, Paynes, Lees, Brashiers). William Cox Jr. (d. 1798) married Connie Baker (b. 1760). 12 children of Thomas B. Cox documented.

---

## 2026-04-09: Iteration 8 — Eastern European / Zalmanson (MAJOR LEAD)

### Search: Zalmanson family tree

**Query**: `site:loebtree.com Zalmanson family tree Schneursohn`
**Source**: loebtree.com
**Results**: FOUND. Levi Yitzchak Zalmanson married Dvorah Leah Schneursohn (daughter of 3rd Lubavitcher Rebbe) in 1826. Rivkah Zalmanson married Yehuda Leib Shneursohn. Shneur Zalmanson married Perla Dvorah Shneursohn.
**Implication**: Multiple Zalmanson-Schneerson marriages. If "Levi" in the family tree = Levi Yitzchak Zalmanson, the family connects to Chabad royalty.

### Search: Salmanson / Zalmanson + Chabad

**Query**: `"Salmanson" OR "Zalmanson" Chabad Lubavitch genealogy Schneerson Russia`
**Source**: Web search, Wikipedia, Chabad.org, geni.com
**Results**: Confirmed that Levi Yitzchok Zalmanson was appointed by Tzemach Tzedek to head a yeshiva in Lubavitch. Married Devorah Leah (Rebbe's eldest daughter) in 1826.
**Implication**: If verified, this connects the Salmanson family to one of the most documented Jewish dynasties in history. WARNING: loebtree.com is user-contributed; needs independent corroboration.

---

## 2026-04-09: Final Count

**Named individuals after expansion**: ~125
**Delta from baseline**: +60 individuals
**Key additions**: Leonard Irving Salmanson, Thelma Markel, Samuel/Hilda/Charles/Hannah/Donald/Martha Salmanson families, William Cox Sr./Jr., Thomas B. Cox, Connie Baker, Olive Mary Henderson, James Cox, Rebecca Adeline Cox Henderson, Rev. Henry Langford Henderson, 10 Henderson children, 12 Cox children, Zalmanson-Schneerson connection lead

---

## 2026-04-09: Cross-Reference Audit Resolution

All 9 previously open discrepancies resolved (see cross_reference_audit.md). Key corrections:
- Jerrold Salmanson is Charles's son, not Leonard's (Hannah's obit + Charles's obit confirm)
- Discovered Deborah Salmanson Roberts (Charles and Hannah's daughter)
- Zalmanson-Schneerson historical connection upgraded to Strong Signal (chabad.org, Rebbe's letter)
- Koch-to-Cox anglicization documented; Palatine German migration explains "Born England" + "faithful German"

---

## 2026-04-09: Deep Research — Salmanson Line Extension

### Search: Barnett Salmanson immigration records

**Query**: Multiple searches for "Barnett Salmanson" and "Zalmanson" in Ellis Island, census, naturalization records
**Source**: Web search (Ancestry, FamilySearch, Statue of Liberty Foundation are behind paywalls)
**Results**: WALL HIT on immigration records. Unable to access Ellis Island manifests, census, or naturalization papers through free web search. Ancestry.com reports 133 immigration records for "Salmanson" but they are paywalled.
**Positive findings**:
- Family was in Brooklyn, NY by 1910 (Leonard b. June 1910); Samuel born June 24, 1912 in Brooklyn
- Martha born in Providence (~1919-1920), so family moved Brooklyn → Providence between 1912-1919
- Adams Drug founded 1932 (not 1933) in Woonsocket and Pawtucket, RI
- Possible Barnett relatives in Brooklyn: David Salmanson (b. ~1891 Russia, wife Eva b. RI), Sam Salmanson (1901-1985, Manhasset NY), Abe Salmanson (Brooklyn)
**Next steps**: Search Statue of Liberty Foundation passenger database (free); search FamilySearch.org census records; check Brooklyn city directories 1910-1912

### Search: Extended Salmanson family details

**Query**: Obituaries and records for all Barnett's children and grandchildren
**Source**: Legacy.com, Jewish Rhode Island, Prabook, Wikipedia
**Results**: FOUND multiple new details:
- Samuel: b. June 24, 1912 (exact date); Navy WWII Seabees, Johnson Island
- James A. Salmanson (Samuel's son): b. March 10, 1945, Syracuse '67, MBA Babson '70, vice chairman Adams Drug
- Martha: died Sept 26, 2015 (exact date), age 95, graduate Central High School
- Thelma married Leonard Rodbell in 1978, moved to Atlanta
- Adams Drug: sold 1984 for $100M; converted to Brooks Pharmacy 1986; acquired by Rite Aid 2006

**Remaining expansion targets**:
1. Barnett Salmanson's birth name and immigration records (PAYWALLED -- need Ancestry.com or FamilySearch direct access)
2. Kascher surname origin and connection to SC families (research in progress)
3. Henderson deeper ancestry (research in progress)
4. Salmanson spouse families: PARTIALLY DONE. Found Thelma's sister Anne Schlusselberg, Hannah's siblings (Esta Katz, Samuel, Phillip Kushner), Hilda's grandchildren. WALL on all parents: requires census/vital records.
5. Salk family: Found 3+ branches in Providence but could not identify Elizabeth's specific parents. WALL: paywalled.
6. King family ("Kerben" spelling verification)
7. Stangle family in SC (check Ancestry.com/FamilySearch)
8. Duff family records
9. Higher-resolution photos of large handwritten chart (IMG_0782-0785)
10. Cox line beyond William Cox Sr.: WALL HIT. DNA + primary sources confirm parents unknown. Key correction: Isaac Cox is William Sr.'s SON (not brother). William Sr. b. c.1730-1735, NOT 1726. NOT son of William Richardson Cox (1692-1767, Quaker). Y-DNA: R1b-I "Carolina Coxes" (British Isles origin). Koch→Cox theory unlikely for this family. James Cox married Dianah/Diana Black. Alice (maiden name unknown) was William Sr.'s wife.
## 2026-04-10: Immigration Search (prompt 11)

### Search: SS Baltic passenger manifest, Dec 23, 1904

**Query**: Multiple searches for Zalmanson/Salmanson/Salmonson + SS Baltic + 1904
**Results**: WALL. Manifest exists but is behind paywalls (Ellis Island Foundation, Ancestry, FamilySearch). SS Baltic confirmed as White Star Line, Liverpool-New York route.
**Next step**: Search directly on FamilySearch (free) or MyHeritage for "Zalmanson" on SS Baltic Dec 1904.

### Search: Siblings Gita and Zalman Zalmanson immigration

**Results**: NEGATIVE. No records found for either sibling.

### Search: Jacob Kushner (Providence) passenger manifest

**Results**: DISAMBIGUATION needed. Found Jacob (Yankel) Kushner arriving Oct 7, 1905 (Philadelphia family, son Morris in Detroit) but this is DIFFERENT from our Jacob Kushner of Providence (b. Jan 27, 1886, Russia). Providence Jacob's manifest not found. Arrival 1890 would predate Ellis Island (opened 1892); would be Castle Garden.

### Search: David Salmanson as possible sibling of Barnett

**Results**: David Salmanson (b. ~1891 Russia, wife Eva b. RI) in Brooklyn. Moderate Signal as possible sibling/brother Zalman. Circumstantial: same surname, birthplace, era, RI wife.

### Search: Barnett Salmanson WWI draft registration

**Results**: WALL. Cards behind paywalls (FamilySearch free, Ancestry subscription). Barnett (b. 1883) would register in 3rd registration (Sept 12, 1918, ages 18-45).

---

11. Henderson deeper ancestry: MAJOR FINDS. Traced back 4 generations to James Henderson + Mary Rhodes (~1716 Scotland?). Ezekiel Henderson (1763-1846) was Revolutionary War veteran (pension S6994). Key discovery: Olive Mary "Polly" Henderson and Brashier Henderson were SIBLINGS (both children of Ezekiel), making the Rebecca Cox + Henry Henderson marriage a first-cousin marriage.
12. Kascher: Rare German/Central European surname. Panciera was Kathryn's EX-HUSBAND not sibling.

---

## 2026-04-10: Deep Line Research Results

### Brecht/Bright line extended to 1563 (Strong Signal)
Conrad Kuntz Brecht (~1563, Neudorf, Baden) → Christoph Stoffel (1591-1665, Schriesheim) → Hans Balthasar (1636-1703, Schriesheim councilman) → Johannes Michael (1662-1719) → Johann Michael Brecht (1706-1794, emigrated 1726 to PA, wife Margareta Simone, French Huguenot) → George Adam Bright (1730-1804, to VA then SC). All from Lutheran Church of Schriesheim records.

### Henderson line extended to 1632 Scotland (Strong Signal)
James Henderson Sr. (~1632, Perthshire Scotland → Somerset Co. MD 1661) → William "the Sawyer" (before 1668) → James "the Mariner" (~1689-1752, DNA confirmed) → James Isaac Jr. + Mary Rhodes → Argaleus Hercules Henderson I.

### Moseley line to 1649 immigrant (Moderate Signal)
Samuel Moseley's parents possibly Marvel Moseley Jr. (1682-1753) + Mary Davis. Connection to William Moseley (1649 Rotterdam immigrant) speculative; Arthur Moseley → Marvell Sr. link undocumented.

### Huff origins
Daniel Huff (c.1715-1777, Brunswick VA) parents unknown. Close relative (possibly brother) of William Huff who married Elizabeth Lundy. Both received adjacent land on Pigeon Roost Creek 1753.

### Thomas Manning Cox DISCREPANCY
Verification found Thomas Manley Cox (son of Thomas B.) may have married Sarah Elydia Dacus, NOT Sarah Elizabeth Clark. Thomas Manning Cox who married Clark may be a different person. Roxanne Cox not found among Thomas Manley's documented children. Needs resolution.

### Kascher verification
Georg Kascher 1792: corroborated (Genealogy.com). Anna Binder 1868-1915: corroborated (Siebenbuerger.de). Falk/Pfaff individuals: unverified. Rosina living to 103: unverified.

### SC Pedigree Verification
**CRITICAL CORRECTION**: William Cox (b.1798) = **Isaac Cox's son** (Cox Family History Project), NOT Thomas B. Cox's. Manning Cox descends from Isaac's branch: Wm Cox Sr. → Isaac → William (1798) → Manning (1828).
**Lewis Huff + Mary Eliza Brashier**: CONFIRMED (WikiTree Huff-142). Lewis b. 1803 VA, d. 1873 SC. "Elizabeth" in children list may = Mary Elizabeth.
**Larkin Long + Sarah**: UNVERIFIED (MyHeritage only).
**James Youngblood + Mary Bailey**: UNVERIFIED (WikiTree says Bradley not Bailey).
**Jeddiah Clark + Gilley Baldwin**: PARTIALLY CONFIRMED (Baldwin family in community, specific parents Tier 3 only).
**George Michael + Mary Neil**: generation confusion; likely George (1782-1873) = Samuel Graham Bright's father.

### Transylvanian Pedigree Verification (8 great-great-grandparent couples)
All from MyHeritage tree (Tier 3). Surnames confirmed in correct geographic area but specific couples unverified:
1. Georg Kascher + Maria Wagner: PARTIALLY CONFIRMED (Genealogy.com forum)
2. Johann Schuller + Sara Benning: UNVERIFIED (Benning surname documented in Kreisch)
3. Johann Krause + Esthera Theil: UNVERIFIED (both surnames in Kreisch/Wurmloch area)
4. Christian Weber + Sara Valentin: UNVERIFIED
5. Mathias Johann + Konnerth: PARTIALLY (Konnerth confirmed in Wurmloch; John Konnerth m. Sophia Rienerth in Cleveland)
6. Johann Probstdorfer + Maria Ranft: UNVERIFIED (Probstdorf village identified in Sibiu district)
7. Mathias Pfaff + Reinerth: PARTIALLY (Pfaff confirmed in Petersdorf; Reinerth confirmed as Saxon surname)
8. Johann Dressler + Sommer: PARTIALLY (Johan Dressler b.1889 Petersdorf → Montville OH on Ancestry)

Critical: Sara Schuller was widow of Stephann Benning (not maiden name Benning). Petersdorf = Petersdorf bei Marktschelken (Petis). Lutheran church registers not indexed online.

### Barnett Obituary and Elizabeth Census (Tier 1-2)
Barnett obituary: "born in Russia, son of the late Lavi and Rachel Salmanson" (confirms Levi Itzhak + Rochel Tsine). Sister Mrs. Gittel (Gita confirmed). 56 years Providence. Founder/treasurer Adams Drug + 36 corporations.
Elizabeth 1930 Census: born ~1887 POLAND, immigrated 1897. Both parents from Poland. Barnett = "Benjamin" on census.

### Brecht Pre-1563 Research
Conrad Kuntz Brecht (~1563) is the confirmed endpoint. Father may be "Hans Brecht" (1579 church record, uncertain ID). Deeper ancestry (Mayor von Hohenworth, Tyrol): legendary, no primary sources. Neudorf destroyed repeatedly in 1600s (8 families by 1683); pre-1600 records almost certainly lost. Catharina married Conrad March 24, 1584; her father Melchior Camerer + Anna Paulchen. Brecht = short form of Albrecht (berht = bright). Schriesheim church records from ~1558 available on Archion.de. Best resource: A.G. Green "Historical Sketch of the Bright Family" (1900, FamilySearch #1036369).

### Chabad Deep Line Research (Pre-1600)
Maharal of Prague (c.1525-1609) confirmed as ancestor through 7-generation chain: Chaim of Worms (~1445) → Bezalel (~1480) → MAHARAL → Bezalel Charif → Shmuel Loew (1576) → Yehuda Leib (~1625) → Moshe Loew of Posen (1663) → Schneur Zalman Loew (1692) → Boruch Poisner (1721) → ALTER REBBE.
Rosa Luria: UNVERIFIED. Maharal descent from King David: CONTESTED (Perels' 1745 source has errors). Katz line = second Maharal connection through Isaac Katz (Maharal's son-in-law). Portugaler = Sephardic Portuguese origin.

### Brecht Pre-1563 Research
Conrad Kuntz Brecht (~1563) confirmed as endpoint. Father possibly "Hans Brecht" (1579 church record). Deeper = legendary.

### Huff = HOUGH Discovery
Daniel Hough + Mary Worley = earliest Huff ancestor. Surname Hough→Huff. Colonial Hough/Sands connection: John Hough + Ann Heald, Richard Sandys + Hester Aucher (possibly English noble family).

### Cox MyHeritage Tree WARNING
Uses erroneous Quaker merger (William Richardson Cox). DNA disproves. Do NOT trust above Isaac Cox. Clark/Baldwin line new: Eli Baldwin + Edaline L → John Baldwin + Alice Frances.

### Cox/Henderson/Moseley/Huff Deep Research
**Cox**: Brick wall holds. Virginia origin most likely (migration patterns). Lead: James Cox (d.1738 Orange Co. VIRGINIA) son William. Big Y-700 upgrade recommended.
**Henderson**: "Johne Hendersone of Perth" found in Scottish OPR! Baptisms: Gilbert (1630), James (Oct 5 1632), Robert (1634). Strong circumstantial match to our James Sr.
**Moseley CORRECTION**: Marvell Moseley Sr. was independent English immigrant (1678 headright Col. Travers), NOT descended from 1649 William Moseley. Chain Marvell→Arthur→William is WRONG.
**Huff**: DNA CONFIRMS Cheshire England origin! Y-DNA matches Hough families from Cheshire. Hough→Huff pronunciation change. England → Isle of Wight VA → Brunswick VA.
**Huff=Hough discovery**: Daniel Hough + Mary Worley (MyHeritage). John Hough + Ann Heald (colonial). Richard Sandys + Hester Aucher (English? Sands/Cowgill connection).

### ALL RESEARCH AGENTS COMPLETE FOR THIS SESSION.

### Independent Verification of Extended Lines

**Brecht/Bright 1563-1794: CONFIRMED (6 generations, Strong Signal)**
All generations verified across WikiTree, Geni, FamilySearch, Find a Grave, RootsWeb. Key corrections: George Adam Bright buried Augusta Co. VA (not Greenville SC). Conrad's wife full name: Catharina Claus Camerer.

**Henderson 1632-1806: PARTIALLY CONFIRMED**
James Sr. first in Northampton VA 1661, then Somerset MD. James "the Mariner" death date debated (1732 vs ~1752). May be same person as James Isaac. Argaleus birth 1720 vs 1727 varies by source.

**Moseley-Huff-Long: PARTIALLY CONFIRMED**
Samuel Moseley + Patty Holloway: confirmed. Rebecca Moseley + James Huff 1793: confirmed. Philemon Jr. + Louisa Amanda Dacus: confirmed (Find a Grave #8153971). Mary Elizabeth Huff + William Thomas Long: confirmed by handwritten notes + headstone, but WikiTree shows her as "Mary E. Pollard" (possible first marriage).

### Thomas Manning Cox: CONFIRMED (Tier 1 sources)
Headstone + 1850 census + 1860 census all confirm. CORRECTION: Manning's father is William Cox (b. ~1798) + Eliza, NOT Thomas B. Cox directly. William is probably Thomas B.'s son William J. "Billy Slick" Cox.

### New Salk/Markel ancestry from MyHeritage Tree (Tier 3, unverified)
Elizabeth Salk's father: Abraham (Charles) Zolly Salk + mother Tauba. Grandparents: Louis E.L.S. + Rose.
Thelma Markel's parents: Morris M.M.M. Markel + Helen Brandt. Morris's parents: Heschel Herman Markel + Leah Frei. Helen's parents: Joseph Brandt + Brina Goldbaum.

---

## 2026-04-10: MyHeritage Pedigree Charts (Tier 3, verification needed)

### SC Maternal Side -- New Parents Identified
- **Larkin Long** + **Sarah S.** = William Thomas Long's parents (confirms handwritten notes "Larken and Sarah Long")
- **Lewis P Huff** + **Mary Brashier** = Mary Elizabeth Huff's parents. "Lewis P" confirms the handwritten notes said "Lewis" not "Philemon." Mother is a BRASHIER -- the Brashiers migrated with the Coxes from NC to SC!
- **George Michael [Bright]** + **Mary M. Neil** = Samuel Graham Bright's parents
- **James YOUN... [Youngblood]** + **Mary BAILEY** = William H. Youngblood's parents
- **Jeddiah W. Clark** + **Gilley Elizabeth** confirmed on the chart
- **William Cox** + **Eliza** confirmed as Manning Cox's parents

### Transylvanian Kascher/Falk Side -- Great-Great-Grandparents
All from MyHeritage tree, classic Transylvanian Saxon names:
- Georg Kascher + Maria Wagner (already known)
- Johann Schuller + Sara Benning (Sara Schuller's parents)
- Johann Krause + Esthera Theil (connection to Kascher unclear)
- Christian Weber + Sara Valetnin (Anna Weber's parents)
- Mathias Johann + Katheri... Konnerth (Mathias Falk's maternal grandparents?)
- Johann Probst... [Probstdorfer] + Maria Ranft (Agnetha Probstdorfer's parents)
- Mathias Pfaff + Katheri... Reinerth (older Mathias Pfaff's parents)
- Johann Dressler + Katheri... Sommer (Katherina Dressler's parents)

### Chabad Dynasty Verification (Independent)
**Alter Rebbe + Mitteler Rebbe: CONFIRMED** (Wikipedia, Chabad.org = Tier 2).
**Boruch Poisner (1721-1790): CONFIRMED** (Geni, Tier 3).
**Schneur Zalman Loew + Rachel Portugaler: CONFIRMED** (Geni, Tier 3).
**Moshe Loew of Posen + Sara Katz: CONFIRMED** (Geni, Tier 3).
CORRECTIONS: Sterna's maiden name = Segal (not Boruchovitch). Yehuda Leib Segal death = ~1818 (not 1918, transcription error). Sheina born ~1774 (not 1773).
UNVERIFIED: Rosa LURIA (1625), Shneur Zalman KATZ (1600). Rivkah "Hirtz" unconfirmed. Beila "Levinsohn" unconfirmed. Claims before ~1700 rely on Tier 3 only. Maharal descent contested in scholarship.

---

## 2026-04-09: Deep Research — Henderson Line Extension

### Search: Rev. Henry Langford Henderson parents

**Query**: WikiTree Henderson-12233, Henderson-6197
**Results**: FOUND. Parents: Brashier Henderson (1790-1847) + Elizabeth Taylor. Brashier is WikiTree Henderson-6197.

### Search: Olive Mary "Polly" Henderson parents

**Query**: WikiTree, Geni.com
**Results**: MAJOR FIND. Olive Mary "Polly" Henderson and Brashier Henderson were SIBLINGS, both children of Ezekiel Henderson (1763-1846) + Elizabeth Brasher. This means Rebecca Adeline Cox married her first cousin Rev. Henry Langford Henderson.

### Search: Ezekiel Henderson

**Query**: WikiTree Henderson-1855, RevWarApps
**Results**: FOUND. Revolutionary War veteran, pension S6994 ($57.50/year). Served 1781-1783. 15 children documented. Moved from Chatham County NC to Greenville County SC after the war.

### Search: Argaleus Hercules Henderson I

**Query**: WikiTree Henderson-7309, Geni.com
**Results**: FOUND. b. ~1720 Onslow NC, d. June 1806 Chatham NC. Married Molly Mary Clark. Participated in NC Regulators movement 1768-1771.

### Search: Henderson earliest ancestor

**Query**: Web search for James Henderson + Mary Rhodes, Scotland
**Results**: Speculative claim of Scottish origin via S.S. Friendship (1716). Needs verification. WALL approaching.

### Search: Kascher surname and SC connection

**Query**: Multiple searches for Kascher in SC, RI, Ohio
**Results**: NEGATIVE for SC connection. Kascher is rare, German/Central European origin, concentrated in Ohio in 1920. SC families likely connect through a non-Kascher parent of Kathryn. Panciera is Italian, Westerly RI roots.

---

## 2026-04-09: Deep Research — Cox Line Extension

### Search: William Cox Sr. parents

**Query**: Multiple searches across WikiTree, Cox Family History Project, Ancestry, FamilySearch, Geni.com
**Results**: CONFIRMED BRICK WALL. Cox Family History Project (est. 2008, updated 2020) states parents unknown. Y-37 DNA test places this line in R1b-I "Carolina Coxes" subgroup, NOT matching Quaker/Delaware Cox line.
**Critical correction**: Many databases (Ancestry, FamilySearch, Geni.com) ERRONEOUSLY merge William Cox Sr. with William Richardson Cox (1692-1767, Quaker from Delaware). This is proven wrong by DNA and primary sources.

### Search: Isaac Cox relationship to William Sr.

**Query**: WikiTree Cox-8529, Cox Family History Project, FamilySearch
**Results**: FOUND. Isaac Cox (c.1755-1830) was William Cox Sr.'s SON. Born Orange County NC. Wife unknown. Children: James, Elizabeth, Abraham, Sarah, Frances, William. Appears on 1779 NC tax list and 1814 estate records.

### Search: James Cox wife

**Query**: WikiTree Cox-14020, Cox Family History Project
**Results**: FOUND. James Cox married **Dianah/Diana Black** (b. 1784 NC, d. Jan 7, 1865 Greenville Co. SC).

### Search: Koch/German origin for Cox

**Query**: Orange County NC records, Koch surname, German settlers
**Results**: NEGATIVE. No evidence of Koch→Cox for this family. Y-DNA is R-M269, consistent with British Isles. Cox Family History Project does not mention German origin theory.

### Search: Orange County NC land records

**Results**: FOUND. William Cox on 1755 tax list (one of 3 William Coxes). Purchased 110 acres April 22, 1772 (Deed Book #3 p. 599). Sold October 13, 1787 for 250 pounds before migrating to SC.

---

## 2026-04-10: GEDCOM Cross-Reference (2,595 individuals vs 141 person files)

### Discrepancies Resolved (GEDCOM wrong, vault correct):
- Charles Salmanson birth: 1914-09-01 confirmed (GEDCOM said 1915)
- Martha Corin death: Sep 26, 2015 confirmed (GEDCOM said 2013)
- Anna Binder birth: Apr 1, 1868 confirmed via Siebenbuerger.de (GEDCOM said 1883)
- Diana Black Cox: 1784 better supported (GEDCOM said ~1780)
- Isaac Cox: ~1755 per WikiTree (GEDCOM said 1752)

### New Confirmed Facts:
- John Hough birthplace = Hough hamlet, Wilmslow Parish, Cheshire (surname = place name)
- Eleanor Sands: born Oct 5, 1692, Bensalem, Bucks PA (WikiTree Sands-23, Quaker)
- Stephen Sands: baptized Jun 16, 1658 Lancashire England, emigrated PA ~1682

### New Discrepancies (need resolution):
- Albert Graham Bright birthplace: Abingdon VA (chart Tier 2) vs Tarrant TX (GEDCOM Tier 3)
- George Michael Bright birthplace: Greenville SC (implied) vs Rocky Mount VA (GEDCOM)
- Boruch Poisner birthplace: Mukachevo Ukraine (Geni) vs Vitebsk Belarus (Chabadpedia)
- Hannah Hough maiden name: Worthington (1680 parish record) vs Rossell (book speculation)
- Eli Baldwin wife: Edaline Transon (GEDCOM) vs Elizabeth (WikiTree Baldwin-2330)
- Heschel Herman Markel "Vanyavitch Poland": town not found in gazetteers
- William Goldsmith Long: 1862-1937 (vault) vs 1861-1938 (GEDCOM) both unverified

### Cox GEDCOM Verification (135 individuals)
**Isaac Cox birth**: GEDCOM 1752 is WRONG. Correct: ~1755 (WikiTree, Cox Family History Project, FamilySearch all agree).
**William Cox (1798) + Eliza**: CONFIRMED as Isaac's son (Cox Family History Project). Wife possibly "Elizabeth Owens" per Geni. Son Abram Cox (1830) also documented.
**Thomas Manning Cox 8 children**: CONFIRMED (matches headstone count). No independent source beyond MyHeritage.
**James Cox children**: GEDCOM BLOATED with ~20 children (Smart Match errors). WikiTree lists 9-11 across two wives. Vault's 11 is reasonable.
**Diana Black Cox**: GEDCOM wrong (ABT 1780 Greenville SC). Correct: 1784 North Carolina (WikiTree, Cox Family History Project). Full name possibly "Diannah Priscilla Jackson Black."
**Quaker lineage**: CONFIRMED AS WRONG. GEDCOM contains ~50+ individuals from the Quaker William Richardson Cox (1692 Hockessin DE) line who are NOT related. DNA disproves connection. These should be flagged/removed.
**William Cox (1798) identity**: This is Isaac Cox's son, NOT Thomas B. Cox's son "Billy Slick" as the vault previously suggested. The 1850 census head of household is Isaac's son William.

### Salk GEDCOM Verification (59 individuals)
**Celia (Zipporah) Bella Salk (1872-1959)**: INDEPENDENTLY CONFIRMED via Ancestry.ca. Parents: Louis Salk + Dina (Deena) Hassel Hessel. Born Lithuania. This corroborates Louis as patriarch.
**Abraham Zolly Salk d. Feb 22, 1925**: UNVERIFIED (no obit/FAG found). Need RI death certificate.
**Louis Salk b. ~1840 Lithuania**: PARTIALLY CONFIRMED (Celia's Ancestry record names him as father).
**6 Salk branches identified in Providence**: Louis/Dina, Hyman/Hardware, Louis/Belle, Benjamin/Lillian, Gabriel/Frances, Harris/NYC. Connection between branches unconfirmed.
**Jonas Salk**: Separate NYC branch (Harris Salk 1865-1943). No confirmed Providence connection.
**Key action items**: Contact Lincoln Park Cemetery (401-737-5333), request RI death certificate for Abraham (1925), search Providence Journal microfilm Feb 1925.

### ALL GEDCOM CROSS-REFERENCE AND VERIFICATION COMPLETE.

### Daniel Huff Parentage RESOLVED (Critical Correction)
THREE different Daniel Huff/Houghs conflated in GEDCOM and MyHeritage tree:
1. Daniel Hough (b.1693, Bucks PA, Quaker) = John Hough III's son. Married Judith Hartley. NOT our ancestor.
2. Daniel Huff II (Stokes NC) = married Mary Worley 1741 in Burlington NJ. NOT our ancestor.
3. Daniel Huff (d.1777, Brunswick VA) = OUR ancestor. Will dated 1773, probated 1777. Wife: Mary (probably Holloway). Sons: Daniel, Philemon, Reuben, Lewis, James.
CORRECT LINEAGE: Daniel Huff (d.1777) + Mary Holloway → James Huff (1768-1842) → Lewis P Huff → Mary Elizabeth Huff → William Goldsmith Long → Rebecca Moseley Long

### Holloway Line Extended to England
George Holloway (1590-1641, Oxford, England) → David (1664, York VA) → George (1709, Lunenburg VA) → William (1737, Brunswick VA) → Martha Patty Holloway → m. Samuel Moseley

### Brashier Line Complete: Maryland to South Carolina
William B. Brasher Sr. (c.1674, England; d.1708, Baltimore MD) → Thomas Brasher (d.1770, Orange NC) → Thomas Levi Brasher Jr. (d.1789, Greenville SC) → Elizabeth Brasher (m. Ezekiel Henderson 1782)

### Hough Line Corrected
John Hough emigrant (b.~1653 Wilmslow Cheshire) son of Lawrance Hough (d.1668) + Elizabeth Barton. Wife = Hannah WORTHINGTON (not Rossell). Henry Hough (~1540-1618) "of The Hough" earliest in Wilmslow, will survives. Stephen Sands parents DISPUTED: probably Richard Sands + Isabella of Lancashire, NOT Richard Sandys + Hester Aucher of Kent.

### Sandys/Culpepper Nobility Lines
Culpepper: Sir Thomas de Colepeper "The Recognitor" (c.1170) → documented through 20+ generations to Dr. Martin Culpepper (1540-1605)
Sandys: Simon de Sabulonibus (c.1205, Cumberland) → to Archbishop Edwin Sandys (1519-1588) → to Sir Edwin (Virginia Company) and Sir Samuel
Bulkeley: Robert de Bulkeley (c.1210, Cheshire) → to Sir Richard of Beaumaris → Catherine married Sir Edwin Sandys

---

## 2026-04-10: Deeper Transylvanian Saxon Ancestry Research

### Goal: Trace Kascher, Schuller, Binder, Probstdorfer, and Pfaff families before earliest known ancestors.

### 1. Georg Kascher's Parents

**Search**: Kascher family Wurmloch pre-1792, Genealogy.com forum, Siebenbuerger.de
**Results**: The Genealogy.com forum post (the original source for Georg) confirms Georg b. 1792 Wurmloch, married Maria Wagner, son Michael b. 1834 Wurmloch d. 1880 Waldhuetten. The poster noted they had the family "down to current day" but could NOT find anything prior to Georg 1792. Family folklore says origin was **Flanders**, consistent with the documented 12th century migration of Flemish settlers to Transylvania under King Geza II of Hungary (1141-1162).
**Kascher surname**: Rare surname. Forebears.io: found primarily in Americas (Brazil, USA). In 1920, only 3 Kascher families in the USA (all in Ohio). Not in standard Transylvanian Saxon surname lists.
**Status**: BRICK WALL HOLDS. Primary source (Kirchenbuch) access required.

### 2. Wurmloch (Valea Viilor) Church Records

**Results**:
- Wurmloch has a Lutheran fortified church (UNESCO World Heritage Site). By 1516, Wurmloch had 95 households (second largest town in the Schelk district).
- Gustav Arz's 1939 "Die Matrikeln der evangelischen Gemeinden A.B. in Siebenbürgen" inventoried all evangelical church registers; this would list exact date ranges for Wurmloch registers but was not accessible online.
- Church records in Transylvania begin as early as 1600.
- **VGSS database** (vgss.de/genealogie-datenbank/): ~65 volunteers work on ~80 of ~260 villages; data from 19 villages publicly searchable. Wurmloch and Waldhutten are listed among Ortschaften. Must search directly.
- Registers held in **Zentralarchiv** of the Evangelical Church A.B. in Sibiu (TeutschHaus, Str. Mitropoliei 30).

### 3. The Krauss/Krause Binder Compound Surname

**Results**:
- GEDCOM shows: Georg Krauss → Johann Krause Binder (b. 1794) → Martin Binder (b. 1831). Siebenbuerger.de calls Martin's father "Petrus Krauss Binder."
- **Beiname convention**: In Transylvanian Saxon villages, many families shared the same surname. To distinguish them, a supplementary Beiname was used. VGSS article on Zendersch documents 816 people named Bell in one village, 1082 named Weber; bynames were essential.
- **Most likely explanation**: "Krauss" (curly haired) was the **Beiname** distinguishing this Binder family from other Binder families. "Petrus Krauss Binder" = "Petrus, of the Krauss Binders." This is NOT a maternal surname or hyphenated name.
- **Discrepancy**: GEDCOM lists Johann Krause Binder as Martin's father; Siebenbuerger.de says Petrus Krauss Binder. These may be different generations, or a GEDCOM error.

### 4. Probstdorf and Petersdorf Village Records

**Probstdorf (Stejerisu)**: Founded 13th century. Fortified church. ~22 km SW of Sighisoara, Sibiu County. Surname "Probstdorfer" = "person from Probstdorf."
**Petersdorf (Petresti)**: Church built 13th century. Demolished 1805, rebuilt. **Church records for Petresti held at Muhlbach (Sebes) Saxon Evangelical Lutheran Church** (separate from Sibiu archive).

### 5. FamilySearch and Ancestry Availability

- Ancestry collection 5412: Romania Vital Records 1607-1914 (SUBSCRIPTION)
- Ancestry collection 62878: Transylvania Birth/Marriage/Death 1688-1919 (SUBSCRIPTION)
- Ancestry collection 61116: Sibiu Tax Registers 1707-1902 (SUBSCRIPTION)
- Ancestry collection 61256: Sibiu Military Conscriptions 1689-1807 (SUBSCRIPTION)
- **1819-1820 Transylvanian Census** (Conscriptio Czirakyana): FamilySearch microfilm (53 rolls), covers 2200+ villages. Viewable at FamilySearch Centers. FREE.
- Kreisch church register indexes exist (rootsweb bgwiehle site).
- FamilySearch catalog must be searched directly with logged in account.

### 6. Siebenbuergen-Institut Archives (Gundelsheim)

- Schloss Horneck, Gundelsheim/Neckar, Germany. Most important Transylvanian Saxon collection outside Romania.
- **Genealogisches Archiv (KGA)**: descendant tables, family tables, ancestor records, microfilms of church registers, municipal card files.
- **USA-Auswanderer PDF** freely available at siebenbuergen-institut.de (previously provided Kascher data).
- Journal "Siebenbürgische Familienforschung" published 1984-2016 (33 volumes).

### 7. Zentralarchiv der Evangelischen Kirche A.B. (Sibiu)

- TeutschHaus, Str. Mitropoliei 30, RO-550179 Sibiu. Established 2004.
- **Over 280 parish church archives** centralized here, including handwritten Kirchenbucher.
- Offers genealogical research assistance (fees apply).
- **THE single most important archive** for pushing back Transylvanian Saxon lines.

### 8. Additional Findings

- **Kreisch (Cris)**: Unusually, was NOT a free Saxon village; belonged to Bethlen noble family. May affect record types.
- **Waldhutten phylloxera**: Viticulture destroyed ~1895, half population emigrated to America.
- **ATS records** (1902-1981) at University of Minnesota IHRC. May contain Kascher membership data.

### Action Items (Prioritized)

| Priority | Action | Cost |
|---|---|---|
| 1 | Search VGSS database for Kascher/Schuller/Binder/Wagner in Wurmloch/Waldhutten | Free |
| 2 | Search Ancestry collections 5412, 62878, 61116 for Wurmloch/Waldhutten/Kreisch | Subscription |
| 3 | Request Zentralarchiv Sibiu genealogical research | Fee |
| 4 | Request Siebenbuergen-Institut Gundelsheim KGA search | Fee |
| 5 | Search FamilySearch catalog directly (login required) | Free |
| 6 | Access 1819-1820 Census at FamilySearch Center | Free |
| 7 | Contact Muhlbach (Sebes) Church for Petersdorf records | Correspondence |

### Negative Results

- WikiTree: No Kascher profiles.
- Geni.com: No relevant Kascher in Transylvania.
- Genealogy.com poster also hit brick wall at Georg 1792.
- Siebenbuerger.de guestbooks blocked during session.

---

## 2026-04-10: New PDF Document Intake (77 files)

### Kascher Family Album (01-029.pdf) -- TIER 1 PRIMARY SOURCES
Official Evangelical Church A.B. certificates from Waldhutten 1938, signed by Pastor Bogeschdorfer.
CORRECTIONS: Michael Sr. born Mar 30 1864 (not Feb 11); died Jul 22 1935 Herzschlag. Sara Schuller born Jan 27 1829 died May 22 1876 uterine cancer. Michael (1834) born Sep 20 1834 died Jun 29 1880 pneumonia. Leonhard Schuller (~1770) = new generation. ROSINA born 1905 DIED 1928 Denver TB (NOT 103 years old!).

### Pedigree Charts (1-46.pdf) -- Plantagenet royal descent
Through Neville/DeAudley/De Clare to Joan Plantagenet (1272) to Henry II + Eleanor of Aquitaine to Anjou/Brittany/Gatinais counts ~800-900 CE. Albert Bright born Tarrant TX (not VA). Rebecca Long died 1965 (not 1985). William Thomas Long died 1897 (not 1887).

### Yichus Narrative -- Markel/Frei family
Vanyavitch/Waniowice confirmed. Nissen Mendel Markel = earliest. 1939 pogrom Rodzinka Forest. Ahavath Sholom confirmed. Pnei Yehoshua descent claimed.

### Michael Kascher Birth Year RESOLVED
Born Feb 11, 1889 (NOT 1899). SSDI (Tier 1): Born Feb 11, 1889, died June 1975, Fort Lauderdale FL 33312. Marriage record (age 24 in 1913) and 1930 census (age 41) agree. Church certificate "1899" = single-digit transcription error.

### Plantagenet Royal Descent DEBUNKED
Pedigree charts (1-46.pdf) claim descent through De Clare/De Audley/Neville/Cooke/Cox. FOUR fatal breaks:
1. Alice de Audley = Hugh's SISTER not daughter (no Plantagenet blood)
2. "Sir Norman Cooke of Lavenham" = KNOWN FABRICATION (WikiTree flagged)
3. Margaret Neville married de Ros + Percy, NOT "Jean Ross" ("Ena Ross" fictitious)
4. William Cox Sr. (SC) ≠ William Richardson Cox (DE) (DNA disproven)
Medieval royals real but NOT connected to this family through claimed chain.

### Salk Family Deep Research
4 Providence Salk branches identified: (A) Hardware/Hymen line, (B) Abraham/Elizabeth line (ours), (C) Benjamin/Lillian line, (D) Louis/Belle(Feingold) line. Relationship between branches unconfirmed. Ida Salk (1881-1982, age 101) found. Ann Salk Rosenberg (d. 2026, daughter of Hyman + Esther) found. Key: census records needed to map household structures.

### Albert Bright Birthplace RESOLVED
Born Abingdon, Washington County, VIRGINIA (not Tarrant TX). No Abingdon exists in Tarrant County TX. GEDCOM auto-complete error. Brother Bernard confirmed born Abingdon VA. 1950 census: born Virginia. Family documented in VA 1900 census. Research Log "Tarrant TX" entry was incorrect.

### William Thomas Long Death Date RESOLVED
Died 16 October 1887, age 62 (not 1897). Headstone says 1887. GEDCOM pedigree chart says 1887 age 62. Math: 1825+62=1887. "1897" in Research Log was a transcription error.

### Pnei Yehoshua Descent
Claim plausible but unverified. Pnei Yehoshua (Rabbi Jacob Joshua Falk, 1680-1756) was Chief Rabbi of Lemberg. Frei family from Waniowice (~70km away). Yichus also claims descent from Issarles and Landau families. Ateres Yehoshua (Zunz, 1936) documents descendants but needs page-by-page search. Toba Rifka "of Dubosari" = Dubossary, Moldova (Bessarabia), ~500km from Waniowice. Marriage connected Bessarabian and Galician families.

### Holocaust Research: Rodzolika Forest + Yad Vashem + USHMM
USHMM oral history interview found: Rebecca Tzoar (irn619016, June 27 2018, West Orange NJ). Born Aug 15 1933 Sambor. Father: Philip (Fishel) Weidenfeld. Mother: Frida Karp. Learned of family deaths "in 1943."
Sambor Yizkor Book: "Markel, Yosef and Family (5 people)" and "Karp, Yosef and Family (4 people)" in necrology.
SPELLING CORRECTION: "Rodzolika" Forest (not "Rodzinka") per original Yichus text.
TIMELINE: Yichus says "1939 Rosh Hashanah" but documented mass killings in Sambor area were 1941-1943. Sept 1939 violence documented (synagogue invasion, forced labor) but mass executions came later. "Rodzolika" may = "Radlowice/Ralivka" (known execution forest 4-5km from Sambor, at least 3,000 Jews shot Jan-Jun 1943). Possible memory conflation of 1939 synagogue raid with later mass murder.
Highest priority: access USHMM oral history recording (irn619016) for full details.

### Michael Kascher Birth Year: DEFINITIVELY RESOLVED
Born Feb 11, 1889. Kascher Family Album (02.pdf) clearly states "born February 11, 1889 in Waldhuetten" in unambiguous typed English. He was child #1 (firstborn), 13 months after parents' Jan 1888 marriage. Church certificate digit ambiguity (8 vs 9 in typewriter). "Two Michaels" hypothesis REFUTED -- only one Michael.

### NEW DISCREPANCY: Rosina Falk birth year 1896 vs 1905
Kascher Family Album (02.pdf): "born September 11, 1896 in Petersdorf." Fan chart (06.pdf): 1896. Church KINDER certificate: "4 July 1905." If born 1896, she was 16 at 1913 marriage (plausible). If born 1905, she was 7 (impossible). 1896 is almost certainly correct. Church certificate has similar digit ambiguity. She died May 27, 1928 in Denver CO of TB at age 31-32 (if born 1896) or 22 (if born 1905).

### Culpepper Chain Verified: 11 generations, c.1170 to 1540
Thomas the Recognitor (c.1170) → John (c.1200) → Thomas of Brenchley (c.1230) → Thomas executed (1321) → John of Hardreshull (1305) → Thomas (1355) → Walter (1398) → Sir John (1424) → Walter of Calais (1465) → William of Hunton (1509) → Dr. Martin Culpepper (1540).
Chain is Moderate to Strong Signal. Weakest links: Thomas→John (tradition only) and Thomas(executed)→John (son vs brother confusion). Norman origin probable but pre-Thomas ancestry unknown.
Catherine Howard connection confirmed: Thomas Culpeper (courtier, executed 1541) was Martin Culpepper's COUSIN (both grandsons of Sir John + Agnes Gainsford).
Gainsford family: prominent Kent/Surrey gentry, connected to Tudor court.

### Hough Line Extended: Roger Hough (~1540)
Henry Hough's parents: Roger Hough + Margery Mottershed (m. Jun 4 1564 Wilmslow). Henry christened Oct 29, 1564 Wilmslow. Roger resided Chorley, buried May 5, 1587 Wilmslow. Lawrence Hough (d. 1668) is likely Henry's grandson not son (Henry's 1618 will doesn't name Lawrence). Cheshire exempt from medieval poll taxes.

### Baldwin: Three Brothers from Oxfordshire 1682
Thomas, John, Francis Baldwin sailed from Oxfordshire as servants of Joshua Hastings (Quaker) in Penn colonization. Chatham County NC Baldwins confirmed Quaker (William Baldwin joined Cane Creek Meeting 1752). Sir John Baldwin (1470-1545) = Chief Justice of Common Pleas; father William Baldwin (~1441-1479); mother disputed (Jane Aylesbury vs Agnes Dormer).

### Brasher: French Huguenot Connection
Earlier Brashiers in Maryland were Brasseur French Huguenots (Benjamin Brasseur naturalized 1662). William B. Brasher Sr. (d. 1708) may descend from them or be separate Wiltshire immigrant. Sarah Constant (m. Thomas Brasher 1726) father: John Constance Sr. (1681-1735).

### Worthington: Dulcebella Rossell born Helme
Isaacke Worthington's wife = Dulcebella Rossell (born Helme). This explains the "Rossell" and "Helme" names appearing in the GEDCOM/pedigree charts for the Hough family.

### Sandys: Burgh-by-Sands 1234 Charter (Tier 1)
Simon de Sabulonibus documented in 1234 granting land to Holm Cultram Abbey. "De sabulonibus" = Latin "of the sands" from Burgh-by-Sands. Edward I died there 1307. Richard del Sandes III (c.1300) = common ancestor of ALL Sandys branches including Baron Sandys of The Vyne AND Archbishop Edwin Sandys. Confirmed by heraldic records though exact intermediate links debated.

### Stephen Sands Parents CORRECTED
Mother: Isabella Sands (per Lancaster Monthly Meeting certificate 1682, Tier 1). Father: unknown (probably Lancashire Sands, NOT Richard Sandys of Kent). Stephen likely from cadet branch of broader Lancashire Sands family, not the Archbishop's direct line. Vault files need correction.

### Holloway: Governor Samuel Mathews Connection CONFIRMED
Elizabeth Mathews (David Holloway's wife) was granddaughter of Governor Samuel Mathews Jr. (d.1660). 1678 land patent and 1702 court order (Tier 1) confirm chain: Gov. Mathews → John Mathews (1659) → Elizabeth → m. David Holloway. David's father: James Holloway (~1635-1676, York County VA).

### Cowgill Deeper: John of Lothersdale (1572)
Edmund Cowgill Sr.'s parents: John Cowgill "of Lothersdale" (bapt. Sep 27, 1572, Thornton in Craven) + Margaret Gardiner (m. May 3, 1601). John's father: Bryan Cowgill (d. 1599). Bryan's father: Richard Cowgill (b. 1540s). Parish records (Tier 1). "De Colgyll" in 1379 Poll Tax. Name = "charcoal ravine" (Old Norse/English), not "cow."

### Settle Monthly Meeting: Records Survive 1666+
University of Leeds Special Collections holds: Monthly Meeting minutes (1666-1971), Women's Meeting minutes (1701-1845), Ministers & Elders minutes (1699-1814). Digest Registers for Yorkshire Quaker births/marriages/burials from 17th century on open access.

### Baldwin Line FULLY CONNECTED: Oxfordshire 1682 → Greenville SC
John Baldwin Sr. (~1657, Oxfordshire) → John Baldwin Jr. (1697, Chester PA) + Hannah Johnson → John Baldwin (c.1730, Chester PA → Chatham NC) + Alice Frances LINDLEY → Eli Baldwin (c.1775, Chatham NC → Greenville SC) → Gilley Elizabeth Baldwin → Sarah Elizabeth Clark. Quaker chain confirmed through Chester Meeting Records (Tier 1) and Chatham Historical Journal (Tier 2). Alice Frances confirmed as Lindley surname (prominent Chester County PA Quaker family). Missing generation: the Oxfordshire immigrant (c.1657) needs person file.

### Eleanor Sands / John Stangle: CONFIRMED IMPOSSIBLE
Eleanor Sands (b. Oct 5 1692, d. 1744) married John Hough III, NOT John Stangle. She died the same year Stangle was born (1744). GEDCOM merge error confirmed. Stephen Sands' 1731 will names "my daughter Elinor Hough." John Stangle's wife was either a different Eleanor Sands or a different name entirely.

### Kerben King = likely "Corbin King" (handwriting misread)
"Corbin" is a documented Anglo-Norman name. C/K and o/e confusion common in 19th century cursive. Peter Corbin documented in adjacent Pickens County SC. Requires census search.

### Salk: Troskunai Zalk family found on JewishGen but went to DULUTH not Providence
Louis (Elizar) Salk's specific Lithuanian shtetl still unidentified. "Leyzer Zalk" patriarch name matches Louis's alternate name "Elizar."

### George Bright Sr. (1782-1873) person file created
WikiTree Bright-298. Missing link between David Bright (1740) and Samuel Graham Bright (1825). Filed as George_Bright_Sr.md.

### Verlustlisten: Databases identified, manual search required
Five databases identified: digi.landesbibliothek.at, GenTeam.eu, RadixIndex, MyHeritage collection 10953, DES Genealogy.net. All blocked automated access. Verlustliste Nr. 354 (1916) identified as relevant timeframe. NEXT: Register GenTeam.eu (free), search manually in browser.

### Galicia: KehilaLinks Markel family page found
kehilalinks.jewishgen.org/Drohobycz/families/markel.html documents a Markel family from Lutowiska near Sambor. Sara Hinde Markel married Shamay Bartel 1877. Aaron Bartel named "after his Markel grandfather." Potential connection to Heshel Markel. Sambor records fully indexed in All Galicia Database (search.geshergalicia.org). JRI-Poland has no Sambor Jewish records (they're at Gesher Galicia/Ukrainian archives).

### Dubossary (Toba Rifka's origin): 4,500 Jews murdered Sept 1941
Community well-documented. 5,220 Jews in 1897. JewishGen Holocaust Database lists 490 families killed. Yizkor book published 1965. Cemetery records (235 burials). Bessarabia revision lists 1824-1875. No "Frei" found in open web results but databases require manual search.

### Database Searches (Manual Access Required)
Verlustlisten: Familia Austria (2.7M records), RadixIndex, DES Genealogy.net, GenTeam.eu, digi.landesbibliothek.at all identified. Verlustliste Nr. 354 (1916) potentially relevant. All blocked automated access.
Galicia: KehilaLinks Markel family page (Drohobycz) documents Sara Hinde Markel m. Shamay Bartel 1877, Lutowiska near Sambor. Aaron Bartel's family deported to Sambor ghetto 1942, sent to Belzec Nov 1942. Separate Troskunai (Lithuania) Markel family also found.
Dubossary: 490-family USHMM victim list, 631-entry Yizkor necrology, Bessarabia vital records all available but require manual search for "Frei."
Lincoln Park Cemetery: No Abraham Salk memorial found online. Cemetery office: 401-737-5333.

## 2026-04-13: Full Kascher Family Album Processing (01-029.pdf)

### Session Summary
Complete page-by-page extraction of all 29 pages of the Kascher Family Album. Documents fall into three categories:
1. **Typed certificates** (03-05.pdf): KINDER, MUTTER, VATER summaries signed by Pastor A. Bogeschdorfer, Waldhütten, Feb/Apr 1938
2. **Official church register entries** (07-022.pdf): Sealed/stamped extracts from Waldhütten, Kreisch, and Petersdorf Kirchenbücher, certified 25 June 1939 by Brandsch, Kirchenbuchführer
3. **Fan charts** (06.pdf, 029.pdf): Handwritten Ahnentafel charts mapping both paternal (Kascher) and maternal (Falk) ancestry

### Key Findings (all Tier 1 unless noted)

**Michael Kascher Sr. birth date CORRECTED**: Born **30 March 1864** (not Feb 11 as GEDCOM stated). Feb 11 is actually his SON Michael Jr.'s birthday (1889). Father-son name confusion.

**Marriage date CORRECTED**: Michael Sr. + Anna Binder married **29 January 1888** (not ~1900 as GEDCOM stated). First child born Feb 1889, 13 months after marriage.

**All 10 children documented with exact dates** (KINDER certificate):
1. Michael (11 Feb 1889), 2. Stillborn girl (23 Nov 1893), 3. Georg (28 May 1895), 4. Friedrich (15 Apr 1897, d. 7 Feb 1903), 5. Johann (28 Oct 1900), 6. Anna (17 May 1903), 7. Rosina (4 July 1905 per cert; 1896 per fan chart), 8. Friedrich II (10 Dec 1907), 9. Sara (1 May 1910), 10. Martin (17 Apr 1912, d. 18 Jan 1913)

**Rosina Falk birth year RESOLVED**: Born **1896** (NOT 1905). Fan chart (06.pdf) and Family Album typed page (02.pdf) both say 1896. KINDER certificate says "4 July 1905" but this creates impossible 7-year-old marriage. Digit ambiguity in church certificate (1896→1905).

**Anna Binder ancestry (MUTTER certificate)**: Complete maternal line through Kreisch church registers:
- Anna Binder (b. 1 Apr 1868, Kreisch) daughter of Martin Binder (b. 3 May 1831, Organist) + Anna Weber
- Martin's parents: Johann Binder (eigentlich Krauss) + Esthera Theil (Malmkrog, m. 15 Jan 1817)
- Anna Weber's parents: Christian Weber (Organist, Kreisch) + Sara (geb. Valentin Mansch, Meschen)
- Johann Binder's father: Georg Krauss (Alias Binder), bapt. 14 Feb 1794, son of Johannes, mother unknown

**Kascher paternal ancestry (VATER certificate)**: Complete line through Waldhütten registers:
- Michael Kascher I (b. 20 Sept 1834, Wurmloch; d. 28 June 1880, pneumonia)
- Sara Schuller (b. 27 Jan 1829; d. 22 May 1876, uterine cancer). Widowed Stephann Benning.
- Georg Kascher (b. March 1792, Wurmloch) + Maria Wagner (Wurmloch)
- Johann Schuller (b. Sept 1797; d. 10 March 1858, liver disease) + Sara Benning (b. Dec 1800; d. 17 Oct 1855, TB)
- Leonhard Schuller (b. circa 1770, Waldhütten) = earliest documented Schuller, data missing

**Petersdorf Falk/Pfaff cluster (church register entries)**:
- Mathias Falk: born 1867, Petersdorf. Confirmed by Entry #6.
- Katharina Pfaff: born **8 October 1871**, Petersdorf. Father: **Michael Pfaff** + mother geb. **Dressler**
- Mathias Falk (grandfather): born 1837, Petersdorf. Father also Mathias + mother Konnerth
- Agnetha Probstdorfer: born **12 February 1847**, Petersdorf. Confirmed by Entry #13.
- Katherina Dressler: born **1844**, Petersdorf. Parents: **Johann Dressler** + mother geb. **Sommer**
- Deeper generations: Brosert, Konnerth, Sommer families all from Petersdorf, extending to late 1700s

**Discrepancy: Michael vs Mathias Pfaff**: Church register Entry #7 reads "Michael Pfaff" as Katharina's father. GEDCOM says "Mathias Pfaff (1836-1899)." Could be same person (Michael/Mathias confusion common) or different.

### Person Files Updated
- Michael_Kascher_Sr_1864.md: upgraded to Strong, all dates corrected from church cert
- Anna_Binder.md: upgraded to Strong, full ancestry from MUTTER cert
- Johann_Schuller.md: upgraded to Strong, death date + cause
- Sara_Benning.md: upgraded to Strong, death date + cause
- Sara_Schuller.md: upgraded to Strong, widowed status confirmed
- Georg_Kascher.md: confirmed by VATER cert
- Rosina_Falk.md: birth year corrected to 1896
- Katharina_Pfaff.md: upgraded to Strong, exact birth date + place
- Mathias_Falk.md: upgraded to Strong, confirmed by Entry #6
- Katherina_Dressler.md: upgraded to Strong, birthplace Petersdorf confirmed

### Negative Results
- No data found predating Georg Kascher (b. 1792, Wurmloch) or Leonhard Schuller (b. ~1770, Waldhütten) in the album
- Georg Krauss (Alias Binder, bapt. 1794): mother listed as "unknown" in church register
- Fan chart outer rings (positions 32-63) mostly empty, indicating brick walls at the great-great-grandparent level for most lines

## 2026-04-13: Judson King Death Certificate Processing

### Session Summary
Processed user-provided death certificate (SC File No. 7013) and photograph for Judson King. This is the first primary source document for Judson King, a new individual in the Greenville County, SC King family line.

### Source Documents
1. South Carolina Certificate of Death, File No. 7013 (Tier 1 primary source)
2. User-provided photograph of Judson King with unidentified woman (Tier 3)

### Key Positive Results
1. **Judson King identified**: b. June 20, 1841, Greenville, SC; d. May 12, 1921, Dunklin Township, Greenville County, SC. Farmer. Died of Chronic Nephritis at age 79 years, 11 months. (SC Death Certificate #7013, Tier 1)
2. **Father identified**: Washington King. New name, not previously in the vault. (Tier 1)
3. **Mother's maiden name partially legible**: Best reading is "Shambler" but alternatives (Shamler, Shanler) possible. (Tier 1, partial)
4. **Informant**: H.H. King of Pelzer, SC, probable son or close relative. (Tier 1)
5. **Burial location**: Fork Shoals area, Greenville County, SC. (Tier 1, partially legible)
6. **Undertaker**: H.E. Welborn, Pelzer, SC. (Tier 1)
7. **Photograph**: Shows Judson King with an unidentified woman (presumably wife), late 19th/early 20th century. (Tier 3)

### Negative Results
- No prior records for Judson King existed in the vault.
- No connection yet established between Washington King (Judson's father) and Kerben King (William I. King's father), though both are Greenville County King families.
- Wife's name not found on the death certificate.
- Marital status field on certificate is illegible.

### Files Created
- Judson_King.md (person file, moderate confidence)
- Washington_King.md (person stub)
- Judson_King_Death_Certificate.md (certificate transcription)

### Files Updated
- Family_Tree.md (King Family section expanded with Judson King and Washington King)
- Timeline.md (birth 1841, death 1921 added)
- Research_Log.md (this entry)
- Open_Questions.md (updated Kerben King question; new questions for Judson King's wife and Civil War service)
- Data_Inventory.md (death certificate added)

### Next Steps
1. Search census records (1850-1920) for Judson King in Greenville County, SC to identify wife, children, and household.
2. Search Find a Grave for Fork Shoals area cemeteries for Judson King and wife.
3. Search SC Confederate service records and pension applications for Judson King (b. 1841, military age during Civil War).
4. Determine relationship between Washington King and Kerben King (both Greenville County).
5. Identify H.H. King of Pelzer, SC (death certificate informant, probable son).
6. Verify mother's maiden name reading ("Shambler" or variant) via marriage records for Washington King.

## 2026-04-13: King Family of Suffield, Connecticut (King.pdf) Review

### Session Summary
Reviewed user-provided 742-page published genealogy: "The King Family of Suffield, Connecticut: Its English Ancestry A.D. 1389-1662 and American Descendants A.D. 1662-1908" by Cameron Haight King (San Francisco, California). This is a Tier 2 published genealogy covering the descendants of James King (baptized Nov 7, 1647, Ugborough, Devon, England) through his settlement in Suffield, Connecticut in 1662.

### Search Method
Full-text search of all 742 pages for: Judson, Washington King, Greenville, South Carolina, Kerben, Corbin, Shambler, Dunklin, Fork Shoals, Pelzer, William I. King, Marcia, Kopp, Huff, Carolina, and broader terms (farmer, migration, southern).

### Negative Results (IMPORTANT)
1. **No connection to Greenville County, SC King family.** The book covers Connecticut, New York, Ohio, Iowa, California branches only. No branch migrated to South Carolina.
2. **Different Judson King found**: The book documents a Judson King (b. Feb 22, 1837, North Sanford, N.Y.; m. 1859 Betsey Ann Groat; no issue), son of Eli King, from the Connecticut line. This is NOT our Judson King (b. June 20, 1841, Greenville, SC). Different birth dates, different locations, different parentage.
3. **"Washington King" not found** as a person name in the book. The "Washington-Lewis-Steele-King" appendix (p. 586/PDF p. 670) documents a King who married into the George Washington family, not a person named Washington King.
4. **No mention of Kerben, Corbin, Shambler, or any Greenville County SC individuals.**

### Implication
The Greenville County, SC King family (Washington King, Judson King, Kerben King, William I. King) is **not** part of the Suffield, Connecticut King line documented in this book. "King" is a very common English surname with multiple unrelated families in colonial America. The SC Kings likely have a separate origin, possibly among the many King families who settled the Carolina backcountry in the 1700s-1800s.

### Files Updated
- Research_Log.md (this entry)
- Data_Inventory.md (King.pdf added as reference)

## 2026-04-13: Judson King Census Records and Confederate Service Record

### Session Summary
Processed user-provided screenshots from Ancestry.com: 1880 Census (Oaklawn Twp, Greenville Co, SC), 1920 Census (Oaklawn Twp, Greenville Co, SC, Series T625, Sheet 3-B, Family 51), and Confederate military service index (Ancestry/Fold3). These are three new sources for Judson King, upgrading his confidence to Strong.

### Key Positive Results

1. **Judson King's wife identified**: **Charstee King** (b. ~1843, SC). Appears as wife in both 1880 and 1920 censuses. "Charstee" is an unusual name, possibly a variant of "Charity." Maiden name still unknown. (1880 Census, 1920 Census, both Tier 1)

2. **Seven children identified (1880 Census, Tier 1)**:
   - Dora S. King
   - Andrew L. King
   - Mary E. King
   - James E. King
   - William C. King
   - Tabitha J. King
   - John W. King

3. **1920 Census (Tier 1)**: Judson (78) and Charstee (77) living alone in Oaklawn Township, Greenville County, SC. Both literate. Judson still farming. All children had left the household. Both parents born in SC (confirms death certificate's partially legible mother's birthplace as SC).

4. **Confederate military service confirmed (Tier 2)**: Judson King enlisted 1862, age 23, Confederate Army, **16th South Carolina Infantry (Greenville Regiment)**. The "Greenville Regiment" is exactly the expected unit for a Greenville County man.

5. **Birth year discrepancy noted**: Death certificate says b. June 20, 1841. Military record says age 23 in 1862, implying b. ~1839. This ~2 year gap is common with self-reported military ages. Death certificate date preferred (Tier 1 vs. Tier 2).

6. **H.H. King mystery remains**: None of the 7 children in 1880 have initials "H.H." The informant was likely a child born after 1880 or a grandchild.

### Negative Results
- Charstee's maiden name not found in either census (censuses don't record maiden names).
- No 1900 or 1910 census data yet (would reveal additional children and potentially H.H. King).
- Marriage date and place still unknown.

### Files Created
- Charstee_King.md (person file, moderate confidence)

### Files Updated
- Judson_King.md (upgraded to Strong; wife, children, military service added)
- Family_Tree.md (King family section fully expanded)
- Timeline.md (Charstee birth, 1862 enlistment added)
- Research_Log.md (this entry)
- Open_Questions.md (#15 resolved, #16 resolved, H.H. King updated)
- Data_Inventory.md (census records and military record added)

### Next Steps
1. Search 1900 and 1910 censuses for Judson King in Greenville County to identify children born after 1880 and potentially H.H. King.
2. Search Find a Grave for Fork Shoals / Oaklawn area cemeteries for Judson and Charstee King.
3. Search Greenville County marriage records for Judson King to find Charstee's maiden name.
4. Obtain full compiled Confederate service record from NARA for company, rank, battles, and discharge details.
5. Search 1860 census for George W. King and/or Judson King to clarify father-brother relationship.

## 2026-04-13: 1850 Census Discovery: James King, George W. King, and King Family Structure

### Session Summary
Processed user-provided 1850 Census page (Eastern Sub Division, Anderson County, SC, page 54, enumerated August 15, 1850, M432, Image 536) plus MyHeritage and Ancestry index screenshots. This reveals three King households on the same census page, establishing the broader King family structure.

### Key Positive Results

1. **James King (b. ~1788)**: Patriarch. Age 62, farmer, $3,000 real estate, born SC. Wife Mary (55). Daughter Elizabeth A (19) at home. (1850 Census, Family 398, Tier 1)

2. **Robert King (b. ~1813)**: Age 37, Baptist clergyman, $600, born SC. Large household (8 people). On same census page as James King, likely his son. (Family 397, Tier 1)

3. **George Washington King (b. ~1815)**: Age 35, farmer, born SC. Wife Elizabeth (25). Children in household: **Judsan (Judson), 9; Mary E, 8; Tabbitha, 6; Elizabeth, 3; James M, 2**. (Family 401, Tier 1)

4. **"Judsan King" age 9 is in George W. King's household**, listed among the children. This is consistent with the death certificate naming "Washington King" as Judson's father. George Washington King = "Washington King."

5. **User identifies Judson and George Washington King as brothers**, with James King as their common father. This is plausible (James was ~53 when Judson was born) but conflicts with the census placement and death certificate. Both interpretations documented. See [[George_Washington_King]] for full analysis.

6. **Naming pattern confirmed**: George W.'s 1850 household includes Tabbitha and Mary E. Judson's 1880 household includes daughters Tabitha J. and Mary E. This suggests siblings naming children after each other (if father-son) or after nieces/nephews (if brothers).

7. **Anderson County, not Greenville County**: The 1850 census places all three King families in Anderson County (adjacent to Greenville). By 1880, Judson was in Oaklawn Township, Greenville County. The family moved between counties at some point.

### Negative Results
- James King's wife "Mary" has no maiden name recorded.
- No prior census (1840, 1830) has been checked for James King to extend the line further.
- Robert King's household members have not been fully identified.

### Files Created
- George_Washington_King.md (person file, moderate confidence, with parentage debate)
- James_King_Sr.md (person file, moderate confidence)

### Files Updated
- Judson_King.md (1850 census, parentage note, added 1850 source)
- Washington_King.md (retained as redirect; see George_Washington_King.md)
- Family_Tree.md (King family fully restructured with James King patriarch, three households)
- Timeline.md (births of James, Robert, George W. King added)
- Research_Log.md (this entry)
- Open_Questions.md (updated #3 with 1850 census data)

### Next Steps
1. Search 1860 census for George W. King AND Judson King to fill the gap decade.
2. Search Anderson County marriage records for George W. King + Elizabeth to confirm maiden name "Shambler."
3. Determine if Robert King (clergyman) or any other James King son connects to the Kerben King line.

## 2026-04-13: George W. King Census Trail: 1870 and 1880

### Session Summary
Processed user-provided MyHeritage screenshots for George W. King in the 1870 and 1880 censuses. This extends the census trail to four decades (1850, 1870, 1880) and reveals 5 additional younger children. George W. King is now at Strong confidence.

### Key Positive Results

1. **1870 Census (Tier 1)**: Geo W King (55), wife Elizabeth (age recorded as 28, almost certainly misread "48"), children Francis C (6-8) and James (3). Location within SC unclear. (M593, Frame 00301, Sheet 41, Family 323)

2. **1880 Census, Oaklawn Twp, Greenville County (Tier 1)**: George W. King (64), farmer, wife Elizabeth (55), with five younger children still at home: George W. Jr. (22), Martha E. (20), William E. (17), Robert Lee (14), Fannie. (T9, Roll 1255210, Sheet 121-A, Line 14, Image 541)

3. **Father-son co-location confirmed**: In 1880, BOTH George W. King (age 64) AND [[Judson_King]] (age 39) live in **Oaklawn Township, Greenville County**. Father and adult son as neighbors.

4. **10+ children identified across 30 years**: Older set from 1850 (Judson, Mary E., Tabbitha, Elizabeth, James M.), younger set from 1880 (George Jr., Martha E., William E., Robert Lee, Fannie), plus 1870 children (Francis C., James).

5. **Migration from Anderson to Greenville County**: Family was in Anderson County in 1850, in Greenville County by 1880. Move occurred sometime between 1850 and 1870.

6. **Different George W. King in Lexington County**: A SEPARATE George W. King (age 65, Cooper) appears in 1880 in Flat Springs, Lexington County. Not our person. Our George W. King is the Greenville County farmer, confirmed by wife's age matching (55 = b. ~1825).

7. **Elizabeth's age confirmed**: 1850 age 25 (b. ~1825) + 1880 age 55 (b. ~1825) = perfectly consistent. The 1870 age "28" is a handwriting misread of "48."

### Negative Results
- 1860 census not yet located for George W. King.
- Elizabeth's maiden name still unconfirmed from census records (only partially legible "Shambler" from death certificate).
- George W. King's death date/place not yet found.

### Files Updated
- George_Washington_King.md (upgraded to Strong; 1870 and 1880 data, full children list, 4 census sources)
- Family_Tree.md (King family expanded with all children)
- Research_Log.md (this entry)

### Next Steps
1. Search 1860 Census for George W. King in Anderson or Greenville County.
2. Search 1900 Census for Judson King to find children born after 1880 and identify H.H. King.
3. Search for George W. King death record or Find a Grave memorial.
4. Search Anderson/Greenville County marriage records for George W. King + Elizabeth [Shambler?].

---

## Session: 2026-04-14 (Elizabeth Brasher Parentage Research, Open Question #13)

### Objective
Research Elizabeth Brasher's parentage by examining the Ezekiel Henderson Revolutionary War pension file S6994, Thomas Levi Brasher Jr.'s 1789 will context, Chatham County NC marriage records, and colonial inheritance practices.

### Searches Conducted

| Search | Source | Result |
|---|---|---|
| Ezekiel Henderson pension S6994 PDF at revwarapps.org/s6994.pdf | revwarapps.org (Tier 1) | PDF exists but blocked (403 error). Could not extract full text. |
| Web search: "Ezekiel Henderson pension S6994 transcription" | Multiple | Found partial pension content via WikiTree, search snippets. Declaration made July 8, 1833 in Greenville District Court of Equity. Service: drafted 3 months (first tour), volunteered 12 months (second tour, cavalry then infantry). Discharged at Hillsboro, NC. Lived in Greenville 47 years. Pension $57.50/year granted April 17, 1834. |
| Pension file content: mentions of Elizabeth's father or Brasher family | revwarapps.org, WikiTree, ingenweb.org | NEGATIVE. Pension is Act of 1832 service-based application. No marriage certificates, family details, or in-law information found in available summaries. |
| ingenweb.org/inorange/familyfiles/jmphenderson.htm (Henderson family file) | INGenWeb Orange County | Page exists with pension details and family information, but blocked (403). Search snippets confirm pension details already known. |
| WikiTree Henderson-1855 (Ezekiel Henderson) | WikiTree (Tier 3) | Blocked (403). Search snippets confirm: married Elizabeth Brasher Oct 10, 1782; DAR Patriot A054668; will dated Feb 24, 1839 naming wife "Elisabeth" and son "Brasher Henderson" as executrix/executor. |
| WikiTree Brasher-122 (Thomas Levi Brasher Jr.) | WikiTree (Tier 3) | Lists Elizabeth as daughter. Marriage date Oct 17, 1782 at Chatham Co., NC (vs. Oct 10 elsewhere). Will dated Sep 27, 1789, proved Apr 6, 1790. Will transcript labeled File 579 (mislabeled), actual location Vol Apt 0008 File 589, images 2172-2178. |
| WikiTree Brasher-153 (Elizabeth Brasher Henderson) | WikiTree (Tier 3) | Lists Thomas Levi Brasher Jr. as father, Sarah Lindsey as mother. No primary source cited for parentage. |
| Geni.com Thomas Brasher Jr. and Ezekiel Henderson profiles | Geni (Tier 3) | Blocked (403). Search snippets confirm same data as WikiTree. |
| "Thomas Levi Brasher" will Greenville County 1789 transcript | Web search | No full will transcript found online. Will confirmed in SC Will Book Vol A-B 1787-1820, p. 28, FamilySearch film 0024025. Names five sons: Thomas, Quellea (Aquilla), Henry, John, Samuel. No daughters named. Witnessed by Aquilla Brasher (#1, the uncle). |
| Empty Branches on the Family Tree blog: Brasher category | emptybranchesonthefamilytree.com (Tier 2/3) | Blocked (403) but search snippets yielded important warning: "There is a lot of mixed up information online about Thomas. He has been turned into a different Thomas, given the middle name of Levi, and married to several different people." Blog confirms will named five sons, no daughters. Confirms Ezekiel Henderson married Elizabeth Brasher Oct 10, 1782, Chatham Co., NC. |
| Chatham County NC marriage bonds 1782 for Henderson/Brasher | ncgenweb.us/chatham/chatmarr.html, FamilySearch catalog 191194 | Marriage bonds collection exists (1772-1853) at NC State Archives and FamilySearch. Not accessible online for free. Published compilation: "Chatham County, North Carolina Marriage Records, 1782-1867" (Heritage Books). Specific bond not retrieved. |
| SC marriage records pre-1800 (usgwarchives.net) | usgwarchives.net | Blocked (403). |
| Ezekiel Henderson estate settlement 1856, Greenville County | WikiTree, Geni search snippets | POSITIVE FINDING. Estate settlement petition April 12, 1856, H.L. Henderson administrator. Legatees include: James Henderson (Indiana), Argulus Henderson (Mississippi), "A. Brasher and Frances his Wife" (Alabama), Thomas Henderson (Georgia), Lewis Croft and Rebecca his Wife (Georgia), Heirs of Nancy Long (deceased), Kindred Story and Delilah Story his Wife, Heirs of Sarah Long (deceased), Heirs of Brasher Henderson (deceased), T.B. Cox and Mary his Wife (Greenville), John Henderson. |
| Frances Henderson married Lawrence Aquilla Brasher | WikiTree Brasher-467, rootsweb, Genealogy.com | POSITIVE FINDING. Frances "Franky" Henderson (b. Oct 10, 1799, Greenville SC; d. 1878, Fayette AL) married Lawrence Aquilla Brasher (b. 1801, Greenville SC; d. 1862, Fayette AL) in 1820 in Greenville. Lawrence Aquilla was son of Aquilla B. Brasher (~1772-~1842), who was named in Thomas Levi Jr.'s 1789 will. This is a cross-family marriage: Elizabeth's daughter married Elizabeth's alleged nephew. 12 children, 24 years. |
| Colonial inheritance: married daughters excluded from wills | genfiles.com, genealogyblog.com, multiple | Confirmed: daughters who received "portions" (dowries) at marriage were commonly not named in father's subsequent will. A married daughter's absence from a will is NOT evidence of non-relationship. South Carolina followed English 1670 statute until 1791 reform. |
| Thomas Brasher Sr. 1770 will (Orange Co., NC) for comparison | Empty Branches blog, WikiTree Brasher-37 | Thomas Sr.'s will names both sons AND daughters (Elizabeth Jones, Sarah Pyle, Hannah Teague, Mary, Cassa, Jean, Rachel, plus wife Hannah Brazier). Thomas Sr. had more property and both married and unmarried daughters to provide for. |
| Descendants of Aquilla Brasher, Fayette Co., AL | rootsweb ~alfayett | Blocked (403). Search snippet confirms Lawrence Aquilla Brasher married Frances Henderson. |
| tnyesterday.com Brasher family page | tnyesterday.com | Blocked (403). |
| Greenville County probate records online search | greenvillecounty.org/appsas400/Probate | Exists but requires direct database access. Not searched. |
| Argaleus Henderson will (Google Docs transcription) | docs.google.com | Blocked (403). Document title: "18040906 CHAT-NC Argaleus Henderson Will." |
| Marriage location: Chatham Co. NC vs. Greenville SC | Multiple sources | WikiTree Brasher-122 says Oct 17, 1782 Chatham Co., NC. WikiTree Henderson-1855 says Oct 10, 1782, Greenville SC. Chatham Co. more likely: Brasher family in Chatham 1782 (land grants Oct 23, 1782); Greenville County not created until 1786; Ezekiel pension says "moved into South Carolina shortly after the Revolutionary War." |

### Key Findings

1. **Pension file S6994 does not resolve the parentage question.** The pension is an Act of 1832 service-based application, which typically contains only military service details, not family or marriage information. Elizabeth predeceased Ezekiel (~1839 vs. 1846), so no widow's pension application exists. The pension was granted $57.50/year starting March 4, 1834.

2. **Cross-family marriage is the strongest new evidence.** Frances Henderson (daughter of Ezekiel and Elizabeth Brasher Henderson) married Lawrence Aquilla Brasher (son of Aquilla B. Brasher, named in Thomas Levi Jr.'s 1789 will) in 1820. This is effectively Elizabeth's daughter marrying Elizabeth's alleged nephew. Such cross-family marriages between the same two families in consecutive generations strongly suggest a pre-existing kinship connection.

3. **Ezekiel Henderson's 1856 estate settlement confirms the Henderson/Brasher intermarriage** by listing "A. Brasher and Frances his Wife in Alabama" as legatees.

4. **Colonial inheritance practice supports the "excluded because married" explanation.** Daughters who received dowries at marriage were routinely excluded from subsequent wills in the colonial/early republic period. Elizabeth married seven years before the 1789 will, well within the expected pattern.

5. **The "Empty Branches" blog warns about online confusion** regarding Thomas Brasher's identity, the "Levi" middle name, and multiple incorrect wife attributions. This caution is well taken.

6. **Marriage location discrepancy persists.** Some sources say Oct 10, 1782 in Greenville SC; others say Oct 17, 1782 in Chatham Co., NC. Chatham County is more likely given: (a) The Brasher family was in Chatham/Orange County in 1782 (land grants recorded Oct 23, 1782). (b) Greenville County did not exist until 1786. (c) Ezekiel was discharged at Hillsboro, NC, and "moved into South Carolina shortly after the Revolutionary War" per the pension. A 1782 marriage in SC is chronologically possible but geographically less likely.

### Negative Results

| Search | Result |
|---|---|
| Pension file S6994 full text extraction | Could not access PDF (403). No full transcription found online. |
| Primary source naming Elizabeth as Thomas Levi's daughter | Not found. All attributions trace to Tier 3 sources or "A Brazier/Brasher Saga." |
| Chatham County marriage bond details (bondsman name) | Not retrieved. Collection exists but requires FamilySearch or NC Archives access. |
| Full text of Thomas Levi Brasher Jr.'s 1789 will | Not found online. Available on FamilySearch film 0024025, images 2172-2178. |
| SC Will Book Vol A-B digitized transcripts online | Not found freely available. |
| ingenweb Henderson family file full content | Blocked (403). |
| Argaleus Henderson will transcription (Google Docs) | Blocked (403). |

### Assessment

Confidence in Elizabeth Brasher's parentage (Thomas Levi Brasher Jr.) upgraded from **SPECULATIVE** to **MODERATE SIGNAL**. The cross-family marriage of Frances Henderson to Lawrence Aquilla Brasher, combined with the naming of "Brashier Henderson" and the geographic co-location of both families in the same Chatham County to Greenville County migration stream, constitutes multiple independent circumstantial indicators. However, no single primary document has been located that directly names Elizabeth as Thomas Levi's daughter.

### Files Updated
- Open_Questions.md (Question #13 updated with new searches, findings, and assessment)
- Research_Log.md (this entry)
- Elizabeth_Brasher.md (new findings added)
- Ezekiel_Henderson.md (estate settlement details added)

### Next Steps
1. Access Chatham County NC marriage bonds (FamilySearch catalog 191194) for the Henderson/Brasher bond. The bondsman identity (if a Brasher) would be near-conclusive evidence.
2. Access FamilySearch film 0024025 for full text of Thomas Levi Brasher Jr.'s 1789 will (images 2172-2178).
3. Obtain "A Brazier/Brasher Saga" by Brashear and McCoy (FamilySearch catalog 734009) to identify the specific evidence the authors used for the Elizabeth parentage claim.
4. Access Fold3 for digitized pension file S6994 images (requires paid subscription).
5. Search Greenville County probate case search (greenvillecounty.org/appsas400/Probate/) for Thomas Brasher estate distribution records.

---

## 2026-04-14: Brecht/Bright German Palatinate Origins and Family Crest Research

### Summary
Conducted comprehensive web research to verify and expand the Brecht/Bright family's German Palatinate origins, search for the Brecht family crest, verify the 1726 emigration, locate Schriesheim church record digitization projects, extract data from RootsWeb "Descendants of Johann Brecht," verify civic roles in Schriesheim, correct the George Adam Bright burial location, and document the Brecht/Bright surname transition. Ran 30+ web searches and attempted 10+ page fetches (most returned 403 errors due to site access restrictions).

### Key Positive Results

1. **1726 Emigration Petition Documented**: On May 6, 1726, Anna Catherina Brecht (widow of Johannes Michael Brecht I, who died 1719) petitioned with her two sons Stefan and Johann Michael to emigrate to America. They landed in Philadelphia in October 1726, settling first in Germantown. Stefan's oldest two sons, along with brother Johannes and sister Susanna with husband Gabriel Roescher, followed in 1731. Source: Geni project "Conrad Kuntz Brecht 1563-1612 family" (Tier 3); RootsWeb "Descendants of Johann Brecht" (Tier 2).

2. **No Ship Passenger List Exists for 1726 Arrival**: The Strassburger and Hinke "Pennsylvania German Pioneers" (1934), the definitive compilation of Philadelphia arrival lists, covers only 1727-1808. A 1727 law required ship captains to report passenger lists; the 1726 Brecht arrival predates this requirement. No ship name has been identified for their crossing. Source: PA State Archives research guide; Strassburger/Hinke publication records.

3. **George Adam Bright Burial Location CORRECTED**: Dutch Hollow Hanger Cemetery is in Middlebrook, Augusta County, Virginia (DHR Historic Register #007-6089), NOT "west of Greenville, SC" as stated in multiple vault files. The "Greenville" in the original reference refers to the Greenville-Middlebrook road in Augusta County. The cemetery contains graves of the first German immigrant settlers in the area from the early-to-mid 1700s. George Adam Bright (b. Sep 2, 1730, d. Jun 14, 1804) is confirmed buried there (Find a Grave #124244091; Geni; WikiTree Bright-270). Sources: Virginia DHR (dhr.virginia.gov/historic-registers/007-6089), Find a Grave, dhhcemetery.org.

4. **George Adam Bright Parentage DISPUTED**: Multiple tertiary sources (GEDCOM, Geni) list George Adam Bright (1730-1804) as a son of Johann Michael Brecht II (1706-1794). However, the RootsWeb "Descendants of Johann Brecht" page and WeRelate attribute George Adam to Johann Stephan Brecht (1692-1747), Michael's older brother. Johann Michael II had a son named "George" (b. Feb 9, 1731, d. ~1783) who is a DIFFERENT individual from George Adam Bright (b. Sep 2, 1730, d. 1804). George (b. 1731) appeared in Lancaster County PA records, scouted with Daniel Boone in Kentucky in 1776, and died ~1783 (Find a Grave #285400993). George Adam married Maria Katharina Kaufeldt (b. Jun 17, 1733, d. ~1798), bought 170 acres in Beverly Manor, Augusta County in 1767, and attended St. John's Reformed Church in Middlebrook. His will dated April 14, 1804 was proved June 25, 1805. Treat George Adam's parentage as (unverified).

5. **Brecht/Bright Surname Transition Documented**: The name change was a direct semantic translation (German "brecht" = English "bright"). It occurred gradually in the second generation: (a) George Adam Brecht adopted "Bright" when he moved to Frederick County, Virginia in 1759; (b) The first WRITTEN use of "Bright" was in 1768, when Michael (b. 1732, the third son) signed the administration account for the estate of Conrad Bower; (c) David Brecht's name was written "Brecht" until 1783; (d) By the Revolution, the family was universally known as "Bright." Source: Geni project (Tier 3), RootsWeb (Tier 2).

6. **Brecht Family Crest: Commercial Sources Only**: Searched for "Brecht Wappen," "Brecht coat of arms," and "Brecht family crest." Found descriptions on commercial heraldry sites (crestsandarms.com, heraldrysinstitute.com, coatofarmsof.com) that attribute to the Brecht surname an eagle, rose, argent, and azure. These are generic surname attributions, NOT authenticated heraldic grants specific to the Schriesheim Brecht family. No primary heraldic source (Siebmacher's Wappenbuch, Generallandesarchiv Karlsruhe, or other German heraldic registry) was identified. The Albert_Graham_Bright file's statement "The family crest (Brecht) is documented" may refer to a family tradition or an unlocated document in the family papers.

7. **Schriesheim Church Records on Archion.de**: Schriesheim church records from approximately 1558 onward are available on Archion.de, a paid subscription platform for digitized German Protestant church records. Over 600 Protestant parishes in Baden are available. Records are digitized but NOT indexed, meaning page-by-page browsing is required. The Evangelisches Archiv Baden holds Protestant parish registers covering 1502-1985. The Schriesheim Reformed Church was the primary denomination during the Brecht family's residence (after 1583 under the Electoral Palatinate's adoption of Calvinism). Source: Archion.de, FamilySearch wiki.

8. **Schriesheim Historical Context Verified**: Schriesheim is a wine town on the Bergstrasse at the western edge of the Odenwald, first documented in 764. The Thirty Years' War devastated the town; barely 40 families (less than 20% of pre-war population) returned, with only 24 bearing old Schriesheim family names. After the war, the population was replenished with Catholics, Lutherans, and Jews alongside the Reformed community. The Mathaismarkt wine festival has been celebrated since 1579. Source: Wikipedia "Schriesheim"; placesofgermany.de.

9. **Key Published Sources Identified**:
   - Albert G. Green, "Historical Sketch of the Bright Family of Berks County, PA" (1900, 29 pages), published by the Historical Society of Berks County. FamilySearch catalog #1036369.
   - "The Bright-Brecht Family of Pennsylvania" (227 pages), held by the Historical Society of Pennsylvania. Catalog: discover.hsp.org/Record/marc-67954. Available on FamilySearch.
   - Don Yoder, "Rhineland Emigrants: Lists of German Settlers in Colonial America" (1981). Contains 24 articles about 18th-century German-speaking emigrants, with personal name index. Based on Palatinate church, parish, and provincial records.
   - Morton Montgomery, "Historical and Biographical Annals of Berks County, PA" (biographies section contains Brecht/Bright family entry). Available at pagenweb.org.

10. **David Bright Additional Details**: David (b. Aug 9, 1740) was a miller near Schaefferstown, PA, then in the Swatara Valley. He married Mary Grant (also recorded as Mary Gale). He supplied flour for Washington's troops near Valley Forge in 1777-78. About 1784 he moved to Greenbrier County, Virginia. His will (Greenbrier County) named wife Mary, sons Michael, Jesse, David, George, and son-in-law John Moore. He is buried at Charles Evans Cemetery, Reading, Berks County, PA (Find a Grave #47249821); his remains or stone may have been relocated there from another cemetery. Source: RootsWeb, Montgomery, Find a Grave.

11. **Ratsverwandter and Herrenwingerter Roles Confirmed**: WikiTree Brecht-11 and the GEDCOM confirm Balthasar Hans Brecht held the positions of Ratsverwandter (town council member), Herrenwingerter (estate wine grower), Stadtrat (city councilman), and Almonier (charitable officer distributing alms) in Schriesheim. No additional primary documentation of these civic roles was found beyond the GEDCOM references and WikiTree profile. The terms are consistent with 17th century Palatinate civic structure.

### Negative Results

| Search | Result |
|---|---|
| RootsWeb "Descendants of Johann Brecht" page fetch | 403 error. Content extracted from web search snippets only. |
| WikiTree Brecht-58 page fetch | 403 error. Content extracted from search snippets. |
| Geni project page fetch | 403 error. Content extracted from search snippets. |
| Find a Grave #124244091 (George Adam Bright) page fetch | 403 error. Content extracted from search snippets. |
| crestsandarms.com Brecht page fetch | 403 error. Content extracted from search snippets. |
| heraldrysinstitute.com Brecht page fetch | 403 error. |
| coatofarmsof.com Brecht page fetch | 403 error. |
| WeRelate George Bright (16) page fetch | 403 error. |
| hausegenealogy.com Bright page fetch | 403 error. |
| cmbower.co.uk Brecht One Name Study page fetch | 403 error. |
| Specific Brecht coat of arms in German heraldic registry | Not found. No entry in Siebmacher or official German heraldic databases located. |
| Ship name for 1726 crossing | Not identified. Pre-1727 arrivals not covered by Pennsylvania German Pioneers. |
| Schriesheim specific church records on Archion.de | Could not verify availability of specific Schriesheim parish without paid Archion subscription. General confirmation that ~1558 onward records exist from earlier research session. |
| George Adam Bright in Greenville, SC records | No connection to Greenville, SC found. His burial is in Augusta County, Virginia. |
| Primary heraldic grant for Brecht family of Schriesheim | Not found. |

### Files Updated
- Johann_Michael_Brecht.md (emigration petition details, children birth dates, George Adam parentage discrepancy, name change documentation, new sources)
- David_Bright.md (occupation, military service, will details, children list corrected, burial location, new sources, new discrepancies)
- George_Bright_Sr.md (corrected will location from Berks County to Greenbrier County)
- George_Michael_Bright.md (corrected Dutch Hollow Cemetery location from Greenville SC to Middlebrook, Augusta County, VA; clarified George Adam parentage dispute)
- Albert_Graham_Bright.md (corrected Dutch Hollow Cemetery location; added family crest assessment)
- Balthasar_Hans_Brecht.md (added Schriesheim historical context, church records access info)
- Brecht_Family_Crest.md (NEW FILE: documents coat of arms findings and caveats)
- Research_Log.md (this entry)

### Remaining Corrections Needed (Not Yet Updated)
- Family_Tree.md Bright Family section is minimal (from handwritten chart only); does not contain the Dutch Hollow or George Adam references. No correction needed there.
- Marguerite_Julienne_Simone.md: CORRECTED in this session. Children list now includes birth dates and parentage dispute note.

### Next Steps
1. Obtain Albert G. Green, "Historical Sketch of the Bright Family of Berks County, PA" (FamilySearch catalog #1036369) for definitive resolution of George Adam Bright's parentage.
2. Obtain "The Bright-Brecht Family of Pennsylvania" (227 pages, HSP) for comprehensive Brecht genealogy.
3. Access Archion.de to browse Schriesheim Reformed Church records for Brecht christenings, marriages, and burials (1558 onward; paid subscription required).
4. Search Don Yoder "Rhineland Emigrants" index for Brecht/Schriesheim entries.
5. Access dhhcemetery.org cemetery records database for George Adam Bright's grave marker inscription.
6. Investigate whether the family papers contain a specific Brecht coat of arms image or document.
7. Search Siebmacher's Wappenbuch (available at some research libraries and on Google Books) for any Brecht entry.
8. Marguerite_Julienne_Simone.md already corrected in this session.

---

## 2026-04-14: Nissen Mendel Markel / Dov Markel Sambor District Research

### Summary
Conducted comprehensive research into Nissen Mendel Markel and Dov Markel using Sambor district vital records databases and related Holocaust and genealogical resources. Ran 30+ web searches and 15+ web fetch attempts across Gesher Galicia, JRI-Poland, JewishGen KehilaLinks, Yad Vashem, USHMM, FamilySearch, AGAD, Drohobycz-Boryslaw Organization, and general genealogical resources. All database search interfaces returned 403 errors on programmatic access; substantive data was extracted from web search snippets. No new vital records were found for Nissen Mendel or Dov, but significant contextual and structural findings were made.

### Databases Searched

1. **Gesher Galicia All Galicia Database** (search.geshergalicia.org): Confirmed that Sambor records are fully indexed and uploaded. Database search page returned 403. Contains 900,000+ records from Galicia including Jewish vital records. Sambor records from TsDIAL Fond 701 are indexed. **Human action required to search in browser.**

2. **JRI-Poland** (jri-poland.org/town/sambor/): Town Explorer page for Sambor exists with surname lists and indexed records. JRI-Poland has 6.1 million indexed records. Page returned 403. **Human action required.**

3. **JewishGen KehilaLinks Markel Family Page** (kehilalinks.jewishgen.org/Drohobycz/families/markel.html): Page returned 403. Web search snippets confirmed this page documents the **Lutowiska Markel family** (Sara Hinde Markel + Shamay Bartel, married 1877), not the Waniowice Markels. Because the marriage was Jewish only (not civil), children were registered as "Markel" (mother's name) rather than "Bartel" (father's name). Solomon Bartel (b. 1820) was from Lutowiska near Sambor.

4. **Drohobycz-Boryslaw Organization** (drohobycz-boryslaw.org/en/families/boryslaw/markel): Page returned 403. Web search snippets confirmed: grandmother had two brothers and a sister; brothers lived in Lwow and emigrated to Israel in 1936, bringing parents in 1939; sister Rebeka married Efroim Wilf from Boryslaw (sons: Moses, Dyonyo, Juda, Herman); Matilda married a farmer from Olszanik near Sambor (1930); Aaron Bartel's family deported from Kobla to Sambor ghetto early 1942, sent to Belzec November 1942.

5. **Yad Vashem Central Database** (collections.yadvashem.org/en/names): 403 error. Sambor is listed as place #5440818 with Jewish population 6,068 (1921 census). **Human action required to search for Markel.**

6. **USHMM Holocaust Survivors and Victims Database** (ushmm.org/online/hsv/): 403 error. Sambor Yizkor book cataloged as USHMM source #33369. **Human action required.**

7. **Sambor Yizkor Book** (jewishgen.org/yizkor/sambor/Sam258.html): 403 error on fetch, but web search confirmed **"Markel, Yosef and Family (5 People)"** in the necrology section of Sefer Sambor (ed. Aleksander Manor, Tel Aviv, 1980).

8. **FamilySearch** (collection #4426190, Ukraine Lviv Metrical Books 1786 to 1937): Confirmed as containing Lviv Oblast archive records. Primarily Orthodox and Roman Catholic, but Jewish metrical books from the same archive system may be included. **Human action required to browse for Sambor Jewish records.**

9. **AGAD Warsaw** (agad.gov.pl): Confirmed Fond 300 holds approximately 3,278 Jewish metrical registers from eastern Galicia. AGAD has digitized nearly all registers. Sambor was designated as a Jewish Administrative Center in 1877. **Human action required to browse scans.**

10. **Geni.com**: No Markel family from Sambor/Waniowice in the Jewish Communities of Galicia project (#15745). Negative result (confirmed from previous 2026-04-12 search).

11. **Sambor Jewish Cemetery** (cdp.jewishgen.org/eastern-europe/ukraine/sambir): 403 error. Sambor Jewish population: 4,427 (1880), 6,068 (1921). Cemetery documented by International Jewish Cemetery Project.

12. **Troškūnai Markel Family** (kehilalinks.jewishgen.org/troskunai/families/markel.htm): 403 error. Web search snippets confirm this is a **separate Lithuanian Markel family** (earliest member: Markel/Mortkhel Markel, b. before 1785, Raguva or Troskunai). No connection to the Galician Markels.

13. **Avotaynu Dictionary of Jewish Surnames from Galicia** (Beider, 2004): Confirmed "Markel" is listed. The surname derives from Yiddish personal names Markl/Merkl (diminutives of Marcus/Markward), also used as vernacular equivalents of Biblical Mordecai.

14. **Sambor 1877 Administrative District**: Confirmed that Sambor was one of 73 Jewish Administrative Districts in Galicia. The Austrian government designated Sambor as a center where Jewish metrical records were kept for the town and surrounding villages. Waniowice did not have its own registry; its records are in the Sambor books.

### Key Positive Findings

1. **Waniowice records are at Sambor**: Confirmed that Waniowice had no independent civil registry. All Jewish vital records for Waniowice were maintained at the Sambor Jewish Administrative Center. This means Heshel's 1878 marriage record, Dov's birth/death records, and possibly Nissen Mendel's records are in the Sambor registers.

2. **Sambor records are fully indexed**: Gesher Galicia has completed indexing Sambor records from TsDIAL Fond 701. These are freely searchable in the All Galicia Database. AGAD Fond 300 has digitized scans. This means a browser search of the All Galicia Database for "Markel" in Sambor is feasible and is the highest priority human action.

3. **Heshel's 1878 marriage record is the key lead**: The marriage of Heshel Markel and Leah Frei in 1878 in Vanyavitch/Waniowice would have been registered at the Sambor Jewish Administrative Center. Galician Jewish marriage records typically include: groom's name, age, father's name and status; bride's name, age, father's name. This single record could confirm Dov as father, provide Dov's age (yielding an approximate birth year), and possibly his occupation and residence.

4. **Dov's birth likely falls within the register period**: Estimated birth c. 1830 to 1840, and most Sambor Jewish registers survive from the 1830s onward. Nissen Mendel's birth (c. 1800 to 1820) likely predates the surviving registers.

5. **Yosef Markel in the Sambor Yizkor book**: "Markel, Yosef and Family (5 People)" appears in the Sambor necrology. This may be a son or grandson of the family. The Yichus narrative mentions Avraham Chaim Markel (murdered 1939) and his family; Yosef could be one of Avraham Chaim's children.

6. **KehilaLinks Drohobycz Markel page is a different family**: The page documents the Lutowiska/Bartel-Markel family, not the Waniowice Markels. However, both families used the surname Markel in the Sambor region, and a distant kinship is possible.

7. **Sambor Jewish population data**: 4,427 Jews in 1880, 6,068 in 1921. The Jewish community dates from at least the 16th century (Stary Sambor: first mention of Jews 1544). A synagogue was built in 1763.

### Negative Results (All Logged)

1. "Nissen Mendel Markel" in any database: no match.
2. "Nissen Mendel" + Markel/Markl/Merkel + Galicia: no match.
3. "Dov Markel" OR "Dow Markel" OR "Ber Markel" + Galicia/Sambor: no match.
4. "Mattis Markel" OR "Matys Markel" + Sambor: no match.
5. "Vigdor Markel" OR "Etti Markel" + Sambor/Holocaust: no individual records found.
6. "Heshel Markel" OR "Heschel Markel" OR "Heszel Markel" + marriage 1878 + Galicia: no vital record match.
7. "Heshel Markel" in Gesher Galicia search results: no match visible in web snippets.
8. Geni.com Jewish Communities of Galicia project: no Markel from Sambor/Waniowice.
9. "Rodzolika" or "Radzoliki" forest massacre: no independent corroboration of the specific forest name or 1939 date found; documented Sambor area mass killings are from 1941 to 1943.

### Files Updated

- [[Nissen_Mendel_Markel]] (added: estimated date range, name analysis, full 2026-04-14 research notes, 11 negative results, 8 next-step human actions, 10 document sources, Sambor administrative context, Waniowice civil registry information, Lutowiska Markel family distinction, Yosef Markel Yizkor finding)
- [[Dov_Markel]] (added: estimated date range, Mattis as second child, name analysis, Waniowice civil registry context, headstone inscription cross-reference, full 2026-04-14 research notes, database search status, negative results, next-step human actions)
- [[Open_Questions]] (question #10 updated with 2026-04-14 search results and expanded human-action-required leads)
- [[Research_Log]] (this entry)

### Assessment

Despite extensive searching, no primary or secondary source records were found for Nissen Mendel Markel or Dov Markel beyond the Yichus narrative (Tier 2). The confidence level for both individuals remains **Low**. However, the research has established that: (a) the relevant records exist and are indexed in accessible databases; (b) the 1878 Heshel/Leah marriage record is the single best lead for confirming Dov's identity; (c) Dov's estimated birth period falls within the surviving register period; and (d) all database searches require human browser access. The All Galicia Database search for "Markel" in Sambor is the single highest priority action.

### Next Steps (HUMAN ACTION REQUIRED)

1. Search All Galicia Database (search.geshergalicia.org) for "Markel" in Sambor (priority 1).
2. Search JRI-Poland Sambor surname list for Markel (priority 2).
3. Search Yad Vashem names database for Markel + Sambor (priority 3).
4. Browse AGAD Fond 300 scans for Sambor Jewish metrical books, especially marriage records 1878 (priority 4).
5. Browse FamilySearch collection #4426190 for Sambor Jewish records.
6. Access KehilaLinks Markel page in browser for full content.
7. Search USHMM database for Markel + Sambor.
8. Variant spellings to try: Markel, Markl, Merkl, Merkel, Marckl; given names: Nissen/Nisn/Nisan, Mendel/Menachem, Dov/Ber/Berko/Behr, Heshel/Heszel/Herschel/Hersch/Hirsch.

---

## Session: 2026-04-14 -- Morris Markel Family Immigration Manifest Search

**Goal**: Locate the ship manifest for Morris Markel family immigration to the United States (~1926-1930). Also verify Florence Markel's 1923 arrival on ship "The Liberty."

**Known facts going in**:
- Morris (Moishe Myer) Markel, b. ~1891-1892, Vanyavitch (Waniowice), Galicia
- Wife Helen Brandt Markel, b. ~1891-1897
- Yichus narrative: family "arrived in 1930"
- Kate Kaplan obituary: born Dec 6, 1925 Poland, moved to West Warwick at age 3 (~1928)
- 1940 Census: Morris age 48, Helen age 43, at 28 Harris Ave, West Warwick RI since 1935
- Children by immigration: Thelma (b. 1920), Anne (~1922), Rita (~1925), Kate (Dec 1925)
- Florence (Sura Feiga) arrived separately 1923 on ship "The Liberty" (Yichus)
- Morris entered US "claiming to fill a position as a Rabbi" at Ahavath Sholom (Yichus)

### Searches Performed (15 total)

1. **stevemorse.org "Markel" passenger manifest Ellis Island 1926-1930 Poland**: No results. Steve Morse tools confirmed as free, no-login search interface for Ellis Island/Ancestry data. Tool itself requires browser access for actual searches.

2. **Ship "The Liberty" 1923 passenger manifest Ellis Island**: No ship named "The Liberty" found as a transatlantic passenger vessel. Ellis Island Foundation and FamilySearch collections identified but require login.

3. **"Morris Markel" OR "Moishe Markel" OR "Markiel" passenger manifest 1926-1930**: No results. General NARA and immigration resources returned.

4. **SS Liberty ship 1923 immigration New York**: No transatlantic passenger vessel named Liberty confirmed. Wikipedia has SS Liberty (1890), a British railway vessel, not a passenger liner.

5. **"Markel" OR "Markiel" OR "Markl" immigration rabbi Rhode Island 1928 Poland Galicia naturalization**: Found KehilaLinks Markel family page (kehilalinks.jewishgen.org/Drohobycz/families/markel.html). RIHS naturalization resources identified.

6. **JewishGen EIDB Markel Sambor Galicia immigration**: No direct results. JewishGen EIDB confirmed at jewishgen.org/databases/eidb/ (requires registration). Gesher Galicia (geshergalicia.org) also relevant.

7. **KehilaLinks Markel family page fetch**: 403 error. Page exists but blocked for automated access.

8. **"Morris Markel" naturalization Providence "West Warwick" Rhode Island rabbi**: No naturalization record found via web search. RIJHA articles about West Warwick Jewish history returned. The jewishrhody.com article "The rise and fall of a West Warwick temple" may contain relevant info (403 on fetch).

9. **"Helen Brandt" OR "Helen Markel" passenger manifest immigration Poland 1926-1930**: No results. Hamburg passenger lists (1850-1934) identified as potential source for Eastern European emigrants.

10. **Markel Waniowice OR Vanyavitch immigration ship manifest**: No results.

11. **"Florence Markel" OR "Sura Feiga" OR "Florence Mermelstein" ship Liberty 1923**: No results. Results returned Dr. Howard Markel (historian, different person).

12. **1940 census citizenship status code 4 meaning**: Code "4" interpretation is contested. May mean naturalized, or may mean enumerator could not supply citizenship information. Steve Morse 1940 census codes page exists but returned 403.

13. **"Markel" OR "Markiel" Ancestry passenger list New York 1926-1929 Poland Galicia family**: No results. Ancestry collection 7488 (New York Passenger and Crew Lists, 1820-1957) confirmed as key resource. FamilySearch T715 collection also relevant.

14. **"Morris Markel" West Warwick Rhode Island obituary death 1963**: No obituary found. Rhode Island death records (1853-1973) at RI State Archives identified.

15. **FamilySearch "New England Petitions" naturalization index Markel Rhode Island**: Collection identified (United States, New England, Petitions for Naturalization, FamilySearch collection 2064580). Rhode Island U.S. District Court records (1907-1991) digitized at NARA Boston in collaboration with Ancestry. Post-1906 petitions include arrival date, port, ship name, and last foreign residence.

### Positive Results

1. **Naturalization petition identified as best alternative route to manifest**: Rhode Island U.S. District Court naturalization records (1907-1991) are digitized and available through FamilySearch and Ancestry. Post-1906 petitions list the exact arrival date, port, ship name, and last foreign residence. Morris almost certainly filed in Providence or Kent County. This record, if found, would directly identify the ship and arrival date.

2. **Polish shipping lines identified**: The Gdynia American Line operated SS Polonia, SS Kosciuszko, and SS Pulaski on the Gdynia-Copenhagen-New York route during the late 1920s. These were the primary carriers for Polish emigrants in this period. If the Markels departed from a Polish port, they likely sailed on one of these ships.

3. **Hamburg passenger lists (1850-1934)** identified as additional source: 90% of Eastern European emigrants departed via Hamburg. These lists are at FamilySearch and Ancestry.

4. **KehilaLinks Markel family page exists** at kehilalinks.jewishgen.org/Drohobycz/families/markel.html. The page is under the Drohobycz KehilaLinks section (Drohobycz is near Sambor in Galicia). Requires browser access.

5. **Ship "The Liberty" (Florence's 1923 arrival) not confirmed**: No transatlantic passenger vessel of that name identified for this period. The name may be garbled in family memory. Florence's manifest should be in the Ellis Island database (covers through 1924).

### Negative Results

1. **No Markel passenger manifest found via any free web search.** All primary databases require login or subscription.
2. **No Morris Markel naturalization record found via web search.** Records exist but are not freely searchable online.
3. **No Morris Markel obituary (1963) found.** May be in Providence Journal archives (GenealogyBank, subscription).
4. **No ship "The Liberty" confirmed as transatlantic passenger vessel (1923).** SS Liberty (1890) was a British railway vessel.
5. **KehilaLinks Markel family page returned 403** (blocked for automated fetch).
6. **jewishrhody.com West Warwick temple article returned 403.**

### Assessment

The Markel family immigration manifest almost certainly exists in NARA microfilm T715 (New York Passenger and Crew Lists, 1925-1957) or possibly T612/T621 if they arrived at a port other than New York. The manifest has not been located because all the databases containing individual passenger records (Ancestry, FamilySearch individual search, Ellis Island Foundation, JewishGen EIDB) require login or paid subscription, which are outside AI capabilities. The naturalization petition is the most promising alternative: it would contain the exact arrival date, port, and ship name, and Rhode Island naturalization records are digitized.

### Recommended Human Follow-Up Actions (Priority Order)

1. **Steve Morse One Step** (stevemorse.org/ellis/passengers.php): Search "Markel" and "Markiel" arriving New York 1926-1930. Free, no login. Use Soundex and Daitch-Mokotoff phonetic options. Also search "Brandt" (Helen's maiden name).
2. **Ancestry collection 7488** (New York Passenger and Crew Lists, 1820-1957): Search all surname variants (Markel, Markiel, Markl, Merkl) arriving from Poland 1926-1930. Also try "Brandt" with Helen's approximate age. Requires subscription.
3. **FamilySearch T715 collection**: Free with login. Search same variants.
4. **Ellis Island Foundation Passenger Search** (statueofliberty.org): Free with registration.
5. **JewishGen EIDB Gold Form** (jewishgen.org/databases/eidb/): Search with town "Waniowice" or "Sambor." Free with registration.
6. **Rhode Island naturalization records**: Search FamilySearch collection 2064580 (New England Petitions for Naturalization) or Ancestry for "Morris Markel" naturalization in Rhode Island. The petition would list arrival date, port, ship, and last foreign address.
7. **Florence Markel 1923**: Search Steve Morse or Ellis Island Foundation for "Florence Markel" or "Sura Feiga Markel" or just "Markel" arriving 1923. If "The Liberty" was a real ship name, it would appear in the ship search at stevemorse.org/ellis/boat.html.
8. **KehilaLinks Markel family page**: Visit kehilalinks.jewishgen.org/Drohobycz/families/markel.html in a browser.
9. **Hamburg passenger lists**: Search for Markel departing Hamburg 1926-1930 via Ancestry or FamilySearch.

### Files Updated
- `Morris_Markel.md`: Added ship manifest search status and Florence arrival note to Immigration section.
- `Open_Questions.md`: Updated #22 with full search history, detailed leads, and priority order. Merged #31 into #22.
- `Research_Log.md`: This entry.

---

## 2026-04-14: Pnei Yehoshua / Frei Rabbinical Descent Research

**Goal**: Investigate the Yichus narrative claim that Leah Frei descended from the Pnei Yehoshua (Rabbi Jacob Joshua Falk, 1680-1756) and from the Isserles and Landau rabbinical families.

### Searches Conducted (12 total)

**Search 1: Pnei Yehoshua descendants in Galicia/Lemberg**
- **Query**: Pnei Yehoshua Rabbi Jacob Joshua Falk descendants genealogy Galicia Lemberg
- **Sources**: Wikipedia, Encyclopedia.com, Geni.com, FamilySearch
- **Results**: The Pnei Yehoshua (1680-1756) was born in Krakow, became Chief Rabbi of Lemberg in 1717. His first wife was Leah Landau, daughter of Solomon Segal Landau of Lemberg (killed 1702 in gunpowder explosion). Three sons documented: Issachar Dov (1712-1744, rabbi of Podhajce), Aryeh Loeb (1715-1789, rabbi of Skala then Hanover), and a third less documented. Some grandchildren took the surname Bernstein; descendants lived in Brody from late 18th century onward.

**Search 2: Pnei Yehoshua Falk family tree on Geni**
- **Query**: "Pnei Yehoshua" Falk family tree descendants Geni
- **Sources**: Geni.com profiles
- **Results**: Children listed: Leah Falk (wife?), Gittel, Meitel (d. 1733), Faiga (married R. Shmuel Dov Hertzfeld), another daughter (married R. Naftali Hertz Halperin), Issachar Dov, Aryeh Leib. Descendant surnames: Lebenstein, Berend-Lowenstein, Bernstein, Babad-Rabinowicz, Herzig, Rosanes. Key finding: "Falk was hardly ever used as its family name in practice." A German-language descendant tree exists in Geni sources tab.

**Search 3: Neil Rosenstein's "The Unbroken Chain"**
- **Query**: Neil Rosenstein "Unbroken Chain" Pnei Yehoshua Falk descendants
- **Sources**: Geni project page, Amazon, Internet Archive, Avotaynu
- **Results**: The Unbroken Chain documents descendants of R. Meir Katzenellenbogen of Padua and R. Judah Loew of Prague through 22 generations. 3rd edition (2016-present) projected 10 volumes. Does not specifically index Pnei Yehoshua but may include them through intermarriage with Katzenellenbogen network. Book must be consulted directly.

**Search 4: Frei/Falk surname connection**
- **Query**: Frei Falk surname connection Jewish Galicia surname change
- **Sources**: Geneanet, Avotaynu (Alexander Beider's Dictionary of Jewish Surnames from Galicia), FamilySearch
- **Results**: "Frei" derives from Middle High German vri "free, independent," a status name. "Falk" derives from German Falke "falcon" or Yiddish falk, also the kinnui (secular name) for Yehoshua. The two names are etymologically unrelated. No documented surname change pathway from Falk to Frei found. In Galicia, Jews adopted mandatory hereditary surnames after 1785 under Joseph II's edict.

**Search 5: Pnei Yehoshua descendants and Bernstein surname in Brody**
- **Query**: "Pnei Yehoshua" descendants Bernstein Brody Galicia surnames genealogy
- **Sources**: JewishGen, Geni.com, JGSB research page
- **Results**: Confirmed grandchildren took Bernstein surname. Aryeh Leib Bernstein (b. 1708, Brody) documented. A genealogy by Rabbi Yosef Lewenstein of Serotsk was published in Hapeles (1902-1903), available on HebrewBooks.org starting p. 479.

**Search 6: Dubceron/Dubosari location**
- **Query**: Dubceron Dubosari Sambor Galicia Jewish town location
- **Sources**: JewishGen IJCP, Wikipedia, Gesher Galicia
- **Results**: Dubossary (Dubosari) is in modern Moldova on the Dniester River, ~500km from Waniowice. It is in Bessarabia, not Galicia. "Dubceron" not found as an identifiable place name in any gazetteer consulted. The Yichus narrative's "Dubceron" may be a phonetic rendering of Dubosari/Dubossary. Toba Rivka's origin in Dubosari would represent an inter-regional marriage connecting a Bessarabian family with a Galician one.

**Search 7: Ateres Yehoshua (Zunz, 1936)**
- **Query**: "Ateres Yehoshua" Zunz 1936 Pnei Yehoshua descendants genealogy
- **Sources**: JGSB, Geni.com
- **Results**: Confirmed: Sefer Ateres Yehoshua by Rabbi Dovid Aryeh Leib Zunz, published Bilgoray 1936, reprinted New York 1982. Documents Pnei Yehoshua descendants but lacks name index; requires page-by-page search in Hebrew small print. This is the single most comprehensive published source on Pnei Yehoshua descendants.

**Search 8: Pnei Yehoshua wife and Landau/Isserles connections**
- **Query**: Jacob Joshua Falk wife "Solomon Segal Landau" daughter Lemberg Isserles ancestry
- **Sources**: Encyclopedia.com, Geni.com, Wikipedia
- **Results**: CONFIRMED: First wife was daughter of Solomon Segal Landau of Lemberg. This directly establishes the Landau connection claimed in the Yichus narrative. The "Landau" in the claim likely refers to this Solomon Segal Landau rather than (or in addition to) the later Rabbi Ezekiel Landau (1713-1793).

**Search 9: Pnei Yehoshua ancestry and Isserles connection**
- **Query**: Pnei Yehoshua grandfather "Yehoshua Heschel" Isserles connection Krakow rabbinical lineage
- **Sources**: Geni.com, Wikipedia
- **Results**: CONFIRMED: The Pnei Yehoshua's maternal grandfather was R. Yehoshua Heschel of Krakow (author of Maginne Shelomoh). The Heschel family intermarried with the Isserles family: Hesya Miriam Isserles was wife of R. Abraham Joshua Heschel (1596-1663), Chief Rabbi of Krakow. This establishes the Isserles connection through the Pnei Yehoshua's maternal line.

**Search 10: Frei family in Waniowice/Sambor records**
- **Query**: Frei family Waniowice Sambor Galicia Jewish genealogy
- **Sources**: Gesher Galicia, JewishGen, FamilySearch
- **Results**: NEGATIVE. No specific Frei family records found for Waniowice or Sambor district. General Galicia databases (Gesher Galicia All Galicia Database, Ancestry Galicia collection 3132) available for future searching.

**Search 11: Descendant surname comprehensive check**
- **Query**: "Pnei Yehoshua" Falk descendants surname list Bernstein Lebenstein Herzig Rosanes Frei
- **Sources**: JewishGen, Geni.com, JGSB
- **Results**: Confirmed descendant surnames: Bernstein, Lebenstein, Herzig, Rosanes, Babad-Rabinowicz, Berend-Lowenstein. Frei NOT listed. "Those whose given name was Yehoshua had the second name of Falk, Valk, Walk, Wallik, or Wallich." This explains the Falk surname origin (kinnui for Yehoshua) but does not connect to Frei.

**Search 12: Aryeh Leib Bernstein as Pnei Yehoshua descendant**
- **Query**: Aryeh Leib Bernstein grandson Pnei Yehoshua Brody rabbi genealogy
- **Sources**: Wikipedia, Encyclopedia.com, Geni.com, JSTOR (N.M. Gelber article)
- **Results**: Aryeh Leib Bernstein (1708-1788) was documented in Brody, served as rabbi of Zbaraz. His son Issachar Berush Bernstein studied under him. A later Aryeh Leib Bernstein (1790-1843) of Lvov is also documented as Pnei Yehoshua descendant. N.M. Gelber published an article "Aryeh Leib Bernstein: Chief Rabbi of Galicia" in JSTOR.

### Summary Assessment

| Claim | Status | Basis |
|---|---|---|
| Descent from Pnei Yehoshua | SPECULATIVE | Single Tier 2 source (Yichus narrative). No Frei found among documented descendants. Surname Frei is unrelated to Falk. |
| Connection to Landau family | PLAUSIBLE (conditional) | Pnei Yehoshua's first wife was daughter of Solomon Segal Landau. Confirmed by multiple Tier 2 sources. Conditional on proving Pnei Yehoshua descent. |
| Connection to Isserles family | PLAUSIBLE (conditional) | Pnei Yehoshua's maternal Heschel family intermarried with Isserles. Confirmed by multiple Tier 2 sources. Conditional on proving Pnei Yehoshua descent. |
| Frei = Falk (surname link) | NOT SUPPORTED | Etymologically unrelated names. No documentation of this surname change. |

### Files Updated
- `Leah_Frei.md`: Added "Rabbinical Descent Claim: Assessment" section with full research findings.
- `Open_Questions.md`: Updated #12, changed status from PARTIALLY CONFIRMED to SPECULATIVE, added detailed search history and revised next steps.
- `Research_Log.md`: This entry.

---

## Session: 2026-04-17 -- Brina Goldbaum Focused Research (15 searches)

**Goal**: Research Brina Goldbaum's family and origins. She is Helen Brandt Markel's mother and Thelma Markel's maternal grandmother. Almost nothing known beyond a single GEDCOM entry.

**Known facts going in**:
- Brina Goldbaum married Joseph Brandt (dates unknown, Poland/Galicia)
- Daughter Helen Brandt married Morris Markel; immigrated to US ~1928
- Goldbaum and Brandt both in Tarnopol 1910 Jewish Census surname list
- GEDCOM records cause of death as Holocaust
- Tarnopol is ~150 km east of Sambor (Markel family origin)

### Searches Performed (15 total)

**Search 1**: Yad Vashem Central Database, Goldbaum from Tarnopol. Tarnopol Holocaust context confirmed (14,000 Jews; ghetto 1941-1943; 10,000+ killed). No specific Goldbaum individuals in web snippets.

**Search 2**: JewishGen / Gesher Galicia, Goldbaum vital records Tarnopol. Confirmed: 1910 Census at DATO (Fond 33, Ser. 1, Vol. 113), fully indexed in All Galicia Database.

**Search 3**: "Brina Goldbaum" / "Bryna Goldbaum" / "Brayna Goldbaum" exact name search. **NEGATIVE.** No results in any database.

**Search 4**: Geni Goldbaum Tarnopol Galicia. 916 Goldbaum profiles on Geni. Tarnopol families project (15742) exists. All 403 on automated access.

**Search 5**: site:yvng.yadvashem.org Goldbaum Tarnopol. Multiple item IDs returned (788325, 6510903, 1915425). All detail pages 403. Records appear to exist.

**Search 6**: Goldbaum surname distribution. Forebears.io: 301,076th most common globally; ~50% in US. Beider's dictionary (2004) is definitive reference for Galician distribution.

**Search 7**: USHMM Goldbaum Tarnopol. USHMM has Tarnopol region lists. EHRI portal: Jewish Community in Tarnopol records (Sygn. 110, 1874-1939). No specific Goldbaum match visible.

**Search 8**: Goldbaum immigration Rhode Island/New York. **NEGATIVE.** No manifest found. Providence RI passenger lists exist 1911-1943. Expected negative if Brina never emigrated.

**Search 9**: Goldbaum/Brandt marriage records Galicia. No specific record. Ancestry collection 3132 identified (Galicia Jewish vital records 1789-1905).

**Search 10**: Goldbaum Find a Grave. Only Louis Goldbaum (1849-1922) found, no connection. Tarnopol Jewish cemetery: no surviving tombstones.

**Search 11**: Brina/Bryna name etymology. Confirmed: anglicized form of Yiddish Brayne (ברײַנע), from "broyn" = "brown."

**Search 12**: Tarnopol 1910 Census details. Confirmed: census includes house numbers, professions, ages, household relationships for ~14,000 individuals. Individual Goldbaum records require All Galicia Database browser search.

**Search 13**: Center for Jewish History Brandt family. **SIGNIFICANT FINDING:** Ulrich Skaller Collection (ME 605) contains "history of the Alexander, Goldstein, Perl, Skaller, **Brandt**, Ament, Kohl, Kalahora, and Lebenheim families in Galicia and Russia" with family trees. Also: Gesher Galicia Brandt families page at geshergalicia.org/families/?id=brandt/.

**Search 14**: Tarnopol Yizkor Book. Published by JewishGen Press. Editor: Dr. Ph. Korngruen. Translator: Moshe Kutten. Name indexer: Stefanie Holzman. 358 pp, hardcover. Original at Yiddish Book Center.

**Search 15**: Goldbaum/Brandt family trees broadly. CJH confirmed ME 605. Ancestry has public Goldbaum photos. No specific Brina match.

### Key Positive Findings

1. **Both Goldbaum and Brandt confirmed in Tarnopol 1910 Census**: Fully indexed in free All Galicia Database. A search would yield individual names, ages, professions, household details.

2. **Ulrich Skaller Collection (ME 605) at CJH**: Documented Brandt family from Galicia with family trees. CJH at 15 West 16th Street, New York, NY 10011; contact: reference@cjh.org.

3. **Tarnopol Yizkor Book translated and name-indexed**: JewishGen Press edition.

4. **Yad Vashem records appear to exist**: Item IDs 788325, 6510903, 1915425.

5. **EHRI: Jewish Community in Tarnopol records (1874-1939)**: Covers Brina's lifetime.

6. **Geographic context**: Tarnopol was a major Haskala center with 14,000 Jews. If Goldbaum/Brandt were from Tarnopol, the Helen/Morris marriage connected two separate Galician communities.

### Negative Results

1. "Brina Goldbaum" (all variants) in any database: no match.
2. "Joseph Brandt" + Galicia + Tarnopol: no individual match.
3. Goldbaum immigration to RI/NY: no match.
4. Goldbaum/Brandt marriage record: no match.
5. Goldbaum tombstones in Tarnopol: none (cemetery destroyed).
6. Goldbaum in Sambor/Drohobycz: no match.
7. Louis Goldbaum (Find a Grave, 1849-1922): no apparent connection.
8. USHMM Goldbaum + Tarnopol specific name: not in web snippets.

### Assessment

Brina Goldbaum remains at **Speculative** confidence. Zero independent records found for her as an individual. The GEDCOM (Tier 3) is the sole source. However, this session identified the All Galicia Database (Tarnopol 1910 Census), CJH Ulrich Skaller Collection, Tarnopol Yizkor Book, and Yad Vashem as concrete next steps requiring human browser access. The All Galicia Database search for "Goldbaum" in Tarnopol is the single highest priority action.

### Files Updated
- [[Brina_Goldbaum]]: Major update with frontmatter, geographic context, Tarnopol community history, 15 search results, negative results, updated document sources, data discrepancies, and 17 prioritized research leads.
- [[Open_Questions]]: Updated #21 (added 2026-04-17 focused search results and expanded leads), #24 (expanded with 15-search results, Yad Vashem item IDs, Tarnopol Yizkor Book, EHRI portal), #32 (merged with #24).
- [[Research_Log]]: This entry.

---

## Session: 2026-04-18 -- 1930 Census Search for Morris Markel (10 searches)

**Goal**: Locate the Markel family in the 1930 Federal Census in West Warwick, Kent County, Rhode Island. This would be the family's earliest US census appearance (~2 years after immigration ~1928) and could reveal whether Helen's parents (Joseph Brandt and Brina Goldbaum) were in the household.

**Known facts going in**:
- Morris Markel, b. ~1891-1892, Vanyavitch/Waniowice, Galicia
- Wife Helen (Dwora Goldbaum/Brand), b. ~1894-1897, Lisko, Galicia
- Family immigrated ~1928 to West Warwick RI
- By 1940: 28 Harris Avenue, West Warwick (same address since 1935)
- Expected household April 1930: Morris (~38), Helen (~33-36), Thelma (~9), Anne (~8), possibly Rita (~5), Kate (~4)
- Morris's sister Minnie Sternbach and husband Abraham Sternbach established in West Warwick since 1912

### Searches Performed (10 total)

| # | Query | Result |
|---|---|---|
| 1 | "Morris Markel" 1930 Census Rhode Island | NEGATIVE. General RI census guides only. |
| 2 | Markel 1930 Census West Warwick Kent County Rhode Island | NEGATIVE. General census guides only. |
| 3 | FamilySearch 1930 census index Markel Rhode Island Kent County | NEGATIVE. Collection 1810731 confirmed; requires login. |
| 4 | "Markl" OR "Merkl" OR "Markiel" OR "Markal" 1930 census West Warwick RI | NEGATIVE. No variant spellings surfaced. |
| 5 | "Helen Markel" 1930 census Rhode Island | NEGATIVE. |
| 6 | Ancestry 1930 census "Markel" "West Warwick" OR "Providence" Rhode Island Jewish immigrant Poland | NEGATIVE. General guides only. |
| 7 | "Morris Markel" OR "Morris Markal" census 1930 1935 Rhode Island rabbi West Warwick | NEGATIVE. |
| 8 | Markel family 1930 census Arctic West Warwick Rhode Island Jewish Harris Avenue | NEGATIVE. Confirmed RIJHA Ahavath Sholom founding article exists at rijha.org. |
| 9 | Steve Morse Unified Census ED Finder for West Warwick 1930 | 403 on automated access. Tool confirmed at stevemorse.org/census/unified.html. |
| 10 | NARA microfilm locator 1930 census Kent County RI T626 | 403 on automated access. Locator at archives.gov/research/census/1930/about-locator.html. |

### Key Findings

1. **1930 Census record NOT located via free web search.** Ancestry (collection 6224) and FamilySearch (collection 1810731) both require login for individual name searches.
2. **Rhode Island had NO Soundex index for 1930.** Only twelve southern states had Soundex.
3. **The family was NOT at 28 Harris Avenue in 1930.** The 1940 Census states "same address since 1935," so the family had a different address in April 1930. They may have been with/near the Sternbach family.
4. **Name spelling is a known issue.** 1940 Census: "Markal"; 1950 Census: "Workel." The 1930 entry could be under any variant.
5. **1935 RI State Census** is an alternative: FamilySearch collection 1529126, indexed and free, arranged alphabetically by surname within each town.
6. **Abraham Sternbach as proxy search:** Locating Morris's brother-in-law in 1930 Census West Warwick could lead to the Markel household.

### Assessment

The record almost certainly exists (family was in the US by ~1928). It cannot be located through free web search. This is HIGH PRIORITY because it would provide: (a) immigration year as self-reported in 1930, (b) citizenship/naturalization status, (c) whether additional family members (Helen's parents?) were in the household, (d) Morris's 1930 occupation, (e) the family's 1930 address.

**HUMAN ACTION REQUIRED:**
1. Search Ancestry collection 6224 for Morris Markel / Markal / Markiel in Kent County RI (also try Providence County).
2. Search FamilySearch collection 1810731 for the same.
3. If not found by name, use Steve Morse ED Finder to identify West Warwick 1930 EDs, then browse images.
4. Search for Abraham Sternbach in 1930 Census West Warwick as a proxy.
5. Search 1935 RI State Census (FamilySearch 1529126) for Markel in West Warwick.

### Files Updated
- [[Morris_Markel]]: Added "1930 US Census: NOT YET LOCATED" section with full search notes and HUMAN ACTION REQUIRED items.
- [[Helen_Brandt]]: Updated research lead #19 with expanded 1930 Census search instructions.
- [[Research_Log]]: This entry.

## 2026-04-18: Holocaust Records Search for Brand/Goldbaum of Lesko (15 searches)

### Summary

Systematic search for Brand/Goldbaum family members from Lesko (Lisko) in Holocaust records and the Lesko Yizkor book. Tier 1 evidence (AGAD 1919 marriage banns) confirms Helen Brandt Markel was Dwora Goldbaum/Brand of Lisko, making Lesko the correct search location. Focused on establishing the deportation timeline, identifying the murder mechanism, and searching for individual family members in victim databases.

### Key Historical Findings: Lesko Holocaust Timeline (Tier 2, multiple corroborating sources)

| Date | Event | Source |
|---|---|---|
| Sept 1939 | German occupation begins | Encyclopedia.com, Shtetl Routes |
| June 1942 | Jews from Lesko and vicinity confined in a ghetto | Uncovering Jewish Heritage; Shtetl Routes |
| July 22, 1942 | German order: Jews from villages/small towns move to collection points including Lesko | Holocaust Historical Society (Sanok page) |
| Mid-Aug 1942 | Lesko ghetto liquidation; ~100 least physically fit shot at Jewish cemetery | Shtetl Routes; multiple sources |
| Mid-Aug 1942 | Surviving inhabitants marched to Zaslaw transit camp (unfinished paper factory, 5 mi S of Sanok, own railhead, barbed wire) | Holocaust Historical Society; Shtetl Routes |
| Sept 4-7, 1942 | Concentration of Jews from Sanok district at Zaslaw; 11,000+ crammed into barracks for ~500 | Holocaust Historical Society |
| Sept 7-10, 1942 | Deportation of ~17,000 from Zaslaw to Belzec extermination camp; murdered immediately | Holocaust Historical Society; zchor.org |

**Deportation route**: Lesko ghetto -> Zaslaw transit camp -> Belzec extermination camp -> gas chambers.

**Brina Goldbaum's probable fate**: Either (a) shot at Lesko Jewish cemetery mid-Aug 1942 (likely given estimated age 67-82), or (b) deported to Belzec Sept 7-10, 1942.

**Joseph Brandt's probable fate**: If alive in 1942, same two fates. At estimated age 62-82, likely among those shot at cemetery.

### Lesko Yizkor Book Necrology (USHMM Source #33405)

Pages: 467-476 (Lesko martyrs), 476-482, 482-485, 485-489 (village martyrs from Linsk district). Translated at jewishgen.org/yizkor/lesko/. All returned 403.

### Lesko Synagogue Memorial

Former synagogue (now art gallery since 1978) displays list of 3,000 murdered residents from Lesko and vicinity. Vestibule has photographs and memorial plaques.

### Searches Conducted (15 total)

| # | Query/Source | Result |
|---|---|---|
| 1 | Lesko Yizkor necrology at JewishGen | PARTIAL. Pages confirmed. 403 on fetch. |
| 2 | Yad Vashem: Brand/Brandt from Lesko | NEGATIVE (403). |
| 3 | Yad Vashem: Goldbaum from Lesko | NEGATIVE (403). |
| 4 | JewishGen necrology pp. 467-476 | BLOCKED (403). |
| 5 | JewishGen necrology pp. 482-489 | BLOCKED (403). |
| 6 | USHMM Lesko victim list Brand/Goldbaum | NEGATIVE. Found Fela Goldbaum oral history (irn505846). |
| 7 | Lesko deportation route (Zaslaw, Belzec) | POSITIVE. Full timeline established. |
| 8 | JewishGen Necrology: "Goldbaum" all books | PARTIAL. M.S. Goldbaum (Iasi). Not connected. |
| 9 | JewishGen: "Brand" Lesko Yizkor | PARTIAL. "Reb Hersahle Brandwine" pp. 187-220. Different surname. |
| 10 | Lesko synagogue memorial | CONFIRMED. 3,000 names displayed. |
| 11 | Encyclopedia.com Lesko | CONFIRMED. Pop: 1,976 (1880), 2,400 (1921, 63%). |
| 12 | Goldbaum Lesko cemetery | NEGATIVE. No Goldbaum headstone identified. |
| 13 | "Goldbaum" Holocaust Galicia | NEGATIVE. General info only. |
| 14 | Yad Vashem direct: Brand Lesko | BLOCKED (403). |
| 15 | Yad Vashem direct: Goldbaum Lesko | BLOCKED (403). |

### Secondary Findings

1. **USHMM Fela Goldbaum oral history (irn505846)**: Origin unknown. HUMAN ACTION REQUIRED.
2. **Brandwein family in Lesko**: "Reb Hersahle Brandwine" in Yizkor pp. 187-220. Brandwein and Brand both from German "Brand."

### Negative Results

1. No Goldbaum from Lesko in any Holocaust database via web search.
2. No Brand/Brandt from Lesko in any Holocaust database via web search.
3. All JewishGen, Yad Vashem, USHMM pages returned 403.
4. No Goldbaum headstone in Lesko cemetery.

### Priority Actions (HUMAN ACTION REQUIRED)

1. **Lesko Yizkor necrology pp. 467-489** at jewishgen.org/yizkor/lesko/. **HIGHEST PRIORITY.**
2. **Yad Vashem**: Brand/Goldbaum from Lesko/Lisko at collections.yadvashem.org.
3. **JewishGen Necrology Database**: jewishgen.org/databases/yizkor/ for Goldbaum/Brand.
4. **USHMM Fela Goldbaum**: collections.ushmm.org/search/catalog/irn505846.
5. **USHMM Lesko Yizkor #33405**: ushmm.org/online/hsv/source_view.php?SourceId=33405.

### Files Updated
- [[Brina_Goldbaum]], [[Joseph_Brandt]], [[Helen_Brandt]], [[Timeline]], [[Research_Log]]

## 2026-04-18: Barnett Salmanson 1910 and 1920 Census Search, 10 searches

### Summary

Searched for Barnett (Benjamin/Berko) Salmanson/Salmonson/Zalmanson in the 1910 and 1920 US Federal Census. 10 web searches conducted across FamilySearch, Ancestry indexes, WikiTree, NARA, Steve Morse, and general genealogy sources. **No individual census records located.** All census record databases require login or paid subscription for individual name queries, consistent with previous research findings.

### Searches Conducted

| # | Search | Database/Source | Result |
|---|---|---|---|
| 1 | "Barnett Salmanson 1910 census" | Web/NARA/Ancestry | Negative. General census information only. No individual record. |
| 2 | "Benjamin Salmanson 1910 census Providence Rhode Island" | Web/RIHS/FamilySearch | Negative. General RI census access info. RI Historical Society has CD-ROM 1910 index. |
| 3 | "Salmanson 1920 census Providence Rhode Island" | Web/RIHS/FamilySearch | Negative. General RI census access info. 1920 Soundex index on microfilm at RIHS. |
| 4 | "Salmonson 1910 census New York OR Providence" | Web/NARA/Steve Morse | Negative. Found Steve Morse Unified Census ED Finder (useful tool for locating EDs). |
| 5 | "Salmonson 1920 census Providence Rhode Island Benjamin" | Web/various | Negative. General information only. |
| 6 | "site:familysearch.org Salmanson 1910 OR 1920 census" | FamilySearch | Negative. General collection pages only. FamilySearch requires login for individual record searches. |
| 7 | "Elizabeth Salmanson OR Elizabeth Salmonson 1910 OR 1920 census Providence" | Web/various | Negative. General census access information. |
| 8 | "Barnett Salmanson OR Benjamin Salmanson OR Barnett Salmonson census ancestry genealogy" | Ancestry/WikiTree | **Partial.** Found Benjamin Salmonson in 1940 Census, Juanita, Washington (different person, born ~1889, wife Emillia). Ancestry has Barnett Salmanson in US City Directories, residence Rhode Island. WikiTree has 15 Salmonson profiles, none from Providence. |
| 9 | "Benjamin Salmonson Providence 1930 census Sterling OR Elizabeth children" | Web/NARA/Ancestry | Negative for individual record. Found us-census.org has Providence 1930 transcription project (T626-2175 to T626-2180, T626-2183). |
| 10 | "Excello Braid Providence Rhode Island 1910s 1920s address directory" | RI State Archives/Internet Archive | **Partial.** RI State Archives Digital Archive has Polk City Directories for Providence (1916-1921). Internet Archive has Providence city directories. Ancestry has RI city directories. These can confirm Barnett's address for ED-based census lookup. |

### Key Findings

1. **No census records found via web search.** Census individual records are behind login/paywall at Ancestry and FamilySearch, consistent with project documentation (reference/what-ai-can-and-cannot-do.md).
2. **Providence 1930 Census transcription project** at us-census.org may have the confirmed "Benjamin Salmonson" 1930 record transcribed and freely accessible.
3. **City directories** for Providence (1916-1921) are digitized at RI State Archives and Internet Archive. These would confirm addresses for ED-based census browsing.
4. **Steve Morse Unified Census ED Finder** (stevemorse.org/census/unified.html) can convert the known 1918 address (236 Sterling Ave) to a 1920 Enumeration District for targeted browsing.
5. **WikiTree has no Salmanson profiles** from Providence. This family is not yet on WikiTree.

### Recommended Human Actions (priority order)

1. **FamilySearch 1920 Census** (free with login): Search "Salmanson" and "Salmonson" in Providence, RI. Also try "Benjamin" as first name. Collection 1488411.
2. **Steve Morse ED Finder** (free, no login): Enter "236 Sterling Ave, Providence RI" for 1920 to get the Enumeration District. Then browse that ED page by page on FamilySearch.
3. **FamilySearch 1910 Census** (free with login): Search same name variants in both Rhode Island and New York. Collection 1727033.
4. **Providence City Directories** on Internet Archive (free): Look up Barnett Salmanson / Excello Braid Co. in 1910 and 1915 directories to determine pre-1918 addresses for 1910 census ED lookup.
5. **Ancestry.com** (subscription): Search Salmanson/Salmonson in 1910 (collection 7884) and 1920 (collection 6061) censuses.

### Analysis: Where Was Barnett in 1910?

The 1910 Census was taken April 15, 1910. Barnett married Elizabeth Salk September 12, 1909 in Providence. Their son Leonard was born June 21, 1910 (after the census date). Son Samuel was born June 24, 1912 in Brooklyn, NY. Three scenarios:

- **Providence**: Married there Sep 1909. Elizabeth's family (Salk) was in Providence. Possible they stayed.
- **New York City/Brooklyn**: Samuel's 1912 Brooklyn birthplace means the family was in Brooklyn by at least 1911. They may have moved to NYC soon after marriage.
- **Boarding**: As a newly married couple with no children (in April 1910), they may appear as boarders, making the record harder to find if the enumerator spelled the name differently.

For the 1910 search, try both Providence, RI and Kings County (Brooklyn), NY.

### Files Updated
- [[Barnett_Salmanson]], [[Research_Log]], [[timeline_gaps]]

---

## 2026-04-18: Abraham Salk 1910 Census Search (Providence Ward 3, RI), 10 searches

### Summary

Searched for Abraham Salk's household in the 1910 US Federal Census, Providence Ward 3, Rhode Island. This was identified as a CRITICAL census gap. 10 web searches conducted across FamilySearch, Ancestry indexes, NARA, Steve Morse, variant spellings, and family member proxy searches. **No individual census record located.** All census record databases require login or paid subscription for individual name queries.

### Searches Conducted

| # | Query/Source | Result |
|---|---|---|
| 1 | "Abraham Salk" 1910 Census Providence Rhode Island | NEGATIVE. General census resource pages only. |
| 2 | "Salk" 1910 Census Providence Ward 3 Rhode Island | NEGATIVE. General resource pages only. |
| 3 | "Abraham Zalk" OR "Abraham Sulk" OR "Abraham Selk" 1910 Census RI (variant spellings) | NEGATIVE. No indexed records for any variant. |
| 4 | Tobey Salk / Theresa Salk / Toby Salk 1910 Census Providence (wife search) | NEGATIVE. Found Morton Salk, Ester Salk (b. ~1888, Russia), Burton Salk, Max Salk in 1940 Census snippets. No 1910 results. |
| 5 | site:familysearch.org "Abraham Salk" 1910 Census Providence | NEGATIVE. Zero results. |
| 6 | Providence Ward 3 1910 Census enumeration district Chalkstone Avenue | INFORMATIONAL. Steve Morse ED Finder exists. NARA T1224 has ED descriptions. No direct ED obtained. |
| 7 | stevemorse.org 1910 ED Finder Providence RI Ward 3 | INFORMATIONAL. Tool requires interactive use. 403 on page fetch. |
| 8 | "Abraham Salk" OR "A Salk" Providence 1910 junk peddler | NEGATIVE. No individual records in free results. |
| 9 | "Nathan Fain" OR "Barnett Salmanson" 1910 Census Providence (family proxy) | NEGATIVE. No indexed records via web search. |
| 10 | "Abraham Salk" Rhode Island 1915 state census OR 1900 census OR naturalization | NEGATIVE. Found RI 1915 state census on FamilySearch (collection 1532188). No individual result. |

### Contextual Findings

1. **Providence Jewish neighborhoods in 1910**: The North End (near Chalkstone Avenue) and South Providence were the two major centers of Jewish life. A public bathhouse on Quaid Street indicates an established immigrant community in Abraham's Ward 3 neighborhood.
2. **1910 Census microfilm**: NARA T624 (1,784 rolls). Rhode Island rolls cover Providence County. ED descriptions on T1224.
3. **Rhode Island Historical Society**: 1910 Census index on CD-ROM, searchable by surname. RIHS Reading Room, 121 Hope Street, Providence.
4. **Rhode Island 1915 State Census**: FamilySearch collection 1532188. Lists residents as of April 15, 1915. Independent data point between 1910 and 1920 federal censuses.
5. **Other Providence Salk family in 1940 Census**: Ester Salk (b. ~1888, Russia, Providence), Morton Salk, Burton Salk, Max Salk. Likely Hyman Salk hardware store family; relationship to Abraham unconfirmed.

### Analysis: Why the Record Was Not Found

1. **Behind paywall**: Ancestry.com and FamilySearch (login required) have indexed 1910 Census records. The record likely exists but is not surfaced by web search.
2. **Mistranscribed name**: Abraham was illiterate. The enumerator recorded a phonetic rendering, and indexers may have transcribed it as Zalk, Sulk, Selk, Szalk, Solk, or something unrecognizable.
3. **Different first name**: If Abraham's Hebrew name was Moshe (per Elizabeth's headstone), he may appear as "Moses Salk" or "Moses Zalk."
4. **Different address in 1910**: The family may not yet have lived at 60 Chalkstone Avenue. Elizabeth married Barnett Salmanson in September 1909; the household composition was changing.
5. **Enumeration missed**: Some households were missed, though less likely.

### Negative Results

1. No 1910 Census record for Abraham Salk (any spelling variant) found via free web search.
2. No 1910 Census record for Tobey/Theresa Salk found via free web search.
3. No 1910 Census record for Nathan Fain or Barnett Salmanson found via free web search (family proxy).
4. No Providence city directory entry for Abraham Salk found online.
5. No naturalization record for Abraham Salk found online.

### Priority Actions (HUMAN ACTION REQUIRED)

1. **FamilySearch 1910 Census (FREE with login)**: Search familysearch.org for Abraham Salk, Abram Salk, Moses Salk, Abraham Zalk, Moses Zalk in Providence, Rhode Island. Try broad searches: first name only + Rhode Island. Collection: "United States Census, 1910."
2. **FamilySearch 1915 RI State Census (FREE with login)**: Search collection 1532188 for Salk/Zalk in Providence. This captures the household between 1910 and 1920.
3. **Steve Morse One-Step ED Finder (FREE, no login)**: stevemorse.org/census/unified.html?year=1910. Enter Providence, Rhode Island, Ward 3 to identify enumeration district(s) covering Chalkstone Avenue area. Then browse those EDs page by page on FamilySearch.
4. **Ancestry.com 1910 Census (PAID)**: Search with Soundex/phonetic matching. Try: Abraham Salk, Abram Salk, Moses Salk, Abraham Zalk, Abram Zalk, A. Salk. Location: Providence, Providence County, Rhode Island. Also try RI statewide. Collection 7884.
5. **RIHS Reading Room (IN-PERSON)**: 1910 Census index on CD-ROM, searchable by surname. Rhode Island Historical Society, 121 Hope Street, Providence.
6. **Try "Moses Salk" as search name**: The Hebrew inscription on Elizabeth's headstone reads "Hilda bat Moshe," suggesting Abraham's Hebrew name may have been Moshe/Moses. Census enumerators sometimes recorded Hebrew or Yiddish names.

### Files Updated
- [[Abraham_Zolly_Salk]], [[Research_Log]], [[timeline_gaps]]

## 2026-04-18: Immigration Search (Prompt 11), 10 iterations, ~30 searches

### Summary

Systematic search for passenger manifests and naturalization records for 10 identified immigrant ancestors. Searched across Ellis Island Foundation (libertyellisfoundation.org/statueofliberty.org), Steve Morse One-Step tools (stevemorse.org), JewishGen EIDB (jewishgen.org/databases/eidb), GG Archives (ggarchives.com), Chronicling America (chroniclingamerica.loc.gov / loc.gov), FamilySearch wiki and collection pages, Ancestry collection references, NARA resources, PolishRoots, ImmigrantShips.net, NorwayHeritage, and general web search. **No individual passenger manifests or naturalization records were located through free web search.** All primary databases (Ancestry, FamilySearch individual records, Ellis Island Foundation search, JewishGen EIDB search) require login or paid access for individual record queries.

### Immigrants Searched

| # | Person | Origin | Arrival | Ship | Result |
|---|---|---|---|---|---|
| 1 | **Barnett Salmanson** (Berko Zalmanson) | Vilnius, Lithuania | Dec 23, 1904 | SS Baltic (White Star Line) | NOT FOUND. Ship/date confirmed (GG Archives, NorwayHeritage). No Dec 1904 passenger list digitized at GG Archives (earliest: Dec 1917). Ancestry subscription required. |
| 2 | **Elizabeth Salk** | Poland | ~1897 | Unknown | NOT FOUND. 1897 is problematic: Ellis Island fire (June 15, 1897) destroyed records. If arrived before fire, only Customs Lists survive. |
| 3 | **Levi Itzhak Zalmanson** (Louis) | Lithuania | Unknown | Unknown | NOT FOUND. No arrival date known. WWI draft card for son Barnett claims citizenship by father's naturalization, implying Levi may have been in US. No record found. |
| 4 | **Morris Markel** (Mojzesz Majer Markiel) | Waniowice, Galicia | ~1928 | Unknown | NOT FOUND. Family arrived ~1928 (Kate born Dec 1925 in Poland, arrived age 3). Likely sailed from Gdynia or Bremen/Hamburg. Polish ships (SS Kosciuszko, SS Polonia, SS Pulaski) were common. NARA T715 microfilm. |
| 5 | **Helen Brandt** (Dwora Goldbaum/Brand) | Lisko, Galicia | ~1928 (with Morris) | Unknown (same ship as Morris) | NOT FOUND. Would be on same manifest as Morris and children. |
| 6 | **Abraham Dovid Sternbach** | Sokoliki(?), Galicia | ~1912 | Unknown | NOT FOUND. Confirmed arrived 1912 per RIJHA article. Ellis Island records (1892-1924) should contain manifest. |
| 7 | **Minnie Markel Sternbach** | Waniowice, Galicia | ~1912 (with Abraham) | Unknown | NOT FOUND. Likely on same manifest as Abraham Sternbach. |
| 8 | **Florence Markel Mermelstein** (Sura Feiga) | Waniowice, Galicia | 1923 | "The Liberty" (family memory) | NOT FOUND. Ship name "The Liberty" unconfirmed -- no transatlantic passenger vessel by that name found for 1923. Family memory error likely. Manifest should be in Ellis Island database (1892-1924 coverage). |
| 9 | **Michael Kascher** (Michel) | Waldhutten/Valchid, Transylvania | ~1910-1912 | Unknown | NOT FOUND. In US by May 1913 (marriage in Beaver, PA). May have arrived via New York or Philadelphia. Hamburg passenger lists (1890-1913) are a possible source. |
| 10 | **Simon Port** | Lithuania | ~1890s | Unknown | NOT FOUND. Estimated arrival 1890s based on children born in NJ. If arrived before 1892, Castle Garden records apply; if after 1892, Ellis Island. |

### Searches Conducted (All Negative Unless Noted)

| # | Search Query/Target | Database/Source | Result |
|---|---|---|---|
| 1 | site:libertyellisfoundation.org "Zalmanson" OR "Salmanson" OR "Salmonson" 1904 | Web/Google | NEGATIVE. No indexed pages found. |
| 2 | "Berko Zalmanson" OR "Berl Zalmanson" OR "Barnett Salmanson" passenger manifest SS Baltic 1904 | Web/multiple | NEGATIVE. GG Archives and NorwayHeritage confirm ship but no individual passenger data accessible. |
| 3 | "Markiel" OR "Markel" passenger manifest Ellis Island 1928 Poland Galicia Rhode Island | Web/multiple | NEGATIVE. General database references only. |
| 4 | stevemorse.org Ellis Island "Zalmanson" OR "Salmanson" passenger list December 1904 | Web/Steve Morse | NEGATIVE. Tool confirmed operational but requires Ancestry subscription for actual searches. |
| 5 | "Sura Feiga" OR "Florence Markel" OR "Sura Markiel" passenger manifest 1923 Ellis Island | Web/multiple | NEGATIVE. No specific record found. |
| 6 | "Abraham Sternbach" OR "Avraham Sternbach" passenger manifest Ellis Island 1912 Rhode Island | Web/multiple | NEGATIVE. General database references only. |
| 7 | chroniclingamerica.loc.gov "Salmanson" naturalization Rhode Island (1900-1930) | Chronicling America | NEGATIVE (403 on redirect). |
| 8 | "Barnett Salmanson" OR "Benjamin Salmanson" naturalization Providence Rhode Island | Web/RIHS/FamilySearch wiki | NEGATIVE for records. POSITIVE for resource identification: RI naturalization records at NARA Waltham, FamilySearch collection 2622566. |
| 9 | "Michel Kascher" OR "Michael Kascher" passenger manifest immigration Youngstown Ohio 1910-1913 | Web/multiple | NEGATIVE. |
| 10 | "Simon Port" immigration passenger manifest Lithuania New Jersey 1890s Jewish | Web/multiple | NEGATIVE. |
| 11 | "Salk" passenger manifest Castle Garden 1897 New York Poland | Web/FamilySearch wiki | NEGATIVE. Note: Providence passenger lists have gap 1872-1911. Ellis Island fire June 1897 complicates search. |
| 12 | "Minnie Sternbach" OR "Minnie Markel" OR "Abraham Sternbach" naturalization RI | Web/RIJHA | PARTIAL. RIJHA article confirms Sternbachs arrived Arctic 1912. No naturalization record located. |
| 13 | GG Archives SS Baltic passenger lists page | WebFetch/ggarchives.com | POSITIVE. No Dec 1904 list available; earliest is Dec 1917. |
| 14 | "Levi Zalmanson" OR "Louis Salmanson" OR "Lavi Salmanson" immigration Lithuania | Web/multiple | NEGATIVE. No record found in any database. |
| 15 | "Kascher" OR "Kasher" passenger manifest Austria-Hungary Transylvania 1910-1912 | Web/multiple | NEGATIVE. |
| 16 | "Morris Markel" OR "Mojzesz Markiel" naturalization Rhode Island petition | Web/FamilySearch/RIHS | NEGATIVE for record. POSITIVE for collection ID: FamilySearch 2622566 (RI Naturalization Records 1907-1991). |
| 17 | "Elizabeth Salk" OR "Salk" passenger manifest 1897 New York Poland immigration | Web/NARA/FamilySearch | NEGATIVE. |
| 18 | "Abraham Salk" OR "Abraham Zolly Salk" 1894 1896 immigration passenger list | Web/multiple | NEGATIVE. |
| 19 | jewishgen.org EIDB "Zalmanson" OR "Salmanson" Vilna Lithuania | Web/JewishGen | NEGATIVE. Tool confirmed (EIDB Gold Form, 22M+ records 1892-1924) but requires direct database search. |
| 20 | "Sternbach" passenger ship Ellis Island 1912 Galicia | Web/multiple | NEGATIVE. |
| 21 | FamilySearch "Berko Zalmanson" OR "Barnett Salmanson" 1904 New York | Web/FamilySearch | NEGATIVE. No indexed web result. |
| 22 | "Michael Kascher" OR "Kascher" naturalization Mahoning County Ohio | Web/FamilySearch/HSP | NEGATIVE for record. POSITIVE for resource: Mahoning County naturalization records at Clerk of Courts (330-740-2111) and HSP Balch collection. |
| 23 | "Markel" OR "Markiel" ship manifest 1926-1928 Poland Gdynia Kosciuszko/Polonia/Pulaski | Web/multiple | NEGATIVE. |
| 24 | "Salk" OR "Zalk" family Providence Rhode Island immigration 1890s 1897 | Web/multiple | NEGATIVE. Note: Providence passenger lists 1911-1943 only. Family likely arrived via New York. |
| 25 | "Abraham Sternbach" immigration passenger manifest 1912 Poland Galicia | Web/multiple | NEGATIVE. |
| 26 | "Florence Mermelstein" OR "Sura Feiga Markel" ship "The Liberty" 1923 | Web/Ellis Island Foundation | NEGATIVE. No ship "The Liberty" confirmed for transatlantic 1923 service. |
| 27 | Ship "Liberty" OR "Liberté" transatlantic passenger 1923 New York from Europe | Web/multiple | NEGATIVE. No transatlantic passenger vessel named "Liberty" or "Liberté" confirmed for 1923. |
| 28 | FamilySearch RI naturalization wiki page (full collection inventory) | WebFetch/FamilySearch wiki | POSITIVE. Complete inventory of RI naturalization collections extracted. Key: collection 2622566 (free with login, 1907-1991), collection 2141014 (district court indexes), collection 5000148 (district and circuit court), Ancestry collection 61208. |
| 29 | Barnett Salmanson obituary 1960 Providence Temple Emanu-El immigration | Web/multiple | NEGATIVE for obituary text. Heritage Hub (Providence Journal) confirmed as source. |
| 30 | RIJHA founding article (Ahavath Sholom) PDF fetch | WebFetch/rijha.org | NEGATIVE (PDF binary, not readable by web fetch). |

### Key Findings and Conclusions

1. **All primary passenger list databases require login/subscription**: Ancestry (collection 7488 for NY, collection 1068 for Hamburg), FamilySearch (collection 1368704 for Ellis Island 1892-1924), Statue of Liberty Foundation (statueofliberty.org), JewishGen EIDB -- all require authentication for individual record searches. Free web search cannot access individual record data.

2. **Steve Morse One-Step tools require Ancestry subscription**: The Gold Form at stevemorse.org/ellis/passengers.php is confirmed operational with fields for first/last name, arrival year, ship name, town of origin, Daitch-Mokotoff Soundex, etc. But it queries Ancestry's database and requires a subscription.

3. **Naturalization records are the best alternative path**: FamilySearch collection 2622566 (Rhode Island Naturalization Records 1907-1991) is FREE with login and contains index + images. Post-1906 naturalization petitions contain: full name, birth date, birthplace (town and country), arrival date, port, ship name, occupation, current address, and witnesses. This would resolve immigration details for Morris Markel, Barnett Salmanson, Abraham Sternbach, and Elizabeth Salk in a single collection.

4. **Ship "The Liberty" (Florence Markel, 1923) remains unconfirmed**: No transatlantic passenger vessel named "The Liberty" has been found for 1923. The name is almost certainly a family memory error. Florence's manifest should be searchable in the Ellis Island database under "Sura Feiga Markel" or "Sura Markiel" arriving 1923 from Poland/Galicia, age ~14.

5. **Elizabeth Salk's 1897 arrival is complicated by the Ellis Island fire**: The Main Immigration Building fire of June 15, 1897 destroyed Federal and State immigration records. If the Salk family arrived before June 15, only Customs Lists survive (available via Statue of Liberty Foundation). If after June 15, records were processed at the Barge Office (temporary facility).

6. **GG Archives has no SS Baltic passenger list for December 1904**: The earliest Baltic list available is December 1917. The December 1904 manifest exists on NARA microfilm T715 and in the Ancestry/FamilySearch digitized collections.

7. **Mahoning County (Ohio) naturalization records** for Michael Kascher are held at the Clerk of Courts (345 Oak Hill Avenue, Youngstown, OH 44502, 330-740-2111) and at the Historical Society of Pennsylvania Balch collection. FamilySearch has Ohio County Naturalization Records 1800-1977.

### HUMAN ACTION REQUIRED (Priority Order)

**Highest Priority (one collection, multiple immigrants):**
1. **FamilySearch collection 2622566** (Rhode Island Naturalization Records 1907-1991, FREE with login): Search for Morris Markel / Moishe Markel / Mojzesz Markiel, Barnett Salmanson / Benjamin Salmanson / Berko Zalmanson, Abraham Sternbach / Abraham Dovid Sternbach, and Elizabeth Salk. Post-1906 petitions would resolve ship name, arrival date, port, and birthplace for each. URL: familysearch.org/en/search/collection/2622566

**High Priority (individual searches):**
2. **Steve Morse One-Step Gold Form** (stevemorse.org/ellis/passengers.php, requires Ancestry subscription): Search for Berko Zalmanson arriving Dec 1904 on SS Baltic at New York. Use Daitch-Mokotoff Soundex. Also search for Sura Feiga Markel/Markiel arriving 1923, Abraham Sternbach arriving 1912, and Simon Port arriving 1890-1895.
3. **JewishGen EIDB Gold Form** (jewishgen.org/databases/eidb/ellisgold.html, free): Search by town of origin: Vilna (for Barnett), Waniowice (for Sternbachs/Florence), Lisko (for Helen Brandt).
4. **Statue of Liberty Foundation** (statueofliberty.org, free with registration): Search for all 10 immigrants by name.
5. **FamilySearch Ohio County Naturalization Records**: Search for Michael Kascher in Mahoning County, OH. Free with login.
6. **Mahoning County Clerk of Courts** (330-740-2111): Request naturalization records for Michael Kascher, naturalized ~1913-1920 in Youngstown, OH.

**Medium Priority:**
7. **FamilySearch collection 2141014** (RI District Court Naturalization Indexes 1906-1991): Cross-reference with collection 2622566.
8. **Ancestry collection 7488** (NY Passenger and Crew Lists 1820-1957): Direct search for all immigrants.
9. **Ancestry collection 61208** (RI State and Federal Naturalization Records 1802-1945): Covers earlier period than 2622566.
10. **Hamburg Passenger Lists** (FamilySearch or Ancestry collection 1068): Search for Michael Kascher departing Hamburg/Bremen ~1910-1912 for New York.
11. **Castle Garden database** (castlegarden.org): Search for Simon Port arriving 1890-1892 (pre-Ellis Island).
12. **Heritage Hub / Providence Journal archives** (via Providence Public Library): Search for Barnett Salmanson naturalization notice (Providence Journal would have published list of new citizens).

### Files Updated
- [[Morris_Markel]], [[Helen_Brandt]], [[Barnett_Salmanson]], [[Elizabeth_Salk]], [[Levi_Itzhak_Zalmanson]], [[Michael_Kascher_Transylvania]], [[Florence_Markel_Mermelstein]], [[Minnie_Markel_Sternbach]], [[Simon_Port]], [[Research_Log]], [[Family_Tree]]
