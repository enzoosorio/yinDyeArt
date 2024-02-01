import styles from "../styles/specifiesHero.module.css";
import Bulb from "../../svgs/light-bulb.svg";
import Shipping from "../../svgs/delivery-truck.svg";
import Tshirt from "../../svgs/t-shirt.svg";
import ColorWheel from "../../svgs/HUE-16-color-wheel.svg";
import { CardItem } from "./cardItemSpecifyHero";

export const SpecifiesHero = () => {
  const specifiesItems = [
    { title: "Creatividad Garantizada", icon: Bulb },
    { title: "Envíos a todo el Perú", icon: Shipping },
    { title: "¡Pintamos gratis tu prenda! info", icon: Tshirt },
    { title: "Pedidos tie dye personalizados", icon: ColorWheel },
  ];

  return (
    <section className={styles.contentWrapper}>
      {specifiesItems.map((item) => (
        <CardItem title={item.title} icon={item.icon} width={100} height={99} />
      ))}
    </section>
  );
};
