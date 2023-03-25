export const controlReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_PER_PAGE":
      return { ...state, perPage: action.payload, page: 1 };
    case "SET_SORT":
      return { ...state, sort: action.payload, page: 1 };
    default:
      return defaultSettings;
  }
};

export const defaultSettings = {
  perPage: 20,
  sort: "latest",
  page: 1,
};
