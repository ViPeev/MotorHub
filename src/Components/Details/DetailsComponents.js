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
import { formatDate } from "../../utils/dataFormatters";

const body = document.querySelector("body");

function ContactBox() {
  const { data } = useContext(DetailsContext);
  return (
    <div className={styles.contacts}>
      <h4>Contacts</h4>
      <div>
        <img src={user} title="Seller" alt="Seller" />
        <span> {data.owner.name}</span>
      </div>
      <div>
        <img src={map} title="Location" alt="Location" />
        <span> {data.location}</span>
      </div>
      <div>
        <img src={phone} title="Phone Number" alt="Phone Number" />
        <span> {data.phone}</span>
      </div>
      <div>
        <img src={email} title="E-mail" alt="E-mail" />
        <span> {data.owner.email}</span>
      </div>
    </div>
  );
}

function DescriptionBox() {
  const { data } = useContext(DetailsContext);
  return (
    <div className={styles.description}>
      <h4>Description</h4>
      <p>{data.description}</p>
    </div>
  );
}

function TechDetailsBox() {
  const { data } = useContext(DetailsContext);

  const make = data.make !== "other" ? `${data.make} ` : "";
  const model = data.model !== "other" ? `${data.model} ` : "";

  return (
    <div className={styles.technicals}>
      <h4>{`${make}${model}${data.modification}`}</h4>
      <p>Price: {data.price} &euro;</p>
      <span>{formatDate(data.createdAt)}</span>
      <h5>Technical Details</h5>
      <table>
        <tbody>
          <tr>
            <th>Category :</th>
            <td>{data.category}</td>
          </tr>
          <tr>
            <th>Condition :</th>
            <td>{data.condition}</td>
          </tr>
          <tr>
            <th>Mileage :</th>
            <td>{data.mileage} km</td>
          </tr>
          <tr>
            <th>Transmission :</th>
            <td>{data.transmission}</td>
          </tr>
          <tr>
            <th>Cubic capacity :</th>
            <td>
              {data.cubicCapacity} cm<sup>3</sup>
            </td>
          </tr>
          <tr>
            <th>Power :</th>
            <td>{data.power} HP</td>
          </tr>
          <tr>
            <th>Fuel :</th>
            <td>{data.fuelType}</td>
          </tr>
          <tr>
            <th>Year :</th>
            <td>{data.year}</td>
          </tr>
          <tr>
            <th>Doors :</th>
            <td>{data.doors}</td>
          </tr>
          <tr>
            <th>Seats :</th>
            <td>{data.seats}</td>
          </tr>
          <tr>
            <th>Color :</th>
            <td>{data.color}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SlideShow() {
  const { data, index, handleButtonClick, handleImageClick, handleDisplay } =
    useContext(DetailsContext);

  const images = data.images;

  return (
    <div className={styles.gallery}>
      <Gallery
        image={images[index]}
        handleClick={handleButtonClick.bind(null, images.length)}
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
  const { data, index, lightBoxDisplay, handleButtonClick, handleDisplay } =
    useContext(DetailsContext);

  const images = data.images;
  const overflow = lightBoxDisplay ? "hidden" : "auto";
  document.body.style.overflow = overflow;

  return (
    lightBoxDisplay &&
    createPortal(
      <div className={styles["light-box"]} onClick={handleDisplay}>
        <Gallery
          image={images[index]}
          handleClick={handleButtonClick.bind(null, images.length)}
          handleDisplay={handleDisplay}
          index={index}
          photoCount={images.length}
          styleClass={"lightbox-gallery"}
          resizeIcon={shrink}
        />
      </div>,
      body
    )
  );
}

export { ContactBox, DescriptionBox, TechDetailsBox, SlideShow, LightBox };
