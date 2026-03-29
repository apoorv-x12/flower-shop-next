import { getProductById } from "@/data/products";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact Us | Petal & Stem",
  description:
    "Contact the shop for orders, delivery questions, and custom floral requests.",
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const selectedProductId = resolvedSearchParams?.product;
  const selectedProduct = selectedProductId
    ? getProductById(selectedProductId)
    : null;

  const defaultMessage = selectedProduct
    ? `Hi, I would like to order ${selectedProduct.name} (${selectedProduct.price}). Please share delivery options.`
    : "";

  return (
    <>
      <Reveal as="section" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="font-heading text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="text-base leading-8 text-gray-600">
              We&apos;re here to help with orders, delivery questions, and custom floral requests.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gray-50 py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
          <Reveal className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm" delay={100}>
            <div className="space-y-2">
              <h2 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
                Visit or Reach Us
              </h2>
              <p className="text-base leading-8 text-gray-600">
                Stop by the shop or get in touch for same-day delivery help and custom arrangements.
              </p>
            </div>

            <div className="space-y-4 text-base text-gray-600">
              <div className="space-y-1">
                <p className="font-medium text-gray-900">Address</p>
                <p>214 Bloom Street, Brooklyn, NY 11201</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900">Phone</p>
                <p>(718) 555-0147</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900">Email</p>
                <p>hello@petalandstem.com</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900">Business Hours</p>
                <p>Monday to Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </Reveal>

          <Reveal as="form" className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm" delay={200}>
            <div className="space-y-2">
              <h2 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
                Send a Message
              </h2>
              <p className="text-base leading-8 text-gray-600">
                Share your request and we&apos;ll follow up as soon as possible.
              </p>
              {selectedProduct ? (
                <p className="inline-flex rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  Selected item: {selectedProduct.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-pink-400"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-pink-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-pink-400"
                placeholder="Tell us about your order, event, or delivery question"
                defaultValue={defaultMessage}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-pink-500 px-5 py-2 font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-pink-600"
            >
              Send Message
            </button>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
}