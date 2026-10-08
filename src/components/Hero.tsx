import { Phone, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";
import heroImg from "../assets/images/hero_barber_craft_1791418333400.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Layered Contrast Scrims */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroImg}
          alt="Level Up Barbershop London ON"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#0A0B0E]/90 to-[#0A0B0E]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#0A0B0E]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 text-center sm:text-left">
        <div className="max-w-2xl">
          {/* Quick Location Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>275 Wharncliffe Rd N · London, ON</span>
          </div>

          {/* Bold Punchy Headline */}
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            LEVEL UP <br />
            <span className="text-gold-gradient">BARBERSHOP</span>
          </h1>

          {/* Short 1-sentence description */}
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            London's premier destination for precision fades, beard sculpting, and hot towel straight-razor shaves.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] active:scale-[0.98] rounded-md transition-all shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call to Book: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-all whitespace-nowrap"
            >
              <span>View Prices</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>

          {/* Quick Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-neutral-400">
            <span>Walk-Ins Welcome</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Free On-Site Parking</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Open 7 Days a Week</span>
          </div>
        </div>
      </div>
    </section>
  );
}
