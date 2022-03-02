import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/Home';
import Comptador from './pages/Comptador';
import Acordeon from './pages/Acordeon';
import GaleriaFotos from './pages/GaleriaFotos';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="comptador" element={<Comptador />} />
            <Route path="acordeon" element={<Acordeon />} />
            <Route path="galeriafotos" element={<GaleriaFotos />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
