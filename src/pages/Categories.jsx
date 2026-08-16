import React from 'react';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { 
      title: "Prescription Medicines", 
      badge: "Verified Rx", 
      badgeColor: "bg-red-50 text-[#B91C1C] border-red-200",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600",
      desc: "Authentic antibiotics, cardiac, blood pressure, and specialty medications under qualified pharmacist supervision."
    },
    { 
      title: "OTC Remedies & Pain Relief", 
      badge: "Fast Relief", 
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600",
      desc: "Fast-acting cold, flu, cough syrups, antacids, and pain relief medications."
    },
    { 
      title: "Vitamins & Supplements", 
      badge: "Daily Vitality", 
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600",
      desc: "Daily multivitamins, minerals, fish oil omega-3, and immune system boosters."
    },
    { 
      title: "Baby & Mother Care", 
      badge: "Gentle Care", 
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
      desc: "Gentle baby washes, rash creams, infant formulas, and mother wellness items."
    },
    { 
      title: "Dermatology & Skincare", 
      badge: "Derm-Approved", 
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600",
      desc: "Therapeutic moisturizers, cleansers, sunscreens, and skin treatments."
    },
    { 
      title: "Medical Equipment & Devices", 
      badge: "Clinical Grade", 
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600",
      desc: "Accurate blood pressure monitors, glucometers, nebulizers, and digital thermometers."
    },
    { 
      title: "Personal Care & Hygiene", 
      badge: "Hygiene Care", 
      badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=600",
      desc: "Antiseptic liquids, sensitive oral care, sanitizers, and daily grooming supplies."
    },
    { 
      title: "First Aid & Wound Care", 
      badge: "Emergency Care", 
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600",
      desc: "Sterile bandages, antiseptic pyodine, dressings, and emergency medical kits."
    },
  ];

  return (
    <Section 
      id="categories" 
      title="Explore Medicine Categories" 
      subtitle="Comprehensive Inventory"
      description="Browse our wide selection of certified pharmaceuticals, healthcare supplies, and everyday wellness items."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const whatsappUrl = `https://wa.me/923349238785?text=${encodeURIComponent(
            `Hello Waqas Pharmacy, I want to inquire/order medicines from the "${cat.title}" category.\n\nPlease share details and availability.`
          )}`;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600"; 
                    }}
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-black shadow-xs border ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-lg font-black text-[#0F172A] leading-snug group-hover:text-[#B91C1C] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Bottom WhatsApp Button */}
              <div className="p-5 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-green-950/10 hover:shadow-green-950/20 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
