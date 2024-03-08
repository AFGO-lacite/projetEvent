import styles from "./MenuNav.module.css";
import Image from "next/image";
import fb from "@/public/fb.png";
import insta from "@/public/insta.png";
import linkedin from "@/public/link.png";
import Link from "next/link"

export const MenuNavFooter = () => {
  return (
    <nav className={styles.nav + ""}>
      <div className="mt-3"></div>
      <ul className={""}>
        <li className={styles.mar}>
          <ul>
            <li className={"mt-4 "}>
              <Link
                href="/contact"
                
              >
                Contactez-nous
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className={" mb-4 "}>
              <ul className={""}>
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
                      alt="Icone Instagrame"
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
