---
layout: default
title: Alpha 12 patch notes
---

# Alpha 12 - June 2026

Big drop this round. Overhauled mascot art, a brand-new fitting tool, the
Pro upgrade screen, and the new Reserve Ember system. Notes below.

## 🚀 New

- **O.B. sprite overhaul.** Completely revamped mascot art from the
  ground up. Royalty-free, fully ours.
- **Fit Editor in the Fitting Room.** You can now drag accessories to
  the perfect spot on O.B., resize them (within reason!), rotate them,
  and pick the layer they render on - in front, behind the body,
  behind auras, etc.
- **Editing toggle for the Fit Editor.** Lock the preview so scrolling
  through the accessory tiles doesn't accidentally yank things around.
  Defaults to locked on entry so a quick browse stays a quick browse.
- **Reserve Embers** - a new resource that softens long missed-question
  runs. Capped at 10 (free) / 20 (Pro). Only spent after normal embers
  hit zero. Recharges when normal embers stay at max for 24 hours, then
  once every 24 hours after that (every 12 hours on Pro). Both timings
  subject to change based on feedback.
- **Skill-based ember rewards during lessons!** Get 3 questions correct
  in a row → +1 ember (capped at max). Get 7 in a row → +1 ember
  AND +5 crystals. Finish a lesson without missing a question →
  embers refill to max. Wrong answers reset the streak. Missed runs
  hurt less; clean runs feel earned.
- **Currency packs in the Shop.** New CRYSTAL and CORE sections at
  the top of the Shop with three pack sizes each. Pay in real money,
  get the in-game currency; Pro gets the 15% discount on top.
- **Insights is now a main tab** (visible when Pro is active). Lives
  between Wardrobe and Profile so it's a single tap from anywhere.
  Tabbed instead of buried in Settings so the Pro perk reads as a
  real feature, not an afterthought.
- **Upgrade to Pro** screen, reachable from the Shop banner and the
  Profile screen. Monthly subscription, yearly (discounted), or
  lifetime founder purchase. Perks include:
  - Faster Ember refill
  - Flow protection - a free streak freeze every week
  - Advanced Insights tab (unlocks as a main tab when active)
  - Weekly cosmetic-currency credit
  - 15% global shop discount (in-game currency AND real money)
  - Priority launch access - including a badge on your profile
- **New achievements** for the new systems:
    - *Skill streaks:* Hot Streak (3 in a row), Flow State (7 in a row),
      Flawless (perfect lesson), Still Burning, Overcharged
    - *Volume + collection:* Centurion (1k questions), Marathon (5k),
      Crystal Tycoon (5k crystals), Wardrobe Curator (5 morphs),
      Hat Trick (three perfect lessons in a row)
    - *Pro-only badges* with a "PRO" pill so you can see them in the
      gallery before subscribing: First Subscription, Stockpile (reserves
      to cap), Bottomless (reserves above 30)
  - Locked tiles now show the actual badge art (dimmed) with a small
    "LOCKED" pill in the corner - instead of swapping to a padlock
    icon - so you can recognize the badges you're working toward.
- **Dedicated art** for the new Hot Streak, Flow State, Crystal
  Collector, Overcharged, and Stockpile badges so the gallery doesn't
  reuse generic icons.

## 🔧 Tuning

- **Curriculum** - targeted question + answer improvements across
  multiple modules.
- **Font size selector** in Settings → Display. Affects subtext sites
  throughout the app where the default sizes were hard to read:
    - Default (1.0×)
    - Larger (+20%)
    - Largest (+35%)
    - X-Large (+50%)
  Headers and large display text stay at designed size - the
  pixel-arcade typeface was authored for specific sizes and scaling
  the chunky glyphs just makes them look soft.

## 🐛 Fixed + polished

- Wardrobe and Fitting Room sounds now play on Android (the previous
  release had four WAV files with an unusual header that Android's
  audio decoder couldn't handle).
- Profile avatar uses the pixel-art chamfered frame to match the rest
  of the UI instead of rounded corners.
- Fit Editor's TARGET row now stretches edge-to-edge instead of
  stopping short of the right margin.
- General UI sweeps across multiple screens.

## ⚖️ Legal

- New [Third-party licenses](../license.html) page covers the Noto
  Emoji attributions (SIL Open Font License 1.1 / Apache 2.0) and the
  modifications we made when downscaling them into pixel art for the
  achievement gallery and UI icons. Linked from the docs home page.

## 📝 Notes

- Reserve ember recharge timings are tuned based on best guess. If
  they feel too generous (Pro perks vanish quickly) or too tight (free
  tier grinds), drop a note via Settings → Send feedback.
- Headers and large display text don't scale with the font selector:
  the pixel-arcade typeface is designed for specific sizes.
