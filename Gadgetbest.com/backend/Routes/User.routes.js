const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.model");
require("dotenv").config();
const saltRounds = 4;

const userRoutes = express.Router();

userRoutes.post("/signup", async(req,res) => {
    const {name,email,password,number,usertype} = req.body;

    const userEmail = await UserModel.findOne({email});
    const userNumber = await UserModel.findOne({number})


    if(userEmail && userNumber){
       
        res.send({"Message":"Both Email and Mobile Number are registered already"})
    }
   else if(userEmail){
        res.send({"Message":"This Email is already registered"})
        
    }

    else if(userNumber){
        
        res.send({"Message":"this Mobile Number is already registered"})
    }
    
    else{

        try {
            bcrypt.hash(password,saltRounds, async(err,myPassword) => {
                const user = new UserModel({name,email,password:myPassword,number,usertype})
                await user.save();
                console.log("signup Successful")
                res.send({"Message":"Signup Successfully"})
            })
        } 
        
        catch (err) {
            console.log("Error in Signing-Up");
            console.log(err);
            res.send({"Message":"Signup failed, try again"})
        }
    }
})



userRoutes.post("/login", async(req,res) => {

    try {
        
        const {email,password} = req.body;
        const user = await UserModel.find({email});

        if(user.length>0){
            const myPassword = user[0].password;
            console.log(myPassword);
            bcrypt.compare(password, myPassword, (err,result) => {
                if(result){
                    const token = jwt.sign({message:"Hey"}, process.env.secret_key, {expiresIn:"1d"})
                    res.send({token, message:"Logged-In Successfully"});
                }
                else{
                    res.send({"Message":"The Password you Entered is Wrong"})
                    
                }
            })
        }

        else{
            res.send({"Message":"User not found"});
        }
    } 
    
    catch (err) {
        console.log("Error while making POST req")
        console.log(err)
        res.send({"Message":"Login failed, Please try again later"});
    }
})


module.exports = { userRoutes };