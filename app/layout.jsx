"use client";
import { Inter } from "next/font/google";
import "normalize.css/normalize.css";
import "../style/globals.css";
import { Header } from "@/components/Header.jsx";
import { Footer } from "@/components/Footer.jsx";
import styles from "./layout.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " " + styles.body}>
        <Header />
        <main className={styles.main + " "}>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
