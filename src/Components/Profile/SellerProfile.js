import { useState, useEffect, useReducer } from "react";
import { Navigate, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getUserCars } from "../../api/data";
import { getUserData } from "../../utils/localStorage";
import { controlReducer, defaultSettings } from "../../utils/reducer";
import styles from "./Profile.module.scss";

function SellerProfile({ id }) {
  const [offers, setOffers] = useState(null);
  const [navigation, dispatch] = useReducer(controlReducer, defaultSettings);

  useEffect(() => {
    getUserCars(navigation.page, navigation.perPage, navigation.sort, id).then(
      (result) => {
        setOffers(result);
      }
    );
  }, [navigation, id]);

  return offers ? (
    <main className={styles.main}>
      <section>
        <UserCard owner={false} userData={offers.owner} />
      </section>
      {offers.cars.length > 0 && (
        <h2>Offers from this user : {offers.count}</h2>
      )}
      <CarList data={offers} navigation={navigation} dispatch={dispatch} />
    </main>
  ) : (
    <Skeleton height="full" />
  );
}

export default function SellerWrapper() {
  const { id } = useParams();
  const user = getUserData();

  if (user?.userData._id === id) {
    return <Navigate to="/profile" replace={true} />;
  }

  return <SellerProfile id={id} />;
}
