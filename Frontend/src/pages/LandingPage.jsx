import NavbarLanding from '../components/NavbarLanding';
import HeroSection from '../components/HeroSection';
import KategoriLanding from '../components/KategoriLanding';
import TerbaruSection from '../components/TerbaruSection';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="container"> 
      <NavbarLanding />
      <HeroSection />
      <KategoriLanding/>
      <TerbaruSection/>
      <Footer />  
    </div>
  );
}

export default LandingPage;