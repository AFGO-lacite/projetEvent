import styles from "./Header.module.css";
import { MenuNav } from "./MenuNav";
import Image from "next/image";
import logo from "@/public/logo.png";

export const Header = ({ setPage }) => {
  return (
    <header
      className={
        "content-fluid d-flex justify-content-between " + styles.header
      }
    >
      <div className={styles.spec}>
        <Image src={logo} alt="logo"></Image>
        <h1
          className={styles.title}
          onClick={() => {
            setPage("accueil");
          }}
        >
          Car Tuning Show
        </h1>
      </div>

      <MenuNav setPage={setPage}></MenuNav>
    </header>
  );
};
