import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaUserMd, FaClock, FaCheckCircle } from 'react-icons/fa';
import AnimatedCounter from '../components/common/AnimatedCounter';

const Home = () => {
  const stats = [
    { value: 16, label: 'Years of Experience', suffix: '+' },
    { value: 50, label: 'Satisfied Customers', suffix: 'k+' },
    { value: 8, label: 'Product Categories' },
    { value: 99, label: 'Satisfaction Rate', suffix: '%' },
  ];

  const highlights = [
    { icon: <FaShieldAlt className="text-[#0F766E]" />, text: "100% Genuine Medicines" },
    { icon: <FaUserMd className="text-[#2563EB]" />, text: "Licensed Pharmacists" },
    { icon: <FaClock className="text-[#0F766E]" />, text: "Open 7:00 AM - 12:00 AM" },
  ];

  const handleScroll = (id) => {
    window.history.pushState(null, '', `#${id}`);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="pt-24 lg:pt-32 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFEFF] text-[#0F766E] border border-teal-200/80 font-bold text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-ping inline-block"></span>
                <span>Established 2007 • Dabgari Garden, Peshawar</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Your Trusted <span className="text-[#0F766E]">Healthcare</span> & Pharmacy Partner
              </h1>

              <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl">
                Providing genuine prescription medicines, trusted healthcare advice, and premium wellness essentials with over 16 years of clinical excellence in Peshawar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="tel:+923349238785" 
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0F766E] hover:bg-[#115E59] text-white px-7 py-4 rounded-xl font-bold text-base shadow-md shadow-teal-900/15 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span>Call Now</span>
                </a>

                <a 
                  href="https://wa.me/923349238785" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB] px-7 py-4 rounded-xl font-bold text-base shadow-xs transition-all duration-200"
                >
                  <FaWhatsapp className="text-lg text-green-600" />
                  <span>WhatsApp Order</span>
                </a>

                <button 
                  onClick={() => handleScroll('about')} 
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-[#64748B] hover:text-[#0F766E] font-semibold text-base transition-colors"
                >
                  Learn More →
                </button>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 py-1 text-sm font-semibold text-[#0F172A]">
                    <div className="w-7 h-7 rounded-lg bg-[#ECFEFF] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 rounded-3xl filter blur-2xl transform -rotate-2"></div>
                
                {/* Main Hero Card */}
                <div className="relative bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-xl">
                  {/* Floating Experience Badge at Top-Left */}
                  <div className="absolute -top-5 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F766E] text-white font-extrabold flex items-center justify-center text-base sm:text-lg shadow-xs">
                      16+
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Trusted</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">Years of Service</div>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-slate-100 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800" 
                      alt="Modern Pharmacy & Genuine Medicine Dispensing" 
                      className="w-full h-full object-cover object-center"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-widest text-[#ECFEFF] font-bold">Waqas Pharmacy</p>
                      <p className="text-lg font-bold">Dabgari Garden Chowk, Peshawar</p>
                    </div>
                  </div>

                  {/* Quick Feature Badges Inside Card - Fully visible without any overlapping */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#ECFEFF] border border-teal-100 flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0F766E] text-white flex items-center justify-center shrink-0">
                        <FaCheckCircle className="text-base sm:text-lg" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-[#64748B] font-medium truncate">Authenticity</div>
                        <div className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">100% Genuine</div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-100 flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                        <FaClock className="text-base sm:text-lg" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-[#64748B] font-medium truncate">Daily Timings</div>
                        <div className="text-xs sm:text-sm font-bold text-[#0F172A] truncate">7 AM - 12 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
