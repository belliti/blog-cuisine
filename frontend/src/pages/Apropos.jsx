// src/pages/Apropos.jsx
import React from 'react';

function Apropos() {
  return (
    <div style={{ backgroundColor: '#fff9f5', minHeight: '100vh', padding: '40px 20px' }}>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#d35400', marginBottom: '20px' }}>
          À propos de ce blog
        </h1>

        <p style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'center', marginBottom: '30px' }}>
          Bienvenue sur <strong style={{ color: '#c0392b' }}>Miam & Partage</strong> – un lieu de
          passion et de gourmandise pour tous les amoureux de la cuisine maison.
        </p>

        <hr style={{ border: '1px solid #f5cba7', marginBottom: '30px' }} />

        <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '20px' }}>
          Ce blog est né d’une envie de partager des recettes simples, savoureuses et accessibles à
          tous. Ici, je vous propose des plats testés et approuvés, avec des photos gourmandes et des
          instructions claires.
        </p>

        <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '20px' }}>
          Vous y trouverez aussi bien des classiques que des découvertes, que vous soyez débutant,
          amateur ou passionné de cuisine.
        </p>

        <p style={{ fontSize: '17px', lineHeight: '1.7' }}>
          Merci de faire partie de cette aventure culinaire ! Et surtout… régalez-vous ! 🍽️
        </p>
      </div>
    </div>
  );
}

export default Apropos;
