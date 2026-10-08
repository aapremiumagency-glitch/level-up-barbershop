import { Phone, Clock, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";
import shaveImg from "../assets/images/barber_shave_ritual_1791418359699.jpg";
import toolsImg from "../assets/images/barber_tools_detail_1791418351246.jpg";
import heroImg from "../assets/images/hero_barber_craft_1791418333400.jpg";
import loungeImg from "../assets/images/barber_interior_lounge_1791418341427.jpg";

export default function SignatureLookbook() {
  const styles = [
    {
      title: "BALD FADE",
      price: "$24",
      duration: "35 min",
      image: heroImg,
      badge: "Most Requested",
      desc: "Zero-gap foil shaver transition from skin into seamless length on top with sharp temple detailing.",
    },
    {
      title: "HAIRCUT AND SHAVE",
      price: "$37",
      duration: "55 min",
      image: shaveImg,
      badge: "Signature Combo",
      desc: "Full bespoke haircut paired with authentic steamed hot towel and straight-razor beard sculpt.",
    },
    {
      title: "SHAVE(BEARD)",
      price: "$20",
      duration: "25 min",
      image: toolsImg,
      badge: "Master Detailing",
      desc: "Crisp straight-razor cheek line, clean neck taper, warm lather and conditioning beard oil finish.",
    },
    {
      title: "REGULAR CUT",
      price: "$22",
      duration: "30 min",
      image: loungeImg,
      badge: "Classic Choice",
      desc: "Tailored shear and clipper cut shaped to your head profile, completed with razor neck cleanup.",
    },
  ];

  return (
    <section id="styles" className="py-24 bg-[#08090C] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Signature Barbering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              MOST POPULAR STYLES
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-lg">
              Explore the signature cuts and treatments our clients book every week at 275 Wharncliffe Rd N.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-md transition-all shrink-0 self-start md:self-auto"
          >
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Call to Book: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#12141A] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              {/* Image Preview with Badge */}
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-1 rounded text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase">
                  {item.badge}
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-xl font-bold text-white bg-black/70 px-2.5 py-0.5 rounded border border-white/10 tabular-nums">
                  {item.price}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1 mb-3">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{item.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Call Button */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded transition-colors"
                  >
                    <Phone className="w-3 h-3 stroke-[2.5]" />
                    <span>Book This Style</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
