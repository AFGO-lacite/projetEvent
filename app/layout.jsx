"use client";
import { Inter } from "next/font/google";
import "normalize.css/normalize.css";
import "../style/globals.css";
import { Header } from "@/components/Header.jsx";
import { Footer } from "@/components/Footer.jsx";
import styles from "./layout.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Accueil from "@/components/Accueil";
import { MotoPage } from "@/components/MotoPage";
import { MuscleCars } from "@/components/MuscleCars";
import { OldCars } from "@/components/OldCars";
import ContactForm from '@/components/ContactPage'
import {Info} from '@/components/InfoPage'
import GalleriePage from '@/components/GalleriePage'

const inter = Inter({ subsets: ["latin"] });

/*
export const metadata = {
  title: "Car Tuning Show",
  description: "Event",
};
*/
export default function RootLayout({ children }) {
  const [page, setPage] = useState("accueil");
  return (
    <html lang="en">
      <body className={inter.className + " " + styles.body}>
        <Header setPage={setPage} />
        <main className={styles.main + " "}>
          {page === "accueil" ? (
            <Accueil />
          ) : page === "MotoPage" ? (
            <MotoPage />
          ) : page === "MuscleCars" ? (
            <MuscleCars />
          ) : page === "OldCars" ? (
            <OldCars />
          ) : page === "contact" ? (<ContactForm />) :
           page === 'info' ? (<Info/>):
           page === 'gallerie' ? (<GalleriePage/>):
          <div>coucou</div> }
        </main>

        <Footer setPage={setPage}></Footer>
      </body>
    </html>
  );
}
