require("dotenv").config();
const mongoose = require("mongoose")
const connectDB = require("./db/connect");
const url = process.env.MONGODB_URL || 5000;

const Product  = require("./models/products")
const productJson = require("./productData.json")

mongoose.set('strictQuery', false)
const start = async()=>{
    try {
        await connectDB(url)
        await Product.create(productJson)
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
} 

start()