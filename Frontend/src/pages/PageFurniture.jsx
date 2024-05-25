import NavbarUtama from '../components/NavbarUtama';
import CatalogFurniture from '../components/CatalogFurniture';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogFurniture />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
