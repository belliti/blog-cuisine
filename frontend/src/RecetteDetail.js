import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecetteDetail() {
  const { id } = useParams();

  const recettesSalees = [
    {
      id: 1,
      titre: 'Apéro de fête',
      description: 'Mini feuilletés et bouchées apéritives.',
      ingredients: ['Pâte feuilletée', 'Fromage', 'Olives'],
      instructions: 'Découper, garnir, enfourner 15 min à 180°C.',
      image: '/apero.jpeg'
    },
    {
      id: 2,
      titre: 'Salade fraîche',
      description: 'Une entrée légère à base de crudités.',
      ingredients: ['Laitue', 'Tomates', 'Concombre', 'Vinaigrette'],
      instructions: 'Laver, couper les légumes, assaisonner.',
      image: '/R2.jpeg'
    },
    {
      id: 3,
      titre: 'Légumes sautés',
      description: 'Un plat sain et rapide à préparer avec des légumes frais.',
      ingredients: ['Carottes', 'Courgettes', 'Poivrons', "Huile d'olive", 'Sel', 'Poivre'],
      instructions: 'Laver et couper les légumes. Faire sauter dans un wok avec un peu d\'huile. Saler, poivrer.',
      image: '/legumes.jpeg'
    },
    {
      id: 4,
      titre: 'Plat complet',
      description: 'Un plat copieux et équilibré à base de riz, viande et légumes.',
      ingredients: ['Riz', 'Poulet', 'Légumes variés', 'Épices'],
      instructions: 'Cuire le riz. Faire revenir le poulet et les légumes, puis mélanger le tout.',
      image: '/plat-complet.jpeg'
    },
    {
      id: 5,
      titre: 'Poisson grillé',
      description: 'Du poisson frais simplement grillé avec du citron.',
      ingredients: ['Filet de poisson', 'Citron', 'Herbes', "Huile d'olive"],
      instructions: 'Assaisonner le poisson. Le griller 5 minutes de chaque côté.',
      image: '/poisson.jpg'
    },
    {
      id: 6,
      titre: 'Côte de bœuf',
      description: 'Une viande juteuse et savoureuse à souhait.',
      ingredients: ['Côte de bœuf', 'Sel', 'Poivre'],
      instructions: 'Cuire la viande au four ou à la poêle selon la cuisson souhaitée.',
      image: '/viande.jpeg'
    },
    {
      id: 7,
      titre: 'Sauce béchamel',
      description: 'Une sauce onctueuse parfaite pour les gratins.',
      ingredients: ['Beurre', 'Farine', 'Lait', 'Noix de muscade'],
      instructions: 'Faire fondre le beurre, ajouter la farine, puis le lait tout en fouettant.',
      image: '/bechamel.jpeg'
    }
  ];

  const recette = recettesSalees.find((r) => r.id === parseInt(id));

  return (
    <div style={{ padding: '2rem' }}>
      {recette ? (
        <>
          <h1>{recette.titre}</h1>
          <img
            src={process.env.PUBLIC_URL + recette.image}
            alt={recette.titre}
            style={{
              width: '100%',
              maxWidth: '600px',
              maxHeight: '400px',
              objectFit: 'cover',
              marginBottom: '1rem',
              borderRadius: '10px'
            }}
          />
          <p>{recette.description}</p>

          <h2>Ingrédients :</h2>
          <ul>
            {recette.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Instructions :</h2>
          <p>{recette.instructions}</p>
        </>
      ) : (
        <p>Recette non trouvée</p>
      )}
    </div>
  );
}
