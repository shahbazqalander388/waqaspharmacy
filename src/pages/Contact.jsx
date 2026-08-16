import { useState } from 'react';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message text
    let text = `*New Inquiry - Waqas Pharmacy*\n\n`;
    if (formData.name.trim()) text += `👤 *Name:* ${formData.name.trim()}\n`;
    if (formData.phone.trim()) text += `📞 *Phone:* ${formData.phone.trim()}\n`;
    if (formData.email.trim()) text += `📧 *Email:* ${formData.email.trim()}\n`;
    if (formData.message.trim()) {
      text += `\n💬 *Message / Prescription Details:*\n${formData.message.trim()}`;
    }

    const whatsappUrl = `https://wa.me/923349238785?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch With Us" 
      subtitle="Visit Or Call"
      description="Have questions about your prescription or need medicine availability info? Reach out to our qualified team anytime."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
        {/* Contact Info List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-xl font-extrabold text-[#0F172A]">Pharmacy Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0F766E] flex items-center justify-center text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">Location</h4>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Dabgari Garden Chowk, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0F766E] flex items-center justify-center text-lg shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">Direct Phone</h4>
                <a 
                  href="tel:+923349238785" 
                  className="text-base font-semibold text-[#0F172A] hover:text-[#0F766E] transition-colors"
                >
                  +92 334 9238785
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ECFEFF] text-[#0F766E] flex items-center justify-center text-xl shrink-0">
                <FaWhatsapp className="text-green-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">WhatsApp Helpdesk</h4>
                <a 
                  href="https://wa.me/923349238785" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base font-semibold text-[#0F172A] hover:text-[#0F766E] transition-colors"
                >
                  +92 334 9238785
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center text-xl shrink-0">
                <FaClock />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">Store Timings</h4>
                <p className="text-sm font-semibold text-[#0F172A]">Monday – Sunday</p>
                <p className="text-xs text-[#64748B]">7:00 AM – 12:00 AM Midnight</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 bg-white rounded-3xl shadow-xs border border-slate-200/80 p-7 sm:p-9"
        >
          <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Send us a Message</h3>
          <p className="text-[#64748B] text-sm mb-6">Leave your query and chat directly with our pharmacist on WhatsApp.</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm" 
                  placeholder="e.g. Ahmad Khan" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm" 
                  placeholder="+92 300 1234567" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">Email Address (Optional)</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all text-sm" 
                placeholder="name@example.com" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">Message or Medicine Details</label>
              <textarea 
                id="message" 
                rows="4" 
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all resize-none text-sm" 
                placeholder="Describe your medicine requirements or questions..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-green-900/15 text-base cursor-pointer hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl" />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 h-80 sm:h-96 w-full">
        <iframe 
          src="https://maps.google.com/maps?q=Dabgari%20Garden%20Chowk,%20Peshawar,%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Waqas Pharmacy Dabgari Garden Peshawar Location Map"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contact;
