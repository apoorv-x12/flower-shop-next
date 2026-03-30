import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProductById, products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Petal & Stem",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | Petal & Stem`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <Reveal as="section" className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link href="/products" className="mb-8 inline-flex items-center gap-2 text-[#c4617e] hover:text-[#9b4a62] transition-colors">
          ← Back to Products
        </Link>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal delay={100}>
            <div className="relative">
              <Image
                src={product.image}
                alt={product.alt}
                width={1280}
                height={720}
                className="h-auto w-full rounded-3xl object-cover shadow-2xl transition duration-300 ease-out hover:shadow-3xl"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#e8bcd1] opacity-30 blur-3xl" />
            </div>
          </Reveal>

          <Reveal delay={200} className="flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
                Premium Arrangement
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                {product.name}
              </h1>
            </div>
            
            <p className="text-2xl font-bold text-[#c4617e]">{product.price}</p>
            
            <p className="text-lg leading-8 text-gray-700">{product.description}</p>
            
            <div className="space-y-3 pt-4">
              <h3 className="font-semibold text-gray-900">Why choose this arrangement?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Hand-selected fresh blooms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Expert floral design
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Available for same-day delivery
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Beautiful eco-friendly packaging
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-6">
              <Link
                href={`/contact?product=${product.id}`}
                className="flex-1 rounded-full bg-gradient-to-r from-[#c4617e] to-[#9b4a62] px-8 py-4 font-semibold text-white text-center transition duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
              >
                Order Now
              </Link>
              <button className="rounded-full border-2 border-[#c4617e] px-8 py-4 font-semibold text-[#c4617e] transition duration-300 ease-out hover:bg-[#e8bcd1] hover:bg-opacity-20">
                ❤️ Save
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}