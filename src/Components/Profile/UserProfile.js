import UserCard from "./UserCard";
import styles from "./Profile.module.scss";
import CarList from "../Misc/CarList/CarList";
import { useState } from "react";

export default function UserProfile() {
  const [carList, setCarList] = useState("ownOffers");

  const handleClick = (type) => {
    if (type !== carList) {
      setCarList(type);
    }
  };

  const active = carList === "ownOffers";

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
      <CarList />
    </main>
  );
}
