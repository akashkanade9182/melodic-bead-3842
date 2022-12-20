const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String,
    usertype:String,
    apartment:String,
    address:String,
    country:String,
    state:String,
    pincode:String,
    phone:String

}, {
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = { UserModel };