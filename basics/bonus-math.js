/*
 * Propriétés de l'objet Math
 */
 
// Valeur de PI
Math.PI; // > 3.141592653589793

// Return un float aléatoire entre 0 et 1
Math.random(); // > 0.6489414952374971

// Arrondis à l'entier le plus proche
Math.round(5.25); // > 5

// Arrondis à l'entier supérieur
Math.ceil(5.25); // > 6

// Arrondis à l'entier inférieur
Math.floor(5.25); // > 5

// Retourne le plus grand nombre
Math.max(1, 5); // > 5

// Retourn le plus petit nombre
Math.min(1, 5); // > 1

// Autres méthodes

Math
    .abs(x) // > Valeur absolue
    .sin(x), .cos(x), .tan(x) // > Fonctions trigonométriques standards ; paramètres en radians
    .acos(x), .asin(x), .atan(x), .atan2(x, y) // > Fonctions trigonométriques inverses ; valeurs de retour en radians
    .exp(x), .log(x) // > Exponentielle et logarithme naturels, en base e
    .pow(x, y) // > Exponentielle ; le premier paramètre est la base, le second est l'exposant
    .sqrt(x) // > Racine carrée