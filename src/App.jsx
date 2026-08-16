import React from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSlider from './components/home/HeroSlider';
import TrustBadges from './components/home/TrustBadges';
import CategoryShowcase from './components/home/CategoryShowcase';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import SEO from './components/common/SEO';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-red-100 selection:text-red-900">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Waqas Pharmacy | 100% Genuine Certified Healthcare & Medicines Peshawar" 
        description="Peshawar's trusted pharmacy & healthcare superstore since 2007. 100% genuine certified medicines, vitamins, baby care, and medical devices with direct WhatsApp ordering."
      />

      {/* Sticky Upper Navbar (TopBar + Header) */}
      <div className="sticky top-0 z-50 w-full shadow-md">
        <TopBar />
        <Header />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 3. Hero Carousel */}
        <HeroSlider />

        {/* 4. 4 Trust Badges */}
        <TrustBadges />

        {/* 5. Medicine Categories Showcase */}
        <CategoryShowcase />

        {/* 6. Comprehensive Healthcare Services */}
        <Services />

        {/* 7. Why Choose Waqas Pharmacy */}
        <WhyChooseUs />

        {/* 8. Contact, Store Timings, Location Map & WhatsApp Desk */}
        <Contact />

      </main>

      {/* 9. Clean Professional Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
