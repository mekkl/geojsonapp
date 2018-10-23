var express = require('express');
var router = express.Router();

const locationResource = require('./locationResource')
const playerResource = require('./playerResource');

router.use('/locations', locationResource)
router.use('/players', playerResource)

module.exports = router;


