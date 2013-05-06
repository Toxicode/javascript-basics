/*
 * Variable globale
 */

// Définition d'une variable dans le scope global
var name = "Cyrille";

function displayName() {
    console.log(name); // > Cyrille
}
displayName();
console.log(name); // > Cyrille


/*
 * Variable locale
 */

function setAge() {
    
    // Scope local à la fonction
    var age = 26;
    
    console.log(age); // > 26
}
setAge();
console.log(age) // > undefined

/*
 * 
 */

// Définition d'une variable globale
var life;

function setLife() {
    // Affectation de la variable globale
    life = 100;
    
    console.log(life); // > 100
}
setLife();
console.log(life) // > 100