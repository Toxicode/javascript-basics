// Références : https://developer.mozilla.org/fr/docs/R%C3%A9f%C3%A9rence_de_JavaScript_1.5_Core/Objets_globaux/Date

/*
 * Créer une date
 */

// Date d'aujourd'hui
new Date();

// Date générée à partir d'un timestamp unix
new Date(1367846005763);

// Date générée à partir d'un String
new Date("December 17, 1995 03:24:00");

// Date générée à partir de paramètres
// new Date(year, month, day [, hour, minute, second, millisecond]);
new Date(1995,11,17,3,24,0);

/*
 * Récupérer le timestamp de maintenant
 */

Date.now() // > 1367846121290