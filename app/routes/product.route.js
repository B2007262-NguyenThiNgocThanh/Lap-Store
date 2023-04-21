const express = require('express');
const product = require('../controllers/product.controller');
const router = express.Router();

router.route('/product')
    .post(product.createProduct)
    .get(product.findAllProduct);

router.route('/product/:id')
    .get(product.findOneProduct)
    .put(product.updateProduct)
    .delete(product.deleteProduct);

module.exports = router;