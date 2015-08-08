var express = require('express');
var router = express.Router();
var request = require('supertest');

var tile_master = {
  "tile1": {
    "name": "tile1",
    "url": "/images/tile1.jpg",
    "placedMan": -1,
    "tile_split": {
      "p01": {
        "type": "G",
        "owner": []
      },
      "p02": {
        "type": "G",
        "owner": []
      },
      "p03": {
        "type": "G",
        "owner": []
      },
      "p04": {
        "type": "G",
        "owner": []
      },
      "p05": {
        "type": "G",
        "owner": []
      },
      "p06": {
        "type": "G",
        "owner": []
      },
      "p07": {
        "type": "G",
        "owner": []
      },
      "p08": {
        "type": "G",
        "owner": []
      },
      "p09": {
        "type": "G",
        "owner": []
      },
      "p10": {
        "type": "G",
        "owner": []
      },
      "p11": {
        "type": "G",
        "owner": []
      },
      "p12": {
        "type": "G",
        "owner": []
      },
      "p13": {
        "type": "R",
        "owner": []
      },
      "p14": {
        "type": "R",
        "owner": []
      },
      "p15": {
        "type": "R",
        "owner": []
      },
      "p16": {
        "type": "G",
        "owner": []
      },
      "p17": {
        "type": "G",
        "owner": []
      },
      "p18": {
        "type": "G",
        "owner": []
      },
      "p19": {
        "type": "G",
        "owner": []
      },
      "p20": {
        "type": "R",
        "owner": []
      },
      "p21": {
        "type": "G",
        "owner": []
      },
      "p22": {
        "type": "G",
        "owner": []
      },
      "p23": {
        "type": "G",
        "owner": []
      },
      "p24": {
        "type": "G",
        "owner": []
      },
      "p25": {
        "type": "G",
        "owner": []
      },
      "p26": {
        "type": "R",
        "owner": []
      },
      "p27": {
        "type": "G",
        "owner": []
      },
      "p28": {
        "type": "G",
        "owner": []
      },
      "p29": {
        "type": "G",
        "owner": []
      }
    }
  },
  "tile2": {
    "name": "tile2",
    "url": "/images/tile2.jpg",
    "placedMan": -1,
    "tile_split": {
      "p01": {
        "type": "G",
        "owner": []
      },
      "p02": {
        "type": "G",
        "owner": []
      },
      "p03": {
        "type": "G",
        "owner": []
      },
      "p04": {
        "type": "R",
        "owner": []
      },
      "p05": {
        "type": "G",
        "owner": []
      },
      "p06": {
        "type": "G",
        "owner": []
      },
      "p07": {
        "type": "G",
        "owner": []
      },
      "p08": {
        "type": "G",
        "owner": []
      },
      "p09": {
        "type": "G",
        "owner": []
      },
      "p10": {
        "type": "R",
        "owner": []
      },
      "p11": {
        "type": "G",
        "owner": []
      },
      "p12": {
        "type": "G",
        "owner": []
      },
      "p13": {
        "type": "R",
        "owner": []
      },
      "p14": {
        "type": "R",
        "owner": []
      },
      "p15": {
        "type": "S",
        "owner": []
      },
      "p16": {
        "type": "R",
        "owner": []
      },
      "p17": {
        "type": "R",
        "owner": []
      },
      "p18": {
        "type": "G",
        "owner": []
      },
      "p19": {
        "type": "G",
        "owner": []
      },
      "p20": {
        "type": "R",
        "owner": []
      },
      "p21": {
        "type": "G",
        "owner": []
      },
      "p22": {
        "type": "G",
        "owner": []
      },
      "p23": {
        "type": "G",
        "owner": []
      },
      "p24": {
        "type": "G",
        "owner": []
      },
      "p25": {
        "type": "G",
        "owner": []
      },
      "p26": {
        "type": "R",
        "owner": []
      },
      "p27": {
        "type": "G",
        "owner": []
      },
      "p28": {
        "type": "G",
        "owner": []
      },
      "p29": {
        "type": "G",
        "owner": []
      }
    }
  },
  "tile3": {
    "name": "tile3",
    "url": "/images/tile3.jpg",
    "placedMan": -1,
    "tile_split": {
      "p01": {
        "type": "G",
        "owner": []
      },
      "p02": {
        "type": "G",
        "owner": []
      },
      "p03": {
        "type": "G",
        "owner": []
      },
      "p04": {
        "type": "G",
        "owner": []
      },
      "p05": {
        "type": "G",
        "owner": []
      },
      "p06": {
        "type": "G",
        "owner": []
      },
      "p07": {
        "type": "G",
        "owner": []
      },
      "p08": {
        "type": "G",
        "owner": []
      },
      "p09": {
        "type": "G",
        "owner": []
      },
      "p10": {
        "type": "G",
        "owner": []
      },
      "p11": {
        "type": "G",
        "owner": []
      },
      "p12": {
        "type": "G",
        "owner": []
      },
      "p13": {
        "type": "G",
        "owner": []
      },
      "p14": {
        "type": "G",
        "owner": []
      },
      "p15": {
        "type": "M",
        "owner": []
      },
      "p16": {
        "type": "G",
        "owner": []
      },
      "p17": {
        "type": "G",
        "owner": []
      },
      "p18": {
        "type": "G",
        "owner": []
      },
      "p19": {
        "type": "G",
        "owner": []
      },
      "p20": {
        "type": "R",
        "owner": []
      },
      "p21": {
        "type": "G",
        "owner": []
      },
      "p22": {
        "type": "G",
        "owner": []
      },
      "p23": {
        "type": "G",
        "owner": []
      },
      "p24": {
        "type": "G",
        "owner": []
      },
      "p25": {
        "type": "G",
        "owner": []
      },
      "p26": {
        "type": "R",
        "owner": []
      },
      "p27": {
        "type": "G",
        "owner": []
      },
      "p28": {
        "type": "G",
        "owner": []
      },
      "p29": {
        "type": "G",
        "owner": []
      }
    }
  }
}

var new_tiles = JSON.parse(JSON.stringify(tile_master));
var tile_deck = ["tile1","tile2","tile3"];
var deckSize = tile_deck.length;
var game_array;
var current_tile;
var scorer = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  game_array = createArray(2*tile_deck.length-1,2*tile_deck.length-1); //needs to be created differently
  console.log(game_array);
  res.render('rotate', { title: 'Carcassonne' });
});

router.get('/generate', function(req, res, next) {
  var rand = Math.floor((Math.random()*tile_deck.length)+1)-1;
  current_tile = new_tiles[tile_deck[rand]];
  console.log(current_tile);
  var tileToClient = JSON.parse(JSON.stringify(current_tile));
  delete tileToClient.tile_split;
  tileToClient.rotation = 1;
  tile_deck.splice(rand,1);
  console.log(tile_deck);
  res.json(tileToClient).end();
  console.log(current_tile);
});

router.post('/placetile', function(req, res, next) {
  //send this function a json body in form of {"row": 1, "column": 1, "rotation": 4, "placedMan": 26}, set content type header to application/json.
  console.log(current_tile);
  current_tile.placedMan = req.body.placedMan; //could need to be moved after rotate depending on how placement is handled client side
  rotateTile(req.body.rotation);
  if (!game_array[deckSize-1][deckSize-1]) {
    //add a check for valid player placement
    scoreTracker(req.body.placedMan);
    game_array[deckSize-1][deckSize-1] = current_tile;
    res.json(current_tile);
  } else if (checkAdjPresent(req.body.row-1,req.body.column-1)&&checkAbove(req.body.row-1,req.body.column-1)&&checkBelow(req.body.row-1,req.body.column-1)&&checkLeft(req.body.row-1,req.body.column-1)&&checkRight(req.body.row-1,req.body.column-1)) {
    //add a check for valid player placement
    scoreTracker(req.body.placedMan);
    game_array[req.body.row-1][req.body.column-1] = current_tile;
    res.json(current_tile);
  } else {
    res.status(400).send("Invalid tile placement")
  }
  console.log(game_array);
});

function mapTile(row,col,placedMan) {
  if (checkAboveTile(row,col)) {
    
  }

}

function scoreTracker(placedMan) {
  if (placedMan == -1) {
    //add the tile to current
  } else {

  }
}

function checkAdjPresent(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          return true;
        }
      }
      rowCheck = row;
      colCheck = col-1;
      if (colCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          return true;
        }
      }
      rowCheck = row;
      colCheck = col+1;
      if (colCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          return true;
        }
      }
      rowCheck = row + 1;
      colCheck = col;
      if (rowCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          return true;
        }
      }
      return false;
}

function checkAbove(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p24.type===current_tile.tile_split.p02.type&&game_array[rowCheck][colCheck].tile_split.p25.type===current_tile.tile_split.p03.type&&game_array[rowCheck][colCheck].tile_split.p26.type===current_tile.tile_split.p04.type&&game_array[rowCheck][colCheck].tile_split.p27.type===current_tile.tile_split.p05.type&&game_array[rowCheck][colCheck].tile_split.p28.type===current_tile.tile_split.p06.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      return false;
}

function checkBelow(row,col) {
      var rowCheck = row + 1;
      var colCheck = col;
      if (rowCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          if (current_tile.tile_split.p24.type===game_array[rowCheck][colCheck].tile_split.p02.type&&current_tile.tile_split.p25.type===game_array[rowCheck][colCheck].tile_split.p03.type&&current_tile.tile_split.p26.type===game_array[rowCheck][colCheck].tile_split.p04.type&&current_tile.tile_split.p27.type===game_array[rowCheck][colCheck].tile_split.p05.type&&current_tile.tile_split.p28.type===game_array[rowCheck][colCheck].tile_split.p06.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      return false;
}

function checkLeft(row,col) {
      var rowCheck = row;
      var colCheck = col-1;
      if (colCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p07.type===current_tile.tile_split.p01.type&&game_array[rowCheck][colCheck].tile_split.p12.type===current_tile.tile_split.p08.type&&game_array[rowCheck][colCheck].tile_split.p17.type===current_tile.tile_split.p13.type&&game_array[rowCheck][colCheck].tile_split.p22.type===current_tile.tile_split.p18.type&&game_array[rowCheck][colCheck].tile_split.p29.type===current_tile.tile_split.p23.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      return false;
}

function checkRight(row,col) {
      var rowCheck = row;
      var colCheck = col+1;
      if (colCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p01.type===current_tile.tile_split.p07.type&&game_array[rowCheck][colCheck].tile_split.p08.type===current_tile.tile_split.p12.type&&game_array[rowCheck][colCheck].tile_split.p13.type===current_tile.tile_split.p17.type&&game_array[rowCheck][colCheck].tile_split.p18.type===current_tile.tile_split.p22.type&&game_array[rowCheck][colCheck].tile_split.p23.type===current_tile.tile_split.p29.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      return false;
}
//next 4 functions check if a tile is present
function checkAboveTile(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p24.type===current_tile.tile_split.p02.type&&game_array[rowCheck][colCheck].tile_split.p25.type===current_tile.tile_split.p03.type&&game_array[rowCheck][colCheck].tile_split.p26.type===current_tile.tile_split.p04.type&&game_array[rowCheck][colCheck].tile_split.p27.type===current_tile.tile_split.p05.type&&game_array[rowCheck][colCheck].tile_split.p28.type===current_tile.tile_split.p06.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
      return false;
}

function checkBelowTile(row,col) {
      var rowCheck = row + 1;
      var colCheck = col;
      if (rowCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          if (current_tile.tile_split.p24.type===game_array[rowCheck][colCheck].tile_split.p02.type&&current_tile.tile_split.p25.type===game_array[rowCheck][colCheck].tile_split.p03.type&&current_tile.tile_split.p26.type===game_array[rowCheck][colCheck].tile_split.p04.type&&current_tile.tile_split.p27.type===game_array[rowCheck][colCheck].tile_split.p05.type&&current_tile.tile_split.p28.type===game_array[rowCheck][colCheck].tile_split.p06.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
      return false;
}

function checkLeftTile(row,col) {
      var rowCheck = row;
      var colCheck = col-1;
      if (colCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p07.type===current_tile.tile_split.p01.type&&game_array[rowCheck][colCheck].tile_split.p12.type===current_tile.tile_split.p08.type&&game_array[rowCheck][colCheck].tile_split.p17.type===current_tile.tile_split.p13.type&&game_array[rowCheck][colCheck].tile_split.p22.type===current_tile.tile_split.p18.type&&game_array[rowCheck][colCheck].tile_split.p29.type===current_tile.tile_split.p23.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
      return false;
}

function checkRightTile(row,col) {
      var rowCheck = row;
      var colCheck = col+1;
      if (colCheck<2*deckSize-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split.p01.type===current_tile.tile_split.p07.type&&game_array[rowCheck][colCheck].tile_split.p08.type===current_tile.tile_split.p12.type&&game_array[rowCheck][colCheck].tile_split.p13.type===current_tile.tile_split.p17.type&&game_array[rowCheck][colCheck].tile_split.p18.type===current_tile.tile_split.p22.type&&game_array[rowCheck][colCheck].tile_split.p23.type===current_tile.tile_split.p29.type) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
      return false;
}

function rotateTile(rotation) {
  if (rotation == 1) {
    //no need to do anything to tile
  } else if (rotation == 2) {
    var old01 = current_tile.tile_split.p01;
    var old02 = current_tile.tile_split.p02;
    var old03 = current_tile.tile_split.p03;
    var old04 = current_tile.tile_split.p04;
    var old08 = current_tile.tile_split.p08;
    var old09 = current_tile.tile_split.p09;
    var old10 = current_tile.tile_split.p10;
    var old05 = current_tile.tile_split.p05;
    var old06 = current_tile.tile_split.p06;
    var old07 = current_tile.tile_split.p07;
    var old11 = current_tile.tile_split.p11;
    var old12 = current_tile.tile_split.p12;
    var old16 = current_tile.tile_split.p16;
    var old17 = current_tile.tile_split.p17;
    current_tile.tile_split.p01 = current_tile.tile_split.p29;
    current_tile.tile_split.p02 = current_tile.tile_split.p28;
    current_tile.tile_split.p03 = current_tile.tile_split.p27;
    current_tile.tile_split.p04 = current_tile.tile_split.p26;
    current_tile.tile_split.p08 = current_tile.tile_split.p22;
    current_tile.tile_split.p09 = current_tile.tile_split.p21;
    current_tile.tile_split.p10 = current_tile.tile_split.p20;
    current_tile.tile_split.p05 = current_tile.tile_split.p25;
    current_tile.tile_split.p06 = current_tile.tile_split.p24;
    current_tile.tile_split.p07 = current_tile.tile_split.p23;
    current_tile.tile_split.p11 = current_tile.tile_split.p19;
    current_tile.tile_split.p12 = current_tile.tile_split.p18;
    current_tile.tile_split.p16 = current_tile.tile_split.p14;
    current_tile.tile_split.p17 = current_tile.tile_split.p13;
    current_tile.tile_split.p29 = old01;
    current_tile.tile_split.p28 = old02;
    current_tile.tile_split.p27 = old03;
    current_tile.tile_split.p26 = old04;
    current_tile.tile_split.p22 = old08;
    current_tile.tile_split.p21 = old09;
    current_tile.tile_split.p20 = old10;
    current_tile.tile_split.p25 = old05;
    current_tile.tile_split.p24 = old06;
    current_tile.tile_split.p23 = old07;
    current_tile.tile_split.p19 = old11;
    current_tile.tile_split.p18 = old12;
    current_tile.tile_split.p14 = old16;
    current_tile.tile_split.p13 = old17;
  } else if (rotation == 3) {

  } else if (rotation == 4) {
    var old01 = current_tile.tile_split.p01;
    var old02 = current_tile.tile_split.p02;
    var old03 = current_tile.tile_split.p03;
    var old04 = current_tile.tile_split.p04;
    var old08 = current_tile.tile_split.p08;
    var old09 = current_tile.tile_split.p09;
    var old10 = current_tile.tile_split.p10;
    current_tile.tile_split.p01 = current_tile.tile_split.p06;
    current_tile.tile_split.p02 = current_tile.tile_split.p07;
    current_tile.tile_split.p03 = current_tile.tile_split.p12;
    current_tile.tile_split.p04 = current_tile.tile_split.p17;
    current_tile.tile_split.p08 = current_tile.tile_split.p05;
    current_tile.tile_split.p09 = current_tile.tile_split.p11;
    current_tile.tile_split.p10 = current_tile.tile_split.p16;
    current_tile.tile_split.p06 = current_tile.tile_split.p29;
    current_tile.tile_split.p07 = current_tile.tile_split.p28;
    current_tile.tile_split.p12 = current_tile.tile_split.p27;
    current_tile.tile_split.p17 = current_tile.tile_split.p26;
    current_tile.tile_split.p05 = current_tile.tile_split.p22;
    current_tile.tile_split.p11 = current_tile.tile_split.p21;
    current_tile.tile_split.p16 = current_tile.tile_split.p20;
    current_tile.tile_split.p29 = current_tile.tile_split.p24;
    current_tile.tile_split.p28 = current_tile.tile_split.p23;
    current_tile.tile_split.p27 = current_tile.tile_split.p18;
    current_tile.tile_split.p26 = current_tile.tile_split.p13;
    current_tile.tile_split.p22 = current_tile.tile_split.p25;
    current_tile.tile_split.p21 = current_tile.tile_split.p19;
    current_tile.tile_split.p20 = current_tile.tile_split.p14;
    current_tile.tile_split.p24 = old01;
    current_tile.tile_split.p23 = old02;
    current_tile.tile_split.p18 = old03;
    current_tile.tile_split.p13 = old04;
    current_tile.tile_split.p25 = old08;
    current_tile.tile_split.p19 = old09;
    current_tile.tile_split.p14 = old10;
  } else {
    console.log("Invalid rotation - no change made");
  }
}

function createArray(x,y) {
  var array = new Array(x);
  for (var i = 0; i < x; i++) {
    array[i] = new Array(y);
  }
  return array;
}

module.exports = router;