import { Star, Scissors, Clock, ShieldCheck } from "lucide-react";

export default function StatsRibbon() {
  const stats = [
    {
      icon: Star,
      value: "4.9 ★",
      label: "Customer Rating",
      sub: "London, Ontario Locals",
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
      label: "Sanitary Blades",
      sub: "Single-Use Straight Razors",
    },
  ];

  return (
    <div className="border-y border-white/10 bg-[#0B0C10] py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
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
