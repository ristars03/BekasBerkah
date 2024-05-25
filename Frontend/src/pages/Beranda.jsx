import NavbarBeranda from '../components/NavbarBeranda';
import HeroSection from '../components/HeroSection';
import KategoriSection from '../components/KategoriSection';
import TerbaruSection from '../components/TerbaruSection';
import Footer from '../components/Footer';


function Beranda() {
  return (
    <div className="container"> 
      <NavbarBeranda />
      <HeroSection />
      <KategoriSection/>
      <TerbaruSection/>
      <Footer />  
    </div>
  );
}

export default Beranda;
