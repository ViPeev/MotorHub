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

