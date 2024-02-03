import Image from "next/image";
import styles from "../styles/articles.module.css";
import { ebGaramondFont } from "../lib/fonts";
import Marly1 from "../../../public/models/marly/marly2.JPG";
import Marly2 from "../../../public/models/marly/marly3.JPG";
import Marly3 from "../../../public/models/marly/marly4.JPG";
import Marly4 from "../../../public/models/marly/marly5.JPG";
import Marly5 from "../../../public/models/marly/marly6.JPG";
import Marly6 from "../../../public/models/marly/marly8.JPG";
import Marly7 from "../../../public/models/marly/marly9.JPG";
import Marly8 from "../../../public/models/marly/marly10.jpg";
//----
import FarroSofia1 from "../../../public/models/sofia_farro/farro_sofia1.jpg";
import FarroSofia2 from "../../../public/models/sofia_farro/farro_sofia3.jpg";
import FarroSofia3 from "../../../public/models/sofia_farro/farro_sofia4.jpg";
import FarroSofia4 from "../../../public/models/sofia_farro/farro_sofia5.jpg";
import FarroSofia5 from "../../../public/models/sofia_farro/farro_sofia7.jpg";
import FarroSofia6 from "../../../public/models/sofia_farro/farro_sofia8.jpg";
import FarroSofia7 from "../../../public/models/sofia_farro/farro_sofia9.jpg";
import FarroSofia8 from "../../../public/models/sofia_farro/farro_sofia10.jpg";
import FarroSofia9 from "../../../public/models/sofia_farro/farro_sofia11.jpg";
import { useEffect, useState } from "react";

export const Models = () => {
  const modelLeft = [
    {
      image: FarroSofia1,
      width: "323.22",
      height: "404",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia2,
      width: "323.71",
      height: "404.57",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia3,
      width: "322.87",
      height: "403.6",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia4,
      width: "323.94",
      height: "404.89",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia5,
      width: "323.39",
      height: "404.18",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia6,
      width: "323.22",
      height: "404",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia7,
      width: "323.22",
      height: "404",
      alt: "photo-gallery in the photoStudio",
    },
    {
      image: FarroSofia8,
      width: "323.22",
      height: "404",
      alt: "photo-gallery in the photoStudio",
    },
    // {
    //   image: FarroSofia9,
    //   width: "323.22",
    //   height: "404",
    //   alt: "photo-gallery in the photoStudio",
    // },
  ];

  const modelRight = [
    {
      image: Marly1,
      width: "323.22",
      height: "404",
      alt: "photo in the beach",
    },
    {
      image: Marly2,
      width: "323.71",
      height: "404.57",
      alt: "photo in the beach",
    },
    {
      image: Marly3,
      width: "322.87",
      height: "403.6",
      alt: "photo in the beach",
    },
    {
      image: Marly4,
      width: "323.94",
      height: "404.89",
      alt: "photo in the beach",
    },
    {
      image: Marly5,
      width: "323.39",
      height: "404.18",
      alt: "photo in the beach",
    },
    {
      image: Marly6,
      width: "323.22",
      height: "404",
      alt: "photo in the beach",
    },
    {
      image: Marly7,
      width: "323.22",
      height: "404",
      alt: "photo in the beach",
    },
    {
      image: Marly8,
      width: "323.22",
      height: "404",
      alt: "photo in the beach",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % modelLeft.length);
    }, 800);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage, modelLeft.length]);

  return (
    <article className={styles.articleTwo}>
      <div className={styles.wrapperModelLeft}>
        <Image
          src={modelLeft[currentImage].image}
          width={320}
          height={401}
          alt={modelLeft[currentImage].alt}
          className={styles.modelImage}
        />
      </div>
      <div
        className={`${styles.messageModelsWrapper} ${ebGaramondFont.className}`}
      >
        <h3>Nuestros Modelos</h3>
        <span>❤</span>
      </div>
      <div className={styles.wrapperModelRight}>
        <Image
          src={modelRight[currentImage].image}
          width={320}
          height={401}
          alt={modelRight[currentImage].alt}
          className={styles.modelImage}
        />
      </div>
    </article>
  );
};
