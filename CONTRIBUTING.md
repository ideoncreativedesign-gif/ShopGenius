# Contributing

Two-person conventions. Keep them light enough to actually follow.

## Branch and commit

- Branch: `docs/<topic>`, `exp/<id>-<slug>`, `proto/<id>-<slug>`, `src/<feature>`
- Commit prefixes: `docs:` `exp:` `proto:` `src:` `chore:`

## Document lifecycle

`Draft → Reviewed → Ratified → Superseded`

- **Draft** — anything can change, including by an AI-assisted rewrite.
- **Reviewed** — a human other than the author has read it.
- **Ratified** — it's source of truth; changes need an entry in `docs/decisions.md`.
- **Superseded** — keep the file, add a pointer at the top. Don't delete reasoning.

Every document carries **Status · Owner · Last reviewed** at the top.

## AI-drafted content

Mark AI-drafted sections until a human has ratified them:

```markdown
<!-- ai-draft: unreviewed -->
```

Not because AI drafts are bad, but because the difference between "we decided this" and "a
model proposed this and nobody objected" disappears in about a week otherwise.

## Review checklist

Before merging anything into `docs/`:

- [ ] Claims are tagged FACT / ASSUMPTION / DECISION
- [ ] New assumptions are in `docs/02-facts-assumptions-decisions.md` with a test
- [ ] Decisions are in `docs/decisions.md` with alternatives and evidence
- [ ] No invented product data
- [ ] Nothing silently contradicts a higher-level document (thesis > brief > flow > direction)
- [ ] AI-drafted sections are marked or ratified

## Cross-linking

Notion pages link out to this repo; this repo doesn't link into Notion for anything canonical.
If it matters, it lives here.
