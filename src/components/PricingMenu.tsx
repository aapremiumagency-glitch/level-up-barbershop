import { Phone, Sparkles } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../data/barbershopData";

export default function PricingMenu() {
  return (
    <section id="pricing" className="py-24 bg-[#08090C] border-t border-neutral-900 scroll-mt-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-luxury-pattern opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Simple & direct */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Official Price List</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            SERVICES & PRICING
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Clean cuts and master grooming. Tap any service to book by phone.
          </p>
        </div>

        {/* Clean Luxury Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 transition-all duration-300 group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-[#F3E5AB] transition-colors truncate">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[10px] uppercase font-semibold text-[#D4AF37] tracking-wider shrink-0 bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {service.duration} · London Studio
                </div>
              </div>

              {/* Price & Fast Book Button */}
              <div className="flex items-center gap-3.5 shrink-0">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#D4AF37] tabular-nums">
                  ${service.price}
                </span>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center p-2.5 sm:px-3.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#D4AF37]/15 whitespace-nowrap"
                  title={`Call (226) 700-1175 to book ${service.name}`}
                >
                  <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span className="hidden sm:inline sm:ml-1.5">Book</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Note */}
        <div className="mt-12 text-center p-6 sm:p-8 luxury-card rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="font-display text-lg font-bold text-white">
              Ready for a fresh cut?
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Walk-ins welcome, or call ahead to save your chair.
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#E5CA64] hover:from-[#E5CA64] hover:to-[#F3E5AB] rounded-lg transition-all shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call to Book: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
