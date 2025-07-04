//  Let's work with a company name stored as a string
let company = "novemomenosunorm is a company";

// JavaScript String Methods we can use:
// - at()
// - trim()
// - toString()
// - split()
// - slice()
// - substring()
// - replace()
// - repeat()
// - length
// - toUpperCase()
// - toLowerCase()

//  Example: Splitting the string into characters
// const newStr = company.split('');
// console.log(newStr); // ["n", "o", "v", "e", "m", ..., "y"]

// Examples of using template literals
// ""         → double quotes
// '${7+8}'   → this is just a string, not evaluated
// `${7+8}`   → this evaluates to 15

// Example:
console.log(`${7+8} is the result`); // Output: "15 is the result"


//  Slice & Substring
// slice(start, end) → gets part of string (end not included)
console.log(company.slice(0, 9));       // "novemomen"

// substring(start, end) → similar to slice, but can't take negative indexes
console.log(company.substring(0, 5));   // "novem"

// =====================================
//  Replace and change to uppercase
// replace(old, new) → replaces the first match
const newStr = company.replace('a', 'the');
console.log(newStr.toUpperCase());



