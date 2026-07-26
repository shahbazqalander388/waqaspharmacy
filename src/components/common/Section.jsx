import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id = '', 
  className = '', 
  title = '', 
  subtitle = '',
  bg = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section id={id} className={`py-20 md:py-24 ${bgColors[bg] || bgColors.white} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-primary-600 font-semibold tracking-wider uppercase text-sm block mb-3"
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
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
