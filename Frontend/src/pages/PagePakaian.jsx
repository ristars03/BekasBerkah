import NavbarUtama from '../components/NavbarUtama';
import CatalogPakaian from '../components/CatalogPakaian';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogPakaian />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
