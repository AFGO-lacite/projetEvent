"use client";
import { useState } from "react";
import styles from "@/components/ContactPage.module.css";

function ContactForm() {
  const [nom, setNom] = useState("");
  const handleNom = (event) => setNom(event.target.value);
  const [email, setEmail] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);
  const [msg, setMsg] = useState("");
  const handleMsg = (event) => setMsg(event.target.value);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [erreurNom, setErreurNom] = useState("");
  const [erreurMail, setErreurMail] = useState("");
  const [erreurMsg, setErreurMsg] = useState("");
  const [estSoumis, setEstSoumis] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let estValide = true;
    if (!nom || nom.length < 3) {
      estValide = false;
      setErreurNom("Nom invalide");
    } else {
      setErreurNom("");
    }

    if (!email || !regexEmail.test(email)) {
      estValide = false;
      setErreurMail("Email invalide");
    } else {
      setErreurMail("");
    }

    if (!msg || msg.length < 8) {
      estValide = false;
      setErreurMsg("Message invalide");
    } else {
      setErreurMsg("");
    }

    if (estValide) {
      setEstSoumis(true);
    }
  };

  return (
    <div className={styles.div}>
      <h2 className="m-3">Contactez nous</h2>

      <form onSubmit={handleSubmit} className="m-3" noValidate>
        <label className="form-label" htmlFor="nom">
          Nom:
        </label>

        <input
          className="form-control"
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={handleNom}
          required
        />

        {erreurNom && <div className="text-danger mb-3">{erreurNom}</div>}

        <label className="form-label" htmlFor="email">
          Email:
        </label>

        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        {erreurMail && <div className="text-danger mb-3">{erreurMail}</div>}

        <label className="form-label" htmlFor="message">
          Message:
        </label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          value={msg}
          onChange={handleMsg}
          required
          className="form-control"
        ></textarea>

        {erreurMsg && <div className="text-danger mb-3">{erreurMsg}</div>}

        <input
          type="submit"
          value="Envoyer"
          className="btn btn-primary w-100 mt-4"
        />

        {estSoumis && (
          <div className="text-success mt-3">
            Le message a été envoyé avec succès.
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
