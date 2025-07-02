//C’est un composant React qui peut servir de page d’accueil interactive.
//Il a pour but de :
//Afficher une liste de recettes (statiques ou venant d'une API).
//Filtrer les recettes avec une barre de recherche (ce que tu viens de faire).
// src/pages/Home.js

// src/pages/Home.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importation des images utilisées dans la page d'accueil
import crepeImage from '../OIP.jpeg';
import maxresdefault from '../maxresdefault.jpg';
import quicheImage from '../quiches(1).jpeg';
import tiramisuImage from '../R (1).jpeg';
import pouletImage from '../POULET (1).jpeg';

// Déclaration du tableau de recettes
function Home() {
  const recettes = [
    {
      id: 1,
      title: 'Saumon moutarde et miel',
      imageUrl: maxresdefault,
      description: 'Un plat rapide et raffiné avec une sauce sucrée-salée.',
      ingredients: ['Pavés de saumon', 'Moutarde', 'Miel', 'Sel', 'Poivre'],
      instructions: 'Mélanger la moutarde et le miel. Napper le saumon. Cuire au four à 180°C pendant 15-20 min.',
    },
    {
      id: 2,
      title: 'Quiche au thon parvée',
      imageUrl: quicheImage,
      description: 'Une quiche savoureuse sans produits laitiers.',
      ingredients: ['Pâte brisée', 'Thon', 'Oeufs', 'Oignons', 'Lait végétal'],
      instructions: 'Mélanger tous les ingrédients. Cuire à 180°C pendant 30 min.',
    },
    {
      id: 3,
      title: 'Tiramisu rapide',
      imageUrl: tiramisuImage,
      description: 'Un dessert italien express sans alcool.',
      ingredients: ['Biscuits', 'Café', 'Mascarpone', 'Sucre', 'Œufs', 'Cacao'],
      instructions: 'Alterner biscuits trempés dans le café et crème mascarpone. Réserver au frais 2h.',
    },
    {
      id: 4,
      title: 'Ailes de poulet à la chinoise',
      imageUrl: pouletImage,
      description: 'Des ailes caramélisées au miel et soja.',
      ingredients: ['Ailes de poulet', 'Miel', 'Sauce soja', 'Ail', 'Gingembre'],
      instructions: 'Faire mariner. Cuire 35 min au four à 200°C en les retournant.',
    },
  ];

  const [recherche, setRecherche] = useState('');
  const [recetteSelectionnee, setRecetteSelectionnee] = useState(null);

  const recettesFiltrees = recettes.filter((recette) =>
    recette.title.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: '#fff8f0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto', flex: '1' }}>
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'cursive', color: '#6d4c41' }}>Miam & Partage</h1>
          <p style={{ fontSize: '1.2rem', color: '#795548' }}>BLOG CULINAIRE QUI FAIT VOYAGER</p>

          <img
            src={crepeImage}
            alt="Crêpes"
            style={{
              width: '100%',
              maxWidth: '480px',
              borderRadius: '20px',
              border: '4px solid #d4af37',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              margin: '20px auto',
              display: 'block',
            }}
          />

          <h2 style={{ color: '#5d4037' }}>Notre recette de pâte à crêpes simple et efficace</h2>
          <p style={{ fontStyle: 'italic' }}>
            "Conseils pour une pâte à crêpes parfaite"
          </p>
          <Link to="/recette-crepes">
            <button
              style={{
                backgroundColor: '#d7ccc8',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                color: '#4e342e',
                fontWeight: 'bold',
                marginTop: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#c1b09b')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#d7ccc8')}
            >
              LIRE LA SUITE
            </button>
          </Link>
        </section>

        <section style={{ marginBottom: '40px', color: '#4e342e' }}>
          <p>
            La cuisine est un art de vivre, un héritage culturel qui se transmet de génération en génération.
            Sur ce blog, je partage avec vous mes coups de cœur, mes essais culinaires, et des recettes testées et approuvées.
          </p>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#6d4c41' }}>Que voulez-vous cuisiner ?</h2>
          <input
            type="text"
            placeholder="Rechercher une recette..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto 20px',
              display: 'block',
            }}
          />

          {recetteSelectionnee ? (
            <div
              style={{
                backgroundColor: '#fff',
                color: '#4e342e',
                borderRadius: '10px',
                padding: '20px',
                marginTop: '20px',
              }}
            >
              <h3>{recetteSelectionnee.title}</h3>
              <img
                src={recetteSelectionnee.imageUrl}
                alt={recetteSelectionnee.title}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              />
              <p>{recetteSelectionnee.description}</p>
              <h4>Ingrédients :</h4>
              <ul>
                {recetteSelectionnee.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Instructions :</h4>
              <p>{recetteSelectionnee.instructions}</p>
              <button
                style={{
                  backgroundColor: '#d7ccc8',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#4e342e',
                  cursor: 'pointer',
                }}
                onClick={() => setRecetteSelectionnee(null)}
              >
                Retour aux recettes
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
              }}
            >
              {recettesFiltrees.map((recette) => (
                <div
                  key={recette.id}
                  onClick={() => setRecetteSelectionnee(recette)}
                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '10px',
                    borderRadius: '10px',
                    width: '200px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img
                    src={recette.imageUrl}
                    alt={recette.title}
                    style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }}
                  />
                  <p style={{ textAlign: 'center', marginTop: '10px' }}>{recette.title}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

  <footer
  style={{
    backgroundColor: '#FFF3E0',
    color: '#FFF3E0',
    padding: '15px',
    marginTop: '40px',
  }}
>
  © 2025 Miam & Partage - Fait avec ❤ pour les gourmands
</footer>

  
    </div>
  );
}

export default Home;
