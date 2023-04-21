const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => response.send('hello world'));

module.exports = routes