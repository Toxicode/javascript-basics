/*
 * Les booléens
 */

var alive = true;

// Tester si alive est true
if (alive === true) {}
// Raccourcis
if (alive) {}

// Tester si alive est false
if (alive === false) {}
// Racourcis
if (!alive) {}

!true // > false
!false // > true
!!true // > true
!!false // > false

// Conversion d'un nombre en booléen
!0 // > true
!1 // > false
!!0 // > false
!!1 // > true