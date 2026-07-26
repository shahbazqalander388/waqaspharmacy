import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id = '', 
  className = '', 
  title = '', 
  subtitle = '',
}) => {
  return (
    <section id={id} className={`py-20 md:py-24 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-green-300 font-bold tracking-wider uppercase text-sm block mb-3 drop-shadow-sm"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-sm"
              >
                {title}
              </motion.h2>
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
