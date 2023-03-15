import { queryBuilder } from "./dataFormatters";
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

export const getFormState = (state, data) => {
  const incomingData = state?.data;
  return incomingData
    ? { ...data.extendedFormData, ...incomingData }
    : data.extendedFormData;
};

export const getSearchState = (state) => {
  const incomingData = state?.data;
  return incomingData
    ? queryBuilder(incomingData)
    : "";
};
