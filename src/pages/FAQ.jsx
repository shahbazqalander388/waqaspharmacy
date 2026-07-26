import Section from '../components/common/Section';
import FAQAccordion from '../components/common/FAQAccordion';

const FAQ = () => {
  const faqs = [
    { question: "Do you sell genuine medicines?", answer: "Yes, we guarantee that all our medicines are 100% genuine and sourced directly from reputable manufacturers and authorized distributors. Quality and authenticity are our top priorities." },
    { question: "What are your opening hours?", answer: "We are open Monday to Sunday, from 7:00 AM to 12:00 AM midnight, ensuring you have access to healthcare products when you need them." },
    { question: "Where are you located?", answer: "We are conveniently located at Dabgari Garden Chowk in Peshawar, Pakistan." },
    { question: "Do you provide health and wellness products?", answer: "Yes, in addition to prescription and OTC medicines, we offer a wide range of vitamins, supplements, baby care, personal care, and medical equipment." },
    { question: "Can customers contact you through WhatsApp?", answer: "Absolutely! You can reach out to us on WhatsApp at +92 334 9238785 for inquiries, stock checks, or professional advice." },
  ];

  return (
    <Section id="faq" bg="gray" title="Frequently Asked Questions" subtitle="FAQs">
      <FAQAccordion faqs={faqs} />
    </Section>
  );
};

export default FAQ;
