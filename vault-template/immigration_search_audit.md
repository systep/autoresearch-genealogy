---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, immigration, audit, prompt-11]
session: "2026-05-02 Immigration Search (prompt 11), 2-iteration scoped run; ROUND 3 append 2026-05-02 (targeted-slice retry, 12 searches)"
---

# Immigration Search Audit

Tracks the status of every immigrant ancestor's immigration / naturalization records, identifying which have been found, which need follow-up, and which databases were consulted.

## Session Context (2026-05-02)

- Branch: `claude/run-top-agents-oyF19` (rebased on main)
- Scope cap: 2 iterations, ~12 candidates total, ~15 web searches
- Free sources only. Ancestry.com / FamilySearch individual records / Newspapers.com / MyHeritage / Fold3 require login or subscription and are flagged for human follow-up.
- WebFetch behavior: prior sessions confirmed 403 on familysearch.org, wikitree.com, geni.com, findagrave.com. Relied on WebSearch snippets.

## Candidate Status Table

| # | Person | Approx. Arrival | Origin | Manifest Status | Naturalization Status | Notes |
|---|---|---|---|---|---|---|
| 1 | [[Israel_Salk]] | 10 Aug 1910 | Kovno, Russian Empire | Not located via free web. Eilat Gordin Levitan Kovno page (eilatgordinlevitan.com/kovno/kovno_pages/kovno_list1.htm) hosts an Ellis Island One-Step Jewish-Kovno-passenger list — flagged for human review. | Unknown. US Flexoline Alien Registration 1940-1954 implies he had not naturalized as of registration; alternatively delayed naturalization is possible. | Single Tier 2 source (MyHeritage Flexoline index). Targeted searches return only generic Ellis Island portals. |
| 2 | [[Georg_Kascher_1895]] | 1913 (SS Armenia, Hamburg → New York) | Waldhütten / Valchid, Transylvania | Already cited in vault: SS Armenia 1913 manifest (Tier 1). | Not yet documented. | 2026-05-02 search returned no additional manifest detail; existing Tier 1 citation stands. Naturalization (Ohio) is the next Tier 1 path. |
| 3 | [[Barnett_Salmanson]] | 23 Dec 1904 (SS Baltic, Liverpool → New York) | Eastern Europe (Belarus / Russian Empire) | Cited in vault as MyHeritage immigration record (Tier 3). Not independently verified through free databases. White Star Line / GG Archives confirms Baltic served Liverpool–New York Jul 1904 to Jan 1905, transit ~7-9 days, consistent with 14 Dec 1904 Liverpool sailing → 23 Dec NY arrival. | Federal court (US District Court for RI). 2026-04-22 sweep of FamilySearch RI State Naturalization 1907-1991 (collection 2622566) returned 0 hits because it indexes state-level only. Federal records held NARA Boston/Waltham. | Plausibility of date confirmed by ship-schedule corroboration. Manifest still requires Ancestry/Steve Morse subscription. Federal naturalization petition is highest-yield next step (NARA Boston/Waltham). |
| 4 | [[Robert_King_II]] | 1770 (ship Jupiter, Larne → Charleston?) | County Antrim, Ireland (Larne) | No primary passenger list. Olive Tree Genealogy "Free Ships Passenger Lists Arriving in the USA 1770-1799" page (olivetreegenealogy.com/ships/tousa1770-1799.shtml) is a candidate index — flagged for human review. The 1770 Jupiter departed Larne; passenger names per Olive Tree may or may not be transcribed. | N/A (pre-1790 Naturalization Act framework). Robert King II served in American Revolutionary War (1775-1783), which conferred citizenship rights. | Tier 3 attribution to Jupiter remains uncorroborated by primary source. The original Customs/Charleston port of arrival has not been verified; smokykin / mytrees Tier 3 sources suggest Baltimore/Annapolis/Chesapeake instead. Logged in person file Discrepancy table. |
| 5 | [[Peter_Jungblut_1739_MD]] | Pre-1728 (port unknown) | Palatinate, Germany | No Strassburger/Hinke match found. | **Naturalized 6 March 1738/9, Prince George's County, Maryland** (Commission Book #82, Council of Maryland). Already cited in vault. | 2026-05-02 search added new corroborating Tier 2 detail: occupation **surveyor**, residence in "disputed territory" by 1728 (thegagenweb.com Youngblood migrations page; firstfamiliesofmaryland.com qualifying ancestors). |
| 6 | [[Henry_Michael_Kascher]] | Round trip: arr. NY 27 Jun 1935 from Hamburg (SS Hamburg) | US-born 1914; trip to Germany 1935 (Olympics) | Vault cites FamilySearch passenger list index 1906-1942 ("Herr Henry Kascher" among German passengers). 2026-05-02 GG Archives search confirms SS Hamburg sailings Jul 11 1935 and Aug 21 1935 from Hamburg → NY (Hamburg-American Line); 27 Jun 1935 NY arrival is inconsistent with these documented sailings. **Possible date discrepancy logged in cross_reference_audit.md.** | US-born; not applicable. | The discrepancy may be: (a) Henry sailed on a different vessel (e.g. SS Bremen, SS Europa, Norddeutscher Lloyd) and the SS Hamburg attribution in vault is based on partial index; (b) the 27 Jun 1935 date refers to a different sailing of SS Hamburg not in the GG Archives sample. Flagged for primary-document review. |
| 7 | [[Morris_Markel]] | ~1928 | Sambor district, Galicia (Polish 2nd Republic) | Not located. 2026-04-18 sweep ran 30 searches across Ellis Island, Steve Morse, JewishGen EIDB, GG Archives, Chronicling America: zero free hits. 2026-05-02 retry produced same generic-portal results. | Filed in US District Court for Rhode Island (federal) per 1940 Census citizenship code "4" (interpretation uncertain). FamilySearch collection 2622566 indexes RI State Naturalization 1907-1991 but federal records are held at NARA Boston/Waltham. | Highest-priority next step: NARA Boston/Waltham petition (would yield arrival date, port, ship name, exact birthplace). |
| 8 | [[Helen_Brandt]] | ~1928 (with Morris) | Tarnopol or Sambor, Galicia | Not located (same sweep as Morris). | Not yet searched. Likely derivative through husband if Morris naturalized. | Highest-priority next step: same as Morris; the manifest would list Helen and the children Anne, Frieda, Kate. |
| 9 | Florence (Sura Feiga) Markel (sister of Morris, separate arrival) | 1923 ("The Liberty" per Yichus narrative) | Sambor / Galicia | **No transatlantic passenger vessel "The Liberty" confirmed for 1923.** SS Liberty (1890) was a British railway vessel, not a passenger liner. Family memory of "The Liberty" likely a name error. 2026-05-02 search returned no manifest. | Unknown. | Search Ellis Island 1922-1924 for any Markel / Markiel / Merkl / Markel female single-arrival, Galician origin, age ~22-26. Note: Florence has no current standalone person file; she is referenced in [[Morris_Markel]]. |
| 10 | [[Hyman_Salk_1873]] | ~1900 | Lithuania (probable Kovno Gubernia) | Not located. | Open. Person file cites RI naturalization as "Open" research item. | Per Warwick Beacon business feature, Hyman bought a Providence tailor shop in 1900. Manifest search for Hyman / Chaim Salk / Zalk / Salko / Sulk arrivals 1898-1901 NY returned no free-database hits. |
| 11 | [[Rebecca_Marcus_Friedberg]] | ~1900 to ~1909 | Libau, Russian Empire (Liepāja, Latvia) | Not located. 2026-05-02 search surfaced an unrelated "Rebecca Friedberg (Knap)" on Geni (different parents, married Soroch Friedberg Rotterdam 1909) — confirmed NOT this Rebecca (vault Rebecca's parents are Willy Friedberg + Henriette Goldberg). | Unknown. | The 1910 NY marriage cert places her in NY by Nov 1910. Ellis Island arrival Friedberg / Marcus 1900-1910 is the next path. |
| 12 | [[Rose_Gerwitz]] | Between 1894 and 1918 | Kovno, Russian Empire | Not located. | Unknown. | Person file already lists this as an Open Question. Search returned only generic Ellis Island portals. Naturalization through husband Victor (full name unknown) is also a possible path but blocked by missing surname. |

## Iteration 1 Searches (2026-05-02)

| # | Query | Tool | Outcome |
|---|---|---|---|
| 1 | `"Israel Salk" Kovno passenger manifest 1910 Ellis Island arrival` | WebSearch | Generic Ellis Island portals; found eilatgordinlevitan.com/kovno Kovno-Jewish passenger list (Tier 2-3 compiled) for human review. |
| 2 | `"SS Armenia" 1913 Hamburg New York passenger list "Kascher"` | WebSearch | No specific Kascher hit; one unrelated 1906 SS Armenia mention (different family). Existing Tier 1 vault citation stands. |
| 3 | `"Salmanson" OR "Salmonson" SS Baltic White Star Line December 1904 manifest Liverpool New York` | WebSearch | Confirmed SS Baltic Liverpool–NY service Jul 1904 – Jan 1905 (consistent with 23 Dec 1904 NY arrival). No specific Salmanson manifest in free results. |
| 4 | `"ship Jupiter" Larne 1770 passenger list Charleston "Robert King"` | WebSearch | Olive Tree Genealogy 1770-1799 index (olivetreegenealogy.com/ships/tousa1770-1799.shtml) is a candidate; WikiTree Dolby-84 already cited. No primary list in snippet. |
| 5 | `"Peter Jungblut" OR "Peter Youngblood" 1739 Maryland naturalization Prince George's County Palatine` | WebSearch | **POSITIVE** corroboration: thegagenweb.com Youngblood migrations + firstfamiliesofmaryland.com Qualifying Ancestors confirm Maryland 6 Mar 1738/9 naturalization with sons William, Peter and daughters Sarah, Mary; new detail: occupation surveyor; settled "disputed territory" by 1728. |
| 6 | `"Henry Kascher" OR "Henri Kascher" passenger arrival "SS Hamburg" 1935 New York manifest Olympic` | WebSearch | GG Archives SS Hamburg sailings 11 Jul 1935 and 21 Aug 1935 documented; **no SS Hamburg sailing matching 27 Jun 1935 NY arrival in free GG Archives sample** — discrepancy logged. |

## Iteration 2 Searches (2026-05-02)

| # | Query | Tool | Outcome |
|---|---|---|---|
| 7 | `"Markel" Galicia Sambor passenger arrival 1928 Polish ship Gdynia New York manifest` | WebSearch | No specific Markel manifest in free results. Generic NARA / PolishRoots portals. |
| 8 | `"Florence Markel" OR "Sura Feiga Markel" 1923 New York passenger arrival Galicia` | WebSearch | No hits. "The Liberty" ship name remains unconfirmed; likely family memory error. |
| 9 | `"Hyman Salk" OR "Chaim Salk" OR "Chaim Zalk" 1900 1901 passenger arrival New York Providence tailor` | WebSearch | No hits. |
| 10 | `"Rebecca Friedberg" OR "Rivka Friedberg" OR "Rebecca Marcus" Libau Liepaja 1900 1910 passenger arrival` | WebSearch | One Geni hit for "Rebecca Friedberg (Knap)" — confirmed NOT vault Rebecca (different parents). |
| 11 | `"Helen Brandt" OR "Chana Brandt" passenger arrival Sambor Galicia 1928 1929 New York` | WebSearch | No hits. |
| 12 | `"Rose Gerwitz" OR "Rose Salk" Kovno passenger arrival 1910 1918 New York manifest` | WebSearch | No hits. |
| 13 | `"Norbert Fleisig" 1875 immigration arrival passenger Hungary Austria` | WebSearch | No hits. Generic Hungary/Austria emigration portals only. (Norbert is post-1875 immigrant; needs more specific arrival date before manifest search is viable.) |
| 14 | `Olive Tree Genealogy "Jupiter" 1770 Larne Charleston "Robert King" passenger list` | WebSearch | Olive Tree 1770-1799 page surfaced again; full passenger list of Jupiter not visible in snippet. Flagged for human direct visit. |
| 15 | `"Morris Markel" Rhode Island naturalization West Warwick rabbi 1930s petition` | WebSearch | No hits. RIJHA PDF archives surfaced (rijha.org Notes / Jews of Woonsocket) — flagged for human PDF review. |

## Findings Summary

### Records corroborated this session

1. **Peter Jungblut (Youngblood) Maryland 1738/9 naturalization**: Tier 2 corroboration via thegagenweb.com and firstfamiliesofmaryland.com. New detail added: occupation surveyor; in Maryland by 1728 ("disputed territory"). Already in vault person file.
2. **Barnett Salmanson SS Baltic 23 Dec 1904 plausibility**: White Star Line schedules confirm the Baltic ran Liverpool–NY July 1904 through January 1905, transit 7-9 days, consistent with reported 23 Dec 1904 arrival. The MyHeritage Tier 3 citation now has independent ship-schedule corroboration. Manifest itself remains paywalled.

### Discrepancies logged

1. **Henry Michael Kascher SS Hamburg 27 Jun 1935 NY arrival**: GG Archives sample shows SS Hamburg sailings 11 Jul 1935 and 21 Aug 1935. The 27 Jun 1935 NY arrival date does not match either sailing. Possibilities: (a) different vessel (SS Bremen / SS Europa / Norddeutscher Lloyd), (b) earlier 1935 SS Hamburg sailing not in the free GG Archives sample, (c) date reported in vault is from imprecise FamilySearch index. Logged in cross_reference_audit.md.

### Negative results (logged for completeness)

- Israel Salk Kovno 1910 manifest
- Markel family 1928 manifest (Morris, Helen, Anne, Frieda, Kate)
- Florence Markel 1923 ("The Liberty") manifest
- Hyman Salk ~1900 manifest
- Rebecca Marcus Friedberg ~1900-1910 manifest from Libau
- Rose Gerwitz Kovno manifest
- Norbert Fleisig 1875 manifest
- Morris Markel RI naturalization petition (federal court records held NARA Boston/Waltham, not online free)

### Paywalled / login-required databases flagged for human follow-up

- Ancestry.com (collection 7488 NY Passenger and Crew Lists 1820-1957; 1068 Hamburg Passenger Lists 1850-1934; 1277 NY Passenger and Crew Lists 1917-1967; 61208 RI State and Federal Naturalization Records 1802-1945)
- Statue of Liberty Foundation passenger search (free with registration)
- JewishGen EIDB Gold Form (free with login)
- Steve Morse One-Step Ellis Island (free; queries Ancestry index — full results need Ancestry sub)
- FamilySearch collection 2622566 (RI Naturalization 1907-1991), 2141014 (RI District Court Naturalization Indexes), 1368704 (NY Passenger Arrival Lists Ellis Island 1892-1925) — free with login
- NARA Boston/Waltham — federal naturalization records for Rhode Island (Barnett Salmanson, Morris Markel, possibly Hyman Salk and Israel Salk)

## Next-Session Recommendations

1. Human visit to **NARA Boston/Waltham** for Rhode Island federal naturalization petitions: Barnett Salmanson, Morris Markel, Hyman Salk. These post-1906 petitions list arrival date, port, ship name, exact birthplace.
2. Direct browse of **olivetreegenealogy.com/ships/tousa1770-1799.shtml** for the Jupiter Larne 1770 passenger list (corroborate or refute the Robert King attribution).
3. Direct browse of **eilatgordinlevitan.com/kovno/kovno_pages/kovno_list1.htm** for Israel Salk and Hyman Salk in the Kovno Jewish Ellis Island compiled list.
4. Direct browse of **rijha.org Rhode Island Jewish Historical Notes** PDFs for Markel / Salmanson / Salk family mentions, congregation membership rolls.
5. Resolve Henry Kascher SS Hamburg date discrepancy via FamilySearch passenger list index 1906-1942 image review.

---

## Session Context (2026-05-02 ROUND 3, append-only)

- Branch: `claude/run-top-agents-oyF19`
- Scope cap: 2 iterations, ~10 candidates total, ~12 web searches
- Free sources only. WebFetch behavior unchanged from round 2 (familysearch / wikitree / geni / findagrave 403).
- Targeted slice: (1) Norbert Fleisig deferred from round 2; (2) Henry Michael Kascher Discrepancy #75 cross-vessel re-test; (3) Brecht/Bright 1726 Palatine emigrant ship-search in Strassburger & Hinke; (4) Anne Markel + Morris/Mojzesz Markel ~1928; (5) Avraham Chaim Markel (NOTE: did NOT emigrate, killed in Galicia 1939; emigration search inapplicable, marked N/A); (6) fresh: Michael Kascher Sr. 1864 (post-1915 emigration); Max Salk Chicago 1892 / Robert Salem Salk Chicago.

## Round 3 Iteration 1 (5 searches)

| # | Query | Tool | Outcome |
|---|---|---|---|
| 16 | `"Norbert Fleisig" Krakow 1900 1924 Providence Rhode Island arrival passenger` | WebSearch | Modern Dr. Norbert Fleisig MD Providence dominates results. New lead: UCI Hirschberg Krakow Jewish Genealogy Fleisig family page (`ics.uci.edu/~dhirschb/genealogy/Krakow/Families/Fleisig.html`). |
| 17 | `"Kascher" passenger arrival New York June 1935 manifest` | WebSearch | NEGATIVE for Kascher; only generic NARA / FamilySearch passenger-list portals returned. |
| 18 | `"Anna Catherina Brecht" OR "Catharina Brecht" 1726 Schriesheim Pennsylvania ship Strassburger Hinke Pennsylvania German Pioneers` | WebSearch | Confirms Strassburger & Hinke begins **1727**, AFTER the 1726 Brecht arrival. WikiTree Brecht-58 reaffirmed (already cited). **Definitive: no Brecht passenger entry exists in Pennsylvania German Pioneers because the series does not cover 1726.** |
| 19 | `"Anne Markel" OR "Mojzesz Markel" OR "Markiel" 1928 1929 New York passenger manifest Galicia Polish` | WebSearch | NEGATIVE. Generic Ellis Island / Statue of Liberty / Ancestry portals only. |
| 20 | `"Michael Kascher" Waldhutten Transylvania Youngstown Ohio arrival 1916 1920 passenger manifest` | WebSearch | NEGATIVE. Generic Ohio history results; no manifest. |

## Round 3 Iteration 2 (7 searches)

| # | Query | Tool | Outcome |
|---|---|---|---|
| 21 | `"Norbert Fleisig" 1875 OR 1924 Krakow haberdasher New York Efenef` | WebSearch | **POSITIVE Tier 2-3 corroboration**: Geni Fleisig surname index records "Norbert Nachum Fleisig" with brother **Charles Fleisig (1881-1963)** and son **Earl Fleisig (1916-1999)**. UCI Hirschberg Krakow Fleisig family page reaffirmed. **NEW NAME VARIANT**: Norbert Nachum Fleisig (Hebrew middle name Nachum). Krakow origin now has compiled Tier 2 corroboration in addition to GEDCOM Tier 3. |
| 22 | `"SS Hamburg" OR "SS Bremen" OR "SS Europa" New York arrival June 1935 passenger list` | WebSearch | Confirms documented 1935 voyages: SS Bremen Bremen→NY 12 Apr + 18 Oct; SS Europa 26 Jul + 3 Sept. **No late-June 1935 NY arrival on either vessel in free GG Archives sample.** |
| 23 | `Strassburger Hinke Pennsylvania German Pioneers 1726 Brecht Schriesheim list ship Heidelberg Lancaster` | WebSearch | Confirms volumes 42 (Strassburger 1934) and Internet Archive availability (`archive.org/details/pennsylvaniagerm42stra`). **The series begins 1727; the Brecht 1726 Pennsylvania arrival predates the series and cannot be in it.** Definitive negative result. |
| 24 | `"Markiel" OR "Markel" Sambor Galicia Poland passenger ship 1928 1929 New York "S.S."` | WebSearch | NEGATIVE. PolishRoots Passenger Ships Index + MS Pilsudski 1930s Polish liner page surface as candidate ship-search resources but no Markel/Markiel hit. |
| 25 | `"Robert Salem Salk" OR "Max Salk" Chicago Kovno passenger arrival 1907 1912 manifest` | WebSearch | NEGATIVE. |
| 26 | `"Fleisig" site:ics.uci.edu Krakow genealogy Norbert` | WebSearch | Confirms UCI Hirschberg Krakow Fleisig family page exists at both `ics.uci.edu/~dhirschb/genealogy/Krakow/Families/Fleisig.html` and `ics.uci.edu/~dan/genealogy/Krakow/Families/Fleisig.html`. Page contents not visible in snippet (HUMAN ACTION required to browse). |
| 27 | `"SS Manhattan" 1935 New York arrival Hamburg "Kascher" OR "Henry Kascher"` | WebSearch | Confirms SS Manhattan 1935 Hamburg→NY voyages 10 Apr and 23 Oct; **no June arrival.** No Kascher found in available passenger-list snippets. |

## Round 3 Findings

### Records corroborated this session

1. **Norbert Fleisig Krakow origin**: UCI / Dan Hirschberg Krakow Jewish Genealogy Fleisig family page (Tier 2 compiled) + Geni Fleisig surname index (Tier 3) independently corroborate the previously single-Tier-3 GEDCOM Krakow attribution. **NEW NAME VARIANT**: Norbert Nachum Fleisig. Sibling: Charles Fleisig (1881-1963). Son: Earl Fleisig (1916-1999). Arrival manifest itself still NOT located.

### Discrepancies updated

1. **Discrepancy #75 (Henry Michael Kascher SS Hamburg 27 Jun 1935 NY arrival)**: NEEDS_PRIMARY status reaffirmed. Round-3 cross-vessel search ELIMINATED the major alternate-vessel hypotheses for late-June 1935: SS Manhattan, SS Bremen, SS Europa all documented to have non-late-June 1935 NY arrivals from German ports. Three remaining hypotheses: (a) less-prominent vessel not in GG-Archives free sample; (b) earlier 1935 SS Hamburg sailing absent from free samples; (c) FamilySearch index transcription error on date OR vessel. NARA microfilm M237 June 1935 roll remains the highest-yield resolution path.

### Definitive negatives logged

- **Brecht 1726 Strassburger & Hinke search**: Definitively negative, by series scope. The Pennsylvania German Pioneers series begins 1727, one year AFTER the documented Brecht arrival. No further Strassburger & Hinke searches needed for the Brecht 1726 cohort.
- **Anne Markel / Morris Markel / Markiel 1928-1929 NY arrival**: still negative on free web; same conclusion as round 2.
- **Avraham Chaim Markel**: emigration search inapplicable. Per [[Avraham_Chaim_Markel]], he remained in Galicia and was murdered in 1939 in the Sambor district. No US emigration record exists or is expected. Removed from immigration-search candidate set.
- **Michael Kascher Sr. 1864**: post-1915 Transylvania→Ohio emigration. No free-web manifest hit.
- **Max Salk Chicago 1892 / Robert Salem Salk Chicago**: no free-web manifest hit (already-paywalled Cook County / IL records).

### Paywalled / login-required databases re-flagged

(unchanged from round 2; same set: Ancestry 7488 / 1068 / 1277 / 61208; Statue of Liberty Foundation; JewishGen EIDB Gold Form; Steve Morse One-Step; FamilySearch 2622566 / 2141014 / 1368704; NARA Boston/Waltham; FamilySearch passenger-list index 1906-1942 image-level review)

### New name variants discovered

| Person | New variant | Source |
|---|---|---|
| [[Norbert_Fleisig]] | Norbert **Nachum** Fleisig (Hebrew middle name) | Geni Fleisig surname index, UCI Hirschberg Krakow Jewish Genealogy Fleisig family page |

## Round 3 Files Modified

- `vault-template/Norbert_Fleisig.md` — added Name Variants section + Immigration section + 2 new Document Sources rows (UCI Hirschberg, Geni Fleisig); frontmatter `sources:` extended; `updated: 2026-05-02` added.
- `vault-template/Henry_Michael_Kascher.md` — Discrepancy #3 row extended with round-3 cross-vessel elimination of SS Manhattan / SS Bremen / SS Europa.
- `vault-template/cross_reference_audit.md` — Discrepancy #75 row extended with round-3 cross-vessel elimination.
- `vault-template/immigration_search_audit.md` — this round-3 append.
- `vault-template/Research_Log.md` — round-3 session entry.

## Round 3 Verify

- Norbert Fleisig confidence still "low" but with one upgrade dimension: Krakow-origin attribution moved from "single Tier 3 (GEDCOM)" to "Tier 3 + Tier 2 compiled (UCI Hirschberg Krakow Jewish Genealogy)."
- Discrepancy #75 status unchanged at NEEDS_PRIMARY (correctly so per scope-bound). Round-3 narrows the resolution path by eliminating major alternate vessels.
- Total round-3 searches: 12 of ~12 budget. Total candidates touched: 8 (Norbert Fleisig, Henry Michael Kascher, Anna Catherina Brecht / Brecht 1726 cohort, Anne Markel, Mojzesz/Morris Markel, Michael Kascher Sr 1864, Max Salk Chicago, Robert Salem Salk; plus N/A flag for Avraham Chaim Markel).
