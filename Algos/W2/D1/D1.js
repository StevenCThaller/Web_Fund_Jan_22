// The Math Library
// Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random(); // Generates a random decimal number betwen 0.0 (inclusive) and 1 (not inclusive), i.e. 0 - 0.9999999999999...
    
console.log(floor); // 1
console.log(ceiling); // 4
console.log(random); // ??



// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function
// that should return an integer value between 1 through 6 at random.
function d6() {
    var roll = Math.random();
    // Current value of roll: between (inc) 0 - 1 (ninc)
    // We need a range of 1 through 6, so let's first multiply by 6
    roll *= 6;
    // Current value of roll: between (inc) 0 - 6 (ninc)
    // Our floor is too low, and our ceiling isn't QUITE high enough. Let's increase the roll by 1
    roll += 1;
    // Current value of roll: between (inc) 1 - 7 (ninc)
    // Now, we only want whole numbers, and 7 is too high, so we'll round down
    roll = Math.floor(roll);
    // And voila! roll has a value of 1 through 6, inclusive of both, and integers only.
    return roll;

    // Bonus 1 liner:
    return Math.floor((Math.random() * 6) + 1)
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly
// choosing a response.
function consultOracle(){
    // choosing a response.
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var index = Math.random();

    // We need to select a random index between 0 and the array's length, inclusive of zero, not inclusive of the length
    // Current index: between (inc) 0 and 1 (ninc)
    // To increase that range to be more in line with what we need:
    index *= lifesAnswers.length;
    // Current index: between (inc) 0 and lifesAnswers.length (ninc) aka 20
    // But A) we don't want 20, because the last item's index is 19, and B) we need whole numbers.
    index = Math.floor(index);
    // Print the answer to life in the console
    console.log(lifesAnswers[index]);

    // And we're done!
}