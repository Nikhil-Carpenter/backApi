require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false)
const connectDB = (uri) =>{
    console.log("DB Connected");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports = connectDB;