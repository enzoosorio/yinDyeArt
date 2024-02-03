"use client";

import Image from "next/image";
import styles from "../styles/articles.module.css";
import LeftArrow from "../../svgs/arrow-left.svg";
import RightArrow from "../../svgs/arrow-right.svg";
import { robotoSlabFont, ebGaramondFont } from "../lib/fonts";
import Yin1 from "../../../public/yin/yinyindye1.jpeg";
import Yin2 from "../../../public/yin/yinyindye2.jpeg";
import Yin3 from "../../../public/yin/yinyindye3.jpeg";
import Yin4 from "../../../public/yin/yinyindye4.jpeg";
import Yin5 from "../../../public/yin/yinyindye5.jpeg";
import Yin6 from "../../../public/yin/yinyindye6.jpeg";
import Yin7 from "../../../public/yin/yinyindye7.jpeg";
import { Models } from "./models";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const ArticlesWrapper = () => {
  const cat = [
    { image: Yin1, about: "cat sleeping in the sofa" },
    { image: Yin2, about: "cat biting my foot" },
    { image: Yin3, about: "cat on the wood chair with a lunch bag" },
    { image: Yin4, about: "cat sleeping in the sofa again" },
    { image: Yin5, about: "cat seeing the camera before he sleep in the sofa" },
    { image: Yin6, about: "cat in the christmas tree box" },
    { image: Yin7, about: "tumblr-cat foto" },
  ];

  const [imageCounter, setImageCounter] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const handleLeftClick = (e) => {
    if (imageCounter > 1) {
      setImageCounter(imageCounter - 1);
    }
    console.log(imageCounter);
  };

  const handleRightClick = (e) => {
    if (imageCounter < cat.length) {
      setImageCounter(imageCounter + 1);
    }
    console.log(imageCounter);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Actualiza el estado cuando cambia el tamaño de la ventana
    };
    if (typeof window !== "undefined") {
      handleResize(); // Llama a la función inicialmente para establecer el estado

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  //me ayuda a que se conserve el index al momento de pasar de mobile a desktop (por cualquier cosa)
  //no funciona si se cambia el index de desktop y se quiere pasar a mobile ):
  const handleSlideChange = (swiper) => {
    setImageCounter(swiper.realIndex + 1);
  };

  return (
    <section className={styles.articlesWrapper}>
      <article className={styles.articleOne}>
        <div className={styles.imagesYinwithButtons}>
          {isMobile ? (
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination]}
              onSlideChange={handleSlideChange}
              className={`mySwiper ${styles.wrapperYinImagesSlider}`}
            >
              {cat.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.image}
                    width={240}
                    height={320}
                    alt={item.about}
                    className={styles.imageYin}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <button onClick={handleLeftClick} disabled={imageCounter === 1}>
                <IoIosArrowBack
                  className={`${styles.arrowBack} ${
                    imageCounter === 1 ? styles.arrowBackDisabled : ``
                  }`}
                />
              </button>
              <div className={styles.wrapperYinImages}>
                <ul
                  className={`${styles.ulWrapperYinImages} ${
                    imageCounter === 2
                      ? styles.showImageTwo
                      : imageCounter === 3
                      ? styles.showImageThree
                      : imageCounter === 4
                      ? styles.showImageFour
                      : imageCounter === 5
                      ? styles.showImageFive
                      : imageCounter === 6
                      ? styles.showImageSix
                      : imageCounter === 7
                      ? styles.showImageSeven
                      : ""
                  }`}
                >
                  {cat.map((item, index) => (
                    <li key={index} className={styles.item__imageYin}>
                      <Image
                        src={item.image}
                        width={320}
                        height={426.67}
                        alt={item.about}
                        className={styles.imageYin}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={handleRightClick} disabled={imageCounter === 7}>
                <IoIosArrowForward
                  className={`${styles.arrowForward} ${
                    imageCounter === 7 ? styles.arrowForwardDisabled : ``
                  }`}
                />
              </button>
            </>
          )}
        </div>
        <h3 className={robotoSlabFont.className}>
          Yin es nuestro gatito, el preferido de la familia . Nació con el don
          de ser modelo, así que compartimos fotos de él con ustedes. 😸
        </h3>
      </article>
      <Models />
    </section>
  );
};
