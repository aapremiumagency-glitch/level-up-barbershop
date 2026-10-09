import { Sparkles } from "lucide-react";
import shaveImg from "../assets/images/barber_shave_ritual_1791418359699.jpg";
import toolsImg from "../assets/images/barber_tools_detail_1791418351246.jpg";
import craftImg from "../assets/images/hero_barber_craft_1791418333400.jpg";

export default function ExperienceSection() {
  const images = [
    {
      src: craftImg,
      alt: "Master barber shaping precision fade haircut",
      title: "Master Barbering",
      subtitle: "Tailored head-shape geometry & precision fades",
    },
    {
      src: shaveImg,
      alt: "Hot towel straight razor shave",
      title: "Hot Towel Shave",
      subtitle: "Classic straight razor & warm essential steam",
    },
    {
      src: toolsImg,
      alt: "Precision barber tools and clippers",
      title: "Precision Detailing",
      subtitle: "Zero-gap blades & surgically sharp perimeter lines",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#08090C] border-t border-neutral-900 scroll-mt-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-luxury-pattern opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Studio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            CRAFTSMANSHIP & ATMOSPHERE
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            A look inside our 275 Wharncliffe Rd N studio.
          </p>
        </div>

        {/* 3 Clean Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl overflow-hidden group h-88 flex flex-col justify-end p-6 relative shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-[#090A0E]/60 to-transparent" />

              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
