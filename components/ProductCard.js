import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, href }) {
  const cardContent = (
    <>
      <Image
        src={product.image}
        alt={product.alt}
        width={640}
        height={384}
        className="h-48 w-full rounded-lg object-cover transition duration-300 ease-out group-hover:scale-105"
      />

      <div className="space-y-2">
        <h3 className="font-heading text-3xl font-semibold leading-tight text-gray-900">
          {product.name}
        </h3>
        <p className="max-w-prose text-[15px] leading-7 text-gray-600">{product.description}</p>
      </div>

      <p className="mt-auto text-base font-semibold tracking-wide text-gray-900">{product.price}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex h-full flex-col space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
      {cardContent}
    </article>
  );
}