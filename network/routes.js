const countrie = require("../components/countrie/network")

const routes = (server)=>{
    server.use("/", countrie);
}

module.exports = routes;