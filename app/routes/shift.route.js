const express = require('express');
const shift = require('../controllers/shift.controller');

const router = express.Router();

router.route('/shift')
    .post(shift.createShift)
    .get(shift.findAllShift);

router.route('/shift/:id')
    .get(shift.findOneShift)
    .put(shift.updateShift)
    .delete(shift.deleteShift);

module.exports = router;