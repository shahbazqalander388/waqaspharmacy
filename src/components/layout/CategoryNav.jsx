import React from 'react';
import { 
  LayoutGrid, 
  Pill, 
  Sparkles, 
  HeartHandshake, 
  Baby, 
  Activity, 
  Smile, 
  Flame 
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

const iconMap = {
  LayoutGrid,
  Pill,
  Sparkles,
  HeartHandshake,
  Baby,
  Activity,
  Smile,
  Flame
};

const CategoryNav = ({ selectedCategory, onSelectCategory, productsCountByCategory }) => {
  return (
    <nav className="bg-white border-b border-slate-200/80 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || LayoutGrid;
            const isSelected = selectedCategory === cat.id;
            const count = productsCountByCategory ? productsCountByCategory[cat.id] : null;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('product-catalog');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#0F766E] text-white shadow-md shadow-teal-900/15 scale-[1.02]'
                    : 'bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  isSelected ? 'text-teal-200' : cat.id === 'deals' ? 'text-rose-500' : 'text-[#0F766E]'
                }`} />
                <span>{cat.name}</span>
                {cat.id === 'deals' && (
                  <span className="bg-rose-500 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    Hot
                  </span>
                )}
                {typeof count === 'number' && cat.id !== 'all' && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
