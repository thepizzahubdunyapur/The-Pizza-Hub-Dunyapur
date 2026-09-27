import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularMenu } from './components/PopularMenu';
import { SpecialDeals } from './components/SpecialDeals';
import { AboutUs } from './components/AboutUs';
import { FoodPartners } from './components/FoodPartners';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CartItem, MenuItem, SpecialDeal, OrderDetails } from './types';
import { Check, ShoppingBag, Flame, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (itemName: string) => {
    setActiveToast(itemName);
    setTimeout(() => {
      setActiveToast((curr) => (curr === itemName ? null : curr));
    }, 2500);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { id: `${item.id}-${Date.now()}`, item, quantity: 1 }];
    });
    showToast(`${item.name} added to cart!`);
  };

  const handleAddDealToCart = (deal: SpecialDeal) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === deal.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === deal.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { id: `${deal.id}-${Date.now()}`, item: deal, quantity: 1 }];
    });
    showToast(`${deal.title} deal added!`);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.id === cartItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#220404] via-[#330707] to-[#1c0303] text-[#fefce8] flex flex-col font-sans selection:bg-red-600 selection:text-yellow-300 relative overflow-x-hidden">
      
      {/* Background Red and Yellow Ambient Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-red-600/25 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] -left-20 w-[550px] h-[550px] bg-yellow-500/20 rounded-full blur-[130px]" />
        <div className="absolute top-[55%] -right-20 w-[600px] h-[600px] bg-red-600/22 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[650px] h-[500px] bg-yellow-400/18 rounded-full blur-[150px]" />
      </div>

      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateMenu={() => scrollToSection('menu')}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero
          onViewMenu={() => scrollToSection('menu')}
          onOrderNow={() => scrollToSection('menu')}
        />

        {/* Popular Menu Section */}
        <PopularMenu onAddToCart={handleAddToCart} />

        {/* Special Deals Section */}
        <SpecialDeals onAddDealToCart={handleAddDealToCart} />

        {/* Food Partners Section (K&N's Foods, Big Bird, National, Knas, Addison) */}
        <FoodPartners onExploreMenu={() => scrollToSection('menu')} />

        {/* About Us Section */}
        <AboutUs />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Contact & Branch Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={(order) => {
          // Handled inside checkout modal
        }}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Quick Order Hotline Button */}
      <aside aria-label="Direct WhatsApp Ordering" className="fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.cartOrderWhatsAppFormatted || '923027191115'}?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all duration-200 border-2 border-yellow-400 group cursor-pointer"
          title={`Order on WhatsApp: ${RESTAURANT_INFO.cartOrderWhatsAppDisplay}`}
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline font-black text-yellow-300">
            WhatsApp Order: {RESTAURANT_INFO.cartOrderWhatsAppDisplay}
          </span>
          <span className="sm:hidden font-black text-yellow-300">Order</span>
        </a>
      </aside>

      {/* Floating Cart Button for Mobile when cart has items */}
      {totalCartCount > 0 && !isCartOpen && !isCheckoutOpen && (
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 text-white font-black text-xs uppercase tracking-wider shadow-2xl shadow-red-600/50 border border-yellow-400/40 cursor-pointer animate-in fade-in"
          >
            <ShoppingBag className="w-4 h-4 text-yellow-200" />
            <span>View Cart ({totalCartCount})</span>
          </button>
        </div>
      )}

      {/* Quick Toast Feedback */}
      {activeToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-zinc-700 text-white text-xs font-semibold shadow-2xl shadow-black/80 flex items-center gap-2 backdrop-blur-md animate-in slide-in-from-bottom duration-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{activeToast}</span>
        </div>
      )}

    </div>
  );
}
