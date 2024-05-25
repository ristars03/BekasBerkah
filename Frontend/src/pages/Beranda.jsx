import NavbarUtama from '../components/NavbarUtama';
import HeroSection from '../components/HeroSection';
import KategoriSection from '../components/KategoriSection';
import TerbaruSection from '../components/TerbaruSection';
import Footer from '../components/Footer';


function Beranda() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <HeroSection />
      <KategoriSection/>
      <TerbaruSection/>
      <Footer />  
    </div>
  );
}

export default Beranda;
