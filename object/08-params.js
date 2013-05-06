
moveLeft = function() {
    this.x -= 1;
};

// ... moveRight, moveUp, moveDown

function constructor(player, name) {
    player.id = name;
    player.x = 1;
    player.y = 1;
    player.life = 100;
    player.moveLeft  = moveleft;
    player.moveRight = moveRight;
    player.takeItem  = takeItem;
};


var player1 = {};
var player2 = {};


constructor(player1, 'Pierre');
constructor(player2, 'Cyrille');


player1.moveLeft();
player2.moveLeft();