import Image from "next/image";
import styles from "../styles/carousel.module.css";
import { ebGaramondFont } from "@/app/lib/fonts";
import PoloTieDye1 from "@/images/polos_600x600/polotiedyefalabella600x600.jpg";
import PoloTieDye2 from "@/images/polos_600x600/polotiedyefalabella600x600_2.jpg";
import PoloTieDye3 from "@/images/polos_600x600/polotiedyefalabella600x600_3.jpg";
import PoloTieDye4 from "@/images/polos_600x600/polotiedyefalabella600x600_4.jpg";
import PoloTieDye5 from "@/images/polos_600x600/polotiedyefalabella600x600_5.jpg";
import PoloTieDye6 from "@/images/polos_600x600/polotiedyefalabella600x600_6.jpg";
import PoloTieDye7 from "@/images/polos_600x600/polotiedyefalabella600x600_7.jpg";
import PoloTieDye8 from "@/images/polos_600x600/polotiedyefalabella600x600_8.jpg";

export const CarouselHero = () => {
  const images = [
    {
      name: "Polo tie dye uno",
      image: PoloTieDye1,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye dos",
      image: PoloTieDye2,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye tres",
      image: PoloTieDye3,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye cuatro",
      image: PoloTieDye4,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye cinco",
      image: PoloTieDye5,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye seis",
      image: PoloTieDye6,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye siete",
      image: PoloTieDye7,
      width: "650",
      height: "650",
    },
    {
      name: "Polo tie dye ocho",
      image: PoloTieDye8,
      width: "650",
      height: "650",
    },
  ];

  return (
    <section className={styles.carouselImages}>
      <div className={styles.slider_box_left}>
        <ul>
          {images.slice(0, 4).map((firstFourImages) => (
            <li key={firstFourImages.name} className={styles.image_item_left}>
              <Image
                src={firstFourImages.image}
                width={firstFourImages.width}
                height={firstFourImages.height}
                alt={firstFourImages.name}
                className={styles.image_left}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.slider_box_right}>
        <ul>
          {images.slice(0, 4).map((firstFourImages) => (
            <li key={firstFourImages.name} className={styles.image_item_right}>
              <Image
                src={firstFourImages.image}
                width={firstFourImages.width}
                height={firstFourImages.height}
                alt={firstFourImages.name}
                className={styles.image_right}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
