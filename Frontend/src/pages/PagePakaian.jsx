import NavbarUtama from '../components/NavbarUtama';
import CatalogPakaian from '../components/CatalogPakaian';
import KategoriLainnyaPakaian from '../components/KategoriLainnyaPakaian';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <CatalogPakaian />
      <KategoriLainnyaPakaian />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
