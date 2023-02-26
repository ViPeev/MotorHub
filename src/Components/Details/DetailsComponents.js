import styles from "./CarDetails.module.scss";
import user from "../../assets/icons/user-large-solid.svg";
import email from "../../assets/icons/at-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";
import map from "../../assets/icons/map-location-dot-solid.svg";

function ContactBox() {
  return (
    <div className={styles.contacts}>
      <h4>Contacts</h4>
      <span>
        <img src={user} alt="seller" /> Johann Schmidth
      </span>
      <span>
        <img src={map} alt="seller" /> Germany
      </span>
      <span>
        <img src={phone} alt="seller" /> +359876511506
      </span>
      <span>
        <img src={email} alt="seller" /> vlado@abv.bg
      </span>
    </div>
  );
}

function DescriptionBox() {
  return (
    <div className={styles.description}>
      <h4>Description</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptas
        similique necessitatibus qui? Eos nobis molestias sed? Quaerat harum id
        nostrum a explicabo magnam cumque, porro quod, fugit nam eos suscipit
        modi laudantium facilis quibusdam impedit? Quas, obcaecati dignissimos?
        Beatae non numquam dolorum quaerat ab facere ex repellendus reiciendis
        deleniti. Nesciunt alias iure ducimus possimus a amet dolores aut
        quaerat harum odio ea, dolor eos asperiores praesentium repellat
        molestias et veritatis voluptatum corrupti exercitationem labore. Quidem
        mollitia consequatur, dicta, odit dolore fugit, dignissimos veniam
        laudantium sit magnam quis eveniet! Nihil dolorum eos dicta? Illum aut
        saepe magnam deserunt, quaerat similique!
      </p>
    </div>
  );
}

export { ContactBox, DescriptionBox };
