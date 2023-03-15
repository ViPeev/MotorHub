import { useState, useEffect } from "react";
import CatalogSearch from "./Search";
import CarList from "../Misc/CarList/CarList";
import styles from "./Catalogue.module.scss";
import { getCars } from "../../api/data";
import { Skeleton } from "../Misc/Loaders/Loaders";

export default function Catalogue() {
  window.scrollTo(0, 0);
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    getCars().then((result) => {
      setOffers(result);
    });
  }, []);

  return (
    <main className={styles.main}>
      <CatalogSearch />
      {offers ? <CarList cars={offers} /> : <Skeleton height="half" />}
    </main>
  );
}
