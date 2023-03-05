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
  { name: "10", value: "10" },
  { name: "20", value: "20" },
  { name: "30", value: "30" },
  { name: "40", value: "40" },
];

export default function Controls() {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <div className={styles.controls}>
      <SortSelect
        label="Sort by"
        name="sortBy"
        value="latest"
        changeHandler={changeHandler}
        options={sortOptions}
      />
      <Pagination />
      <SortSelect
        label="Items per page"
        name="itemsPerPage"
        value="20"
        changeHandler={changeHandler}
        options={itemsPerPage}
      />
    </div>
  );
}
