const express = require('express');
const staff = require('../controllers/staff.controller');

const router = express.Router();

router.route('/staff')
    .post(staff.createStaff)
    .get(staff.findAllStaff);

router.route('/staff/:id')
    .get(staff.findOneStaff)
    .put(staff.updateStaff)
    .delete(staff.deleteStaff);

module.exports = router;