# ShopGenius

An exploration into how AI could assist, guide, or initiate a shopping experience — including
interactive components inside images and video, and branching, choice-driven sessions that
resolve differently depending on what the shopper does.

This repository is the **versioned source of truth** for that work. Notion is the working
environment. Claude is the thinking environment. Decisions land here.

---

## What this repo is for

1. **A shared boundary.** `CLAUDE.md` defines how we use Claude on this project and where
   Claude's judgment stops and ours begins. Read it before your first session.
2. **A source of truth.** `docs/` holds the thesis, brief, object model, AI job specs, flows,
   and design direction — in that dependency order.
3. **A shared library.** `inspiration/` is where we log what moved us and what we learned from
   it — quick entries for single mechanics, deeper teardowns in `inspiration/case-studies/`.
4. **A place to run probes.** `explorations/` holds timeboxed experiments that are allowed to
   fail without touching the source of truth.

## Start here

**New to the project:** `CLAUDE.md` → `docs/00-product-thesis.md` → `docs/01-product-brief.md`
→ `docs/decisions.md`.

**Starting a work session:** open the one or two source-of-truth docs your question actually
touches, plus `docs/02-facts-assumptions-decisions.md`. Don't paste the whole repo into a
conversation — context should be sufficient, not maximal.

**Finishing a work session:** if anything was decided, it goes in `docs/decisions.md` before
the tab closes. If nothing was decided, say so in the exploration log. An undocumented Claude
conversation is invisible memory, and invisible memory is how a project loses its reasoning.

---

## Repo map

```text
shopgenius/
├── README.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docs/                       Source of truth, in dependency order
│   ├── 00-product-thesis.md              L1
│   ├── 01-product-brief.md               L2
│   ├── 02-facts-assumptions-decisions.md
│   ├── 03-research.md
│   ├── 04-competitive-landscape.md
│   ├── 05-object-model.md
│   ├── 06-ai-jobs.md
│   ├── 07-ux-flow-spec.md                L3
│   ├── 08-design-direction.md            L4
│   ├── 09-trust-provenance-commerce.md
│   ├── 10-ux-writing.md
│   └── decisions.md
│
├── inspiration/
│   ├── README.md
│   ├── _template.md
│   ├── entries/
│   └── case-studies/
│       ├── README.md
│       ├── _template.md
│       └── studies/
│
├── explorations/
│   ├── README.md
│   └── _template.md
│
├── prototypes/                 L5
│   └── README.md
│
├── prompts/
│   ├── README.md
│   ├── 01-discovery.md
│   ├── 02-prototype-brief.md
│   └── 03-critique.md
│
└── src/                        L6
    └── README.md
```

---

## Root

| File | What it is |
|---|---|
| `README.md` | This file. Map, reading order, and project status. |
| `CLAUDE.md` | The boundary document. Three Claude modes, what Claude decides vs. what we decide, the FACT/ASSUMPTION/DECISION rule, ShopGenius's commerce and persuasion limits, stop conditions. Claude Code reads it automatically. |
| `CONTRIBUTING.md` | Working conventions: branch and commit naming, document lifecycle (Draft → Reviewed → Ratified → Superseded), how to mark AI-drafted text, pre-merge checklist. |
| `.github/PULL_REQUEST_TEMPLATE.md` | Auto-fills every PR with source-of-truth integrity checks and, for prototypes, the full review checklist plus trust and commerce items. |

## `docs/` — source of truth

Ordered by dependency. A lower-numbered document constrains the ones after it; if they
conflict, one of them is wrong and it gets resolved explicitly, not silently.

| File | What it is |
|---|---|
| `00-product-thesis.md` | **L1.** The one-sentence thesis, the central hypothesis, what would prove it wrong, the obvious alternative we lose to, and an attack log of counter-arguments and how each fared. |
| `01-product-brief.md` | **L2.** Problem, target shopper, current behavior, opportunity, key insight, scope. Includes the AI-native test — does the core interaction survive if AI disappears? |
| `02-facts-assumptions-decisions.md` | The register that stops AI speculation from becoming product truth. Three tables; every assumption carries a test and a risk-if-wrong. |
| `03-research.md` | Research kept in separated layers — Observed → Interpreted → Hypothesized — plus contradictions and missing evidence. |
| `04-competitive-landscape.md` | Job-based teardowns, not a feature matrix. Includes a scan of who has shipped in-image or in-video commerce and whether they still are. |
| `05-object-model.md` | Objects before screens. Candidate objects (Intent, Scene, Hotspot, Branch, Ending…) with ownership, mutation, lineage, and what the AI may read or write. |
| `06-ai-jobs.md` | One spec per AI behavior: input, reasoning, output, constraints, uncertainty, provenance, user control, worst failure mode. Contains a worked example for branch selection. |
| `07-ux-flow-spec.md` | **L3.** Flows as Trigger → Goal → Information → Action → AI behavior → Decision → Outcome. Screen-justification table. Every video-dependent flow states its non-video equivalent. |
| `08-design-direction.md` | **L4.** Brand personality, visual tension axes, metaphor, visual rules, and how we show AI reasoning without sparkles or glow. |
| `09-trust-provenance-commerce.md` | The highest-risk document. Provenance model, the trust questions the interface must answer, commerce boundaries, and a regulatory checklist. |
| `10-ux-writing.md` | Voice, banned phrases, and the six strings that carry the most trust weight. |
| `decisions.md` | The decision log. Newest first, each with alternatives rejected, evidence, and a revisit condition. |

## `inspiration/`

Everything starts as an entry. It gets promoted to a case study only when it's close enough to
our thesis that we need to know *why* it worked or failed.

| Path | What it is |
|---|---|
| `README.md` | The hub. The two depths, when to promote, the combined index, and our tag vocabulary. |
| `_template.md` | Quick-entry format: the mechanic stripped of polish, the job it does, what it costs to produce, relevance to us, and an Adopt / Adapt / Watch / Avoid verdict. |
| `entries/` | Quick logs, one mechanic each, named `YYYY-MM-DD-slug.md`. |
| `case-studies/README.md` | Sourcing rules — first-party vs. independent claims, "shipped" vs. "worked," and why discontinued products are our most valuable evidence. |
| `case-studies/_template.md` | Teardown structure ending in implications tied to assumption IDs, plus a confidence statement separating documented from inferred. |
| `case-studies/studies/` | Studies live here as `NN-slug.md`. |

## `explorations/`

| Path | What it is |
|---|---|
| `README.md` | Rules for timeboxed probes: state the question and timebox before starting, kill it when the box ends, route findings through `docs/decisions.md` rather than editing `docs/` directly. Includes suggested first probes. |
| `_template.md` | Per-probe format. The load-bearing field is "what would change our mind," written before we look. |

## `prototypes/`

| Path | What it is |
|---|---|
| `README.md` | **L5.** The three questions to answer before building, the fidelity ladder (most questions resolve at level 1–2), the visibly-fake-data rule, and the per-prototype folder layout. |

## `prompts/`

| Path | What it is |
|---|---|
| `README.md` | The seven-part prompt structure, and the convention of logging notably good *and* notably bad prompts. |
| `01-discovery.md` | Research synthesis, competitive analysis, prior-art hunting, scenario generation, thesis attack. |
| `02-prototype-brief.md` | Mode B divergent and narrowing briefs, the Mode C implementation brief, and a constraint block to append to any build prompt. |
| `03-critique.md` | The three passes (clarity → trust → desire), the adversarial set including a manipulation audit, and an anti-sycophancy prompt. |

## `src/`

| Path | What it is |
|---|---|
| `README.md` | **L6.** Placeholder. Nothing here until the product questions are resolved — see `CLAUDE.md` §3, Mode C. |

---

## Status

| Level | Document | Status | Owner | Last reviewed |
|---|---|---|---|---|
| L1 Thesis | `docs/00-product-thesis.md` | Draft — contains a placeholder thesis, replace before citing | — | — |
| L2 Brief | `docs/01-product-brief.md` | Not started | — | — |
| L3 UX flow | `docs/07-ux-flow-spec.md` | Not started | — | — |
| L4 Direction | `docs/08-design-direction.md` | Not started | — | — |
| L5 Prototype | `prototypes/` | Not started | — | — |
| L6 Implementation | `src/` | Not started | — | — |

Keep this table current. It's the fastest way for a teammate to see what's real and what isn't.
