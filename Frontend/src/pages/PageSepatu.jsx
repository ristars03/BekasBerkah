import NavbarUtama from '../components/NavbarUtama';
import CatalogSepatu from '../components/CatalogSepatu';
import KategoriLainnyaSepatu from '../components/KategoriLainnyaSepatu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogSepatu />
      <KategoriLainnyaSepatu />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
