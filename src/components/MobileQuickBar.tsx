import { Phone, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0B0E]/95 backdrop-blur-md border-t border-white/10 px-3 py-2">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#D4AF37] hover:bg-[#E5CA64] active:scale-[0.98] text-black rounded-lg text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Call: (226) 700-1175</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#161821] hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold whitespace-nowrap border border-white/10"
        >
          <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}
