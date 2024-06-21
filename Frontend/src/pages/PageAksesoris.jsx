import NavbarUtama from '../components/NavbarUtama';
import CatalogAksesoris from '../components/CatalogAksesoris';
import KategoriLainnyaAksesoris from '../components/KategoriLainnyaAksesoris';
import Banner from '../components/Banner';
import FooterUtama from '../components/FooterUtama';


function PageFurniture() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <CatalogAksesoris />
      <KategoriLainnyaAksesoris />
      <Banner />
      <FooterUtama />  
    </div>
  );
}

export default PageFurniture;
