# Critique prompts

Never "does this look good?"

## Pass 1 — Clarity

> Where would a first-time shopper hesitate? Walk the flow and mark every point where they
> wouldn't know what just happened or what to do next.

## Pass 2 — Trust

> What might make a shopper distrust this output? Where does the interface ask for belief
> without giving anything to evaluate? Where could the AI confidently produce a wrong answer
> that looks right?

## Pass 3 — Desire

> Does this make the shopper feel ownership of the outcome, or served a result? Where does the
> experience take the choice away while appearing to offer it?

## Adversarial set

Run at least one per significant artifact.

**Product** — Assume ShopGenius fails. Give me the five most likely reasons, ranked, with the
earliest signal we'd see for each.

**UX** — Find every point where this flow asks the shopper to do unnecessary work.

**AI** — Where could the model confidently produce the wrong answer? What would the shopper see
when that happens?

**Manipulation audit** — Read this flow as a regulator would. Which mechanics could be
characterized as a dark pattern, and what's our defense for each? Be uncharitable to us.

**Business** — What would make this product unnecessary?

**Design** — What is visually attractive here but actually hurts comprehension?

**Thesis** — Does this screen make the product's central differentiation obvious to someone
who has never heard of us?

## Anti-sycophancy

If Claude is agreeing too readily, the prompt is leading. Try:

> Argue the opposite of what I just proposed, as strongly as you can. Don't hedge or balance it
> — I'll do the balancing.
