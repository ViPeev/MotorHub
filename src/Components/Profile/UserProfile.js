import { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getUserCars, getFavourites } from "../../api/data";
import { getUserData } from "../../utils/localStorage";
import styles from "./Profile.module.scss";

const getFunctions = {
  ownOffers: getUserCars,
  favourites: getFavourites,
};

export default function UserProfile() {
  const [offers, setOffers] = useState(null);
  const { navigation, dispatch, listType, setListType } =
    useContext(ProfileContext);

  const {
    userData: { _id },
  } = getUserData();

  useEffect(() => {
    getFunctions[listType](
      navigation.page,
      navigation.perPage,
      navigation.sort,
      _id
    ).then((result) => {
      setOffers(result);
    });
  }, [listType, navigation, _id]);

  const handleClick = (type) => {
    if (type !== listType) {
      dispatch({ type: "SET_PAGE", payload: 1 });
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
