const express = require('express');
const product = require('../controllers/product.controller');

const router = express.Router();

router.route("/")
    .post(product.createProduct)
    .get(product.findAllProduct);

 router.route("/:id")
    .get(product.findOneProduct)
    .put(product.updateProduct)
    .delete(product.deleteProduct);

module.exports = router;