const multer = require("multer");

const mimeTypes = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const upload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${new Date() * Math.random()}${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!mimeTypes[file.mimetype];
    let error = isValid ? null : new Error("Invalid file type!");
    cb(error, isValid);
  },
});

const singleImage = upload.single("image");
const multipleImages = upload.array("images", 10);

function single() {
  return (req, res, next) => {
    singleImage(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  };
}
function multiple() {
  return (req, res, next) => {
    multipleImages(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  };
}

module.exports = {
  single,
  multiple,
};
