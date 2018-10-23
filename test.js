const chai = require("chai");
const request = require("request");
const geoServer = require("./app");
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

    describe('isplayerinarea', function() {

        it('should return true for given point', async function() {
            lon = '12.311296463012695';
            lat = '55.74015815824199';
            const url = `${URL}locations/ispointinarea/${lon}/${lat}`;
            let json
            try{
                json = await fetch(url).then(res => res.json());
                console.log(json)
                expect(json.status).to.be.equal(true);
            } catch(err) {
                console.log(err)
            }
            
        })
        
    });


});
