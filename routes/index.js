var express = require('express');
var router = express.Router();
var request = require('supertest');

var tiles = {
  "tile1": {
    "tile_details": {
      "image_url": "/images/tile1.jpg",
      "side1": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      },
      "side2": {
        "pos1": "G",
        "pos2": "G",
        "pos3": "G"
      },
      "side3": {
        "pos1": "G",
        "pos2": "G",
        "pos3": "G"
      },
      "side4": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      }
    } 
  },
  "tile2": {
    "tile_details": {
      "image_url": "/images/tile2.jpg",
      "side1": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      },
      "side2": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      },
      "side3": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      },
      "side4": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      }
    } 
  },
  "tile3": {
    "tile_details": {
      "image_url": "/images/tile3.jpg",
      "side1": {
        "pos1": "G",
        "pos2": "G",
        "pos3": "G"
      },
      "side2": {
        "pos1": "G",
        "pos2": "G",
        "pos3": "G"
      },
      "side3": {
        "pos1": "G",
        "pos2": "G",
        "pos3": "G"
      },
      "side4": {
        "pos1": "G",
        "pos2": "R",
        "pos3": "G"
      }
    } 
  }
};
var tile_deck = ["tile1","tile2","tile3"];
var game_array;
var current_tile;

/* GET home page. */
router.get('/', function(req, res, next) {
  createArray(5,5);
  console.log(game_array);
  res.render('rotate', { title: 'Carcassonne' });
});

router.get('/reset', function(req, res, next) {
  tile_deck = ["tile1","tile2","tile3"];
  res.end("Tile deck reset");
});

router.get('/get_tile', function(req, res, next) {
  if (tile_deck.length ===0) {
    var endOfTiles = {};
    endOfTiles.image_url = "http://placekitten.com/110/100/";
    res.json(endOfTiles).end();
  } else {
  var selected_tile = Math.floor((Math.random()*tile_deck.length)+1)-1;
  console.log(selected_tile);
  var tiletemp = tile_deck[selected_tile];
  current_tile = tiles[tiletemp].tile_details;
  current_tile.rotation = 1;
  console.log(tile_deck);
  tile_deck.splice(selected_tile,1);
  console.log(tile_deck);
  res.json(current_tile).end();
  }
});

router.get('/left', function(req, res, next) {
	var temp = current_tile.side1;
	current_tile.side1 = current_tile.side2;
	current_tile.side2 = current_tile.side3;
	current_tile.side3 = current_tile.side4;
	current_tile.side4 = temp;
  current_tile.rotation--;
  if (current_tile.rotation ===0) {
    current_tile.rotation = 4;
  }
	res.json(current_tile.rotation).end();
  console.log(current_tile);
});

router.get('/right', function(req, res, next) {
	var temp = current_tile.side4;
	current_tile.side4 = current_tile.side3;
	current_tile.side3 = current_tile.side2;
	current_tile.side2 = current_tile.side1;
	current_tile.side1 = temp;
  current_tile.rotation++;
  if (current_tile.rotation ===5) {
    current_tile.rotation = 1;
  }
	res.json(current_tile.rotation).end();
	console.log(current_tile);
});

router.post('/placetile', function(req, res, next) {
  //if tile sent back is same as current tile...
  console.log(req.body);
  game_array[req.body.row-1][req.body.column-1] = [current_tile, req.body.rotation];
  console.log(game_array);
  res.end();
});

function createArray(x,y) {
  game_array = new Array(x);
  for (var i = 0; i < x; i++) {
    game_array[i] = new Array(y);
  }
}

module.exports = router;
