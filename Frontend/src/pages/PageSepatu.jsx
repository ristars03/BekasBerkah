import NavbarUtama from '../components/NavbarUtama';
import CatalogSepatu from '../components/CatalogSepatu';
import KategoriLainnyaSepatu from '../components/KategoriLainnyaSepatu';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container"> 
      <NavbarUtama />
      <CatalogSepatu />
      <KategoriLainnyaSepatu />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
