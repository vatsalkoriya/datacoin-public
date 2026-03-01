const asyncHandler = require('express-async-handler');
const User = require("../model/User");

const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find({}).select('-password')
    res.json(users);
})

const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id).select('-password')
    if(user){
        res.json(user)
    }
    else{
        res.status(404)//Not Found
        throw new Error("user not found")
    }
})

const deleteProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id);
    
if (!user) {
        res.status(404)
        throw new Error("user not found")
    }
if(user._id.toString() === req.user._id.toString()){
        res.status(400);
        throw new Error("cannot delete yourself")
    }
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted succesfully" })
})

const toogleUserBlock = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("user not found")
    }
    if(user._id.toString() === req.user._id.toString()){
        res.status(400)
        throw new Error("cannot block yourself")
    }
    if(user.role === 'admin'){
        res.status(400);
        throw new Error("cannot block other admin");
    }
    user.isBlocked = !user.isBlocked;
    await user.save();

    res.json({
        message: user.isBlocked ? 'user blocked succesfully' : 'user unblocked succesfully',
        isBlocked : user.isBlocked,
    })
})

module.exports = {
    getUsers,
    getUserProfile,
    deleteProfile,
    toogleUserBlock,
}