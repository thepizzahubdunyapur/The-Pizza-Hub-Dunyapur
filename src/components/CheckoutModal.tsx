import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Phone, MapPin, CreditCard, Banknote, ShieldCheck, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';
import { RESTAURANT_INFO, pizzaHubLogoImg } from '../data/menuData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: OrderDetails) => void;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
  onClearCart,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    area: 'Main Chowk, Dunyapur',
    notes: '',
    paymentMethod: 'cod' as const,
  });

  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, it) => sum + it.item.price * it.quantity, 0);
  
  // Delivery in Dunyapur City is 100% FREE. Outskirts/Rural surrounding areas have a nominal fee.
  const isCityArea = !formData.area.includes('Kehror Pacca') && !formData.area.includes('Dhanot');
  const isPickup = formData.area.includes('Pick up');
  const deliveryFee = isPickup || isCityArea ? 0 : RESTAURANT_INFO.outskirtsDeliveryFee;
  const isFreeDelivery = deliveryFee === 0;
  const total = subtotal + deliveryFee;

  const buildWhatsAppUrl = (order: OrderDetails) => {
    const targetWhatsApp = RESTAURANT_INFO.cartOrderWhatsAppFormatted || '923027191115';
    const itemsList = order.items
      .map((it, idx) => {
        const name = 'name' in it.item ? it.item.name : it.item.title;
        const itemTotal = it.item.price * it.quantity;
        return `${idx + 1}. *${name}* x ${it.quantity} = Rs. ${itemTotal.toLocaleString()}`;
      })
      .join('\n');

    const message = `🍕 *NEW ORDER - THE PIZZA HUB DUNYAPUR* 🍕
*Food For Life*
----------------------------------------
*Order ID:* ${order.orderId}
*Customer Name:* ${order.customerName}
*Phone:* ${order.phone}
*Address:* ${order.address}
*Area:* ${order.area}
*Payment Method:* ${order.paymentMethod.toUpperCase()}
${order.notes ? `*Special Notes:* ${order.notes}\n` : ''}----------------------------------------
📋 *ORDER ITEMS:*
${itemsList}
----------------------------------------
💵 *Subtotal:* Rs. ${order.subtotal.toLocaleString()}
🛵 *Delivery:* ${order.deliveryFee === 0 ? 'FREE (Dunyapur City)' : `Rs. ${order.deliveryFee}`}
💰 *TOTAL AMOUNT:* Rs. ${order.total.toLocaleString()}
----------------------------------------
📍 Near Allied Bank, Dokota Road, Dunyapur
🌐 www.Thepizzahubdunyapur.com`;

    return `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(message)}`;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newOrder: OrderDetails = {
        orderId: `TPH-${Math.floor(100000 + Math.random() * 900000)}`,
        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,
        area: formData.area,
        paymentMethod: formData.paymentMethod,
        notes: formData.notes,
        items: [...items],
        subtotal,
        deliveryFee,
        total,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'preparing',
      };

      setConfirmedOrder(newOrder);
      setIsSubmitting(false);
      onOrderSuccess(newOrder);
      onClearCart();

      // Automatically dispatch order directly to user's specified WhatsApp number: 03027191115
      const whatsappUrl = buildWhatsAppUrl(newOrder);
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.error('Popup blocked', err);
      }
    }, 800);
  };

  const handleCloseAll = () => {
    setConfirmedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleCloseAll}
      />

      <div className="relative w-full max-w-xl bg-[#111116] border border-red-500/30 rounded-2xl shadow-2xl text-white overflow-hidden my-8 z-10">
        
        {/* Header - Red & Yellow Brand */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md bg-black shrink-0 flex items-center justify-center p-0.5">
              <img
                src={pizzaHubLogoImg}
                alt="The Pizza Hub Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  THE PIZZA <span className="text-red-500">HUB</span>
                </h3>
                <span className="text-[10px] font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Food For Life
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                {confirmedOrder
                  ? `Order routed directly to WhatsApp (${RESTAURANT_INFO.cartOrderWhatsAppDisplay})`
                  : `Direct WhatsApp Dispatch to ${RESTAURANT_INFO.cartOrderWhatsAppDisplay} · Free City Delivery`}
              </p>
            </div>
          </div>

          <button
            onClick={handleCloseAll}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {confirmedOrder ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Success Banner */}
            <div className="text-center space-y-2 py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-white">Order Sent to WhatsApp!</h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Thank you <strong className="text-yellow-400">{confirmedOrder.customerName}</strong>! Order{' '}
                <strong className="text-yellow-400 font-mono">{confirmedOrder.orderId}</strong> has been routed directly to our WhatsApp hotline{' '}
                <strong className="text-emerald-400 font-mono">{RESTAURANT_INFO.cartOrderWhatsAppDisplay}</strong>.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-600/40 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Order Hotline: {RESTAURANT_INFO.cartOrderWhatsAppDisplay}</span>
              </div>
              <p className="text-xs text-zinc-300">
                If WhatsApp didn't open automatically, tap below to confirm your order chat:
              </p>
              <a
                href={buildWhatsAppUrl(confirmedOrder)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp ({RESTAURANT_INFO.cartOrderWhatsAppDisplay})</span>
              </a>
            </div>

            {/* Estimated Arrival Box */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-red-600/20 text-yellow-400">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold block">
                    Estimated Arrival
                  </span>
                  <span className="text-lg font-black text-white">25 – 35 Minutes</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-zinc-400 block">Total Due</span>
                <span className="text-lg font-black text-yellow-400 tabular-nums">
                  Rs. {confirmedOrder.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Delivery Details Summary */}
            <div className="text-xs text-zinc-400 space-y-1.5 p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex justify-between">
                <span>Delivery Address:</span>
                <span className="text-zinc-200 font-medium text-right max-w-xs">{confirmedOrder.address}, {confirmedOrder.area}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer Phone:</span>
                <span className="text-zinc-200 font-medium">{confirmedOrder.phone}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span className="text-zinc-200 font-medium uppercase">{confirmedOrder.paymentMethod}</span>
              </div>
            </div>

            <button
              onClick={handleCloseAll}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Back to Menu
            </button>

          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-5 sm:p-6 space-y-4">
            
            {/* Customer Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Farhan Ali"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                  Phone (WhatsApp / Calling) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0300 1234567"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>
            </div>

            {/* Delivery Address & Area */}
            <div className="space-y-3.5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-zinc-300 block uppercase tracking-wider">
                    Delivery Area (Dunyapur & Surroundings) *
                  </label>
                  <span className="text-[11px] font-bold text-yellow-400 bg-yellow-950/60 border border-yellow-700/50 px-2 py-0.5 rounded">
                    Free Delivery in City
                  </span>
                </div>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white transition-colors"
                >
                  <option value="Near Allied Bank, Dokota Road Dunyapur">Dunyapur City — Near Allied Bank / Dokota Road (FREE Delivery)</option>
                  <option value="Main Chowk, Dunyapur">Dunyapur City — Main Chowk / Railway Road (FREE Delivery)</option>
                  <option value="Bypass Chowk, Dunyapur">Dunyapur City — Bypass Chowk & Lodhran Road (FREE Delivery)</option>
                  <option value="Model Town Dunyapur">Dunyapur City — Model Town / Housing Colonies (FREE Delivery)</option>
                  <option value="College Road, Dunyapur">Dunyapur City — College Road & Stadium Area (FREE Delivery)</option>
                  <option value="Kehror Pacca Road">Outside City — Kehror Pacca Road (Rs. 150)</option>
                  <option value="Dhanot Road">Outside City — Dhanot Road Area (Rs. 150)</option>
                  <option value="Pick up from Branch (Dokota Road)">Self Pick-up from Branch (Near Allied Bank, Dokota Road)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                  Exact Street Address & House # *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House #, Street #, Sector / Block"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 block mb-1.5 uppercase tracking-wider">
                  Kitchen Notes / Special Request (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Extra spicy, extra garlic sauce, ring bell"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2">
              <label className="text-xs font-bold text-zinc-300 block mb-2 uppercase tracking-wider">
                Select Payment Method
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
                  { id: 'easypaisa', label: 'EasyPaisa', icon: CreditCard },
                  { id: 'jazzcash', label: 'JazzCash', icon: CreditCard },
                  { id: 'card', label: 'Card on Delivery', icon: CreditCard },
                ].map((pm) => {
                  const isSelected = formData.paymentMethod === pm.id;
                  const Icon = pm.icon;
                  return (
                    <button
                      type="button"
                      key={pm.id}
                      onClick={() => setFormData({ ...formData, paymentMethod: pm.id as any })}
                      className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-red-950/60 border-yellow-400 text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-yellow-400' : 'text-zinc-400'}`} />
                      <span className="text-[11px] font-bold leading-tight">{pm.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bill Summary */}
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-semibold text-white tabular-nums">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Delivery</span>
                <span className="font-semibold tabular-nums">
                  {isFreeDelivery ? (
                    <span className="text-yellow-400 font-bold">FREE (City Area)</span>
                  ) : (
                    `Rs. ${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-zinc-800">
                <span>Grand Total</span>
                <span className="text-base text-yellow-400 font-black tabular-nums">Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            {/* WhatsApp Direct Dispatch Notice */}
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-2 text-xs text-emerald-300">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Order goes directly to WhatsApp number <strong>{RESTAURANT_INFO.cartOrderWhatsAppDisplay}</strong></span>
            </div>

            {/* Place Order CTA - Red & Yellow */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-red-600/35 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Routing to WhatsApp...</span>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to WhatsApp ({RESTAURANT_INFO.cartOrderWhatsAppDisplay})</span>
                  <ArrowRight className="w-4 h-4 text-yellow-200" />
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
