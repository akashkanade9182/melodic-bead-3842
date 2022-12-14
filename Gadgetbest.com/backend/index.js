const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middlewares/auth.middleware");
const { validator } = require("./middlewares/validator.middleware");
const { todoRoutes } = require("./Routes/todos.middleware");
const { userRoutes } = require("./Routes/User.routes");
require("dotenv").config();



const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("welcome to Homepage")
})


app.use(validator);
app.use("/", userRoutes);

app.use(authentication);
app.use("/todos",todoRoutes)




app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log("Connection to DB Success");
    } 
    
    catch (err) {
        console.log("Error while Connecting to Network");
        console.log(err);
        console.log("Connection to DB Failed");
        res.send("Connection to Network Failed");
    }
});

