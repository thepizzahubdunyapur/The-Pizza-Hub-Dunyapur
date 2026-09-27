import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, HeartHandshake, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { FOOD_PARTNERS } from '../data/menuData';

interface FoodPartnersProps {
  onExploreMenu?: () => void;
}

export const FoodPartners: React.FC<FoodPartnersProps> = ({ onExploreMenu }) => {
  return (
    <section id="partners" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Decorative Red and Yellow Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3.5 py-1.5 rounded-full shadow-sm">
            <HeartHandshake className="w-4 h-4 text-red-500" />
            <span>Trusted Quality · Our Official Food Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Prepared with <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">Pakistan's Best</span> Brands
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            At <strong>The Pizza Hub Dunyapur</strong>, "Food For Life" is our promise. We strictly use 100% Halal certified poultry, premium mozzarella cheese, and authentic master seasonings from industry leaders.
          </p>

          {/* Quick Partner Badges Ticker */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {FOOD_PARTNERS.map((partner) => (
              <span
                key={partner.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-yellow-400/40 text-xs font-black text-yellow-300 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* Partners Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FOOD_PARTNERS.map((partner, index) => {
            return (
              <div
                key={partner.id}
                className={`relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-red-950/70 via-zinc-900/90 to-zinc-950 border border-yellow-400/25 hover:border-yellow-400/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-600/20 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1 border-yellow-400/50 shadow-lg shadow-yellow-500/10' : ''
                }`}
              >
                {/* Glow pill behind card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all pointer-events-none" />

                <div>
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-yellow-300 bg-yellow-400/15 border border-yellow-400/35 px-2.5 py-1 rounded-full">
                      {partner.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                      100% Halal
                    </span>
                  </div>

                  {/* Brand Name & Tagline */}
                  <div className="space-y-1.5 mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-bold text-yellow-400/90 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-red-500" />
                      {partner.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                </div>

                {/* Card Footer: Specialty highlighted in Red & Yellow */}
                <div className="pt-4 border-t border-zinc-800/90 mt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-600 text-yellow-300 flex items-center justify-center font-black text-xs shadow-md">
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block leading-tight">Key Ingedient</span>
                      <span className="font-bold text-white leading-tight">{partner.specialty}</span>
                    </div>
                  </div>
                  <Award className="w-4 h-4 text-yellow-400 opacity-80 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Quality Guarantee Box filling the 6th spot */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-yellow-600 text-white flex flex-col justify-between shadow-2xl shadow-red-600/30 border-2 border-yellow-400">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-red-700 flex items-center justify-center shadow-lg font-black">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                100% Halal & Hygienic Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-yellow-100/95 leading-relaxed font-medium">
                We never compromise on health, taste, or purity. Every chicken fillet, cheese block, and dough batch meets high sanitary standards.
              </p>
            </div>

            {onExploreMenu && (
              <button
                onClick={onExploreMenu}
                className="mt-5 w-full py-3 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <span>Taste The Difference</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quality Banner Bar */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-red-950/70 border border-yellow-400/40 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 text-red-700 flex items-center justify-center shrink-0 font-bold shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-white">
                Partnered for Freshness: K&N's · Big Bird · National · Knas · Addison
              </h4>
              <p className="text-xs text-yellow-200/80">
                Premium ingredients delivered fresh daily to our Dunyapur kitchen on Dokota Road.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-black text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/30 px-3 py-1.5 rounded-full">
              Zero Chemical Additives
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
