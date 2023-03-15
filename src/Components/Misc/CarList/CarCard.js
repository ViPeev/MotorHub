import styles from "./CarList.module.scss";
import CardSlider from "./CardSlider";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/dataFormatters";

export default function CarCard({
  make,
  model,
  modification,
  price,
  fuelType,
  mileage,
  location,
  images,
  _id,
  createdAt,
}) {
  const href = `/details/${_id}`;
  return (
    <Link to={href}>
      <div className={`${styles.card} fade-in`}>
        <CardSlider images={images} />
        <h6>{`${make} ${model} ${modification}`}</h6>
        <p>{price} &euro;</p>
        <p>
          {fuelType}, {mileage} km
        </p>
        <p>{location}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
    </Link>
  );
}
