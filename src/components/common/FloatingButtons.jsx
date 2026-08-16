import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Call Float */}
      <div className="relative group">
        <a 
          href="tel:+923349238785" 
          className="flex items-center justify-center w-12 h-12 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Call Pharmacist Directly"
        >
          <FaPhoneAlt className="text-lg" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-[#0F172A] text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Call Pharmacist
        </div>
      </div>

      {/* WhatsApp Float */}
      <div className="relative group">
        <a 
          href="https://wa.me/923349238785" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#0F766E] hover:bg-[#115E59] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Chat with pharmacist on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-[#0F172A] text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          WhatsApp Helpdesk
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
