/*#####################################################
Adjust canvas to window size
#####################################################*/

window.onload = function () {
    canvasSize();
    window.addEventListener('resize', canvasSize);
    welcomeClick();
    window.addEventListener('resize', welcomeClick);

    //adding click listener for placing tiles
    document.getElementById("my-canvas").addEventListener('click', startGame);
}

document.onload = function () {

}

function canvasSize() {
    document.getElementById("my-canvas").width = window.innerWidth;
    document.getElementById("my-canvas").height = window.innerHeight;
}

/*#####################################################
Welcome Screen
#####################################################*/

function welcomeClick() {
    welcomeMessage("Welcome to Carcassonne", "Click anywhere to play...");
}

function welcomeMessage(title, sub) {
    var ctx = document.getElementById('my-canvas').getContext('2d');
    var w = document.getElementById("my-canvas").width;
    var h = document.getElementById("my-canvas").height;

    var t1 = title;
    var t2 = sub;

    var textW = 0;

    ctx.clearRect(0, 0, w, h);

    ctx.font = "48px serif";
    textW = ctx.measureText(t1).width;
    var x = w / 2 - textW / 2;
    var y = h / 2;
    ctx.fillText(t1, x, y);

    ctx.font = "22px serif";
    textW = ctx.measureText(t2).width;
    x = w / 2 - textW / 2;
    y = y + 48; //height of title font
    ctx.fillText(t2, x, y);
}

function startGame() {
    //prevents the countdown to restart.
    document.getElementById("my-canvas").removeEventListener('click', startGame);
    //prevents the welcomes sceen from comming back once the game has started.
    window.removeEventListener('resize', welcomeClick);

    //commented out to speed up testing
//        countDown(3);
    startGameApp();

}

function countDown(num) {
    if (num > 0) {
        welcomeMessage(num + "...", "");
        setTimeout(function () {
            countDown(num - 1)
        }, 1000);
    } else {
        welcomeMessage("GO!", "");
        startGameApp();
    }
}
