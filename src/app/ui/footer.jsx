"use client";

import Image from "next/image";
import styles from "../styles/footer.module.css";
import WhatsappLogo from "../../svgs/whatsapp.svg";
import InstagramLogo from "../../svgs/instagram-logo.svg";
import GmailLogo from "../../svgs/gmail.svg";
import TikTokLogo from "../../svgs/logo-tiktok.svg";
import Link from "next/link";
import { ebGaramondFont, robotoSlabFont } from "@/app/lib/fonts";
import paymentMethods from "@/images/pagos.png";

export const FooterPage = () => {
  const contactImageSources = [
    {
      name: "Whatsapp Logo",
      src: WhatsappLogo,
      width: "40",
      height: "45",
      href: "/",
    },
    {
      name: "Instagram Logo",
      src: InstagramLogo,
      width: "40",
      height: "40",
      href: "https://www.instagram.com/yindyeart/?hl=es",
    },
    {
      name: "Gmail Logo",
      src: GmailLogo,
      width: "48",
      height: "48",
      href: "mailto:eeeeeee@gmail.com",
    },
    {
      name: "TikTok Logo",
      src: TikTokLogo,
      width: "40",
      height: "47",
      href: "https://www.tiktok.com/@yindyeart",
    },
  ];
  return (
    <footer className={styles.footerPagee}>
      <section className={styles.contactArea}>
        <h3 className={` ${styles.contactTitle} ${ebGaramondFont.className}`}>
          <b>CONTACTO</b>
        </h3>
        <div className={styles.svgContactIcons}>
          {contactImageSources.map((contactIcon) => (
            <Link
              href={contactIcon.href}
              key={contactIcon.name}
              className={styles.svgContactIcon}
            >
              <Image
                src={contactIcon.src}
                width={contactIcon.width}
                height={contactIcon.height}
                alt={contactIcon.name}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.policyArea} ${robotoSlabFont.className}`}>
        <p>
          <Link
            className={styles.linkFooterText}
            href={"/pintado-de-polo-gratis"}
          >
            Información acerca del pintado de polo gratis
          </Link>
        </p>
        <p>
          <Link
            className={styles.linkFooterText}
            href={"/policy-and-use-terms"}
          >
            Política de privacidad | Términos de uso
          </Link>
        </p>
        <p>&copy; 2024 YinDyeArt. Todos los derechos reservados </p>
      </section>
      <section className={styles.paymentMethods}>
        <Image
          src={paymentMethods}
          width={404}
          height={200}
          alt="payment methods"
        />
      </section>
    </footer>
  );
};
