// src/pages/Recipe.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = {
      id,
      title: `Recette ${id}`,
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['Ingrédient 1', 'Ingrédient 2'],
      instructions: 'Instructions de préparation...',
    };

    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) return <div>Chargement...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
