import React from 'react';

function Apropos() {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h1 className="text-center mb-4 text-primary">À propos de ce blog</h1>

      <p className="lead text-center">
        Bienvenue sur <strong>Mon Blog Cuisine</strong> – un lieu pour les amoureux de la bonne cuisine.
      </p>

      <hr />

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>🍽 Qui suis-je ?</h4>
          <p>
            Je m'appelle <strong>Itshak</strong>, passionné de cuisine depuis toujours.
            Ce blog est né de l’envie de partager mes recettes, mes découvertes et ma passion culinaire.
          </p>
        </div>

        <div className="col-md-6">
          <h4>🎯 Pourquoi ce blog ?</h4>
          <p>
            Pour vous proposer des recettes simples, savoureuses et accessibles à tous.
            Que vous soyez débutant ou confirmé, vous trouverez ici de l'inspiration et des conseils utiles.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="fst-italic">Merci de faire partie de cette aventure culinaire. Bon appétit ! 😋</p>
      </div>
    </div>
  );
}

export default Apropos;
