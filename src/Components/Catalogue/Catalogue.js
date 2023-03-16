import { useState, useEffect } from "react";
import CatalogSearch from "./Search";
import CarList from "../Misc/CarList/CarList";
import styles from "./Catalogue.module.scss";
import { getCars } from "../../api/data";
import { Skeleton } from "../Misc/Loaders/Loaders";
import { useLocation } from "react-router-dom";
import { getSearchState } from "../../utils/initializers";

export default function Catalogue() {
  window.scrollTo(0, 0);
  const { state } = useLocation();
  const [search, setSearch] = useState(getSearchState(state));
  const [offers, setOffers] = useState(null);
  const [perPage, setPerPage] = useState(20);
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCars(search, page, perPage, sort).then((result) => {
      setOffers(result);
    });
  }, [search, page, perPage, sort]);

  return (
    <main className={styles.main}>
      <CatalogSearch setSearch={setSearch} setPage={setPage} state={state} />
      {offers ? (
        <CarList
          data={offers}
          perPage={perPage}
          setPerPage={setPerPage}
          page={page}
          setPage={setPage}
          sort={sort}
          setSort={setSort}
        />
      ) : (
        <Skeleton height="half" />
      )}
    </main>
  );
}
