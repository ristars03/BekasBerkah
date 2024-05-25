import NavbarUtama from '../components/NavbarUtama';
import CatalogPakaian from '../components/CatalogPakaian';
import KategoriLainnyaPakaian from '../components/KategoriLainnyaPakaian';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogPakaian />
      <KategoriLainnyaPakaian />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
