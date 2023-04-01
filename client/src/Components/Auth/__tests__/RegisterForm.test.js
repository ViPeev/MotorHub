import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "../RegisterForm";

const WrappedForm = () => {
  return (
    <BrowserRouter>
      <RegisterForm />
    </BrowserRouter>
  );
};

describe("Testing RegisterForm component", () => {
  it("should have First name content on user input", () => {
    render(<WrappedForm />);
    const firstNameField = screen.getByLabelText("First Name *");
    fireEvent.change(firstNameField, { target: { value: "Vladislav" } });
    expect(firstNameField.value).toEqual("Vladislav");
  });

  it("should display error if blurred input's value is not valid", () => {
    render(<WrappedForm />);
    const passwordField = screen.getByLabelText("Password *");
    fireEvent.change(passwordField, { target: { value: "" } });
    fireEvent.blur(passwordField);
    const errorMessage = screen.getByText("Password is too short");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Agree should be checked on user click", () => {
    render(<WrappedForm />);
    const checkbox = screen.getByTestId("agree");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  it("Submit button should be disabled when inputs are empty", () => {
    render(<WrappedForm />);
    const submitButton = screen.getByTestId("submit");
    expect(submitButton.disabled).toEqual(true);
  });

  it("Submit button should not be disabled when inputs are valid", () => {
    render(<WrappedForm />);

    const userNameField = screen.getByLabelText("Username *");
    fireEvent.change(userNameField, { target: { value: "vladislav94" } });

    const passwordField = screen.getByLabelText("Password *");
    fireEvent.change(passwordField, { target: { value: "tralala123" } });

    const repeatField = screen.getByLabelText("Repeat password *");
    fireEvent.change(repeatField, { target: { value: "tralala123" } });

    const emailField = screen.getByLabelText("E-mail *");
    fireEvent.change(emailField, {
      target: { value: "vladislavpeev9412@gmail.com" },
    });

    const firstNameField = screen.getByLabelText("First Name *");
    fireEvent.change(firstNameField, { target: { value: "Vladislav" } });

    const lastNameField = screen.getByLabelText("Last Name *");
    fireEvent.change(lastNameField, { target: { value: "Peev" } });

    const checkbox = screen.getByTestId("agree");
    fireEvent.click(checkbox);

    const submitButton = screen.getByTestId("submit");
    expect(submitButton.disabled).toEqual(false);
  });

  it("Submit button should be disabled if one input is not valid", () => {
    render(<WrappedForm />);

    const userNameField = screen.getByLabelText("Username *");
    fireEvent.change(userNameField, { target: { value: "v" } });

    const passwordField = screen.getByLabelText("Password *");
    fireEvent.change(passwordField, { target: { value: "tralala123" } });

    const repeatField = screen.getByLabelText("Repeat password *");
    fireEvent.change(repeatField, { target: { value: "tralala123" } });

    const emailField = screen.getByLabelText("E-mail *");
    fireEvent.change(emailField, {
      target: { value: "vladislavpeev9412@gmail.com" },
    });

    const firstNameField = screen.getByLabelText("First Name *");
    fireEvent.change(firstNameField, { target: { value: "Vladislav" } });

    const lastNameField = screen.getByLabelText("Last Name *");
    fireEvent.change(lastNameField, { target: { value: "Peev" } });

    const checkbox = screen.getByTestId("agree");
    fireEvent.click(checkbox);

    const submitButton = screen.getByTestId("submit");
    expect(submitButton.disabled).toEqual(true);
  });
});
