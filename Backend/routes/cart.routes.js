const express = require("express");
const { CartModel } = require("../model/cart.model");

const cartroutes = express.Router();
// get cart data of perticaular user who login
cartroutes.get("/", async (req, res) => {
  try {
    const data = await CartModel.find({ userID: req.body.userID });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
// add product to cart
cartroutes.post("/addtocart", async (req, res) => {
  try {
    const cart = new CartModel(req.body);
    await cart.save();
    res.send("added to cart");
    // res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});
// for update cart data
cartroutes.patch("/updatecart/:id", async (req, res) => {
  try {
    const data = await CartModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("cart updated");
  } catch (error) {
    console.log(error);
  }
});
// for delete cart data
cartroutes.delete("/deletecart/:id", async (req, res) => {
  try {
    const data = await CartModel.findByIdAndDelete(req.params.id);
    res.send("cart deleted");
  } catch (error) {
    console.log(error);
  }
});

cartroutes.delete("/deletecart", async (req, res) => {
  try {
    const data = await CartModel.deleteMany({ userID: req.body.userID });
    res.send("cart deleted");
  } catch (error) {}
});

module.exports = {
  cartroutes,
};
