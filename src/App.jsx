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
