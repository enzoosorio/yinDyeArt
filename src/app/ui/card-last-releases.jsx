import Image from "next/image";
import styles from "../styles/last-releases.module.css";

export const CardLastReleases = (props) => {
  const { titleTshirt, imageTshirt } = props;

  return (
    <div className={styles.cardWrapper}>
      <Image src={imageTshirt} width={300} height={300} alt={titleTshirt} />
      <p>{titleTshirt}</p>
    </div>
  );
};
