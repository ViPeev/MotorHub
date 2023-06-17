const Car = require("../models/Car");

exports.create = (carData) => Car.create(carData);

exports.getAll = async (filter, skip, limit, sort) => {
  const skipSize = (skip - 1) * limit;

  const count = await Car.countDocuments({ ...filter, isDeleted: false });
  const cars = await Car.find(filter)
    .sort(sort)
    .skip(skipSize)
    .limit(limit)
    .slice("images", 3);

  return { count, cars };
};

exports.getOne = (id) => Car.findById(id).lean();

exports.update = (id, carData) => Car.findByIdAndUpdate(id, carData);

exports.delete = (id) => Car.findByIdAndDelete(id);
