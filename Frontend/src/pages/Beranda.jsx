import NavbarUtama from '../components/NavbarUtama';
import HeroSection from '../components/HeroSection';
import KategoriUtama from '../components/KategoriUtama';
import TerbaruSectionUtama from '../components/TerbaruSectionUtama';
import FooterUtama from '../components/FooterUtama';


function Beranda() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <HeroSection />
      <KategoriUtama/>
      <TerbaruSectionUtama/>
      <FooterUtama />  
    </div>
  );
}

export default Beranda;
