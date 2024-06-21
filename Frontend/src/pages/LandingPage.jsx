import NavbarLanding from '../components/NavbarLanding';
import HeroSection from '../components/HeroSection';
import KategoriLanding from '../components/KategoriLanding';
import TerbaruSection from '../components/TerbaruSection';
import FooterLanding from '../components/FooterLanding';

function LandingPage() {
  return (
    <div className="container mx-auto"> 
      <NavbarLanding />
      <HeroSection />
      <KategoriLanding/>
      <TerbaruSection/>
      <FooterLanding />  
    </div>
  );
}

export default LandingPage;