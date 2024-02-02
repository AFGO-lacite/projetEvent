import styles from "./DropDownMenu.module.css";

export const DropDownMenu = ({ setPage }) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        Events
        <i className={styles.dropdownIcon}></i>
      </button>
      <div className={styles.dropdownContent}>
        <a href="#" onClick={() => setPage("MotoPage")}>
          Bikes
        </a>
        <a href="#" onClick={() => setPage("MuscleCars")}>
          Muscle cars
        </a>
        <a href="#" onClick={() => setPage("OldCars")}>
          Old cars
        </a>
      </div>
    </div>
  );
};
