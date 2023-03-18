import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchFormPartial } from "../Forms/SearchFormPartial";

import data from "../../staticData/formData";
import styles from "./Search.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";
import { SearchContext } from "../../contexts/SearchContext";

export function HomeSearch() {
  const [formData, setFormData] = useState(data.formData);
  const { setSearchData } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((data) => {
      if (e.target.name === "make") {
        return { ...data, make: e.target.value, model: "" };
      }
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchData((prev) => {
      return { ...prev, ...formData };
    });
    navigate("/cars", { state: { data: formData } });
  };

  return (
    <section>
      <div className={`${styles["form-wrapper"]} fade-in`}>
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
      </div>
    </section>
  );
}
