import NavbarUtama from '../components/NavbarUtama';
import CatalogAksesoris from '../components/CatalogAksesoris';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogAksesoris />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
