//  some, every, foreach, filter , map , reduce , sort

// some
let arr = [1,4,3,6,8,4,2,6,7,8,32,5]

console.log(arr.map((item)=>{
    return item*item
})
.reduce( (total , item) =>{
    return total + item
},0 ))



/* 
0 + 1 = 1
1 + 4 = 5
5 + 3 = 8

*/





console.log(arr.sort((a,b)=>b-a))

console.log(arr.map((item, index)=>{
    console.log("current item", item, " current index ",index)
    return item>10
}))











console.log(arr.map((item)=>{
    return item*item
}))


let arrr = [ 1,4,9,25,36,49]

console.log(arrr.map((item)=>{
    return item**(1/2)
}))


// // 2^3 == 8
// //  4^1/2 = 2
// //  ^ **


console.log(arr.forEach((item)=>{
    console.log(item*item)
}))




console.log(arr.some((item)=>{
    return item %2 ==0
}))


console.log(arr.every((item)=>{
    return item %2 ==0
}))

//task6.js

//  arr = ["apple","banana","kiwi"] => ["APPLE","BANANA","KIWI"]
//  find the max value from the arr [13,34,2,54,6,7]
// find the total price of the cart

let cart=[
    {
        name:'apple',
        price:500
    },
   
    {
        name:'banana',
        price:50
    },
   
    {
        name:'kiwi',
        price:5000
    },
   
]