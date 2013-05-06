
moveLeft = function() {
    this.x -= 1;
};

// ... moveRight, moveUp, moveDown

function constructor(player) {
    player.moveLeft = moveleft;
    player.moveRight = moveRight;
    player.takeItem = takeItem;
};


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

constructor(player1);
constructor(player2);


player1.moveLeft();
player2.moveLeft();
