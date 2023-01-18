import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Politics from './Pages/Politics';
import Footer from './Sections/Footer';
import Navbar from './Sections/Navbar';
import Topper from './Sections/Topper';

function RouterAPP() {
  return (
    <BrowserRouter>
      <Topper />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicaDePrivacidade" element={<Politics />} />

        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterAPP;
