# Prompts

Reusable scaffolds. Not magic words — just a way of keeping the same discipline across
sessions and across teammates.

Every strong prompt on this project has seven parts:

1. **Context** — what we're building (grab the paragraph from `../CLAUDE.md` §1)
2. **Role** — what perspective Claude should take
3. **Objective** — what we're trying to accomplish
4. **Constraints** — what it should not do
5. **Existing decisions** — what's already settled, so it doesn't relitigate
6. **Output** — exactly what to produce
7. **Critique** — what it should challenge

Give it the relevant docs, not the whole repo. Context should be sufficient, not maximal.

## Files

- `01-discovery.md` — problem exploration, competitive analysis, research synthesis
- `02-prototype-brief.md` — Mode B and Mode C briefs
- `03-critique.md` — the three-pass critique and adversarial prompts

## Convention

If a prompt produces a notably good result, add it here with a note on what made it work. If it
produces a notably bad one, add that too — the failure modes are more transferable.
