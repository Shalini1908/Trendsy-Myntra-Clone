const express = require("express");
const { WishlistModel } = require("../model/wishlist.model");

const wishlistRouter = express.Router();

// get wishlist data of perticaular user who login
wishlistRouter.get("/", async (req, res) => {
  try {
    const data = await WishlistModel.find({ userID: req.body.userID });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// add product to wishlist
wishlistRouter.post("/addtowishlist", async (req, res) => {
  try {
    const wishlist = new WishlistModel(req.body);
    await wishlist.save();
    res.send("added to wishlist");
    // res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

// delete a product from wishlist
wishlistRouter.delete("/deletewishlist/:id", async (req, res) => {
  try {
    await WishlistModel.findByIdAndDelete(req.params.id);
    res.send("Product deleted from wishlist.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = { wishlistRouter };
