const { adminModel } = require("../model/admin.model");

const express = require("express");

const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminRouter.post("/register", async (req, res) => {
  const { pass, email, icon } = req.body;

  try {
    bcrypt.hash(pass, 10, async (err, hash) => {
      if (err) {
        console.log(err);
      }
      const user = new adminModel({ pass: hash, email, icon });
      await user.save();
      res.send("admin registered successfully");
    });
  } catch (err) {
    res.send("admin registeration failed");
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    let user = await adminModel.find({ email: email });

    if (user.length === 0) {
      return res.send({ msg: "admin not found" });
    }

    bcrypt.compare(pass, user[0].pass, (err, result) => {
      if (result) {
        const token = jwt.sign({ userID: user[0]._id }, "masai");

        res.send({ msg: "admin login successfull", token: token ,icon:user[0].icon});
      } else {
        res.send({ err: "login failed" });
      }
    });
  } catch (err) {
    console.log(err);
    res.send({ msg: "login failed" });
  }
});

module.exports = { adminRouter };
