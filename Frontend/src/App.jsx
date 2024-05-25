import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
       </Routes>
    </>
  );
};

export default App;