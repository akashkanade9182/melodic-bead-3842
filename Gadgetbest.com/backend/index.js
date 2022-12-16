const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middlewares/auth.middleware");
const { validator } = require("./middlewares/validator.middleware");
const { userRoutes } = require("./Routes/User.routes");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");

const cors = require("cors");


const app = express();
app.use(session({secret: "cats"}))
app.use(passport.initialize());
app.use(passport.session);
app.use(cors({
    origin : "*"
}))
app.use(express.json());

app.get("/", (req,res) => {
    res.send("welcome to Homepage")
})
require("./auth")
function isLoggedIn(req,res,next){
    req.user? next():res.sendStatus(401);
}
app.get("/",(req,res)=>{
    res.send('<a href="/auth/google"><img src="https://www.transparentpng.com/thumb/google-logo/shady-google-logo-pictures-png-free-BjH4wQ.png" /><a/>')
});
app.get("/auth/google",
   passport.authenticate("google",{scope:["email" , "profile"]})   
)
app.get('/google/callback',
passport.authenticate("google",{
    successRedirect:"/Protected",
    failureRedirect:"/auth/failure",
  })  
)
app.get("/auth/failure",(req,res)=>{
    res.send("Someting went wrong...")
})
app.get("/Protected", isLoggedIn,(req,res)=>{
    res.send(`Hello ${req.user.displayName}`)
})


app.get("/logout",(req,res)=>{
    // req.logOut()
    req.session.destroy();
    res.send("Good By.....")
})

app.use(validator);
app.use("/", userRoutes);

app.use(authentication);




app.listen(process.env.port, async() => {
    try{
        await connection;
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log(`Listening on PORT ${process.env.port}`)
});

