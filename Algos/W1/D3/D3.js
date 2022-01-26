// Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// OUTPUT:
// I should bring: sunglasses, a coat, and a smile!


// Prepare for Downcount
for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

// OUTPUT:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// ignition!
// 1
// liftoff!

// Count Positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// Loop through the array
for(var i = 0; i < numbers.length; i++) {
    // If the value at the current index is positive
    if(numbers[i] > 0) {
        // Then increment our countPositives variable to indicate we found another
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");

// EXPECTED OUTPUT: there are 4 positive values