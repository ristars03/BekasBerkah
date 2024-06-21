import NavbarUtama from '../components/NavbarUtama';
import TB_InformasiBarang from '../components/TB_InformasiBarang';
import TB_FotoBarang from '../components/TB_FotoBarang';
import TB_DeskripsiBarang from '../components/TB_DeskripsiBarang';
import TB_HargaBarang from '../components/TB_HargaBarang';
import TB_BeratBarang from '../components/TB_BeratBarang';



function PageTambahBarang() {
  return (
    <div className="container mx-auto"> 
      <NavbarUtama />
      <TB_InformasiBarang />
      <TB_FotoBarang />
      <TB_DeskripsiBarang />
      <TB_HargaBarang />
      <TB_BeratBarang />
    </div>
  );
}

export default PageTambahBarang;
