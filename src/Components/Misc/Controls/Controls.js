import Pagination from "./Pagination";
import styles from "./Controls.module.scss";
import { SortSelect } from "../../Forms/Inputs";

const sortOptions = [
  { name: "Latest", value: "latest" },
  { name: "Oldest", value: "oldest" },
  { name: "Ascending - Price", value: "priceAsc" },
  { name: "Descending - Price", value: "priceDes" },
  { name: "Descending - Year", value: "yearDes" },
  { name: "Ascending - Year", value: "yearAsc" },
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
    setPerPage(e.target.value);
  };

  const changeSort = (e) => {
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
