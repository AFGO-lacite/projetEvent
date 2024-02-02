import styles from "./MenuNav.module.css";
import { DropDownMenu } from "./DropDownMenu.jsx";

export const MenuNav = ({ setPage }) => {
  return (
    <div className="p-3">
      <nav className={styles.nav}>
        <ul className={""}>
          <li className={styles.mar}>
            <ul>
              <li className={"mt-4   "}>
                <DropDownMenu setPage={setPage}></DropDownMenu>
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
