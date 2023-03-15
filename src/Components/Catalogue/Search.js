import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchFormPartial } from "../Forms/SearchFormPartial";
import data from "../../staticData/formData";
import styles from "./Catalogue.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";
import AdvancedSearch from "../Forms/AdvancedSearch";

export default function CatalogSearch() {
  const { state } = useLocation();
  const [formData, setFormData] = useState(() => {
    const incomingData = state?.data;
    return incomingData
      ? { ...data.extendedFormData, ...incomingData }
      : data.extendedFormData;
  });
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDisplay = (e) => {
    if(e.target !== e.currentTarget) return;

    setDisplay((prev) => !prev);
  };

  const handleReset = () => {
    setFormData(data.extendedFormData);
  };
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
