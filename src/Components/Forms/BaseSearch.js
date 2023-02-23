import { useState } from "react";
import { Select } from "./Inputs";
import data from "./formData";
import "./BaseSearch.scss";

const makes = Object.keys(data.cars);

export default function HomeSearch() {
  const [make, setMake] = useState("all");

  const makeChangeHandler = (e) => {
    setMake(e.target.value);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section>
      <div className="form-wrapper">
        <form>
          <Select
            label="Make"
            value="make"
            changeHandler={makeChangeHandler}
            options={makes}
            firstOption="All"
          />
          <Select
            label="Model"
            value="model"
            changeHandler={changeHandler}
            options={data.cars[make]}
            firstOption="All"
          />
          <Select
            label="Fuel type"
            value="fuelType"
            changeHandler={changeHandler}
            options={data.fuel}
            firstOption="All"
          />
          <Select
            label="Condition"
            value="condition"
            changeHandler={changeHandler}
            options={data.condition}
            firstOption="Any"
          />
          <Select
            label="Power"
            value="power"
            changeHandler={changeHandler}
            options={data.power}
            firstOption="Any"
            symbol="HP"
          />
          <Select
            label="Price from"
            value="pricefrom"
            changeHandler={changeHandler}
            options={data.priceFrom}
            firstOption="Any"
            symbol="&euro;"
          />
          <Select
            label="Price up to"
            value="priceUpTo"
            changeHandler={changeHandler}
            options={data.priceUp}
            firstOption="Any"
            symbol="&euro;"
          />
          <div className="input-group">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}
