//  JavaScript Loops Overview

// Manual Repetition (not ideal)

 console.log(1);
 console.log(2);
 console.log(3);

//  Loop Types in JS:
// while, do-while, for

//  while loop
let n = 0;
 while (n < 10) {
     console.log(n);
    n++;
 }

//  do...while loop

// Example: Print odd numbers from 0 to 9
 do {
     if (n % 2 !== 0) {
         console.log(n);
     }
     n++;
 } while (n < 10);

// Task: Print even numbers using do...while
 do {
     if (n % 2 === 0) {
        console.log(n);
    }
    n++;
} while (n < 10);

//  for loop syntax:
// for (initialization; condition; increment/decrement) {
//     logic
// }

// Example: Print even numbers from 0 to 9
 for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) console.log(i);
}

// 🧺 Loop through an array

const arr = ['apple', 'banana', 'papaya'];

 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
