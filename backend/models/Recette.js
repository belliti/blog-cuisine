const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
  titre: String,
  description: String,
  ingredients: [String],
  instructions: String,
  image: String
});

module.exports = mongoose.model('Recette', recetteSchema);
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recettes() {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recettes')
      .then(response => {
        setRecettes(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des recettes', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Recettes Enregistrées</h1>
      <div className="row">
        {recettes.map((recette) => (
          <div className="col-md-4 mb-4" key={recette._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{recette.titre}</h5>
                <p className="card-text"><strong>Description :</strong> {recette.description}</p>
                <p className="card-text"><strong>Ingrédients :</strong> {recette.ingredients.join(', ')}</p>
                <p className="card-text"><strong>Instructions :</strong> {recette.instructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recettes;
