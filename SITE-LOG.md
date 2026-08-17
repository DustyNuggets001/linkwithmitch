# Link With Mitch — Site Update Log

Running log of content and site changes, newest first. Add a new entry each time a batch of changes goes live.

---

## 2026-08-17

**Georgia Dream Peach Plus — article fixes**
- Fixed broken hero image path and "Talk Through Your Options" image path in `blog/georgia-dream-peach-plus.html` (both were missing the `../images/blog/` prefix and would not load)
- Fixed `og:image` meta tag (same missing-path issue — was breaking social share previews)
- Restored `BlogPosting` and `BreadcrumbList` structured data (JSON-LD), which had been dropped from the article during editing
- Restored Google Analytics tag (`gtag.js`), which was missing from the page entirely
- Synced FAQ answer wording between visible copy and FAQPage schema

**dpa-hub.html — layout**
- Removed the "USDA + Georgia Dream" coming-soon card from the Georgia Dream program options grid (not a combination Mitch offers or wants to promote)

**Status:** Ready to push — `dpa-hub.html`, `blog/georgia-dream-peach-plus.html`, `images/blog/georgia-dream-peach-plus-hero.png`

---

## 2026-08-14

Posted 3 new Georgia Dream articles and updated the DPA hub / blog index / sitemap to reference them:
- `blog/georgia-dream-homeownership-program.html` — main Georgia Dream overview guide
- `blog/georgia-dream-standard-program.html` — Georgia Dream Standard program
- `blog/georgia-dream-peach-select-va-loan-requirements-income-limits.html` — Peach Select VA
- `blog/va-loan-questions-first-time-buyers.html` — first-time VA buyer FAQ article
- Added hero images for each under `images/blog/` and `images/georgia-dream/`
- Updated `dpa-hub.html`, `blog/index.html`, and `sitemap.xml` to link the new articles

**Note:** `blog/georgia-dream-peach-plus.html` was drafted the same day but held back from this push; see 2026-08-17 entry above for its fixes ahead of posting.

---

## Earlier history

Not tracked here — this log starts 2026-08-17. Anything before that lives only in GitHub's commit history (`git log`), which is largely generic "Add files via upload" messages, so specifics before this date aren't easily reconstructable. Going forward, please replace the default upload commit message with a short description of what's in that batch — it makes `git log` itself useful alongside this file.
