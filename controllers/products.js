// const ApiData = require("../productData.json");
const Product = require("../models/products");

const getAllProducts = async (req, resp) => {
  const mydata = await Product.find()
    resp.status(200).send(mydata);
    // console.log(ApiData);
  }

module.exports = {getAllProducts};