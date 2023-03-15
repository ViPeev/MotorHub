import { useState } from "react";
import { SearchFormPartial, AdvancedSearchPartial } from "./SearchFormPartial";
import { createPortal } from "react-dom";
import styles from "./AdvancedSearch.module.scss";
import backdrop from "../Menu/Menu.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";
import xmark from "../../assets/icons/xmark-solid.svg";


const body = document.querySelector("body");

export default function AdvancedSearch({
  handleSubmit,
  handleChange,
  handleDisplay,
  handleReset,
  formData,
  data,
}) {

  return createPortal(
    <div className={backdrop.backdrop} onClick={handleDisplay}>
      <div className={`${styles["form-wrapper"]} fade-in`}>
        <h3>Search Filters</h3>
        <form onSubmit={handleSubmit}>
          <SearchFormPartial
            handleChange={handleChange}
            formData={formData}
            data={data}
          />
          <AdvancedSearchPartial
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
        <button onClick={handleDisplay}><img src={xmark} alt="Close" title="Close" /></button>
        <button onClick={handleReset}>Clear Filters</button>
      </div>
    </div>,
    body
  );
}
