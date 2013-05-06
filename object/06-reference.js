
var player1 = {
    id: 'Pierre',
    x: 1,
    y: 1,
    life: 100
};

var player2 = {
    id: 'Cyrille',
    x: 1,
    y: 1,
    life: 100
};

moveLeft = function() {
    this.x -= 1;
};


player1.moveLeft = moveLeft;
player2.moveLeft = moveLeft;


player1.moveLeft();
player2.moveLeft();
