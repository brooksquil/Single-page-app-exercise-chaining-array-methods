console.log("Chaining array methods");


// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// Sort the numbers in descending order (10, 9, 8, 7, etc):
// let arrayResults = integers.sort((a, b) => { return b - a });
// console.log(arrayResults);

// Remove any integers greater than 19:
// let arrayResults = integers.sort((a, b) => { return b - a }).filter((num) => { return num < 19 });
// console.log(arrayResults);

// Multiply each remaining number by 1.5 and then subtract 1:
// let arrayResults = integers.sort((a, b) => { return b - a }).filter((num) => { return num < 19 }).map((num) => { return (num * 1.5) - 1 });
// console.log(arrayResults);


// Then output (either in the DOM or the console) the sum of all the resulting numbers:


let arrayResults = integers.sort((a, b) => { return b - a }).filter((num) => { return num < 19 }).map((num) => { return (num * 1.5) - 1 }).reduce((numBefore, numNow) => { return numBefore + numNow });

console.log("arrayResults", arrayResults);