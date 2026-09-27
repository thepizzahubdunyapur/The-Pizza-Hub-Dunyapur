import React, { useState } from 'react';
import { SpecialDeal } from '../types';
import { SPECIAL_DEALS } from '../data/menuData';
import { Check, Flame, Tag, Users, Sparkles } from 'lucide-react';

interface SpecialDealsProps {
  onAddDealToCart: (deal: SpecialDeal) => void;
}

type DealFilter = 'All' | 'Featured Poster Deals' | 'Regular Deals' | 'Pizza Deals' | 'Family Deals';

export const SpecialDeals: React.FC<SpecialDealsProps> = ({ onAddDealToCart }) => {
  const [activeTab, setActiveTab] = useState<DealFilter>('All');
  const [addedDealIds, setAddedDealIds] = useState<Record<string, boolean>>({});

  const handleOrderDeal = (deal: SpecialDeal) => {
    onAddDealToCart(deal);
    setAddedDealIds((prev) => ({ ...prev, [deal.id]: true }));
    setTimeout(() => {
      setAddedDealIds((prev) => ({ ...prev, [deal.id]: false }));
    }, 1500);
  };

  const filteredDeals = SPECIAL_DEALS.filter((deal) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Featured Poster Deals') return deal.id.includes('xtreme') || deal.id.includes('injected');
    if (activeTab === 'Regular Deals') return deal.id.includes('regular');
    if (activeTab === 'Pizza Deals') return deal.id.includes('pizza');
    if (activeTab === 'Family Deals') return deal.id.includes('family');
    return true;
  });

  return (
    <section id="deals" className="py-16 sm:py-24 relative overflow-hidden border-t border-yellow-500/20">
      {/* Background flare */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/20 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/15 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4 text-red-500" />
              <span>Mega Savings · Free City Delivery · Food For Life</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Special Deals & Combos
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Official Xtreme Duo Box, Crispy Injected Nuggets, Regular Deals, Pizza Deals, and Family Combos.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-bold text-yellow-400 bg-yellow-950/60 border border-yellow-600/40 px-3.5 py-1.5 rounded-full">
            <Tag className="w-4 h-4 text-red-500" />
            <span>Free Delivery In City Only</span>
          </div>
        </div>

        {/* Deal Category Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {(['All', 'Featured Poster Deals', 'Regular Deals', 'Pizza Deals', 'Family Deals'] as DealFilter[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 border border-yellow-300 font-black'
                    : 'bg-zinc-950/80 text-zinc-300 hover:text-yellow-400 border border-yellow-500/20 hover:bg-zinc-900'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => {
            const isAdded = addedDealIds[deal.id];
            const isSpecialPosterDeal = deal.id.includes('xtreme') || deal.id.includes('injected');

            return (
              <div
                key={deal.id}
                className={`group relative rounded-3xl bg-gradient-to-br from-[#240404]/90 via-[#1c0303]/90 to-[#140202] border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isSpecialPosterDeal
                    ? 'border-yellow-400/70 hover:border-yellow-300 shadow-lg shadow-red-600/20'
                    : 'border-yellow-400/30 hover:border-yellow-400/80 hover:shadow-red-600/15'
                }`}
              >
                {/* Header Strip with Badge and Serves */}
                <div
                  className={`p-4 border-b flex items-center justify-between ${
                    isSpecialPosterDeal
                      ? 'bg-gradient-to-r from-red-900/60 via-amber-900/40 to-zinc-900 border-amber-500/30'
                      : 'bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border-zinc-800'
                  }`}
                >
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 ${
                      isSpecialPosterDeal
                        ? 'bg-amber-500 text-black shadow-amber-500/30'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {isSpecialPosterDeal && <Sparkles className="w-3 h-3 text-black" />}
                    {deal.badge}
                  </span>
                  
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950 text-zinc-300 text-[11px] font-semibold border border-zinc-800">
                    <Users className="w-3 h-3 text-orange-400" />
                    <span>{deal.serves}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {deal.title}
                    </h3>

                    {/* Deal Items Included List */}
                    <ul className="mt-3 space-y-2">
                      {deal.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-zinc-300 flex items-start gap-2"
                        >
                          <span className="text-red-500 font-bold leading-none mt-0.5">•</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500 line-through tabular-nums">
                          Rs. {deal.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-900">
                          Save Rs.{deal.savings}
                        </span>
                      </div>
                      <span className="text-xl font-black text-yellow-400 tabular-nums">
                        Rs. {deal.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderDeal(deal)}
                      disabled={isAdded}
                      className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                          : 'bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white shadow-red-600/30 hover:scale-105 active:scale-95'
                      }`}
                      aria-label={`Claim ${deal.title}`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added</span>
                        </>
                      ) : (
                        <span>Order Deal</span>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
