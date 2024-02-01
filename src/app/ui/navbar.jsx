"use client";

import Image from "next/image";
import styles from "../styles/navbar.module.css";
import InstagramLogo from "../../svgs/instagram-logo.svg";
import ShoppingCart from "../../svgs/cart-shop-ecommerce.svg";
import Heart from "../../svgs/heart.svg";
import { robotoSlabFont } from "@/app/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      name: "2023-2024 Collection",
      href: "/2023-2024-collection",
      text: "2023-2024",
    },
    { name: "Last Releases", href: "/last-releases", text: "Last Releases" },
    {
      name: "Your Likes",
      href: "/your-likes",
      icon: Heart,
      width: "38",
      height: "38",
      alt: "heartWear",
    },
    {
      name: "Cart",
      href: "/cart",
      icon: ShoppingCart,
      width: "48",
      height: "48",
      alt: "cart",
    },
  ];

  return (
    <header className={styles.headerPage}>
      <nav className={`${styles.navbarDiv} ${robotoSlabFont.className}`}>
        <div>
          <Link href={"/"}>
            <Image src={InstagramLogo} width={46} height={46} />
          </Link>
        </div>
        {/* <div className={styles.countdownWrapper}>
          <div className={styles.countdown}>
            <div className={styles.specification}>
              <span>dd</span>
              <span>hh</span>
              <span>mm</span>
              <span>ss</span>
            </div>
            <div className={styles.timeOfCountdown}>
              <span>15</span>
              <span>:</span>
              <span>23</span>
              <span>:</span>
              <span>59</span>
              <span>:</span>
              <span>59</span>
            </div>
          </div>
        </div> */}
        <ul className={styles.linksNavbar}>
          {links.map((link) => (
            <li key={link.name} className={styles.fontLinksNavbar}>
              <Link
                className={`${styles.fontLinkStyle} ${
                  pathname === link.href ? styles.activeLink : ""
                }`}
                href={link.href}
              >
                {link.text && <span>{link.text}</span>}
                {link.icon && (
                  <Image
                    src={link.icon}
                    width={link.width}
                    height={link.height}
                    alt={link.alt}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
