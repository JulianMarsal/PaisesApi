const express = require("express");
const app = express();
const server = require('http').Server(app);

const router = require("./network/routes");
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/app", express.static("public"));

server.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
//The API is too small, so it may not be necessary to split the routes and network in this way. But to do a good job and make it scalable, I did it like this.
router(app);