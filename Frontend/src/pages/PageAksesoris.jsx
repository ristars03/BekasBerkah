import NavbarUtama from '../components/NavbarUtama';
import CatalogAksesoris from '../components/CatalogAksesoris';
import KategoriLainnyaAksesoris from '../components/KategoriLainnyaAksesoris';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogAksesoris />
      <KategoriLainnyaAksesoris />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
