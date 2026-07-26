import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import AnimatedCounter from '../components/common/AnimatedCounter';
import TestimonialSlider from '../components/common/TestimonialSlider';

const Home = () => {
  const stats = [
    { value: 16, label: 'Years Experience', suffix: '+' },
    { value: 50, label: 'Happy Customers', suffix: 'k+' },
    { value: 8, label: 'Categories' },
    { value: 99, label: 'Satisfaction', suffix: '%' },
  ];

  const testimonials = [
    { text: "Best pharmacy in Peshawar! The staff is incredibly helpful and they always have the genuine medicines I need.", name: "Ahmed Khan", role: "Regular Customer" },
    { text: "I trust Waqas Pharmacy for all my family's healthcare needs. Their service since 2007 has been consistently excellent.", name: "Sara Ali", role: "Local Resident" },
    { text: "Very professional environment and knowledgeable pharmacists. Highly recommended!", name: "Dr. Bilal", role: "Healthcare Professional" }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070" 
            alt="Pharmacy background" 
            className="w-full h-full object-cover object-center opacity-10"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/2000x1000/16a34a/ffffff?text=Waqas+Pharmacy" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 tracking-wide uppercase">
                Established 2007
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Trusted <span className="text-primary-600">Healthcare</span> Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Providing genuine medicines, professional advice, and comprehensive healthcare solutions for you and your family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+923349238785" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center shadow-lg shadow-primary-500/30">
                  Call Now
                </a>
                <button onClick={() => handleScroll('about')} className="bg-white border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section bg="primary">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="white" title="What Our Customers Say" subtitle="Testimonials">
        <TestimonialSlider testimonials={testimonials} />
      </Section>
    </div>
  );
};

export default Home;
