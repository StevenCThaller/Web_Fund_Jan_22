// Nesting Arrays
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array




// Could we determine if a certain value was present? Write a function
// called isPresent2d(arr2d, value) that returns true if the value is 
// present and false otherwise

// Note: Do not assume the array will always be the same size. We must 
// rely on its .length property (both the outer and inner arrays)
// Hint: Can we put a for loop inside another for loop?
function isPresent2d(arr2d, value) {
    // If we want to check every element in every sub-array, we need to
    // SEE every sub-array.
    for(var i = 0; i < arr2d.length; i++) {
        // Now, i is the index of a sub-array! But I want to dive deeper,
        // and check the elements in THAT sub-array. Each sub-array is
        // arr2d[i], so in our for loop:
        for(var j = 0; j < arr2d[i].length; i++) {
            // NOW we can see each element. What are we doing here again?
            // Oh, right. We want to see if a given value exists.
            if(arr2d[i][j] == value) {
                // If we're in here, it means that we found the value. No
                // need to keep checking more values, so let's just return true!
                return true;
            }
        }
    }

    // What if we get all the way here? Well then it means that we never
    // found our value, so it must not be in this 2d array.
    return false;
}

var sampleInput = [
        [8, 6, 7],
        [5, 3],
        [0, 9]
];
console.log(isPresent2d(sampleInput, 2)) // should return false
console.log(isPresent2d(sampleInput, 6)) // should return true

// Flatten Array 

// Given a 2 dimensional array (an array containing arrays), return a new array 
// containing just the values from inside the sub-arrays. Don't assume the array 
// will always be the same size, or that the sub-arrays are all the same length 
// (the array might be jagged). Don't use built-in methods like Array.prototype.flat() 
// but feel free to use .push(value) and/or .pop() where needed.
// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    // We're going to take the same exact approach as the previous challenge,
    // only our inner for loop is going to look a little different inside.
    for(var i = 0; i < arr2d.length; i++) {
        for(var j = 0; j < arr2d[i].length; j++) {
            // Instead of checking for something, we're going to
            // just take the value and push it into our flat array.
            flat.push(arr2d[i][j]);
        }
    }

    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

