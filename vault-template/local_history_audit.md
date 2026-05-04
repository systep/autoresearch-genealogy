---
type: audit
created: 2026-05-02
updated: 2026-05-02
last_session: "2026-05-02 Local History Extraction sweep (prompt 09, scoped 2 iterations, 9 of 12 web-search budget consumed)"
tags: [genealogy, audit, local-history, bygdebok, ortsfamilienbuch, county-history]
---

# Local History Sources Audit

Tracks regional local-history sources (bygdeboker, county histories, Ortsfamilienbücher, Yizkor books, Pinkasim) consulted across vault research sessions. Local histories are **secondary sources**; cross-reference any extracted facts with primary records before treating as established.

## Status legend

- **Confirmed and ingested**: source identified, relevant entry located, structured facts copied into person file's Document Sources + biography + Local History Sources section.
- **Confirmed pointer only**: source identified and verified to cover the relevant family/locality, but per-entry inspection blocked (403, paywall, archive-visit-required, or browser-only). Logged as NEEDS_HUMAN_FOLLOWUP.
- **Negative result**: searched, no matching entries found in the visible portion of the source. Logged as such per CLAUDE.md style rule.
- **Source not yet located**: a published local history is known to exist for the relevant region but has not been searched.

## 2026-05-02 sweep (prompt 09, branch claude/run-top-agents-oyF19)

| Region | Source | Ancestor(s) targeted | Facts extracted | Status |
|---|---|---|---|---|
| Schriesheim, Palatinate (Baden-Württemberg, Germany) | Karl Schuhmann, *Familienbuch Schriesheim 1650-1900* (Odenwaldklub Schriesheim e.V., 2004; 1060 pp; series Badische Ortssippenbücher Band 107). Heidelberg UB katalog 65850703; OpenLibrary OL3463118M; Google Books id N-BHHAAACAAJ; badische-ortsfamilienbuecher.de/buch.php?id=60 | [[Johann_Michael_Brecht]] (b.1706 emigrant), [[Anna_Catherina_Bright_Brecht]], [[Balthasar_Hans_Brecht]] | Source identification, scope confirmation (covers all Schriesheim parish-register baptisms/marriages/burials 1650-1900, including Brecht/Hoffman). No per-entry page numbers extracted; OFB physical book not yet obtained. | **Confirmed pointer only**; printed volume held at Heidelberg UB; online derivative at ofb.genealogy.net/famlist.php?ofb=schriesheim returned 403 to agentic fetch 2026-05-02; NEEDS_HUMAN_FOLLOWUP for browser-side family-record inspection |
| Schriesheim, Palatinate | Online Ortsfamilienbuch Schriesheim, genealogy.net German project | same as above | derivative searchable index of Schuhmann 2004 + parish registers | **Confirmed pointer only**; agentic fetch 403; browser-only |
| Greenville District, SC (1786-) | Standing Springs Baptist Church historical marker (hmdb.org marker #168369) + Simpsonville Sentinel 200-year-anniversary article (2018-09-21, sentinelinternet.com) | [[Argaleus_Hercules_Henderson]] (charter member context for grandson Argaleus II), [[Ezekiel_Henderson]] (charter member context for wife Elizabeth Brasher Henderson), [[James_Cox]] (land donor + early meeting house in his home) | Charter members 1818: "Arguless, Elizabeth and Rachel Henderson, William Mayhall, Rhonda Moore, Thomas, Delila and James Richardson and Christopher and Hannah Robbins"; Rev. Nathan Berry first pastor; first meeting house constructed c. 1836 on land donated by James Cox; early meetings in James Cox's home. | **Confirmed and ingested** into [[Argaleus_Hercules_Henderson]] and [[James_Cox]] Local History Sources sections; Tier 1 follow-up = Furman University SC Baptist microfilm collection of Standing Springs minute book (NEEDS_HUMAN_FOLLOWUP) |
| Old Pendleton District, SC (now Anderson/Pickens/Oconee counties) | R. W. Simpson, *History of Old Pendleton District (South Carolina), with a Genealogy of the Leading Families of the District* (Anderson, SC: Oulla Printing & Binding Co., 1913); reprinted Easley, SC: Southern Historical Press, 1978. LoC 31020858; FamilySearch catalog #412143; archive.org/details/historyofoldpend00simp_0; Google Books id aWs6PgAACAAJ | [[Argaleus_Hercules_Henderson]], [[William_Cox_Sr]], [[James_Cox]], [[Ezekiel_Henderson]], adjacent Greenville-District families | Source identification, scope confirmation (~70-page narrative + hundreds of family genealogical sketches; Pendleton territory adjacent to Greenville so inter-district kinship references are likely). djvu fulltext fetch returned 403 from agentic environment; surname-index inspection NEEDS_HUMAN_FOLLOWUP. Note: Simpson confirms Greenville/Anderson/Pickens/Oconee territory was Cherokee land at the close of the Revolutionary War (relevant context for post-1783 Henderson and Cox migrations). | **Confirmed pointer only**; logged in [[Argaleus_Hercules_Henderson]] Local History Sources section |
| Greenville County, SC | James M. Richardson, *History of Greenville County, South Carolina: Narrative and Biographical* (1930), Furman University Special Collections (libguides.furman.edu/special-collections/james-richardson-manuscripts/biographical-sketch) | [[William_Cox_Sr]], [[Isaac_Cox]], [[James_Cox]], [[Ezekiel_Henderson]], [[Brashier_Henderson]] | Source identified; biographical sketch of author (b. 1884 Simpsonville SC, SC State Senator 1924-1928) confirms author's local knowledge; per-entry content not extracted | **Confirmed pointer only** (web-search; no fulltext retrieved 2026-05-02); browser/print access NEEDS_HUMAN_FOLLOWUP |
| Sambor district, Galicia (now Sambir, Lviv oblast, Ukraine) | Sefer Sambor (ed. Aleksander Manor, Tel Aviv, 1980); Yizkor necrology hosted at jewishgen.org/yizkor/sambor/Sam258.html | [[Avraham_Chaim_Markel]], [[Heschel_Herman_Markel]], [[Leah_Frei]], [[Feiga_Frei_Karp]], [[Yoseph_Frei]] | Pre-existing in vault: necrology entry "Karp, Yosef and Family (4 People)" matches [[Feiga_Frei_Karp]] and Joseph Karp; "Markel, Yosef and Family (5 People)" does NOT match this branch (different Yosef Markel; eliminated per [[Avraham_Chaim_Markel]] same-surname-elimination table). No Frei/Frey/Fry surfaced. **No new facts extracted this session.** | **Negative result this session** for new Frei/Markel matches; pre-existing Karp positive remains valid |
| Sambor district, Galicia | JRI-Poland Sambor Vital Records Project (jri-poland.org/project/sambor/Vital-Records-Project/) | [[Yoseph_Frei]], [[Toba_Rivka_Frei]], Jozef and Taube Frei (Waniowice 1894) | Project exists, currently in migration to new search system. Pre-existing AGAD Fond 424 1894 hit remains the only Tier 1 record. | **Source not yet searchable**; system migration ongoing per jri-poland.org/blog; NEEDS_HUMAN_FOLLOWUP via project coordinator email |
| Lesko / Lisko district, Galicia | JRI-Poland Lesko Vital Records Project (jri-poland.org/project/lesko/Vital-Records-Project/) | [[Heschel_Herman_Markel]] (alleged Lisko origin), [[Leah_Frei]] | Project exists; specific Markel/Frei surname-index not surfaced in web-search snippets 2026-05-02. Lesko had 2,425 Jewish residents in 1890 per JRI-Poland. | **Negative result this session**; surname-index browser inspection at jri-poland.org/town/index.htm NEEDS_HUMAN_FOLLOWUP |
| All Galicia Database (search.geshergalicia.org) | Gesher Galicia AGD (~900,000 records); dedicated Frey family page (geshergalicia.org/families/?id=frey) and Karp family page (?id=karp) | [[Yoseph_Frei]], [[Feiga_Frei_Karp]], et al. | Pointer pre-existing in [[Frei_Karp_Waniowice_Research_2026_04_19]]; agentic fetch returned 403 again 2026-05-02 | **Confirmed pointer only**; NEEDS_HUMAN_FOLLOWUP browser session |
| Vilna / Vilnius, Lithuania | Pinkas Hakehillot Lita (Encyclopedia of Jewish Communities, Lithuania), Yad Vashem Jerusalem, ed. Dov Levin; jewishgen.org/Yizkor/pinkas_lita | [[Barnett_Salmanson]], Salmanson/Zalmanson, Salk | Pinkas Hakehillot Lita web-search did not surface specific Salmanson/Zalmanson/Salk entries in available snippets 2026-05-02. LitvakSIG (litvaksig.org) is the recommended browser-side resource. | **Negative result this session**; LitvakSIG All Lithuania Database NEEDS_HUMAN_FOLLOWUP |
| Transylvania (Waldhütten / Valchid) | (no specific local-history source consulted this session) | [[Anna_Kascher_1903]], Kascher/Falk Transylvanian branch | Not searched this session (scope decision: 6 source-bodies max, prioritized SC + Schriesheim + Galicia per task brief) | **Source not yet located** for Waldhütten/Valchid Jewish community history; deferred to future session |

## Per-region summary, this session

- **South Carolina (Greenville/Anderson/Pendleton)**: 2 sources identified (Standing Springs Baptist marker + Simpson 1913 Pendleton), 1 ingested with structured facts (Standing Springs charter + James Cox land donation), 1 confirmed pointer (Simpson 1913).
- **Schriesheim Palatinate**: 1 source identified (Schuhmann 2004 *Familienbuch Schriesheim*) + 1 derivative online OFB; both confirmed pointer only (book not obtained, online OFB 403 to agent).
- **Galicia (Waniowice/Sambor + Lesko)**: 4 sources re-checked (Sambor Yizkor, JRI-Poland Sambor, JRI-Poland Lesko, AGD); all negative-this-session or pre-existing pointer; no new facts extracted.
- **Lithuania (Vilna)**: 1 source checked (Pinkas Hakehillot Lita); negative this session.
- **Transylvania**: deferred; not searched this session.

## Two-Independent-Sources standard

Per CLAUDE.md "Two Independent Sources Standard," each fact added this session has been checked:

- **Standing Springs Baptist 1818 charter members + James Cox land donation**: Sourced from (1) hmdb.org Historical Marker #168369 (Tier 2 publication of physical marker erected by Greenville County Historical Society) + (2) Simpsonville Sentinel 2018-09-21 (Tier 2 secondary newspaper). These are independent (different organizations, different dates, different formats). Tier 1 corroboration would be the Standing Springs church minute book itself. **Two independent secondary sources met; one Tier 1 source pending**.
- **Schriesheim Familienbuch reference**: Existence and scope confirmed by (1) Heidelberg UB catalog (Tier 1 academic library record) + (2) Amazon/OpenLibrary publishing-record (Tier 2) + (3) badische-ortsfamilienbuecher.de project listing (Tier 2). Per-entry facts NOT yet extracted from the book itself; only the **existence** and **scope** of the source is established. No new ancestor-level facts ingested from this OFB this session.

## Outstanding NEEDS_HUMAN_FOLLOWUP items from this session

1. **Browser-side fetch of archive.org djvu fulltext of Simpson 1913 Pendleton District** — search surname index for Cox, Henderson, Long, Brashier, Drake, Moseley, Huff, King, Stangle, Bright entries.
2. **Heidelberg UB Familienbuch Schriesheim retrieval** — Schuhmann 2004, locate Brecht and Hoffman family-record numbers for Johannes Michael 1662, Hans Balthasar 1636, Johann Michael 1706, Anna Katarina Hoffman 1664.
3. **Online OFB Schriesheim** at ofb.genealogy.net/famlist.php?ofb=schriesheim — browser fetch surname Brecht entries; agentic 403.
4. **Furman University SC Baptist microfilm collection** — Standing Springs minute book and Fork Shoals minute book; Tier 1 charter member record.
5. **JRI-Poland Lesko surname index** at jri-poland.org/town/index.htm — Markel and Frei/Frey/Fry variant search.
6. **JewishGen Sambor Yizkor full text on Internet Archive** (archive.org/details/nybc313978) — search for Markel, Waniowice, surrounding-village entries; agentic fetch 403.
7. **All Galicia Database direct query** at search.geshergalicia.org for Frey/Frei + Waniowice and Karp + Sambor district.
8. **LitvakSIG All Lithuania Database** for Salmanson, Zalmanson, Salk variants from Vilna/Kovno governorates.
9. **Transylvanian Jewish community history** for Waldhütten/Valchid (Kascher/Falk branch) — source not yet identified; consider Pinkas Hakehillot Romania.

## Confidence note

All Tier 2 / Tier 3 facts ingested this session are flagged in person-file Local History Sources sections with explicit tier classification, source URLs, and the agentic-fetch-403 caveat where applicable. Direct quotation marks are used for charter-member name strings to distinguish primary-source-text from interpretive translation.
