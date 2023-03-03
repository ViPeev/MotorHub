import { useState } from "react";
import { InputField } from "./Inputs";
import eye from "../../assets/icons/eye-solid.svg";
import { Link } from "react-router-dom";

export default function RegisterForm({ style }) {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repass: "",
  });

  const [viewPass, setViewPass] = useState("password");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.register}>
      <InputField
        label="First Name *"
        name="firstName"
        value={formData.firstName}
        handleChange={handleChange}
        type="text"
      />
      <InputField
        label="Last Name *"
        name="lastName"
        value={formData.lastName}
        handleChange={handleChange}
        type="text"
      />
      <InputField
        label="Username *"
        name="userName"
        value={formData.userName}
        handleChange={handleChange}
        type="text"
      />
      <InputField
        label="E-mail *"
        name="email"
        value={formData.email}
        handleChange={handleChange}
        type="text"
      />
      <InputField
        label="Password *"
        name="password"
        value={formData.password}
        handleChange={handleChange}
        type={viewPass}
      />
      <InputField
        label="Repeat password *"
        name="repass"
        value={formData.repass}
        handleChange={handleChange}
        type={viewPass}
      />
      <div>
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">
          Agree to the <Link to="/tos">terms and conditions</Link>
        </label>
      </div>
      <div>
        <button>Register</button>
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
