import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Produits from './pages/Produits';

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion />}/>
        <Route path='/dashboard' element={<Produits />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App