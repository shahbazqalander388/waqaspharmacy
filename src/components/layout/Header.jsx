import React, { useState } from 'react';
import { MapPin, Phone, Menu, X, FileText, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Order via Prescription', href: '#prescription' },
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
    <header className="sticky top-0 z-40 bg-[#B91C1C] text-white border-b border-red-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Location */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-xl shadow-xs">
                <img 
                  src="/logo.jpg" 
                  alt="Waqas Pharmacy Logo" 
                  className="h-10 sm:h-12 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                    WAQAS
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight leading-none">
                    PHARMACY
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-red-100 font-semibold mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                  <span className="truncate max-w-[170px] sm:max-w-none">Dabgari Garden Chowk, Peshawar</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-xs xl:text-sm font-bold text-white hover:text-amber-300 hover:bg-red-800/80 transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Prescription CTA (Desktop) */}
            <a 
              href="#prescription"
              onClick={(e) => handleNavClick(e, '#prescription')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-white/30 bg-white/15 hover:bg-white/25 text-white font-bold text-xs backdrop-blur-xs transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Send Rx</span>
            </a>

            {/* Direct WhatsApp Action Button */}
            <a 
              href="https://wa.me/923349238785?text=Hello,%20I%20have%20an%20inquiry%20regarding%20medicines%20at%20Waqas%20Pharmacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl font-extrabold text-xs sm:text-sm shadow-md shadow-red-950/20 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FaWhatsapp className="text-base sm:text-lg" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-red-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-red-800 mt-3 space-y-1 animate-fadeIn">
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
            <div className="pt-2">
              <a 
                href="#prescription"
                onClick={(e) => handleNavClick(e, '#prescription')}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs border border-white/20"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Upload Doctor's Prescription</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
