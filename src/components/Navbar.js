// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ margin: 0 }}>🍽️ Blog Cuisine</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li><Link to="/" style={{ textDecoration: 'none' }}>Accueil</Link></li>
        <li><Link to="/category/entrees" style={{ textDecoration: 'none' }}>Entrées</Link></li>
        <li><Link to="/category/plats" style={{ textDecoration: 'none' }}>Plats</Link></li>
        <li><Link to="/category/desserts" style={{ textDecoration: 'none' }}>Desserts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
