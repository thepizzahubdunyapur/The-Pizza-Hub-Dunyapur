import React from 'react';
import { ArrowRight, Flame, Sparkles, Clock, ShieldCheck, Star, Phone, Tag } from 'lucide-react';
import { pizzaHubLogoImg, RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onViewMenu: () => void;
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu, onOrderNow }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-red-600/20 via-orange-600/15 to-transparent blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 blur-[90px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Promotional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950/80 to-zinc-900 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Free Delivery in the City Only</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-yellow-400 block">
                The Pizza Hub Dunyapur · Food For Life
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
                Fresh. Hot.{' '}
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Delicious.
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to Dunyapur's favorite fast-food destination. Stone-baked pizzas, crunchy zingers, broast, pasta, and exclusive family deals prepared fresh for you.
            </p>

            {/* CTAs - Red & Yellow */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-base tracking-wide shadow-xl shadow-red-600/35 hover:shadow-red-600/55 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 text-yellow-200" />
              </button>

              <button
                onClick={onViewMenu}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-yellow-400 hover:text-yellow-300 font-bold text-base border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-200 cursor-pointer shadow-md"
              >
                View Menu
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-yellow-500/20 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="font-bold text-white text-sm sm:text-base">Top Rated</span>
                </div>
                <span className="text-[11px] sm:text-xs text-yellow-200/80">Dunyapur's Favorite</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-red-400">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="font-bold text-white text-sm sm:text-base">Express Fast</span>
                </div>
                <span className="text-[11px] sm:text-xs text-yellow-200/80">Free In City Only</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <span className="font-bold text-white text-sm sm:text-base">100% Halal</span>
                </div>
                <span className="text-[11px] sm:text-xs text-yellow-200/80">Certified Fresh</span>
              </div>
            </div>

            {/* Food Partners Ribbon */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-red-950/70 via-red-900/50 to-zinc-950 border border-yellow-400/30 flex flex-wrap items-center gap-2 sm:gap-3 text-xs justify-center lg:justify-start shadow-md">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-yellow-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                Food Partners:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 font-bold text-zinc-200">
                <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-yellow-500/20 text-yellow-300 text-[11px]">K&N's Foods</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-yellow-500/20 text-yellow-300 text-[11px]">Big Bird</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-yellow-500/20 text-yellow-300 text-[11px]">National</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-yellow-500/20 text-yellow-300 text-[11px]">Knas</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-yellow-500/20 text-yellow-300 text-[11px]">Addison</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Promotional Showcase (No Stock Burger/Fries Photos) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-yellow-400 opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400/60 bg-gradient-to-br from-[#1e0404] via-[#2a0606] to-[#160202] shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Brand Seal Header */}
                <div className="flex items-center justify-between pb-5 border-b border-yellow-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md bg-black shrink-0 flex items-center justify-center p-0.5">
                      <img
                        src={pizzaHubLogoImg}
                        alt="The Pizza Hub Dunyapur"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white leading-tight">
                        THE PIZZA <span className="text-red-500">HUB</span>
                      </h3>
                      <span className="text-xs uppercase font-black tracking-widest text-yellow-400">
                        Food For Life
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                    Open Daily
                  </span>
                </div>

                {/* Exclusive Deal Spotlight 1: Xtreme Duo Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 to-zinc-900 border border-red-500/30 hover:border-red-500/60 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-red-500" />
                      Mega Deal Spotlight
                    </span>
                    <span className="text-base font-black text-amber-400">Rs. 1,450</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Xtreme Duo Box Deal
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    2 Signature Zingers + 2 Pcs Hot Chicken + 1 Large Fries + 1L Next Cola + 2 Dips
                  </p>
                </div>

                {/* Exclusive Deal Spotlight 2: Crispy Injected Nuggets */}
                <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-orange-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Crispy Injected Nuggets
                    </span>
                    <span className="text-xs font-bold text-zinc-400">From Rs. 450</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="p-2 rounded-xl bg-black/60 border border-zinc-800 text-center">
                      <span className="text-[10px] text-zinc-400 block font-semibold">5 Pcs + Sauce</span>
                      <span className="text-xs font-black text-white">Rs. 450</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/60 border border-zinc-800 text-center">
                      <span className="text-[10px] text-zinc-400 block font-semibold">10 Pcs + Fries + Sauce</span>
                      <span className="text-xs font-black text-amber-400">Rs. 850</span>
                    </div>
                  </div>
                </div>

                {/* Hotline & City Delivery Callout */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold">{RESTAURANT_INFO.phoneDisplay}</span>
                  </div>

                  <button
                    onClick={onOrderNow}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
                  >
                    Claim Special Deals
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
