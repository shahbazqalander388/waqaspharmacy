import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <div className="relative group">
        <a 
          href="tel:+923349238785" 
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Call Us"
        >
          <FaPhoneAlt className="text-xl" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </div>
      </div>

      <div className="relative group">
        <a 
          href="https://wa.me/923349238785" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors animate-pulse hover:animate-none"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
