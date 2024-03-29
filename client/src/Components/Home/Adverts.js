import { memo } from "react";
import kodiaq from "../../assets/images/kodiaq.jpg";
import rrsport from "../../assets/images/rr-sport.jpg";
import fiat500 from "../../assets/images/f500.jpg";
import ioniq from "../../assets/images/ioniq5.jpg";
import styles from "./Home.module.scss";

export default memo(function Advert() {
  return (
    <section className={`${styles.adverts} fade-in`}>
      <figure>
        <a
          href="https://www.skoda-auto.bg/models/kodiaq_fl/kodiaq_fl"
          target="_blank"
        >
          <img src={kodiaq} alt="Skoda Kodiaq" />
        </a>
      </figure>
      <figure>
        <a
          href="https://www.landrover.bg/vehicles/new-range-rover-sport/overview"
          target="_blank"
        >
          <img src={rrsport} alt="Range Rovert Sport" />
        </a>
        <figcaption>
          <h4>Visceral, dramatic, uncompromising.</h4>
          <p>The new Range Rover Sport</p>
        </figcaption>
      </figure>
      <figure>
        <a href="https://vauto.bg/500e/" target="_blank">
          <img src={fiat500} alt="Fiat 500E" />
        </a>
        <figcaption>
          <h4>Extraordinary electric experience.</h4>
          <p>Fiat 500E</p>
        </figcaption>
      </figure>
      <figure>
        <a href="https://hyundai.bg/cars/ioniq-5" target="_blank">
          <img src={ioniq} alt="Hyundai Ioniq 5" />
        </a>
        <figcaption>
          <h4>Take a step into the future.</h4>
          <p>Hyundai Ioniq 5</p>
        </figcaption>
      </figure>
    </section>
  );
});
