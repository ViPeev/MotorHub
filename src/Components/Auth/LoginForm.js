import { useState } from "react";
import { InputField } from "../Forms/Inputs";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/data";
import eye from "../../assets/icons/eye-solid.svg";

export default function LoginForm({ style }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [viewPass, setViewPass] = useState("password");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleMouseDown = (e) => {
    setViewPass("text");
  };
  const handleMouseUp = (e) => {
    setViewPass("password");
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.username, formData.password);
    navigate("/");
  };

  return (
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
          onMouseDown={handleMouseDown}
          onClick={handleClick}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          <img src={eye} alt="View Password" title="View Password" />
        </button>
      </div>
      <div>
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
    </form>
  );
}
