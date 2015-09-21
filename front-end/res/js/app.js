// main variables
var info = {};
info.canvas;
info.canvas2
info.ctx;
info.ctx2;
info.tileSize = 100;
info.scale = 1;
info.scaleMultiplyer = 0.8;
info.darwOffset = {};
info.newTile = {};
info.newTile.placedMan = [-1, -1];
info.newTile.pos = null;
info.newTileImg = new Image();
info.currentPos = {
    x: -1,
    y: -1
};
info.newTilePlaced = false;

// panning variables
var panInfo = {};
panInfo.mouseDown = false;
panInfo.startOffSetX = 0;
panInfo.startOffSetY = 0;
panInfo.offSetX = 0;
panInfo.offSetY = 0;

var imgs = {};
imgs.city1rwe = new Image();
imgs.city1rwe.src = 'res/pics/tiles/original-game/city1rwe.png';
imgs.city1 = new Image();
imgs.city1.src ='res/pics/tiles/original-game/city1.png';
imgs.city1rse = new Image();
imgs.city1rse.src ='res/pics/tiles/original-game/city1rse.png';
imgs.city1rsw = new Image();
imgs.city1rsw.src ='res/pics/tiles/original-game/city1rsw.png';
imgs.city1rswe = new Image();
imgs.city1rswe.src ='res/pics/tiles/original-game/city1rswe.png';
imgs.city2nw = new Image();
imgs.city2nw.src ='res/pics/tiles/original-game/city2nw.png';
imgs.city2nws = new Image();
imgs.city2nws.src ='res/pics/tiles/original-game/city2nws.png';
imgs.city2nwsr = new Image();
imgs.city2nwsr.src ='res/pics/tiles/original-game/city2nwsr.png';
imgs.city2we = new Image();
imgs.city2we.src ='res/pics/tiles/original-game/city2we.png';
imgs.city2wes = new Image();
imgs.city2wes.src ='res/pics/tiles/original-game/city2wes.png';
imgs.city3 = new Image();
imgs.city3.src ='res/pics/tiles/original-game/city3.png';
imgs.city3r = new Image();
imgs.city3r.src ='res/pics/tiles/original-game/city3r.png';
imgs.city3s = new Image();
imgs.city3s.src ='res/pics/tiles/original-game/city3s.png';
imgs.city3sr = new Image();
imgs.city3sr.src ='res/pics/tiles/original-game/city3sr.png';
imgs.city4= new Image();
imgs.city4.src ='res/pics/tiles/original-game/city4.png';
imgs.city11ne= new Image();
imgs.city11ne.src ='res/pics/tiles/original-game/city11ne.png';
imgs.city11we= new Image();
imgs.city11we.src ='res/pics/tiles/original-game/city11we.png';
imgs.mon= new Image();
imgs.mon.src ='res/pics/tiles/original-game/mon.png';
imgs.monr= new Image();
imgs.monr.src ='res/pics/tiles/original-game/monr.png';
imgs.road2ns= new Image();
imgs.road2ns.src ='res/pics/tiles/original-game/road2ns.png';
imgs.road2sw= new Image();
imgs.road2sw.src ='res/pics/tiles/original-game/road2sw.png';
imgs.road3= new Image();
imgs.road3.src ='res/pics/tiles/original-game/road3.png';
imgs.road4= new Image();
imgs.road4.src ='res/pics/tiles/original-game/road4.png';



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
    getNextTile()
    displayTile();
    window.addEventListener('resize', drawBaord);

    //Zooming listeners
    $('#plus').click(onClickZoomPlus);
    $('#minus').click(onClickZoomMinus);
    $('#recentre').click(onClickRecentre);

    //dragging listenter
    $('#game-board').mousemove(onDragTranslateBoard);
    $('#game-board').mouseup(mouseDownOff);
    $('#game-board').mousedown(mouseDownOn);
    $('#game-board').mousedown(startOffSet);
    $('#game-board').mouseover(mouseDownOff);
    $('#game-board').mouseout(mouseDownOff);


    //Click listeners
    $('#game-board').click(onClickPlaceTile);
    $('#new-tile').click(onClickPlaceMan);
    $('#confirm').mousedown(blueButton);
    $('#confirm').mouseup(whiteButton);
    $('#confirm').click(onClickConfirmMove);

}

////////////////////////////////////////////////////////
//LISTENER ACTIONs                                    //
////////////////////////////////////////////////////////


function onClickZoomPlus() {
    info.tileSize /= info.scaleMultiplyer;
    drawBaord();
    console.log("zoomed in.");
}

function onClickZoomMinus() {
    info.tileSize *= info.scaleMultiplyer;
    drawBaord();
    console.log("zoomed out.");
}

function onClickRecentre() {
    info.tileSize = 100;
    panInfo.offSetX = 0;
    panInfo.offSetY = 0;
    drawBaord();
    console.log("recentered and rezised baord.");
}

function onDragTranslateBoard(evt) {
    if (panInfo.mouseDown) {
        panInfo.offSetX = parseInt(evt.clientX - panInfo.startOffSetX);
        panInfo.offSetY = parseInt(evt.clientY - panInfo.startOffSetY);
        drawBaord();
        //        console.log('offset X,Y: [' + panInfo.offSetX + ', ' + panInfo.offSetY + ']');
    }
}

function onClickPlaceTile(evt) {
    var pos = getBoardPosFromMouse(info.canvas, evt);
    placeTileOnBoard(info.newTile, pos.x, pos.y);
}

function onClickPlaceMan(evt) {
    var pos = getNewTilePosFromMouse(info.canvas2, evt);
    placeMan(pos.x, pos.y);
}

function onClickConfirmMove() {
    if (validPlay()) {
        getBoard();
        var tile = getNextTile();
        displayTile();
        drawBaord();
    } else {
        alert("Your move is invalid.");
    }

}

// Update the game info object with the window height and width.
function updateInfo() {
    info.windW = document.getElementById("game-board").width;
    info.windH = document.getElementById("game-board").height;
}

function mouseDownOff() {
    panInfo.mouseDown = false;
//    console.log('the mouse is up');
}

function mouseDownOn() {
    panInfo.mouseDown = true;
//    console.log('the mouse is down');
}

function startOffSet(evt) {
    panInfo.startOffSetX = evt.clientX - panInfo.offSetX;
    panInfo.startOffSetY = evt.clientY - panInfo.offSetY;
}

////////////////////////////////////////////////////////
//GAME FUNCTIONS                                      //
////////////////////////////////////////////////////////


//rotates the element by 'id' by a give degree
//TODO on rotate i need to ajust the position of the PlacedMan
function rotate(id, deg) {
    if (deg != 0) {
        //        var currentDeg = getAngle(id);
        var currentDeg = (info.newTile.rotation - 1) * 90;
        deg += currentDeg;
        switch (deg) {
        case 0:
        case 360:
        case -360:
            info.newTile.rotation = 1;
            break;
        case 90:
        case -270:
            info.newTile.rotation = 2;
            break;
        case 180:
        case -180:
            info.newTile.rotation = 3;
            break;
        case 270:
        case -90:
            info.newTile.rotation = 4;
            break;
        }
    }

    displayTile();
    if (info.newTilePlaced) drawBaord();

    console.log('rotated tile. new angle is: ' + deg + ' new rotation is: ' + info.newTile.rotation);
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

function getBoardPosFromMouse(cvs, evt) {
    //set up the board position, the return object
    var bPos = {};
    var mPos = getMousePos(cvs, evt);
    var baordSize = info.gameBoard.length;
    var t = info.tileSize;

    var centreBoard = (baordSize / 2 * t) - (t / 2);

    // adjust for gameBoard centering
    mPos.x = mPos.x + centreBoard;
    mPos.y = mPos.y + centreBoard;
    // adjust for screen centering
    mPos.x = mPos.x - info.windW / 2;
    mPos.y = mPos.y - info.windH / 2;
    // adjust for panning offset
    mPos.x = mPos.x - panInfo.offSetX;
    mPos.y = mPos.y - panInfo.offSetY;

    //translate mouse position into a game tile position
    bPos.x = Math.floor((mPos.x / info.tileSize + 1));
    bPos.y = Math.floor((mPos.y / info.tileSize + 1));

//    console.log('mPos = this bPos: ' + bPos.x + ',' + bPos.y);
    return bPos;
}

function getNewTilePosFromMouse(cvs, evt) {
    //set up the board position, the return object
    var bPos = {};
    var mPos = getMousePos(cvs, evt);

    bPos.x = Math.floor((mPos.x / info.splitLen));
    bPos.y = Math.floor((mPos.y / info.splitLen));
    return bPos;
}

function getMousePos(cvs, evt) {
    var rect = cvs.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

//TODO get tile name to draw right board tiles.
//TODO ajust for drawman
function drawBaord() {
    var board = info.gameBoard;
    var boardSize = board.length;
    var c = info.ctx;
    var t = info.tileSize;
    var count = 0;

    c.clearRect(0, 0, info.windW, info.windH);
    c.strokeStyle = "black";
    for (var row = 0; row < boardSize; row++) {
        for (var col = 0; col < boardSize; col++) {
            count++;
            c.save();
            //Paning
            c.translate(panInfo.offSetX, panInfo.offSetY);
            //move to centre of the screen
            c.translate(info.windW / 2, info.windH / 2);
            //move to the centre of the grid
            c.translate(-1 * boardSize / 2 * t - t / 2, -1 * boardSize / 2 * t - t / 2);
            //move rectangle drawing along
            c.translate(t * col, t * row);
            c.strokeRect(0, 0, t, t);
            //display tile coordinates on baord
//            c.fillText('('+col+','+row+')', 0, 0);

            //draw tile image
            if (board[row][col]) {
                var tile = board[row][col];
                var angle = (tile.rotation - 1) * 90;
                var img;

                c.save();
                //move to center of tile to rotate
                c.translate(t / 2, t / 2);
                // rotate to current rotaion
                c.rotate(Math.PI / 180 * angle);
                //move back to top rght corner
                c.translate(-t / 2, -t / 2);
                c.drawImage(imgs[tile.name], 0, 0, t, t);
                c.restore();

                //draw man
                if (tile.placedMan) {
                    drawMan(tile.placedMan[0], tile.placedMan[1], t, c);
                }
            }
            c.restore();
        }
    }
    console.log('finished drawing baord');
}

function setnewTileImgPath(tile) {
    var name = tile.name;
    var path = 'res/pics/tiles/original-game/';
    var src = path + name + '.png';
    info.newTile.src = src;
}

function displayTile() {
    var c = info.ctx2;
    var t = info.canvas2.width;
    var r = (info.newTile.rotation - 1) * 90;
    var img = info.newTileImg;

    c.save();
    //more point to centre of new tile
    c.translate(t / 2, t / 2);
    //rotate on centre axis
    c.rotate(Math.PI / 180 * r);
    //move back to top right corner
    c.translate(-t / 2, -t / 2);
    c.drawImage(img, 0, 0, 200, 200);
    c.restore();
    drawTileGrid();
    if (info.newTile.placedMan) {
        drawMan(info.newTile.placedMan[0], info.newTile.placedMan[1], t, c);
    }
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
    var angle = (tile.rotation - 1) * 90;
    var cPos = info.currentPos;
    info.newTile.row = by;
    info.newTile.column = bx;

    if (cPos.x == bx && cPos.y == by && info.newTilePlaced) {
        removeTileFromBoard(bx, by);
        info.newTilePlaced = false;
        drawBaord();
        console.log('removed tile from front-end baord. Pos: ' + JSON.stringify(cPos));
    } else {
        //update board with new tile
        removeTileFromBoard(cPos.x, cPos.y);
        placeTileOnBoard2(bx, by);
        drawBaord();
        updateCurrentPos(bx, by);
        info.newTilePlaced = true;

        c.save();
        //move to the centre of current tile
        c.translate(bx * t + t / 2, by * t + t / 2)
            //rotate img from centre
        c.rotate(angle * toRadians);
        //move to top right corner of given tile
        c.translate(-t / 2, -t / 2);
        c.drawImage(info.newTileImg, 0, 0, t, t);
        c.restore();

        //draw man
        if (info.newTile.placedMan) {
            c.save();
            c.translate(bx * t, by * t);
            drawMan(info.newTile.placedMan[0], info.newTile.placedMan[1], t, c);
            c.restore();

        }
        console.log('placed tile on front-end board. Pos: ' + JSON.stringify(cPos));
    }
}

function placeTileOnBoard2(x, y) {
    var tile = info.newTile;
    info.currentPos.x = x;
    info.currentPos.y = y;
    info.gameBoard[y][x] = tile;
}

function removeTileFromBoard(x, y) {
    if (x >= 0 || y >= 0) info.gameBoard[y][x] = null;
}

function updateCurrentPos(x, y) {
    info.currentPos.x = x;
    info.currentPos.y = y;
}

function getBoardTile(x, y) {
    //return the tile at pos [x,y] or null
    var result = info.gameBoard[y][x];

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
    if (x == -1 && y == -1) {} else {
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
}

//TODO Clean up. only use info.newTile.placedMan instead of info.placedMan
function placeMan(x, y) {
    if (info.placedMan) {
        console.log("Man was at: ["+info.newTile.placedMan[0]+","+info.newTile.placedMan[1]+"]");
        if (info.newTile.placedMan[0] == x && info.newTile.placedMan[1] == y) {
            info.newTile.placedMan = [-1, -1];
            displayTile();
            console.log("Removed man from: ["+x+","+y+"]");
        } else {
            displayTile(info.newTile);
            info.newTile.placedMan = [x, y];
            displayTile();
            console.log("Moved man to: ["+x+","+y+"]");
        }
    } else {
        info.placedMan = [x, y];
        info.newTile.placedMan = [x, y];
        //use drawMan instead of displayTile because tile does not need to be redrawn
        drawMan(x, y, info.canvas2.width, info.ctx2);
        console.log("Placed man on: ["+x+","+y+"]");

    }

    if(info.newTilePlaced) drawBaord();
}

function validPlay() {
    if (info.newTilePlaced) {
        console.log('tile placed successfully to server');
        var resp = placeTile(info.newTile);
        //        resp = JSON.parse(resp);
        console.log('resp from server: ' + resp);
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
    console.log('got board from server succesfully')
    return JSON.parse(xhr.responseText);
}

//get the next tile from the server
function getNextTile() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/v2/generate", false);
    xhr.send();
//    console.log("tile generated is: "+ xhr.responseText);
    info.newTile = JSON.parse(xhr.responseText);
    //need to add placedMan because server does not
    info.newTile.placedMan = [-1, -1];
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
    return xhr.responseText;
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

//Helper function. Time it takes to run a function
function speed(fnc) {
    var d1 = new Date();
    fnc();
    var d2 = new Date();
    return d2.getTime() - d1.getTime();
}
