import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-gradient-to-b from-white via-gray-50 to-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-center sm:text-left">
          <Link
            href="/"
            className="inline-block font-heading text-4xl font-bold leading-none tracking-tight text-gray-900 transition duration-300 ease-out hover:-translate-y-1"
          >
            <span className="bg-gradient-to-r from-[#c4617e] via-[#9b4a62] to-[#8b6f47] bg-clip-text text-transparent">
              🌸 Petal & Stem
            </span>
          </Link>
         
        </div>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-6 sm:justify-end"
        >
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-gray-700 uppercase transition duration-300 ease-out hover:text-[#c4617e]"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-semibold tracking-wide text-gray-700 uppercase transition duration-300 ease-out hover:text-[#c4617e]"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold tracking-wide text-gray-700 uppercase transition duration-300 ease-out hover:text-[#c4617e]"
          >
            Contact
          </Link>
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-r from-[#c4617e] to-[#9b4a62] px-6 py-2.5 font-semibold text-white transition duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}