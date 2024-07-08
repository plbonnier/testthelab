const express = require("express");
const db = require("./dbClient");

const router = express.Router();

router.get("/health-check", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      status: 200,
      message: "Successful Request",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal Error Server",
    });
  }
});

router.post("/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const [user] = await db.query(
      `insert into user (name, email, password) values (?, ?, ?)`,
      [name, email, password]
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await db.query("select * from user");
    res.status(200).json({
      status: 200,
      message: "all users",
      users: users[0],
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await db.query("select * from user where id = ?", [id]);
    res.status(200).json({
      status: 200,
      message: "all users",
      users: users[0],
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/notes", async (req, res) => {
  try {
    const { title, description, category, id_user } = req.body;
    const [note] = await db.query(
      "insert into note (title, description, category, id_user) values (?,?,?,?)",
      [title, description, category, id_user]
    );

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/notes", async (req, res) => {
  try {
    const notes = await db.query("select * from note");
    res.status(200).json(notes[0]);
  } catch (error) {}
});
module.exports = router;
