import { Select, InputField } from "./Inputs";

export function SearchFormPartial({ handleChange, formData, data }) {
  return (
    <>
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
    </>
  );
}

export function AdvancedSearchPartial({ formData, handleChange, data }) {
  return (
    <>
      <Select
        label="Transmission"
        name="transmission"
        value={formData.transmission}
        handleChange={handleChange}
        options={data.transmission}
        firstOption="Any"
      />
      <InputField
        label="Cubic Capacity"
        name="cubicCapacity"
        value={formData.cubicCapacity}
        handleChange={handleChange}
        type="number"
        placeholder={"Enter value"}
      />
      <InputField
        label="Modification"
        name="modification"
        value={formData.modification}
        handleChange={handleChange}
        type="text"
        placeholder={"Enter value"}
      />
      <Select
        label="Year from"
        name="yearFrom"
        value={formData.yearFrom}
        handleChange={handleChange}
        options={data.years}
        firstOption="Any"
      />
      <Select
        label="Year up to"
        name="yearUpTo"
        value={formData.yearUpTo}
        handleChange={handleChange}
        options={data.years}
        firstOption="Any"
      />
      <Select
        label="Mileage Up to"
        name="maxMileage"
        value={formData.maxMileage}
        handleChange={handleChange}
        options={data.mileage}
        firstOption="Any"
        symbol="km"
      />
      <Select
        label="Location"
        name="location"
        value={formData.location}
        handleChange={handleChange}
        options={data.countries}
        firstOption="Any"
      />
      <Select
        label="Color"
        name="color"
        value={formData.color}
        handleChange={handleChange}
        options={data.colors}
        firstOption="Any"
      />
    </>
  );
}