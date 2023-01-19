import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Politics from '../Pages/Politics';
import Footer from '../Sections/Footer';
import Navbar from '../Sections/Navbar';
import Topper from '../Sections/Topper';
import ScrollToTop from './ScrollToTop';

function RouterAPP() {
  return (
    <BrowserRouter>
      <Topper />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica" element={<Politics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterAPP;
