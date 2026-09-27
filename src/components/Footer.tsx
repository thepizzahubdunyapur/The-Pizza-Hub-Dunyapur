import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react';
import { RESTAURANT_INFO, pizzaHubLogoImg } from '../data/menuData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#150202] text-zinc-300 text-xs border-t-2 border-yellow-400/40 relative">
      {/* Decorative top yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md bg-black shrink-0 flex items-center justify-center p-0.5">
                <img
                  src={pizzaHubLogoImg}
                  alt="The Pizza Hub Dunyapur"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  THE PIZZA <span className="text-red-500">HUB</span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-yellow-400 mt-1">
                  Food For Life
                </span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Fresh, hot, and delicious fast food crafted with authentic stone-baked pizzas, crispy chicken, zinger burgers, and signature recipes in Dunyapur.
            </p>

            <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs pt-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span>Free Delivery in Dunyapur City Only · WhatsApp 0302-7191115</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore Menu</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Signature Pizzas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('deals')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Xtreme Duo Box Deal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('deals')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Crispy Injected Nuggets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('deals')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Pizza & Family Combos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Burgers, Broast & Pasta
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Contact & Hotlines
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details with Cart Order WhatsApp & Hotlines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Call & WhatsApp</h4>
            <div className="space-y-2.5">
              
              {/* Cart Order WhatsApp: 0302-7191115 */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-red-950/60 to-zinc-900 border border-yellow-400/40 space-y-1.5 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black text-yellow-400 block tracking-wider">
                    WhatsApp Order: 0302-7191115
                  </span>
                  <span className="text-[9px] font-bold text-yellow-300 bg-yellow-400/20 px-1.5 py-0.5 rounded">
                    Orders
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:03027191115"
                    className="flex-1 py-1 px-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/923027191115?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Number 1 */}
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                  Hotline 1: 0302-1716718
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:03021716718"
                    className="flex-1 py-1 px-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/923021716718?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1 px-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Number 2 */}
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                  Hotline 2: 0346-7438115
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:03467438115"
                    className="flex-1 py-1 px-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/923467438115?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1 px-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-zinc-400 pt-1">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px]">{RESTAURANT_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Official Food Partners Ribbon */}
        <div className="mt-10 p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-zinc-950 to-red-950/80 border border-yellow-400/30 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-yellow-400">
              Official Food Partners:
            </span>
            <span className="text-zinc-300 font-semibold">100% Halal certified ingredients</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 font-bold">
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-500/25 text-yellow-300 text-xs">
              K&N's Foods
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-500/25 text-yellow-300 text-xs">
              Big Bird
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-500/25 text-yellow-300 text-xs">
              National Foods
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-500/25 text-yellow-300 text-xs">
              Knas
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-500/25 text-yellow-300 text-xs">
              Addison
            </span>
          </div>
        </div>

        {/* Bottom Bar with payment options & copyright */}
        <div className="mt-8 pt-6 border-t border-yellow-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-400 text-center sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-yellow-400 font-bold">www.Thepizzahubdunyapur.com</span> — The Pizza Hub Dunyapur · <span className="text-yellow-300 font-black">Food For Life</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-zinc-300 font-semibold text-[11px]">
            <span className="text-yellow-400/80 font-bold">Payment:</span>
            <span className="px-2 py-0.5 rounded bg-zinc-950 border border-yellow-500/30 text-white">Cash on Delivery</span>
            <span className="px-2 py-0.5 rounded bg-zinc-950 border border-yellow-500/30 text-white">JazzCash</span>
            <span className="px-2 py-0.5 rounded bg-zinc-950 border border-yellow-500/30 text-white">EasyPaisa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
