const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  id: Number,
  title: String,
  brand: String,
  size: String,
  product_type: String,
  variant_price: Number,
  variant_mrp: Number,
  dominant_material: String,
  care_instructions: String,
  actual_color: String,
  dominant_color: String,
  images: Array,
  type: String,
  ideal_for: String,
  is_in_stock: String,
  TimeInStock: Number,
  User_Id: String,
});

const CartModel = mongoose.model("cartitems", cartSchema);

module.exports = {
  CartModel,
};
