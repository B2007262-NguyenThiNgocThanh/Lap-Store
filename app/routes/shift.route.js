const express = require('express');
const shift = require('../controllers/shift.controller');

const router = express.Router();

router.route('/')
    .post(shift.createShift)
    .get(shift.findAllShift);

router.route('/:id')
    .get(shift.findOneShift)
    .put(shift.updateShift)
    .delete(shift.deleteShift);

module.exports = router;