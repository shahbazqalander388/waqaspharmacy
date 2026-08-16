import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { title: "Prescription Medicines", badge: "Verified", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?auto=format&fit=crop&q=80&w=600" },
    { title: "OTC Remedies", badge: "Fast Relief", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600" },
    { title: "Vitamins & Supplements", badge: "Wellness", image: "https://images.unsplash.com/photo-1577401239170-89895cea000b?auto=format&fit=crop&q=80&w=600" },
    { title: "Baby & Mother Care", badge: "Gentle Care", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600" },
    { title: "Personal Care", badge: "Hygiene", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600" },
    { title: "Health & Nutrition", badge: "Daily Life", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" },
    { title: "Medical Equipment", badge: "Certified", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600" },
    { title: "First Aid & Wound Care", badge: "Essential", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <Section 
      id="categories" 
      title="Explore Medicine Categories" 
      subtitle="Comprehensive Inventory"
      description="Browse our wide selection of certified pharmaceuticals, healthcare supplies, and everyday wellness items."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="relative group rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white"
          >
            <div className="h-60 w-full overflow-hidden relative">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = `https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?auto=format&fit=crop&q=80&w=600`; 
                }}
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#ECFEFF]/90 backdrop-blur-xs text-[#0F766E] text-xs font-bold shadow-xs">
                  {cat.badge}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-lg font-bold leading-snug drop-shadow-xs">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center shrink-0 group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300">
                  <FaArrowRight className="text-xs" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Categories;
