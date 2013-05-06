
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

function moveLeft(player) {
    player.x -= 1;
}

moveLeft(player1);

