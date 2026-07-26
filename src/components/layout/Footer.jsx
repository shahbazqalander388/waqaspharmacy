import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 text-white p-2 rounded-lg flex items-center justify-center w-10 h-10">
                <span className="font-bold text-2xl leading-none">W</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white block leading-tight">Waqas</span>
                <span className="text-xs text-primary-400 font-bold block leading-tight tracking-widest uppercase">Pharmacy</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Trusted Healthcare Since 2007. Providing genuine medicines and professional customer service to our community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BaLtPvjtm/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/923349238785" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-400 hover:text-primary-400 transition-colors">Our Services</a></li>
              <li><a href="#categories" onClick={(e) => handleNavClick(e, 'categories')} className="text-gray-400 hover:text-primary-400 transition-colors">Medicine Categories</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleNavClick(e, 'why-choose-us')} className="text-gray-400 hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-gray-400 hover:text-primary-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-500 shrink-0" />
                <span className="text-gray-400">Dabgari Garden Chowk,<br/>Peshawar, Pakistan</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-primary-500 shrink-0" />
                <span className="text-gray-400">+92 334 9238785</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-primary-500 text-lg shrink-0" />
                <span className="text-gray-400">+92 334 9238785</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex flex-col text-gray-400 bg-gray-800 p-4 rounded-lg">
                <span className="mb-1">Monday - Sunday:</span>
                <span className="text-primary-400 font-semibold text-lg">7:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Waqas Pharmacy. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="hover:text-primary-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
