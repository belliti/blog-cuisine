import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Composants de pages
import Home from './pages/Home';
import Recettes from './Recettes';
import RecetteDetail from './RecetteDetail';
import RecettesSucrees from './pages/RecettesSucrees';
import RecetteSucreeDetail from './pages/RecetteSucreeDetail';
import AjouterRecette from './pages/AjouterRecette';
import CrepesDetail from './pages/CrepesDetail';
import Apropos from './pages/Apropos';

function App() {
  return (
    <Router>
      <div>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-logo">🍽 Mon Blog Cuisine</div>
          <ul className="navbar-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/recettes">Recettes Salées</Link></li>
            <li><Link to="/recettes-sucrees">Recettes Sucrées</Link></li>
            <li><Link to="/ajouter">Ajouter une recette</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
          </ul>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes" element={<Recettes />} />
          <Route path="/recette/:id" element={<RecetteDetail />} />
          <Route path="/recettes-sucrees" element={<RecettesSucrees />} />
          <Route path="/recette-sucree/:id" element={<RecetteSucreeDetail />} />
          <Route path="/ajouter" element={<AjouterRecette />} />
          <Route path="/recette-crepes" element={<CrepesDetail />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>

        {/* FOOTER */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Mon Blog Cuisine – Tous droits réservés 🍴</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
