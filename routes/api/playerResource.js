
var express = require('express');
var router = express.Router();
const gju = require('geojson-utils');
const gameArea = require('../../gameData').gameArea;

router.route('/isplayerinarea/:lon/:lat')
// *description* (accessed at GET http://localhost:8080/geoapi/players)
.get(async function(req, res) {
    res.json({})
})

module.exports = router;