import { useState } from "react";
import { InputField } from "./Inputs";
import eye from "../../assets/icons/eye-solid.svg";

export default function RegisterForm({ style }) {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repass: "",
  });
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
        type={passType}
      />
      <InputField
        label="Repeat password *"
        name="repass"
        value={formData.repass}
        handleChange={handleChange}
        type={passType}
      />
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
