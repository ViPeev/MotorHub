const router = require("express").Router();
const carManager = require("../managers/carManager");
const userManager = require("../managers/userManager");
const { isLoggedIn, isNotOwner } = require("../middleware/guards");
const { parseError } = require("../utils/parsers");

router.post("/like/:id", isLoggedIn(), isNotOwner(), async (req, res) => {

  try {
    const userId = req.user._id;
    const car = await carManager.getOne(req.params.id);
    await userManager.like(userId, car._id.toString());

    return res.json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, message: parseError(error) });
  }
});

router.post("/liked/:id", isLoggedIn(), isNotOwner(), async (req, res) => {

  try {
    const userId = req.user._id;
    const result = await userManager.isLiked(userId, req.params.id);

    return res.json({ result });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.get("/:id/favourites", isLoggedIn(), async (req, res) => {
  const skip = Number(req.query.skip.slice(1, -1));
  const limit = Number(req.query.limit.slice(1, -1));
  const sort = req.query.sort.slice(1, -1);

  try {
    const cars = await userManager.getFavs(req.params.id, skip, limit, sort);

    return res.json({ ...cars });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.put("/", isLoggedIn(), async (req, res) => {
  const { image } = req.body;
  const userId = req.user._id;

  try {
    await userManager.addPhoto(userId, image);

    res.json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, message: parseError(error) });
  }
});

module.exports = router;
