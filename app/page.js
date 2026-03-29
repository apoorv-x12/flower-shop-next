import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const testimonials = [
  {
    name: "Anita Sharma",
    review: "Beautiful flowers and fast delivery. Highly recommended.",
  },
  {
    name: "Riya Kapoor",
    review: "The bouquet looked exactly like the photos and arrived right on time.",
  },
  {
    name: "Meera Patel",
    review: "Elegant arrangements and very helpful team for custom requests.",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Reveal as="section" className="relative overflow-hidden py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pink-rose.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="space-y-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-300">
              Daily Flower Delivery
            </p>
            <h1 className="font-heading mx-auto max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl">
              Fresh Flowers for Every Occasion
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-200">
              Beautiful floral arrangements delivered daily.
            </p>
            <div className="flex justify-center">
              <Link
                href="/products"
                className="rounded-lg bg-pink-500 px-5 py-2 font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-pink-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="featured" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 space-y-3 text-center">
            <h2 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
              Featured Products
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600">
              Thoughtfully arranged bouquets and floral gifts designed to feel polished, warm, and easy to send.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 100}>
                <ProductCard
                  product={product}
                  href={`/products/${product.id}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="about" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal delay={100} className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-500">
                Our Story
              </p>
              <h2 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
                About Petal &amp; Stem
              </h2>
              <p className="text-base leading-8 text-gray-600">
                Petal &amp; Stem is a neighborhood flower shop creating fresh, elegant arrangements for birthdays, anniversaries, and everyday gifting.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Fresh Daily", "Custom Arrangements", "Same-Day Delivery"].map((tag) => (
                  <span key={tag} className="rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-sm font-medium text-pink-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Image
                src="/bouquet-pink-rose.jpg"
                alt="Freshly wrapped pink rose bouquet from Petal and Stem"
                width={640}
                height={640}
                className="h-80 w-full rounded-2xl object-cover shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
              What Our Customers Say
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100}>
                <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="mt-3 text-base leading-8 text-gray-600">
                    {testimonial.review}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
