// src/components/RecipeCard.js pour afficher une recette avec une carte : titre + image
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <Link to={/recipe/${recipe.id}}>Voir la recette</Link>
    </div>
  );
};

export default RecipeCard;