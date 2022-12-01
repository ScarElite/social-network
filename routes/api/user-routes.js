const router = require("express").Router();

router.route("/", () => {
  console.log("Users!");
});

module.exports = router;
