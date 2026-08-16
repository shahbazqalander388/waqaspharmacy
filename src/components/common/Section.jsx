import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id = '', 
  className = '', 
  title = '', 
  subtitle = '',
  description = '',
}) => {
  return (
    <section id={id} className={`py-10 sm:py-16 md:py-20 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {subtitle && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center justify-center mb-3"
              >
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#ECFEFF] text-[#0F766E] border border-teal-100 font-bold tracking-wider uppercase text-xs">
                  {subtitle}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
