
moveLeft = function() {
    this.x -= 1;
};

// ... moveRight, moveUp, moveDown

function constructor(name) {
    this.id = name; //Attention à this !
    this.x = 1;
    this.y = 1;
    this.life = 100;
    this.moveLeft = moveleft;
    this.moveRight = moveRight;
    this.takeItem = takeItem;
};


var player1 = new constructor('Pierre');
var player2 = new constructor('Cyrille');

player1.moveLeft();
player2.moveLeft();





/*
function new(f, arguments) {
    o = {};
    f.apply(o, arguments);
    return o;
}

var player1 = new(constructor);
*/
