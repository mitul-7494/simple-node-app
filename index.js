const bodyParser  = require('body-parser');
const pathrouter = require("./controll/router");
require('dotenv').config();

const express = require('express');
const server = express();

const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main(){
    
  mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .catch((error) => {
      console.error('Error connecting to MongoDB Atlas:', error);
    });
}

server.use(express.static("public"));
server.use(bodyParser.json());
server.use(express.urlencoded({extended: true}));
server.use("/userapi", pathrouter.router);
server.use("/:an",pathrouter.baserouter);
server.use("",pathrouter.baserouter);
server.set("view engine", "ejs");

//export default server;
server.listen(8081, ()=>{
    console.log("server started");
})