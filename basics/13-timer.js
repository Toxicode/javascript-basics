/*
 * Définir un setTimeout
 */

// Ce setTimeout affichera "Hello World" dans 1 seconde (1000ms)
var timeout = setTimeout(function() {
    console.log("Hello World");
}, 1000);

// Détruire le setTimeout avant qu'il soit utilisé
clearTimeout(timeout);

/*
 * Définir un setInterval
 */

// Ce setInterval affichera "Hello World" à chaque seconde jusqu'à sa destruction
var interval = setInterval(function() {
    console.log("Hello World");
}, 1000);

// Détruire le setInterval
clearInterval(interval);