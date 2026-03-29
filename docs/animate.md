Animation Guidelines

Purpose:

Add subtle motion to make the website feel modern and responsive while keeping performance fast and behavior consistent.

---

General Principles

Animations must be:

Subtle
Fast
Smooth
Consistent

Use motion to:

Reveal content
Provide feedback
Improve perceived quality

Do not:

Use flashy effects
Use long animations
Animate continuously
Overuse motion

---

Scroll Reveal Animation

Behavior:

Elements must:

Fade in
Move slightly upward
Animate once when entering viewport

Movement:

translateY from 20px to 0

Opacity:

0 to 1

Duration:

400ms to 500ms

Easing:

ease-out

Apply to:

Sections
Headings
Images
Cards
Testimonials

---

Hover Animation

Behavior:

Interactive elements must:

Lift slightly
Increase shadow
Animate smoothly

Movement:

translateY -4px

Duration:

250ms to 300ms

Apply to:

Product cards
Buttons
Navigation links

---

Stagger Animation

Behavior:

Multiple items should:

Appear sequentially
Use small delay increments

Delay Pattern:

First item:

0ms

Second item:

100ms

Third item:

200ms

Apply to:

Product grid
Testimonials
Card lists

---

Transition Settings

Use:

transition
duration-300
ease-out

Avoid:

duration longer than 500ms
abrupt motion
inconsistent timing

---

Performance Rules

Animations must:

Run smoothly
Not block rendering
Not cause layout shifts

Use:

transform
opacity

Avoid:

width animation
height animation
position animation

---

Consistency Rules

All animations must:

Use similar duration
Use similar movement distance
Use similar easing

Do not:

Mix animation styles
Use different speeds randomly
Animate everything at once