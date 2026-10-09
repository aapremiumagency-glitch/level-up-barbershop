import { Phone, ArrowRight, MapPin, Clock, Star, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";
import loungeImg from "../assets/images/barber_interior_lounge_1791418341427.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#07080B]">
      {/* Background Image: Clearly visible luxury barbershop lounge interior */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={loungeImg}
          alt="Level Up Barbershop interior lounge with leather styling chairs and backlit mirrors"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] scale-100"
        />

        {/* Measured filmic contrast gradient allowing the barbershop interior to shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B]/95 via-[#07080B]/75 to-[#07080B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-transparent to-[#07080B]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080B]/60 via-transparent to-[#07080B]" />

        {/* Warm Golden Ambient Glow from the Shop Chandeliers */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle texture mesh */}
        <div className="absolute inset-0 bg-luxury-pattern opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Direct Booking (7 cols) */}
          <div className="lg:col-span-7 text-center sm:text-left">
            {/* Location & Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-200">
                275 Wharncliffe Rd N · London, ON
              </span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance] drop-shadow-xl">
              LEVEL UP <br />
              <span className="text-gold-gradient">BARBERSHOP</span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-neutral-200 font-normal leading-relaxed max-w-xl drop-shadow">
              London’s premier destination for precision fades, beard sculpting, and authentic hot towel straight-razor rituals.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#E5CA64] to-[#F3E5AB] hover:from-[#E5CA64] hover:to-[#FFF1C5] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-xl shadow-[#D4AF37]/30 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call to Book: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider text-neutral-200 hover:text-white bg-black/70 hover:bg-black/90 border border-white/20 hover:border-[#D4AF37]/60 rounded-lg transition-all backdrop-blur-md whitespace-nowrap shadow-lg"
              >
                <span>Full Price Menu</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Walk-Ins Welcome
              </span>
              <span aria-hidden="true" className="text-neutral-500">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Free On-Site Parking
              </span>
              <span aria-hidden="true" className="text-neutral-500">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Open 7 Days a Week
              </span>
            </div>
          </div>

          {/* Right Column: Floating Luxury Studio Card (5 cols) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="luxury-card rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden border border-white/15 shadow-2xl backdrop-blur-xl bg-[#0B0D13]/85">
              {/* Subtle gold aura top right */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                    Chairs Active Today
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <span className="font-mono text-xs font-bold text-white">4.9 / 5.0</span>
                </div>
              </div>

              {/* Quick Details */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Studio Address</div>
                    <div className="text-sm font-semibold text-white">275 Wharncliffe Rd N</div>
                    <div className="text-xs text-neutral-400">London, ON N6H 2C1</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Weekly Hours</div>
                    <div className="text-sm font-semibold text-white">Mon–Fri: 9AM – 7PM</div>
                    <div className="text-xs text-neutral-400">Sat: 9AM – 6PM · Sun: 10AM – 5PM</div>
                  </div>
                </div>
              </div>

              {/* Quick Call Box */}
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] hover:bg-[#E5CA64] text-black font-bold uppercase tracking-wider text-xs rounded-lg transition-all shadow-lg shadow-[#D4AF37]/25"
                >
                  <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Direct Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
