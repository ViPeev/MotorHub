import { useState } from "react";
import { InputField } from "./Inputs";
import eye from "../../assets/icons/eye-solid.svg";

export default function LoginForm({style}) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [viewPass, setViewPass] = useState(false);

  const passType = viewPass ? "text" : "password";

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleMouseDown = (e) => {
    setViewPass(true);
  };
  const handleMouseUp = (e) => {
    setViewPass(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        type={passType}
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
    </form>
  );
}
