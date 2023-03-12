import { getUserData } from "./localStorage";

export const isOwner = (ownerId) => {
  const user = getUserData();
  let id = undefined;
  if(user){
    id = user.userData._id;
  }

  return id === ownerId;
};


