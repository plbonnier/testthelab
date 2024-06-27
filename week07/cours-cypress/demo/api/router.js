const express = require("express");
const users = require("./data/user.json");
const router = express.Router();

router.get("/users", (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
