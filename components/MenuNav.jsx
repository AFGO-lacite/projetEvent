import styles from "./MenuNav.module.css";
import { DropDownMenu } from "./DropDownMenu.jsx";

import Link from "next/link"


export const MenuNav = () => {
  return (
    <div className="p-3">
      <nav className={styles.nav}>
        <ul className={""}>
          <li className={styles.mar}>
            <ul>
              <li className={"mt-4   "}>
                <DropDownMenu ></DropDownMenu>
              </li>
              <li className={"mt-4  "}>
                <Link href="/info" >INFO</Link>
              </li>
              <li className={"mt-4"}>
                <Link href="/gallerie">Gallerie</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
