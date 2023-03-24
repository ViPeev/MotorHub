import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ValidatedInput } from "../Forms/Inputs";
import { Backdrop } from "../Misc/Loaders/Loaders";
import ErrorBox from "../Misc/Error/ErrorBox";
import { login } from "../../api/data";
import { getLoginState } from "../../utils/initializers";
import { validateLogin } from "../../utils/validators";
import styles from "./Auth.module.scss";
import eye from "../../assets/icons/eye-solid.svg";

export default function LoginForm() {
  const [formData, setFormData] = useState(getLoginState());
  const [viewPass, setViewPass] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  const { validator, canSubmit } = useMemo(
    () => validateLogin(formData),
    [formData]
  );
  const redirect = state && state !== "/logout" ? state : "/";

  const handleChange = useCallback((e) => {
    setFormData((prev) => {
      if (e.target.type === "checkbox") {
        return { ...prev, [e.target.name]: e.target.checked };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  }, [setFormData]);

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
      await login(formData.username, formData.password, formData.remember);
      setTimeout(() => navigate(redirect, { replace: true }), 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTimeout(() => setError(null), 1800);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.login}>
        <ValidatedInput
          label="Username"
          name="username"
          value={formData.username}
          handleChange={handleChange}
          type="text"
          validator={validator.username}
          message={"Username is required"}
        />
        <ValidatedInput
          label="Password"
          name="password"
          value={formData.password}
          handleChange={handleChange}
          type={viewPass}
          validator={validator.password}
          message={"Password is required"}
        />
        <div>
          <button disabled={!canSubmit || error}>Login</button>
          <button
            type="button"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
          >
            <img src={eye} alt="View Password" title="View Password" />
          </button>
        </div>
        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
      </form>
      {error && <ErrorBox text={error} />}
      {loading && <Backdrop />}
    </>
  );
}
