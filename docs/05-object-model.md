# Object Model

Objects before screens. For an AI-native product this is the substrate the model reasons over —
get it wrong and every flow downstream inherits the mistake.

## Candidate objects

Starting set for ShopGenius — argue with it, don't accept it:

Shopper · Intent · Constraint · Session · Scene (image/video) · Hotspot · Branch · Choice ·
Product · Recommendation · Rationale · Comparison · Basket · Outcome/Ending

## Per-object definition

Copy this block per object.

### [Object]

- **What is it:**
- **Ownership:** who owns it — shopper, system, or merchant?
- **Relationships:** what it connects to
- **Mutation:** can it change, and who can change it?
- **Lineage:** where did it come from? (Critical for anything AI-generated — see
  `09-trust-provenance-commerce.md`)
- **AI relationship:** what can the model read, and what can it write?
- **Persistence:** does it survive the session?

## Open modeling questions

- Is **Intent** one object that mutates through a session, or a series of immutable snapshots?
  This determines whether a shopper can rewind a branch — probably a thesis-level question, not
  a technical one.
- Is a **Branch** authored content or generated at runtime? The answer changes the entire
  production model and cost structure.
- Does an **Ending** own the products it contains, or reference them? Determines whether a
  session is replayable when inventory changes.
