import { useCallback, useContext } from "react";
import { ListContext } from "../CarList/CarList";
import Pagination from "./Pagination";
import { SortSelect } from "../../Forms/Inputs";
import styles from "./Controls.module.scss";

const sortOptions = [
  { name: "Latest", value: "latest" },
  { name: "Oldest", value: "oldest" },
  { name: "Price - Ascending", value: "priceAsc" },
  { name: "Price - Descending", value: "priceDes" },
  { name: "Year - Descending", value: "yearDes" },
  { name: "Year - Ascending", value: "yearAsc" },
];

const itemsPerPage = [
  { name: "10", value: 10 },
  { name: "20", value: 20 },
  { name: "30", value: 30 },
  { name: "40", value: 40 },
];

export default function Controls() {
  const { navigation, dispatch } = useContext(ListContext);

  const changeItems = useCallback(
    (e) => {
      dispatch({ type: "SET_PER_PAGE", payload: e.target.value });
    },
    [dispatch]
  );

  const changeSort = useCallback(
    (e) => {
      dispatch({ type: "SET_SORT", payload: e.target.value });
    },
    [dispatch]
  );

  return (
    <div className={styles.controls}>
      <SortSelect
        label="Sort"
        name="sortBy"
        value={navigation.sort}
        handleChange={changeSort}
        options={sortOptions}
      />
      <Pagination />
      <SortSelect
        label="Items per page"
        name="itemsPerPage"
        value={navigation.perPage}
        handleChange={changeItems}
        options={itemsPerPage}
      />
    </div>
  );
}
