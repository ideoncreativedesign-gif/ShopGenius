# Inspiration / Lookbook

Shared library of things that moved us — with the mechanic named.

The bar for adding anything: **you can name the mechanic underneath the polish.**
A link with no analysis is a bookmark; this folder is for bookmarks that have been thought about.

## Structure

```text
inspiration/
├── entries/          One folder per item. Screenshots + a named mechanic + 1–2 lines of insight.
│   └── YYYY-MM-DD-short-slug/
│       ├── README.md     ← the entry (GitHub renders it when you open the folder)
│       └── *.jpg / *.png ← images live next to it
├── case-studies/     Deep teardowns — only when something is close enough to our thesis
│                     that we need to know WHY it succeeded or failed. Rare by design.
├── xhs-seeding-posts/  Corpus: what XHS 种草 posts look like as screens (scraped,
│                     third-party content — reference only, see its README).
└── _inbox/           Drop zone. Raw images/links with no writing required — Claude turns
                      them into entries. Anything here is unprocessed by definition.
```

No index file to maintain — dated folder names sort themselves and the folder listing *is* the index.

## Entry format (light on purpose)

```markdown
# <Mechanic name — English, so titles scan for everyone>

**Date:** YYYY-MM-DD · **By:** name · **Source:** URL / app / "screenshot, origin unverified"

![](01.jpg)

One or two lines: what the mechanic actually is, and why it caught you.
Body in whatever language you write fastest.

<!-- optional, one line -->
**Verdict:** Adopt / Adapt / Watch / Avoid — why.
```

That's the whole template. If an item has multiple forms (e.g. one site, nine layouts),
keep them as sections in one entry.

## Rules

1. **Name the mechanic in the title, in English.** "Focus by fading siblings" beats "cool gallery".
2. **Dropping an image is enough.** Ten minutes of writing is the ceiling, not the floor —
   if all you have is a screenshot, put it in `_inbox/` (or hand it to Claude) and move on.
3. **Mark what's unverified.** Second-hand screenshots, unconfirmed origins — say so in Source.
4. **Anti-patterns count.** Knowing precisely why something feels manipulative is more useful
   than another example of something that feels nice.
5. Insights extracted from entries graduate elsewhere (each side's own knowledge base / docs);
   this folder stays a material library.
