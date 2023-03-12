import { getUserData } from "./localStorage";

export const isOwner = (ownerId) => {
  const {
    userData: { _id },
  } = getUserData();

  return _id === ownerId;
};
