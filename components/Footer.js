export default function Footer() {
  const currentYear = new Date().getFullYear();
  const siteBasePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    process.env.NEXT_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/flower-shop-next" : "");

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-[#c4617e] to-[#8b6f47] bg-clip-text text-transparent">
              🌸 Petal & Stem
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fresh flowers, thoughtful design, and dependable daily delivery for every occasion.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-[#c4617e] transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#c4617e] transition-colors">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#c4617e] transition-colors">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${siteBasePath}/products/`} className="text-gray-600 hover:text-[#c4617e] transition-colors">
                  Shop Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#c4617e] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href={`${siteBasePath}/contact/`} className="text-gray-600 hover:text-[#c4617e] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#c4617e] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-gray-900">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 hello@petalandstem.com</p>
              <p>📍 123 Flower Street, Garden City, CA 90210</p>
              <p>⏰ Mon-Sat: 9am - 6pm | Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Petal & Stem. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#c4617e] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c4617e] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#c4617e] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}