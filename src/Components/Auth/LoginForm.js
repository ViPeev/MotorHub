import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../Forms/Inputs";
import { getLoginState } from "../../utils/initializers";
import { login } from "../../api/data";
import eye from "../../assets/icons/eye-solid.svg";
import { Backdrop } from "../Misc/Loaders/Loaders";

export default function LoginForm({ style }) {
  const [formData, setFormData] = useState(getLoginState());
  const [viewPass, setViewPass] = useState("password");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => {
      if (e.target.type === "checkbox") {
        return { ...prev, [e.target.name]: e.target.checked };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleMouseDown = (e) => {
    setViewPass("text");
  };
  const handleMouseUp = (e) => {
    setViewPass("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(formData.username, formData.password, formData.remember);
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.login}>
        <InputField
          label="Username"
          name="username"
          value={formData.username}
          handleChange={handleChange}
          type="text"
        />
        <InputField
          label="Password"
          name="password"
          value={formData.password}
          handleChange={handleChange}
          type={viewPass}
        />
        <div>
          <button>Login</button>
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
      {loading && <Backdrop />}
    </>
  );
}
