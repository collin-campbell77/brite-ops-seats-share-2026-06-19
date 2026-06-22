# Brite Nites — Operations Seats

A single shareable page with a position profile for every operational seat, plus in-page
navigation. Published via GitHub Pages:

**https://collin-campbell77.github.io/brite-ops-seats-share-2026-06-19/**

## Layout

- `index.html` — the **built, deployed** page (what Pages serves). Generated; don't hand-edit.
- `src/` — the **editable source**:
  - `profile-*.html` + `rdc-scaffold.html` — one file per seat (the RDC profile is `rdc-scaffold.html`).
  - `_profile-kit.md` — shared style + "House Facts" reference.
  - `build-single.js` — assembles the seat files into the home ladder + all profile views → `src/ops-directory-single.html`.
  - `wrap.js` — wraps that with doctype/viewport and writes the final `../index.html`.

The global CSS for the built page comes only from `rdc-scaffold.html`'s `<style>` block
(including the `.hbflag` "Handbook note" callout style); per-profile `<style>` blocks are stripped at build time.

## Edit + deploy

```sh
# 1. edit a seat file in src/ (e.g. src/profile-am.html)
cd src
node build-single.js   # -> src/ops-directory-single.html
node wrap.js            # -> ../index.html
cd ..
git add -A && git commit -m "..." && git push   # Pages auto-deploys on push to main
```

To add/remove/reorder seats or change a home-tile label/blurb, edit the `roles` array in
`src/build-single.js`.

## Notes

- The `#view-<id>` anchors are a tiny client-side hash router (one page, hidden `.view` divs);
  deep links like `…/#view-doo` open straight to that seat.
- "Handbook note" flags mark where this redesigned model diverges from the current handbook
  (e.g. the handbook still has a Territory Manager tier and no RDC).
