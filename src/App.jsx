import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import SEO from './components/common/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Categories from './pages/Categories';
import WhyChooseUs from './pages/WhyChooseUs';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Elegant ambient healthcare background glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ECFEFF] opacity-70 blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-teal-100/40 opacity-60 blur-3xl"></div>
        <div className="absolute top-2/3 -right-20 w-96 h-96 rounded-full bg-blue-100/30 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full bg-[#ECFEFF] opacity-60 blur-3xl"></div>
      </div>

      <SEO 
        title="Waqas Pharmacy | Trusted Healthcare Since 2007" 
        description="Premium modern pharmacy located in Peshawar. Genuine medicines, healthcare products, and trusted pharmacist advice since 2007."
      />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Home />
        <About />
        <Services />
        <Categories />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
