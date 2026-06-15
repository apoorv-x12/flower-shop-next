import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingBackground from "@/components/FloatingBackground";
import PageLoader from "@/components/PageLoader";
import { CartProvider } from "@/components/CartContext";
import CartSidebar from "@/components/CartSidebar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Blossom Hug — Handcrafted Flower Delivery",
  description: "Handcrafted flowers and chenille arrangements for every occasion. Pan India delivery, custom orders.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans" style={{ background: "var(--cream)", color: "var(--dark-text)" }}>
        <CartProvider>
          <PageLoader />
          <FloatingBackground />
          <div className="flex min-h-screen flex-col relative z-10">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
