Follow a clean modern design system.

Typography stack in current implementation:

Primary font: Inter
Monospace: Geist Mono

Headings use the same Inter family through the font-heading token.

Use these colors:

Primary: pink-500 (#ec4899)  
Accent: pink-400  
Background: white  
Section background: gray-50  
Text: gray-900  
Muted text: gray-600  
Border: gray-200

---

Layout Rules

Use consistent spacing:

section spacing: py-16  
container: max-w-6xl mx-auto px-6  
card spacing: p-6  
grid gap: gap-6

Keep layout centered.

Avoid fixed widths.

Use vertical rhythm between sections.

---

Typography Rules

Use clear hierarchy.

Hero title:

text-5xl (sm:text-6xl)
font-bold
leading-tight

Section title:

text-4xl
font-semibold
leading-tight

Body text:

text-base
leading-8

Muted text:

text-gray-600

Limit line width for readability.

---

Card Rules

All cards must:

Use rounded-xl  
Use border border-gray-200  
Use shadow-sm  
Use padding p-6  
Use vertical spacing between elements

Each product card contains:

Image  
Title  
Description  
Price

Card behavior:

Hover:

shadow-md  
transition duration-200

Cards in listing pages are fully clickable links to /products/[id].

---

Image Rules

Images must:

Have consistent height  
Fill container width  
Maintain aspect ratio  
Not stretch

Use:

object-cover

Recommended height:

h-48

All images must include:

alt text

Detail page hero image uses h-64.

---

Button Rules

Buttons must:

Use rounded-lg  
Use padding px-5 py-2  
Use font-medium  
Use transition

Primary button:

bg-pink-500  
text-white

Hover:

bg-pink-600

---

Section Rules

Each section must:

Use py-16  
Have clear title  
Have consistent spacing

Alternate background:

white  
gray-50

---

Responsive Rules

Mobile first.

Use Tailwind grid:

grid-cols-1  
sm:grid-cols-2  
lg:grid-cols-3

Rules:

No horizontal scroll  
No fixed widths  
Content must stack vertically  
Buttons must remain clickable

Test at:

375px  
768px  
Desktop

---

Footer Rules

Footer must:

Stay at bottom  
Use small text  
Have top border

Use:

border-t  
py-6  
text-sm  
text-gray-600

Footer brand label uses a larger heading style while keeping supporting copy at text-sm.

---

Design Philosophy

Keep design:

Minimal  
Readable  
Professional  
Consistent

Avoid:

Overly complex layouts  
Heavy animations  
Dark backgrounds  
Crowded sections
