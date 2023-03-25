const router = require("express").Router();
const { single, multiple } = require("../middleware/upload");
const { uploadImage, deleteImage } = require("../utils/cloudinary");

router.post("/cars", multiple(), async (req, res) => {
  const files = req.files;

  try {
    Promise.all([
      ...files.map(({ path }) => uploadImage(path, "motorhub-cars")),
    ]).then((result) =>
      res.status(201).json({ images: result.map((r) => r.secure_url) })
    );
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.post("/users", single(), async (req, res) => {
  const file = req.file;

  try {

    uploadImage(file.path, "motorhub-profile-images").then((result) =>
      res.status(201).json({ image: result.secure_url })
    );
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

module.exports = router;
