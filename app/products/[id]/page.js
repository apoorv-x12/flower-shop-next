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
    <Reveal as="section" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:grid-cols-2">
          <Reveal delay={100}>
            <Image
              src={product.image}
              alt={product.alt}
              width={1280}
              height={720}
              className="h-64 w-full rounded-xl object-cover transition duration-300 ease-out hover:scale-105"
            />
          </Reveal>

          <Reveal delay={200} className="flex flex-col justify-center space-y-4">
            <h1 className="font-heading text-4xl font-semibold leading-tight text-gray-900">
              {product.name}
            </h1>
            <p className="text-xl font-medium text-pink-500">{product.price}</p>
            <p className="text-base leading-8 text-gray-600">{product.description}</p>
            <div>
              <Link
                href={`/contact?product=${product.id}`}
                className="inline-flex rounded-lg bg-pink-500 px-5 py-2 font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-pink-600"
              >
                Order Now
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}