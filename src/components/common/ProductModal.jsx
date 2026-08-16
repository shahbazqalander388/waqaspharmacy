import React, { useEffect } from 'react';
import { X, ShieldCheck, Star, CheckCircle2, Truck, Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const whatsappOrderUrl = `https://wa.me/923349238785?text=${encodeURIComponent(
    `Hello Waqas Pharmacy, I want to order this item:\n\n📦 Product: ${product.name}\n💰 Price: PKR ${product.price.toLocaleString()}\n🏷️ Category: ${product.categoryLabel}\n💊 Pack/Dosage: ${product.dosage}\n\nPlease confirm availability and delivery time.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Card */}
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Media Column */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600";
                }}
              />
              {product.discount && (
                <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Trust highlights */}
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 text-xs text-teal-800 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                <span>100% Genuine Pharmacy Certified</span>
              </div>
              <p className="text-[11px] text-teal-700 font-medium">
                Sourced directly from authorized pharmaceutical distributors.
              </p>
            </div>
          </div>

          {/* Right Product Details Column */}
          <div className="flex flex-col justify-between space-y-4">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0F766E] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-[#64748B] font-semibold">
                  Brand: {product.brand}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#0F172A] leading-snug">
                {product.name}
              </h2>

              <p className="text-xs font-semibold text-slate-500">
                Specification: {product.dosage}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold pt-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-2.5 pt-2">
                <span className="text-2xl font-black text-[#0F172A]">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through font-bold">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {product.description}
              </p>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Highlights:</h4>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action CTA */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-green-900/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Order Now on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-400 font-medium">
                ⚡ Instant WhatsApp confirmation & doorstep delivery in Peshawar
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
