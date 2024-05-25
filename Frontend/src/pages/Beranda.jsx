import NavbarUtama from '../components/NavbarUtama';
import HeroSection from '../components/HeroSection';
import KategoriUtama from '../components/KategoriUtama';
import TerbaruSectionUtama from '../components/TerbaruSectionUtama';
import Footer from '../components/Footer';


function Beranda() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <HeroSection />
      <KategoriUtama/>
      <TerbaruSectionUtama/>
      <Footer />  
    </div>
  );
}

export default Beranda;
