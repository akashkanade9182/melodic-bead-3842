const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:String,
    image_url:String,
    price:Number,
    brand:String,
    quantity:Number,
    favorite:Boolean,
    rating:Number,
    category:String,
    subCategory:String
}, {
    versionKey:false
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = { ProductModel };