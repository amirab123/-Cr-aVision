import React from "react";


function Accueil() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#equipe">Équipe</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="accueil" id="accueil">
        <div className="texte-accueil">
          <h1>Bienvenue chez CréaVision</h1>
          <p>
            Nous créons des sites web modernes et performants. Découvrez nos
            services et notre équipe !
          </p>
        </div>
      </section>
    </>
  );
}

export default Accueil;

