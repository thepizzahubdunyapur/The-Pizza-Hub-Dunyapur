import React from 'react';
import { Star, Utensils, Users, PartyPopper, Heart, Sparkles, Flame } from 'lucide-react';

interface ReasonItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const REASONS: ReasonItem[] = [
  {
    id: 'fresh-delicious',
    emoji: '🍕',
    title: 'Fresh & Delicious',
    description: 'Freshly prepared food with flavors our customers love.',
    badge: 'Daily Fresh',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'quality-trust',
    emoji: '⭐',
    title: 'Quality You Can Trust',
    description: 'We focus on quality ingredients and careful preparation in every order.',
    badge: '100% Quality',
    icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400/20" />,
  },
  {
    id: 'variety-everyone',
    emoji: '🍔',
    title: 'Variety for Everyone',
    description: 'From pizzas and burgers to broast, pasta, fried chicken, and more — there’s something for everyone.',
    badge: 'Huge Menu',
    icon: <Utensils className="w-5 h-5 text-orange-400" />,
  },
  {
    id: 'family-friendly',
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family-Friendly',
    description: 'A comfortable and welcoming place to enjoy quality time with family and friends.',
    badge: 'Dine-In & Takeaway',
    icon: <Users className="w-5 h-5 text-sky-400" />,
  },
  {
    id: 'every-occasion',
    emoji: '🎉',
    title: 'Perfect for Every Occasion',
    description: 'Ideal for everyday dining, birthdays, family gatherings, and meetings.',
    badge: 'Events & Parties',
    icon: <PartyPopper className="w-5 h-5 text-purple-400" />,
  },
  {
    id: 'customer-first',
    emoji: '❤️',
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We strive to provide delicious food, friendly service, and a memorable experience.',
    badge: '100% Satisfaction',
    icon: <Heart className="w-5 h-5 text-red-500 fill-red-500/20" />,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 text-red-500" />
            <span>The Pizza Hub Difference · Food For Life</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Choose Us
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto">
            At The Pizza Hub Dunyapur, we believe great food is more than just a meal — it’s an experience.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#240404]/90 via-[#1c0303]/90 to-[#150202] border border-yellow-400/30 hover:border-yellow-400/80 hover:bg-[#2c0505]/95 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-black border border-yellow-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
                    <span>{item.emoji}</span>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-950/70 border border-yellow-500/50 px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-2.5 group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-yellow-500/20 flex items-center justify-between text-xs text-yellow-200/60">
                <span className="font-mono text-yellow-400/80 font-bold">0{idx + 1}</span>
                <div className="flex items-center gap-1.5 text-yellow-400">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tagline Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-red-950 via-red-900 to-yellow-950 border-2 border-yellow-400/60 shadow-2xl shadow-red-950/50">
            <span className="text-sm sm:text-base font-black text-white tracking-wide">
              The Pizza Hub Dunyapur — <span className="text-yellow-400 uppercase">Food For Life</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
