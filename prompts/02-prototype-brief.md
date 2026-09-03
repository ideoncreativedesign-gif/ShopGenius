# Prototype brief prompts

## Mode B — divergent exploration

Never open with "design the screen."

> Context: [paste from CLAUDE.md §1]. Current thesis: [thesis]. Decided already: [decisions].
>
> Explore three **fundamentally different** approaches to [specific interaction]. Different
> means different mental models, not three visual treatments of one idea. For each: the mental
> model it assumes, what it makes easy, what it makes hard, and what would have to be true for
> it to work.
>
> Do not redesign the rest of the product or introduce unrelated features. End with which one
> you'd pursue and what evidence would change that.

## Mode B — narrowing

> We're pursuing approach [X]. Build a level-[N] prototype that tests only [hypothesis].
> Everything not related to that hypothesis should be obviously stubbed. Use visibly fake
> product data — `$XX.XX`, `BRAND_A`. Do not add features that make the demo more impressive
> but weaken what it tests.

## Mode C — implementation

Only after the product question is resolved.

> The interaction is decided — see `docs/07-ux-flow-spec.md` [flow] and `docs/06-ai-jobs.md`
> [AI-0X]. Implement it as specified. If the spec is ambiguous, stop and ask rather than
> choosing; if the spec is wrong, say so rather than implementing around it.

## Constraint block to append

> Constraints: no invented product facts; no manufactured scarcity or countdowns; the plain
> list exit is always reachable; every video-dependent interaction needs its non-video
> equivalent; never show AI reasoning as sparkles or glow.
