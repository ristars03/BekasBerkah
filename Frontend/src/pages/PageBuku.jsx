import NavbarUtama from '../components/NavbarUtama';
import CatalogBuku from '../components/CatalogBuku';
import KategoriLainnyaBuku from '../components/KategoriLainnyaBuku';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogBuku />
      <KategoriLainnyaBuku />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
