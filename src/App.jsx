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
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Decorative background capsules - Optimized for mobile performance */}
        <div className="absolute top-[10%] left-[5%] capsule-float-slow">
          <div className="w-24 h-48 rounded-[100px] bg-white/20 md:backdrop-blur-md rotate-45 md:shadow-[0_0_40px_rgba(255,255,255,0.2)] border border-white/30"></div>
        </div>
        <div className="absolute top-[60%] left-[80%] capsule-float-medium" style={{ animationDelay: '1s' }}>
          <div className="w-32 h-64 rounded-[100px] bg-white/10 md:backdrop-blur-md -rotate-12 md:shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20"></div>
        </div>
        <div className="absolute top-[30%] left-[70%] capsule-float-fast" style={{ animationDelay: '0.5s' }}>
          <div className="w-16 h-32 rounded-[100px] bg-white/10 md:backdrop-blur-sm rotate-12 md:shadow-lg border border-white/20"></div>
        </div>
        <div className="absolute top-[80%] left-[15%] capsule-float-slow" style={{ animationDelay: '0.7s' }}>
          <div className="w-20 h-40 rounded-[100px] bg-white/15 md:backdrop-blur-md rotate-45 md:shadow-xl border border-white/20"></div>
        </div>
        <div className="absolute top-[20%] left-[85%] capsule-float-medium" style={{ animationDelay: '1.5s' }}>
          <div className="w-24 h-48 rounded-[100px] bg-white/10 md:backdrop-blur-md -rotate-45 md:shadow-xl border border-white/20"></div>
        </div>
      </div>
      <SEO 
        title="Waqas Pharmacy | Trusted Healthcare Since 2007" 
        description="Premium modern pharmacy located in Peshawar. Genuine medicines and trusted healthcare services since 2007."
      />
      <Navbar />
      <main className="flex-grow">
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
