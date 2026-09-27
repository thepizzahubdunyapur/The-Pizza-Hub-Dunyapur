import React from 'react';
import { Sparkles, HeartHandshake, MapPin, Users, Heart, Award, ShieldCheck, Flame, Clock } from 'lucide-react';
import { pizzaHubLogoImg, RESTAURANT_INFO } from '../data/menuData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Values Showcase (Zero stock photos) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400/40 bg-gradient-to-br from-[#240404] via-[#1c0303] to-[#160202] shadow-2xl p-6 sm:p-8 space-y-6">
              
              {/* Brand Logo & Tagline */}
              <div className="flex items-center gap-4 pb-6 border-b border-yellow-500/20">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg bg-black shrink-0 flex items-center justify-center p-0.5">
                  <img
                    src={pizzaHubLogoImg}
                    alt="The Pizza Hub Dunyapur"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    THE PIZZA <span className="text-red-500">HUB</span>
                  </h3>
                  <span className="text-xs uppercase font-black tracking-widest text-yellow-400">
                    Food For Life
                  </span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Dunyapur City</p>
                </div>
              </div>

              {/* 3 Pillars of Service */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-yellow-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Family-Friendly Environment</h4>
                    <p className="text-[11px] text-zinc-400">Comfortable dining for families, friends & meetings</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-yellow-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">100% Halal Food Partners</h4>
                    <p className="text-[11px] text-zinc-400">K&N's Foods, Big Bird, National, Knas & Addison</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-yellow-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Free Express City Delivery</h4>
                    <p className="text-[11px] text-zinc-400">Hot thermal delivery across Dunyapur City</p>
                  </div>
                </div>
              </div>

              {/* Address Strip */}
              <div className="pt-3 border-t border-yellow-500/20 flex items-center gap-2 text-xs text-zinc-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3.5 py-1.5 rounded-full">
              <HeartHandshake className="w-4 h-4 text-red-500" />
              <span>About Us · Dunyapur City</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Welcome to The Pizza Hub Dunyapur —{' '}
              <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">Food For Life! 🍕</span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">The Pizza Hub</strong> is a family-friendly fast-food restaurant dedicated to serving delicious, fresh, and high-quality food with great taste and excellent service in Dunyapur.
              </p>

              <p className="text-zinc-300">
                From our stone-baked signature pizzas and crunchy zinger burgers to broast, pasta, calzones, crispy fries, and family deals, we prepare every order with care using prime ingredients supplied by our trusted food partners: <strong className="text-yellow-400">K&N's Foods, Big Bird, National Foods, Knas, and Addison</strong>.
              </p>

              <p className="text-zinc-300">
                Whether you’re enjoying a meal with family, celebrating a birthday, having a meeting, or simply spending time with friends, The Pizza Hub provides a comfortable and welcoming environment for everyone.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950/70 to-zinc-950 border border-yellow-400/30 flex items-start gap-4 shadow-lg">
              <div className="p-2.5 rounded-xl bg-red-600 text-yellow-300 shrink-0 font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-black tracking-wider text-yellow-400 block mb-1">
                  Our Mission
                </span>
                <p className="text-sm sm:text-base font-bold text-white">
                  Our goal is simple: great food, friendly service, and happy customers.
                </p>
              </div>
            </div>

            {/* Badges / Location Footer */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-yellow-500/30 text-xs sm:text-sm font-bold text-white shadow-sm">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>The Pizza Hub Dunyapur</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/60 border border-yellow-400/40 text-xs sm:text-sm font-black text-yellow-400 shadow-sm">
                <span>🍕 Food For Life</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm font-bold text-zinc-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Halal Food Partners</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
