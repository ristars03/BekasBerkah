import NavbarUtama from '../components/NavbarUtama';
import HeroSection from '../components/HeroSection';
import KategoriUtama from '../components/KategoriUtama';
import TerbaruSection from '../components/TerbaruSection';
import Footer from '../components/Footer';


function Beranda() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <HeroSection />
      <KategoriUtama/>
      <TerbaruSection/>
      <Footer />  
    </div>
  );
}

export default Beranda;
