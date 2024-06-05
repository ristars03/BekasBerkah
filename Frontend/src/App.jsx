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
import PageDetailProduk from './pages/PageDetailProduk';

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
        <Route path="/src/pages/PageDetailProduk" element={<PageDetailProduk />} />
        
       </Routes>
    </>
  );
};

export default App;