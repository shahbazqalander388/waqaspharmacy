import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative min-h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-primary-50 text-center relative w-full"
          >
            <FaQuoteLeft className="text-5xl md:text-7xl text-primary-100 absolute top-6 left-6 md:top-10 md:left-10 z-0" />
            
            <div className="flex justify-center mb-8 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl mx-1 drop-shadow-sm" />
              ))}
            </div>
            
            <p className="text-xl md:text-3xl text-gray-800 italic mb-10 relative z-10 font-light leading-relaxed">
              "{current.text}"
            </p>
            
            <div className="relative z-10">
              <h4 className="font-bold text-gray-900 text-xl md:text-2xl mb-1">{current.name}</h4>
              <p className="text-primary-600 font-medium uppercase tracking-wide text-sm">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-10 gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary-600 w-10' : 'bg-gray-300 w-3 hover:bg-primary-400'}`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
