# L3 — UX Flow Spec

**Status:** Not started · **Owner:** —

Start from decisions, not screens.

> What decisions does the shopper need to make?

Map each flow as: **Trigger → Goal → Information → Action → AI behavior → Decision → Outcome**

## Flows

### [Flow name]

| Stage | Detail |
|---|---|
| Trigger | |
| Shopper goal | |
| Information needed | |
| Action available | |
| AI behavior | ref: `06-ai-jobs.md` [AI-0X] |
| Decision made | |
| Outcome | |

**States:** the smallest number of meaningful ones.

**Non-video equivalent:** required for every flow that depends on video or in-image
interaction. Keyboard path, screen-reader path, reduced-motion path, and what happens on a slow
connection. Fill this in at the same time as the main flow, not after.

**Exit to plain list:** where is it, and what carries over?

## Screen justification

> A screen is justified by a shopper decision or a meaningful system state — not by a feature.

| Screen / state | Decision or state it serves | Justified? |
|---|---|---|
| | | |

Watch for screens that exist only for loading, confirmation, empty transitions, or a "start"
step that's really just a button. Combine states when it produces a clearer mental model.

## Open flow questions

- What happens when the shopper's stated constraint and revealed preference conflict mid-session?
- Can a session be resumed days later, and does the AI's reasoning still hold when inventory
  has moved?
- Where does the session end if the shopper doesn't buy? A dead end teaches us nothing and
  serves them worse.
