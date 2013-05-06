// Références : https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// Construire une expression régulière : http://www.debuggex.com/

/*
 * Définir une expression régulière
 */

// Cherche 1 chiffre ou +
var exp = /\d+/;

// Retourner un tableau de correspondances
"Il y a 34 personnes".match(exp); // > ["34"]

// Retourner la position de la correspondance
"Il y a 34 personnes".search(exp); // > 7

// Retourner si l'expression a une correspondance
exp.test("Il y a 34 personnes"); // > true