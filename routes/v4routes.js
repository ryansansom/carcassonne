var express = require('express');
var router = express.Router();
var request = require('supertest');

var tile_master = {
  "tile1": {
    "name": "tile1",
    "url": "/images/tile1.jpg",
    "tile_split": [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","R","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]]
  },
  "tile2": {
    "name": "tile2",
    "url": "/images/tile2.jpg",
    "tile_split": [["Z","G","G","R","G","G","Z"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]]
  },
  "tile3": {
    "name": "tile3",
    "url": "/images/tile3.jpg",
    "tile_split": [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]]
  },
  "tile4": {
    "name": "tile4",
    "url": "/images/tile4.jpg",
    "tile_split": [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["Z","C","C","C","C","C","Z"]]
  },
  "tile5": {
    "name": "tile5",
    "url": "/images/tile5.jpg",
    "tile_split": [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","R","C","C","C"],["C","C","G","R","G","C","C"],["Z","G","G","R","G","G","Z"]]
  },
  "tile6": {
    "name": "tile6",
    "url": "/images/tile6.jpg",
    "tile_split": [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]]
  },
  "tile7": {
    "name": "tile7",
    "url": "/images/tile7.jpg",
    "tile_split": [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["Z","G","G","G","G","G","Z"]]
  },
  "tile8": {
    "name": "tile8",
    "url": "/images/tile8.jpg",
    "tile_split": [["Z","C","C","C","C","C","Z"],["G","G","C","C","C","G","G"],["G","G","G","G","G","G","G"],["G","G","G","R","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]]
  }
}
  //following for /maptile
  var obj = {};
  var checkedArr;
  var array;
  var tempArr;

var new_tiles = JSON.parse(JSON.stringify(tile_master));
//var tile_deck = ["tile1","tile2"];
//var tile_deck = ["tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8"];
var tile_deck = ["tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8"];
var deckSize = tile_deck.length;

var game_array;
var detail_array;
var checked_array;
var current_tile;

router.get('/generate', function(req, res, next) {
  if (!game_array) {
    game_array = createArray(2*tile_deck.length-1,2*tile_deck.length-1); //needs to be created differently
    detail_array = createArray(7*(2*tile_deck.length-1),7*(2*tile_deck.length-1));
    checked_array = createArray(7*(2*tile_deck.length-1),7*(2*tile_deck.length-1));
    console.log(game_array);
  }
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

router.get('/test', function(req, res, next) {
  var tile1 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","R","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  var tile2 = [["Z","G","G","R","G","G","Z"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  var tile3 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  var tile4 = [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["Z","C","C","C","C","C","Z"]];
  var tile5 = [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","R","C","C","C"],["C","C","G","R","G","C","C"],["Z","G","G","R","G","G","Z"]];
  var tile6 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  var tile7 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["Z","G","G","G","G","G","Z"]];
  var tile8 = [["Z","C","C","C","C","C","Z"],["G","G","C","C","C","G","G"],["G","G","G","G","G","G","G"],["G","G","G","R","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  for (var i=0;i<7;i++) {
    for (var j=0;j<7;j++) {
      detail_array[(0)*7+i][(0)*7+j] = tile3[i][j]; //change to above
      checked_array[(0)*7+i][(0)*7+j] = "N";
      detail_array[(1)*7+i][(0)*7+j] = tile2[i][j];;
      checked_array[(1)*7+i][(0)*7+j] = "N";
      detail_array[(1)*7+i][(1)*7+j] = tile2[i][j];
      checked_array[(1)*7+i][(1)*7+j] = "N";
      detail_array[(1)*7+i][(2)*7+j] = tile6[i][j];
      checked_array[(1)*7+i][(2)*7+j] = "N";
      detail_array[(0)*7+i][(2)*7+j] = tile7[i][j];
      checked_array[(0)*7+i][(2)*7+j] = "N";
    }
  }
  res.json("Done test");
});

router.get('/getboard', function(req, res, next) {
  res.json(game_array);
});

router.post('/placetile', function(req, res, next) {
  //send this function a json body in form of {"row": 1, "column": 1, "rotation": 4, "placedMan": 26}, set content type header to application/json.
  console.log(current_tile);
  current_tile.placedMan = req.body.placedMan; //could need to be moved after rotate depending on how placement is handled client side
  rotateTile(req.body.rotation);
  if (!game_array[deckSize-1][deckSize-1]) {
    //add a check for valid player placement (ie not on river, settlement or corner)
    //mapTile(3,3,req.body.placedMan)
    game_array[deckSize-1][deckSize-1] = current_tile;
    for (var i=0;i<7;i++) {
      for (var j=0;j<7;j++) {
        detail_array[(deckSize-1)*7+i][(deckSize-1)*7+j] = current_tile.tile_split[i][j];
        checked_array[(deckSize-1)*7+i][(deckSize-1)*7+j] = "N";
      }
    }
    res.json(current_tile);
  } else if (checkAdjPresent(req.body.row-1,req.body.column-1)&&checkAbove(req.body.row-1,req.body.column-1)&&checkBelow(req.body.row-1,req.body.column-1)&&checkLeft(req.body.row-1,req.body.column-1)&&checkRight(req.body.row-1,req.body.column-1)) {
    //add a check for valid player placement
    game_array[req.body.row-1][req.body.column-1] = current_tile;
    for (var i=0;i<7;i++) {
      for (var j=0;j<7;j++) {
        detail_array[(req.body.row-1)*7+i][(req.body.column-1)*7+j] = current_tile.tile_split[i][j];
        checked_array[(req.body.row-1)*7+i][(req.body.column-1)*7+j] = "N";
      }
    }
    res.json(current_tile);
  } else {
    res.status(400).send("Invalid tile placement")
  }
  console.log(game_array);
});

router.get('/maptile', function(req,res) {
  //tile1 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","R","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  //tile2 = [["Z","G","G","R","G","G","Z"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  //tile3 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  //tile4 = [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["Z","C","C","C","C","C","Z"]];
  //tile5 = [["Z","C","C","C","C","C","Z"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","C","C","C","C"],["C","C","C","R","C","C","C"],["C","C","G","R","G","C","C"],["Z","G","G","R","G","G","Z"]];
  //tile6 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["R","R","R","S","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  //tile7 = [["Z","G","G","G","G","G","Z"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","M","G","G","G"],["G","G","G","G","G","G","G"],["G","G","G","G","G","G","G"],["Z","G","G","G","G","G","Z"]];
  //tile8 = [["Z","C","C","C","C","C","Z"],["G","G","C","C","C","G","G"],["G","G","G","G","G","G","G"],["G","G","G","R","R","R","R"],["G","G","G","R","G","G","G"],["G","G","G","R","G","G","G"],["Z","G","G","R","G","G","Z"]];
  array = detail_array;
  checkedArr =[["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"],["N","N","N","N","N","N","N"]];
  var Rcnt = 1;
  var Gcnt = 1;
  var Zcnt = 1;
  var Scnt = 1;
  var Mcnt = 1;
  var Ccnt = 1;
  //main code
  var temp = checkedAll();  
while (temp) {
  var x = temp[0];
  var y = temp[1];
  tempArr = [];
  tempArr.push([x,y]);
  checked_array[x][y] = "Y";
  var cnt = 0;
  while (tempArr[cnt]) {
   surround(tempArr[cnt][0],tempArr[cnt][1]);
   cnt++;
  }
  if (array[x][y] == "Z") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["Z"+Zcnt] = tempArr;
    Zcnt++;
  } else if (array[x][y] == "G") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["G"+Gcnt] = tempArr;
    Gcnt++;
  } else if (array[x][y] == "R") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["R"+Rcnt] = tempArr;
    Rcnt++;
  } else if (array[x][y] == "S") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["S"+Scnt] = tempArr;
    Scnt++;
  } else if (array[x][y] == "M") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["M"+Mcnt] = tempArr;
    Mcnt++;
  } else if (array[x][y] == "C") {
    if (!obj[array[x][y]]) {
      obj[array[x][y]] = {};
    }
    tempArr.sort();
    obj[array[x][y]]["C"+Ccnt] = tempArr;
    Ccnt++;
  }
  temp = checkedAll();
}
res.send(obj);
});

//  /test functions
function checkedAll() {
  for (var i=0;i<(2*deckSize-1);i++) {
    for (var j=0;j<(2*deckSize-1);j++) {
      if (checked_array[7*i][7*j]) {
        for (var k=0;k<7;k++) {
          for (var l=0;l<7;l++) {
            if (checked_array[7*i+k][7*j+l] == "N") {
              return [7*i+k,7*j+l];
            }
          }
        }
      }
    }
  }
  return false;
}

function surround(i,j) {
      var x2 = "is the num " + i;
      var y2 = "is the num " + j;
      var x3 = Number(x2.substr(11,x2.length-11));
      var y3 = Number(y2.substr(11,y2.length-11));
      var x = x3;
      var y = y3;
      while (y>-1) {
        if (left(x,y)) {
          //do something
          tempArr.push([x,y-1]);
          checked_array[x][y-1] = "Y";
        } else {
          break;
        }
        y--;
      }
      x = x3;
      y = y3;
      while (x>-1) {
        if (up(x,y)) {
          //do something
          tempArr.push([x-1,y]);
          checked_array[x-1][y] = "Y";
        } else {
          break;
        }
        x--;
      }
      x = x3;
      y = y3;
      while (y<7*(2*deckSize-1)) {
        if (right(x,y)) {
          //do something
          tempArr.push([x,y+1]);
          checked_array[x][y+1] = "Y";
        } else {
          break;
        }
        y++;
      }
      x = x3;
      y = y3;
      while (x<7*(2*deckSize-1)) {
        if (down(x,y)) {
          //do something
          tempArr.push([x+1,y]);
          checked_array[x+1][y] = "Y";
        } else {
          break;
        }
        x++;
      }
}

function up(i,j) {
  if (i===0) {
    return false;
  } else if (!checked_array[i-1][j]) {
    return false;
  } else if (checked_array[i-1][j] == "Y") {
    return false;
  } else if (array[i][j]===array[i-1][j]) {
    return true;
  } else {
    return false;
  }
}

function down(i,j) {
  if (i===7*(2*deckSize-1)-1) {
    return false;
  } else if (!checked_array[i+1][j]) {
    return false;
  } else if (checked_array[i+1][j] == "Y") {
    return false;
  } else if (array[i][j]===array[i+1][j]) {
    return true;
  } else {
    return false;
  }
}

function left(i,j) {
  if (j===0) {
    return false;
  } else if (!checked_array[i][j-1]) {
    return false;
  } else if (checked_array[i][j-1] == "Y") {
    return false;
  } else if (array[i][j]===array[i][j-1]) {
    return true;
  } else {
    return false;
  }
}

function right(i,j) {
  if (j===7*(2*deckSize-1)-1) {
    return false;
  } else if (!checked_array[i][j+1]) {
    return false;
  } else if (checked_array[i][j+1] == "Y") {
    return false;
  } else if (array[i][j]===array[i][j+1]) {
    return true;
  } else {
    return false;
  }
}

//main functions

function mapTile(placedMan) {
  var checkedArr =[];
  for (var i=1;i<=7;i++) {
    for (var j=1;j<=7;j++) {
      checkedArr.push([i,j]);
    }
  }
  var row = placedMan%7;
  if (row===0) {
    row = 7;
  }
  var col = ((placedMan - row)/7)+1;
  if (current_tile.tile_split["r"+row+"c"+col]==="Z" || current_tile.tile_split["r"+row+"c"+col]==="Y" || current_tile.tile_split["r"+row+"c"+col]==="S") {
    //cant place man here, so invalid.
  } else {

  }
}

function scoreTracker(placedMan) {
  if (placedMan == -1) {
    //add the tile to current
  } else {

  }
}

function checkAdjPresent(row,col) {
      if (row!==0) {
        if (game_array[row-1][col]) {
          return true;
        }
      }
      if (col!==0) {
        if (game_array[row][col-1]) {
          return true;
        }
      }
      if (col+1<2*deckSize-1) {
        if (game_array[row][col+1]) {
          return true;
        }
      }
      rowCheck = row + 1;
      colCheck = col;
      if (row+1<2*deckSize-1) {
        if (game_array[row+1][col]) {
          return true;
        }
      }
      console.log("checkAdjPresent false");
      return false;
}
//can tile validly be placed here?
function checkAbove(row,col) {
      if (row!==0) {
        if (game_array[row-1][col]) {
          if (game_array[row-1][col].tile_split[6][0]===current_tile.tile_split[0][0]&&game_array[row-1][col].tile_split[6][1]===current_tile.tile_split[0][1]&&game_array[row-1][col].tile_split[6][2]===current_tile.tile_split[0][2]&&game_array[row-1][col].tile_split[6][3]===current_tile.tile_split[0][3]&&game_array[row-1][col].tile_split[6][4]===current_tile.tile_split[0][4]&&game_array[row-1][col].tile_split[6][5]===current_tile.tile_split[0][5]&&game_array[row-1][col].tile_split[6][6]===current_tile.tile_split[0][6]) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      console.log("checkAbove false");
      return false;
}

function checkBelow(row,col) {
      if (row+1<2*deckSize-1) {
        if (game_array[row+1][col]) {
          if (game_array[row+1][col].tile_split[0][0]===current_tile.tile_split[6][0]&&game_array[row+1][col].tile_split[0][1]===current_tile.tile_split[6][1]&&game_array[row+1][col].tile_split[0][2]===current_tile.tile_split[6][2]&&game_array[row+1][col].tile_split[0][3]===current_tile.tile_split[6][3]&&game_array[row+1][col].tile_split[0][4]===current_tile.tile_split[6][4]&&game_array[row+1][col].tile_split[0][5]===current_tile.tile_split[6][5]&&game_array[row+1][col].tile_split[0][6]===current_tile.tile_split[6][6]) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      console.log("checkBelow false");
      return false;
}

function checkLeft(row,col) {
      if (col!==0) {
        if (game_array[row][col-1]) {
          if (game_array[row][col-1].tile_split[0][6]===current_tile.tile_split[0][0]&&game_array[row][col-1].tile_split[1][6]===current_tile.tile_split[1][0]&&game_array[row][col-1].tile_split[2][6]===current_tile.tile_split[2][0]&&game_array[row][col-1].tile_split[3][6]===current_tile.tile_split[3][0]&&game_array[row][col-1].tile_split[4][6]===current_tile.tile_split[4][0]&&game_array[row][col-1].tile_split[5][6]===current_tile.tile_split[5][0]&&game_array[row][col-1].tile_split[6][6]===current_tile.tile_split[6][0]) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      console.log("checkLeft false");
      return false;
}

function checkRight(row,col) {
      if (col<2*deckSize-1) {
        if (game_array[row][col+1]) {
          if (game_array[row][col+1].tile_split[0][0]===current_tile.tile_split[0][6]&&game_array[row][col+1].tile_split[1][0]===current_tile.tile_split[1][6]&&game_array[row][col+1].tile_split[2][0]===current_tile.tile_split[2][6]&&game_array[row][col+1].tile_split[3][0]===current_tile.tile_split[3][6]&&game_array[row][col+1].tile_split[4][0]===current_tile.tile_split[4][6]&&game_array[row][col+1].tile_split[5][0]===current_tile.tile_split[5][6]&&game_array[row][col+1].tile_split[6][0]===current_tile.tile_split[6][6]) {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
      console.log("checkRight false");
      return false;
}

//is there a tile here?
function checkAboveTile(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split[6][0]===current_tile.tile_split[0][0]&&game_array[rowCheck][colCheck].tile_split[6][1]===current_tile.tile_split[0][1]&&game_array[rowCheck][colCheck].tile_split[6][2]===current_tile.tile_split[0][2]&&game_array[rowCheck][colCheck].tile_split[6][3]===current_tile.tile_split[0][3]&&game_array[rowCheck][colCheck].tile_split[6][4]===current_tile.tile_split[0][4]&&game_array[rowCheck][colCheck].tile_split[6][5]===current_tile.tile_split[0][5]&&game_array[rowCheck][colCheck].tile_split[6][6]===current_tile.tile_split[0][6]) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return false;
}

function checkBelowTile(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split[0][0]===current_tile.tile_split[6][0]&&game_array[rowCheck][colCheck].tile_split[0][1]===current_tile.tile_split[6][1]&&game_array[rowCheck][colCheck].tile_split[0][2]===current_tile.tile_split[6][2]&&game_array[rowCheck][colCheck].tile_split[0][3]===current_tile.tile_split[6][3]&&game_array[rowCheck][colCheck].tile_split[0][4]===current_tile.tile_split[6][4]&&game_array[rowCheck][colCheck].tile_split[0][5]===current_tile.tile_split[6][5]&&game_array[rowCheck][colCheck].tile_split[0][6]===current_tile.tile_split[6][6]) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return false;
}

function checkLeftTile(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split[0][6]===current_tile.tile_split[0][0]&&game_array[rowCheck][colCheck].tile_split[1][6]===current_tile.tile_split[1][0]&&game_array[rowCheck][colCheck].tile_split[2][6]===current_tile.tile_split[2][0]&&game_array[rowCheck][colCheck].tile_split[3][6]===current_tile.tile_split[3][0]&&game_array[rowCheck][colCheck].tile_split[4][6]===current_tile.tile_split[4][0]&&game_array[rowCheck][colCheck].tile_split[5][6]===current_tile.tile_split[5][0]&&game_array[rowCheck][colCheck].tile_split[6][6]===current_tile.tile_split[6][0]) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return false;
}

function checkRightTile(row,col) {
      var rowCheck = row - 1;
      var colCheck = col;
      if (rowCheck!==-1) {
        if (game_array[rowCheck][colCheck]) {
          if (game_array[rowCheck][colCheck].tile_split[0][0]===current_tile.tile_split[0][6]&&game_array[rowCheck][colCheck].tile_split[1][0]===current_tile.tile_split[1][6]&&game_array[rowCheck][colCheck].tile_split[2][0]===current_tile.tile_split[2][6]&&game_array[rowCheck][colCheck].tile_split[3][0]===current_tile.tile_split[3][6]&&game_array[rowCheck][colCheck].tile_split[4][0]===current_tile.tile_split[4][6]&&game_array[rowCheck][colCheck].tile_split[5][0]===current_tile.tile_split[5][6]&&game_array[rowCheck][colCheck].tile_split[6][0]===current_tile.tile_split[6][6]) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      return false;
}

function rotateTile(rotation) {
      var newArr = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
  if (rotation == 1) {
    //no need to do anything to tile
  } else if (rotation == 2) {
    for (var i=0;i<7;i++) {
      for (var j=0;j<7;j++) {
        newArr[j][(6-i)] = current_tile.tile_split[i][j];
      }
    }
    current_tile.tile_split = newArr;
  } else if (rotation == 3) {
    for (var i=0;i<7;i++) {
      for (var j=0;j<7;j++) {
        newArr[(6-i)][(6-j)] = current_tile.tile_split[i][j];
      }
    }
    current_tile.tile_split = newArr;
  } else if (rotation == 4) {
    for (var i=0;i<7;i++) {
      for (var j=0;j<7;j++) {
        newArr[6-j][i] = current_tile.tile_split[i][j];
      }
    }
    current_tile.tile_split = newArr;
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