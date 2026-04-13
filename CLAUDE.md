# CLAUDE.md

Project instructions for autoresearch-genealogy. Follow these rules exactly.

## Project Structure

- `prompts/` — Autoresearch prompts for Claude Code. Each is a self-contained research task.
- `vault-template/` — Obsidian vault. All research data lives here.
- `vault-template/templates/` — File templates for person, transcription, certificate, hypothesis, region, surname, postcard, draft-letter.
- `reference/` — Methodology guides. Read, do not modify.
- `workflows/` — Step-by-step procedures for common tasks.
- `examples/` — Worked examples showing how prompts function in practice.
- `archives/` — Country/region record access guides. Documents which databases are AI-searchable, browser-only, or in-person only.
- `Assets/` — Source images (photographs, handwritten notes, screenshots).

## Vault Conventions (Mandatory)

### Frontmatter

All vault files require YAML frontmatter with at minimum: `type`, `created`, `tags`.

**Person files** add: `name`, `born`, `died`, `family`, `confidence`, `sources`.
**Transcription files** add: `source`, `document_type`, `person`, `date`, `ocr_method`, `ocr_quality`.
**Certificate files** add: `certificate_type`, `jurisdiction`.
**Hypothesis files** add: `status` (open/supported/refuted/superseded), `evidence_for`, `evidence_against`, `decisive_record`.
**Region files** add: `confidence`.

### File Naming

- Underscores, not spaces: `John_Smith.md`, not `John Smith.md`.
- Use `[[File_Name]]` wikilinks to connect files within the vault.

### When to Create a Person File

Create when a person has: (a) at least one primary source, (b) sufficient biographical detail, (c) direct relevance (ancestor, sibling, or spouse of ancestor). Tangential connections go to `Unresolved_Persons.md` or `Witness_Network.md`.

### Required Vault Files to Keep Updated

| File | Purpose | Update When |
|---|---|---|
| `Family_Tree.md` | Central tree with all ancestors | Any new person or correction |
| `Research_Log.md` | Every search, positive AND negative | Every research session |
| `Open_Questions.md` | Prioritized research gaps | Questions added, resolved, or deprioritized |
| `Timeline.md` | Chronological event index | Any new dated event |
| `Unresolved_Persons.md` | Unnamed/ambiguous people | New document processed |
| `cross_reference_audit.md` | Discrepancy tracking | After running audit prompt |
| `Data_Inventory.md` | What documents exist | New document ingested |

## Source Hierarchy (Mandatory)

When sources conflict, use this hierarchy. Higher tier wins.

**Tier 1 (Primary)**: Vital records, church registers, military records, immigration records, census, court/legal, tax/property. Created at/near the event by official authority.

**Tier 2 (Secondary)**: Newspaper articles (obituaries), published genealogies, compiled indexes (FamilySearch), historical society publications.

**Tier 3 (Tertiary)**: User-contributed family trees (Ancestry, Geni, WikiTree, MyHeritage), oral history, photo captions, forum posts.

**Two Independent Sources Standard**: Claims require support from at least two independent sources. "Independent" = created separately, not derived from each other. Two Ancestry trees copying the same data = ONE source.

**When one source is sufficient**: Primary source with no contradicting evidence, or well-documented secondary source.

**Never silently choose one version.** Document every discrepancy in the person file's `## Data Discrepancies` section or in `cross_reference_audit.md`.

## Confidence Tiers (Use for All Claims)

**Strong Signal**: 2+ independent sources corroborate; primary documents support; no contradictions.
**Moderate Signal**: 1 primary source, OR multiple secondary sources agree, OR DNA and genealogy align.
**Speculative**: Single tertiary source, OR inference only, OR contradicted by evidence.

## Style Rules

- No hyphens as punctuation. Use commas, periods, colons, semicolons, or parentheses.
- No emojis.
- Source-first: every claim cites its source. Unsourced claims must be flagged.
- Log negative results. "Searched X, found nothing" is valuable data.
- Mark unverified additions with `(unverified)`.

## Research Methodology

### New Ancestor Intake (workflows/new-ancestor-intake.md)

Before adding anyone to the tree:
1. Verify: name, dates, AND location must align.
2. Record the source.
3. Check for confusion with other persons of the same name.
4. Update Family_Tree.md, create person file if warranted, update Timeline.md, Open_Questions.md, Research_Log.md.
5. Check for cascading updates (children, siblings, cross-reference audit).

### Discrepancy Resolution (workflows/discrepancy-resolution.md)

1. Document in person file `## Data Discrepancies` section.
2. Classify sources by tier, proximity to event, informant knowledge.
3. Apply hierarchy. If unclear, defer to `Open_Questions.md`.
4. Propagate resolution through Family_Tree.md, Timeline.md, person files, Research_Log.md.

### Document Processing (workflows/document-triage.md, workflows/ocr-pipeline.md)

Priority: vital records > military > church/legal > newspapers > family records > photos.
OCR: Tesseract for printed text, Claude multimodal for handwritten/old scripts.
Grade OCR quality: Good / Partial / Bad / Photo-Only.

## Prompt Usage Guide

Every prompt in `prompts/` has: Goal, Metric, Direction, Verify, Guard, Iterations, Protocol.
Replace `[VAULT_PATH]` with `vault-template/` and other placeholders with actual data.

| Situation | Prompt |
|---|---|
| Starting from scratch | `01-tree-expansion` (8 iterations, expected 20-60 new individuals) |
| Tree populated, need cleanup | `02-cross-reference-audit` (12 iterations) |
| Need Find a Grave memorials | `03-findagrave-sweep` (15 iterations) |
| Export to GEDCOM | `04-gedcom-completeness` |
| Verify source citations | `05-source-citation-audit` (8 iterations) |
| Unnamed/ambiguous people | `06-unresolved-persons` (10 iterations) |
| Find timeline gaps | `07-timeline-gap-analysis` (8 iterations) |
| Resolve open questions | `08-open-question-resolution` (10 iterations) |
| Norwegian bygdebok extraction | `09-bygdebok-extraction` |
| Colonial American ancestors | `10-colonial-records-search` |
| Immigration/passenger records | `11-immigration-search` (10 iterations) |
| DNA interpretation | `12-dna-chromosome-analysis` |

### Prompt Sequence for a Full Research Session

1. `01-tree-expansion` (extend branches)
2. `02-cross-reference-audit` (find/fix discrepancies)
3. `03-findagrave-sweep` (locate memorials)
4. `05-source-citation-audit` (verify source counts)
5. `08-open-question-resolution` (attack remaining gaps)
6. `11-immigration-search` (if immigrant ancestors present)
7. `07-timeline-gap-analysis` (identify missing records)

## What AI Can and Cannot Do (reference/what-ai-can-and-cannot-do.md)

**Can do**: Web search (Find a Grave, WikiTree, Geni, FamilySearch wiki, Digitalarkivet, Chronicling America), cross-referencing vault files, pattern recognition, OCR, structured extraction, translation, vault management, GEDCOM generation, consistency checks, exhaustive logging.

**Cannot do**: Access login-required databases (Ancestry.com, FamilySearch individual records, MyHeritage records, Newspapers.com, Fold3), handle CAPTCHAs, guarantee accuracy, visit archives, conduct interviews, generate DNA, replace professional genealogists.

**Partnership model**: AI searches, extracts, logs; human evaluates, decides, sends requests, reviews difficult handwriting, resolves ambiguous cases.

## Guard Rails

1. Do not fabricate ancestors. Every addition must cite a source.
2. Do not trust user-contributed trees without corroboration from at least one independent source.
3. Do not modify existing dates/names during tree expansion (that is the cross-reference audit's job).
4. Do not change primary source transcriptions to match the family tree. If they disagree, the tree is more likely wrong.
5. Do not assume a Find a Grave result is the correct person without verifying name, dates, AND location.
6. Do not merge records on "same name, same dates" alone without corroboration (need spouse, children, occupation, or address match).
7. Do not use census ages as exact birth years (people rounded).
8. Do not treat DNA ethnicity percentages as exact numbers (they are ranges).
9. Do not build theories on trace ancestry (<1%).
10. Log every search, including negative results, with date.

## Naming Conventions for Immigrant Ancestors (reference/naming-conventions.md)

- Always record all known name variants (birth name, anglicized, nicknames).
- Patronymics: Scandinavian surnames change every generation (Olsen's son = Olsen, not family name).
- Farm names (Norwegian): name changes with residence.
- Przydomki (Polish): hereditary nicknames, not surnames.
- Americanization: record both original and American forms.
- Women: record maiden name, each married name, and widowed name separately.

## Phase Planning (workflows/phase-planning.md)

**Phase 1 (Free)**: Organize documents, OCR, tree expansion, audit, free databases. Cost: $0.
**Phase 2 (Free web)**: Immigration, census (FamilySearch), newspapers (Chronicling America). Cost: $0.
**Phase 3 (Paid)**: Ancestry.com, vital record requests, DNA transfer, USCIS. Cost: $50-300.
**Phase 4 (Long term)**: Oral history, archive visits, professional genealogists. Cost: $100+.

## Common Pitfalls

- Ancestry hints are algorithmic, not verified.
- Geni merges frequently combine different people.
- Transcription cascade: one error becomes "consensus" across 50 sources.
- Old Style vs New Style dates (pre-1752 British colonies).
- Patronymic confusion: Johnson in 1850 and Johnson in 1880 may be unrelated.
- Delayed certificates contain memory errors.

## When Contributing

- All examples must use placeholder names. Zero real family names.
- Every prompt must include all 7 fields (Goal, Metric, Direction, Verify, Guard, Iterations, Protocol).
- Vault templates must have valid YAML frontmatter.
- Test that prompts work end-to-end before submitting.
