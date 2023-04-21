const express = require('express');
const product = require('../controllers/product.controller');

const router = express.Router();

router.route('/products')
    .post(product.createProduct)
    .get(product.findAllProduct);

router.route('/products/:id')
    .get(product.findOneProduct)
    .put(product.updateProduct)
    .delete(product.deleteProduct);

module.exports = router;