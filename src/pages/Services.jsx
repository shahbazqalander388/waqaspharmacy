import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaPrescriptionBottleAlt, FaHeartbeat, FaBaby, FaMedkit, FaBandAid, FaWheelchair } from 'react-icons/fa';

const Services = () => {
  const allServices = [
    { 
      icon: <FaPrescriptionBottleAlt />, 
      title: "Prescription Medicines", 
      desc: "Complete stock of authentic, temperature-controlled prescription medications sourced directly from verified manufacturers." 
    },
    { 
      icon: <FaMedkit />, 
      title: "OTC Remedies", 
      desc: "Instant relief over-the-counter essentials for colds, allergies, pain relief, fever, and digestive health." 
    },
    { 
      icon: <FaHeartbeat />, 
      title: "Vitamins & Supplements", 
      desc: "Premium quality multivitamins, minerals, dietary supplements, and immune boosters for all ages." 
    },
    { 
      icon: <FaBaby />, 
      title: "Baby Care Essentials", 
      desc: "Gentle dermatologically tested infant formulas, feeding gear, sensitive skin lotions, and baby wellness items." 
    },
    { 
      icon: <FaBandAid />, 
      title: "First Aid & Wound Care", 
      desc: "Surgical dressings, antiseptic solutions, sterile bandages, and comprehensive emergency first-aid supplies." 
    },
    { 
      icon: <FaWheelchair />, 
      title: "Medical Equipment", 
      desc: "Certified digital blood pressure monitors, glucometers, nebulizers, pulse oximeters, and patient mobility aids." 
    },
  ];

  return (
    <Section 
      id="services" 
      title="Comprehensive Healthcare Services" 
      subtitle="What We Offer"
      description="Reliable, high-grade pharmaceutical products and healthcare supplies tailored to the needs of every patient."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {allServices.map((srv, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200/80 group hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ECFEFF] text-[#0F766E] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#0F766E] group-hover:text-white transition-all duration-300 shadow-2xs">
              {srv.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0F766E] transition-colors">
              {srv.title}
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
