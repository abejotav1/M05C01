const express = require('express');
const mainController = require('../controllers/mainController');

const mainRouters = express.Router();

mainRouters.get('/',mainController.home);
mainRouters.get('/about',mainController.about);

module.exports = mainRouters;
