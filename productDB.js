require("dotenv").config();
const mongoose = require("mongoose")
const connectDB = require("./db/connect");

const Product  = require("./models/products")
const productJson = require("./productData.json")

mongoose.set('strictQuery', false)
const start = async()=>{
    try {
        await connectDB("mongodb+srv://nikhilcarpenter:Mongodbatlas07pass@cluster0.zo6wkso.mongodb.net/backApi?retryWrites=true&w=majority")
        await Product.create(productJson)
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
} 

start()