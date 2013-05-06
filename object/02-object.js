
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

function moveLeft(x) {
    return x - 1;
}

player1.x = moveLeft(player1.x);
