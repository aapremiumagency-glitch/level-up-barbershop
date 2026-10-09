import { Star, Scissors, Clock, ShieldCheck } from "lucide-react";

export default function StatsRibbon() {
  const stats = [
    {
      icon: Star,
      value: "4.9 ★",
      label: "Customer Rating",
      sub: "190+ London Locals",
    },
    {
      icon: Scissors,
      value: "12",
      label: "Master Services",
      sub: "Fades, Shaves & Color",
    },
    {
      icon: Clock,
      value: "7 Days",
      label: "Weekly Availability",
      sub: "Mon–Sat 9AM · Sun 10AM",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Sanitary Hygiene",
      sub: "Single-Use Straight Razors",
    },
  ];

  return (
    <div className="relative z-20 border-y border-white/10 bg-gradient-to-r from-[#08090C] via-[#0E1016] to-[#08090C] py-10 shadow-2xl overflow-hidden">
      {/* Background subtle light aura */}
      <div className="absolute inset-0 bg-luxury-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 bg-[#D4AF37]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.03] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all shadow-sm">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-neutral-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
