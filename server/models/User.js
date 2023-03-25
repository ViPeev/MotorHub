const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: [5, "Username cannot be less than 5 characters"],
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      match: [
        /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/,
        "Email is not valid!",
      ],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    favourites: {
      type: [Types.ObjectId],
      ref: "Car",
    },
    image: {
      type:String
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
