# Branching video commerce — worked example

**Date logged:** 2026-09-03 · **Logged by:** — · **Tags:** `in-video` `branching`
`intent-elicitation` · **Link:** —

> This entry is a **format demonstration**, not researched findings. Replace the bracketed
> parts with a real product before citing anything here. Per `../../CLAUDE.md` §4, nothing
> below is a fact yet.

## What it is

[Product] presents a short video where the viewer's choices at decision points change what
happens next, ending in materially different outcomes.

## The mechanic

A pre-authored branch tree. Each node is a video segment; each edge is a choice presented as an
overlay during a decision window. Choices are cheap to make and immediately consequential —
that combination is what produces engagement, not the video quality.

## What job it does for the user

Lets someone express a preference by *choosing* rather than by *describing*. This is the part
that matters for us: our shoppers often can't articulate what they want but can reliably
recognize it.

## Why it works (or doesn't)

Works: choice feels like authorship, so the outcome feels earned rather than served.
Doesn't: authoring cost scales badly with branch depth, and viewers who wanted the ending
without the journey experience the whole thing as friction.

## What it costs

Content volume grows multiplicatively with depth. Every branch is an asset someone has to make,
version, and retire when the catalog changes.

## Relevance to ShopGenius

- **What we'd steal:** preference elicitation through recognition instead of description.
- **What we'd have to believe:** that shoppers will trade time for a better-fitting outcome —
  the opposite of the assumption behind one-click.
- **What breaks when there's money involved:** an entertainment branch tree can be authored for
  drama. A commerce branch tree authored for drama is steering. The moment a branch is chosen
  for the merchant's benefit rather than the shopper's, the mechanic becomes a dark pattern
  wearing good design. See `../../docs/09-trust-provenance-commerce.md`.

## Verdict

`Adapt` — the elicitation mechanic is promising; the authored-tree production model probably
isn't survivable at catalog scale. Generated branches would change everything, including the
trust story. Candidate for `EXP-002`.

## Evidence status

`ASSUMPTION` throughout — nothing here has been verified.
