import Image from "next/image";
import styles from "../styles/articles.module.css";
import LeftArrow from "../../svgs/arrow-left.svg";
import RightArrow from "../../svgs/arrow-right.svg";
import { robotoSlabFont, ebGaramondFont } from "../lib/fonts";

export const ArticlesWrapper = () => {
  return (
    <section className={styles.articlesWrapper}>
      <article className={styles.articleOne}>
        <div className={styles.imagesYin}>
          <Image src={LeftArrow} width={41} height={42} alt="left arrow" />
          {/* falta la coleccion de imagenes */}
          <Image src={RightArrow} width={42} height={42} alt="right arrow" />
        </div>
        <h3 className={robotoSlabFont.className}>
          El nombre de la página nace a partir de nuesto gato Yin, quien
          obviamente ha inspirado para ser el nombre de la página. Compartimos
          fotos de él con ustedes. 😸
        </h3>
      </article>
      <article className={styles.articleTwo}>
        <p>Lorem ipsum dolor sit </p>
        <div
          className={`${styles.messageModelsWrapper} ${ebGaramondFont.className}`}
        >
          <h3>Nuestros Modelos</h3>
          <span>❤</span>
        </div>
        <p>Lorem ipsum dolor sit</p>
      </article>
    </section>
  );
};
