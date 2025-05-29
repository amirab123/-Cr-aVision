import React from "react";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} CréaVision. Tous droits réservés.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook">🌐</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
