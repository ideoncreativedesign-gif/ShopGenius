# Prototypes

L5. Running artifacts that test a hypothesis.

## Before you build

Answer in the prototype's own README:

1. Which hypothesis does this test? (link to `../docs/00-product-thesis.md` or an assumption ID)
2. What is real, and what is simulated?
3. How will we know it worked?

If (1) is unanswerable, go back to Mode A. Building is the most enjoyable way to avoid deciding.

## Fidelity ladder

Climb only as far as the question requires.

| Level | Form | Good for |
|---|---|---|
| 0 | Storyboard / flow sketch | Does the sequence make sense? |
| 1 | Clickable, faked reasoning | Is the interaction legible? |
| 2 | Real reasoning, fake catalog | Is the AI's output believable? |
| 3 | Real reasoning, real data subset | Does it hold up on messy inventory? |

Most questions on this project are answered at level 1 or 2. Level 3 is expensive and mostly
tests engineering, not the thesis.

## Data rules

Prototype data is **visibly fake** — `$XX.XX`, `BRAND_A`, `Product 001`. Realistic invented
prices and specs get screenshotted, shared, and cited as real within about a week. This has
happened to every team that thought it wouldn't.

## Layout

```text
prototypes/
└── P-001-slug/
    ├── README.md      hypothesis, real vs simulated, how we'll judge it
    ├── NOTES.md       what we observed when people used it
    └── src/
```

## Review gate

Before calling one ready, run the checklist in `../.github/PULL_REQUEST_TEMPLATE.md` and the
three-pass critique: clarity → trust → desire.
