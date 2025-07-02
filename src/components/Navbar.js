import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#D94F4F', // framboise doux
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
    }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>
          Blog cuisine
        </Link>
      </div>
      <div>
        <Link to="/recettes" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
          Recettes Salées
        </Link>
        <Link to="/recettes-sucrees" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
          Recettes Sucrées
        </Link>
        <Link to="/ajouter-recette" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
          Ajouter
        </Link>
        <Link to="/apropos" style={{ color: 'white', textDecoration: 'none' }}>
          À propos
        </Link>
      </div>
    </nav>
  );
}
