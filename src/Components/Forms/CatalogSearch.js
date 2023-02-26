import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Select, InputField } from "./Inputs";
import data from "./formData";
import styles from "./CatalogSearch.module.scss";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

export default function AdvancedSearch({}) {
  const location = useLocation();
  const [formData, setFormData] = useState(() => {
    const incomingData = location.state?.data;
    return incomingData
      ? { ...data.extendedFormData, ...incomingData }
      : data.extendedFormData;
  });
  const [display, setDisplay] = useState(false);

  const changeHandler = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const handleReset = () => {
    setFormData(data.extendedFormData);
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
          {display ? (
            <>
              <Select
                label="Transmission"
                name="transmission"
                value={formData.transmission}
                changeHandler={changeHandler}
                options={data.transmission}
                firstOption="Any"
              />
              <InputField
                label="Cubic Capacity"
                name="cubicCapacity"
                value={formData.cubicCapacity}
                changeHandler={changeHandler}
                type="number"
              />
              <InputField
                label="Modification"
                name="modification"
                value={formData.modification}
                changeHandler={changeHandler}
                type="text"
              />
              <Select
                label="Year from"
                name="yearFrom"
                value={formData.yearFrom}
                changeHandler={changeHandler}
                options={data.years}
                firstOption="Any"
              />
              <Select
                label="Year up to"
                name="yearUpTo"
                value={formData.yearUpTo}
                changeHandler={changeHandler}
                options={data.years}
                firstOption="Any"
              />
              <Select
                label="Mileage Up to"
                name="maxMileage"
                value={formData.maxMileage}
                changeHandler={changeHandler}
                options={data.mileage}
                firstOption="Any"
                symbol="km"
              />
              <Select
                label="Location"
                name="location"
                value={formData.location}
                changeHandler={changeHandler}
                options={data.countries}
                firstOption="Any"
              />
              <Select
                label="Color"
                name="color"
                value={formData.color}
                changeHandler={changeHandler}
                options={data.colors}
                firstOption="Any"
              />
            </>
          ) : null}
          <div className="input-group">
            <button type="submit">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </form>
        <button onClick={handleDisplay}>
          {display ? "Hide" : "Show"} additional filters
        </button>
        <button onClick={handleReset}>Clear Filters</button>
      </div>
    </section>
  );
}
