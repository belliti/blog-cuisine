import React from 'react';
import { Link } from 'react-router-dom';

export default function Recettes() {
  const recettes = [
    { id: 1, titre: 'Apéro', couleur: '#FFEBCC', emoji: '🥨', image: '/apero.jpeg' },
    { id: 2, titre: 'Entrées', couleur: '#FFE4E1', emoji: '🥗', image: '/R2.jpeg' },
    { id: 3, titre: 'Légumes', couleur: '#E6FFED', emoji: '🥦', image: '/legumes.jpeg' },
    { id: 4, titre: 'Plats complets', couleur: '#F0F8FF', emoji: '🍲', image: '/plat-complet.jpeg' },
    { id: 5, titre: 'Poisson', couleur: '#E0FFFF', emoji: '🐟', image: '/poisson.jpg' },
    { id: 6, titre: 'Viandes', couleur: '#FFDDDD', emoji: '🍖', image: '/viande.jpeg' },
    { id: 7, titre: 'Sauces', couleur: '#F5F5DC', emoji: '🧂', image: '/bechamel.jpeg' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link
          to="/recettessucrees"
          style={{
            textDecoration: 'none',
            color: '#e67e22',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            backgroundColor: '#fff3e0',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          🍰 Voir les recettes sucrées
        </Link>
      </div>

      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos Recettes Salées</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {recettes.map((recette) => (
          <Link
            key={recette.id}
            to={`/recette/${recette.id}`}
            style={{
              textDecoration: 'none',
              color: '#333',
              backgroundColor: recette.couleur,
              padding: '1rem',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={recette.image}
              alt={recette.titre}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{recette.titre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
