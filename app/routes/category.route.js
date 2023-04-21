const express = require('express');
const category = require("../controllers/category.controller");

const router = express.Router();

router.route('/category')
    .post(category.createCategory)
    .get(category.findAllCategory);

router.route('/category/:id')
    .delete(category.deleteCategory);

module.exports = router;