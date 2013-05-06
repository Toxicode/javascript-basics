/*
 * JSON to String
 */

var string = JSON.stringify({ hello: 'world' }); // > "{"hello":"world"}"

/*
 * String to JSON
 */

var object = JSON.parse(string); // >  Object { hello:"world" }