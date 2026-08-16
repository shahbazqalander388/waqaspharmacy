import React, { useState } from 'react';
import { MapPin, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#B91C1C] text-white border-b border-red-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo & Location */}
          <div className="flex items-center gap-2 sm:gap-3 shrink min-w-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <div className="bg-white p-1 rounded-xl shadow-xs shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Waqas Pharmacy Logo" 
                  className="h-9 sm:h-12 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-base sm:text-2xl font-black text-white tracking-tight leading-none">
                    WAQAS
                  </span>
                  <span className="text-base sm:text-2xl font-black text-amber-300 tracking-tight leading-none">
                    PHARMACY
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-red-100 font-semibold mt-0.5">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300 shrink-0" />
                  <span className="truncate max-w-[130px] sm:max-w-none">Dabgari Garden Chowk, Peshawar</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-white hover:text-amber-300 hover:bg-red-800/80 transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct WhatsApp Action Button */}
            <a 
              href="https://wa.me/923349238785?text=Hello,%20I%20have%20an%20inquiry%20regarding%20medicines%20at%20Waqas%20Pharmacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm shadow-md shadow-red-950/20 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            >
              <FaWhatsapp className="text-sm sm:text-lg" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
              <span className="sm:hidden text-xs">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-white hover:bg-red-800 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-2 border-t border-red-800/80 mt-2.5 space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-white hover:text-amber-300 hover:bg-red-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
