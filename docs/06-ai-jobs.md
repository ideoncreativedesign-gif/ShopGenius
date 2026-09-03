# AI Job Specs

One spec per AI behavior. If a behavior can't be specified this way, it isn't a feature yet —
it's a wish.

Copy the block below per behavior. Candidates for ShopGenius: intent elicitation, constraint
reconciliation, scene/hotspot generation, branch selection, comparison, rationale generation.

---

## [AI-01] — [Name]

**Input** — what the model receives. Be literal: which fields, from which objects, at what
point in the session.

**Reasoning** — what it is actually deciding or transforming. Not "helps the user" — the actual
operation.

**Output** — what the shopper receives, in what form, with what granularity.

**Constraints** — what it must never do. Include the project-wide ones from `CLAUDE.md` §5 plus
anything specific to this behavior.

**Uncertainty** — what happens when confidence is low. "Ask a clarifying question," "show the
alternatives side by side," and "hand off to the plain list" are all valid. Silently guessing
is not.

**Provenance** — where the information came from, and how that's surfaced.

**User control** — what the shopper can reject, edit, undo, or override, and how they discover
that they can.

**Failure mode we're most worried about** — name it, then design against it.

---

## Worked example: [AI-02] Branch selection

Filled in as a pattern for the format. Replace with real work.

**Input** — session intent snapshot, constraints declared so far, choices made in prior
branches, dwell/replay signals on the current scene.

**Reasoning** — selecting which of N authored branches best matches the revealed preference,
and deciding whether enough is known to narrow or whether to widen instead.

**Output** — the next scene, plus a visible one-line reason for why the session went this way.

**Constraints** — never branch toward higher-margin outcomes absent a shopper signal; never use
a branch to remove a previously visible option; never make an ending reachable only through
purchase.

**Uncertainty** — below threshold, present a fork explicitly instead of choosing silently. A
visible fork is more honest than a confident wrong turn, and it generates better signal.

**Provenance** — the reason line names the specific choice that drove the branch ("because you
skipped the two structured jackets").

**User control** — rewind to any prior choice; exit to the plain list at any point without
losing the constraint set.

**Failure mode** — the shopper feels steered rather than served, notices, and stops trusting
every recommendation retroactively. Trust failures are not local.
