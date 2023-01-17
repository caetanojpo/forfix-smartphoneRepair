import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Politics from './Pages/Politics';

function RouterAPP() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicaDePrivacidade" element={<Politics />} />

        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterAPP;
