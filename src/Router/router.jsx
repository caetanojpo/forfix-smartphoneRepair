import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Politics from '../Pages/Politics';
import Footer from '../Sections/Footer';
import Topper from '../Sections/Topper';

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
