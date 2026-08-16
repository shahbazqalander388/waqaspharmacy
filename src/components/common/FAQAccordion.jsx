import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          className={`border rounded-2xl overflow-hidden bg-white transition-all duration-200 ${
            activeIndex === index 
              ? 'border-teal-200 shadow-md ring-2 ring-teal-500/10' 
              : 'border-slate-200/80 shadow-xs hover:border-slate-300'
          }`}
        >
          <button
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className={`text-base sm:text-lg font-bold pr-4 transition-colors ${
              activeIndex === index ? 'text-[#0F766E]' : 'text-[#0F172A] group-hover:text-[#0F766E]'
            }`}>
              {faq.question}
            </span>
            <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeIndex === index ? 'bg-[#0F766E] text-white' : 'bg-[#ECFEFF] text-[#0F766E]'
            }`}>
              <FaChevronDown 
                className={`text-xs transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
              />
            </div>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-5 sm:px-6 pb-6 pt-2 text-[#64748B] leading-relaxed text-sm sm:text-base border-t border-slate-100 bg-[#F8FAFC]/50">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
