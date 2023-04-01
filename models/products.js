const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    availability:{
        type:Boolean
    },
    image:{
        type:String
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi","oneplus"]
        }
    }
},{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema)

module.exports = Product;
