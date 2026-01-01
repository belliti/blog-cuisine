// backend/index.js
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');        // Fichier des routes auth
const recetteRoutes = require('./routes/recette'); // Fichier des routes recettes

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log('Erreur MongoDB :', err));

// Route de test
app.get('/', (req, res) => {
  res.send('Backend Blog Cuisine OK !');
});

// Routes pour les recettes
app.use('/api/recettes', recetteRoutes);

// Routes pour l'authentification
app.use('/api/auth', authRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});