import { Phone, Calendar, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#090A0D] to-[#050608] border-t border-neutral-900 relative overflow-hidden">
      {/* Background Gold Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-3">
          Level Up Barbershop · London, ON
        </span>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          EXPERIENCE THE LEVEL UP STANDARD
        </h2>

        <p className="mt-4 text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Walk in today or place a 10-second call to lock in your chair with our master barbers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#E5CA64] hover:from-[#E5CA64] hover:to-[#F3E5AB] active:scale-[0.98] rounded-md transition-all shadow-xl shadow-[#D4AF37]/20 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Call to Book: {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider text-neutral-200 hover:text-white bg-[#14161F] hover:bg-neutral-800 border border-neutral-700 rounded-md transition-all whitespace-nowrap"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Get Directions</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Open 7 Days a Week</span>
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>275 Wharncliffe Rd N</span>
        </div>
      </div>
    </section>
  );
}
