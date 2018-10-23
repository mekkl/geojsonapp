const http = require('http')
const express = require('express');
const app = express();
const gju = require('geojson-utils');
const gameArea = require('./gameData').gameArea;

app.get('/', (req, res) => {
    res.send('Geo JSON, Demo. Goto /geoapi')
});

app.get('/geoapi/isplayerinarea/:lon/:lat', (req, res) => {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const playerPoint = {type: "Point", coordinates: [lon, lat]}

    const status = gju.pointInPolygon(playerPoint, gameArea)
    const msg = status ? 'Player is in game area' : 'Player is not in game area';

    res.json({status, msg})
});

function geoServer(port, callback) {
    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`Server started: Listening on ${port}`)
        if (callback) callback(server)
    });
   
}

module.exports = geoServer;