import { useContext, useState } from "react";
import { SearchFormPartial } from "../Forms/SearchFormPartial";
import AdvancedSearch from "../Forms/AdvancedSearch";
import { SearchContext } from "../../contexts/SearchContext";
import data from "../../staticData/formData";
import styles from "./Catalogue.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function CatalogSearch() {
  const { searchData, setSearchData, dispatch } = useContext(SearchContext);
  const [display, setDisplay] = useState(false);

  const overflow = display ? "hidden" : "auto";
  document.body.style.overflow = overflow;

  const handleChange = (e) => {
    setSearchData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(false);
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

  const handleDisplay = (e) => {
    if (e.target !== e.currentTarget) return;
    setDisplay((prev) => !prev);
  };

  const handleReset = () => {
    setSearchData(data.extendedFormData);
  };

  return (
    <>
      <section>
        <div className={styles["form-wrapper"]}>
          <form onSubmit={handleSubmit}>
            <SearchFormPartial
              handleChange={handleChange}
              formData={searchData}
              data={data}
            />
            <div className="input-group">
              <button type="submit">
                <img src={searchIcon} title="Search" alt="Search" />
              </button>
            </div>
          </form>
          <button onClick={handleDisplay}>
            {display ? "Hide" : "Show"} all filters
          </button>
          <button onClick={handleReset}>Clear Filters</button>
        </div>
      </section>
      {display && (
        <AdvancedSearch
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDisplay={handleDisplay}
          handleReset={handleReset}
          formData={searchData}
          data={data}
        />
      )}
    </>
  );
}
