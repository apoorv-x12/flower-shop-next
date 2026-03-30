import { Suspense } from "react";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "Contact Us | Petal & Stem",
  description:
    "Contact the shop for orders, delivery questions, and custom floral requests.",
};

function ContactPageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white py-20">
      <div className="text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageLoading />}>
      <ContactPageClient />
    </Suspense>
  );
}