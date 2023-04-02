import { render, fireEvent, screen } from "@testing-library/react";
import { CreateProvider } from "../../../contexts/CreateContext";
import CreateFormWrapper from "../CreateFormWrapper";

const WrappedForm = () => {
  return (
    <CreateProvider>
      <CreateFormWrapper />
    </CreateProvider>
  );
};

describe("Testing Create Form", () => {
  it("Continue button should be disabled initially", () => {
    render(<WrappedForm />);
    const submitButton = screen.getByTestId("continue");
    expect(submitButton).toBeDisabled();
  });

  it("Continue button should not be disabled if all inputs are valid", () => {
    render(<WrappedForm />);

    const makeField = screen.getByTestId("make");
    fireEvent.change(makeField, { target: { value: "Citroen" } });

    const modelField = screen.getByTestId("model");
    fireEvent.change(modelField, { target: { value: "C4" } });

    const conditionField = screen.getByTestId("condition");
    fireEvent.change(conditionField, { target: { value: "New" } });

    const categoryField = screen.getByTestId("category");
    fireEvent.change(categoryField, {
      target: { value: "Hatchback / Crossover" },
    });

    const fuelField = screen.getByTestId("fuelType");
    fireEvent.change(fuelField, { target: { value: "Petrol" } });

    const TransmissionField = screen.getByTestId("transmission");
    fireEvent.change(TransmissionField, { target: { value: "Manual" } });

    const PowerField = screen.getByTestId("power");
    fireEvent.change(PowerField, { target: { value: "100" } });

    const cCField = screen.getByTestId("cubicCapacity");
    fireEvent.change(cCField, { target: { value: "1600" } });

    const priceField = screen.getByTestId("price");
    fireEvent.change(priceField, { target: { value: "4600" } });

    const mileageField = screen.getByTestId("mileage");
    fireEvent.change(mileageField, { target: { value: "3600" } });

    const yearField = screen.getByTestId("year");
    fireEvent.change(yearField, { target: { value: "2023" } });

    const doorField = screen.getByTestId("doors");
    fireEvent.change(doorField, { target: { value: "2/3" } });

    const seatField = screen.getByTestId("seats");
    fireEvent.change(seatField, { target: { value: "4" } });

    const colorField = screen.getByTestId("color");
    fireEvent.change(colorField, { target: { value: "Orange" } });

    const locationField = screen.getByTestId("location");
    fireEvent.change(locationField, { target: { value: "Germany" } });

    const phoneField = screen.getByTestId("phone");
    fireEvent.change(phoneField, { target: { value: "+359876123456" } });

    const description = screen.getByTestId("description");
    fireEvent.change(description, { target: { value: "pristine condition" } });

    const submitButon = screen.getByTestId("continue");
    expect(submitButon).not.toBeDisabled();
  });

  it("Continue button should be disabled if at least one input is not valid", () => {
    render(<WrappedForm />);

    const makeField = screen.getByTestId("make");
    fireEvent.change(makeField, { target: { value: "" } });

    const modelField = screen.getByTestId("model");
    fireEvent.change(modelField, { target: { value: "C4" } });

    const conditionField = screen.getByTestId("condition");
    fireEvent.change(conditionField, { target: { value: "New" } });

    const categoryField = screen.getByTestId("category");
    fireEvent.change(categoryField, {
      target: { value: "Hatchback / Crossover" },
    });

    const fuelField = screen.getByTestId("fuelType");
    fireEvent.change(fuelField, { target: { value: "Petrol" } });

    const TransmissionField = screen.getByTestId("transmission");
    fireEvent.change(TransmissionField, { target: { value: "Manual" } });

    const PowerField = screen.getByTestId("power");
    fireEvent.change(PowerField, { target: { value: "100" } });

    const cCField = screen.getByTestId("cubicCapacity");
    fireEvent.change(cCField, { target: { value: "10" } });

    const priceField = screen.getByTestId("price");
    fireEvent.change(priceField, { target: { value: "4600" } });

    const mileageField = screen.getByTestId("mileage");
    fireEvent.change(mileageField, { target: { value: "3600" } });

    const yearField = screen.getByTestId("year");
    fireEvent.change(yearField, { target: { value: "2023" } });

    const doorField = screen.getByTestId("doors");
    fireEvent.change(doorField, { target: { value: "2/3" } });

    const seatField = screen.getByTestId("seats");
    fireEvent.change(seatField, { target: { value: "4" } });

    const colorField = screen.getByTestId("color");
    fireEvent.change(colorField, { target: { value: "Orange" } });

    const locationField = screen.getByTestId("location");
    fireEvent.change(locationField, { target: { value: "Germany" } });

    const phoneField = screen.getByTestId("phone");
    fireEvent.change(phoneField, { target: { value: "+359876123456" } });

    const description = screen.getByTestId("description");
    fireEvent.change(description, { target: { value: "pristine condition" } });

    const submitButton = screen.getByTestId("continue");
    expect(submitButton).toBeDisabled();
  });
});
