import { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import CatalogSearch from "./Search";
import { CarList } from "../Misc/CarList/CarList";
import ErrorBox from "../Misc/Error/ErrorBox";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getCars } from "../../api/data";
import { queryBuilder } from "../../utils/dataFormatters";
import { scrollSettings } from "../../utils/initializers";
import styles from "./Catalogue.module.scss";

export default function Catalogue() {
  const [error, setError] = useState(null);
  const { navigation, dispatch, searchData, offers, setOffers } =
    useContext(SearchContext);

  useEffect(() => {
    getCars(
      queryBuilder(searchData),
      navigation.page,
      navigation.perPage,
      navigation.sort
    )
      .then((result) => {
        setOffers(result);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => setError(null), 1800);
      });
  }, [navigation]);

  window.scrollTo(scrollSettings);
  
  return (
    <>
      <main className={styles.main}>
        <CatalogSearch />
        {offers ? (
          <CarList data={offers} navigation={navigation} dispatch={dispatch} />
        ) : (
          <Skeleton height="half" />
        )}
      </main>
      {error && <ErrorBox text={error} />}
    </>
  );
}
