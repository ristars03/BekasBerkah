import NavbarLanding from '../components/NavbarLanding';
import HeroSection from '../components/HeroSection';
import KategoriSection from '../components/KategoriSection';
import TerbaruSection from '../components/TerbaruSection';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div className="container"> 
      <NavbarLanding />
      <HeroSection />
      <KategoriSection/>
      <TerbaruSection/>
      <Footer />  
    </div>
  );
}

export default LandingPage;
