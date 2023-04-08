// const ApiData = require("../productData.json");
const Product = require("../models/products");

const getAllProducts =  async (req, resp) => {
  const mydata = await Product.find()
    resp.status(200).send(mydata);
    // console.log(ApiData);
  }

const getOneProduct = async (req, resp) => {
  const id = req.params.id;
  const product = await Product.findOne({_id:id});
  // console.log(id);
  // console.log(product);
  return resp.json(product);
}

const createProduct = async (req,resp)=>{
  try {
    let body = req.body;
    // console.log(body);
    let product = await Product.create(body)
    resp.send(product)
  } catch (error) {
    console.log(error);
  }
}

  const updateProduct = async (req, res) => {
   try {
    let id = req.params.id;
    let data = req.body;
    // console.log(id);
    // console.log(data)
    const product = await Product.updateOne({_id:id}, data);
    const updatedProduct = await Product.findById(id)
    res.send({success:true,message:"Product Updated",product:updatedProduct})

   } catch (error) {
    console.log(error);
   }
    
}

module.exports = {getAllProducts,updateProduct,getOneProduct,createProduct};