import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHeartbeat, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <Section 
      id="about" 
      title="Trusted Healthcare Since 2007" 
      subtitle="About Waqas Pharmacy"
      description="Serving Peshawar with authentic medicines, personalized consultations, and an uncompromised commitment to community wellbeing."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Pharmacist providing healthcare consultation" 
              className="rounded-2xl object-cover h-[460px] w-full"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000"; }}
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-slate-100 shadow-md flex items-center gap-2">
              <FaAward className="text-[#0F766E] text-lg" />
              <div>
                <p className="text-xs text-[#64748B] font-medium">Licensed Excellence</p>
                <p className="text-xs font-bold text-[#0F172A]">Dabgari Garden</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Story & Values Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xs border border-slate-200/80 space-y-5">
            <div className="flex items-center gap-3 text-[#0F766E] font-bold text-sm tracking-wider uppercase">
              <FaHeartbeat className="text-xl" />
              <span>Caring for our community</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug">
              Dedicated to Your Long-Term Health & Wellness
            </h3>

            <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
              <p>
                Established in 2007 at Dabgari Garden Chowk, Waqas Pharmacy was built on a singular guiding principle: to provide the people of Peshawar with guaranteed genuine medicines, transparent guidance, and exceptional patient care.
              </p>
              <p>
                Over the past 16+ years, we have grown into one of the most reliable and trusted pharmacies in the region. We understand that medicines are critical to life, which is why every product on our shelves is rigorously verified and directly sourced from authentic distributors.
              </p>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#ECFEFF] p-5 rounded-2xl border border-teal-100/80">
                <div className="flex items-center gap-2.5 text-[#0F766E] font-bold text-lg mb-2">
                  <FaBullseye className="text-lg" />
                  <h4>Our Mission</h4>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  To elevate community health in Peshawar through authentic medicines, compassionate service, and qualified pharmaceutical advice.
                </p>
              </div>

              <div className="bg-[#EFF6FF] p-5 rounded-2xl border border-blue-100/80">
                <div className="flex items-center gap-2.5 text-[#2563EB] font-bold text-lg mb-2">
                  <FaEye className="text-lg" />
                  <h4>Our Vision</h4>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  To be Peshawar’s foremost benchmark for clinical reliability, customer trust, and comprehensive everyday healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
