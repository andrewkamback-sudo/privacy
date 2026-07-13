---
layout: default
title: Prelaunch 1 patch notes
---

# Prelaunch 1 - June 2026

First entry on the prelaunch line. The alpha series ran on `0.8.x`; `0.9.0`
opened the prelaunch track with the Logic First curriculum surfaced on the main
Learn tab and end-to-end in-app billing live for testers. `0.9.1`
follows it up with chapter-level Insights for Pro users and an
across-the-board option-order shuffle.

## 🚀 New

- **Logic First (v1.0.1) on the Learn tab.** New banner card at the top
  of Learn routes to a chapter map showing the 7 chapters + 34
  lessons built on the logic-first teaching model. Ch.1 lessons show
  inline "+ Practice" rows (4 variants each) and the chapter ends
  with a "Through the Tunnel" capstone scenario. Legacy modules stay
  intact below the banner - existing testers don't lose progression.
- **In-app billing is live end-to-end.** Pro upgrade flow completes a
  real Google Play purchase via RevenueCat; Pro perks (faster ember
  refill, free hints in Practice, "patient practice" leniency on
  Practice variants) light up immediately. Monthly, yearly, and
  lifetime upgrades all round-trip validated on the internal track.
  Sale-tier offerings (`minor_sale`, `major_sale`, `mega_sale`) are
  wired and will surface when an event tier is active.
- **Logic First chapter rows on the Insights tab (Pro).** Pro users
  who follow the prelaunch banner now see their progress reflected in
  Insights: per-chapter accuracy %, completion fraction ("X of Y
  lessons complete"), capstone status, and a crystal-accented border
  that visually distinguishes the new section from the legacy module
  rows below it.
- **Option order shuffled in every multiple-choice surface.** The
  authored "correct answer at position 1" bias no longer leaks to the
  learner. Applies to the main lesson interaction, mini-checks,
  practice variants, and capstone stages. Shuffle is keyed on the
  surface's stable id, so retries within a single attempt keep the
  same layout - no confusing mid-attempt reshuffles.

## 🔧 Tuning

- **Feedback channels split into Discord + Email.** Settings → About
  used to surface a single mailto row. Now: "Join the Discord" (chat
  + bug reports + feature requests via the server's triage bot) and
  "Email support" as separate rows. The Discord tap tries the
  `discord://invite/` deep link first so installed users land in-app
  instead of in the browser.

## 🐛 Fixed + polished

- Android typing bugs in the Guided Example block on logic-first
  lessons.
- Google sign-in OAuth confusion (test track SHA-1 + Web Client ID)
  resolved.

## 📝 Notes

- "Prelaunch" status is intentional - the curriculum is the first six
  chapters of a logic-first re-author, with Ch.1 fully populated as
  the pilot for practice + capstones. Chapters 2-7 will get their
  practice + capstone passes on the same update cadence.
- Sale-tier offerings stay invisible until an event tier is active.
  Today there's no event running, so testers see the default
  monthly/yearly/lifetime offering.
