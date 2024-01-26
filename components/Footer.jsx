import styles from "./Footer.module.css";
import styles2 from "./Footer.module.css";

import { MenuNavFooter } from "./MenuNavFooter.jsx";

export const Footer = () => {
  return (
    <footer className={"d-flex justify-content-between"}>
      <p className={styles2.title2}>
        &copy; 2024 Car Tuning Show. Amine,Ayoub et Ghofrane{" "}
      </p>
      <MenuNavFooter className={""}></MenuNavFooter>
    </footer>
  );
};
