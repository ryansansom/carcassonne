var info = new Object();
info.tileSize = 100;
info.scale = 1;
info.scaleMultiplyer = 0.8;
info.darwOffset = {};
info.newTile = {};
info.newTileImg = new Image();
info.currentPos = {
    x: -1,
    y: -1
};
info.newTilePlaced = false;

var imgs = {};
imgs.city1 = new Image();
imgs.city1.src = 'res/pics/tiles/original-game/city1.png';
imgs.city1.name = 'city1';

//Funciton that initias the game, and does all the initial set up.
function startGameApp() {
    //Create game on server
    createGame();

    //Add canvas and context to the game information object
    info.canvas = document.getElementById('game-board');
    info.ctx = info.canvas.getContext('2d');
    document.getElementById('new-tile').width = 200;
    document.getElementById('new-tile').height = 200;
    info.canvas2 = document.getElementById('new-tile');
    info.ctx2 = info.canvas2.getContext('2d');



    /*Initialise the width and height of the canvas based on window size and add a window resize listent to update it. */
    updateInfo();
    window.addEventListener('resize', updateInfo);

    //Draw an initial grid.
    getBoard();
    drawBaord();
    displayTile(getNextTile());
    window.addEventListener('resize', drawBaord);

    //Zooming listeners
    $('#plus').click(function () {
        info.tileSize /= info.scaleMultiplyer;
        //        drawGrid();
        //        speed(drawGrid);
        drawBaord();
    });

    $('#minus').click(function () {
        info.tileSize *= info.scaleMultiplyer;
        //        drawGrid();
        //        speed(drawGrid);
        drawBaord();
    });

    $('#recentre').click(function () {
        info.tileSize = 100;
        drawGrid();
    });

    //Click listeners
    $('#game-board').click(function (evt) {
        var pos = getBoardPosFromMouse(info.canvas, evt, info.tileSize);
        fillBoardTile(pos.x, pos.y);
        console.log('Current Pos Old: ' + JSON.stringify(info.currentPos));
        placeTileOnBoard(info.newTile, pos.x, pos.y);

    });

    $('#new-tile').click(function (evt) {
        var test = getBoardPosFromMouse(info.canvas2, evt, info.splitLen);
        placeMan(test.x, test.y);
    });

    $('#confirm').mousedown(blueButton);
    $('#confirm').mouseup(whiteButton);
    $('#confirm').click(function () {
        if (validPlay()) {
            getBoard();
            var tile = getNextTile();
            displayTile(tile);
        } else {
            alert("Your move is invalid.");
        }

    });

    //initial rotation of tile
    rotate('new-tile', 0);
}

// Update the game info object with the window height and width.
function updateInfo() {
    info.windW = document.getElementById("game-board").width;
    info.windH = document.getElementById("game-board").height;
}

//rotates the element by 'id' by a give degree
//TODO on rotate i need to ajust the position of the PlacedMan
function rotate(id, deg) {
    if (deg != 0) {
        var currentDeg = getAngle(id);
        deg += currentDeg;
        info.newTile.rotation = deg / 90;

    }
    document.getElementById(id).style.WebkitTransform = "rotate(" + deg + "deg)";
    document.getElementById(id).style.msTransform = "rotate(" + deg + "deg)";
    document.getElementById(id).style.transform = "rotate(" + deg + "deg)";
}

//Get the angle of rotation of the element 'id' transformation style.
function getAngle(id) {
    var cssElmt = document.getElementById(id).style.transform;
    var a = cssElmt.indexOf('(') + 1;
    var b = cssElmt.indexOf('d');
    var angle = parseInt(cssElmt.slice(a, b));
    if (angle === 360 || angle === -360) angle = 0;
    return angle;
}

function getBoardPosFromMouse(cvs, evt, len) {
    //set up the board position, the return object
    var bPos = {};
    var mPos = getMousePos(cvs, evt);
    bPos.x = Math.floor((mPos.x / len));
    bPos.y = Math.floor((mPos.y / len));
    return bPos;
}

function getMousePos(cvs, evt) {
    var rect = cvs.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

/*
magic code that centers the grid!
c.save();
c.translate(info.windW / 2 - info.tileSize / 2, info.windH / 2 - info.tileSize / 2);
c.strokeRect(info.tileSize * gridX, info.tileSize * gridY, info.tileSize, info.tileSize);
c.restore();
*/

// not quite woring yet.
function drawBaord() {
    var board = info.gameBoard;
    var boardSize = board.length;
    var c = info.ctx;
    var t = info.tileSize;

    c.clearRect(0, 0, info.windW, info.windH);
    c.strokeStyle = "black";

    /* //DRAW SO THE CENTRE TILE IS IN THE CENTRE
    for (var gridX = ~(boardSize / 2); gridX < boardSize; gridX++) {
        for (var gridY = ~(boardSize / 2); gridY < boardSize; gridY++) {
            c.save();
            c.translate(boardSize / 2 - info.tileSize / 2, boardSize / 2 - info.tileSize / 2);
            c.strokeRect(info.tileSize * gridX, info.tileSize * gridY, info.tileSize, info.tileSize);
            c.restore();
        }
    }*/
    //DRAW SO THE 1ST TILE IS IN THE TOP RIGHT
    for (var x = 0; x < boardSize; x++) {
        for (var y = 0; y < boardSize; y++) {
            c.save();
            c.strokeRect(t * x, t * y, t, t);
            c.restore();
            if (board[x][y]) {
                console.log("not null: " + board[x][y]);
                //                drawTile();
                var t = info.tileSize;
                var tile = board[x][y];
                var angle = tile.rotation * 90;
                c.save();
                //move to centre of current board pos on loop
                c.translate(x * t + t / 2, y * t + t / 2);
                // rotate to current rotaion
                c.rotate(Math.PI / 180 * angle);
                //move to top right of current board pos
                c.translate(-t / 2, -t / 2);
                console.log("the img object contains: " + (JSON.stringify(imgs.toString())));
                console.log('the tile src: ' + tile.src);
                c.drawImage(imgs.city1, 0, 0, t, t);
                imgs.city1.src = 'res/pics/tiles/original-game/city3.png';
                console.log('the img src: ' + imgs.city1.src);
                c.drawImage(imgs.city1, 10, 10, 80, 80);
                c.restore();

            }
        }
    }

}

//info.newTileImg.onload = displayTile;
//info.newTileImg.src = info.newTile.src;

function drawTile(tile) {
    var c = info.ctx;
    var t = info.tileSize;
    var rdns = Math.PI / 180;
    var angle = tile.rotation * 90;
}

function setnewTileImgPath(tile) {
    var name = tile.name;
    var path = 'res/pics/tiles/original-game/';
    var src = path + name + '.png';
    info.newTile.src = src;
}

function displayTile() {
    var c = info.ctx2;
    var img = info.newTileImg;
    c.drawImage(img, 0, 0, 200, 200);
    drawTileGrid();
}


function blueButton() {
    $(this).css('background', 'blue');
}

function whiteButton() {
    $(this).css('background', 'white');
}

//TODO enable people to try and place down the tile several times
function placeTileOnBoard(tile, bx, by) {
    var c = info.ctx;
    var t = info.tileSize;
    var toRadians = Math.PI / 180;
    var angle = tile.rotation * 90;
    var cPos = info.currentPos;
    info.newTile.row = by;
    info.newTile.column = bx;

    if (cPos.x == bx && cPos.y == by) {
        console.log('cPos: ' + JSON.stringify(cPos));
        removeTileFromBoard(bx, by);
        info.newTilePlaced = false;
        drawBaord();
    } else {
        //update board with new tile
        removeTileFromBoard(cPos.x, cPos.y);
        drawBaord()
        placeTileOnBoard2(bx, by);
        updateCurrentPos(bx, by);

        c.save();
        //rotate img from centre
        c.rotate(angle * toRadians);
        //move to centre of tiles
        c.translate(bx * t, by * t);
        c.drawImage(info.newTileImg, 0, 0, t, t);
        c.restore();

        //draw man
        if (info.placedMan) {
            c.save();
            c.translate(bx * t, by * t);
            drawMan(info.placedMan[0], info.placedMan[1], t, c);
            c.restore();
        }
    }
}

function placeTileOnBoard2(x, y) {
    var tile = info.newTile;
    info.currentPos.x = x;
    info.currentPos.y = y;
    info.gameBoard[x][y] = tile;
}

function removeTileFromBoard(x, y) {
    if (x >= 0 || y >= 0) info.gameBoard[x][y] = null;
}

function updateCurrentPos(x, y) {
    info.currentPos.x = x;
    info.currentPos.y = y;
    console.log('Current Pos Updated: ' + JSON.stringify(info.currentPos));
}

function getBoardTile(x, y) {
    //return the tile at pos [x,y] or null
    var result = info.gameBoard[x][y];

    console.log(result);
    return result;
}

function drawTileGrid() {
    var cnv = info.canvas2;
    var c = info.ctx2;
    var tile = info.newTile;
    var tileSplit = info.newTile.tile_split;
    var len = tileSplit.length;
    var splitLen = cnv.width / len;
    info.splitLen = splitLen;
    for (var y = 0; y < len; y++) {
        for (var x = 0; x < len; x++) {
            c.save();
            c.strokeStyle = 'black';
            c.strokeRect(x * splitLen, y * splitLen, splitLen, splitLen);
            if (tileSplit[y][x] == 'Z') {
                c.fillStyle = 'rgba(0,0,0,0.3)';
                c.fillRect(x * splitLen, y * splitLen, splitLen, splitLen);
            }
            c.restore();
        }
    }
}

function drawMan(x, y, tileSize, ctx) {
    var c = ctx;
    var len = tileSize / 7;
    c.save();
    c.fillStyle = "blue";
    c.translate(x * len, y * len);
    c.beginPath();
    c.arc(len / 2, len / 2, len / 4, 0, 2 * Math.PI);
    c.fill();
    c.restore();
}

//TODO Clean up. only use info.newTile.placedMan instead of info.placedMan
function placeMan(x, y) {
    //    displayTile(info.newTile);
    if (info.placedMan) {
        if (info.placedMan[0] == x && info.placedMan[1] == y) {
            info.placedMan = [];
            info.newTile.placedMan = [];
            displayTile(info.newTile);
        } else {
            displayTile(info.newTile);
            info.placedMan = [x, y];
            info.newTile.placedMan = [x, y];
            drawMan(x, y, info.canvas2.width, info.ctx2);
        }
    } else {
        info.placedMan = [x, y];
        info.newTile.placedMan = [x, y];
        drawMan(x, y, info.canvas2.width, info.ctx2);
    }
}

function validPlay() {
    console.log(info.newTile);
    if (info.newTile.placedMan) {
        placeTile(info.newTile);
        return true;
    } else {
        return false;
    }
}

////////////////////////////////////////////////////////
//SERVER CALLS                                        //
////////////////////////////////////////////////////////


//Create Game, need to pass in the an object with the player names
function createGame() {
    var players = {};
    players.players = ["Ryan", "Guillaume"];
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/v2/creategame";
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(players));
    return xhr.responseText;
}

//gets the board from the server
function getBoard() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/v2/getboard"
    xhr.open("get", url, false);
    xhr.send();
    info.gameBoard = JSON.parse(xhr.responseText);
    console.log(info.gameBoard);
    return JSON.parse(xhr.responseText);
}

//get the next tile from the server
function getNextTile() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/v2/generate", false);
    xhr.send();
    info.newTile = JSON.parse(xhr.responseText);
    info.newTile.rotation = 0;
    setnewTileImgPath(info.newTile);
    info.newTileImg.onload = displayTile;
    info.newTileImg.src = info.newTile.src;
    info.currentPos.x = -1;
    info.currentPos.y = -1;
    return JSON.parse(xhr.responseText);
}

//sends the tile placement location to the server
function placeTile(tile) {
    var postInfo = {};
    postInfo.row = tile.row;
    postInfo.column = tile.column;
    postInfo.rotation = tile.rotation;
    postInfo.placedMan = tile.placedMan;
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/v2/placetile", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(postInfo));
    console.log("placeTile.responseText " + xhr.responseText);
    return JSON.parse(xhr.responseText);
}



////////////////////////////////////////////////////////
//Test functions to help development                  //
////////////////////////////////////////////////////////

// Tester function to draw a grid
function drawGrid() {
    //draw the grid based on window size
    var c = info.ctx;
    c.clearRect(0, 0, info.windW, info.windH);
    c.strokeStyle = "black";

    var gridWidth = info.windW / info.tileSize;
    var gridHeight = info.windH / info.tileSize;

    for (var gridX = ~(gridWidth / 2); gridX < gridWidth; gridX++) {
        for (var gridY = ~(gridHeight / 2); gridY < gridHeight; gridY++) {
            c.save();
            c.translate(info.windW / 2 - info.tileSize / 2, info.windH / 2 - info.tileSize / 2);
            c.scale(info.scale, info.scale);
            c.strokeRect(info.tileSize * gridX, info.tileSize * gridY, info.tileSize, info.tileSize);
            c.restore();

        }
    }
    drawCentre();
}

//tester function to draw a square in the middle of the screen
function drawCentre() {
    var c = info.ctx;
    var horCen = info.windW / 2;
    var verCen = info.windH / 2;
    var tileWidthCen = info.tileSize / 2;
    var tileHeightCen = info.tileSize / 2;
    c.strokeStyle = "red";
    c.strokeRect(horCen - tileWidthCen, verCen - tileHeightCen, info.tileSize, info.tileSize);
}

//tester function that draws on a given board pos
function fillBoardTile(bx, by) {
    var c = info.ctx;
    var t = info.tileSize;
    c.save();
    c.fillStyle = "blue";
    c.fillRect(bx * t, by * t, t, t);
    c.restore();
}

//Helper function. Time it takes to run a function
function speed(fnc) {
    var d1 = new Date();
    fnc();
    var d2 = new Date();
    return d2.getTime() - d1.getTime();
}
