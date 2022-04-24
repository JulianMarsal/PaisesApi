const express = require('express');
const app = express();
const response = require('../../network/response');
const controller = require('./controller');



app.get('/', (req, res) => {
    controller.listCountries(req.query.V1,req.query.V2)
        .then(countries => {
            response.success(req, res, countries, 200);
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error);
        });
});

module.exports = app; 