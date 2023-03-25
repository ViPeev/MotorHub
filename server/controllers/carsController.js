const router = require("express").Router();
const carManager = require("../managers/carManager");
const userManager = require("../managers/userManager");
const { parseQuery, parseSort, parseError } = require("../utils/parsers");
const { isLoggedIn, isOwner } = require("../middleware/guards");

router.get("/", async (req, res) => {
  const query = req.query.where;
  const skip = Number(req.query.skip.slice(1, -1));
  const limit = Number(req.query.limit.slice(1, -1));
  const sort = req.query.sort.slice(1, -1);

  const filter = parseQuery(query);
  const sortBy = parseSort(sort);

  try {
    const cars = await carManager.getAll(filter, skip, limit, sortBy);

    if (filter._ownerId) {
      const user = await userManager.getOwner(filter._ownerId);
      cars.owner = user;
    }

    res.json(cars);
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {

  try {
    const car = await carManager.getOne(req.params.id);
    const owner = await userManager.getOwner(car._ownerId);

    res.json({ ...car, owner });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.get("/:id/ownerId", async (req, res) => {

  try {
    const car = await carManager.getOne(req.params.id);

    res.json({ ownerId: car._ownerId });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.post("/", isLoggedIn(), async (req, res) => {
  const carData = req.body;
  carData._ownerId = req.user._id;

  try {
    const car = await carManager.create(carData);

    res.json({ _id: car._id });
  } catch (error) {
    res.status(400).json({ ok: false, message: parseError(error) });
  }
});

router.put("/:id", isLoggedIn(), isOwner(), async (req, res) => {
  const carData = req.body;

  try {
    await carManager.update(req.params.id, carData);

    return res.json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, message: parseError(error) });
  }
});

router.delete("/:id", isLoggedIn(), isOwner(), async (req, res) => {
  await carManager.delete(req.params.id);
  return res.json({ ok: true });
});

module.exports = router;
