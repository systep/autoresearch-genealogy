---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, immigration, audit, prompt-11]
session: "2026-05-02 Immigration Search (prompt 11), 2-iteration scoped run"
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
