import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "./Inputs";
import data from "./formData";
import "./BaseSearch.scss";

const makes = Object.keys(data.cars);

export default function HomeSearch() {
  const [formData, setFormData] = useState({
    make: "all",
    model: "all",
    fuelType: "all",
    condition: "all",
    maxPower: "all",
    priceFrom: "all",
    priceUpTo: "all",
  });

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
      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          <Select
            label="Make"
            value="make"
            changeHandler={changeHandler}
            options={makes}
            firstOption="All"
          />
          <Select
            label="Model"
            value="model"
            changeHandler={changeHandler}
            options={data.cars[formData.make]}
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
            value="maxPower"
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
