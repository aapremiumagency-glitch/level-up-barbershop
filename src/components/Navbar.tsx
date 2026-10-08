import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services & Pricing", href: "#pricing" },
    { name: "Popular Cuts", href: "#styles" },
    { name: "Reviews", href: "#reviews" },
    { name: "Studio & Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0B0E]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5"
            : "bg-gradient-to-b from-[#0A0B0E]/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <a
              href="#"
              className="font-display text-lg sm:text-xl font-bold tracking-wider text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap"
            >
              LEVEL UP <span className="text-[#D4AF37]">BARBERSHOP</span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#D4AF37] transition-colors tracking-wide py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Book Action */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#D4AF37]/20 whitespace-nowrap"
                title="Call to book"
              >
                <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#0A0B0E]/95 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-8"
        >
          <div className="space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-medium text-neutral-200 hover:text-[#D4AF37] py-3 border-b border-neutral-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-800">
            <p className="text-xs text-neutral-400">
              {BUSINESS_INFO.address}
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] rounded-md"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
