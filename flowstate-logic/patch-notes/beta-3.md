---
layout: default
title: Beta 3 patch notes
---

# Beta 3 (0.9.3)

A small but high-leverage update: completion-screen navigation that
actually leads somewhere, and a renamed Advanced Practice surface
that earns its way into Settings instead of cluttering it by default.

## 🚀 New

- **"Next" button on every completion screen.** Finishing a
  lesson's mini-check no longer drops you into a dead-end with the
  X-back button as the only way forward. The button now resolves
  the right destination and labels itself accordingly:
  - **Next: `<lesson title>`** — moves you to the next lesson in
    the same chapter.
  - **Capstone: `<capstone title>`** — surfaces when you've just
    cleared the last lesson of a chapter.
  - **Next chapter: `<first lesson title>`** — appears after a
    capstone clears, sending you into the next chapter's opener.
  - **Back to Learn** — only when the curriculum is done.
  The same button shows up after a Practice set completes and
  after a Capstone outro, so the rhythm is consistent across all
  three screen types.

## 🔧 Tuning

- **"Advanced Practice" replaces "Classic Curriculum."** Same
  content (the legacy 18-module question-bank curriculum), more
  honest framing: it's code-first questions across four tiers of
  topics, not the visual-first format the Logic First chapters use.
- **Advanced Practice unlocks when you finish the Logic First
  chapters.** For new learners, the toggle row is hidden in
  Settings until Chapter 10's last lesson settles — at that moment
  it appears and auto-flips on. Existing testers with legacy
  progress keep it visible retroactively.

## 🐛 Fixed

- **Tapping a chapter's capstone from the Learn-tab sheet now
  actually opens it,** instead of falling through to a not-found
  page.

---

← [Back to patch notes](index.md)
