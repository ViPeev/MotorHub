import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../LoginForm";

const WrappedForm = () => {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
};

describe("Testing LoginForm component", () => {

  it("should have username content on user input", () => {
    render(<WrappedForm />);
    const userNameField = screen.getByLabelText("Username");
    fireEvent.change(userNameField, { target: { value: "vladislav" } });
    expect(userNameField.value).toEqual("vladislav");
  });

  it("should have password content on user input", () => {
    render(<WrappedForm />);
    const passwordField = screen.getByLabelText("Password");
    fireEvent.change(passwordField, { target: { value: "tralala123" } });
    expect(passwordField.value).toEqual("tralala123");
  });

  it("Remember me should be checked on user click", () => {
    render(<WrappedForm />);
    const checkbox = screen.getByLabelText("Remember me");
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
    const userNameField = screen.getByLabelText("Username");
    fireEvent.change(userNameField, { target: { value: "vladislav" } });
    const passwordField = screen.getByLabelText("Password");
    fireEvent.change(passwordField, { target: { value: "tralala123" } });
    const submitButton = screen.getByTestId("submit");
    expect(submitButton.disabled).toEqual(false);
  });
});
