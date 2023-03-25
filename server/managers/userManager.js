const User = require("../models/User");
const { parseSort } = require("../utils/parsers");

exports.getFavs = async (id, skip, limit, sort) => {
  const sortBy = Object.entries(parseSort(sort)).flat();
  const start = (skip - 1) * limit;
  const end = skip * limit;

  const { favourites } = await User.findById(id).populate("favourites").lean();

  const cars = favourites
    .sort((a, b) => {
      if (sortBy[0] === "createdAt") {
        return sortBy[1] === 1
          ? Date.parse(a.createdAt) - Date.parse(b.createdAt)
          : Date.parse(b.createdAt) - Date.parse(a.createdAt);
      } else {
        return sortBy[1] === 1
          ? a[sortBy[0]] - b[sortBy[0]]
          : b[sortBy[0]] - a[sortBy[0]];
      }
    })
    .slice(start, end);

  return { cars, count: favourites.length };
};

exports.getOwner = async (id) => {
  const user = await User.findById(id);

  return {
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    image: user.image,
  };
};

exports.like = async (userId, carId) => {
  const user = await User.findById(userId);
  const favourites = user.favourites.map((current) => current.toString());

  if (favourites.includes(carId)) {
    const index = favourites.indexOf(carId);
    favourites.splice(index, 1);
  } else {
    favourites.push(carId);
  }

  user.favourites = favourites;
  return user.save();
};

exports.isLiked = async (userId, carId) => {
  const user = await User.findById(userId).lean();
  const favourites = user.favourites.map((current) => current.toString());

  return favourites.includes(carId);
};

exports.addPhoto = async (userId, imageUrl) => {
  const user = await User.findById(userId);
  user.image = imageUrl;

  return user.save();
};
