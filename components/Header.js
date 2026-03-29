import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-center sm:text-left">
          <Link
            href="/"
            className="inline-block font-heading text-4xl font-semibold leading-none tracking-tight text-gray-900 transition duration-300 ease-out hover:-translate-y-1 hover:text-pink-500"
          >
            Petal & Stem
          </Link>
         
        </div>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"
        >
          <Link
            href="/"
            className="inline-block text-sm font-semibold tracking-[0.12em] text-gray-600 uppercase transition duration-300 ease-out hover:-translate-y-1 hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="inline-block text-sm font-semibold tracking-[0.12em] text-gray-600 uppercase transition duration-300 ease-out hover:-translate-y-1 hover:text-pink-500"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="inline-block text-sm font-semibold tracking-[0.12em] text-gray-600 uppercase transition duration-300 ease-out hover:-translate-y-1 hover:text-pink-500"
          >
            Contact
          </Link>
          <Link
            href="/products"
            className="rounded-lg bg-pink-500 px-5 py-2 font-medium text-white transition duration-300 ease-out hover:-translate-y-1 hover:bg-pink-600"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}