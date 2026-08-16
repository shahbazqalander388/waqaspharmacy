import React from 'react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const CATEGORIES = [
  { id: "prescription", name: "Prescription Medicines" },
  { id: "otc", name: "OTC Remedies & Pain Relief" },
  { id: "vitamins", name: "Vitamins & Supplements" },
  { id: "baby", name: "Baby & Mother Care" },
  { id: "skincare", name: "Dermatology & Skincare" },
  { id: "devices", name: "Medical Equipment & Devices" },
  { id: "personal", name: "Personal Care & Hygiene" },
  { id: "firstaid", name: "First Aid & Wound Care" }
];

const Footer = () => {
  return (
    <footer className="bg-[#7F1D1D] text-red-100 pt-16 pb-8 border-t-4 border-[#DC2626] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <a href="#home" className="flex items-center gap-3 group">
                <div className="bg-white p-1 rounded-xl shadow-xs">
                  <img 
                    src="/logo.jpg" 
                    alt="Waqas Pharmacy Logo" 
                    className="h-10 sm:h-12 w-auto object-contain rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white tracking-tight">
                    WAQAS <span className="text-amber-300">PHARMACY</span>
                  </span>
                  <span className="text-[11px] text-red-200 font-semibold">
                    Trusted Healthcare Since 2007
                  </span>
                </div>
              </a>
            </div>

            <p className="text-red-100 text-xs sm:text-sm leading-relaxed">
              Your premier pharmacy & healthcare store in Peshawar. Delivering 100% genuine certified medicines, clinical health monitors, vitamins, and baby care essentials with direct WhatsApp ordering.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923349238785?text=Hello%20Waqas%20Pharmacy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Helpline"
                className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              <a
                href="https://www.facebook.com/share/1BaLtPvjtm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md"
              >
                <FaFacebookF className="text-sm" />
              </a>
            </div>
          </div>

          {/* Col 2: Category Quick Jumps */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Departments & Categories
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="text-red-200 hover:text-amber-300 hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-300" />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Pharmacy Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-red-200">
              <li>
                <a 
                  href="#prescription" 
                  className="hover:text-amber-300 transition-colors"
                >
                  Prescription Dispensing
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923349238785?text=Hello,%20I%20need%20Peshawar%20home%20delivery%20for%20medicines." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Doorstep Home Delivery
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923349238785?text=Hello,%20I%20want%20to%20consult%20with%20a%20pharmacist." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Free Pharmacist Advice
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923349238785?text=Hello,%20I%20want%20to%20inquire%20about%20emergency%20medicine%20supply." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Emergency Medicine Supply
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Timings */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Store & Branch Info
            </h4>

            <div className="space-y-2.5 text-xs text-red-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>Dabgari Garden Chowk, Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Mon – Sun: 7:00 AM – 12:00 AM Midnight</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href="tel:+923349238785" className="hover:text-white transition-colors font-bold">
                  +92 334 9238785
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/923349238785" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors font-bold"
                >
                  +92 334 9238785 (WhatsApp Desk)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Pharmacy Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-red-900/80 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-red-200">
          <div className="flex items-center gap-2 text-red-200">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>
              Disclaimer: All prescription medications are dispensed strictly under the guidance of licensed pharmaceutical professionals.
            </span>
          </div>

          <p>© {new Date().getFullYear()} Waqas Pharmacy Peshawar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
