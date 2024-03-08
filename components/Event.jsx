"use client";
import Image from "next/image";
import date from "@/public/date.png";
import location from "@/public/location.png";
import PaymentModal from "./Paiement.jsx";
import styles from "./Event.module.css";
import { useState } from "react";
import pricepic from "@/public/price.png";

export default function Event({
  pic,
  time,
  localisation,
  titre,
  children,
  price,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className={styles.div}>
      <h1>{titre}</h1>
      <div className={""}>
        <Image
          src={pic}
          alt="{description}"
          layout="responsive"
          objectFit="contain"
          width={300}
          height={200}
          className="rounded m-5 border border-3 mx-auto d-block"
        />
        <div
          id="contenaire"
          className={" border border-3 border-white rounded"}
        >
          <div className={styles.contenaire2}>
            <div className={styles.contenaire4}>
              <div className={styles.contenaire3}>
                <Image
                  className={" ms-2  rounded"}
                  src={date}
                  alt="icone date"
                  width={80}
                  height={80}
                />
                <p className={"ms-2 mt-2 h2 font-weight-bold"}>
                  <strong>{time}</strong>
                </p>
              </div>
              <div className={styles.contenaire3}>
                <Image
                  className={" rounded"}
                  src={pricepic}
                  alt="icone date"
                  width={80}
                  height={80}
                />
                <p className={"ms-2 mt-2 h2 font-weight-bold"}>
                  <strong>{price}</strong>
                </p>
              </div>

              <div className={styles.contenaire3}>
                <Image
                  className={" rounded"}
                  src={location}
                  alt="icone date"
                  width={80}
                  height={80}
                />
                <p className={"ms-2 mt-2 h2 font-weight-bold"}>
                  <strong>{localisation}</strong>
                </p>
              </div>
            </div>

            <div className={"p-3 w-100"}>
              <div className="w-100">{children}</div>
              <button
                className={"btn btn-light w-100 mt-2"}
                onClick={openModal}
              >
                Réserver
              </button>
              <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
