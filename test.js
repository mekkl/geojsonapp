const chai = require("chai");
const request = require("request")
const geoServer = require("./app");
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

        it('should return true for given point', function(done) {
            lon = '12.311296463012695';
            lat = '55.74015815824199';
            const url = `${URL}isplayerinarea/${lon}/${lat}`;

            request(url, function(err, res, data) {
                const d = JSON.parse(data);
                expect(d.status).to.be.equal(true);
                done();
            })
            
        })
        
    });


});
