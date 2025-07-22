let arr=[1,4,9,16,25,36,49];
// let new_arr = arr.map((item)=>{
//     return item**0.5;
// })
// console.log(new_arr); 
console.log(arr.reduce((product, item) => {
    return product * item;
}, 1));
