/*
 * Définition d'un objet
 */

var player = {};


/*
 * Affectation de propriétés
 */

player.name = "Cyrille";
player["life"] = 100;


/*
 * Initialisation et Affectation
 */

var player = {
    name: "Cyrille",
    life: 100,
    "adresse e-mail": "bogaert.cyrille@gmail.com"
};


/*
 * Lecture d'une propriété
 */

console.log(player.name); // > "Cyrille"
console.log(player["adresse e-mail"]); // > "bogaert.cyrille@gmail.com"