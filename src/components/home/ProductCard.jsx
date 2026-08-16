import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Eye, ShieldCheck, Star } from 'lucide-react';

const ProductCard = ({ product, onQuickView }) => {
  const whatsappOrderUrl = `https://wa.me/923349238785?text=${encodeURIComponent(
    `Hello Waqas Pharmacy, I want to order this item:\n\n📦 Product: ${product.name}\n💰 Price: PKR ${product.price.toLocaleString()}\n🏷️ Category: ${product.categoryLabel}\n💊 Pack/Dosage: ${product.dosage}\n\nPlease confirm availability and delivery time.`
  )}`;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top Media & Badges */}
      <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600";
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.discount && (
            <span className="bg-rose-500 text-white text-[11px] font-extrabold px-2.5 py-0.8 rounded-full shadow-xs uppercase tracking-wider">
              {product.discount}
            </span>
          )}
          {product.badge && (
            <span className="bg-[#0F172A]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Floating Button */}
        <button
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 hover:text-[#0F766E] hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Brand watermark pill */}
        <div className="absolute bottom-2.5 left-3">
          <span className="text-[10px] font-bold bg-white/90 backdrop-blur-xs text-slate-600 px-2 py-0.5 rounded-md border border-slate-100">
            {product.brand}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3.5">
        <div>
          {/* Rating and In Stock status */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 text-[10px] font-normal">({product.reviewsCount})</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              In Stock
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug line-clamp-2 hover:text-[#0F766E] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Dosage / Pack Subtitle */}
          <p className="text-xs text-[#64748B] font-medium mt-1">
            {product.dosage}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="space-y-3 pt-1 border-t border-slate-100">
          {/* Price container */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-black text-[#0F172A]">
              PKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through font-semibold">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* WhatsApp Primary Order CTA */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-xl shadow-md shadow-green-950/10 hover:shadow-green-950/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <FaWhatsapp className="text-lg" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
