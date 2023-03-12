import UserCard from "./UserCard";
import styles from "./Profile.module.scss";
import CarList from "../Misc/CarList/CarList";
import { useState, useEffect } from "react";
import { getOwnCars, getFavourites } from "../../api/data";
import Spinner from "../Misc/Loaders/Loaders";

const getFunctions = {
  ownOffers: getOwnCars,
  favourites: getFavourites,
};

export default function UserProfile() {
  const [listType, setListType] = useState("ownOffers");
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    getFunctions[listType]().then((result) => {
      setOffers(result);
    });
  }, [listType]);

  const handleClick = (type) => {
    if (type !== listType) {
      setListType(type);
    }
  };

  const active = listType === "ownOffers";

  return (
    <main className={styles.main}>
      <section>
        <UserCard />
      </section>
      <div>
        <button
          className={active ? styles.active : ""}
          onClick={handleClick.bind(null, "ownOffers")}
        >
          My offers
        </button>
        <button
          className={!active ? styles.active : ""}
          onClick={handleClick.bind(null, "favourites")}
        >
          Favourites
        </button>
      </div>
      {offers ? <CarList cars={offers} /> : null}
    </main>
  );
}
