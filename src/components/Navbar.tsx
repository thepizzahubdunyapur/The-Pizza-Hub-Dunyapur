import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO, pizzaHubLogoImg } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigateMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'menu') {
      onNavigateMenu();
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a0303]/95 backdrop-blur-md border-b border-yellow-500/30 shadow-xl shadow-red-950/40 py-3.5'
          : 'bg-gradient-to-b from-[#1a0303]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark with Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md group-hover:scale-105 transition-transform duration-200 bg-black shrink-0 flex items-center justify-center p-0.5">
              <img
                src={pizzaHubLogoImg}
                alt="The Pizza Hub Dunyapur Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                THE PIZZA <span className="text-red-500">HUB</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-wider text-yellow-400 mt-1 uppercase">
                Food For Life
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick('deals')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Special Deals
            </button>
            <button
              onClick={() => handleNavClick('partners')}
              className="text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Food Partners</span>
              <span className="text-[9px] bg-red-600 text-yellow-300 border border-yellow-400/40 font-black px-1.5 py-0.5 rounded-full uppercase">
                5 Brands
              </span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm font-semibold text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Actions (Cart & Order Now) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-yellow-400 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 transition-colors"
              title="Call for phone orders"
            >
              <PhoneCall className="w-3.5 h-3.5 text-yellow-400" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 text-zinc-100 hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
              aria-label={`View cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              {cartCount > 0 ? (
                <span className="min-w-5 h-5 px-1.5 rounded-full bg-red-600 text-yellow-300 text-[11px] font-black flex items-center justify-center animate-bounce border border-yellow-400/40">
                  {cartCount}
                </span>
              ) : (
                <span className="text-zinc-500 text-xs hidden sm:inline">(0)</span>
              )}
            </button>

            {/* Prominent Order Now Button - Red and Yellow Theme */}
            <button
              onClick={() => handleNavClick('menu')}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/35 hover:shadow-red-600/55 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1c0404]/98 border-b-2 border-yellow-400 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              Popular Menu
            </button>
            <button
              onClick={() => handleNavClick('deals')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              Special Deals & Combos
            </button>
            <button
              onClick={() => handleNavClick('partners')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-bold text-yellow-400 hover:bg-red-900/40 transition-colors flex items-center justify-between"
            >
              <span>Our Food Partners</span>
              <span className="text-[10px] bg-red-600 text-yellow-300 border border-yellow-400/40 px-2 py-0.5 rounded-full uppercase">
                K&N's · Big Bird · National · Knas · Addison
              </span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-red-900/40 hover:text-yellow-400 transition-colors"
            >
              Contact & Branches
            </button>
          </div>

          <div className="pt-3 border-t border-yellow-500/20 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-300 font-bold">{RESTAURANT_INFO.phoneDisplay}</span>
            </div>
            <span className="text-zinc-300">12 PM – 2:00 AM</span>
          </div>
        </div>
      )}
    </header>
  );
};
