import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserMd, FaTags, FaClock, FaSmile, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaShieldAlt />, title: "Genuine Medicines", desc: "100% authentic and verified medical products from trusted manufacturers." },
    { icon: <FaUserMd />, title: "Experienced Staff", desc: "Qualified pharmacists ready to provide expert advice and guidance." },
    { icon: <FaTags />, title: "Affordable Prices", desc: "Competitive pricing on all our healthcare products and medicines." },
    { icon: <FaClock />, title: "Trusted Since 2007", desc: "Over a decade of reliable service to the Peshawar community." },
    { icon: <FaSmile />, title: "Excellent Customer Service", desc: "Friendly, helpful, and professional care for every customer." },
    { icon: <FaMapMarkerAlt />, title: "Convenient Location", desc: "Easily accessible at Dabgari Garden Chowk, Peshawar." },
    { icon: <FaComments />, title: "Professional Advice", desc: "Free consultations and medication management advice." },
  ];

  return (
    <Section id="why-choose-us" bg="white" title="The Preferred Choice" subtitle="Why Choose Us">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-transparent hover:shadow-xl hover:border-primary-200 hover:bg-white transition-all group"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
            <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
