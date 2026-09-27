import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Flame, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO, pizzaHubLogoImg } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleDirectWhatsAppOrder = () => {
    const targetWhatsApp = RESTAURANT_INFO.cartOrderWhatsAppFormatted || '923027191115';
    const itemsList = items
      .map((it, idx) => {
        const name = 'name' in it.item ? it.item.name : it.item.title;
        const itemTotal = it.item.price * it.quantity;
        return `${idx + 1}. *${name}* x ${it.quantity} = Rs. ${itemTotal.toLocaleString()}`;
      })
      .join('\n');

    const message = `🍕 *NEW ORDER - THE PIZZA HUB DUNYAPUR* 🍕
*Food For Life*
----------------------------------------
📋 *ORDER ITEMS:*
${itemsList}
----------------------------------------
💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}
🛵 *Delivery:* FREE (Dunyapur City Only)
💰 *ESTIMATED TOTAL:* Rs. ${subtotal.toLocaleString()}
----------------------------------------
_Please send this message and provide your delivery address & contact number._

📍 Near Allied Bank, Dokota Road, Dunyapur
🌐 www.Thepizzahubdunyapur.com`;

    const url = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111115] border-l border-zinc-800 text-white flex flex-col shadow-2xl">
          
          {/* Drawer Header with Red & Yellow Brand */}
          <div className="p-5 border-b border-zinc-800 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 flex items-center justify-between">
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
                  <h3 className="text-base font-black text-white">THE PIZZA <span className="text-red-500">HUB</span></h3>
                  <span className="text-[10px] font-black text-yellow-400 uppercase tracking-wider bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/30">
                    Food For Life
                  </span>
                </div>
                <span className="text-xs text-zinc-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in basket · Free City Delivery
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery in City Badge */}
          <div className="p-3.5 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border-b border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shrink-0" />
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-black text-yellow-400 uppercase tracking-wide">
                  Free Delivery:
                </span>
                <span className="text-zinc-200 font-medium">
                  In Dunyapur City only!
                </span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">
              Direct dispatch to WhatsApp Hotline: <span className="text-emerald-400 font-bold">{RESTAURANT_INFO.cartOrderWhatsAppDisplay}</span>
            </p>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-850 flex items-center justify-center mx-auto text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Your basket is empty</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Add delicious stone-baked pizzas, crunchy zingers, or loaded fries from our menu to get started!
                  </p>
                </div>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-500/40 transition-colors flex gap-3.5 items-center justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-red-500">
                    <Flame className="w-6 h-6 text-yellow-400" />
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-sm font-bold text-white truncate">
                      {'name' in cartItem.item ? cartItem.item.name : cartItem.item.title}
                    </h4>
                    <span className="text-xs text-zinc-400 block font-medium">
                      Rs. {cartItem.item.price.toLocaleString()} each
                    </span>
                    <span className="text-xs font-black text-yellow-400 tabular-nums">
                      Rs. {(cartItem.item.price * cartItem.quantity).toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 bg-zinc-950 px-2 py-1 rounded-lg border border-zinc-800 shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, -1)}
                      className="p-1 text-zinc-400 hover:text-white"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white w-5 text-center tabular-nums">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, 1)}
                      className="p-1 text-zinc-400 hover:text-yellow-400"
                      title="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(cartItem.id)}
                      className="p-1 ml-1 text-zinc-500 hover:text-red-400 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-[#0e0e12] space-y-3.5">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white tabular-nums">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>Delivery (Dunyapur City)</span>
                  <span className="font-bold text-yellow-400">FREE</span>
                </div>

                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-zinc-800">
                  <span>Total Amount</span>
                  <span className="text-lg text-yellow-400 font-black tabular-nums">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Quick Order Button (03027191115) */}
              <button
                onClick={handleDirectWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>Quick WhatsApp Order ({RESTAURANT_INFO.cartOrderWhatsAppDisplay})</span>
              </button>

              {/* Complete Delivery Details Checkout Button (Red and Yellow Gradient) */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <span>Full Delivery Checkout</span>
                <ArrowRight className="w-4 h-4 text-yellow-200" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
