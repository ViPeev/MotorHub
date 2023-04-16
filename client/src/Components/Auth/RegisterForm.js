import { useCallback, useMemo, useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ValidatedInput } from "../Forms/Inputs";
import { Backdrop } from "../Misc/Loaders/Loaders";
import ErrorBox from "../Misc/Error/ErrorBox";
import { register } from "../../api/data";
import { validateRegister } from "../../utils/validators";
import { registerForm } from "../../utils/initializers";
import styles from "./Auth.module.scss";
import eye from "../../assets/icons/eye-solid.svg";

const MemoLabel = memo(function Label() {
  return (
    <label htmlFor="agree">
      Agree to the <Link to="/tos">terms and conditions</Link>
    </label>
  );
});

export default function RegisterForm() {
  const [formData, setFormData] = useState(registerForm);
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState("password");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { validator, canSubmit } = useMemo(
    () => validateRegister(formData),
    [formData]
  );

  const handleChange = useCallback(
    (e) => {
      setFormData((prev) => {
        if (e.target.type === "checkbox") {
          return { ...prev, agree: e.target.checked };
        } else {
          return { ...prev, [e.target.name]: e.target.value };
        }
      });
    },
    [setFormData]
  );

  const handleMouseDown = useCallback(() => {
    setViewPass("text");
  }, [setViewPass]);

  const handleMouseUp = useCallback(() => {
    setViewPass("password");
  }, [setViewPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    setLoading(true);

    try {
      await register(
        formData.userName,
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      );
      setTimeout(() => navigate("/", { replace: true }), 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTimeout(() => setError(null), 1800);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.register}>
        <ValidatedInput
          label="First Name *"
          name="firstName"
          value={formData.firstName}
          handleChange={handleChange}
          type="text"
          validator={validator.firstName}
          message={"First name is required"}
        />
        <ValidatedInput
          label="Last Name *"
          name="lastName"
          value={formData.lastName}
          handleChange={handleChange}
          type="text"
          validator={validator.lastName}
          message={"Last name is required"}
        />
        <ValidatedInput
          label="Username *"
          name="userName"
          value={formData.userName}
          handleChange={handleChange}
          type="text"
          validator={validator.userName}
          message={"Username is too short"}
        />
        <ValidatedInput
          label="E-mail *"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          type="text"
          validator={validator.email}
          message={"Invalid E-mail"}
        />
        <ValidatedInput
          label="Password *"
          name="password"
          value={formData.password}
          handleChange={handleChange}
          type={viewPass}
          validator={validator.password}
          message={"Password is too short"}
        />
        <ValidatedInput
          label="Repeat password *"
          name="repass"
          value={formData.repass}
          handleChange={handleChange}
          type={viewPass}
          validator={validator.repass}
          message={"Passwords do not match"}
        />
        <div>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            value={formData.agree}
            onChange={handleChange}
            data-testid="agree"
          />
          <MemoLabel />
        </div>
        <div>
          <button data-testid="submit" disabled={!canSubmit || error}>Register</button>
          <button
            type="button"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onTouchStart={handleMouseDown}
          >
            <img
              src={eye}
              alt="View Password"
              title="View Password"
              className="invert-full"
            />
          </button>
        </div>
      </form>
      {error && <ErrorBox text={error} />}
      {loading && <Backdrop />}
    </>
  );
}
