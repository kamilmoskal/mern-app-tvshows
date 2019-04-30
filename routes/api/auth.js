const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

// Load User model
const User = require("../../models/User");

// @route   GET api/auth
// @desc    Return user depending on jwt
// @access  Private
router.get("/", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Server error");
    });
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Email field is required")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password field is required")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }
    const { password, email } = req.body;

    User.findOne({ email: email.toLowerCase() }).then(user => {
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      } else {
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              user: {
                id: user.id
              }
            };

            jwt.sign(
              payload,
              config.get("jwtSecret"),
              {
                expiresIn: 3600
              },
              (err, token) => {
                if (err) throw err;
                res.json({ msg: "User logged in", token });
              }
            );
          } else {
            return res
              .status(400)
              .json({ errors: [{ msg: "Invalid Credentials" }] });
          }
        });
      }
    });
  }
);

module.exports = router;
