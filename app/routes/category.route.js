const exppress = require('express');
const category = require("../../../../Labs/contactbook_backend/app/controller/category.controller");

const router = express.Router();

router.route('/category')
    .post(product.createCategory)
    .get(product.findAllCategory);

router.route('/category/:id')
    .delete(product.deleteProduct);

module.exports = router;