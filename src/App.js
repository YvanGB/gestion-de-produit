import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Demo from './Demo'
import Produits from './pages/Produits'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import NavBar from './components/Navbar'
import AjouterProduit from './pages/AjouterProduit'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Connexion />} />
          <Route path='/creer' element={<AjouterProduit />} />
          {/* <Route path='/inscription' element={<Inscription />} /> */}
          {/* <Route path='/navbar' element={<NavBar />} /> */}
          <Route path='/produits' element={<Produits />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App