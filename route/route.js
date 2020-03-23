const express = require('express');
const appRoute = express.Router();
const proControl = require('../controller');

appRoute.route('/').get(proControl.home);
appRoute.route('/').post(proControl.newProduct);
appRoute.route('/:id').get(proControl.editProduct);
appRoute.route('/:id').patch(proControl.updateProduct);
appRoute.route('/:id').delete(proControl.deleteProduct);

module.exports = appRoute;