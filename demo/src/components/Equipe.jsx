import React from "react";
import aliceImg from "../assets/img/alice.png";
import brunoImg from "../assets/img/bruno.png";
import claireImg from "../assets/img/claire.png";
function Equipe() {
  return (
    <section className="equipe" data-aos="fade-up">
      <h2>Notre Équipe</h2>
      <p className="equipe-desc">Des talents passionnés et créatifs au service de vos projets.</p>
      <div className="equipe-grid">
        <div className="membre">
            <img src={aliceImg} alt="Alice Martin" />
          <h3>Alice Martin</h3>
          <p>Directrice artistique</p>
        </div>
        <div className="membre">
      <img src={brunoImg} alt="Bruno" />
          <h3>Bruno Lefèvre</h3>
          <p>Développeur Front-End</p>
        </div>
        <div className="membre">
        <img src={claireImg} alt="Claire Dupont" />
          <h3>Claire Dupont</h3>
          <p>UX/UI Designer</p>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
