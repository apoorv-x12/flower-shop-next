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
  const publicBasePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    process.env.NEXT_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/flower-shop-next" : "");

  return (
    <>
      <Reveal as="section" className="relative overflow-hidden py-44 bg-gradient-to-b from-white via-[#f5f3f0] to-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${publicBasePath}/pink-rose.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="space-y-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e8bcd1]">
              ✿ Daily Flower Delivery ✿
            </p>
            <h1 className="font-heading mx-auto max-w-4xl text-5xl md:text-7xl font-bold leading-tight text-white">
              Blooms That Speak Volumes
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-100">
              Expertly arranged fresh flowers for every moment that matters. Same-day delivery available.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/products"
                className="rounded-full bg-gradient-to-r from-[#c4617e] to-[#9b4a62] px-8 py-3.5 font-semibold text-white transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-1"
              >
                Explore Flowers
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white transition duration-300 ease-out hover:bg-white hover:text-[#c4617e]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="featured" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-16 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
              Curated Collection
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Our Signature Arrangements
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600">
              Each bouquet is carefully crafted by our expert florists using the freshest blooms, designed to bring beauty and joy.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      <Reveal as="section" id="about" className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal delay={100} className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
                  Our Story
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  About Petal &amp; Stem
                </h2>
              </div>
              <p className="text-lg leading-8 text-gray-600">
                For over a decade, we've been passionate about creating stunning floral arrangements that brighten lives. Our expert florists hand-select every bloom to ensure freshness and beauty in every arrangement.
              </p>
              <div className="flex flex-wrap gap-3">
                {["🌿 Fresh Daily", "🎨 Custom Designs", "🚚 Same-Day Delivery"].map((tag) => (
                  <span key={tag} className="rounded-full border-2 border-[#e8bcd1] bg-white px-5 py-2.5 text-sm font-semibold text-[#c4617e]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="inline-block rounded-full bg-[#c4617e] px-8 py-3 font-semibold text-white transition duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
                >
                  Shop Now →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative">
                <Image
                  src={`${publicBasePath}/bouquet-pink-rose.jpg`}
                  alt="Freshly wrapped pink rose bouquet from Petal and Stem"
                  width={640}
                  height={640}
                  className="h-96 w-full rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#e8bcd1] opacity-40 blur-3xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
              Customer Love
            </p>
            <h2 className="font-heading mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Loved by Thousands
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100}>
                <article className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-7 shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#c4617e]">⭐</span>
                    ))}
                  </div>
                  <p className="mb-6 text-base leading-8 text-gray-700 italic">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#c4617e] to-[#8b6f47]" />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">Verified Customer</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
