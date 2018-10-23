
var express = require('express');
var router = express.Router();
const gju = require('geojson-utils');
const gameArea = require('../../gameData').gameArea;
const players = require('../../gameData').players;


router.route('/ispointinarea/:lon/:lat')
// get boolean true if point is in area (accessed at GET http://localhost:8080/geoapi/locations/ispointinarea/:lon/:lat)
.get(async function(req, res) {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const point = {type: "Point", coordinates: [lon, lat]}
    const status = gju.pointInPolygon(point, gameArea)
    const msg = status ? 'Point is in game area' : 'Point is not in game area';

    res.json({status, msg})
})

router.route('/distancetoplayer/:lon/:lat/:username')
// get distance to a player from a point (in meters) (accessed at GET http://localhost:8080/geoapi/locations/distanceToUser/:lon/:lat/:username)
.get(async function(req, res) {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const uname = req.params.username;
    const point = {type: "Point", coordinates: [lon, lat]}
    let player = null;

    players.forEach(pl => {
        if (pl.properties.name === uname) player = pl
    })

    if (player) {
        const distance = gju.pointDistance(point, player.geometry)
        res.json({distance, 'to': uname})
    } else {
        res.status(404)
        res.json({msg: `User with name ${uname} not found`})
    }
})

router.route('/playersinradius/:lon/:lat/:rad')
// get players in area with radius (in meters) (accessed at GET http://localhost:8080/geoapi/locations/findnearbyplayers/:lon/:lat/:rad)
.get(async function(req, res) {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const rad = req.params.rad;

    const center = {type: "Point", coordinates: [lon, lat]}
    
    let nearbyPlayers = [];

    for (let i = 0; i < players.length; i++) {
        if (gju.pointDistance(players[i].geometry, center) <= rad) nearbyPlayers.push(players[i])
    }
    
    res.json({nearbyPlayers})
})

module.exports = router;