// Références : https://developer.mozilla.org/fr/docs/JavaScript/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/Array

/*
 * Définir un tableau
 */

// Définir le tableau
var years = [];

// Alimenter un tableau
years.push(2000, 2010, 1990, 1980, 1970, 1950);
years.push(1960);

// Raccourcis
var years = [2000, 2010, 1990, 1980, 1970, 1950, 1960];

// Syntaxe pour les tableaux longs
var sports = [
    "football",
    "handball",
    "basketball",
    "baseball",
    "soccer",
    "swimming"
];


/*
 * Accéder aux éléments d'un tableau
 */

years[0] // > 1950
years[1] // > 1960
sports[0] // > "football"
sports[sports.length-1] // > "swimming"


/*
 * Parcourir un tableau
 */
 
for (var i = 0; i < sports.length; i++) {
    var sport = sports[i];
    console.log(sport);
}

// Alternative : nouvelle syntaxe
for (var sport in sports) {
    console.log(sport);
}


/*
 * Connâitre l'index d'un élément d'un tableau
 */

sports.indexOf("basketball"); // > 2

/*
 * Supprimer le dernier élement d'un tableau
 */

var poppedSport = sports.pop();
console.log(poppedSport); // > "swimming";
console.log(sports); // > ["football", ..., "soccer"]


/*
 * Supprimer le premier élément d'un tableau
 */

var shiftedSport = sports.shift();
console.log(shiftedSport); // > "football";
console.log(sports); // > ["handball", ..., "soccer"]


/*
 * Inverser l'ordre d'un tableau
 */
 
sports.reverse();
console.log(sports); // > ["soccer", ..., "handball"]


/*
 * Personnaliser l'order d'un tableau
 */

years.sort(function(yearA, yearB) {
    // A est inférieur à B
    if (yearA < yearB) {
        return -1; // A sera inséré avant B
    
    // A est supérieur à B
    } else {
        return 1; // A sera inséré aprés B
    }
});
console.log(years); // > [1950, 1960, 1970, 1980, 1990, 2000, 2010]


/*
 * Joindre 2 tableaux ensemble
 */

// Créer un tableau avec de nouveaux sports
var otherSports = ["snowboard", "karting"];

// Créer un nouveau tableau qui joint les 2;
var allSports = sports.concat(otherSports);

console.log(sports); // Reste inchangé
console.log(allSports); // > ["soccer", ..., "handball", "snowboard", "karting"]

/*
 * Convertir tout le tableau en une chaîne de caractères
 */
 
var formatSports = sports.join(",");
console.log(formatSports); // > "soccer, ...,  handball, snowboard, karting"

/*
 * Copier une partie d'un tableau
 */

// .slice(couper à partir de, nombre déléments à couper);
var slicedSports = sports.slice(0, 3);
console.log(sports); // Reste inchangé
console.log(slicedSports); // -> [Tout les éléments sauf les 3 premiers]


/*
 * Retirer une partie d'un tableau
 */

// .splice(retirer à partir de, nombre déléments à retirer);
var splicedSports = sports.splice(0, 3);
console.log(sports); // -> [Tout les éléments sauf les 3 premiers]
