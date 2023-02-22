const express = require("express");
const { DataModel } = require("../model/data.model");
const dataroutes = express.Router();
// for serach parameter get request parameters
dataroutes.get("/search", async (req, res) => {
  const { q } = req.query;
  const titel = {};
  const brand = {};
  const type = {};
  if (q) {
    titel.titel = new RegExp(q, "i");
    brand.brand = new RegExp(q, "i");
    type.product_type = new RegExp(q, "i");
  }
  const query = { $or: [titel, brand, type] };
  try {
    const data = await DataModel.find(query);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// for other all get request parameters and all sorting
dataroutes.get("/alldata", async (req, res) => {
  const { ideal, cat, brand, lsprice, gtprice, color } = req.query;

  const query = {};
  if (ideal) query.ideal_for = ideal;
  if (cat) query.product_type = cat;
  if (brand) query.brand = brand;
  if (lsprice && gtprice) {
    query.variant_price = { $lte: lsprice, $gte: gtprice };
  }
  if (color) query.actual_color = color;
  try {
    const data = await DataModel.find(query);
    if (data) {
      res.send(data);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.log(error);
  }
});


dataroutes.get("/:id", async (req, res) => {
  try {
    const data = await DataModel.findById(req.params.id);
    if (data) {
      res.send(data);
    } else {
      res.send("Data not found");
    }
    res.send(data);
  } catch (error) {}
});




// for admin only
// update data

dataroutes.patch("/:id", async (req, res) => {
  try {
    const data = await DataModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("update success");
  } catch (error) {}
});
// delete data

dataroutes.delete("/:id", async (req, res) => {
  try {
    const data = await DataModel.findByIdAndDelete(req.params.id);
    res.send("delete success");
  } catch (error) {}
});

module.exports = {
  dataroutes,
};

/*
 {
      "id": 4332137,
      "title": "VASTRAMAY Men Beige Solid Straight Kurta",
      "brand": "VASTRAMAY",
      "size": "XXL",
      "product_type": "Straight Kurta",
      "variant_price": 2199,
      "variant_mrp": 2199,
      "dominant_material": "Cotton",
      "care_instructions": "Cotton Silk  |  Dry-clean",
      "actual_color": "Beige",
      "dominant_color": "Beige",
      "images": [
        "http://assets.myntassets.com/v1/assets/images/4332137/2018/3/23/11521799761071-Vastramay-Men-Beige-Cotton-Silk-Only-Kurta-3901521799760828-1.jpg",
        "http://assets.myntassets.com/v1/assets/images/4332137/2018/3/23/11521799761037-Vastramay-Men-Beige-Cotton-Silk-Only-Kurta-3901521799760828-2.jpg",
        "http://assets.myntassets.com/v1/assets/images/4332137/2018/3/23/11521799760999-Vastramay-Men-Beige-Cotton-Silk-Only-Kurta-3901521799760828-3.jpg",
        "http://assets.myntassets.com/v1/assets/images/4332137/2018/3/23/11521799760956-Vastramay-Men-Beige-Cotton-Silk-Only-Kurta-3901521799760828-4.jpg",
        "http://assets.myntassets.com/v1/assets/images/4332137/2018/3/23/11521799760925-Vastramay-Men-Beige-Cotton-Silk-Only-Kurta-3901521799760828-5.jpg"
      ],
      "type": "Clothing/Men/Kurtas/VASTRAMAY/More by VASTRAMAY",
      "ideal_for": "Men",
      "is_in_stock": "In Stock"
    }
*/
