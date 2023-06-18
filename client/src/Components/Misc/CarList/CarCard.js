import { Link } from "react-router-dom";
import CardSlider from "./CardSlider";
import { formatDate } from "../../../utils/dataFormatters";
import styles from "./CarList.module.scss";

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
        <p>
          {price} &euro;, {location}
        </p>
        <p>
          {fuelType}, {mileage} km
        </p>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      </div>
    </Link>
  );
}
