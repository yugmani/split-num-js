// Import stylesheets
import './style.css';

// How to Split a Number into an Array in JavaScript
// **************************************************

// 1. Array.from() Method
function splitIntoArray(num) {
  return Array.from(String(num), Number);
}

const arr1 = splitIntoArray(1234);
console.log(arr1); //[1, 2, 3, 4]

const arr2 = splitIntoArray(37865);
console.log(arr2); //[3, 7, 8, 6, 5]

// Using Array map() instance method
// *************************************
const num1 = 54321;

//convert into string
const arrOfString = Array.from(String(num1));

//iterate over array of string and convert each of them into Number.
const arrOfNumber = arrOfString.map((str) => Number(str));
console.log(arrOfNumber); //[5, 4, 3, 2, 1]

// 2. String split() Method
// *******************************************

function splitIntoString(num) {
  return String(num).split('');
}

console.log(splitIntoArray(9876)); //[9, 8, 7, 6]
