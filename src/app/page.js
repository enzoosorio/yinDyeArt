import Image from "next/image";
import styles from "./styles/page.module.css";
import { ebGaramondFont } from '@/app/lib/fonts'
import { CarouselHero } from "./ui/carouselHero";

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.messageHeroWrapper}>
        <section className={styles.messageHero}>
          <h1 className={ebGaramondFont.className}>UN ESTILO FUERA DE LA RUTINA</h1>
          <aside className={styles.asideContentMessage}>
            <h3>Con YinDyeArt queremos ayudar a expresar el talento oculto de distintas
              personas hacia el mundo.</h3>
            <p>Nos enfocamos en vender polos tie dye limitados. El límite es nuestra
              creatividad, por eso no pararemos de lanzar nuevos polos constantemente,
              <span>y si en caso desean algún pedido personalizado, no dudes en contactarnos
                para realizarlo</span> 😎</p>
          </aside>
        </section>
      </section>

      <CarouselHero />

    </main>
  );
}
