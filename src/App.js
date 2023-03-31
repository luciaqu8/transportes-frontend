import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import HomePage from './components/pages/HomePage';
import Contacto from './components/pages/Contacto';
import Nosotros from './components/pages/Nosotros';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
