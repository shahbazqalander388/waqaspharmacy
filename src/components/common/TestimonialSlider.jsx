import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-100 text-center relative w-full"
          >
            <FaQuoteLeft className="text-4xl sm:text-6xl text-[#ECFEFF] absolute top-6 left-6 sm:top-8 sm:left-8 z-0" />
            
            <div className="flex justify-center mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-xl mx-0.5" />
              ))}
            </div>
            
            <p className="text-lg sm:text-2xl text-[#0F172A] italic mb-8 relative z-10 font-normal leading-relaxed">
              "{current.text}"
            </p>
            
            <div className="relative z-10">
              <h4 className="font-bold text-[#0F172A] text-lg sm:text-xl">{current.name}</h4>
              <p className="text-[#0F766E] font-semibold text-xs uppercase tracking-wider mt-0.5">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-8 gap-2.5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? 'bg-[#0F766E] w-8' : 'bg-slate-300 w-2.5 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
