const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken"); 
const User = require("../model/User")
//generate web token
const generateWebToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
})}

const registerUser = asyncHandler(async(req,res) => {
   const {username,email,password} = req.body;

   const userExist = await User.findOne({email});

   if(userExist){
    res.status(400) //client side error 
    throw new Error("User aleray exist")
   }
   const user =await User.create({
    username,
    email,
    password,
   });
   if (user) {
    res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    token: generateWebToken(user._id), // if JWT is used 
})
}
else{
  res.status(400)
  throw new Error("invalid user data")
}
})

const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
    res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    token: generateWebToken(user._id),
    })
    }
    else{
        res.status(401) //the server rejected a request because it lacks valid authentication credentials
        throw new Error("Invalid email or password")
    }
})

module.exports = {
    registerUser,
    loginUser
}