import NavbarUtama from '../components/NavbarUtama';
import CatalogBuku from '../components/CatalogBuku';
import KategoriLainnyaBuku from '../components/KategoriLainnyaBuku';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogBuku />
      <KategoriLainnyaBuku />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
