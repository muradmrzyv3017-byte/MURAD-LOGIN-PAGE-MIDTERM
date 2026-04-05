const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new User({ username, password });
  await newUser.save();

  res.json({ message: "Registered successfully" });
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.json({ message: "Login success" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});


router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;