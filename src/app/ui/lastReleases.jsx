import styles from "../styles/last-releases.module.css";
import { CardLastReleases } from "./card-last-releases";
import { ebGaramondFont } from "../lib/fonts";
import PoloTieDye1 from "@/images/polos_600x600/polotiedyefalabella600x600.jpg";
import PoloTieDye2 from "@/images/polos_600x600/polotiedyefalabella600x600_2.jpg";
import PoloTieDye3 from "@/images/polos_600x600/polotiedyefalabella600x600_3.jpg";

export const LastReleases = () => {
  const lastReleases = [
    { id: "001", imageTshirt: PoloTieDye1, titleTshirt: "Polo Tie Dye 1" },
    { id: "002", imageTshirt: PoloTieDye2, titleTshirt: "Polo Tie Dye 2" },
    { id: "003", imageTshirt: PoloTieDye3, titleTshirt: "Polo Tie Dye 3" },
  ];

  return (
    <section
      className={`${styles.LastReleasesWrapper} ${ebGaramondFont.className}`}
    >
      <hr />
      <div className={styles.cardsWrapper}>
        {lastReleases.map((itemLastRelease) => (
          <CardLastReleases
            key={itemLastRelease.id}
            imageTshirt={itemLastRelease.imageTshirt}
            titleTshirt={itemLastRelease.titleTshirt}
          />
        ))}
      </div>
      <hr />
    </section>
  );
};
