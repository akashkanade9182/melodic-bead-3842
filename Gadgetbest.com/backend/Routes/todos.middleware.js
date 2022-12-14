const express = require("express");

const todoRoutes = express.Router();


todoRoutes.get("/", (res,req) => {
    res.send("amit")
})

todoRoutes.get("/create",(req,res) => {
    res.send("Saini")
});


module.exports = { todoRoutes }