import React from "react";

function Contact() {
  return (
    <section className="contact" data-aos="fade-up">
      <h2>Contactez-nous</h2>
      <p className="contact-desc">
        Une idée ? Une question ? Écrivez-nous, nous serons ravis de vous répondre.
      </p>

      <form
        action="https://formspree.io/f/moqprgpd" 
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
