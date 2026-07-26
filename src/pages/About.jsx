import Section from '../components/common/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" bg="gray" title="Our Journey" subtitle="About Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
            alt="Pharmacist helping a customer" 
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            loading="lazy"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x1000/16a34a/ffffff?text=About+Us" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
        >
          <div className="space-y-4 text-gray-800 text-lg leading-relaxed font-medium">
            <p>
              Established in 2007, Waqas Pharmacy began with a simple mission: to provide the people of Peshawar with reliable, genuine medicines and exceptional customer care.
            </p>
            <p>
              Over the past 16+ years, we have grown into one of the most trusted names in the region. We understand that health is your most valuable asset, which is why we never compromise on the quality of our products.
            </p>
            <p>
              Our experienced and qualified staff are always on hand to offer professional advice, ensure you understand your prescriptions, and guide you towards a healthier lifestyle.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-white">
              <h3 className="text-xl font-bold text-primary-600 mb-2">Our Mission</h3>
              <p className="text-gray-700 text-sm font-medium">To enhance the quality of life in our community through exceptional pharmacy services.</p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-white">
              <h3 className="text-xl font-bold text-primary-600 mb-2">Our Vision</h3>
              <p className="text-gray-700 text-sm font-medium">To be the first choice for healthcare and wellness in Peshawar.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
