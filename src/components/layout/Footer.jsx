import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t-4 border-[#0F766E] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="inline-block bg-white p-2.5 rounded-2xl">
              <img 
                src="/logo.jpg" 
                alt="Waqas Pharmacy Logo" 
                className="h-14 w-auto object-contain" 
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Trusted healthcare in Peshawar since 2007. Providing guaranteed genuine medicines, qualified pharmacist consultation, and dedicated healthcare essentials.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.facebook.com/share/1BaLtPvjtm/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://wa.me/923349238785" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0F766E] hover:text-white transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  About Waqas Pharmacy
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  Healthcare Services
                </a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => handleNavClick(e, 'categories')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  Medicine Categories
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-400 hover:text-[#ECFEFF] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>
          
          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider text-xs">Contact Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#2DD4BF] shrink-0" />
                <span className="text-slate-400">Dabgari Garden Chowk,<br/>Peshawar, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#2DD4BF] shrink-0" />
                <a href="tel:+923349238785" className="text-slate-400 hover:text-white transition-colors">+92 334 9238785</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#2DD4BF] shrink-0 text-base" />
                <a href="https://wa.me/923349238785" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+92 334 9238785</a>
              </li>
            </ul>
          </div>
          
          {/* Col 4: Timings */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold mb-5 text-white uppercase tracking-wider text-xs">Working Hours</h4>
            <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-2xl space-y-1 text-sm">
              <p className="text-slate-400 text-xs uppercase font-semibold">Open Daily</p>
              <p className="text-white font-bold">Mon – Sun</p>
              <p className="text-[#5EEAD4] font-extrabold text-sm pt-1">7:00 AM – 12:00 AM</p>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Waqas Pharmacy. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Providing care with</span>
            <FaHeart className="text-red-400 text-xs mx-1" />
            <span>in Peshawar since 2007</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
