const router = require("express").Router();

const authController = require("./controllers/authController");
const carsController = require("./controllers/carsController");
const userController = require("./controllers/userController");
const uploadController = require("./controllers/uploadController");
const { isLoggedIn } = require("./middleware/guards");

router.use("/api/auth", authController);
router.use("/api/cars", carsController);
router.use("/api/users", userController);
router.use("/api/uploads", isLoggedIn(), uploadController);

module.exports = router;
