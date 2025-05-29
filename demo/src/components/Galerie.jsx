import React from "react";

import projet1 from "../assets/img/projet1.jpg";
import projet2 from "../assets/img/projetdeux.jpg";
import projet3 from "../assets/img/projet3.jpg";
import projet4 from "../assets/img/projet4.jpg";
import projet5 from "../assets/img/projet5.jpg";

function Galerie() {
  const projets = [
    { id: 1, src: projet1, alt: "Projet 1" },
    { id: 2, src: projet2, alt: "Projet 2" },
    { id: 3, src: projet3, alt: "Projet 3" },
    { id: 4, src: projet4, alt: "Projet 4" },
    { id: 5, src: projet5, alt: "Projet 5" },
  ];

  return (
    <section className="galerie" id="galerie">
      <h2>Notre Galerie de Projets</h2>
      <div className="grille-projets">
        {projets.map(({ id, src, alt }) => (
          <div key={id} className="projet">
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galerie;

