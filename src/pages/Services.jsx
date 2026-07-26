import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaPrescriptionBottleAlt, FaHeartbeat, FaBaby, FaMedkit, FaBandAid, FaWheelchair } from 'react-icons/fa';

const Services = () => {
  const allServices = [
    { icon: <FaPrescriptionBottleAlt />, title: "Prescription Medicines", desc: "We stock a complete range of authentic prescription medicines." },
    { icon: <FaMedkit />, title: "OTC Medicines", desc: "Over-the-counter remedies for common ailments." },
    { icon: <FaHeartbeat />, title: "Vitamins & Supplements", desc: "Boost your immunity and overall health." },
    { icon: <FaBaby />, title: "Baby Care", desc: "Gentle and safe products for your little ones." },
    { icon: <FaBandAid />, title: "First Aid & Wound Care", desc: "Essential supplies for immediate care." },
    { icon: <FaWheelchair />, title: "Medical Equipment", desc: "Reliable equipment for home healthcare monitoring." },
  ];

  return (
    <Section id="services" bg="white" title="Comprehensive Solutions" subtitle="Our Services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((srv, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white text-primary-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              {srv.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{srv.title}</h3>
            <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
