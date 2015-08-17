var info = {
    tileSize: 100
}

window.onload = updateInfo ();

function go() {
    console.log("start Game");
    updateInfo();
    window.addEventListener('resize', updateInfo);
    drawGrid();
    window.addEventListener('resize', drawGrid);
}

function updateInfo() {
    info.windW = document.getElementById("my-canvas").width;
    info.windH = document.getElementById("my-canvas").height;
}

function drawGrid() {
    //draw the grid based on window size
    info.ctx.clearRect(0, 0, w, h);

    for (var gridX = 0; gridX < info.windW / info.tileSize; gridX++) {
        for (var gridY = 0; gridY < info.windH / info.tileSize + 1; gridY++) {
            info.ctx.strokeRect(gridX * info.tileSize, gridY * info.tileSize, info.tileSize, info.tileSize);

        }
    }
}
