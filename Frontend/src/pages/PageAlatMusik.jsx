import NavbarUtama from '../components/NavbarUtama';
import CatalogAlatMusik from '../components/CatalogAlatMusik';
import KategoriLainnyaAlatMusik from '../components/KategoriLainnyaAlatMusik';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <CatalogAlatMusik />
      <KategoriLainnyaAlatMusik />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
