/*
 * Connaître les types d'objet avec typeof
 */

typeof 1;
// > "number"

typeof "Cyrille";
// > "string"

typeof false;
// > "boolean"

typeof function() {};
// > "function"

typeof undefined;
// > "undefined"

typeof [];
// > "object"

typeof {};
// > "object"

typeof null;
// > "object"

/*
 * Tester les types d'objet avec typeof
 */
 
if(typeof player === "undefined") {
    var player = "Cyrille";
}