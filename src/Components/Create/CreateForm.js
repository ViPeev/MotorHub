import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import { CreateSelect, InputField, TextArea } from "../Forms/Inputs";
import styles from "./Create.module.scss";
import data from "../../staticData/formData";

export default function CreateForm() {
  const { formData, setFormData, setStep } = useContext(CreateContext);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <form className={styles["data-form"]} onSubmit={handleFormSubmit}>
      <CreateSelect
        label="Make *"
        name="make"
        value={formData.make}
        handleChange={handleChange}
        options={data.makes}
      />
      <CreateSelect
        label="Model *"
        name="model"
        value={formData.model}
        handleChange={handleChange}
        options={data.cars[formData.make]}
      />
      <CreateSelect
        label="Condition *"
        name="condition"
        value={formData.condition}
        handleChange={handleChange}
        options={data.condition}
      />
      <CreateSelect
        label="Category *"
        name="category"
        value={formData.category}
        handleChange={handleChange}
        options={data.categories}
      />
      <CreateSelect
        label="Fuel Type *"
        name="fuelType"
        value={formData.fuelType}
        handleChange={handleChange}
        options={data.fuel}
      />
      <CreateSelect
        label="Transmission *"
        name="transmission"
        value={formData.transmission}
        handleChange={handleChange}
        options={data.transmission}
      />
      <InputField
        label="Modification"
        name="modification"
        value={formData.modification}
        handleChange={handleChange}
        type="text"
        placeholder = "GTI..."
      />
      <InputField
        label="Power ( HP ) *"
        name="power"
        value={formData.power}
        handleChange={handleChange}
        type="number"
        placeholder = "150..."
      />
      <InputField
        label="Cubic Capacity ( cm ) *"
        name="cubicCapacity"
        value={formData.cubicCapacity}
        handleChange={handleChange}
        type="number"
        placeholder = "2000..."
      />
      <InputField
        label="Price ( &euro; ) *"
        name="price"
        value={formData.price}
        handleChange={handleChange}
        type="number"
        placeholder = "6000..."
      />
      <InputField
        label="Mileage ( km ) *"
        name="mileage"
        value={formData.mileage}
        handleChange={handleChange}
        type="number"
        placeholder = "176500..."
      />
      <CreateSelect
        label="Year of production *"
        name="year"
        value={formData.year}
        handleChange={handleChange}
        options={data.years}
      />
      <CreateSelect
        label="Doors *"
        name="doors"
        value={formData.doors}
        handleChange={handleChange}
        options={data.doors}
      />
      <CreateSelect
        label="Seats *"
        name="seats"
        value={formData.seats}
        handleChange={handleChange}
        options={data.seats}
      />
      <CreateSelect
        label="Color *"
        name="color"
        value={formData.color}
        handleChange={handleChange}
        options={data.colors}
      />
      <CreateSelect
        label="Location *"
        name="location"
        value={formData.location}
        handleChange={handleChange}
        options={data.countries}
      />
      <InputField
        label="Phone number *"
        name="phone"
        value={formData.phone}
        handleChange={handleChange}
        type="text"
        placeholder = "+359876811234..."
      />
      <TextArea
        label="Description *"
        name="description"
        value={formData.description}
        handleChange={handleChange}
        placeholder = "Enter..."
      />
      <button>Continue</button>
    </form>
  );
}
