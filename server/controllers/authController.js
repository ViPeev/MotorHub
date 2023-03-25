const router = require("express").Router();
const authManager = require("../managers/authManager");
const { isNotLoggedIn } = require("../middleware/guards");
const { parseError } = require("../utils/parsers");
router.post("/register", isNotLoggedIn(), async (req, res) => {

  const { username, email, password, firstName, lastName } = req.body;
  
  try {
    const result = await authManager.register(
      username,
      email,
      password,
      firstName,
      lastName
    );

    res.json({ result, ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, message: parseError(error) });
  }
});

router.post("/login", isNotLoggedIn(), async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await authManager.login(username, password);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
