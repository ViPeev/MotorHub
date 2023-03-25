import { CreateSelect, InputField, TextArea, ValidatedInput } from "./Inputs";

export default function CreateFormPartial({
  formData,
  data,
  handleChange,
  validator,
}) {
  return (
    <>
      <CreateSelect
        label="Make *"
        name="make"
        value={formData.make}
        handleChange={handleChange}
        options={data.makes}
        validator={validator.make}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Model *"
        name="model"
        value={formData.model}
        handleChange={handleChange}
        options={data.cars[formData.make]}
        validator={validator.model}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Condition *"
        name="condition"
        value={formData.condition}
        handleChange={handleChange}
        options={data.condition}
        validator={validator.condition}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Category *"
        name="category"
        value={formData.category}
        handleChange={handleChange}
        options={data.categories}
        validator={validator.category}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Fuel Type *"
        name="fuelType"
        value={formData.fuelType}
        handleChange={handleChange}
        options={data.fuel}
        validator={validator.fuelType}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Transmission *"
        name="transmission"
        value={formData.transmission}
        handleChange={handleChange}
        options={data.transmission}
        validator={validator.transmission}
        message={"Invalid value"}
      />
      <InputField
        label="Modification"
        name="modification"
        value={formData.modification}
        handleChange={handleChange}
        type="text"
        placeholder="Turbo, GTI, 16v..."
      />
      <ValidatedInput
        label="Power ( HP ) *"
        name="power"
        value={formData.power}
        handleChange={handleChange}
        type="number"
        placeholder="150..."
        validator={validator.power}
        message={"Power cannot be less than 10"}
      />
      <ValidatedInput
        label="Cubic Capacity ( cm ) *"
        name="cubicCapacity"
        value={formData.cubicCapacity}
        handleChange={handleChange}
        type="number"
        placeholder="2000..."
        validator={validator.cubicCapacity}
        message={"Cubic capacity be less than 250"}
      />
      <ValidatedInput
        label="Price ( &euro; ) *"
        name="price"
        value={formData.price}
        handleChange={handleChange}
        type="number"
        placeholder="6000..."
        validator={validator.price}
        message={"Price cannot be less than 1"}
      />
      <ValidatedInput
        label="Mileage ( km ) *"
        name="mileage"
        value={formData.mileage}
        handleChange={handleChange}
        type="number"
        placeholder="176500..."
        validator={validator.mileage}
        message={"Mileage cannot be less than 0"}
      />
      <CreateSelect
        label="Year of production *"
        name="year"
        value={formData.year}
        handleChange={handleChange}
        options={data.years}
        validator={validator.year}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Doors *"
        name="doors"
        value={formData.doors}
        handleChange={handleChange}
        options={data.doors}
        validator={validator.doors}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Seats *"
        name="seats"
        value={formData.seats}
        handleChange={handleChange}
        options={data.seats}
        validator={validator.seats}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Color *"
        name="color"
        value={formData.color}
        handleChange={handleChange}
        options={data.colors}
        validator={validator.color}
        message={"Invalid value"}
      />
      <CreateSelect
        label="Location *"
        name="location"
        value={formData.location}
        handleChange={handleChange}
        options={data.countries}
        validator={validator.location}
        message={"Invalid value"}
      />
      <ValidatedInput
        label="Phone number *"
        name="phone"
        value={formData.phone}
        handleChange={handleChange}
        type="text"
        placeholder="+359879..."
        validator={validator.phone}
        message={"Invalid format"}
      />
      <TextArea
        label="Description *"
        name="description"
        value={formData.description}
        handleChange={handleChange}
        placeholder="Enter..."
        validator={validator.description}
        message={"Description must be at least 5 characters long"}
      />
    </>
  );
}
