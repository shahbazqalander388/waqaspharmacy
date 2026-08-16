import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // If page is loaded with a hash (e.g. #about), scroll to it with offset
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 150);
      }
    }

    const sections = ['home', 'about', 'services', 'categories', 'why-choose-us', 'faq', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      let current = 'home';
      
      // Check if user is at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      
      if (isBottom) {
        current = 'contact';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Active when section top enters near navbar and bottom is still visible
            if (rect.top <= 200 && rect.bottom > 100) {
              current = section;
            }
          }
        }
      }
      
      setActiveSection((prev) => {
        if (prev !== current) {
          // Dynamically update URL in the address bar as user scrolls down the page
          window.history.replaceState(null, '', `#${current}`);
        }
        return current;
      });
    };
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Categories', id: 'categories' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Update active section and URL immediately
    setActiveSection(id);
    window.history.pushState(null, '', `#${id}`);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className="flex items-center gap-3 relative z-50 group cursor-pointer"
          >
            <img 
              src="/logo.jpg" 
              alt="Waqas Pharmacy Logo" 
              className="h-14 md:h-16 w-auto object-contain rounded-xl mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === link.id 
                    ? 'text-[#0F766E] bg-[#ECFEFF]' 
                    : 'text-[#64748B] hover:text-[#0F766E] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+923349238785" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Pharmacist</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] hover:text-[#0F766E] p-2 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-2xl text-[#0F766E]" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6 h-screen overflow-y-auto flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                  activeSection === link.id 
                    ? 'bg-[#ECFEFF] text-[#0F766E]' 
                    : 'text-[#0F172A] hover:bg-slate-50 hover:text-[#0F766E]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a 
              href="tel:+923349238785" 
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0F766E] hover:bg-[#115E59] text-white font-semibold shadow-sm text-center"
            >
              <FaPhoneAlt className="text-sm" />
              <span>+92 334 9238785</span>
            </a>
            <p className="text-center text-xs text-[#64748B]">Dabgari Garden Chowk, Peshawar</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
