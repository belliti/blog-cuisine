import React, { useState } from 'react';
import axios from 'axios';

export default function AjouterRecette() {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/recettes', {
        titre,
        description,
        ingredients: ingredients.split(',').map(i => i.trim()),
        instructions,
      });
      alert('Recette ajoutée avec succès !');
      setTitre('');
      setDescription('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      alert('Erreur : ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="ajouter-recette-container">
      <h2>Ajouter une nouvelle recette</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          required
        />
        <label>Description :</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label>Ingrédients (séparés par des virgules) :</label>
        <input
          type="text"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <label>Instructions :</label>
        <textarea
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
