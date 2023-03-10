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
  const {
    userData: { _id },
  } = getUserData();

  return await api.get(`/users/${_id}/favourites`);
}


export async function createCar(data) {
  return await api.post("/cars", data);
}

export async function likeCar(carId) {
  return await api.post(`/users/like/${carId}`);
}

export async function isLiked(carId){
  return await api.post(`/users/isLiked/${carId}`);
}

export async function editCar(id, data) {
  return await api.put(`/cars/${id}`, data);
}

export async function deleteCar(id) {
  return await api.del(`/cars/${id}`);
}

export async function getOwnCars() {
  const {
    userData: { _id },
  } = getUserData();

  return await api.get(`/cars?where=_ownerId%3D%22${_id}%22`);
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
