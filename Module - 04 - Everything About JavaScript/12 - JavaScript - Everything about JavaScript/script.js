/* Inbuilt Features */

console.log("Hello World by JS");
console.warn("Warning");
console.error("Error");

console.log("------------------------------");

/* alert("Hey!!, How are You ??")

var ans = prompt("Enter Your Age :")
console.log(ans) 

*/

console.log("------------------------------");

/* Variables and Constants */

var a = 20; // store and changes
const discount = 10; //only store
console.log(a);
console.log(discount);

console.log("------------------------------");

/* Compilers and Interpreters */

/* Window object = Features which Not part of JS but are available and provided by browsers */

/* Data Types */

// 1. Primitives - Real values copy

let str = "Hello, World!"; // String
let num = 42; // Number
let isTrue = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueSymbol = Symbol("unique"); // Symbol - immutable
let bigIntValue = BigInt(12345678901234567890); // BigInt

// 2. Reference Types - {} [] () - Reference of Parent

let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array

/* function */
let func = function () {
  return "Hello";
};

let obj1 = { ...obj }; // Object spread operator
obj1.age = 26; // Modifying the copied object
console.log(obj); // Original object remains unchanged
console.log(obj1);

let arr1 = [...arr]; // Array spread operator
arr1.push(6); // Modifying the copied array
console.log(arr); // Original array remains unchanged
console.log(arr1);

/* 6.Conditional Statements - if, else if, else, switch */

// 0 false undefined null NaN "" (empty string) - these are considered falsy values in JavaScript.
// All other values are considered truthy.

if ("") {
  console.log("This is true");
} else {
  console.log("This is false"); // Answer
}
if (12) {
  console.log("This is true"); // Answer
} else {
  console.log("This is false");
}

console.log("----------------------------");

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

console.log("----------------------------");

/* 4.Loops(Repeat) - for, forEach, for in, while, do-while, for of */

// For loop - try to create basic loop structure
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}
console.log("----------------------------");

// forEach loop
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index) {
  console.log("forEach number:", num + 2, index);
});

console.log("----------------------------");

// for in loop
let person = { name: "Bob", age: 35 };
for (let key in person) {
  console.log(key);
  console.log(person[key]);
  console.log(key, person[key]);
}
console.log("----------------------------");

/* while loop
  start;
  while(end){
  change
  }
   */

/* 3.Operators - Arithmetic, Assignment, Comparison, Logical */

// Logical Operators

// 0 false undefined null NaN "" (empty string) - these are considered falsy values in JavaScript.
// All other values are considered truthy.

let m = true;
let n = false;
let andResult = m && n; // Logical AND
let orResult = m || n; // Logical OR

console.log(12 || false); // Outputs: 12
console.log(0 && true); // Outputs: 0

console.log("----------------------------");

// 5.Operators - Ternary, Spread, Destructuring

// Ternary Operator
let age;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Outputs: Adult

// Spread Operator
let newArr = [...arr, 6, 7, 8]; // Spreading
console.log(newArr); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

// Destructuring
let { name: personName, age: personAge } = obj; // Object destructuring
console.log(personName, personAge); // Outputs: Alice 25

console.log("----------------------------");

/* 7. Functions - 
  Block of Code which use again & again, further reuse in future, repeat of code decreases.

  ES5 (3 Parts) - Function Statements, Function Expressions and Anonymous Function
  ES6 (1 Parts) - Fat Arrow Function(3 Parts) - BasicFat Arrow , Fat Arrow with one params, Fat Arrow with Implicit Return

  Parameters - Variables
  Arguments - Real Values

*/

// ---------------- ES5 Functions -----------------------

/* Function Statements - 

function abcd() {

}
abcd()

 */

/* Function Expressions - 

var abcd = function(){

} 

*/

/* Anonymous Functions - IIFE

(function () {})(); 

*/

// ---------------- ES6 Functions -----------------------

/* Fat Arrow Functions -

() => {

};

var xyz = () => {
  
} */

/* Fat Arrow Function Variant - with one parameter

var g = ab =>{

}
g(12)

a => {}; */

/* Fat Arrow Func with implicit return

() => 12;

var mn = () => "Alice";
var ans1 = mn();  */

/* Return - inside functions, it will goes to where function call with our value */

function ret() {
  return 12;
}
var ans2 = ret();
console.log(ans2);

/* Undefined , not-defined and null -

  Undefined - Value , when var is declared, treated as garbage value, default value
  not-defined - Error, not declaration
  null - Value, which resolves like not found

*/


/* Arrays - Reference data types Collection of different data */

/* Loop with array - forEach */

/* Objects - individual's all details */

/* 

  Synchronous (Main stack) - Line by line code executed

  Asynchronous (Side stack) - not executed line by line, all code working together and which will done first, it will executed and goes to side stack and when main stack is empty , it will executed 
   
*/





