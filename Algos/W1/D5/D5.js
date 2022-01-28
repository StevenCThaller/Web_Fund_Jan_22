// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
// As soon as we reassign a different value to a variable, that variable's
// previous value is gone immediately

// What would we probably expect if we didn't know very much about code?

// Let's try something else.
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// What happens this time??


// While Loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}



// Reversing an array (i.e. The Missy Elliot)
function reverse(arr) {
    // Using a for loop, we need to ensure the same thing we did
    // with the while loop: That the loop will stop when our left side index
    // hits the middle
    for(var left = 0; left < arr.length / 2; left++) {
        // But we need to swap left from the front with left from the end (left being a number)
        var right = arr.length - 1 - left;
        // Now, we need a temporary variable to store one of the values for the swap
        var temp = arr[left]; // store the left value in the variable
        // Set arr[left] to be arr[right]
        arr[left] = arr[right];
        // and finally, take the value we stored in the temporary variable, and set it to 
        // be the new value of arr[right]
        arr[right] = temp;
    }


    return arr;
}

var array = ["a", "b", "c", "d", "e"];
var result = reverse(array);
console.log(result);
// expected: ["e", "d", "c", "b", "a"]