# Trust, Provenance & Commerce Boundaries

The highest-risk document in this repo. ShopGenius asks people to spend money based on machine
reasoning delivered through persuasive media. That combination earns extra scrutiny.

## Provenance model

The shopper should be able to follow: **Source → Transformation → Result**

For every surfaced recommendation, decide what is exposed:

- Where the product data came from
- What the AI did to it (filtered, ranked, reframed, adapted the narrative)
- What was preserved from the shopper's stated intent
- What changed, and why
- What the AI is uncertain about

> Don't ask shoppers to trust the AI. Give them enough visibility to evaluate it.

## Trust interactions to design

| Question the shopper is asking | Where it's answered |
|---|---|
| Why am I seeing this? | |
| What did you use to decide? | |
| Is this sponsored? | |
| Is this price / availability current? | |
| How do I get out of this and just browse? | |
| Can I undo the choice I just made? | |

## Commerce boundaries

Restated from `CLAUDE.md` §5 because this is where they get designed, not just declared.

**Never invented product facts.** Prototypes use visibly fake data.

**Disclosure over discovery.** Any commercial influence on ranking, hotspot placement, or
branch outcome is disclosed in the interface at the point of influence — not in a footer.

**Persuasion vs. manipulation.** Default-prohibited: manufactured scarcity, countdown pressure,
exit-gating progress mechanics, purchase-gated endings, loss-framed decision copy. Testing one
requires a logged decision with a rationale.

**Purchase authority.** The agent may assemble, compare, and stage. It does not transact
without an explicit, reversible confirmation. Any change to this needs its own spec and
decision entry.

**Vulnerability.** Gamified sessions land differently on people shopping under stress, on
minors, and on people with compulsive-spending patterns. Before a broad test, decide what
signals we'd watch and what we'd do about them. Write down the answer even if the answer is
"out of scope for the prototype" — an explicit deferral is a decision, an unexamined one isn't.

## Regulatory checklist

Not legal advice; a prompt for a real review before anything ships publicly.

- [ ] Advertising and sponsorship disclosure requirements in target markets
- [ ] Automated-decision and AI-disclosure obligations
- [ ] Accessibility conformance for a video-first interface (WCAG)
- [ ] Price and availability accuracy obligations
- [ ] Data handling for behavioral signals collected during a session
- [ ] Reviewed with counsel on: ____
