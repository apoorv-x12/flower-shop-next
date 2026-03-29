# Home Page

Purpose:

Introduce the flower shop and guide users to browse products.

---

1. Hero Section

Display:

Title
Subtitle
Primary button

Title:

Fresh Flowers for Every Occasion

Subtitle:

Beautiful floral arrangements delivered daily.

Button:

Shop Now

Behavior:

Button navigates to /products.

Spacing:

py-16

---

2. Featured Products Section

Display:

Section title
Short description
Grid of product cards

Grid:

3 columns desktop
1 column mobile

Each card:

Image
Product name
Short description
Price

Card click behavior:

Navigate to /products/[id]

---

3. About Section

Display:

Short paragraph describing the business.

Text used:

Petal & Stem is a neighborhood flower shop creating fresh, elegant arrangements for birthdays, anniversaries, and everyday gifting.

---

4. Testimonials Section

Purpose:

Show customer feedback to build trust.

Display:

Section title: What Our Customers Say

Spacing:

py-16

Layout:

3 testimonial cards.

Grid:

grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

Spacing:

gap-6

Each card includes:

Customer name
Short review

Current content examples:

Anita Sharma
Beautiful flowers and fast delivery. Highly recommended.

Riya Kapoor
The bouquet looked exactly like the photos and arrived right on time.

Meera Patel
Elegant arrangements and very helpful team for custom requests.

Card Style:

rounded-xl
border border-gray-200
shadow-sm
p-6
transition duration-200
hover:shadow-md

Responsive:

Cards stack vertically on mobile.
No horizontal scroll.
