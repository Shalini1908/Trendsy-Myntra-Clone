const express = require("express");
const { DataModel } = require("../model/data.model");
const dataroutes = express.Router();
// for serach parameter get request parameters
dataroutes.get("/search", async (req, res) => {
  const { q } = req.query;
  const title = {};
  const brand = {};
  const type = {};
  if (q) {
    title.title = new RegExp(q, "i");
    brand.brand = new RegExp(q, "i");
    type.product_type = new RegExp(q, "i");
  }
  const query = { $or: [title, brand, type] };
  try {
    const data = await DataModel.find(query);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//get alldata 
dataroutes.get("/all",async(req,res)=>{
try{
const data = await DataModel.find()
res.send(data)

}catch(err){
console.log(err)
}

})




//for add products

dataroutes.post("/create", async (req, res) => {
  try {
      const data = new DataModel(req.body)
      await data.save()
      res.send({ "msg": "Product has been added" })
  } catch (err) {
      res.send({ "msg": "Product is not added" })
  }
})


// for other all get request parameters and all sorting
dataroutes.get("/", async (req, res) => {
  const {
    category,
    brand,
    colors,
    minPrice,
    maxPrice,
    size,
    ideal,
    limit,
    page,
    sortBy,
  } = req.query;
  const query = {};
  if (ideal) {
    query.ideal_for = ideal;
  }

  if (brand) {
    query.brand = { $in: brand };
  }

  if (category) {
    query.product_type = { $in: category };
  }

  if (colors) {
    query.actual_color = { $in: colors };
  }

  if (size) {
    query.size = { $in: size };
  }

  if (minPrice && maxPrice) {
    query.variant_price = { $gte: minPrice, $lte: maxPrice };
  }

  const sort = {};
  const pageNumber = page || 1;
  const pageLimit = limit || 20;
  const pagination = pageNumber * pageLimit - pageLimit || 0;
  if (sortBy) {
    sort["variant_price"] = sortBy === "asc" ? 1 : "dsc" ? -1 : "" || 1;
  }

  try {
    const data = await DataModel.find(query)
      .sort(sort)
      .skip(pagination)
      .limit(pageLimit);
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
