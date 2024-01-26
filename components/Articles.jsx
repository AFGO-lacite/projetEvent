import Image from "next/image";
import styles from "./Articles.module.css";

export const Articles = ({ titre, pic, description, texte }) => {
  return (
    <div className={styles.div + " pe-5 ps-5 rounded mt-5 "}>
      <h1 className={"mt-3"}>{titre}</h1>
      <Image
        src={pic}
        alt={description}
        layout="responsive"
        objectFit="contain"
        width={300}
        height={200}
        className="rounded m-5 border border-3 mx-auto d-block"
      />{" "}
      <p className={"m-5"}>{texte}</p>
    </div>
  );
};
