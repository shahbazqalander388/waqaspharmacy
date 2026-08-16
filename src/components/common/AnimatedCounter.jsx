import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, label, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const steps = 60 * duration;
      const increment = value / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-teal-200/60 transition-all duration-300 group"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F766E] mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-[#64748B] font-semibold text-xs sm:text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
