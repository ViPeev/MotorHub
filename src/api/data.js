import * as api from "./api.js";
import { getUserData } from "../utils/localStorage";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getCars() {
  return await api.get("/cars");
}

export async function getCarById(id) {
  return await api.get(`/cars/${id}`);
}

export async function getFavourites() {
  const userId = getUserData().userData._id;
  return await api.get(`/users/${userId}/favourites`);
}

export async function createCar(data) {
  return await api.post("/cars", data);
}

export async function editCar(id, data) {
  return await api.put(`/cars/${id}`, data);
}

export async function deleteCar(id) {
  return await api.del(`/cars/${id}`);
}

export async function uploadImages(images) {
  const response = await fetch("http://localhost:3030/api/uploads/cars", {
    method: "POST",
    headers: {
      "X-Authorization": localStorage.getItem("authToken"),
    },
    body: images,
  });
  
  return response.json();
}
