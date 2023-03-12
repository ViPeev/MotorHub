import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../Forms/Inputs";
import { register } from "../../api/data";
import { Backdrop } from "../Misc/Loaders/Loaders";
import eye from "../../assets/icons/eye-solid.svg";

export default function RegisterForm({ style }) {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repass: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState("password");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => {
      if (e.target.type === "checkbox") {
        return { ...prev, agree: e.target.checked };
      } else {
        return { ...prev, [e.target.name]: e.target.value };
      }
    });
  };

  const handleMouseDown = () => {
    setViewPass("text");
  };
  const handleMouseUp = () => {
    setViewPass("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await register(
      formData.userName,
      formData.email,
      formData.password,
      formData.firstName,
      formData.lastName
    );
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <>
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
          <input
            type="checkbox"
            name="remember"
            id="remember"
            value={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="remember">
            Agree to the <Link to="/tos">terms and conditions</Link>
          </label>
        </div>
        <div>
          <button>Register</button>
          <button
            type="button"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
          >
            <img src={eye} alt="View Password" title="View Password" />
          </button>
        </div>
      </form>
      {loading && <Backdrop />}
    </>
  );
}
