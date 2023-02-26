import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "./Inputs";
import data from "./formData";
import styles from "./BaseSearch.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function HomeSearch() {
  const [formData, setFormData] = useState(data.formData);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/cars", { state: { data: formData } });
  };

  return (
    <section>
      <div className={styles["form-wrapper"]}>
        <form onSubmit={submitHandler}>
          <Select
            label="Make"
            name="make"
            value={formData.make}
            changeHandler={changeHandler}
            options={data.makes}
            firstOption="All"
          />
          <Select
            label="Model"
            name="model"
            value={formData.model}
            changeHandler={changeHandler}
            options={data.cars[formData.make]}
            firstOption="All"
          />
          <Select
            label="Fuel type"
            name="fuelType"
            value={formData.fuelType}
            changeHandler={changeHandler}
            options={data.fuel}
            firstOption="All"
          />
          <Select
            label="Condition"
            name="condition"
            value={formData.condition}
            changeHandler={changeHandler}
            options={data.condition}
            firstOption="Any"
          />
          <Select
            label="Power up to"
            name="maxPower"
            value={formData.maxPower}
            changeHandler={changeHandler}
            options={data.maxPower}
            firstOption="Any"
            symbol="HP"
          />
          <Select
            label="Price from"
            name="priceFrom"
            value={formData.priceFrom}
            changeHandler={changeHandler}
            options={data.priceFrom}
            firstOption="Any"
            symbol="&euro;"
          />
          <Select
            label="Price up to"
            name="priceUpTo"
            value={formData.priceUpTo}
            changeHandler={changeHandler}
            options={data.priceUpTo}
            firstOption="Any"
            symbol="&euro;"
          />
          <div className="input-group">
            <button type="submit">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
