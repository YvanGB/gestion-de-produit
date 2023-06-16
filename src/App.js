import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription'
import NavigationBar from './layouts/Navbar';
import Produits from './pages/Produits';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/produits' element={<Produits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
