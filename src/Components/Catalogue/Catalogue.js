import { useEffect, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import CatalogSearch from "./Search";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getCars } from "../../api/data";
import { queryBuilder } from "../../utils/dataFormatters";
import styles from "./Catalogue.module.scss";

export default function Catalogue() {
  window.scrollTo(0, 0);

  const { navigation, dispatch, searchData, offers, setOffers } =
    useContext(SearchContext);

  useEffect(() => {
    getCars(
      queryBuilder(searchData),
      navigation.page,
      navigation.perPage,
      navigation.sort
    ).then((result) => {
      setOffers(result);
    });
  }, [navigation]);

  return (
    <main className={styles.main}>
      <CatalogSearch />
      {offers ? (
        <CarList data={offers} navigation={navigation} dispatch={dispatch} />
      ) : (
        <Skeleton height="half" />
      )}
    </main>
  );
}
