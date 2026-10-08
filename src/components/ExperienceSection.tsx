import shaveImg from "../assets/images/barber_shave_ritual_1791418359699.jpg";
import toolsImg from "../assets/images/barber_tools_detail_1791418351246.jpg";
import loungeImg from "../assets/images/barber_interior_lounge_1791418341427.jpg";

export default function ExperienceSection() {
  const images = [
    {
      src: shaveImg,
      alt: "Hot towel straight razor shave",
      title: "Hot Towel Shave",
      subtitle: "Classic straight razor & warm steam",
    },
    {
      src: toolsImg,
      alt: "Precision barber tools and clippers",
      title: "Precision Detailing",
      subtitle: "Zero-gap fades & razor-sharp edges",
    },
    {
      src: loungeImg,
      alt: "Modern barbershop studio lounge",
      title: "The Studio",
      subtitle: "Clean, comfortable modern atmosphere",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0A0B0E] border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
            The Studio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            CRAFTSMANSHIP & ATMOSPHERE
          </h2>
        </div>

        {/* 3 Clean Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden border border-white/10 group h-80 flex flex-col justify-end p-6 bg-[#12141A]"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/60 to-transparent" />

              <div className="relative z-10">
                <h3 className="font-display text-lg font-bold text-white">
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
