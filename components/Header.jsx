import styles from "./Header.module.css";
import { MenuNav } from "./MenuNav";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link"

export const Header = () => {
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
          href="/"
        >
          <Link className={styles.Link} href="/">Car Tuning Show</Link>
          
        </h1>
      </div>

      <MenuNav ></MenuNav>
    </header>
  );
};
