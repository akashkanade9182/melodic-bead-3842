const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);

const connection = mongoose.connect(process.env.mongo_url);

module.exports = { connection };