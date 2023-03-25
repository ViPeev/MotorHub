const { model, Schema } = require("mongoose");
const enums = require("../utils/enums");

const carSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: {
        values: enums.category,
        message: "Category not recognized",
      },
    },
    color: {
      type: String,
      required: true,
      enum: {
        values: enums.color,
        message: "Color not recognized",
      },
    },
    condition: {
      type: String,
      required: true,
      enum: {
        values: enums.condition,
        message: "Condition not recognized",
      },
    },
    cubicCapacity: {
      type: Number,
      min: [250, "Cubic Capacity too low"],
    },
    description: {
      type: String,
      minlength: [5, "Description should be at least 5 characters"],
    },
    doors: {
      type: String,
      required: true,
      enum: {
        values: enums.doors,
        message: ["Door number not recognized. Please, select 'other'"],
      },
    },
    fuelType: {
      type: String,
      required: true,
      enum: {
        values: enums.fuelType,
        message: ["Fuel type not recognized. Please, select 'other'"],
      },
    },
    images: {
      type: [String],
    },
    location: {
      type: String,
      required: true,
      enum: {
        values: enums.location,
        message: ["Location not recognized. Please, select 'other'"],
      },
    },
    make: {
      type: String,
      required: true,
      enum: {
        values: enums.make,
        message: ["Make not recognized. Please, select 'other'"],
      },
    },
    mileage: {
      type: Number,
      required: true,
      min: [0, "Mileage cannot be below zero"],
    },
    model: { type: String, required: [true, "Model is required"] },
    modification: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      validate: /^[+]\d{12}$/,
    },
    power: {
      type: Number,
      required: true,
      min: [10, "Power cannot be less than 0"],
    },
    price: {
      type: Number,
      required: true,
      min: [1, "Price cannot be less than 1"],
    },
    seats: {
      type: String,
      required: true,
      enum: {
        values: enums.seats,
        message: ["Seat number not recognized. Please, select 'other'"],
      },
    },
    transmission: {
      type: String,
      required: true,
      enum: {
        values: enums.transmission,
        message: ["Transmission type not recognized. Please, select 'other'"],
      },
    },
    year: {
      type: Number,
      required: true,
      min: [1930, "Year of production cannot be below 1930"],
      max: [
        Number(new Date().getFullYear()),
        `Year of production cannot be above ${Number(
          new Date().getFullYear()
        )}`,
      ],
    },
    _ownerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Car = model("Car", carSchema);

module.exports = Car;
