const express = require('express');
const mongoose = require('mongoose');
const Recette = require('./models/Recette');
const cors = require('cors'); 

const app = express();       

app.use(cors());              
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/recettesDB')
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur de connexion à MongoDB :", err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connecté à MongoDB !');
});
mongoose.connection.on('error', err => {
  console.error('Erreur de connexion à MongoDB :', err);
});

app.post('/api/recettes', async (req, res) => {
  console.log("Body reçu :", req.body);

  try {
    const recette = new Recette(req.body);
    await recette.save();
    res.status(201).json({ message: "Recette ajoutée avec succès", recette });
  } catch (error) {
    console.error("Erreur détaillée :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout de la recette" });
  }
});

app.listen(5000, () => console.log('✅ Serveur lancé sur http://localhost:5000'));
app.get('/api/recettes', async (req, res) => {
  try {
    const recettes = await Recette.find();
    res.json(recettes);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des recettes" });
  }

  //ROUTE POUR RECUPERER LES RECETTES AJOUTES
  app.get('/recettes', async (req, res) => {
  try {
    const recettes = await Recette.find(); // Recette est ton modèle Mongoose
    res.json(recettes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes' });
  }
});

});
