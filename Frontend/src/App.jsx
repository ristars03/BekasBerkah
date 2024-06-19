import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage'; 
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Beranda from './pages/Beranda';
import PageFurniture from './pages/PageFurniture';
import PageBuku from './pages/PageBuku';
import PagePakaian from './pages/PagePakaian';
import PageAksesoris from './pages/PageAksesoris';
import PageSepatu from './pages/PageSepatu';
import PageAlatMusik from './pages/PageAlatMusik';
import PageProfileAkun from './pages/PageProfileAkun';
import PageProfileDaftarAlamat from './pages/PageProfileDaftarAlamat';
import PageProfileKatalogBarang from './pages/PageProfileKatalogBarang';
import PageTambahBarang from './pages/PageTambahBarang';
import PageDetailDeskripsi from './pages/PageDetailDeskripsi';
import PageDetailProduk from './pages/PageDetailProduk';
import PageTermConditionsLanding from './pages/PageTermConditionsLanding';
import PageTermConditionsUtama from './pages/PageTermConditionsUtama';
import PagePrivacyLanding from './pages/PagePrivacyLanding';
import PagePrivacyUtama from './pages/PagePrivacyUtama';
import PageActionProfileBarang from './pages/PageActionProfileBarang';
import PageActionProfileDetail from './pages/PageActionProfileDetail';
import PageChat from './pages/PageChat';

const Home = () => (
  <>
    <LandingPage />
  </>
);


const App = () => {
  return (
    <Router>
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/SignUp.jsx" element={<SignUp />} />
        <Route path="/src/pages/SignIn.jsx" element={<SignIn />} />
        <Route path="/src/pages/Beranda.jsx" element={<Beranda />} />
        <Route path="/src/pages/PageFurniture" element={<PageFurniture />} />
        <Route path="/src/pages/PageBuku" element={<PageBuku />} />
        <Route path="/src/pages/PagePakaian" element={<PagePakaian />} />
        <Route path="/src/pages/PageAksesoris" element={<PageAksesoris />} />
        <Route path="/src/pages/PageSepatu" element={<PageSepatu />} />
        <Route path="/src/pages/PageAlatMusik" element={<PageAlatMusik />} />
        <Route path="/src/pages/PageProfileAkun" element={<PageProfileAkun />} />
        <Route path="/src/pages/PageProfileDaftarAlamat" element={<PageProfileDaftarAlamat />} />
        <Route path="/src/pages/PageProfileKatalogBarang" element={<PageProfileKatalogBarang />} />
        <Route path="/src/pages/PageTambahBarang" element={<PageTambahBarang />} />
        <Route path="/src/pages/PageDetailDeskripsi" element={<PageDetailDeskripsi />} />
        <Route path="/src/pages/PageDetailProduk" element={<PageDetailProduk />} />
        <Route path="/src/pages/PageTermConditionsLanding" element={<PageTermConditionsLanding/>} />
        <Route path="/src/pages/PageTermConditionsUtama" element={<PageTermConditionsUtama/>} />
        <Route path="/src/pages/PagePrivacyLanding" element={<PagePrivacyLanding/>} />
        <Route path="/src/pages/PagePrivacyUtama" element={<PagePrivacyUtama/>} />
        <Route path="/src/pages/PageActionProfileBarang" element={<PageActionProfileBarang/>} />
        <Route path="/src/pages/PageActionProfileDetail" element={<PageActionProfileDetail/>} />
        <Route path="/src/pages/PageChat" element={<PageChat/>} />
     
        
       </Routes>
    </>
  );
};

export default App;