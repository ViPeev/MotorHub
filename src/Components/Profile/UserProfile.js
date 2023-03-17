import { useState, useEffect, useReducer } from "react";
import styles from "./Profile.module.scss";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { controlReducer, defaultSettings } from "../../utils/reducer";
import { getOwnCars, getFavourites } from "../../api/data";

const getFunctions = {
  ownOffers: getOwnCars,
  favourites: getFavourites,
};
export default function UserProfile() {
  const [listType, setListType] = useState("ownOffers");
  const [offers, setOffers] = useState(null);
  const [navigation, dispatch] = useReducer(defaultSettings, controlReducer);

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
      {offers ? (
        <CarList
          data={offers}
          navigation={navigation}
          dispatch={dispatch}
        />
      ) : (
        <Skeleton height="half" />
      )}
    </main>
  );
}
