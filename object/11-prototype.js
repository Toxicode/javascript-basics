
function Player(name) {
    this.id = name;
    this.x = 1;
    this.y = 1;
    this.life = 100;
};


Player.prototype.moveLeft = function() {
    this.x -= 1;
};


var player1 = new Player('Pierre');
var player2 = new Player('Cyrille');


player1.moveLeft();
player2.moveLeft();
