import React from 'react';
import { Phone, Clock, MapPin, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#7F1D1D] text-red-100 text-xs py-2 px-4 border-b border-red-900/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left: Announcement with Live Badge */}
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1 bg-[#DC2626] text-white px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wide animate-pulse">
            <Zap className="w-3 h-3 text-amber-300" />
            24/7 DISPATCH
          </span>
          <span className="text-white font-medium">
            ⚡ 24/7 Fast Delivery | 100% Genuine Certified Products | Instant WhatsApp Ordering
          </span>
        </div>

        {/* Right: Store Timing & Direct Contact */}
        <div className="flex items-center gap-4 text-red-100 font-medium">
          <div className="hidden lg:flex items-center gap-1.5 text-red-200">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Dabgari Garden Chowk, Peshawar</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-red-200">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>7:00 AM – 12:00 AM Midnight</span>
          </div>

          <a 
            href="https://wa.me/923349238785?text=Hello,%20I%20have%20an%20inquiry%20regarding%20medicines" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-[#25D366] hover:text-emerald-300 font-bold transition-colors bg-white/10 px-2.5 py-0.5 rounded-lg"
          >
            <FaWhatsapp className="text-sm" />
            <span>+92 334 9238785</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
