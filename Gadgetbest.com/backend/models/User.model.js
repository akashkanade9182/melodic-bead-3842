const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
})

const UserModel = mongoose.model("user", userSchema)
module.exports = {
    UserModel
}

/* {
    "name": "ramu",
    "email": "ramu@g.com",
    "password": "ramu",
    "number": 4565,
    "usertype": "admin"
 }
 */
