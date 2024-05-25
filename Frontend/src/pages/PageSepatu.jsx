import NavbarUtama from '../components/NavbarUtama';
import CatalogSepatu from '../components/CatalogSepatu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogSepatu />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
