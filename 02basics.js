// let, var, const Example

// Block scope (let)
if (true) {
    let name = "avinash";
    console.log(name); // Output: avinash
}

// Function/Global scope (var)
const age = 200;

if (true) {
    var name = 'avinash';
    console.log(age); // Output: 200
}

console.log(name); // Output: avinash (accessible due to var)

//  Const re-assignment error
// const age = 22;
// age = 30; //  This will throw an error

// Types of Data
// Primitive: string, number, boolean, null, undefined, symbol (immutable)
// Non-primitive: array, object, function (mutable)

//  Mutable Primitive Values
let myAge = 40;
myAge = 20; // re-assignable

//  Array Example

let fruits = ['apple', 'banana'];
fruits.push('papaya');
console.log(fruits); // ['apple', 'banana', 'papaya']

//  Type Coercion Examples

console.log("avinash" + " kumar");         // "avinash kumar"
console.log('hgdgfjgsd' - 2999);           // NaN
console.log('novem' + true);               // "novemtrue"
console.log('novem' + undefined);          // "novemundefined"
console.log('novem' + null);               // "novemnull"
console.log(10 - 1);                       // 9
console.log(10 - true);                    // 9  (true → 1)
console.log(true - null);                  // 1  (null → 0)
console.log("44" + 2);                     // "442" (string + number → string)
console.log("44" - 2);                     // 42   (string - number → number)

//  String Methods

let company = 'novem controls private limited';
let employeeAge = 33;

console.log(company.toUpperCase());        // "NOVEM CONTROLS PRIVATE LIMITED"
console.log(company.toLowerCase());        // "novem controls private limited"
console.log(company.length);               // Length of the string
console.log(company.at(0));                // 'n'
console.log(company.trim());               // Removes leading/trailing spaces
console.log(employeeAge.toString());       // "33"

// Replace a word in a string
// let newStr = company.replace("limited", "limited, mohali");
// console.log(newStr);

console.log(company.repeat(4));            // Repeats the string 4 times
