import styles from "./MenuNav.module.css";
import Image from "next/image";
import fb from "@/public/fb.png";
import insta from "@/public/insta.png";
import linkedin from "@/public/link.png";

export const MenuNavFooter = () => {
  return (
    <nav className={styles.nav}>
      <ul className={"m-3"}>
        <li className={styles.mar}>
          <ul>
            <li className={"mt-4 "}>
              <a href="">Contactez-nous</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className={" mb-4 "}>
              <ul className={"d-flex flex-nowrap"}>
                <li className={" "}>
                  <a href="">
                    <Image src={fb} alt="Icone Facebook"></Image>
                  </a>
                </li>
                <li className={" "}>
                  <a href="">
                    <Image
                      className={"rounded"}
                      src={insta}
                      alt="Icone Instagram"
                    ></Image>
                  </a>
                </li>
                <li className={""}>
                  <a href="">
                    <Image
                      className={"rounded"}
                      src={linkedin}
                      alt="Icone LinkedIn"
                    ></Image>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
