"use client";

import Reveal from "@/components/Reveal";
import ContactFormSection from "@/components/ContactFormSection";

export default function ContactPageClient() {
  return (
    <>
      <Reveal as="section" className="bg-gradient-to-br from-white via-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#c4617e]">
              Get in Touch
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              We&apos;re here to help with orders, delivery questions, and custom floral requests. Reach out anytime!
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 lg:flex-row">
          {/* Contact Info */}
          <Reveal className="flex-1 space-y-8 rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8" delay={100}>
            <div className="space-y-2">
              <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900">
                Contact Information
              </h2>
              <p className="text-base leading-7 text-gray-600">
                Stop by the shop or reach out for same-day delivery and custom arrangements.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📍 Address</p>
                <p className="text-gray-700">214 Bloom Street, Brooklyn, NY 11201</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📞 Phone</p>
                <p className="text-gray-700">(718) 555-0147</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">📧 Email</p>
                <p className="text-gray-700">hello@petalandstem.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c4617e]">⏰ Hours</p>
                <p className="text-gray-700">Monday to Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form Section with useSearchParams */}
          <ContactFormSection />
        </div>
      </Reveal>
    </>
  );
}
