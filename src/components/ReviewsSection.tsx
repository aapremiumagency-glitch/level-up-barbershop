import { useState } from "react";
import { Star, CheckCircle, Phone, ThumbsUp } from "lucide-react";
import { BUSINESS_INFO } from "../data/barbershopData";

export default function ReviewsSection() {
  const [filter, setFilter] = useState<string>("all");

  const reviews = [
    {
      id: "1",
      name: "Marcus Vance",
      category: "fades",
      service: "BALD FADE ($24)",
      rating: 5,
      date: "2 weeks ago",
      text: "Best skin fade in London, ON by a mile. Zero harsh lines, seamless blend into the beard, and razor-sharp lineup. Friendly atmosphere and easy parking right outside.",
      verified: true,
      helpful: 14,
    },
    {
      id: "2",
      name: "David Chen",
      category: "shave",
      service: "HAIRCUT AND SHAVE ($37)",
      rating: 5,
      date: "1 month ago",
      text: "The hot towel shave is elite. Warm lather, steamed essential oil towel, and straight razor made my skin feel like a million bucks. Calling in takes 10 seconds to lock in a time.",
      verified: true,
      helpful: 21,
    },
    {
      id: "3",
      name: "Tariq Al-Mansoor",
      category: "fades",
      service: "REGULAR CUT ($22) + BEARD ($20)",
      rating: 5,
      date: "3 weeks ago",
      text: "Level Up is now my go-to shop. Fair prices, immaculate shears work, and barbers who actually listen to how you want your hair styled. 10/10 recommendation.",
      verified: true,
      helpful: 18,
    },
    {
      id: "4",
      name: "Jordan Miller",
      category: "atmosphere",
      service: "LINE UP ($12)",
      rating: 5,
      date: "Just visited",
      text: "Walked in on a Thursday afternoon without an appointment and got seated in 5 minutes. The shop is spotless, leather chairs are super comfortable, and the line-up was laser sharp.",
      verified: true,
      helpful: 9,
    },
    {
      id: "5",
      name: "Samir R.",
      category: "shave",
      service: "HEAD SHAVE ($22)",
      rating: 5,
      date: "2 months ago",
      text: "Smooth foil and straight razor head shave. No irritation, great cooling aftershave balm. If you live anywhere near Wharncliffe or Western campus, come here.",
      verified: true,
      helpful: 12,
    },
    {
      id: "6",
      name: "Anthony P.",
      category: "fades",
      service: "KIDS CUT ($19)",
      rating: 5,
      date: "3 weeks ago",
      text: "Brought my 4-year-old son in. The barber was incredibly patient, fast, and made him feel totally comfortable. My boy loved his fresh cut!",
      verified: true,
      helpful: 15,
    },
  ];

  const filteredReviews =
    filter === "all" ? reviews : reviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-24 bg-[#07080B] border-t border-neutral-900 scroll-mt-12 relative overflow-hidden">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-luxury-pattern opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Big Trust Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span>Client Testimonials</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              PROVEN LONDON REPUTATION
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-lg">
              Read real feedback from regular clients across London, Ontario who trust Level Up for their weekly cuts.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="luxury-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 shrink-0 shadow-xl border border-white/10">
            <div className="font-mono text-4xl sm:text-5xl font-extrabold text-white tabular-nums tracking-tight">
              4.9
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <div className="text-xs text-neutral-200 font-semibold">
                Google Verified Rating
              </div>
              <div className="text-[11px] text-neutral-400">
                190+ London, ON Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Reviews" },
            { id: "fades", label: "Fades & Haircuts" },
            { id: "shave", label: "Beard & Shave" },
            { id: "atmosphere", label: "Shop Vibe & Walk-Ins" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1C1F28] border border-[#D4AF37]/40 flex items-center justify-center font-display font-bold text-sm text-[#D4AF37] shadow-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <span title="Verified client">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-500">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-1 bg-white/[0.05] border border-white/5 rounded-md text-[11px] font-mono font-medium text-[#D4AF37] mb-3">
                  {rev.service}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Helpful count */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <ThumbsUp className="w-3 h-3 text-[#D4AF37]" />
                  <span>{rev.helpful} clients found this helpful</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5CA64] rounded-lg transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" />
            <span>Join Our Satisfied Clients · Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
