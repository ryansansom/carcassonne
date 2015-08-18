var info = new Object();
info.tileSize = 100;

function startGameApp() {
    //Add canvas and context to the game information object
    info.canvas = document.getElementById('my-canvas');
    info.ctx = info.canvas.getContext('2d');
    /*Initialise the width and height of the canvas based on window size and add a window resize listent to update it. */
    updateInfo();
    window.addEventListener('resize', updateInfo);

    //Draw an initial grid. This is a tester method
    drawGrid();
    window.addEventListener('resize', drawGrid);

    //Draw a tile in the centre of the screen
    drawCentre();
    window.addEventListener('resize', drawCentre);
}

// Update the game info object with the window height and width.
function updateInfo() {
    info.windW = document.getElementById("my-canvas").width;
    info.windH = document.getElementById("my-canvas").height;
}


// Tester function to draw a grid
function drawGrid() {
    //draw the grid based on window size
    var c = info.ctx;
    c.clearRect(0, 0, info.windW, info.windH);

    c.strokeStyle = "black";
    for (var gridX = 0; gridX < info.windW / info.tileSize + 1; gridX++) {
        for (var gridY = 0; gridY < info.windH / info.tileSize + 1; gridY++) {
            c.strokeRect((info.tileSize * gridX) + info.windW%info.tileSize, (info.tileSize * gridY) + info.windH%info.tileSize, info.tileSize, info.tileSize);

        }
    }
}

//tester function to draw a square in the middle of the screen
function drawCentre() {
    var c = info.ctx;
    //    c.clearRect(0, 0, info.windW, info.windH);

    var horCen = info.windW / 2;
    var verCen = info.windH / 2;
    var tileWidthCen = info.tileSize / 2;
    var tileHeightCen = info.tileSize / 2;
    c.strokeStyle = "red";
    c.strokeRect(horCen - tileWidthCen, verCen - tileHeightCen, info.tileSize, info.tileSize);
}
