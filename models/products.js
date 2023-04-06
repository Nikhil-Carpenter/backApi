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
        type:Boolean,
        default:true
    },
    image:{
        type:String,
        default:"http://dummyimage.com/200x200.png/cc0000/ffffff"
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
