import React from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSlider from './components/home/HeroSlider';
import TrustBadges from './components/home/TrustBadges';
import CategoryShowcase from './components/home/CategoryShowcase';
import PrescriptionBanner from './components/home/PrescriptionBanner';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import SEO from './components/common/SEO';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-red-100 selection:text-red-900">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Waqas Pharmacy | 100% Genuine Certified Healthcare & Medicines Peshawar" 
        description="Peshawar's trusted pharmacy & healthcare superstore since 2007. 100% genuine certified medicines, vitamins, baby care, and medical devices with direct WhatsApp ordering."
      />

      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Sticky Header (No Search Bar, Clean Navigation & WhatsApp CTA) */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 3. Hero Carousel (No Prices) */}
        <HeroSlider />

        {/* 4. 4 Trust Badges */}
        <TrustBadges />

        {/* 5. Medicine Categories Showcase (No Prices - Direct WhatsApp Inquiries) */}
        <CategoryShowcase />

        {/* 6. Dedicated Prescription Order Banner */}
        <PrescriptionBanner />

        {/* 7. Comprehensive Healthcare Services */}
        <Services />

        {/* 8. Why Choose Waqas Pharmacy */}
        <WhyChooseUs />

        {/* 9. Contact, Store Timings, Location Map & WhatsApp Desk */}
        <Contact />

      </main>

      {/* 10. Clean Professional Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
