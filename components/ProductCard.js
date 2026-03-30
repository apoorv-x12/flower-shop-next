import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, href }) {
  const cardContent = (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.alt}
          width={640}
          height={384}
          className="h-48 w-full object-cover transition duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
      </div>

      <div className="space-y-2 flex-1">
        <h3 className="font-heading text-2xl font-semibold leading-tight text-gray-900">
          {product.name}
        </h3>
        <p className="max-w-prose text-sm leading-6 text-gray-600">{product.description}</p>
      </div>

      <div className="flex items-center justify-between pt-4">
        <p className="text-lg font-semibold text-[#c4617e]">{product.price}</p>
        <span className="inline-block rounded-full bg-[#e8bcd1] px-3 py-1 text-xs font-medium text-[#9b4a62]">
          View Details
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex h-full flex-col space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
      {cardContent}
    </article>
  );
}