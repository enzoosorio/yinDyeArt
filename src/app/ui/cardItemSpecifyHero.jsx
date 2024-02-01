import Image from "next/image";
import styles from "../styles/specifiesHero.module.css";
import { jostFont } from "../lib/fonts";

export const CardItem = (props) => {
  const { title, icon, width, height } = props;

  return (
    <div className={styles.itemWrapper}>
      <Image src={icon} width={width} height={height} alt={title} />
      <h3 className={jostFont.className}>{title}</h3>
    </div>
  );
};
