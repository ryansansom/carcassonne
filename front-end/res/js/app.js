var info = new Object();
info.tileSize = 100;
info.scale = 1;
info.scaleMultiplyer = 0.8;

function startGameApp() {
    //Add canvas and context to the game information object
    info.canvas = document.getElementById('game-board');
    info.ctx = info.canvas.getContext('2d');
    /*Initialise the width and height of the canvas based on window size and add a window resize listent to update it. */
    updateInfo();
    window.addEventListener('resize', updateInfo);

    //Draw an initial grid. This is a tester method
    drawGrid();
    window.addEventListener('resize', drawGrid);

    //Zooming listeners
    $('#plus').click(function () {
//        info.scale /= info.scaleMultiplyer;
        info.tileSize /= info.scaleMultiplyer;
        drawGrid();
    });

    $('#minus').click(function () {
//        info.scale *= info.scaleMultiplyer;
        info.tileSize *= info.scaleMultiplyer;
        drawGrid();
    });

    $('#recentre').click(function () {
//        info.scale = 1;
        info.tileSize = 100;
        drawGrid();
    });

    //initial rotation of tile
    rotate('new-tile', 0);
    //    drawBaord();

    //    console.log(getBoard());
    //    console.log(getNextTile());
    //    console.log(placeTile());
}

// Update the game info object with the window height and width.
function updateInfo() {
    info.windW = document.getElementById("game-board").width;
    info.windH = document.getElementById("game-board").height;
}

//rotates the element by 'id' by a give degree
function rotate(id, deg) {
    if (deg != 0) {
        var currentDeg = getAngle(id);
        deg += currentDeg;
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

/*
magic code that centers the grid!
c.save();
c.translate(info.windW / 2 - info.tileSize / 2, info.windH / 2 - info.tileSize / 2);
c.strokeRect(info.tileSize * gridX, info.tileSize * gridY, info.tileSize, info.tileSize);
c.restore();
*/

// not quite woring yet.
function drawBaord() {
    var board = getBoard();
    var boardSize = board.length;
    var c = info.ctx;
    c.clearRect(0, 0, info.windW, info.windH);
    c.strokeStyle = "black";

    for (var gridX = ~(boardSize / 2); gridX < boardSize; gridX++) {
        for (var gridY = ~(boardSize / 2); gridY < boardSize; gridY++) {
            c.save();
            c.translate(boardSize / 2 - info.tileSize / 2, boardSize / 2 - info.tileSize / 2);
            c.strokeRect(info.tileSize * gridX, info.tileSize * gridY, info.tileSize, info.tileSize);
            c.restore();
        }
    }

}

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

//To Delete
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

//gets the board from the server
function getBoard() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/getboard", false);
    xhr.send();

    //    console.log(xhr.responseText);
    return JSON.parse(xhr.responseText);
}

//get the next tile from the server
function getNextTile() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/generate", false);
    xhr.send();

    return JSON.parse(xhr.responseText);
}

//sends the tile placement location to the server
function placeTile(tile) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/placetile", false);
    xhr.send(tile);

    return JSON.parse(xhr.responseText);
}
