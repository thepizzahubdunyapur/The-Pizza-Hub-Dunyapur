import React, { useState, useMemo } from 'react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Plus, Search, Check, Flame, Sparkles } from 'lucide-react';

interface PopularMenuProps {
  onAddToCart: (item: MenuItem) => void;
  onSelectCategory?: (category: Category) => void;
}

const CATEGORIES: Category[] = [
  'All',
  'Pizza',
  'Burgers',
  'Wings & Nuggets',
  'Rolls',
  'Fries',
  'Pasta & Rice',
  'Drinks',
];

export const PopularMenu: React.FC<PopularMenuProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPizzaSizes, setSelectedPizzaSizes] = useState<Record<string, 'S' | 'M' | 'L' | 'F'>>({});
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectSize = (itemId: string, size: 'S' | 'M' | 'L' | 'F') => {
    setSelectedPizzaSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handleAdd = (item: MenuItem) => {
    let itemToAdd = item;
    if (item.sizeOptions && item.sizeOptions.length > 0) {
      const chosenSize = selectedPizzaSizes[item.id] || item.sizeOptions[0].size;
      const sizeOpt = item.sizeOptions.find((opt) => opt.size === chosenSize) || item.sizeOptions[0];
      itemToAdd = {
        ...item,
        id: `${item.id}-${chosenSize}`,
        name: `${item.name} (${sizeOpt.label})`,
        price: sizeOpt.price,
      };
    }

    onAddToCart(itemToAdd);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 relative border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 text-red-500" />
            <span>The Pizza Hub Dunyapur · Food For Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our Full Menu
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            Stone-baked artisan pizzas (Small, Medium, Large, Family), stuffed crusts, crispy zinger burgers, paratha rolls, and loaded sides.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-yellow-500/20">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-yellow-300 border border-yellow-400/40 shadow-lg shadow-red-600/30'
                      : 'bg-zinc-950/80 text-zinc-300 hover:text-yellow-400 hover:bg-zinc-900 border border-yellow-500/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-yellow-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizzas, burgers, rolls..."
              className="w-full bg-zinc-950/90 border border-yellow-500/30 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedItemIds[item.id];
            const currentSize = item.sizeOptions
              ? selectedPizzaSizes[item.id] || item.sizeOptions[0].size
              : null;
            const currentPrice = item.sizeOptions
              ? item.sizeOptions.find((opt) => opt.size === currentSize)?.price || item.price
              : item.price;

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-gradient-to-br from-[#250404]/90 via-[#1c0303]/90 to-[#140202] border border-yellow-400/30 hover:border-yellow-400/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-1"
              >
                {/* Item Image Container - only rendered for items with real images (Burgers, Fries, etc.) */}
                {item.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.isPopular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm shadow flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-600/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm shadow flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {item.subCategory && (
                      <div className="absolute bottom-2.5 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/30">
                        {item.subCategory}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Clean, upscale typography header for items without pictures (Pizzas) */
                  <div className="p-4 pb-1 border-b border-zinc-800/50 bg-gradient-to-r from-red-950/30 via-zinc-900/60 to-zinc-900/40 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.subCategory && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                          {item.subCategory}
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded bg-red-600/80 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="px-2 py-0.5 rounded bg-orange-600/80 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                          <Flame className="w-2.5 h-2.5" />
                          Spicy
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      {item.category}
                    </span>
                  </div>
                )}

                {/* Item Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span className="font-semibold uppercase tracking-wider text-orange-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Size Selector for Pizzas & Pastas */}
                    {item.sizeOptions && item.sizeOptions.length > 0 && (
                      <div className="pt-2">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-1">
                          Select Size:
                        </label>
                        <div className="grid grid-cols-4 gap-1">
                          {item.sizeOptions.map((opt) => {
                            const isSelected = currentSize === opt.size;
                            return (
                              <button
                                key={opt.size}
                                type="button"
                                onClick={() => handleSelectSize(item.id, opt.size)}
                                className={`py-1 px-1 rounded-md text-[11px] font-black border transition-all cursor-pointer text-center ${
                                  isSelected
                                    ? 'bg-yellow-400 text-black border-yellow-300 shadow-md font-black'
                                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                                }`}
                              >
                                {opt.size} <span className="block text-[9px] font-semibold">Rs.{opt.price}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price and Add-To-Cart Action */}
                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                        {item.sizeOptions ? 'Selected Price' : 'Price'}
                      </span>
                      <span className="text-base sm:text-lg font-black text-yellow-400 tabular-nums tracking-tight">
                        Rs. {currentPrice.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      disabled={isAdded}
                      className={`px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                          : 'bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white shadow-red-600/30 hover:scale-105 active:scale-95'
                      }`}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-yellow-200" />
                          <span>Add</span>
                        </>
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
