import NavbarUtama from '../components/NavbarUtama';
import CatalogFurniture from '../components/CatalogFurniture';
import KategoriLainnyaFurniture from '../components/KategoriLainnyaFurniture';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <CatalogFurniture />
      <KategoriLainnyaFurniture />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
