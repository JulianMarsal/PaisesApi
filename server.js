const express = require("express");
const app = express();
const server = require('http').Server(app);

const router = require("./network/routes");




server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

router(app);