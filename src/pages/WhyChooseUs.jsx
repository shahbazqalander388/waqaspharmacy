import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserMd, FaTags, FaClock, FaSmile, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { 
      icon: <FaShieldAlt />, 
      title: "100% Genuine Medicines", 
      desc: "Zero tolerance for counterfeit drugs. Every product is sourced directly from licensed pharmaceutical companies and verified distributors." 
    },
    { 
      icon: <FaUserMd />, 
      title: "Qualified Pharmacists", 
      desc: "Licensed healthcare professionals on-site to review prescriptions, advise dosages, and prevent drug interactions." 
    },
    { 
      icon: <FaClock />, 
      title: "Trusted Since 2007", 
      desc: "Over 16 years of unwavering clinical dedication and pharmaceutical service to families across Peshawar." 
    },
    { 
      icon: <FaTags />, 
      title: "Fair & Regulated Prices", 
      desc: "Honest government-compliant pricing and accessible rates across all life-saving medications and daily wellness items." 
    },
    { 
      icon: <FaSmile />, 
      title: "Patient-First Care", 
      desc: "Compassionate, courteous, and attentive customer service designed to make your health journey easier and stress-free." 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Prime Central Location", 
      desc: "Centrally positioned at Dabgari Garden Chowk, Peshawar, with rapid accessibility from all surrounding clinics and hospitals." 
    },
    { 
      icon: <FaComments />, 
      title: "Free Healthcare Guidance", 
      desc: "Complimentary consultation regarding dosage routines, blood pressure monitoring, and wellness management." 
    },
  ];

  return (
    <Section 
      id="why-choose-us" 
      title="Why Choose Waqas Pharmacy" 
      subtitle="The Trusted Difference"
      description="We prioritize patient safety, authenticity, and clinical care above all else."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.4 }}
            className="bg-white p-7 rounded-3xl shadow-xs border border-slate-100 hover:border-teal-200/80 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-[#ECFEFF] text-[#0F766E] rounded-2xl flex items-center justify-center text-xl mb-5 group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300 shadow-2xs">
              {reason.icon}
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#0F766E] transition-colors">
              {reason.title}
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
