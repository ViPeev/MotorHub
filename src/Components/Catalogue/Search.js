import { useCallback, useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import AdvancedSearch from "../Forms/AdvancedSearch";
import { SearchFormPartial } from "../Forms/SearchFormPartial";
import data from "../../staticData/formData";
import styles from "./Catalogue.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function CatalogSearch() {
  const { searchData, setSearchData, dispatch } = useContext(SearchContext);
  const [formData, setFormData] = useState({ ...searchData });
  const [display, setDisplay] = useState(false);

  const handleChange = useCallback(
    (e) => {
      setFormData((data) => {
        if (e.target.name === "make") {
          return { ...data, make: e.target.value, model: "" };
        }
        return { ...data, [e.target.name]: e.target.value };
      });
    },
    [setFormData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplay(false);
    setSearchData({ ...formData });
    dispatch({ type: "SET_PAGE", payload: 1 });
  };

  const handleDisplay = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return;

      setDisplay((prev) => !prev);
    },
    [setDisplay]
  );

  const handleReset = useCallback(() => {
    setFormData(data.extendedFormData);
  }, [setSearchData]);

  const overflow = display ? "hidden" : "auto";
  document.body.style.overflow = overflow;

  return (
    <>
      <section>
        <div className={styles["form-wrapper"]}>
          <form onSubmit={handleSubmit}>
            <SearchFormPartial
              handleChange={handleChange}
              formData={formData}
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
          formData={formData}
          data={data}
        />
      )}
    </>
  );
}
