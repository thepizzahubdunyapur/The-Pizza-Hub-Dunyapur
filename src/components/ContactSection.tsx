import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, MessageCircle, Globe, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-red-500" />
            <span>Free Delivery in Dunyapur City Only · Food For Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact & Direct WhatsApp Ordering
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            Cart orders directly go to WhatsApp{' '}
            <span className="text-yellow-400 font-black">0302-7191115</span>, or visit our website{' '}
            <span className="text-yellow-400 font-bold">www.Thepizzahubdunyapur.com</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Call & WhatsApp Hotlines */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Action Hotline Box with all numbers */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-red-950/50 via-zinc-900 to-zinc-900 border border-yellow-400/30 shadow-2xl space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-white">
                    Direct Call & WhatsApp Hotlines
                  </h3>
                  <span className="text-[11px] font-bold text-yellow-300 bg-yellow-950/70 border border-yellow-600/40 px-2.5 py-0.5 rounded-full">
                    Live Dispatch
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Direct dispatch for free city delivery in Dunyapur!
                </p>
              </div>

              {/* Featured Featured Card: WhatsApp Cart Order Hotline 0302-7191115 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border-2 border-yellow-400/60 shadow-lg shadow-yellow-500/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600 text-yellow-300 flex items-center justify-center font-bold shadow-md">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black text-yellow-400 block tracking-wider">
                        Cart Order WhatsApp Hotline
                      </span>
                      <span className="text-xl font-black text-white tracking-wide">
                        0302-7191115
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-yellow-400 font-bold hidden sm:inline bg-yellow-400/10 px-2 py-0.5 rounded">
                    Primary Orders
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:03027191115"
                    className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-600/25 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/923027191115?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>

              {/* Contact Card 1: 03021716718 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                        Kitchen Hotline 1
                      </span>
                      <span className="text-lg font-black text-white tracking-wide">
                        0302-1716718
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">Call or WhatsApp</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:03021716718"
                    className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/923021716718?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact Card 2: 03467438115 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-600/20 text-yellow-400 flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                        Kitchen Hotline 2
                      </span>
                      <span className="text-lg font-black text-white tracking-wide">
                        0346-7438115
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">Call or WhatsApp</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:03467438115"
                    className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/923467438115?text=Hi%20The%20Pizza%20Hub%20Dunyapur!%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Official Website Banner Card */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Globe className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold text-white">www.Thepizzahubdunyapur.com</span>
                </div>
                <span className="text-[11px] font-bold text-yellow-400">Official Portal</span>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Restaurant Location</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <span className="text-[11px] font-semibold text-emerald-400 block pt-1">
                  ✓ Free Delivery in Dunyapur City
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Kitchen Timings</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Open Daily: 12:00 PM – 02:00 AM
                </p>
                <span className="text-[11px] font-semibold text-zinc-400 block pt-1">
                  7 Days a Week (Lunch to Late Night)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry & Party Orders Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-extrabold text-red-500 mb-2">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  <span>Catering & Quick Orders</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">
                  Special Inquiries or Party Orders?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Planning a family gathering, birthday party, meeting, or have a special request? Leave your details below and we will contact you right away.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-center space-y-2 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Message Received!</h4>
                    <p className="text-xs text-zinc-300">
                      Thank you for contacting The Pizza Hub Dunyapur. Our team will call you back within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Farhan Ali"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 focus:outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 1234567"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 focus:outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                        Message / Order Request
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you'd like to order or ask..."
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500 focus:outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Email: {RESTAURANT_INFO.email}</span>
                <span className="text-emerald-400 font-semibold">100% Halal Certified</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
