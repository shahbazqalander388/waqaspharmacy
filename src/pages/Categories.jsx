import Section from '../components/common/Section';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    { title: "Prescription Medicines", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?auto=format&fit=crop&q=80&w=600" },
    { title: "OTC Medicines", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600" },
    { title: "Vitamins & Supplements", image: "https://images.unsplash.com/photo-1577401239170-89895cea000b?auto=format&fit=crop&q=80&w=600" },
    { title: "Baby Care", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600" },
    { title: "Personal Care", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600" },
    { title: "Health & Wellness", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" },
    { title: "Medical Equipment", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600" },
    { title: "First Aid", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <Section id="categories" bg="gray" title="Explore Our Range" subtitle="Medicine Categories">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-4 aspect-h-3 h-64">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/16a34a/ffffff?text=${encodeURIComponent(cat.title)}` }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-white text-xl font-bold">{cat.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Categories;
