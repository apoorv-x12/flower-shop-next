# Products Page

Purpose:

Display available flower arrangements and allow users to search products within the listing.

---

1. Page Header

Display:

Title: Our Products
Description: Browse our available flower arrangements for gifting, celebrations, and everyday moments.

Spacing:

py-16

Container:

max-w-6xl mx-auto px-6

---

2. Search Inside Product Listing

Purpose:

Allow users to quickly find products by name.

Behavior:

User types text
Products matching the product name are shown
No backend required

Search input style:

w-full
max-w-md
rounded-lg
border border-gray-200
px-4 py-2
mb-6

Placeholder:

Search products...

---

3. Product Grid

Display:

6 product cards

Layout:

grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6

Each card contains:

Image
Product name
Price
Short description

Card behavior:

Entire card is clickable
Navigates to /products/[id]

Example:

/products/blush-garden-bouquet

---

Footer:

Footer remains visible at bottom via app layout shell.
