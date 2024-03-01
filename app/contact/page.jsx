import styles from "@/components/ContactPage.module.css";

function ContactForm() {
  return (
    <div className={styles.div}>
      <h2 className="m-3">Contactez nous</h2>

      <form action="/submit_contact" method="post" className="m-3">
        <label className="form-label" htmlFor="nom">
          Nom:
        </label>
        <br />
        <input
          className="form-control"
          type="text"
          id="nom"
          name="nom"
          required
        />
        <br />

        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <br />
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          required
        />
        <br />

        <label className="form-label" htmlFor="message">
          Message:
        </label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="form-control"
        ></textarea>
        <br />

        <input type="submit" value="Envoyer" class="btn btn-primary w-100" />
      </form>
    </div>
  );
}

export default ContactForm;
