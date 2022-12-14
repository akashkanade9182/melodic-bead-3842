const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const connection = mongoose.connect("mongodb+srv://samsursekh:54321@cluster0.64g4nkm.mongodb.net/demoToChek?retryWrites=true&w=majority")

module.exports = {
    connection
}
 
/*   for signup
   {
    "email" : "samsur@g.com",
    "password" : 12345,
    "confirm" : "12345",
    captcha : "RAND57"
   }

   http://localhost:8080/signup
*/

/*   for login
   {
    "email" : "samsur@g.com",
    "password" : 12345
   }

   http://localhost:8080/login
*/