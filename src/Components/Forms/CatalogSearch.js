import { useState, useContext } from "react";
import { Select } from "./Inputs";
import data from "./formData";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";
import { useLocation } from "react-router-dom";

export default function AdvancedSearch({}) {
  const location = useLocation();

  const [formData, setFormData] = useState(() => {
    const incomingData = location.state?.data;
    return incomingData
      ? { ...data.extendedFormData, ...incomingData }
      : data.extendedFormData;
  });

  const changeHandler = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="form-wrapper">
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
            options={data.power}
            firstOption="Any"
            symbol="HP"
          />
          <Select
            label="Price from"
            name="pricefrom"
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
            options={data.priceUp}
            firstOption="Any"
            symbol="&euro;"
          />
          <div className="input-group">
            <button type="submit">
              <img src={searchIcon} alt="Search"></img>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
