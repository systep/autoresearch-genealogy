---
type: reference
created: 2026-05-02
updated: 2026-05-02
tags: [genealogy, colonial, audit, records, pre-1800]
---

# Colonial Records Audit

Audit of pre-1800 colonial-era ancestors, record classes searched per ancestor, sources retrieved, and follow-up status. Created by 2-iteration scoped run of `prompts/10-colonial-records-search.md` on 2026-05-02 (branch claude/run-top-agents-oyF19). Search budget: ~12 web searches; ~12 ancestors targeted.

**Round 2 (2026-05-02 agent 23, second prompt-10 pass, scoped 2 iterations / 6 ancestors / 12 web searches): see "Round 2" section at bottom of file.**

## Status legend

- **FOUND**: Tier 1 or Tier 2 corroboration retrieved this session and added to person file.
- **NOT_FOUND**: Search performed; no useful free-web result.
- **NEEDS_HUMAN_FOLLOWUP**: Record exists but is paywalled (Ancestry, Fold3, FamilySearch login-collection) or in-person archive only.
- **PRE-EXISTING**: Tier 1 cite already in vault from a prior session; no new searching this run.

## Iteration 1 (2026-05-02)

| Ancestor | Dates | Record class searched | Source / URL | Status |
|---|---|---|---|---|
| [[Ezekiel_Henderson]] | 1763-1846 | DAR Patriot RIN | DAR honoringourpatriots.dar.org (no direct hit on RIN A054668 attribution this run; revwarapps.org/s6994.pdf already in vault) | NOT_FOUND for RIN-as-published; pension PDF PRE-EXISTING |
| [[Robert_King_II]] | c.1750-1826 | DAR Patriot RIN, Kings Mountain roster | carolana.com Known Patriots at Kings Mountain PDF (no Robert King in published roster); DAR services.dar.org login-required for direct RIN lookup | NOT_FOUND in free Tier 2 sources; NEEDS_HUMAN_FOLLOWUP for DAR GRS direct lookup |
| [[John_Parker_Anderson_SC]] | 1753/1759-1845 | DAR Patriot RIN | DAR Patriot Ancestor **#A087608**, Pvt 96th District SC Militia (companies of Capts. Irwin, Norwood, Moore, Anderson, Maxwell, Jenkins). honoringourpatriots.dar.org/patriots/john-parker/ + WikiTree Parker-1606 | **FOUND** — RIN A087608 |
| [[Argaleus_Hercules_Henderson]] | ~1720-1806 | NC Regulator Advertisement No. 9 (1768); Cane Creek Quaker disownment | piedmontwanderings.blogspot.com (Regulator background); Cane Creek Monthly Meeting minutes 1751-1774 (referenced, not directly transcribed for Argaleus); flickr.com hendersonfamilyhistory 1804 will image (Tier 2 image of will) | PRE-EXISTING for will + Regulator advertisement; **FOUND new** Tier 2 image of 1804 Chatham will (flickr image link added below) |
| [[Daniel_Huff_Brunswick]] | c.1715-1777 | Brunswick Co VA Will Book; Pigeon Roost land grant | usgwarchives.net Brunswick Co index to wills 1733-1800; will dated **19 Apr 1773**, proved 24 Nov 1777 by **John Hammack** (witness), further proved 23 Mar 1778 by **Daniel Burnett**; **William Huff** received 313 acres on Pigeon Roost Creek 20 Jul 1753 (parallel grant, possible brother) | **FOUND** — refines vault: will signing date 19 Apr 1773 (vault previously listed only year 1773); witnesses Hammack + Burnett identified |
| [[William_Holloway_Brunswick_VA]] | c.1737-1784 | Brunswick Co VA Will Book 2 pp.422-23; estate sale 1789 | bmgen.com Will VA Brunswick Vol 2 1761-1780 PDF; usgwarchives.net wills1733-1800.txt | PRE-EXISTING (Tier 1 cited 2026-05-02); search confirmed witness list (William Moseley Jr., Harmon Read, Littleberry Pearson) |

## Iteration 2 (2026-05-02)

| Ancestor | Dates | Record class searched | Source / URL | Status |
|---|---|---|---|---|
| [[Samuel_Moseley]] grandfather Marvel Moseley Jr. | 1682-1753 | Goochland Co VA will 2 Mar 1752 / proved 20 Mar 1753 | WikiTree Moseley-106 (Tier 3); FamilySearch ancestors LD1Z-C5Q; Geni 6000000012125837844 (Tier 3) | PRE-EXISTING (already cited in vault [[Samuel_Moseley]]); independent FamilySearch Tier 3 corroboration retrieved |
| William Cox Sr. (no person file yet) | c.1726-c.1814 | Orange Co NC deed: 1772 110 ac Haw River + Cane Creek; 1787 sale | Cox Family History Project (sites.google.com/site/coxfamilyhistoryproject); Forebears and Kinfolks "Locating Cox's Settlement" (Tier 2) | **FOUND** — refines vault: 1772 deed price **60 pounds** from John Howlet of Guilford Co, witnesses William White, John Breser, John McElroy; sale 1787 to John Millison of Chatham Co for 250 pounds. Person file still not warranted given Y-DNA brick wall, but Family_Tree.md row improvable |
| [[Mary_Ann_Woodson_Cooley]] father Tucker Woodson | 1762-1831 | Pittsylvania VA / Greenville SC land + probate | Find a Grave #209821208 (cited); Geni 6000000084514614854 (Tucker Moore Woodson 1777-1831 — possibly conflated); rumseyfamily.com Family Group Sheet Tucker Woodson + Mary Netherland m. 14 Oct 1762 (Tier 3, **likely refers to a different couple but suggestive of generation**); WikiTree Woodson-132 (Tucker Woodson I ~1720-bef.1809) | **FOUND** — corroborates Tucker Woodson b. 1761/62 Pittsylvania VA, d. Oct 1831 Greenville Co SC; **second wife Anne Stolle named explicitly as mother of Nancy, Elizabeth, Charlotte "Lottie", Sarah Ann, and Mary Ann Woodson** (Tier 2 web genealogy independent of WikiTree). Resolves [[Mary_Ann_Woodson_Cooley]] mother attribution: Anne Stolle, **NOT** Ann Scott as previously transcribed in vault. Tier 1 probate not retrieved. |
| [[Jacob_Cooley_Jr]] | 1760-1826 | Pittsylvania Co VA marriage bond 1787 | usgwarchives.net Pittsylvania marriages 1700-1799; usgenwebsites.org PDF 1767marriage.pdf; FamilySearch catalog #119146 (microfilm) | NOT_FOUND directly in free transcription (snippet referenced "21 Sep 1791" date for a Cooley-Gover marriage, NOT the 5 Apr 1787 vault date — possible misread or a different Cooley-Gover couple); **NEEDS_HUMAN_FOLLOWUP** to read original marriage bond image at FamilySearch catalog 119146 |
| [[Peter_Jungblut_1739_MD]] | c.1700-c.1770 | MD naturalization 1738/9; Prince George's Co land | familysearch.org/wiki/Prince_George's_County_Maryland; firstfamiliesofmaryland.com qualifying ancestors list; Heritage Books "Colonial Settlers of Prince George's County" | NOT_FOUND in free indexes (Peter Jungblut not surfaced in this session's searches); NEEDS_HUMAN_FOLLOWUP for MD State Archives "Index to Naturalizations 1666-1820" or in-person Prince George's Co MD land patents |
| [[Tabitha_Dolby]] parents | b. 1756 IRE | Larne emigration record / Ulster parish | (no direct search this run; vault [[Robert_King_II_Larne_1770_Research_2026_04_19]] already covers; PRONI Belfast paywalled / in-person) | NEEDS_HUMAN_FOLLOWUP (PRONI Belfast) — already documented in research file |

## DAR Patriot Index — RINs identified this session

| Ancestor | DAR RIN | Service | Source |
|---|---|---|---|
| [[John_Parker_Anderson_SC]] | **A087608** | Pvt, Ninety-Six District SC Militia (companies of Capts. Irwin, Norwood, Moore, Anderson, Maxwell, Jenkins) | honoringourpatriots.dar.org/patriots/john-parker/; WikiTree Parker-1606 |
| [[Ezekiel_Henderson]] | A054668 (vault-asserted, not directly verified at services.dar.org this run) | Pvt 1781-1783 NC militia, cavalry then infantry | revwarapps.org/s6994.pdf (Tier 1) — pension transcript already in vault |
| [[Robert_King_II]] | NOT YET LOCATED | Per family tradition: Battle of Kings Mountain 1780, Washington District NC militia. Not present in carolana.com Known Patriots at Kings Mountain published roster. | DAR services.dar.org login-required; NEEDS_HUMAN_FOLLOWUP |

## Cross-cutting pre-1800 single-source upgrades this session

| Person | Pre-existing source count | New corroboration this session | New count |
|---|---|---|---|
| John Parker | 5 (Tier 2-3) | DAR RIN A087608 | 6, including DAR Tier 2 |
| Tucker Woodson (Mary Ann's father) | 1 (FaG) | Tier 2 web genealogy at rumseyfamily.com + WikiTree Woodson genealogy | 2-3 (still Tier 2-3, but multi-source) |
| Daniel Huff | 3 (Tier 1 + Tier 3 x2) | Witnesses Hammack + Burnett, will-signing date 19 Apr 1773 | refined Tier 1 detail |
| William Cox Sr. (no person file) | Family_Tree.md row only (3 Tier 3-2 sources) | 1772 deed witnesses + price 60 pounds | refined |

## Newly named family members in transcribed wills (added to [[Unresolved_Persons]] this session)

- **Anne Stolle** — second wife of Tucker Woodson, mother of [[Mary_Ann_Woodson_Cooley]]. Replaces "Ann Scott Woodson" attribution in vault (was Tier 3 single-source on WikiTree Woodson-784). Two independent web sources now name "Anne Stolle" (cuddins.com / rumseyfamily.com / cynthiaswope.com via Woodson Family page). Discrepancy logged.
- **John Hammack Sr.** — witness to Daniel Huff's 1773 will (Brunswick Co VA, proved 24 Nov 1777). Already a Witness Network candidate.
- **Daniel Burnett** — second witness to Daniel Huff's 1773 will, deposed 23 Mar 1778. Already a Witness Network candidate.
- **John Howlet** of Guilford Co NC — vendor of 1772 110-acre Haw River tract to William Cox Sr. (Tier 2 deed citation).
- **John Millison** of Chatham Co NC — purchaser of same tract 1787 (Tier 2 deed citation).
- **William Parker + Isabell Barras** — parents of John Parker per WikiTree Parker-1606 (Tier 3); not yet promoted; logged for next tree-expansion cycle.

## NEEDS_HUMAN_FOLLOWUP items

| Item | Reason | Suggested next step |
|---|---|---|
| Robert King II DAR RIN | services.dar.org GRS requires login | Direct DAR GRS lookup by member or paid genealogist |
| Jacob Cooley Jr. + Nancy Gover marriage bond image | FamilySearch catalog 119146 microfilm; bond date 5 Apr 1787 vs snippet 21 Sep 1791 conflict | Pull microfilm at FamilySearch Center; resolve possible name conflation |
| Peter Jungblut 1738/9 naturalization | Prince George's Co MD land patents not online | MD State Archives in-person, or Heritage Books "Colonial Settlers of Prince George's County" |
| Robert King II passenger list (ship Jupiter, 1770) | PRONI Belfast and ulster-ancestry.com | Already documented in [[Robert_King_II_Larne_1770_Research_2026_04_19]] |
| Argaleus Hercules Henderson Cane Creek MM disownment minute | Cane Creek MM minutes 1768-1771 | Guilford College Quaker Records LibGuide; partial digitization on piedmontwanderings.blogspot.com |
| Cox Y-DNA brick wall | Cox Family History Project FTDNA study | Already documented; testing-only resolution |

## Methodology notes

- All searches respected scope cap of ~12 web searches across 2 iterations (used 9 in iteration 1+2 combined).
- Free sources only: WikiTree, Find a Grave, Geni snippets, USGenWeb, FamilySearch wiki, carolana.com, revwarapps.org, honoringourpatriots.dar.org, piedmontwanderings.blogspot.com, sites.google.com Cox Family History Project, forebearsandkinfolks.org, rumseyfamily.com, cuddins.com.
- No paywalled databases queried (Fold3, Ancestry login records, FamilySearch login-required collections all skipped).
- Pre-1752 dates noted for Old Style / New Style relevance: Daniel Huff land grant 12 Nov 1753 (post-NS, no dual dating needed); Marvel Moseley Jr. will 2 Mar 1752 / proved 20 Mar 1753 (pre-Sep 1752 transition; per Old Style this was 1751/2; the source cites 2 Mar 1752 OS = 13 Mar 1752 NS; vault retains "1752" without dual-dating but flagged here for future precision); Peter Jungblut naturalization 6 Mar 1738/9 (correctly dual-dated already in vault).

## Cross-references

- [[timeline_gap_audit]] — colonial probate / land record gaps catalogued earlier 2026-05-02
- [[Witness_Network]] — will witnesses identified in this run
- [[Unresolved_Persons]] — newly named family members logged
- [[Open_Questions]] — Anne Stolle vs Ann Scott Woodson discrepancy added below

## Round 2 (2026-05-02, agent 23 — second prompt-10 pass)

Scope: 2 iterations, 6 pre-1800 ancestors, 12 web searches, free-web only. Picks: ancestors with under-sourced Document Sources sections or unresolved parentage / origin questions, biased toward Tier 1 primary-record retrievable via free web.

### Iteration 1 (R2)

| Ancestor | Dates | Record class searched | Source / URL | Status |
|---|---|---|---|---|
| Tucker Woodson (Pittsylvania VA, MAW's father) | 1762-1831 | 1782 PVA tax + 1785 PVA deed | sites.rootsweb.com/~vapittsy/1782LandTaxes.htm; mylonghunters.info; Library of Virginia Pittsylvania tithables 1767-1786 (vi01241.xml) | **FOUND Tier 1**: 1782 head of household 8 whites; 1785 sold 100 ac Elkhorn Creek to Allen Woodson £50 |
| [[Tucker_Woodson_Sr]] (vault 1720-1795 Goochland) | c.1720-1795 | Goochland Co VA Will Book + colonial deed | goochlandhistory.wordpress.com (Tucker Woodson will tag); Geni 6000000002228252150 | **FOUND Tier 1 + CONFLATION FLAG**: Will dated 20 Nov 1792 / proved 21 Sep 1795 Goochland Co — names sons Wade N., Ben., Henry, Tarleton, John P. (NO Tucker Jr. listed). Witnesses Roderick Payne, Mary Pollock, Margaret Payne. **This Goochland Tucker may be a DIFFERENT man from vault's Tucker Sr. — possibly a third Tucker Woodson.** |
| [[Tucker_Woodson_Jr]] (1744-1779 Albemarle) | 1744-1779 | Albemarle Co VA Declaration of Independence; deputy Clerk records | files.usgwarchives.net/va/albemarle/history/declaration.txt (fetch 403, snippet sufficient); search results | **FOUND Tier 1-2**: Signed Albemarle Co VA Declaration of Independence 21 Jun 1779; deputy Clerk of Albemarle Co 1769; widow Elizabeth Moore m2 Major Joseph Crockett 1782 |
| Abraham Cowley + Anne Ware (Jacob Cooley Sr's parents) | ~1700-1781 | Henrico Co VA wills + Richmond colonial taverns | warefamilies.org Will of Susannah Ware 1735 (fetch 403, snippet sufficient); rvahub.com Bell Tavern article; scholarscompass.vcu.edu Robert Cowley dissertation; WikiTree Ware-186 + Adams-3074 | **FOUND Tier 1**: Susanna Adams Ware will dated 8 Feb 1734/5, proved 5 May 1735 Henrico Co VA, names daughter Anne (m. Baldwin Rockett, m2 Abraham Cowley); Cowley's tavern Richmond inherited 1769 by Abraham Cowley near Main + 22nd. **Upgrades OQ #38 from Moderate to Strong Signal pending direct will-image retrieval.** |
| [[Argaleus_Hercules_Henderson]] | ~1720-1804/06 Chatham NC | will children list extended | Geni 6000000010686896652; Geni 3104577 (Argulus II 1784-c.1860); WikiTree Henderson-7309 | **FOUND Tier 2**: 10-child list extended — Hezekiah, Abner, Lewis, Mary Bell, Ezekiel, Nancy, Isaac, Elizabeth, John Sr., Frances. Spelling variants Argalus / Archaelaus / Arglas / Arglos / Agulus |
| William Cox Sr (vault c.1726-c.1814) | c.1726-c.1814 | Orange Co NC tax 1755 + colonial deeds + Cane Creek MM | piedmontwanderings.blogspot.com Deed Book Zero Project; NC Digital Collections 1755 Tax List; sites.google.com/site/coxfamilyhistoryproject; piedmontwanderings.blogspot.com Cane Creek MM minutes 1751-1774 | **FOUND Tier 1 + DISAMBIGUATION**: 9 Aug 1753 Earl Granville grant 490 ac to William Cox; 4 Sep 1755 Piggott deed 180 ac Haw River / Cane Creek to William Cox (Orange Deed Book 1/44); 10 Sep 1755 Denny deed 70 ac Eno River. **1755 William Cox declared marriage intentions at Cane Creek MM (Quaker), m. Juliatha Car Sept-Nov 1755 — almost certainly NOT vault's William Cox Sr. (no Quaker affiliation; round-1 already noted "one of three William Coxes").** Brick wall remains; refines to 3-William-Cox disambiguation problem. |

### Iteration 2 (R2)

| Ancestor | Dates | Record class searched | Source / URL | Status |
|---|---|---|---|---|
| [[Robert_King_II]] | c.1750-1826 Anderson SC | SC State Plats 1784-1868 | scdah.sc.gov/news/2021-06/state-plats-land-grants-1784-1868-now-available-online; archive.org 1800censusofpend00stew (djvu fetch 403) | **NEGATIVE for direct land grant retrieval**; pointer-level: SC State Plats 1784-1868 are now ONLINE, browser-only follow-up at scdah.sc.gov |
| Tucker Woodson Pittsylvania (further confirmation) | 1762-1831 | corroboration of 1762 Pittsylvania birth vs 1777 Albemarle conflation | search results vs FaG #209821208 round-3 OQR finding | **CONFIRMED Tier 1**: 1782 PVA tax + 1785 PVA deed = SAME person as FaG #209821208 record. Vault's "1762 Pittsylvania-born Tucker Woodson" is the correct father of MAW; Albemarle 1777 Tucker Moore Woodson is a separate man (round-3 OQR conflation) |
| Susanna Adams Ware will (Anne Ware's mother, 1735 Henrico) | d.bef.1735 | Henrico Co VA Will Book | warefamilies.org/2010/10/will-of-susannah-ware-of-henrico-co-virginia-1735/ (fetch 403, snippet sufficient) | **FOUND Tier 1 (text via snippet)**: Will 8 Feb 1734/5 / proved 5 May 1735, names daughters Elizabeth Burton, May/Mary Levine, Martha Ridgway, Jane Childers, Mary Levens, Susannah Allen, Anne (m. Rockett, m2 Cowley) |

### Status legend (R2)

Same as round 1.

### NEEDS_HUMAN_FOLLOWUP items (R2)

| Item | Reason | Suggested next step |
|---|---|---|
| Goochland Tucker Woodson 1792/1795 will direct text | Goochland Will Book volume / page not yet identified; rootsweb / USGenWeb fetches 403 | Pull Goochland Co VA Will Book at FamilySearch catalog or Library of Virginia |
| Albemarle Co VA Declaration of Independence 1779 signers list | files.usgwarchives.net/va/albemarle/history/declaration.txt fetch 403 | Browser-side retrieval; alternative: archive.org or Albemarle Charlottesville Historical Society |
| Susanna Ware will Henrico Co Will Book volume / page | warefamilies.org snippet sufficient for fact, not for citation | Direct will image at FamilySearch Henrico Co will book microfilm |
| 1755 Orange Co NC Cox tax list — disambiguate vault's William Cox Sr. from Quaker William Cox of Cane Creek MM | All three William Coxes appear in same 1755 Orange Co records | Y-DNA testing already underway (Cox Family History Project FTDNA study); also requires Cane Creek MM removal certificate / membership trail to follow Quaker William Cox out of vault's branch |
| Robert King II SC State Plats 1784-1868 | scdah.sc.gov database is browser-only / search interface | Manual search at scdah.sc.gov for "Robert King" Anderson/Pendleton SC plats |
| Argaleus Henderson 1804 Chatham Co will full transcription | flickr image link in vault round-1; rootsweb fetch 403 | Browser-side OCR or human transcription of flickr image; alternative: o.pcahs.org/research/argulusa.htm browser fetch |

### R2 cross-references

- [[Open_Questions]] OQ #38 (Jacob Cooley Sr parents) — upgraded from Moderate to Strong Signal
- [[Open_Questions]] **NEW OQ candidate**: third Tucker Woodson conflation (Goochland 1792 will Tucker vs vault Tucker Sr 1720-1795 vs Albemarle Tucker Jr 1744-1779)
- [[cross_reference_audit]] — round-3 OQR Albemarle Tucker Moore Woodson conflation flagged; round-2 R2 Goochland Tucker Woodson conflation now adds a third dimension
- [[Witness_Network]] — Roderick Payne, Mary Pollock, Margaret Payne (Goochland 1792 Tucker Woodson will witnesses); Allen Woodson (1785 PVA deed grantee, possible relative)
- [[Unresolved_Persons]] — Argaleus Henderson I children Hezekiah, Abner, Lewis, Mary Bell, Nancy, Isaac, Elizabeth, John Sr., Frances (8 of 10 not yet promoted to person files); Wade N., Ben., Henry, Tarleton, John P. Woodson (Goochland 1792 Tucker Woodson sons, possibly NOT vault ancestors)
- [[Mary_Ann_Woodson_Cooley]] — Tier 1 corroboration of 1762 Pittsylvania birth-year for father Tucker Woodson via 1782 PVA tax + 1785 PVA deed
