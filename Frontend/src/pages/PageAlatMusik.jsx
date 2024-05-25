import NavbarUtama from '../components/NavbarUtama';
import CatalogAlatMusik from '../components/CatalogAlatMusik';
import KategoriLainnyaAlatMusik from '../components/KategoriLainnyaAlatMusik';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogAlatMusik />
      <KategoriLainnyaAlatMusik />
      <Banner />
      <Footer />  
    </div>
  );
}

export default PageFurniture;
