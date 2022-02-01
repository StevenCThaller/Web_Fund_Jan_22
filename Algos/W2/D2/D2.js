// What are objects?
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// // Using the monster variable above, how can we access the name?
// console.log(monster.name);

// // Using the monster variable above, how can we access the 2nd type?
// console.log(monster.types[1]);


// Array of Objects
var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
// // If we wanted to console.log the names of the pokemon who have an id greater than 99, we could:
// for(var i = 0; i < pokemon.length; i++) {
//     if(pokemon[i].id > 99) {
//         console.log(pokemon[i].name);
//     }
// }

// CHALLENGE TIME
// Using the array of pokmeon above and loops:
// 1. console.log the pokemon objects (the entire object) whose id is evenly divisible by 3
console.log("****** Challenge 1 ******")
for(var i = 0; i < pokemon.length; i++) {
    // Divisible by 3 is the same as saying dividing by 3 gives a remainder of 0, and that's what
    // the modulus operator is for:
    if(pokemon[i].id % 3 == 0) {
        console.log(pokemon[i]);
    }
}
console.log("****** Challenge 2 ******")
// 2. console.log the pokemon objects (the entire object) that have more than one type
for(var i = 0; i < pokemon.length; i++) {
    // More than one type is the same as "the types array has a length greater than 1"
    if(pokemon[i].types.length > 1) {
        console.log(pokemon[i]);
    }
}

console.log("****** Challenge 3 ******")
// 3. console.log the names (just the name) of the pokemon whose only type is poison
for(var i = 0; i < pokemon.length; i++) {
    // Javascript is really wishy washy, but we don't want to be. So we need to check 2 things:
    // 1. That there is only one type
    // 2. That the only type is "poison"
    if(/*condition 1*/pokemon[i].types.length == 1 && /*condition 2*/pokemon[i].types[0] == "poison") {
        console.log(pokemon[i].name);
    }
}

console.log("****** Challenge 4 ******")
// 4. console.log the first type of all the pokemon whose second type is flying
for(var i = 0; i < pokemon.length; i++) {
    // Many other languages will error out if you try and access the 1 index in a 1 element array
    // (i.e. accessing the 2nd element of a 1 element array), but javascript will take "that's not possible"
    // to mean "false". I don't like relying on wishy washy logic though, so I'll be running
    // 2 conditions
    if(pokemon[i].types.length == 2 && pokemon[i].types[1] == "flying") {
        console.log(pokemon[i].types[0]);
    }
}

console.log("***** BONUS CHALLENGE *****")
// BONUS: console.log the REVERSE of the names of the pokemon whose only type is poison. 
// i.e. Pikachu would become uhcakiP
for(var i = 0; i < pokemon.length; i++) {
    // Same search condition as #3
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] == "poison") {
        // NO BUILT INS! Yes, they work, but they don't prove we ACTUALLY know what we're doing sometimes.
        // Unfortunately, we can't reverse a string the way we do an array: strings are immutable
        // So we need to iterate through the name backwards and add each character to a new string.
        var reverseName = "";
        // using j here because we're already using i above
        for(var j = pokemon[i].name.length - 1; j >= 0; j--) {
            reverseName += pokemon[i].name[j];
        }

        console.log(reverseName);
    }
}