const express = require('express');
const staff = require('../controllers/staff.controller');

const router = express.Router();

router.route('/')
    .post(staff.createStaff)
    .get(staff.findAllStaff);

router.route('/:id')
    .get(staff.findOneStaff)
    .put(staff.updateStaff)
    .delete(staff.deleteStaff);

module.exports = router;