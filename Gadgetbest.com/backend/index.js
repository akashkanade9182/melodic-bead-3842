const express = require("express");
const { connection } = require("./config/db");
const { validator } = require("./middlewares/validator.middleware");
const { userRoutes } = require("./Routes/User.routes");
require("dotenv").config();



const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send({"Message":"welcome to Homepage"})
})


app.use(validator);
app.use("/", userRoutes);




app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("Connection to DB Success");
    } 
    
    catch (err) {
        console.log("Connection to DB Failed");
        console.log(err);
        res.send({"Message":"Connection to Network Failed"});
    }
});

