import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" bg="white" title="Get In Touch" subtitle="Contact Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 mr-6 shrink-0">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600">Dabgari Garden Chowk, Peshawar, Pakistan</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 mr-6 shrink-0">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                <a href="tel:+923349238785" className="text-gray-600 hover:text-primary-600 transition-colors">+92 334 9238785</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 mr-6 shrink-0">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                <a href="https://wa.me/923349238785" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">+92 334 9238785</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 p-4 rounded-full text-primary-600 mr-6 shrink-0">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                <p className="text-gray-600">Monday - Sunday: 7:00 AM – 12:00 AM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none bg-white" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary-500/30 text-lg">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-sm">
        <iframe 
          src="https://maps.google.com/maps?q=Dabgari%20Garden%20Chowk,%20Peshawar,%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Waqas Pharmacy Location"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
