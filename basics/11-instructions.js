/*
 * if, else if, else
 */

var age = 26;

if (age > 27) {
    console.log("Old");
} else if (age < 5 ) {
    console.log("Very Young");
} else {
    console.log("Young");
}

console.log(age > 27 ? "Old" : "Young");


/*
 * switch
 */

var weapon = "hammer";
switch(weapon) {
    
    case "shotgun":
        console.log("Bang!");
        break;
        
    case "bomb":
        console.log("Boom!");
        break;
        
    case "hammer":
        console.log("Paf!");
        break;
        
    default:
        console.log("Default");
        break;
}

/*

Syntaxe alternative au switch
var weapons = {
    hammer: function() {
        console.log("Paf!");
    },
    shotgun: function() {
        console.log("Bang!");
    },
    bomb: function() {
        console.log("Boom!");
    }
};

if (typeof weapons[weapon] === "undefined") {
    console.log("Default");
} else {
    weapons[weapon]();
}
*/

/*
 * for
 */

for (var i = 0; i < 100; i++) {
    console.log(i);
}