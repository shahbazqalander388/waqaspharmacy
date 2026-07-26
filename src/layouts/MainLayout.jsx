import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/common/FloatingButtons';
import SEO from '../components/common/SEO';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Waqas Pharmacy | Trusted Healthcare Since 2007" 
        description="Premium modern pharmacy located in Peshawar. Genuine medicines and trusted healthcare services since 2007."
      />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default MainLayout;
