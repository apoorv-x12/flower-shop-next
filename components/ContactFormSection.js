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
    <Reveal className="flex-1 space-y-6 rounded-3xl border-2 border-gray-200 bg-white p-8 flex flex-col justify-center items-center text-center" delay={200}>
      <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 mb-2">
        Send us a message
      </h2>
      <p className="text-gray-600 mb-6">
        {selectedProduct 
          ? `Interested in the ${selectedProduct.name}? We'll be happy to help you complete your order!`
          : "We prefer WhatsApp for the fastest response and easiest photo sharing of custom designs."}
      </p>
      <a 
        href="https://wa.me/917798316990" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-8 rounded-full transition-colors shadow-md hover:shadow-lg text-lg"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        Contact on WhatsApp
      </a>
    </Reveal>
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
