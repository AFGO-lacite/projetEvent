
import styles from "./MenuNav.module.css";

export const MenuNav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={""}>
          <li className={styles.mar}>
            <ul>
              <li className={"mt-4   "}>
                <a href="">Events</a>
              </li>
              <li className={"mt-4  "}>
                <a href="">INFO</a>
              </li>
              <li className={"mt-4"}>
                <a href="">Gallerie</a>
              </li>
              
            </ul>
          </li>

          
        </ul>
      </nav>
    </div>
  );
};
