import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Prompt Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/90 animate-bounce text-xs font-extrabold text-[#0F172A]">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span>Order or Inquire on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Pulsing WhatsApp Button */}
      <a
        href="https://wa.me/923349238785?text=Hello%20Waqas%20Pharmacy,%20I%20need%20assistance%20with%20an%20order."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Waqas Pharmacy on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-green-600/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
        
        <FaWhatsapp className="text-3xl sm:text-4xl drop-shadow-sm" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
