import { Phone, MapPin, Globe } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060709] border-t border-neutral-900 text-neutral-400 text-xs py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 text-center md:text-left">
          {/* Brand */}
          <div>
            <span className="font-display text-lg font-bold tracking-wider text-white block">
              LEVEL UP <span className="text-[#D4AF37]">BARBERSHOP</span>
            </span>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-neutral-400 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Direct Call & Website */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#E5CA64] text-black font-bold uppercase rounded-md text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.websiteUrl}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.website}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px] text-center sm:text-left">
          <div>
            © {currentYear} Level Up Barbershop. 275 Wharncliffe Rd N, London, ON.
          </div>
          <div>
            Walk-ins & Appointments Welcome
          </div>
        </div>
      </div>
    </footer>
  );
}
