import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Copy, Check } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="location" className="py-20 bg-[#090A0D] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            LOCATION & HOURS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location & Contact Card */}
          <div className="bg-[#12141A] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Shop Address</span>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {BUSINESS_INFO.street}
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  {BUSINESS_INFO.cityStateZip}
                </p>
                <p className="text-xs text-neutral-500 mt-2">
                  Free client parking available in front of the shop.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-md transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-md transition-colors shadow-md shadow-[#D4AF37]/15"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Directly: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-[#12141A] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Hours of Operation</span>
              </div>

              <div className="divide-y divide-white/5">
                {BUSINESS_INFO.hours.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-sm">
                    <span className="text-neutral-300 font-medium">{item.day}</span>
                    <span className="font-mono text-[#D4AF37] font-semibold tabular-nums">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-neutral-400">
              Walk-ins welcome all day. Call ahead to check barber availability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
