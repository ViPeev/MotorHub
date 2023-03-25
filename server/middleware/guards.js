const carManager = require("../managers/carManager");

exports.isLoggedIn = () => async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res
      .status(401)
      .json({ ok: false, message: "Authentication required" });
  }
};

exports.isNotLoggedIn = () => async (req, res, next) => {
  if (!req.user) {
    next();
  } else {
    return res
      .status(401)
      .json({ ok: false, message: "Already authenticated" });
  }
};

exports.isOwner = () => async (req, res, next) => {
  const userId = req.user._Id;
  const car = carManager.getOne(req.params.id);

  if (userId === car._ownerId) {
    next();
  } else {
    return res.status(403).json({ ok: false, message: "Forbidden" });
  }
};

exports.isNotOwner = () => async (req, res, next) => {
  const userId = req.user._id;
  const car = carManager.getOne(req.params.id);
  if (userId !== car._ownerId) {
    next();
  } else {
    return res.status(403).json({ ok: false, message: "Forbidden" });
  }
};
