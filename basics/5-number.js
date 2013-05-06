/*
 * Définition d'un nombre
 */

var life = 100;
var position = 115.124;
var ratio = 16/9;

/*
 * Infini
 */

Infinity-1; // > Infinity

/*
 * Conversion
 */

// Conversion Impossible
124/function() {} // > NaN (Not A Number)

// Conversion en String
124+"e" // > "124e"
124+"1" // > "1241""

// Conversion en Int
// parseInt(entier au format string à convertir, base de conversion)
// Le parseInt est généralement utilisé en base 10
parseInt("8", 10); // > 8
parseInt("01.1", 10); // > 1
parseInt("hello", 10); // > NaN

// Conversion en Float
parseFloat('10.1') // > 10.1
parseFloat('10') // > 10

