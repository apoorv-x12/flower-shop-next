# Product Detail Page

Purpose:

Show full details of a selected product and route customers directly to contact for ordering.

Route:

/products/[id]

Example:

/products/blush-garden-bouquet

---

Layout

1. Product Image

Display:

Large product image.

Use:

w-full
h-64
object-cover
rounded-xl

---

2. Product Information

Display:

Product name
Price
Description

Example:

Rose Harmony Bouquet
₹899
Fresh red roses arranged beautifully for celebrations.

Typography:

Product name:

text-2xl
font-semibold

Price:

text-pink-500
font-medium

Description:

text-gray-600

---

3. Order Button

Display:

Order Now

Behavior:

Navigate to /contact with selected product in query string.

Example:

/contact?product=blush-garden-bouquet

Button Style:

bg-pink-500
text-white
px-5 py-2
rounded-lg

Hover:

bg-pink-600

---

Responsive

Layout stacks vertically on mobile.

No horizontal scroll.
