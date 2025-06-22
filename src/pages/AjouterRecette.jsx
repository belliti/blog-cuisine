import React, { useState } from 'react';
import axios from 'axios';

function AjouterRecette() {
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
        ingredients: ingredients.split(',').map(ing => ing.trim()),
        instructions
      });
      alert('Recette ajoutée avec succès !');
      setTitre('');
      setDescription('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout :', error.response?.data || error.message);
      alert("Échec de l'ajout : " + (error.response?.data?.message || error.message));
    }
  };

return (
  <div className="min-vh-100 py-5" style={{ background: '#f8f9fa' }}>
    <div className="container">
      <h2 className="mb-4 text-center text-success">Ajouter une nouvelle recette</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-white">
        <div className="mb-3">
          <label className="form-label">Titre :</label>
          <input type="text" className="form-control" value={titre} onChange={(e) => setTitre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description :</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingrédients (séparés par des virgules) :</label>
          <input type="text" className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions :</label>
          <textarea className="form-control" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success w-100">Ajouter</button>
      </form>
    </div>
  </div>
);

}

export default AjouterRecette;
