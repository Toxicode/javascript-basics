

moveLeft = function() {
    this.x -= 1;
};

// ... moveRight, moveUp, moveDown

function Player(name) {
    this.id = name; //Attention à this !
    this.x = 1;
    this.y = 1;
    this.life = 100;
    this.moveLeft  = moveleft;
    this.moveRight = moveRight;
    this.takeItem  = takeItem;
};



var player1 = new Player('Pierre');
var player2 = new Player('Cyrille');


player1.moveLeft();
player2.moveLeft();

