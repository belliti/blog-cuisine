// src/pages/RecettesSucrees.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecettesSucrees() {
  const recettes = [
    { id: 1, titre: 'Gâteau au chocolat', emoji: '🍫' },
    { id: 2, titre: 'flan', emoji: '🍮' },
    { id: 3, titre: 'Cookies', emoji: '🍪'},
    { id: 4, titre: 'Madeleine', emoji: '🧁'},
    { id: 5, titre: 'Brioche', emoji: '🥐 '},
    { id: 6, titre: 'Glace', emoji: '🍨'},
    { id: 7, titre: 'Tarte au citrons', emoji: '🥧'},
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos Recettes Sucrées</h1>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {recettes.map(recette => (
          <Link
            key={recette.id}
            to={`/recette-sucree/${recette.id}`}
            style={{
              textDecoration: 'none',
              color: '#333',
              backgroundColor: '#fff0f5',
              padding: '1rem',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '2rem' }}>{recette.emoji}</div>
            <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{recette.titre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
