import { useState, useEffect, useReducer, useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getOwnCars, getFavourites } from "../../api/data";
import styles from "./Profile.module.scss";

const getFunctions = {
  ownOffers: getOwnCars,
  favourites: getFavourites,
};

export default function UserProfile() {
  const [offers, setOffers] = useState(null);
  const { navigation, dispatch, listType, setListType } =
    useContext(ProfileContext);

  useEffect(() => {
    getFunctions[listType](
      navigation.page,
      navigation.perPage,
      navigation.sort
    ).then((result) => {
      setOffers(result);
    });
  }, [listType, navigation]);

  const handleClick = (type) => {
    if (type !== listType) {
      setListType(type);
    }
  };

  const active = listType === "ownOffers";

  return (
    <main className={styles.main}>
      <section>
        <UserCard owner={true} />
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
      {offers ? (
        <CarList data={offers} navigation={navigation} dispatch={dispatch} />
      ) : (
        <Skeleton height="half" />
      )}
    </main>
  );
}
