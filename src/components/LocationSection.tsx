import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Copy, Check, Sparkles, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(16);

  const appleMapsUrl = "https://maps.apple.com/?q=275+Wharncliffe+Rd+N,+London,+ON+N6H+2C1";

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
    <section id="location" className="py-24 bg-[#07080B] border-t border-neutral-900 scroll-mt-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-luxury-pattern opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            LOCATION & HOURS
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Intersection of Wharncliffe Rd N & Oxford St W in London, Ontario.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Location & Contact Card */}
          <div className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Shop Address</span>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {BUSINESS_INFO.street}
                </p>
                <p className="text-sm text-neutral-300 mt-1 font-medium">
                  {BUSINESS_INFO.cityStateZip}
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  Oxford Wharncliffe Centre plaza · Free front customer parking.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-lg transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-lg transition-colors cursor-pointer"
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
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-lg transition-colors shadow-md shadow-[#D4AF37]/15"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Directly: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Hours of Operation</span>
              </div>

              <div className="divide-y divide-white/5">
                {BUSINESS_INFO.hours.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between text-sm">
                    <span className="text-neutral-300 font-medium">{item.day}</span>
                    <span className="font-mono text-[#D4AF37] font-semibold tabular-nums text-sm sm:text-base">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400 leading-relaxed">
              Walk-ins welcome all day. Call ahead to check immediate barber chair availability.
            </div>
          </div>
        </div>

        {/* Official Google Maps Card */}
        <div className="luxury-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0E1017]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Google Maps · 275 Wharncliffe Rd N
                </span>
                <span className="text-xs text-neutral-400 ml-2 hidden sm:inline">
                  (Intersection of Oxford St W & Wharncliffe Rd N)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom Buttons */}
              <div className="flex items-center gap-1 bg-black/50 border border-white/10 rounded-lg p-0.5 mr-1">
                <button
                  type="button"
                  onClick={() => setZoom((prev) => Math.max(14, prev - 1))}
                  title="Zoom Out"
                  className="px-2 py-1 text-xs text-neutral-300 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                >
                  -
                </button>
                <span className="text-[11px] font-mono text-neutral-400 px-1">
                  Zoom {zoom}
                </span>
                <button
                  type="button"
                  onClick={() => setZoom((prev) => Math.min(18, prev + 1))}
                  title="Zoom In"
                  className="px-2 py-1 text-xs text-neutral-300 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                >
                  +
                </button>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-md transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-md transition-colors"
              >
                <span>Apple Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] bg-[#0A0C12]">
            <iframe
              key={zoom}
              title="Level Up Barbershop Google Maps Location"
              src={`https://maps.google.com/maps?q=275+Wharncliffe+Rd+N,+London,+ON+N6H+2C1&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
