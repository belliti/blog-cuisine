// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assure-toi d'avoir un modèle User

// Route register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier que l'utilisateur n'existe pas déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Utilisateur déjà existant" });

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer le nouvel utilisateur
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Générer un token JWT
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ token, user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Route login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier que l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

        // Vérifier le mot de passe
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Mot de passe incorrect" });

        // Générer un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;