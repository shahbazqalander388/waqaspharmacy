import Section from '../components/common/Section';
import FAQAccordion from '../components/common/FAQAccordion';

const FAQ = () => {
  const faqs = [
    { 
      question: "Do you sell genuine and authentic medicines?", 
      answer: "Yes, 100%. We source every pharmaceutical product directly from certified manufacturers and licensed national distributors. We maintain rigorous quality control and strict temperature storage for all medicines." 
    },
    { 
      question: "What are your operating store hours?", 
      answer: "We are open 7 days a week, Monday through Sunday, from 7:00 AM to 12:00 AM midnight, ensuring you have uninterrupted access to essential medications and emergency health supplies." 
    },
    { 
      question: "Where is Waqas Pharmacy located in Peshawar?", 
      answer: "We are conveniently located at Dabgari Garden Chowk, Peshawar, Pakistan — in the central medical hub of the city, easily reachable from major hospitals and clinics." 
    },
    { 
      question: "Can I order or inquire via WhatsApp?", 
      answer: "Yes! You can message us directly on WhatsApp at +92 334 9238785 to check medicine availability, send prescription photos, or get guidance from our pharmacist." 
    },
    { 
      question: "Do you offer healthcare and wellness equipment?", 
      answer: "Yes, we provide blood pressure monitors, glucometers, surgical dressings, nebulizers, baby care essentials, nutritional supplements, and personal care products." 
    },
  ];

  return (
    <Section 
      id="faq" 
      title="Frequently Asked Questions" 
      subtitle="Got Questions?"
      description="Find answers to common questions about our authentic medicines, opening hours, and pharmacy services."
    >
      <FAQAccordion faqs={faqs} />
    </Section>
  );
};

export default FAQ;
