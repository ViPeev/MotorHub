import { getCredentials } from "./localStorage";

export const getLoginState = () => {
  const credentials = getCredentials();

  if (credentials) {
    return {
      username: credentials.username,
      password: credentials.password,
      remember: true,
    };
  } else {
    return {
      username: "",
      password: "",
      remember: false,
    };
  }
};

export const scrollSettings = {
  top: 0,
  left: 0,
  behavior: "smooth",
};

export const registerForm = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repass: "",
  agree: false,
}
