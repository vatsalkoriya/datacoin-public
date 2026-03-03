const mongoose = require("mongoose")
const bcrypt = require('bcrypt'); // Import bcrypt
const {Schema, model} = mongoose;

const UserSchema = new Schema(
    {
        username : { type: String, required: true, unique: true },
        email : {type: String, required: true, unique: true},
        password : {type:String, required: true},
        role: {
            type: String,
            enum : ['user','admin'],
            default: 'user',
        },
        isBlocked: {
            type: Boolean,
            default: false,
        },
    },
    {
      timestamps : true,
    }
)

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare entered password with hashed password diring login
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", UserSchema);
module.exports = User;