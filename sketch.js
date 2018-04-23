var game = -178
var over = 700
var yes = -450
var no = 1050

function setup() {
    // put setup code here 
    createCanvas(700, 1000);
    background('black');
}

function draw() {
    // put drawing code here

    // Prevents nasty animation blur for text
    fill('black')
    rect(0, 400, width, 160)

    fill("#ad846");
    textSize(50);
    textFont("Helvetica");
    text('GAME', game, 460);
    text('OVER', over, 460);
    text('Yes', yes, 550);
    text('/ No', no, 550);
    textStyle(ITALIC);

    // Text Animations
    game = game + 3
    if (game >= 170) {
        game = 170
    }

    over = over - 3
    if (over <= 330) {
        over = 330
    }

    fill('red');
    rect(200, 475, 250, 10);

    yes = yes + 3
    if (yes >= 250) {
        yes = 250
    }

    no = no - 3
    if (no <= 350) {
        no = 350
    }
}

function mousePressed() {

    var bgColor2 = color('red')
    background(bgColor2);

}