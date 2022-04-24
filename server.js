const express = require("express");
const app = express();
const server = require('http').Server(app);
const parser = require('./parser')
const countrie = require("./components/countrie/network")

const router = require("./network/routes");
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/app", express.static("public"));

server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})

router(app);