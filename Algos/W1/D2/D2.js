// Lesson 1: Predict the Output
// var: declaration of a variable
// a: the shortcut that we'll use to access whatever is stored in memory regarding that variable
// =: assigning the variable some value
var a = 25;
a = a - 13;
// at this point, a has a value of 12
console.log(a / 2);

a = "hello";
console.log(a + " hello");
// OUTPUT: 
// 6
// hello hello


// Lesson 2: Predict Loops
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);
// OUTPUT:
// 0
// 4
// 8
// outside of the loop 12


// Lesson 3: Predict what the code does
var myNumbers = [1, 3, 5];

function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal(myNumbers);
// OUTPUT:
// the current sum is: 2
// the current sum is: 5
// the current sum is: 10
// the total is: 10


// BONUS: Why does the above code say at the end that the total is 10? Is this the answer
// you would expect?
// Fix #1: Initialize sum as 0 instead of arrayOfNumbers[0]
// Fix #2: Initialize i within the for loop as 1 instead of 0