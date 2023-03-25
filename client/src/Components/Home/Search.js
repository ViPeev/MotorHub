import { memo, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { SearchFormPartial } from "../Forms/SearchFormPartial";
import data from "../../staticData/formData";
import styles from "./Search.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function HomeSearch() {
  const { setSearchData, dispatch } = useContext(SearchContext);
  const [formData, setFormData] = useState(data.formData);
  const navigate = useNavigate();

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

    dispatch({ type: "SET_PAGE", payload: 1 });
    setSearchData((prev) => {
      return { ...prev, ...formData };
    });

    navigate("/cars");
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
              <img src={searchIcon} title="Search" alt="Search" className="invert-full" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};


