const express = require("express");
const { ProductModel } = require("../Models/product.model");
require("dotenv").config();


const productRoutes = express.Router();


productRoutes.get("/",async (req,res) => {

    const searched = req.query.search;
    const sortBy = req.query.sortby;
    const page = Number(req.query.page);
    const limitBy = Number(req.query.limit) || 10;


    if(searched && sortBy && page && limitBy){

        try {
            if(sortBy == "asc"){
                const products = await ProductModel.find({title:{$regex:searched,$options:'i'}}).skip((page-1)*1).limit(limitBy).sort({price:1})
                res.send(products)
            }

               else if(sortBy == "desc"){
                const products = await ProductModel.find({title:{$regex:searched,$options:'i'}}).skip((page-1)*1).limit(limitBy).sort({price:-1})
                res.send(products)
            }

               else res.send({"Message":"Something Went Wrong, searched After Sometimes"})
    }

    catch (err){
        console.log(err)
        res.send({"Message":"Something Went Wrong, searched After Sometimes"})
    }

}




     if(searched && page && limitBy){

        try {
            const products = await ProductModel.find({title:{$regex:searched,$options:'i'}}).skip((page-1)*1).limit(limitBy)
            res.send(products)
        } 
        
        catch (err){
            console.log(err)
            res.send({"Message":"Something Went Wrong, searched After Sometimes"})
        }
    }

    else if (page && limitBy){

        try {
            const products = await ProductModel.find().skip((page-1)*1).limit(limitBy)
            console.log("pagination Success");
            res.send(products);
        }
        
        catch (err) {
            console.log(err)
            res.send({"Messsage":"Something Went Wrong"})
        }
    }

    else if(searched && sortBy){

        try {
            if(sortBy == "asc"){
                const products = await ProductModel.find({title:{$regex:searched,$options:'i'}}).sort({price:1})
                res.send(products)
               }

               else if(sortBy == "desc"){
                const products = await ProductModel.find({title:{$regex:searched,$options:'i'}}).sort({price:-1})
                res.send(products)
               }

               else res.send({"Message":"Something Went Wrong, searched After Sometimes"})
            
        } 
        
        catch (err) {
            console.log(err)
            res.send({"Message":"Something Went Wrong, searched After Sometimes"})
        }
    }

    else if(searched){

        try {
            const products = await ProductModel.find({title:{$regex:searched,$options:'i'}})
            res.send(products)
        } 
        
        catch (err){
            console.log(err)
            res.send({"Message":"Something Went Wrong, searched After Sometimes"})
        }
    }


    else if(sortBy){

        try {
            if(sortBy == "asc"){
             const products = await ProductModel.find().sort({price:1})
             res.send(products)
            }
 
            else if(sortBy == "desc"){
             const products = await ProductModel.find().sort({price:-1})
             res.send(products)
            }
            else res.send({"Message":"Something Went Wrong, searched After Sometimes"})
             
         }
 
         catch (err) {
             console.log(err)
             res.send({"Message":"Something Went Wrong, sort the data After Sometimes"})
     
         }
    }
    
   else{

    try {
        const products = await ProductModel.find();
        res.send(products)
    } 
    
    catch (err) {
        console.log(err)
            res.send({"Message":"Something Went Wrong, Try After Sometimes"})
    }
   }
})


productRoutes.get("/:id", async(req,res) => {
    

    try {
        const productID = req.params.id
        const products = await ProductModel.findById({_id:productID})
        res.send(products)
    } 
    
    catch (err) {
        console.log(err)
            res.send({"Message":"Something Went Wrong, Try After Sometimes"})
    }
})






productRoutes.post("/add", async(req,res) => {

    try {
        const payload = req.body;
        const product = new ProductModel(payload);
        await product.save()
        console.log("added successfully")
        res.send({"Message":"Data Added Successfully", product})
    } 
    
    catch (err) {
        console.log("error while adding new movie data")
        res.send({"Message":"Error in Adding Data"})
    }
})


productRoutes.patch("/edit/:productID", async(req,res) => {

    try {
        const productID = req.params.productID;
        const payload = req.body;
        await ProductModel.findByIdAndUpdate(productID,payload);
        res.send({"Message": "Edited Successfully", payload})
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Error while editing Data"})
    }
})


productRoutes.delete("/delete/:productID", async(req,res) => {

    try {
        const productID = req.params.productID;
        await ProductModel.deleteOne({_id:productID});
        res.send({"Message":"Deleted Successfully"})
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Error while editing Data"})
    }
})

module.exports = { productRoutes };

