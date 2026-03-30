"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactForm({ selectedProduct, defaultMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: defaultMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Formspree for form submission (free tier available)
      // Replace 'YOUR_FORM_ID' with your actual Formspree ID
      // Sign up at formspree.io to get your form ID
      
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "✓ Message sent! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          message: selectedProduct
            ? `Hi, I would like to order ${selectedProduct.name} (${selectedProduct.price}). Please share delivery options.`
            : "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "✗ Failed to send. Please try again or email us directly at hello@petalandstem.com",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "✗ Error sending message. Please email us directly at hello@petalandstem.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Reveal
      as="form"
      onSubmit={handleSubmit}
      className="flex-1 space-y-6 rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8"
      delay={200}
    >
      <div className="space-y-2">
        <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900">
          Send a Message
        </h2>
        <p className="text-base leading-7 text-gray-600">
          Share your request and we&apos;ll follow up promptly.
        </p>
        {selectedProduct ? (
          <p className="inline-flex rounded-full border-2 border-[#e8bcd1] bg-[#f5f3f0] px-4 py-2 text-sm font-medium text-[#c4617e]">
            Selected: {selectedProduct.name}
          </p>
        ) : null}
      </div>

      {submitStatus && (
        <div
          className={`rounded-xl p-4 text-sm font-medium transition-all duration-300 ${
            submitStatus.type === "success"
              ? "border border-green-200 bg-green-50 text-green-700"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold text-gray-900">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-[#c4617e] focus:ring-2 focus:ring-[#e8bcd1] focus:ring-opacity-50"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-900">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-[#c4617e] focus:ring-2 focus:ring-[#e8bcd1] focus:ring-opacity-50"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition duration-300 ease-out focus:border-[#c4617e] focus:ring-2 focus:ring-[#e8bcd1] focus:ring-opacity-50 resize-none"
          placeholder="Tell us about your order, event, or delivery question"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-[#c4617e] to-[#9b4a62] px-6 py-3.5 font-semibold text-white transition duration-300 ease-out hover:shadow-lg hover:-translate-y-1 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </Reveal>
  );
}
