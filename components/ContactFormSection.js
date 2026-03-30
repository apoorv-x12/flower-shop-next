"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getProductById } from "@/data/products";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

function FormContent() {
  const searchParams = useSearchParams();
  const selectedProductId = searchParams?.get("product");
  const selectedProduct = selectedProductId
    ? getProductById(selectedProductId)
    : null;

  const defaultMessage = selectedProduct
    ? `Hi, I would like to order ${selectedProduct.name} (${selectedProduct.price}). Please share delivery options.`
    : "";

  return (
    <ContactForm selectedProduct={selectedProduct} defaultMessage={defaultMessage} />
  );
}

function FormFallback() {
  return (
    <Reveal className="flex-1 space-y-6 rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8" delay={200}>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded w-full"></div>
      </div>
    </Reveal>
  );
}

export default function ContactFormSection() {
  return (
    <Suspense fallback={<FormFallback />}>
      <FormContent />
    </Suspense>
  );
}
