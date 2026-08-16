import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  {
    id: "prescription",
    title: "Prescription Medicines",
    badge: "Verified Rx",
    badgeColor: "bg-red-50 text-[#B91C1C] border-red-200",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600",
    desc: "Doctor prescribed antibiotics, cardiac, diabetes, hypertension, and specialty medications dispensed with licensed pharmacist supervision.",
    popular: "Augmentin, Nexum, Lipitor, Glucophage"
  },
  {
    id: "otc",
    title: "OTC Remedies & Pain Relief",
    badge: "Fast Relief",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600",
    desc: "Over-the-counter painkillers, flu relief, fever reducers, antacids, digestive health, and cough syrups for fast recovery.",
    popular: "Panadol Extra, Brufen, Disprin, Softin"
  },
  {
    id: "vitamins",
    title: "Vitamins & Supplements",
    badge: "Daily Vitality",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600",
    desc: "Imported & certified local multivitamins, omega-3 fish oil, calcium, vitamin D3, zinc, and daily immunity boosters.",
    popular: "Centrum, Surbex Z, Nature's Bounty, Vitamax"
  },
  {
    id: "baby",
    title: "Baby & Mother Care",
    badge: "Gentle Care",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
    desc: "Hypoallergenic infant milk formulas, gentle baby shampoos, diaper rash creams, feeding gear, and maternal wellness.",
    popular: "Pampers, Sudocrem, Johnson's, Aptamil"
  },
  {
    id: "skincare",
    title: "Dermatology & Skincare",
    badge: "Derm-Approved",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600",
    desc: "Therapeutic dermatological moisturizers, sunscreens, acne solutions, gentle cleansers, and medical skin treatments.",
    popular: "CeraVe, Cetaphil, La Roche-Posay, The Ordinary"
  },
  {
    id: "devices",
    title: "Medical Equipment & Devices",
    badge: "Clinical Grade",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600",
    desc: "Digital blood pressure monitors, glucometers with strips, mesh nebulizers, infrared thermometers, and pulse oximeters.",
    popular: "Omron M2, Accu-Chek, Beurer, Rossmax"
  },
  {
    id: "personal",
    title: "Personal Care & Hygiene",
    badge: "Hygiene Care",
    badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=600",
    desc: "Hospital-grade antiseptic disinfectants, sensitive toothpastes, hand sanitizers, shaving essentials, and personal wellness.",
    popular: "Dettol, Sensodyne, Listerine, Gillette"
  },
  {
    id: "firstaid",
    title: "First Aid & Wound Care",
    badge: "Emergency Care",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600",
    desc: "Sterile bandages, pyodine solutions, surgical gauzes, medical adhesive tapes, burn relief, and complete first aid kits.",
    popular: "Pyodine, Saniplast, Crepe Bandages, Gauze Packs"
  }
];

const CategoryShowcase = () => {
  return (
    <section id="categories" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
        <div className="inline-flex items-center gap-2 bg-red-50 text-[#B91C1C] border border-red-200 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#B91C1C]" />
          <span>Comprehensive Pharmacy Inventory</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
          Explore Certified Medicine Categories
        </h2>
        <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed">
          Browse our certified pharmaceuticals, healthcare supplies, and everyday wellness items. Contact our pharmacists directly on WhatsApp for instant order confirmation and home delivery.
        </p>
      </div>

      {/* Category Grid with Crystal Clear Typography (Title & Text Outside Image) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, idx) => {
          const whatsappUrl = `https://wa.me/923349238785?text=${encodeURIComponent(
            `Hello Waqas Pharmacy, I want to inquire/order medicines from the "${cat.title}" category.\n\nPlease share details and availability.`
          )}`;

          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clear Bright Image Container with Badge */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600"; 
                    }}
                  />
                  
                  {/* Category Pill on Image Top */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-black shadow-xs border ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content (Title, Description & Items - Highly Readable on White) */}
                <div className="p-5 space-y-3">
                  {/* Clear Category Title */}
                  <h3 className="text-lg font-black text-[#0F172A] leading-snug group-hover:text-[#B91C1C] transition-colors">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {cat.desc}
                  </p>

                  {/* Popular items container */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-extrabold text-[#0F172A] mb-0.5">Common Medicines:</div>
                    <div className="text-[#64748B] font-semibold text-[11px] leading-tight">
                      {cat.popular}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="p-5 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md shadow-green-950/15 hover:shadow-green-950/25 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Inquire / Order on WhatsApp</span>
                </a>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default CategoryShowcase;
