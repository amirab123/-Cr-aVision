import React from "react";
import Accueil from "./components/accueil";
import Galerie from "./components/Galerie";
import Equipe from "./components/Equipe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./assets/css/style.css";
function App() {
 

  return (
    <>
       <Accueil />
      <Galerie />
      <Equipe />
      <Contact />
      <Footer />
    </>
  )
}

export default App
