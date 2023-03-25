import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dataFormatters";
import styles from "./CarDetails.module.scss";
import user from "../../assets/icons/user-large-solid.svg";
import email from "../../assets/icons/at-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";
import map from "../../assets/icons/map-location-dot-solid.svg";

function Contacts({ data }) {
  return (
    <div className={styles.contacts}>
      <h4>Contacts</h4>
      <div>
        <img src={user} title="Seller" alt="Seller" className="invert-low"/>
        <span>
          <Link to={`/sellers/${data._ownerId}`}>{data.owner.fullName}</Link>
        </span>
      </div>
      <div>
        <img src={map} title="Location" alt="Location" className="invert-low"/>
        <span> {data.location}</span>
      </div>
      <div>
        <img src={phone} title="Phone Number" alt="Phone Number" className="invert-low"/>
        <span> {data.phone}</span>
      </div>
      <div>
        <img src={email} title="E-mail" alt="E-mail" className="invert-low"/>
        <span> {data.owner.email}</span>
      </div>
    </div>
  );
}

function Description({ data }) {
  return (
    <div className={styles.description}>
      <h4>Description</h4>
      <p>{data.description}</p>
    </div>
  );
}

function TechDetails({ data }) {
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

export { Contacts, Description, TechDetails };
