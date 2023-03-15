import { useState, useEffect } from "react";
import CatalogSearch from "./Search";
import CarList from "../Misc/CarList/CarList";
import styles from "./Catalogue.module.scss";
import { getCars } from "../../api/data";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { queryBuilder } from "../../utils/dataFormatters";
import { useLocation } from "react-router-dom";
import { getSearchState } from "../../utils/initializers";

export default function Catalogue() {
  window.scrollTo(0, 0);
  const { state } = useLocation();
  const [search, setSearch] = useState(getSearchState(state));
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    getCars(search).then((result) => {
      setOffers(result);
    });
  }, [search]);


  return (
    <main className={styles.main}>
      <CatalogSearch setSearch={setSearch} state={state} />
      {offers ? <CarList cars={offers} /> : <Skeleton height="half" />}
    </main>
  );
}
