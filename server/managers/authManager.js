const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");
const User = require("../models/User");

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid username / password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid username / password");
  }

  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const token = await jwt.sign(payload, process.env.SECRET);

  return {
    ...payload,
    image: user.image,
    accessToken: token,
  };
};

exports.register = async (username, email, password, firstName, lastName) => {
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new Error("Username / E-mail is already taken");
  }
  
  if (password.length < 8) {
    throw new Error("Password is too short");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    firstName,
    lastName,
    password: hashedPassword,
  });

  return this.login(username, password);
};
