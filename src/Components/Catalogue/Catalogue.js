import { useEffect, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import CatalogSearch from "./Search";
import { CarList } from "../Misc/CarList/CarList";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { getCars } from "../../api/data";
import { queryBuilder } from "../../utils/dataFormatters";
import styles from "./Catalogue.module.scss";

const scrollSettings = {
  top: 0,
  left: 0,
  behavior: "smooth",
};
export default function Catalogue() {
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
      window.scrollTo(scrollSettings);
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
