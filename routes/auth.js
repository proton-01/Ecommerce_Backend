const router = require("express").Router();
// models
const User = require("../models/User");
// password hashing
// jsonwebtoken
const jwt = require("jsonwebtoken");
const bcryptjs = require('bcryptjs')

// register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password : bcryptjs.hashSync(req.body.password)

  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials!");

    const isPasswordValid = bcryptjs.compareSync(
      req.body.password,
      user.password
    );

    if(!isPasswordValid) {
      res.status(401).json("Wrong Credentials!");
    }

    // JWT
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;