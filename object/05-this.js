
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

player1.moveLeft = function() {
    this.x -= 1; //this fait référence au joueur.
};

player1.moveLeft();


player2.moveLeft = player1.moveLeft;

player2.moveLeft();



// De manière générale, à l'intérieur d'une fonction,
// 'this' représente l'objet sur lequel on exécute cette fonction.
// C'est ce qu'on appelle le "contexte d'exécution" de la fonction.
