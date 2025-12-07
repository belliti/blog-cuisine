const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['sucre', 'sale'], required: true },
  ingredients: [String],
  etapes: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recette', RecetteSchema);