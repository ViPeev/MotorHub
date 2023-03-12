import { useState, useEffect } from "react";
import AdvancedSearch from "../Forms/CatalogSearch";
import CarList from "../Misc/CarList/CarList";
import styles from "./Catalogue.module.scss";
import { getCars } from "../../api/data";

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
      <AdvancedSearch />
      {offers ? <CarList cars={offers} /> : null}
    </main>
  );
}
