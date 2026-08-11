---
layout: default
title: What comes after Scratch?
seo_title: What Comes After Scratch? A Realistic Next Step for Young Coders
description: Your kid finished Scratch and "just learn Python" isn't working. Here is why the jump is harder than it looks, how to tell they're ready, and what to try instead.
skip_patch_notes_crumb: true
eyebrow: Guide for parents
---

# What comes after Scratch?

Every parent who watches a kid get good at Scratch eventually asks the same
question. They've built games. They can make something repeat, or happen only
when a condition is met, without ever calling it that. They've made a sprite do
something genuinely clever. So what now?

The usual answer is "now they should learn a real language, probably Python."
That advice isn't wrong, exactly. It's just missing the part that makes it
hard, which is why so many kids try it, stall out in a week, and quietly decide
programming stopped being fun.

This is an attempt at a more honest answer.

## Scratch taught more than people give it credit for

It's fashionable to dismiss block coding as "not real programming." That's
backwards. A kid who has shipped a working Scratch project already knows how to:

- **Do things in a specific order**, and knows that changing the order changes
  the result. (Programmers call this *sequence*.)
- **Repeat something**, either a set number of times or until something
  becomes true. (This is a *loop*.)
- **Make a decision**, like "if the sprite touches the edge, do this instead."
  (This is a *conditional*.)
- **Keep track of a number that changes**, like a score that climbs or a
  lives counter that drops. (This is a *variable*.)
- **React to something happening**, like a click or a collision. (This is an
  *event*.)

That's genuinely most of the mental toolkit programming runs on, even if
nobody ever used those words. A kid who has it is not a beginner in the way an
adult opening a Python book for the first time is a beginner.

So if they know all that, why does the next step go so badly?

## The thing that actually breaks

Here's the part the standard advice skips. In Scratch, **you cannot write a
malformed program.** The blocks physically don't fit together wrong. If a
project misbehaves, it's because your logic was wrong, and the fix is to think
harder about the logic.

In Python, an entirely new category of failure appears. You can be completely
right about the logic and still get nothing but an error, because you missed a
colon. Or the indentation is off by two spaces. Or you used a curly quote that
your word processor helpfully inserted.

That's not a small change. It's a new kind of thing to be bad at, and it shows
up on line one, before the learner gets to use any of the understanding they
built up in Scratch. Ten minutes into a first Python lesson they've hit three
errors that have nothing to do with programming and everything to do with
typing precision.

Adults push through this because we've been told it's normal. A twelve year old
draws a different conclusion, and it's a reasonable one from where they're
sitting: *I was good at this before, and now I'm not, so I must have hit my
limit.*

They haven't. They hit a change of medium, and nobody warned them.

## Signs they're actually ready to move on

Not every Scratch kid should move on immediately. Some are still learning real
things. Rough signals that the ceiling is close:

- Their projects are getting **bigger rather than smarter**. More sprites, more
  blocks, but not new ideas.
- They're **fighting the interface** rather than the problem, hunting through
  block palettes for something they can already describe in words.
- They ask what "real" programmers use, or express embarrassment about Scratch
  being for little kids. Social, but it matters for motivation.
- They can **explain their logic out loud** clearly. That's the readiness
  signal that counts most.

If they're still inventing new mechanics in Scratch, there is no rush. The
ceiling is higher than it looks.

## The options, honestly

There's no single right answer, and the best one depends on the kid. A fair
survey of what's out there:

**Keep going in Scratch, but harder.** Underrated. Clones, custom blocks, and
list manipulation are genuinely advanced concepts. Free, and no transition
cost.

**Code.org's later courses.** Free, well-built, and their App Lab deliberately
shows block and text views side by side, which softens exactly the transition
this article is about. Aimed at classrooms, so it can feel worksheet-like for a
self-directed kid.

**CodeCombat.** A game where you type real Python or JavaScript to move your
character. Genuinely tackles the typing-precision problem by making it the
gameplay. Some kids love it. Others find that combining "learn to type code"
with "play a game" makes both parts slower.

**Khan Academy's programming courses.** Free, JavaScript-based, strong
explanations. Being browser-based with immediate visual output keeps a lot of
the Scratch feel.

**A straight Python course** (there are many free ones). The right destination
eventually. The failure mode is starting here directly from Scratch with
nothing in between.

**Python with turtle graphics** (small Python programs that draw pictures on
screen by steering a little on-screen turtle around). A decent bridge in its
own right, because the output is visual and immediate, which keeps the
Scratch-like feedback loop while introducing actual code.

Notice that most of these are free. Be skeptical of anyone, including us, who
tells you the answer requires a subscription.

## A sequence that tends to work

If you want a default plan rather than a menu:

1. **Don't leave Scratch cold.** Let the last few projects be ones where they're
   clearly thinking beyond what the blocks make easy.
2. **Separate the two hard things.** Learning "how a loop works" and learning
   "how Python writes a loop" are different tasks. Doing them simultaneously is
   what overwhelms people. Whatever you pick, pick something that lets the logic
   lead and the syntax follow.
3. **Expect the syntax phase to feel like a step backwards.** Tell them in
   advance. A kid who knows the frustrating part is coming and is temporary
   handles it completely differently from one who thinks they've hit a wall.
4. **Then take the real Python course.** The goal of everything before it is to
   make that course feel readable instead of foreign.

## Where FlowState Logic fits

That's the app we make, so read this with appropriate suspicion.

FlowState Logic is built specifically for step two above. Every lesson starts
with a situation rather than a code block. You work out what should happen, you
watch it play out, and only then does the same idea appear as plain English
steps and finally as real Python. The point is that when the code shows up,
it's a translation of something the learner already solved, which is a much
smaller thing to absorb than a rule they've been handed cold.

It covers the fundamentals through more advanced building blocks like lists
and dictionaries (ways of storing and organizing a bunch of data at once). It
runs in a browser, so a school Chromebook works with nothing to install, and
it's also on Android and in beta on iOS.

What it is not: a full Python course, or a replacement for one. It's the bridge,
and it's honest about ending where a real Python course should start. Learning is
free. The only things that cost money are cosmetic.

[Try it in your browser](https://flowstate-logic.cinderwayinteractive.com) if
that sounds like the gap your kid is stuck in. And if one of the free options
above fits better, use that instead. The thing that matters is that they don't
conclude they're bad at this over a missing colon.
