const chai = require("chai");
const geoServer = require("../app");
const fetch = require('node-fetch');
const expect = chai.expect;
const PORT = 2345;
const URL = `http://localhost:${PORT}/geoapi/`;
let server;

describe('Geo API Test', function () {

    before(function(done) {
        this.timeout(5000);
        geoServer(PORT, function (s) {
            server = s;
            done();
        });
    });

    after(function(done) {
        server.close();
        done();
    });

    describe('/ispointinarea/*', function() {
        it('should return true for the given point', async function() {
            lon = '12.311296463012695';
            lat = '55.74015815824199';
            const url = `${URL}locations/ispointinarea/${lon}/${lat}`;
            let json
            try{
                json = await fetch(url).then(res => res.json());
                expect(json.status).to.be.equal(true);
            } catch(err) {
                chai.assert.fail(json.status, true, err);
            }
        })
    });

    describe('/distancetoplayer/*', function() {
        it('should return a distance of 6647.747245275373 meters to Mikkel', async function() {
            lon = '12.434686124324799';
            lat = '55.74316131585534';
            player = 'Mikkel';
            const url = `${URL}locations/distancetoplayer/${lon}/${lat}/${player}`;
            let json
            try{
                json = await fetch(url).then(res => res.json());
                expect(json.distance).to.be.equal(6647.747245275373);
            } catch(err) {
                chai.assert.fail(json.distance, 6647.747245275373, err);
            }
        })
    });

    describe('/playersinradius/*', function() {
        it('should return two players (Tine and Julie)', async function() {
            lon = '12.280912399291992';
            lat = '55.74991719810886';
            rad = '700';
            const url = `${URL}locations/playersinradius/${lon}/${lat}/${rad}`;
            let json
            try{
                json = await fetch(url).then(res => res.json());
                expect(json.nearbyPlayers.length).to.be.equal(2);
            } catch(err) {
                chai.assert.fail(json.nearbyPlayers.length, 2, err);
            }
        })
    });


});
