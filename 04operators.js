// Arithmetic Operators

// Used for basic math operations
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Exponentiation (power)
// ++  Increment
// --  Decrement

// Example:
// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a % b); // 1
// console.log(a ** b); // 1000 (10^3)

//  Assignment Operators

// Used to assign or update values
// =    Assign
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign
// %=   Modulus and assign

// Example:
let x = 5;
x -= 5;  // same as x = x - 5
console.log(x); // 0

//  Comparison Operators

// ==   Equal to (value only)
// ===  Strict equal to (value and type)
// !=   Not equal to
// !==  Strict not equal to
// >, <, >=, <=  (greater/less than, etc.)

// Example:
console.log(9 == "9");  // true (value is equal)
console.log(9 === "9"); // false (type is different)

//  Logical Operators

// &&   AND (both must be true)
// ||   OR (either one is true)
// !    NOT (opposite value)

// Example:
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a);     // false

// Ternary Operator
// Syntax: condition ? value_if_true : value_if_false

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"
