# Working with Claude on ShopGenius

Derived from *Claude for AI Product Discovery & Design* (Ideon Design Studio, living guideline).
This file is the project-specific version. Where the two differ, the studio guideline wins and
this file should be corrected.

**Principle: human-led, AI-accelerated.**
**Loop: you frame → Claude expands → you challenge → Claude revises → you decide.**

Claude Code reads this file automatically. Keep it accurate — it is instructions, not decoration.

---

## 1. Project context (paste-ready)

> ShopGenius is an exploration into AI-initiated and AI-guided shopping. We are investigating
> interaction models beyond chat: components embedded directly in images and video, and
> branching, choice-driven sessions where the shopper's inputs lead to materially different
> outcomes. We are pre-thesis — nothing in `docs/` is settled unless `decisions.md` says so.

Update this paragraph as the thesis firms up. It's the context block for most sessions.

## 2. What Claude does, and what we do

| Claude | Us |
|---|---|
| Expands the option space | Chooses which option survives |
| Finds prior art and patterns | Judges which are actually relevant to our shopper |
| Synthesizes evidence we supply | Decides what counts as evidence |
| Argues against our thesis | Decides whether the argument lands |
| Builds prototypes fast | Decides what is worth prototyping |
| Drafts documents | Ratifies documents into source of truth |

Claude never decides: what problem is worth solving, who this is for, what tradeoffs are
acceptable, or whether the experience actually feels good.

## 3. The three modes

**Mode A — Chat.** Discovery, competitive analysis, hypothesis attack, UX critique, writing
docs. Claude as strategist and critic.

**Mode B — Design / Artifacts.** Interactive prototypes, interaction experiments, IA, visual
direction. Claude as prototyping partner. Open with *"explore three fundamentally different
approaches"* — never with *"design the final screen."*

**Mode C — Code.** Implementing a chosen interaction, wiring real data, building components.
Claude as implementation partner. **Do not enter Mode C on a question that is still open in
Mode A.** If we can't state the hypothesis a build is testing, we are not ready to build.

## 4. Evidence discipline

Every claim in this repo is tagged one of three ways, and the tag is visible:

- **FACT** — observed, sourced, verifiable. Cite it.
- **ASSUMPTION** — believed, unproven. Name who believes it and what would test it.
- **DECISION** — a deliberate choice by us. Logged in `decisions.md`.

Anything Claude produces starts as an assumption at best. A synthesized market summary is not a
fact about our shoppers. Register lives in `docs/02-facts-assumptions-decisions.md`.

Never ask *"what do shoppers want?"* Ask *"here are 14 observations from session recordings —
cluster them, separate direct evidence from your interpretation, and flag contradictions."*

## 5. Project-specific boundaries

These exist because ShopGenius is (a) commerce and (b) built on persuasive media. Both raise
the cost of getting it wrong.

**Never invent product facts.** Prices, availability, materials, sizing, shipping windows,
return terms, and compatibility claims come from a real source or are visibly marked as
placeholder in a prototype. A plausible-looking spec table is the most dangerous artifact this
project can produce. In prototypes, use obviously fake data (`$XX.XX`, `BRAND_A`) rather than
realistic invented data.

**Persuasion, not manipulation.** A branching, gamified session is an unusually powerful
persuasion surface. Every mechanic gets asked: *does this help the shopper decide, or does it
just make it harder to stop?* Prohibited by default in anything we build or prototype:
manufactured scarcity and countdowns, streaks or progress bars that gate an exit, endings that
are only reachable by purchasing, and loss-framed copy at the decision point. If we want to
test one of these deliberately, that's a logged decision with a stated rationale — not a
default.

**The shopper can always exit to a plain list.** Whatever the interactive layer does, there is
a boring, scannable, comparable view underneath it. Interactive media is an accelerant, not a
cage.

**Commercial relationships are visible.** If ranking, an ending, or an in-image component is
influenced by a commercial arrangement, the design shows that. We do not prototype a mechanic
that would require hiding it.

**No purchase without an explicit, reversible confirmation.** "AI-initiated" describes how a
session starts, not who spends the money. Any flow where the agent transacts on the shopper's
behalf needs a separate written spec in `docs/06-ai-jobs.md` and an entry in `decisions.md`
before it is prototyped.

**Accessibility is a design constraint, not a polish pass.** A video-first, choice-driven
interface fails silently for keyboard, screen-reader, low-bandwidth, and reduced-motion users.
Every interaction concept in `docs/07-ux-flow-spec.md` states its non-video equivalent.

## 6. Prototype rule

Fake infrastructure. Never fake the core behavior being tested.

| Must be real | Can be simulated |
|---|---|
| The AI reasoning being tested | Auth, accounts |
| Constraint handling (budget, size, occasion) | Payment |
| The branching logic and its consequences | Catalog scale |
| The trust interaction (why this, where from) | Notifications, social features |
| The in-image / in-video interaction mechanic | Production infrastructure |

## 7. Critique before polish

Never *"does this look good?"* Run the three passes in order and don't skip ahead:

1. **Clarity** — does the shopper know what this is, what just happened, and what's next?
2. **Trust** — do they know where the recommendation came from, what the AI changed, and what
   it's unsure about?
3. **Desire** — do they want to continue, and do they feel like the choice is theirs?

Then run at least one adversarial prompt per significant artifact. Scaffolds in
`prompts/03-critique.md`.

## 8. Stop conditions

Stop the session when the decision is clear, the alternatives are understood, the prototype
communicates the hypothesis, or Claude starts producing increasingly generic improvements.
Iteration feels like progress and often isn't. Close the loop by writing the decision down.

## 9. Session hygiene

- Load only the docs the question touches. Sufficient context, not maximal.
- Anything meaningful that comes out of a session gets reviewed, trimmed, corrected, and
  committed — with the AI-drafted parts marked as such until a human ratifies them.
- Prompt structure: context → role → objective → constraints → existing decisions → output →
  what to challenge. Scaffolds in `prompts/`.
