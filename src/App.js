import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion />}/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App