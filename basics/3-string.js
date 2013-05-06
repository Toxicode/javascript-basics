/*
 * Définition d'une chaîne de caractères
 */

"Cyrille"; // > "Cyrille"
"1+1"; // "1+1"


/*
 * Coller 2 chaînes de caractères
 */

console.log("Hello "+"World"); // > "Hello World"

var name = "Cyrille";
console.log("Hello "+name); // > "Hello Cyrille"

/* 
 * Taille d'une chaîne de caractères
 */

var greetings = "Hello World";
console.log(greetings.length); // > 11


/*
 * Copier une partie d'une chaîne de caractères
 */

// .slice(à partir de, [optionnel] nombre de caractère à copier)
"Hello World".slice(1) // > "ello World"
"Hello World".slice(0, 5) // > "Hello"


/*
 * Découper une chaîne de caractères
 */

"Hello World".split(" "); // ["Hello", "World"]
"Hello World".split("o"); // ["Hell", "w", "rld"]


/*
 * Remplacer un morceau d'une chaîne par un autre
 */

"Hello World".replace("World", "Cyrille"); // > "Hello Cyrille"


/*
 * Autres méthodes
 */

// Retrouver le caractère d'une position donnée
"Hello".charAt(1); // > "e"

// Retourne la position de la premier occurence d'un caractère donné
"Hello".indexOf("l"); // > 2

// Retourne la position de la dernière occurence d'un caractère donné
"Hello".lastIndexOf("l"); // > 3

// Transformer les caractères en minuscules
"Hello".toLowerCase(); // > "hello"

// Transformer les caractères en majuscules
"Hello".toUpperCase(); // > "HELLO"
