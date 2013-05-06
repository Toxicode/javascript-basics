
// On définit une variable pour chaque propriété et chaque joueur
var player1id = 'Pierre';
var player1x = 1;
var player1y = 1;
var player1life = 100;

var player2id = 'Cyrille';
var player2x = 1;
var player2y = 1;
var player2life = 100;

// Une fonction qu'on va utiliser pour déplacer un joueur
function moveLeft(x) {
    return x - 1;
}

player1life = 92;

// On déplace le joueur
player1x = moveLeft(player1x);
