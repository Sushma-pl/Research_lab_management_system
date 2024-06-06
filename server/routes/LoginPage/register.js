const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User  = require('../../models/User');
const secret = "secret123";
router.get("/", (req,res)=>{
    res.send('ok');
})
router.post("/", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ password: hashedPassword, email });
  user.save().then((userInfo) => {
    jwt.sign(
      { id: userInfo._id, email: userInfo.email },
      secret,
      (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res
            .cookie("token", token)
            .json({ id: userInfo._id, email: userInfo.email });
        }
      }
    );
  });
});

 module.exports = router;