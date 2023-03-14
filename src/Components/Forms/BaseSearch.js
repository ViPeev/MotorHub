import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "./Inputs";
import data from "../../staticData/formData";
import styles from "./BaseSearch.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function HomeSearch() {
  const [formData, setFormData] = useState(data.formData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cars", { state: { data: formData } });
  };

  return (
    <section>
      <div className={`${styles["form-wrapper"]} fade-in`}>
        <form onSubmit={handleSubmit}>
          <Select
            label="Make"
            name="make"
            value={formData.make}
            handleChange={handleChange}
            options={data.makes}
            firstOption="All"
          />
          <Select
            label="Model"
            name="model"
            value={formData.model}
            handleChange={handleChange}
            options={data.cars[formData.make]}
            firstOption="All"
          />
          <Select
            label="Fuel type"
            name="fuelType"
            value={formData.fuelType}
            handleChange={handleChange}
            options={data.fuel}
            firstOption="All"
          />
          <Select
            label="Condition"
            name="condition"
            value={formData.condition}
            handleChange={handleChange}
            options={data.condition}
            firstOption="Any"
          />
          <Select
            label="Power up to"
            name="maxPower"
            value={formData.maxPower}
            handleChange={handleChange}
            options={data.maxPower}
            firstOption="Any"
            symbol="HP"
          />
          <Select
            label="Price from"
            name="priceFrom"
            value={formData.priceFrom}
            handleChange={handleChange}
            options={data.priceFrom}
            firstOption="Any"
            symbol="&euro;"
          />
          <Select
            label="Price up to"
            name="priceUpTo"
            value={formData.priceUpTo}
            handleChange={handleChange}
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
