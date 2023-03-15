import { getUserData } from "./localStorage";
import valid from "../staticData/formData";

const mailRegex = /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;
const phoneRegex = /^[\+]\d{12}$/;

export const isOwner = (ownerId) => {
  const user = getUserData();
  let id = undefined;

  if (user) {
    id = user.userData._id;
  }

  return id === ownerId;
};

export const validateLogin = (data) => {
  const validator = {
    username: data.username.length > 4,
    password: data.password.length > 7,
  };

  const canSubmit = Object.values(validator).every((v) => v);

  return { validator, canSubmit };
};

export const validateRegister = (data) => {
  const validator = {
    userName: data.userName.length > 4,
    firstName: data.firstName.length > 0,
    lastName: data.lastName.length > 0,
    email: mailRegex.test(data.email),
    password: data.password.length > 7,
    repass: data.password === data.repass,
    agree: data.agree,
  };

  const canSubmit = Object.values(validator).every((v) => v);

  return { validator, canSubmit };
};

export const validateCreate = (data) => {
  const validator = {
    category:
      valid.categories.includes(data.category) || data.category === "other",
    condition:
      valid.condition.includes(data.condition) || data.condition === "other",
    cubicCapacity: Number(data.cubicCapacity) >= 250,
    color: valid.colors.includes(data.color) || data.color === "other",
    doors: valid.doors.includes(data.doors) || data.doors === "other",
    description: data.description.length > 4,
    fuelType: valid.fuel.includes(data.fuelType) || data.fuelType === "other",
    location:
      valid.countries.includes(data.location) || data.location === "other",
    make: valid.makes.includes(data.make) || data.make === "other",
    model:
      valid.cars[data.make]?.includes(data.model) || data.model === "other",
    mileage: Number(data.mileage) >= 0 && data.mileage !== "",
    power: Number(data.power) >= 10,
    price: Number(data.price) >= 1,
    seats: valid.seats.includes(Number(data.seats)) || data.seats === "other",
    transmission:
      valid.transmission.includes(data.transmission) ||
      data.transmission === "other",
    phone: phoneRegex.test(data.phone),
    year: valid.years.includes(Number(data.year)),
  };

  const canSubmit = Object.values(validator).every((v) => v);
  return { validator, canSubmit };
};
