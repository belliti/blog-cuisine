// src/pages/RecetteSucreeDetail.js
// src/pages/RecetteSucreeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecetteSucreeDetail() {
  const { id } = useParams();

  const recettesSucrees = [
    {
      id: 1,
      titre: "Gâteau au chocolat",
      description: "Moelleux et intense en chocolat.",
      ingredients: ["Chocolat", "Beurre", "Œufs", "Sucre", "Farine"],
      instructions: "Faire fondre le chocolat avec le beurre, ajouter les autres ingrédients et cuire au four 25 minutes à 180°C.",
      image: '/gateau.jpg'
    },
    {
      id: 2,
      titre: "Flan",
      description: "Un dessert onctueux à base d'œufs et de lait.",
      ingredients: ["Lait", "Œufs", "Sucre", "Vanille", "Caramel"],
      instructions: "Préparer un caramel et le verser dans un moule. Mélanger les autres ingrédients, verser par-dessus, puis cuire au bain-marie au four.",
      image: '/flan.jpeg'
    },
    {
      id: 3,
      titre: 'Cookies',
      description: 'Biscuits croquants aux pépites de chocolat.',
      ingredients: ['Farine', 'Sucre', 'Beurre', 'Œufs', 'Pépites de chocolat'],
      instructions: 'Mélanger, former des boules, cuire 12 min à 180°C.',
      image: '/cookies.jpeg'
    },
    {
      id: 4,
      titre: 'Madeleine',
      description: "De petites douceurs moelleuses à souhait.",
      ingredients: ["Farine", "Sucre", "Œufs", "Beurre", "Levure", "Zeste de citron"],
      instructions: "Mélanger les ingrédients, remplir les moules à madeleine et cuire au four 10 min à 200°C.",
      image: '/Madeleines.jpg'
    },
    {
      id: 5,
      titre: "Brioche maison",
      description: "Une brioche moelleuse et parfumée",
      ingredients: ["500g de farine", "3 œufs", "100g de sucre", "125g de beurre", "20cl de lait", "levure boulangère"],
      instructions: "Mélanger les ingrédients, pétrir, laisser lever, puis cuire 25 minutes à 180°C.",
      image: '/brioches.jpeg'
    },
    {
      id: 6,
      titre: "Glace à la vanille",
      description: "Une glace onctueuse sans sorbetière",
      ingredients: ["40cl de crème liquide", "1 gousse de vanille", "100g de sucre", "3 jaunes d'œufs"],
      instructions: "Faire chauffer la crème avec la vanille, ajouter les jaunes battus avec le sucre, congeler.",
      image: '/glacevanille.jpg'
    },
    {
      id: 7,
      titre: "Tarte au citron meringuée",
      description: "Un dessert acidulé et gourmand",
      ingredients: ["1 pâte sablée", "3 citrons", "3 œufs", "150g de sucre", "1 c.à.s de maïzena", "2 blancs d'œufs pour la meringue"],
      instructions: "Cuire la pâte, préparer la crème au citron, ajouter la meringue, gratiner au four.",
      image: '/tartecitrons.jpeg'
    }
  ];

  const recette = recettesSucrees.find(r => r.id === parseInt(id));

  return (
    <div style={{ padding: '2rem' }}>
      {recette ? (
        <>
          <h1>{recette.titre}</h1>
          <img
            src={process.env.PUBLIC_URL + recette.image}
            alt={recette.titre}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '1rem' }}
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
