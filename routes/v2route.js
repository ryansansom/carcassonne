var express = require('express');
var router = express.Router();

var tile_master = {
    "road2sw": {
        "name": "road2sw",
        "url": "/images/tile1.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["R", "R", "R", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "road4": {
        "name": "road4",
        "url": "/images/tile2.jpg",
        "tile_split": [
            ["Z", "G", "G", "R", "G", "G", "Z"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["R", "R", "R", "S", "R", "R", "R"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "monr": {
        "name": "monr",
        "url": "/images/tile3.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "M", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city4": {
        "name": "city4",
        "url": "/images/tile4.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["Z", "C", "C", "C", "C", "C", "Z"]
        ]
    },
    "city3sr": {
        "name": "city3sr",
        "url": "/images/tile5.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "R", "C", "C", "C"],
            ["C", "C", "G", "R", "G", "C", "C"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "road3": {
        "name": "road3",
        "url": "/images/tile6.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["R", "R", "R", "S", "R", "R", "R"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "mon": {
        "name": "mon",
        "url": "/images/tile7.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "M", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city1rse": {
        "name": "city1rse",
        "url": "/images/tile8.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "R", "R", "R", "R"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city3": {
        "name": "city3",
        "url": "/images/tile9.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "G", "C", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city3r": {
        "name": "city3r",
        "url": "/images/tile10.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "R", "C", "C", "C"],
            ["C", "C", "G", "R", "G", "C", "C"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city3s": {
        "name": "city3s",
        "url": "/images/tile11.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "G", "C", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city2nw": {
        "name": "city2nw",
        "url": "/images/tile12.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "G", "G", "G", "G", "G", "G"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city2nws": {
        "name": "city2nws",
        "url": "/images/tile13.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "G", "G", "G", "G", "G", "G"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city2nwr": {
        "name": "city2nwr",
        "url": "/images/tile14.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "R", "R", "R", "R"],
            ["C", "C", "G", "R", "G", "G", "G"],
            ["C", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city2nwsr": {
        "name": "city2nwsr",
        "url": "/images/tile15.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["C", "C", "C", "C", "C", "G", "G"],
            ["C", "C", "G", "G", "G", "G", "G"],
            ["C", "C", "G", "R", "R", "R", "R"],
            ["C", "C", "G", "R", "G", "G", "G"],
            ["C", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city2we": {
        "name": "city2we",
        "url": "/images/tile16.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city2wes": {
        "name": "city2we",
        "url": "/images/tile17.jpg",
        "banner": true,
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city11ne": {
        "name": "city11ne",
        "url": "/images/tile18.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "Z", "C"],
            ["G", "G", "G", "G", "G", "C", "C"],
            ["G", "G", "G", "M", "G", "C", "C"],
            ["G", "G", "G", "R", "G", "C", "C"],
            ["G", "G", "G", "R", "G", "G", "C"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city11we": {
        "name": "city11we",
        "url": "/images/tile19.jpg",
        "tile_split": [
            ["Z", "G", "G", "G", "G", "G", "Z"],
            ["C", "G", "G", "G", "G", "G", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["C", "C", "G", "G", "G", "C", "C"],
            ["C", "G", "G", "G", "G", "G", "C"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city1": {
        "name": "city1",
        "url": "/images/tile20.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "city1rsw": {
        "name": "city1rsw",
        "url": "/images/tile21.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["R", "R", "R", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    },
    "city1rswe": {
        "name": "city1rswe",
        "url": "/images/tile6.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["R", "R", "R", "S", "R", "R", "R"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]

    },
    "city1rwe": {
        "name": "city1rwe",
        "url": "/images/tile7.jpg",
        "tile_split": [
            ["Z", "C", "C", "C", "C", "C", "Z"],
            ["G", "G", "C", "C", "C", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["R", "R", "R", "R", "R", "R", "R"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["G", "G", "G", "G", "G", "G", "G"],
            ["Z", "G", "G", "G", "G", "G", "Z"]
        ]
    },
    "road2ns": {
        "name": "road2ns",
        "url": "/images/tile24.jpg",
        "tile_split": [
            ["Z", "G", "G", "R", "G", "G", "Z"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["G", "G", "G", "R", "G", "G", "G"],
            ["Z", "G", "G", "R", "G", "G", "Z"]
        ]
    }
}
//following for /maptile
var obj = {};
var checkedArr;
var array;
var tempArr;
var current_player = 1;
var players;

var new_tiles = JSON.parse(JSON.stringify(tile_master));
var tile_deck = ["city1", "city1", "city1", "city1", "city1", "city11ne", "city11ne", "city11we", "city11we", "city11we", "city1rse", "city1rse", "city1rse", "city1rsw", "city1rsw", "city1rsw", "city1rswe", "city1rswe", "city1rswe", "city1rwe", "city1rwe", "city1rwe", "city1rwe", "city2nw", "city2nw", "city2nw", "city2nwr", "city2nwr", "city2nwr", "city2nws", "city2nws", "city2nwsr", "city2nwsr", "city2we", "city2wes", "city2wes", "city3", "city3", "city3", "city3r", "city3s", "city3sr", "city3sr", "city4", "mon", "mon", "mon", "mon", "monr", "monr", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road3", "road3", "road3", "road3", "road4"];
var deckSize = tile_deck.length;

var game_array;
var detail_array;
var checked_array;
var current_tile;
var player_placement = [
    [],
    []
];

router.post('/creategame', function(req, res) {
    var limit = 0;
    if (req.body.players && Array.isArray(req.body.players)) {
        if (req.body.players.length > 5) {
            limit = 5;
        } else {
            limit = req.body.players.length;
        }
    }
    if (limit > 1) {
        obj = {};
        checkedArr;
        array;
        tempArr;
        current_player = 1;
        new_tiles = JSON.parse(JSON.stringify(tile_master));
        tile_deck = ["city1", "city1", "city1", "city1", "city1", "city11ne", "city11ne", "city11we", "city11we", "city11we", "city1rse", "city1rse", "city1rse", "city1rsw", "city1rsw", "city1rsw", "city1rswe", "city1rswe", "city1rswe", "city1rwe", "city1rwe", "city1rwe", "city1rwe", "city2nw", "city2nw", "city2nw", "city2nwr", "city2nwr", "city2nwr", "city2nws", "city2nws", "city2nwsr", "city2nwsr", "city2we", "city2wes", "city2wes", "city3", "city3", "city3", "city3r", "city3s", "city3sr", "city3sr", "city4", "mon", "mon", "mon", "mon", "monr", "monr", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2ns", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road2sw", "road3", "road3", "road3", "road3", "road4"];
        deckSize = tile_deck.length;
        game_array;
        detail_array;
        checked_array;
        current_tile;
        player_placement = [
            [],
            []
        ];
        players = {};
        var colours = ["#000000", "#FFFFFF", "#0000FF", "#FF0000", "#00FF00"];

        for (var i = 0; i < limit; i++) {
            var temp = randNum(colours.length);
            players["player" + (i + 1)] = {
                "name": req.body.players[i],
                "points": 0,
                "pieces": 7,
                "colour": colours[temp]
            };
            colours.splice(temp, 1);
        }

        game_array = createArray(2 * tile_deck.length - 1); //needs to be created differently
        detail_array = createArray(7 * (2 * tile_deck.length - 1));
        checked_array = createArray(7 * (2 * tile_deck.length - 1));
        res.send("game started").end();
    } else {
        res.status(400).send("error in initialising, no game instance created").end();
    }
});

//------------info gathering----------------
router.get('/getplayers', function(req, res) {
    res.json(players).end();
});
router.get('/getactiveplayer', function(req, res) {
    res.json(players["player" + current_player]).end();
});
router.get('/getplayerplacement', function(req, res) {
    res.json(player_placement).end();
});
router.get('/getboard', function(req, res) {
    res.json(game_array).end();
});
router.get('/getdeck', function(req, res) {
    res.json(tile_deck).end();
});
router.get('/getmap', function(req, res) {
    mapTiles();
    res.json(obj).end();
});
router.get('/endscore', function(req, res) {
    endScore();
    res.json(players).end();
});
//------------------------------------------

router.get('/generate', function(req, res) {
    if (tile_deck.length === 0) {
        //end the game
        endScore();
        //add some end of game response here.
        res.json({
            "message": "game has ended, run /getplayers to see score - this will be updated later"
        });
    } else {
        if (!game_array) {
            res.status(400).send("Please use /creategame first");
        } else if (!game_array[deckSize - 1][deckSize - 1] && tile_deck.length == deckSize) {
            for (var i = 0; i < tile_deck.length; i++) {
                if (tile_deck[i] == "city1rwe") {
                    tile_deck.splice(i, 1);
                    current_tile = noLink(new_tiles.city1rwe);
                    current_tile.rotation = 1;
                    res.json(current_tile).end();
                    break;
                }
            }
        } else {
            current_tile = noLink(new_tiles[tile_deck[randNum(tile_deck.length)]]);
            current_tile.rotation = 1;
            res.json(current_tile).end();
        }
    }
});

router.get('/generatespecific/:tile', function(req, res) {
    if (tile_deck.length === 0) {
        //end the game
        endScore();
        //add some end of game response here.
        res.json({
            "message": "game has ended, run /getplayers to see score - this will be updated later"
        });
    } else {
        if (!game_array) {
            res.status(400).send("Please use /creategame first").end();
        } else if (!game_array[deckSize - 1][deckSize - 1] && tile_deck.length == deckSize) {
            for (var i = 0; i < tile_deck.length; i++) {
                if (tile_deck[i] == "city1rwe") {
                    tile_deck.splice(i, 1);
                    current_tile = noLink(new_tiles.city1rwe);
                    current_tile.rotation = 1;
                    res.json(current_tile).end();
                    break;
                }
            }
        } else {
            var ind = false;
            for (var j in tile_deck) {
                if (tile_deck[j] === req.params.tile) {
                    current_tile = noLink(new_tiles[req.params.tile]);
                    current_tile.rotation = 1;
                    ind = true;
                    res.json(current_tile).end();
                    break;
                }
            }
            if (!ind) {
                res.status(400).send("no such tile").end();
            }
        }
    }
});

router.post('/placetile', function(req, res) {
    //send this function a json body in form of {"row": 71, "column": 71, "rotation": 4, "placedMan": [3,6]}, set content type header to application/json.
    rotateTile(req.body.rotation);
    if (!game_array[deckSize - 1][deckSize - 1]) {
        //add a check for valid player placement (ie not on river, settlement or corner)
        //mapTile(3,3,req.body.placedMan)
        game_array[deckSize - 1][deckSize - 1] = current_tile;
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                detail_array[(deckSize - 1) * 7 + i][(deckSize - 1) * 7 + j] = current_tile.tile_split[i][j];
                checked_array[(deckSize - 1) * 7 + i][(deckSize - 1) * 7 + j] = "N";
            }
        }
        if (req.body.placedMan != -1) {
            var temp1 = req.body.placedMan;
            player_placement[0].push([7 * req.body.row + temp1[0], 7 * req.body.column + temp1[1]]);
            player_placement[1].push("player" + current_player);
            players["player" + current_player].pieces--;
        }
        console.log(player_placement);
        res.json(current_tile);
        nextPlayer(Object.keys(players).length);
    } else if (checkAdjPresent(req.body.row, req.body.column) && checkAbove(req.body.row, req.body.column) && checkBelow(req.body.row, req.body.column) && checkLeft(req.body.row, req.body.column) && checkRight(req.body.row, req.body.column)) {
        //add a check for valid player placement
        if (placedManValidator(req.body.placedMan)) {
            if (current_tile.tile_split[req.body.placedMan[0]][req.body.placedMan[1]] !== "Z") {
                if (players["player" + current_player].pieces > 0) {
                    game_array[req.body.row][req.body.column] = current_tile;
                    for (var i = 0; i < 7; i++) {
                        for (var j = 0; j < 7; j++) {
                            detail_array[(req.body.row) * 7 + i][(req.body.column) * 7 + j] = current_tile.tile_split[i][j];
                            checked_array[(req.body.row) * 7 + i][(req.body.column) * 7 + j] = "N";
                        }
                    }
                    resetChecked();
                    placedManValidity(req.body.row, req.body.column, req.body.placedMan);
                    if (game_array[req.body.row][req.body.column] === undefined) {
                        res.status(400).send("Invalid player piece placement - already somebody occupying this space");
                        resetRotation();
                    } else {
                        console.log(player_placement);
                        players["player" + current_player].pieces--;
                        inGameScore();
                        nextPlayer(Object.keys(players).length);
                        res.json(current_tile);
                    }
                } else {
                    res.status(400).send("Not enough remaining pieces to do this");
                    resetRotation();
                }
            } else {
                res.status(400).send("Invalid player piece placement - try placing in the centre of where you want");
                resetRotation();
            }

        } else {
            res.status(400).send("Invalid placedMan format - use -1 for no piece placement");
            resetRotation();
        }
    } else {
        res.status(400).send("Invalid tile placement");
        resetRotation();
    }
});

function endScore() {
    mapTiles();
    while (player_placement[0].length > 0) {
        var type = detail_array[player_placement[0][player_placement[0].length - 1][0]][player_placement[0][player_placement[0].length - 1][1]];
        console.log(type);
        checkallend: for (var x in obj[type]) {
            for (var y in obj[type][x]) {
                if (isArrayEqual(obj[type][x][y], player_placement[0][player_placement[0].length - 1])) {
                    var temp = obj[type][x];
                    break checkallend;
                }
            }
        }
        console.log(temp);
        var points = [];
        for (var i = 0; i < temp.length; i++) {
            for (var j = player_placement[0].length - 1; j >= 0; j--) {
                if (isArrayEqual(temp[i], player_placement[0][j])) {
                    //push player
                    points.push(player_placement[1][j]);
                    players[player_placement[1][j]].pieces++;
                    player_placement[0].splice(j, 1);
                    player_placement[1].splice(j, 1);
                    break;
                }
            }
        }
        console.log(points);
        var awardPointsTo = mode(points);
        var countTiles = [];
        console.log("forming countTiles");
        for (var k = 0; k < temp.length; k++) {
            countTiles.push(detail2game(temp[k]));
        }
        countTiles = remove_duplicates(countTiles);
        console.log(countTiles);
        if (type === "R") {
            console.log("In score - road");
            for (var z in awardPointsTo) {
                players[awardPointsTo[z]].points += countTiles.length;
            }
        } else if (type === "C") {
            console.log("In score - city");
            //check all tiles for banner, for each banner, add 2 points.
            var bannerCnt = 0;
            for (var x in countTiles) {
                if (game_array[countTiles[x][0]][countTiles[x][1]].banner) {
                    bannerCnt++;
                }
            }
            for (var z in awardPointsTo) {
                players[awardPointsTo[z]].points += (countTiles.length + bannerCnt);
            }
        } else if (type === "M") {
            players[awardPointsTo[0]].points += monasteryScoring(player_placement[0][player_placement[0].length - 1]);
        } else if (type === "G") {
            //count the amount of closed cities connecting to the land.
            var grassScore = 0;
            //identify and store closed cities
            var closed_cities = {};
            for (var x in obj.C) {
                if (!openAround(obj.C[x])) {
                    closed_cities[x] = obj.C[x];
                }
            }
            grasscheck: for (var i=0;i<temp.length;i++) {
                if (detail_array[temp[i][0] - 1][temp[i][1]] === "C") {
                    //check against closed_cities
                    for (var x in closed_cities) {
                        for (var y in closed_cities[x]) {
                            if (isArrayEqual(closed_cities[x][y],[temp[i][0] - 1,temp[i][1]])) {
                                grassScore+=3;
                                delete closed_cities[x];
                                continue grasscheck;
                            }
                        }
                    }
                }
                if (detail_array[temp[i][0] + 1][temp[i][1]] === "C") {
                    for (var x in closed_cities) {
                        for (var y in closed_cities[x]) {
                            if (isArrayEqual(closed_cities[x][y],[temp[i][0] + 1,temp[i][1]])) {
                                grassScore+=3;
                                delete closed_cities[x];
                                continue grasscheck;
                            }
                        }
                    }
                }
                if (detail_array[temp[i][0]][temp[i][1] - 1] === "C") {
                    for (var x in closed_cities) {
                        for (var y in closed_cities[x]) {
                            if (isArrayEqual(closed_cities[x][y],[temp[i][0],temp[i][1]-1])) {
                                grassScore+=3;
                                delete closed_cities[x];
                                continue grasscheck;
                            }
                        }
                    }
                }
                if (detail_array[temp[i][0]][temp[i][1] + 1] === "C") {
                    for (var x in closed_cities) {
                        for (var y in closed_cities[x]) {
                            if (isArrayEqual(closed_cities[x][y],[temp[i][0],temp[i][1]+1])) {
                                grassScore+=3;
                                delete closed_cities[x];
                                continue grasscheck;
                            }
                        }
                    }
                }
            }
            for (var z in awardPointsTo) {
                players[awardPointsTo[z]].points += grassScore;
            }
        }
    }
}

function inGameScore() {
    console.log("in inGameScore");
    var scores = JSON.parse(JSON.stringify(player_placement));
    while (scores[0].length > 0) {
        var type = detail_array[scores[0][scores[0].length - 1][0]][scores[0][scores[0].length - 1][1]];
        console.log(type);
        if (type === "R" || type === "C") {
            checkall: for (var x in obj[type]) {
                for (var y in obj[type][x]) {
                    if (isArrayEqual(obj[type][x][y], scores[0][scores[0].length - 1])) {
                        var temp = obj[type][x];
                        break checkall;
                    }
                }
            }
            console.log(temp);
            if (!openAround(temp)) {
                //this is where the scoring happens
                var points = [];
                for (var i = 0; i < temp.length; i++) {
                    for (var j = scores[0].length - 1; j >= 0; j--) {
                        if (isArrayEqual(temp[i], scores[0][j])) {
                            //push player
                            points.push(scores[1][j]);
                            players[scores[1][j]].pieces++;
                            player_placement[0].splice(j, 1);
                            player_placement[1].splice(j, 1);
                            scores[0].splice(j, 1);
                            scores[1].splice(j, 1);
                            break;
                        }
                    }
                }
                console.log(points);
                var awardPointsTo = mode(points);
                var countTiles = [];
                console.log("forming countTiles");
                for (var k = 0; k < temp.length; k++) {
                    countTiles.push(detail2game(temp[k]));
                }
                countTiles = remove_duplicates(countTiles);
                console.log(countTiles);
                if (type === "R") {
                    console.log("In score - road");
                    for (var z in awardPointsTo) {
                        players[awardPointsTo[z]].points += countTiles.length;
                    }
                } else if (type === "C") {
                    console.log("In score - city");
                    //check all tiles for banner, for each banner, add 2 points.
                    var bannerCnt = 0
                    for (x in countTiles) {
                        if (game_array[countTiles[x][0]][countTiles[x][1]].banner) {
                            bannerCnt++;
                        }
                    }
                    for (var z in awardPointsTo) {
                        players[awardPointsTo[z]].points += (2 * (countTiles.length + bannerCnt));
                    }
                }
            } else {
                //the type being checked is open, so remove from scores, which is the placements we are checking.
                scores[0].splice(scores[0].length - 1, 1);
                scores[1].splice(scores[1].length - 1, 1);
            }
        } else if (type === "M" && monasteryScoring(scores[0][scores[0].length - 1]) === 9) {
            players[scores[1][scores[0].length - 1]].points += 9;
            players[scores[1][scores[0].length - 1]].pieces++;
            player_placement[0].splice(scores[0].length - 1, 1);
            player_placement[1].splice(scores[1].length - 1, 1);
            scores[0].splice(scores[0].length - 1, 1);
            scores[1].splice(scores[1].length - 1, 1);
        } else {
            //remove as already checked its not what we want
            scores[0].splice(scores[0].length - 1, 1);
            scores[1].splice(scores[1].length - 1, 1);
        }
    }
}

function monasteryScoring(arr) {
    var count = 1;
    var i = Math.floor(arr[0] / 7);
    var j = Math.floor(arr[1] / 7);
    if (game_array[i - 1][j - 1]) {
        count++;
    }
    if (game_array[i - 1][j]) {
        count++;
    }
    if (game_array[i - 1][j + 1]) {
        count++;
    }
    if (game_array[i][j - 1]) {
        count++;
    }
    if (game_array[i][j + 1]) {
        count++;
    }
    if (game_array[i + 1][j - 1]) {
        count++;
    }
    if (game_array[i + 1][j]) {
        count++;
    }
    if (game_array[i + 1][j + 1]) {
        count++;
    }
    return count;
}

/*function checkScore() {
    console.log("in checkScore");
    var scores = JSON.parse(JSON.stringify(player_placement));
    for (var i = scores[0].length - 1; i >= 0; i--) {
        console.log(detail_array[scores[0][i][0]][scores[0][i][1]]);
        if (detail_array[scores[0][i][0]][scores[0][i][1]] === "R" || detail_array[scores[0][i][0]][scores[0][i][1]] === "C") {
            checkall: for (x in obj[detail_array[scores[0][i][0]][scores[0][i][1]]]) {
                for (y in obj[detail_array[scores[0][i][0]][scores[0][i][1]]][x]) {
                    if (isArrayEqual(obj[detail_array[scores[0][i][0]][scores[0][i][1]]][x][y], scores[0][i])) {
                        var temp = obj[detail_array[scores[0][i][0]][scores[0][i][1]]][x];
                        break checkall;
                    }
                }
            }
            console.log(temp);
            if (!openAround(temp)) {
                score(temp, scores, detail_array[scores[0][i][0]][scores[0][i][1]]);
                //need to somehow remove from player_placement . Also need to introduct fucntions to handle number of playing pieces limit
                player_placement[0].splice(i, 1);
                player_placement[1].splice(i, 1);
            } else {
                scores[0].splice(i, 1);
                scores[1].splice(i, 1);
            }
        } else if (detail_array[scores[0][i][0]][scores[0][i][1]] === "M" && monasteryScoring(scores[0][i]) === 9) {
            //Monastery scoring

            player_placement[0].splice(i, 1);
            player_placement[1].splice(i, 1);
        } else {
            //remove as already checked its not what we want
            scores[0].splice(i, 1);
            scores[1].splice(i, 1);
        }
    }
}*/

/*function score(temp, scores, type) {
    console.log("in score");
    console.log("type " + type);
    var points = [];
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < scores[0].length; j++) {
            if (temp[i][0] === scores[0][j][0] && temp[i][1] === scores[0][j][1]) {
                //push player
                points.push(scores[1][j]);
                scores[0].splice(j, 1);
                scores[1].splice(j, 1);

                break;
            }
        }
    }
    console.log(points);
    //find the most common player/all players and give points to them whether it is road or city
    var awardPointsTo = mode(points);
    var countTiles = [];
    console.log("forming countTiles");
    for (var k = 0; k < temp.length; k++) {
        countTiles.push([Math.floor(temp[k][0] / 7), Math.floor(temp[k][1] / 7)]);
    }
    countTiles = remove_duplicates(countTiles);
    console.log(countTiles);
    if (type === "R") {
        console.log("In score - road");
        for (z in awardPointsTo) {
            players[awardPointsTo[z]].points = players[awardPointsTo[z]].points + countTiles.length;
        }
    } else if (type === "C") {
        console.log("In score - city");
        //check all tiles for banner, for each banner, add 2 points.
        var bannerCnt = 0
        for (x in countTiles) {
            if (game_array[countTiles[x][0]][countTiles[x][1]].banner) {
                bannerCnt++;
            }
        }
        players[awardPointsTo[z]].points = players[awardPointsTo[z]].points + 2 * (countTiles.length + bannerCnt);
    }
}*/

function remove_duplicates(arr) {
    //works because a scoring during the game can never be with 1 tile
    arr.sort();
    var ans = [];
    ans.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if (!(arr[i - 1][0] == arr[i][0] && arr[i - 1][1] == arr[i][1])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

function mode(array) {
    var ans = [];
    array.sort();
    var cnt = [0, 0, 0, 0, 0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "player1") {
            cnt[0]++;
        } else if (array[i] == "player2") {
            cnt[1]++;
        } else if (array[i] == "player3") {
            cnt[2]++;
        } else if (array[i] == "player4") {
            cnt[3]++;
        } else if (array[i] == "player5") {
            cnt[4]++;
        }
    }
    var maxnum = Math.max(cnt[0], cnt[1], cnt[2], cnt[3], cnt[4]);
    for (var j = 0; j < 5; j++) {
        if (cnt[j] == maxnum) {
            ans.push("player" + (j + 1));
        }
    }
    return ans;
}

function openAround(temp) {
    console.log("in openAround");
    var openCnt = 0;
    for (var x1 in temp) {
        if (temp[x1][0] !== 0) {
            if (!detail_array[temp[x1][0] - 1][temp[x1][1]]) {
                openCnt++;
            }
        } else {
            openCnt++;
        }

        if (temp[x1][0] < 7 * (2 * deckSize - 1)) {
            if (!detail_array[temp[x1][0] + 1][temp[x1][1]]) {
                openCnt++;
            }
        } else {
            openCnt++;
        }

        if (temp[x1][1] !== 0) {
            if (!detail_array[temp[x1][0]][temp[x1][1] - 1]) {
                openCnt++;
            }
        } else {
            openCnt++;
        }

        if (temp[x1][1] < 7 * (2 * deckSize - 1)) {
            if (!detail_array[temp[x1][0]][temp[x1][1] + 1]) {
                openCnt++;
            }
        } else {
            openCnt++;
        }
    }
    if (openCnt > 0) {
        return true;
    } else {
        return false;
    }
}

function placedManValidity(row, column, placedMan) {
    mapTiles();

    if (placedMan != -1) {
        var ind = false;
        var checkPlace = game2detail(row, column, placedMan);
        console.log(checkPlace);
        var typeCheck = detail_array[checkPlace[0]][checkPlace[1]];
        for (var x in obj[typeCheck]) {
            for (var y in obj[typeCheck][x]) {
                console.log(obj[typeCheck][x][y]);
                if (isArrayEqual(obj[typeCheck][x][y], checkPlace)) {
                    var checkOthers = obj[typeCheck][x];
                    console.log(checkOthers);
                    break;
                }
            }
        }
        for (var z1 in checkOthers) {
            for (var z2 in player_placement[0]) {
                if (isArrayEqual(checkOthers[z1], player_placement[0][z2])) {
                    ind = true;
                    //delete the tile entry from game_array etc...
                    game_array[row][column] = undefined;
                    for (var i = 0; i < 7; i++) {
                        for (var j = 0; j < 7; j++) {
                            detail_array[(row) * 7 + i][(column) * 7 + j] = undefined;
                            checked_array[(row) * 7 + i][(column) * 7 + j] = undefined;
                        }
                    }
                }
            }
        }
        if (!ind) {
            player_placement[0].push(checkPlace);
            player_placement[1].push("player" + current_player);
        }
    }
}

function mapTiles() {
    console.log("in mapTiles");
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
        tempArr.push([x, y]);
        checked_array[x][y] = "Y";
        var cnt = 0;
        while (tempArr[cnt]) {
            surround(tempArr[cnt]);
            cnt++;
        }
        if (detail_array[x][y] == "Z") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["Z" + Zcnt] = tempArr;
            Zcnt++;
        } else if (detail_array[x][y] == "G") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["G" + Gcnt] = tempArr;
            Gcnt++;
        } else if (detail_array[x][y] == "R") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["R" + Rcnt] = tempArr;
            Rcnt++;
        } else if (detail_array[x][y] == "S") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["S" + Scnt] = tempArr;
            Scnt++;
        } else if (detail_array[x][y] == "M") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["M" + Mcnt] = tempArr;
            Mcnt++;
        } else if (detail_array[x][y] == "C") {
            if (!obj[detail_array[x][y]]) {
                obj[detail_array[x][y]] = {};
            }
            tempArr.sort();
            obj[detail_array[x][y]]["C" + Ccnt] = tempArr;
            Ccnt++;
        }
        temp = checkedAll();
    }
}

//  mapTiles functions
function checkedAll() {
    for (var i = 0; i < (2 * deckSize - 1); i++) {
        for (var j = 0; j < (2 * deckSize - 1); j++) {
            if (checked_array[7 * i][7 * j]) {
                for (var k = 0; k < 7; k++) {
                    for (var l = 0; l < 7; l++) {
                        if (checked_array[7 * i + k][7 * j + l] == "N") {
                            return [7 * i + k, 7 * j + l];
                        }
                    }
                }
            }
        }
    }
    return false;
}

function surround(arr) {
    var x = noLink(arr[0]);
    var y = noLink(arr[1]);
    while (y > -1) {
        if (left(x, y)) {
            //do something
            tempArr.push([x, y - 1]);
            checked_array[x][y - 1] = "Y";
        } else {
            break;
        }
        y--;
    }
    x = noLink(arr[0]);
    y = noLink(arr[1]);
    while (x > -1) {
        if (up(x, y)) {
            //do something
            tempArr.push([x - 1, y]);
            checked_array[x - 1][y] = "Y";
        } else {
            break;
        }
        x--;
    }
    x = noLink(arr[0]);
    y = noLink(arr[1]);
    while (y < 7 * (2 * deckSize - 1)) {
        if (right(x, y)) {
            //do something
            tempArr.push([x, y + 1]);
            checked_array[x][y + 1] = "Y";
        } else {
            break;
        }
        y++;
    }
    x = noLink(arr[0]);
    y = noLink(arr[1]);
    while (x < 7 * (2 * deckSize - 1)) {
        if (down(x, y)) {
            //do something
            tempArr.push([x + 1, y]);
            checked_array[x + 1][y] = "Y";
        } else {
            break;
        }
        x++;
    }
}

function up(i, j) {
    if (i === 0) {
        return false;
    } else if (!checked_array[i - 1][j]) {
        return false;
    } else if (checked_array[i - 1][j] == "Y") {
        return false;
    } else if (detail_array[i][j] === detail_array[i - 1][j]) {
        return true;
    } else {
        return false;
    }
}

function down(i, j) {
    if (i === 7 * (2 * deckSize - 1) - 1) {
        return false;
    } else if (!checked_array[i + 1][j]) {
        return false;
    } else if (checked_array[i + 1][j] == "Y") {
        return false;
    } else if (detail_array[i][j] === detail_array[i + 1][j]) {
        return true;
    } else {
        return false;
    }
}

function left(i, j) {
    if (j === 0) {
        return false;
    } else if (!checked_array[i][j - 1]) {
        return false;
    } else if (checked_array[i][j - 1] == "Y") {
        return false;
    } else if (detail_array[i][j] === detail_array[i][j - 1]) {
        return true;
    } else {
        return false;
    }
}

function right(i, j) {
    if (j === 7 * (2 * deckSize - 1) - 1) {
        return false;
    } else if (!checked_array[i][j + 1]) {
        return false;
    } else if (checked_array[i][j + 1] == "Y") {
        return false;
    } else if (detail_array[i][j] === detail_array[i][j + 1]) {
        return true;
    } else {
        return false;
    }
}

//main functions

function checkAdjPresent(row, col) {
    if (row !== 0) {
        if (game_array[row - 1][col]) {
            return true;
        }
    }
    if (col !== 0) {
        if (game_array[row][col - 1]) {
            return true;
        }
    }
    if (col + 1 < 2 * deckSize - 1) {
        if (game_array[row][col + 1]) {
            return true;
        }
    }
    if (row + 1 < 2 * deckSize - 1) {
        if (game_array[row + 1][col]) {
            return true;
        }
    }
    console.log("checkAdjPresent false");
    return false;
}
//can tile validly be placed here?
function checkAbove(row, col) {
    if (row !== 0) {
        if (game_array[row - 1][col]) {
            console.log(game_array[row - 1][col].tile_split);
            console.log(current_tile.tile_split);
            if (game_array[row - 1][col].tile_split[6][0] === current_tile.tile_split[0][0] && game_array[row - 1][col].tile_split[6][1] === current_tile.tile_split[0][1] && game_array[row - 1][col].tile_split[6][2] === current_tile.tile_split[0][2] && game_array[row - 1][col].tile_split[6][3] === current_tile.tile_split[0][3] && game_array[row - 1][col].tile_split[6][4] === current_tile.tile_split[0][4] && game_array[row - 1][col].tile_split[6][5] === current_tile.tile_split[0][5] && game_array[row - 1][col].tile_split[6][6] === current_tile.tile_split[0][6]) {
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

function checkBelow(row, col) {
    if (row + 1 < 2 * deckSize - 1) {
        if (game_array[row + 1][col]) {
            console.log(game_array[row + 1][col].tile_split);
            console.log(current_tile.tile_split);
            if (game_array[row + 1][col].tile_split[0][0] === current_tile.tile_split[6][0] && game_array[row + 1][col].tile_split[0][1] === current_tile.tile_split[6][1] && game_array[row + 1][col].tile_split[0][2] === current_tile.tile_split[6][2] && game_array[row + 1][col].tile_split[0][3] === current_tile.tile_split[6][3] && game_array[row + 1][col].tile_split[0][4] === current_tile.tile_split[6][4] && game_array[row + 1][col].tile_split[0][5] === current_tile.tile_split[6][5] && game_array[row + 1][col].tile_split[0][6] === current_tile.tile_split[6][6]) {
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

function checkLeft(row, col) {
    if (col !== 0) {
        if (game_array[row][col - 1]) {
            console.log(game_array[row][col - 1].tile_split);
            console.log(current_tile.tile_split);
            if (game_array[row][col - 1].tile_split[0][6] === current_tile.tile_split[0][0] && game_array[row][col - 1].tile_split[1][6] === current_tile.tile_split[1][0] && game_array[row][col - 1].tile_split[2][6] === current_tile.tile_split[2][0] && game_array[row][col - 1].tile_split[3][6] === current_tile.tile_split[3][0] && game_array[row][col - 1].tile_split[4][6] === current_tile.tile_split[4][0] && game_array[row][col - 1].tile_split[5][6] === current_tile.tile_split[5][0] && game_array[row][col - 1].tile_split[6][6] === current_tile.tile_split[6][0]) {
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

function checkRight(row, col) {
    if (col < 2 * deckSize - 1) {
        if (game_array[row][col + 1]) {
            console.log(game_array[row][col + 1].tile_split);
            console.log(current_tile.tile_split);
            if (game_array[row][col + 1].tile_split[0][0] === current_tile.tile_split[0][6] && game_array[row][col + 1].tile_split[1][0] === current_tile.tile_split[1][6] && game_array[row][col + 1].tile_split[2][0] === current_tile.tile_split[2][6] && game_array[row][col + 1].tile_split[3][0] === current_tile.tile_split[3][6] && game_array[row][col + 1].tile_split[4][0] === current_tile.tile_split[4][6] && game_array[row][col + 1].tile_split[5][0] === current_tile.tile_split[5][6] && game_array[row][col + 1].tile_split[6][0] === current_tile.tile_split[6][6]) {
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

function rotateTile(rotation) {
    var newArr = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    if (rotation == 1) {
        //no need to do anything to tile
    } else if (rotation == 2) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                newArr[j][(6 - i)] = current_tile.tile_split[i][j];
            }
        }
        current_tile.tile_split = newArr;
        current_tile.rotation = 2;
    } else if (rotation == 3) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                newArr[(6 - i)][(6 - j)] = current_tile.tile_split[i][j];
            }
        }
        current_tile.tile_split = newArr;
        current_tile.rotation = 3;
    } else if (rotation == 4) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                newArr[6 - j][i] = current_tile.tile_split[i][j];
            }
        }
        current_tile.tile_split = newArr;
        current_tile.rotation = 4;
    } else {
        console.log("Invalid rotation - rotation = "+rotation);
    }
}

function resetRotation() {
    if (current_tile.rotation === 1) {

    } else if (current_tile.rotation === 2) {
        rotateTile(4);
        current_tile.rotation = 2;
    } else if (current_tile.rotation === 3) {
        rotateTile(3);
        current_tile.rotation = 3;
    } else if (current_tile.rotation === 4) {
        rotateTile(2);
        current_tile.rotation = 4;
    } else {
        console.log("Cannot reset rotate as invalid");
    }
}

function resetChecked() {
    for (var i = 0; i < 2 * deckSize - 1; i++) {
        for (var j = 0; j < 2 * deckSize - 1; j++) {
            if (game_array[i][j]) {
                for (var x = 0; x < 7; x++) {
                    for (var y = 0; y < 7; y++) {
                        checked_array[(7 * i) + x][(7 * j) + y] = "N";
                    }
                }
            }
        }
    }
}

function nextPlayer(noPlayer) {
    current_player++;
    if (current_player === noPlayer + 1) {
        current_player = 1;
    }
}

function createArray(x) {
    var array = new Array(x);
    for (var i = 0; i < x; i++) {
        array[i] = new Array(x);
    }
    return array;
}

function noLink(array) {
    return JSON.parse(JSON.stringify(array));
}

function game2detail(x, y, arr) {
    if (!arr) {
        arr = [0, 0];
    }
    return [7 * x + arr[0], 7 * y + arr[1]];
}

function detail2game(arr) {
    return [Math.floor(arr[0] / 7), Math.floor(arr[1] / 7)];
}

function isArrayEqual(array1, array2) {
    if (array1.length === array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function placedManValidator(arr) {
    if (Array.isArray(arr) && arr.length === 2 && arr[0] >= 0 && arr[0] <= 6 && arr[1] >= 0 && arr[1] <= 6 && arr[0] === Math.floor(arr[0]) && arr[1] === Math.floor(arr[1])) {
        return true;
    } else if (arr === -1) {
        return true;
    } else {
        return false;
    }
}

function randNum(num) {
    return Math.floor((Math.random() * num) + 1) - 1;
}

module.exports = router;
