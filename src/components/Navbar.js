import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload(); // pour forcer la mise à jour du state
  };

  return (
    <nav style={{ backgroundColor: '#D94F4F', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Blog cuisine</Link>
      </div>
      <div>
        <Link to="/recettes" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Recettes Salées</Link>
        <Link to="/recettes-sucrees" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Recettes Sucrées</Link>
        <Link to="/ajouter-recette" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Ajouter</Link>
        <Link to="/apropos" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link>
        <button onClick={handleLogout} style={{ marginLeft: '1rem', backgroundColor: 'transparent', border: '1px solid white', color: 'white', cursor: 'pointer', borderRadius: 4, padding: '0.3rem 0.7rem' }}>
          Déconnexion
        </button>
      </div>
    </nav>
  );
}