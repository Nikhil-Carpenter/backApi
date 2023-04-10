const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please enter name"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter password"]
    },
    image:{
        type:String,
        default:"https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg"
    },
    bio:{
        type:String,
        default:"I am using The Product App"
    }
},{
    timestamps:true
})

userSchema.pre("save", async function(next){

    if (!this.isModified("password")) {
        return next()
    }
      
    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword

})




const User = mongoose.model("Users",userSchema);

module.exports = User;