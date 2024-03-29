import { useState, useEffect, useContext, useMemo } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getUserCars, getFavourites } from "../../api/data";
import { getUserData } from "../../utils/localStorage";
import styles from "./Profile.module.scss";
import ErrorBox from "../Misc/Error/ErrorBox";
import { scrollSettings } from "../../utils/initializers";

const getFunctions = {
  ownOffers: getUserCars,
  favourites: getFavourites,
};

export default function UserProfile() {
  const [offers, setOffers] = useState(null);
  const [loading, setLoading] = useState(true);
  const { navigation, dispatch, listType, setListType, error, setError } =
    useContext(ProfileContext);

  const { userData } = useMemo(() => getUserData(), []);

  useEffect(() => {
    getFunctions[listType](
      navigation.page,
      navigation.perPage,
      navigation.sort,
      userData._id
    )
      .then((result) => {
        setOffers(result);
      })
      .catch((error) => {
        setError("Oops! Something went wrong!");
        setTimeout(() => setError(null), 1800);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [listType, navigation, userData._id]);

  const handleClick = (type) => {
    if (type !== listType) {
      dispatch({ type: "SET_PAGE", payload: 1 });
      setListType(type);
    }
  };
  
  window.scrollTo(scrollSettings);
  const active = listType === "ownOffers";

  return (
    <main className={styles.main}>
      <section>
        <UserCard owner={true} userData={userData} />
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
      {!loading ? (
        <CarList data={offers} navigation={navigation} dispatch={dispatch} />
      ) : (
        <Skeleton height="half" />
      )}
      {error && <ErrorBox text={error} />}
    </main>
  );
}
