import Pagination from "./Pagination";
import styles from "./Controls.module.scss";
import { SortSelect } from "../../Forms/Inputs";

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

export default function Controls({
  perPage,
  setPerPage,
  items,
  page,
  setPage,
  sort,
  setSort
}) {
  const changeItems = (e) => {
    setPage(1);
    setPerPage(e.target.value);
  };

  const changeSort = (e) => {
    setPage(1);
    setSort(e.target.value)
  };

  return (
    <div className={styles.controls}>
      <SortSelect
        label="Sort by"
        name="sortBy"
        value={sort}
        handleChange={changeSort}
        options={sortOptions}
      />
      <Pagination
        items={items}
        perPage={perPage}
        page={page}
        setPage={setPage}
      />
      <SortSelect
        label="Items per page"
        name="itemsPerPage"
        value={perPage}
        handleChange={changeItems}
        options={itemsPerPage}
      />
    </div>
  );
}
