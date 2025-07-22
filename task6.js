let arr1 =["apple","banana","kiwi","fig"]
console.log(arr1.map((item)=>{
    if(item.length > 3){
        return item.toUpperCase();
    } else {
        return item;
    }
}))


//  find the max value from the arr [13,34,2,54,6,7]
let arr2= [13,34,2,54,6,7];
console.log(arr2.reduce((acc, item) => {
    if (item > acc) {
        return item;
    }       
    return acc;
}, 0))


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
console.log(cart.reduce((acc,item)=>{
    return acc + item.price;
}, 0));
