import NavbarUtama from '../components/NavbarUtama';
import CatalogBuku from '../components/CatalogBuku';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogBuku />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
