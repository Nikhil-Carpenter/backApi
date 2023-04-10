const asyncHandler = require("express-async-handler");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerUser = asyncHandler(async (req, resp) => {
  // resp.send("User registered successfully")
  const { userName, email, password } = req.body;
  //validations

  if (!email || !userName || !password) {
    resp.status(400);
    // .json({message:"Please fill required fields"})
    throw new Error("Please fill required fields");
  }
  if (password.length < 4) {
    resp.status(400);
    // .json({message:"Password must be greater then 4 characters"})
    throw new Error("Password must be greater then 4 characters");
  }

  // If user Already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    resp.status(400);
    // .json({message:"Email has already been registered"})
    throw new Error("Email has already been registered");
  }

  // Create new user

  const user = await User.create({ email, userName, password });

  // Generate token
  const token = generateToken(user._id);

  // Send Http cookie
  resp.cookie("token",token,{
    path:"/",
    httpOnly:true,
    expires:new Date(Date.now() + 1000 * 86400),
    sameSite:"none",
    secure:true
  })

  if (user) {
    resp
      .status(201)
      .json({ success: true, message: "User is registered", user: {...user._doc,token} });
  } else {
    resp.status(400);
    // .json({message:"Invalid user data"})
    throw new Error("Invalid user data");
  }
});

module.exports = { registerUser };
