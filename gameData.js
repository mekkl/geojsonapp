const gameArea = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            12.291984558105469, 55.75455430203406
          ],
          [
            12.278938293457031, 55.74412004299435
          ],
          [
            12.288379669189453, 55.72798009228692
          ],
          [
            12.316703796386717, 55.72759342479541
          ],
          [
            12.317047119140625, 55.73648580831824
          ],
          [
            12.335071563720703, 55.745762657730495
          ],
          [
            12.317218780517578, 55.75503730199233
          ],
          [
            12.291984558105469, 55.75455430203406
          ]
        ]
      ]
    }
  }

const players = [
    {
    "type": "Feature",
    "properties": {
      "name": "Tine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.27293014526367, 55.75407129609464
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Julie"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.274646759033203, 55.74624576655157
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kasper"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.28940963745117, 55.74006152188152
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Torben"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.298507690429688, 55.75126974369615
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mikkel"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.328548431396484, 55.745376166366704
      ]
    }
  }]

module.exports = {
    gameArea: gameArea.geometry,
    players: players
}