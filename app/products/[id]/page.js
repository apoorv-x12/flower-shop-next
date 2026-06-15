import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProductById, products } from "@/data/products";
import AddToCartDetailButton from "@/components/AddToCartDetailButton";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Blossom Hug",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | Blossom Hug`,
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
              {/* Blurred backdrop */}
              <Image
                src={product.image}
                alt="Backdrop"
                fill
                className="rounded-3xl object-cover"
                style={{ filter: "blur(40px)", transform: "scale(1.1)", opacity: 0.3, zIndex: 0 }}
              />
              {/* Main image */}
              <Image
                src={product.image}
                alt={product.alt}
                width={1280}
                height={720}
                className="relative z-10 h-auto w-full rounded-3xl object-contain shadow-2xl transition duration-300 ease-out hover:shadow-3xl"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#e8bcd1] opacity-30 blur-3xl" />
            </div>
          </Reveal>

          <Reveal delay={200} className="flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <span className="pill" style={{ marginBottom: "8px" }}>
                Premium Arrangement
              </span>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, margin: "0" }}>
                {product.name}
              </h1>
            </div>
            
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--rose-dark)" }}>{String(product.price).replace("$", "₹")}</p>
            
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "var(--mid-text)", lineHeight: 1.75 }}>{product.description}</p>
            
            <div className="space-y-3 pt-4">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--dark-text)" }}>Why choose this arrangement?</h3>
              <ul className="space-y-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "var(--mid-text)" }}>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Hand-selected fresh blooms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Expert floral design
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Available for Pan India delivery
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#c4617e]">✓</span> Beautiful eco-friendly packaging
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-6 flex-wrap">
              <AddToCartDetailButton product={product} />
              
              <a
                href={`https://wa.me/917798316990?text=Hi! I'm interested in ordering the ${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#25D366", color: "#ffffff",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem",
                  padding: "14px 32px", borderRadius: "999px",
                  textDecoration: "none", transition: "all 0.3s ease",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
                }}
                className="hover:-translate-y-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
              </a>
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