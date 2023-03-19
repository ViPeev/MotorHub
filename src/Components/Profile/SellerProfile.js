import { useState, useEffect, useReducer } from "react";
import { Navigate, useParams } from "react-router-dom";
import UserCard from "./UserCard";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getUserCars } from "../../api/data";
import { controlReducer, defaultSettings } from "../../utils/reducer";
import styles from "./Profile.module.scss";
import { getUserData } from "../../utils/localStorage";

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

  return (
    <main className={styles.main}>
      <section>
        <UserCard owner={false} />
      </section>
      {offers ? (
        <CarList data={offers} navigation={navigation} dispatch={dispatch} />
      ) : (
        <Skeleton height="half" />
      )}
    </main>
  );
}
export default function SellerWrapper() {
  const { id } = useParams();
  const user = getUserData();

  if (user && user.userData._id === id) {
    return <Navigate to="/profile" replace={true} />;
  }

  return <SellerProfile id={id} />;
}
