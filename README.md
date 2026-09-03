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
   it — quick entries for single mechanics, and deeper teardowns in `inspiration/case-studies/`
   when something is close enough to our thesis to warrant one.
4. **A place to run probes.** `explorations/` holds timeboxed experiments that are allowed to
   fail without touching the source of truth.

## Repo map

```text
shopgenius/
├── README.md                  You are here
├── CLAUDE.md                  Operating rules + boundaries for AI-assisted work
├── CONTRIBUTING.md            How we add, review, and retire documents
│
├── docs/                      Source of truth, in dependency order
│   ├── 00-product-thesis.md            L1  Why this exists
│   ├── 01-product-brief.md             L2  What we're building
│   ├── 02-facts-assumptions-decisions.md   The FAD register
│   ├── 03-research.md                  Observed → interpreted → hypothesized
│   ├── 04-competitive-landscape.md     Job-based, not feature-based
│   ├── 05-object-model.md              Objects before screens
│   ├── 06-ai-jobs.md                   One spec per AI behavior
│   ├── 07-ux-flow-spec.md              L3  How the experience works
│   ├── 08-design-direction.md          L4  How it should feel
│   ├── 09-trust-provenance-commerce.md Trust, provenance, commerce boundaries
│   ├── 10-ux-writing.md                Voice, microcopy, prohibited language
│   └── decisions.md                    The decision log
│
├── inspiration/               What moved us, and the mechanic underneath it
│   ├── entries/                        Quick logs — one mechanic each
│   └── case-studies/                   Deeper teardowns with a stated takeaway
├── explorations/              Timeboxed probes (EXP-001, EXP-002, …)
├── prototypes/                L5  Running artifacts
├── prompts/                   Reusable prompt scaffolds
└── src/                       L6  Implementation
```

## Start here

**New to the project:** `CLAUDE.md` → `docs/00-product-thesis.md` → `docs/01-product-brief.md`
→ `docs/decisions.md`.

**Starting a work session:** open the one or two source-of-truth docs your question actually
touches, plus `docs/02-facts-assumptions-decisions.md`. Don't paste the whole repo into a
conversation — context should be sufficient, not maximal.

**Finishing a work session:** if anything was decided, it goes in `docs/decisions.md` before
the tab closes. If nothing was decided, say so in the exploration log. An undocumented Claude
conversation is invisible memory, and invisible memory is how a project loses its reasoning.

## Status

| Level | Document | Status | Owner | Last reviewed |
|---|---|---|---|---|
| L1 Thesis | `docs/00-product-thesis.md` | Draft | — | — |
| L2 Brief | `docs/01-product-brief.md` | Not started | — | — |
| L3 UX flow | `docs/07-ux-flow-spec.md` | Not started | — | — |
| L4 Direction | `docs/08-design-direction.md` | Not started | — | — |
| L5 Prototype | `prototypes/` | Not started | — | — |
| L6 Implementation | `src/` | Not started | — | — |

Keep this table current. It's the fastest way for a teammate to see what's real and what isn't.
