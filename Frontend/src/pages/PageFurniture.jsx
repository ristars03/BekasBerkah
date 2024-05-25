import NavbarUtama from '../components/NavbarUtama';
import CatalogFurniture from '../components/CatalogFurniture';
import KategoriLainnyaFurniture from '../components/KategoriLainnyaFurniture';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogFurniture />
      <KategoriLainnyaFurniture />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
