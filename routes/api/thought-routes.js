const router = require("express").Router();

router.route("/", (req, res) => {
  console.log("Thoughts!");
});

module.exports = router;
