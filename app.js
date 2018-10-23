const http = require('http')
const express = require('express');
const app = express();


const apiRouter = require('./routes/api/apiRouter');

app.get('/', (req, res) => {
    res.send(`
    <h2> Geo JSON Demo working resources: </h2>
    <ul>
        <li> /geoapi/locations/isplayerinarea/:lon/:lat </li>
    </ul>
    `)
});

app.use('/geoapi', apiRouter)

function geoServer(port, callback) {
    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`Server started: Listening on ${port}`)
        if (callback) callback(server)
    });
}

module.exports = geoServer;