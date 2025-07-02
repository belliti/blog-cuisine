import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recettes from './Recettes';
import RecetteDetail from './RecetteDetail';
import AjouterRecette from './pages/AjouterRecette';
import CrepesDetail from './pages/CrepesDetail';
import RecettesSucrees from './pages/RecettesSucrees';
import RecetteSucreeDetail from './pages/RecetteSucreeDetail';
import Apropos from './pages/Apropos'; // 👍 Bien importé

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/recette/:id" element={<RecetteDetail />} />
        <Route path="/ajouter-recette" element={<AjouterRecette />} />
        <Route path="/recette-crepes" element={<CrepesDetail />} />
        <Route path="/recettes-sucrees" element={<RecettesSucrees />} />
        <Route path="/recette-sucree/:id" element={<RecetteSucreeDetail />} />
        <Route path="/apropos" element={<Apropos />} /> {/* ✅ Route ajoutée */}
      </Routes>

      <footer
        style={{
          backgroundColor: '#6D4C41', // ⚠️ corrigé (pas d'espace)
          color: '#FFF3E0',
          textAlign: 'center',
          padding: '1rem 0',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          fontWeight: 'bold',
          fontSize: '1rem',
          zIndex: 1000,
        }}
      >
        © 2025 Miam & Partage - Fait avec ❤ pour les gourmands
      </footer>
    </>
  );
}

export default App;
