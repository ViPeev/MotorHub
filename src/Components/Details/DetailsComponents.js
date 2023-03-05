import { useContext } from "react";
import { createPortal } from "react-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import { Gallery, PhotoRow } from "../Misc/Gallery/Gallery";

import styles from "./CarDetails.module.scss";
import user from "../../assets/icons/user-large-solid.svg";
import email from "../../assets/icons/at-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";
import map from "../../assets/icons/map-location-dot-solid.svg";
import expand from "../../assets/icons/maximize-solid.svg";
import shrink from "../../assets/icons/minimize-solid.svg";

const body = document.querySelector("body");

function ContactBox({}) {
  return (
    <div className={styles.contacts}>
      <h4>Contacts</h4>
      <div>
        <img src={user} title="Seller" alt="Seller" /><span> Johann Schmidth</span>
      </div>
      <div>
        <img src={map} title="Location" alt="Location" /><span> Germany</span>
      </div>
      <div>
        <img src={phone} title="Phone Number" alt="Phone Number" />
        <span> +359876511506</span>
      </div>
      <div>
        <img src={email} title="E-mail" alt="E-mail" /><span> vlado@abv.bg</span>
      </div>
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

function TechDetailsBox() {
  return (
    <div className={styles.technicals}>
      <h4>Land Rover Range Rover Sport 3.0HDI</h4>
      <p>Price: 3000 &euro;</p>
      <h5>Technical Details</h5>
      <table>
        <tbody>
          <tr>
            <th>Category :</th>
            <td>SUV</td>
          </tr>
          <tr>
            <th>Condition :</th>
            <td>Used</td>
          </tr>
          <tr>
            <th>Mileage :</th>
            <td>300000 km</td>
          </tr>
          <tr>
            <th>Transmission :</th>
            <td>Automatic</td>
          </tr>
          <tr>
            <th>Cubic capacity :</th>
            <td>
              3000 cm<sup>3</sup>
            </td>
          </tr>
          <tr>
            <th>Power :</th>
            <td>235 HP</td>
          </tr>
          <tr>
            <th>Fuel :</th>
            <td>Diesel</td>
          </tr>
          <tr>
            <th>Year :</th>
            <td>2010</td>
          </tr>
          <tr>
            <th>Doors :</th>
            <td>4/5</td>
          </tr>
          <tr>
            <th>Seats :</th>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SlideShow() {
  const { images, index, handleButtonClick, handleImageClick, handleDisplay } =
    useContext(DetailsContext);

  return (
    <div className={styles.gallery}>
      <Gallery
        image={images[index]}
        handleClick={handleButtonClick}
        handleDisplay={handleDisplay}
        index={index}
        photoCount={images.length}
        styleClass={"gallery"}
        resizeIcon={expand}
      />
      <PhotoRow
        images={images}
        activeIndex={index}
        handleClick={handleImageClick}
        styleClass={"photo-row"}
      />
    </div>
  );
}

function LightBox() {
  const {
    images,
    index,
    lightBoxDisplay,
    handleButtonClick,
    handleDisplay,
  } = useContext(DetailsContext);

  if(lightBoxDisplay){
    document.body.style.overflow = "hidden";
  }else {
    document.body.style.overflow = "auto";
  }

  return lightBoxDisplay
    ? createPortal(
        <div className={styles["light-box"]} onClick={handleDisplay}>
          <Gallery
            image={images[index]}
            handleClick={handleButtonClick}
            handleDisplay={handleDisplay}
            index={index}
            photoCount={images.length}
            styleClass={"lightbox-gallery"}
            resizeIcon={shrink}
          />
        </div>,
        body
      )
    : null;
}

export { ContactBox, DescriptionBox, TechDetailsBox, SlideShow, LightBox };
