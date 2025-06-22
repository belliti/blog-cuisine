//C’est un composant React qui peut servir de page d’accueil interactive.
//Il a pour but de :
//Afficher une liste de recettes (statiques ou venant d'une API).
//Filtrer les recettes avec une barre de recherche (ce que tu viens de faire).
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import crepeImage from '../OIP.jpeg';
import maxresdefault from '../maxresdefault.jpg';
import quicheImage from '../quiches(1).jpeg';
import tiramisuImage from '../R (1).jpeg';
import pouletImage from '../POULET (1).jpeg';

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
        backgroundImage: "url('/R.jpeg')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* luminosité sombre */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
        {/* SECTION DE RECHERCHE */}
        <section className="search-section">
          <h2>Que voulez-vous cuisiner ?</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher une recette..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
            />
          </div>
        </section>

        {/* CONTENU PRINCIPAL */}
        <main className="main-content">
          <h1>Bienvenue sur mon blog de cuisine !</h1>
          <p>Découvrez des recettes savoureuses et faciles à réaliser chez vous.</p>
        </main>

        {/* SECTION ARTICLE COMPLET */}
        <section className="article-section">
          <h2>Le Saviez-vous ?</h2>
          <p>
            La cuisine est un art de vivre, un héritage culturel qui se transmet
            de génération en génération. Sur ce blog, je partage avec vous mes
            coups de cœur, mes essais culinaires, et des recettes testées et
            approuvées. Que vous soyez débutant ou cuisinier aguerri, vous
            trouverez de quoi vous inspirer pour vos repas quotidiens ou vos
            occasions spéciales.
          </p>
        </section>

        {/* SECTION MIAM & PARTAGE */}
        <section className="miam-partage-section">
          <h1>Miam & Partage</h1>
          <p>BLOG CULINAIRE QUI FAIT VOYAGER</p>
          <img
            src={crepeImage}
            alt="Crêpes"
            className="miam-image"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
          />
          <h2>Notre recette de pâte à crêpes simple et efficace</h2>
          <p>"Conseils pour une pâte à crêpes parfaite"</p>
          <Link to="/recette-crepes">
            <button className="btn btn-warning mt-2">LIRE LA SUITE</button>
          </Link>
        </section>

        {/* SECTION RECETTES POPULAIRES */}
        <section className="recipes-populaire-section">
          <h2>Nos recettes populaires</h2>

          {recetteSelectionnee ? (
            <div style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '20px' }}>
              <h3>{recetteSelectionnee.title}</h3>
              <img
                src={recetteSelectionnee.imageUrl}
                alt={recetteSelectionnee.title}
                style={{ width: '100%', maxWidth: '400px', borderRadius: '10px',justifyContent: 'center',  }}
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
                className="btn btn-secondary mt-3"
                onClick={() => setRecetteSelectionnee(null)}
              >
                Retour aux recettes
              </button>
            </div>
          ) : (
            <div className="recipes-populaire-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {recettesFiltrees.map((recette) => (
                <div
                  key={recette.id}
                  className="recipe-card"
                  onClick={() => setRecetteSelectionnee(recette)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#000',
                    padding: '10px',
                    borderRadius: '10px',
                    width: '200px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img
                    src={recette.imageUrl}
                    alt={recette.title}
                    style={{ width: '100%', borderRadius: '10px' }}
                  />
                  <p style={{ textAlign: 'center', marginTop: '10px' }}>{recette.title}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
