import React from "react";

const PaymentModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal show" style={{ display: "block" }} id="myModal">
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h4 className="modal-title">Informations de Paiement</h4>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <form id="paymentForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input type="text" className="form-control" id="nom" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tel" className="form-label">
                  Téléphone
                </label>
                <input type="tel" className="form-control" id="tel" required />
              </div>
              <div className="mb-3">
                <label htmlFor="typeCarte" className="form-label">
                  Type de Carte
                </label>
                <select className="form-select" id="typeCarte" required>
                  <option value="">Sélectionnez une option</option>
                  <option value="debit">Débit</option>
                  <option value="credit">Crédit</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="numCarte" className="form-label">
                  Numéro de Carte
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numCarte"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dateExp" className="form-label">
                  Date d`&apos;`Expiration
                </label>
                <input
                  type="month"
                  className="form-control"
                  id="dateExp"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input type="text" className="form-control" id="cvv" required />
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Valider
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onClose}
                >
                  Fermer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
