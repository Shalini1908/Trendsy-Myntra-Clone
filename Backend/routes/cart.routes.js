const express = require("express");
const { CartModel } = require("../model/cart.model");

const cartroutes = express.Router();

cartroutes.get("/", async (req, res) => {
  try {
    const data = await CartModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

cartroutes.post("/addtocart", async (req, res) => {
  try {
    const cart = new CartModel(req.body);
    await cart.save();
    res.send("added to cart");
  } catch (error) {
    console.log(error);
  }
});

cartroutes.patch("/updatecart/:id", async (req, res) => {
  try {
    const data = await CartModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("cart updated");
  } catch (error) {
    console.log(error);
  }
});

cartroutes.delete("/deletecart/:id", async (req, res) => {
  try {
    const data = await CartModel.findByIdAndDelete(req.params.id);
    res.send("cart deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  cartroutes,
};
