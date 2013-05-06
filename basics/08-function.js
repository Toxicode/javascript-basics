/*
 * Définir une fonction
 */

var life = 100;

// Définition basique
function takeDamages(amount) {
    return life -= amount;
}

// Assignation d'une fonction anonyme dans une variable
var takeDamages = function(amount) {
    return life -= amount;
};

/*
 * Executer une fonction
 */
 
takeDamages(25); // > 75

/*
 * Fonction anonyme auto-executée
 */

// Cette fonction s'éxecutera automatiquement
(function(damages) {

    alert("Life: " + takeDamages(damages));
    
})(25);