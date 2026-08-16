import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Search, ArrowUpDown, Sparkles, Check, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../../data/categories';

const ProductGrid = ({ 
  products, 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  setSearchQuery, 
  onQuickView 
}) => {
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'discount'
  const [inStockOnly, setInStockOnly] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        // Search filter
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = !query || (
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.categoryLabel.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.dosage.toLowerCase().includes(query)
        );

        // Stock filter
        const matchesStock = !inStockOnly || product.inStock;

        return matchesCategory && matchesSearch && matchesStock;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') {
          return a.price - b.price;
        }
        if (sortBy === 'price-high') {
          return b.price - a.price;
        }
        if (sortBy === 'discount') {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) : 0;
          const discountB = b.originalPrice ? (b.originalPrice - b.price) : 0;
          return discountB - discountA;
        }
        // default: featured / rating
        return b.rating - a.rating;
      });
  }, [products, selectedCategory, searchQuery, sortBy, inStockOnly]);

  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  return (
    <section id="product-catalog" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1 text-xs font-black text-[#0F766E] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Certified Pharmacy Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            {searchQuery ? `Search Results for "${searchQuery}"` : activeCategoryObj.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
            {activeCategoryObj.tagline}
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 self-start md:self-auto">
          
          {/* Sorting Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold py-2 sm:py-2.5 pl-3.5 pr-8 rounded-xl shadow-xs focus:ring-2 focus:ring-teal-500/20 focus:border-[#0F766E] outline-none cursor-pointer"
            >
              <option value="featured">✨ Featured & Top Rated</option>
              <option value="price-low">💵 Price: Low to High</option>
              <option value="price-high">💎 Price: High to Low</option>
              <option value="discount">🔥 Biggest Discounts</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Results count indicator */}
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-2 rounded-xl">
            {filteredProducts.length} Items Found
          </span>
        </div>
      </div>

      {/* Quick Search Chips if search active */}
      {searchQuery && (
        <div className="flex items-center gap-2 mb-6 p-3 bg-teal-50/80 border border-teal-200 rounded-2xl">
          <Search className="w-4 h-4 text-[#0F766E]" />
          <span className="text-xs font-bold text-slate-800">
            Filtering by: <span className="text-[#0F766E]">"{searchQuery}"</span>
          </span>
          <button 
            onClick={() => setSearchQuery('')}
            className="ml-auto text-xs font-extrabold text-slate-500 hover:text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1 cursor-pointer"
          >
            <X className="w-3 h-3" />
            Clear Filter
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0F766E] flex items-center justify-center mx-auto text-2xl">
            <Search className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
            No matching products found
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B]">
            We couldn't find any products matching your search term. You can chat with our pharmacist directly on WhatsApp to check availability!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer w-full sm:w-auto"
            >
              Reset Filters
            </button>
            <a
              href={`https://wa.me/923349238785?text=${encodeURIComponent(
                `Hello Waqas Pharmacy, I am searching for "${searchQuery || 'a medicine'}" which is not showing on the website. Is it available in stock?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors cursor-pointer w-full sm:w-auto"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      )}

    </section>
  );
};

export default ProductGrid;
