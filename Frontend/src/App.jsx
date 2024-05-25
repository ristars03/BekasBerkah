import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage'; 
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Beranda from './pages/Beranda';

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
       </Routes>
    </>
  );
};

export default App;