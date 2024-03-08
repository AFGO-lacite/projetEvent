import styles from "./DropDownMenu.module.css";

import Link from "next/link"

export const DropDownMenu = () => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        Events
        <i className={styles.dropdownIcon}></i>
      </button>
      <div className={styles.dropdownContent}>
        <Link href="/moto" >
          Bikes
        </Link>
        <Link href="/muscle" >
          Muscle cars
        </Link>
        <Link href="/old">
          Old cars
        </Link>
      </div>
    </div>
  );
};
