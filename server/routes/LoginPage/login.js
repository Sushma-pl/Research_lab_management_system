const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User  = require('../../models/User');
const secret = "secret123";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("ok");
});
router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((userInfo) => {
    if (!userInfo) {
      return res.json({});
    }
    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      jwt.sign({ id: userInfo._id, email }, secret, (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res
            .cookie("token", token)
            .json({ id: userInfo._id, email: userInfo.email });
        }
      });
    } else {
      res.sendStatus(401);
    }
  });
});
module.exports = router;
