// backend/routes/recette.js
const express = require('express');
const router = express.Router();
const Recette = require('../models/Recette');

// GET toutes les recettes
router.get('/', async (req, res) => {
  try {
    const recettes = await Recette.find();
    res.json(recettes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST nouvelle recette
router.post('/', async (req, res) => {
  const recette = new Recette(req.body);
  try {
    const nouvelleRecette = await recette.save();
    res.status(201).json(nouvelleRecette);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;